import numpy as np
from scipy.integrate import solve_ivp

# --- System Parameters ---
I = np.diag([100.0, 75.0, 80.0])
I_inv = np.linalg.inv(I)
K = 5.0
P = 10.0 * np.eye(3)
f = 0.05
L_ext = np.array([0.5, -0.3, 0.2])

# Initial Conditions
sigma0 = np.array([0.1, 0.2, -0.1])
omega0 = np.radians([30.0, 10.0, -20.0])
state0 = np.concatenate([sigma0, omega0])

# --- Kinematic & Helper Functions ---
def tilde(v):
    return np.array([
        [0, -v[2], v[1]],
        [v[2], 0, -v[0]],
        [-v[1], v[0], 0]
    ])

def B_matrix(sigma):
    s_sq = np.dot(sigma, sigma)
    return (1.0 - s_sq) * np.eye(3) + 2.0 * tilde(sigma) + 2.0 * np.outer(sigma, sigma)

def mrp_subtraction(sigma_B, sigma_R):
    """Computes tracking error MRP sigma_{B/R}"""
    sB_sq = np.dot(sigma_B, sigma_B)
    sR_sq = np.dot(sigma_R, sigma_R)
    dot_prod = np.dot(sigma_B, sigma_R)
    denom = 1.0 + sB_sq * sR_sq + 2.0 * dot_prod
    num = (1.0 - sR_sq) * sigma_B - (1.0 - sB_sq) * sigma_R + 2.0 * np.cross(sigma_B, sigma_R)
    sigma_BR = num / denom
    
    # Check shadow set for error MRP
    if np.dot(sigma_BR, sigma_BR) > 1.0:
        sigma_BR = -sigma_BR / np.dot(sigma_BR, sigma_BR)
    return sigma_BR

def get_ref_states(t):
    """Analytical Reference Trajectory and Derivatives"""
    sigma_R = np.array([0.2 * np.sin(f*t), 0.3 * np.cos(f*t), -0.3 * np.sin(f*t)])
    d_sigma_R = f * np.array([0.2 * np.cos(f*t), -0.3 * np.sin(f*t), -0.3 * np.cos(f*t)])
    dd_sigma_R = (f**2) * np.array([-0.2 * np.sin(f*t), -0.3 * np.cos(f*t), 0.3 * np.sin(f*t)])
    
    # Kinematic mappings to angular velocity & acceleration
    B_R = B_matrix(sigma_R)
    omega_R = 4.0 * np.linalg.solve(B_R, d_sigma_R)
    
    # Numerical/Analytical derivative of omega_R
    s_sq = np.dot(sigma_R, sigma_R)
    s_ds = np.dot(sigma_R, d_sigma_R)
    dB_R = -2.0 * s_ds * np.eye(3) + 2.0 * tilde(d_sigma_R) + 2.0 * (np.outer(d_sigma_R, sigma_R) + np.outer(sigma_R, d_sigma_R))
    domega_R = 4.0 * np.linalg.solve(B_R, dd_sigma_R - dB_R @ (0.25 * omega_R))
    
    return sigma_R, omega_R, domega_R

# --- Simulation Dynamics Generators ---
def create_dynamics(q_type):
    def dynamics(t, state):
        sigma_B = state[:3]
        omega_B = state[3:]
        
        # Enforce Shadow Set Switch
        if np.dot(sigma_B, sigma_B) > 1.0:
            sigma_B = -sigma_B / np.dot(sigma_B, sigma_B)
            
        sigma_R, omega_R, domega_R = get_ref_states(t)
        sigma_BR = mrp_subtraction(sigma_B, sigma_R)
        omega_BR = omega_B - omega_R
        
        # Controller Selection
        if q_type == 5:
            u = -K * sigma_BR - P @ omega_BR
            L_applied = np.zeros(3)
        elif q_type == 6:
            u = -K * sigma_BR - P @ omega_BR + I @ (domega_R - np.cross(omega_B, omega_R)) + tilde(omega_B) @ (I @ omega_B)
            L_applied = L_ext  # Uncompensated external torque
        elif q_type == 7:
            u = -K * sigma_BR - P @ omega_BR + I @ (domega_R - np.cross(omega_B, omega_R)) + tilde(omega_B) @ (I @ omega_B) - L_ext
            L_applied = L_ext  # Fully compensated external torque

        d_sigma_B = 0.25 * B_matrix(sigma_B) @ omega_B
        d_omega_B = I_inv @ (-np.cross(omega_B, I @ omega_B) + u + L_applied)
        
        return np.concatenate([d_sigma_B, d_omega_B])
    return dynamics

# --- Execution & Results ---
times_to_check = {5: 20.0, 6: 80.0, 7: 70.0}

for q in [5, 6, 7]:
    target_time = times_to_check[q]
    sol = solve_ivp(create_dynamics(q), [0, 120], state0, max_step=0.01, rtol=1e-9, atol=1e-9)
    
    # Extract state at target time
    idx = np.argmin(np.abs(sol.t - target_time))
    sig_B = sol.y[:3, idx]
    sig_R, _, _ = get_ref_states(sol.t[idx])
    sig_BR = mrp_subtraction(sig_B, sig_R)
    
    norm_val = np.linalg.norm(sig_BR)
    print(f"Question {q} Answer at t={target_time}s: {norm_val:.6f} (or rounded: {norm_val:.4f})")
