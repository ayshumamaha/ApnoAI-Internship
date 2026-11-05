# AI Career Copilot – Resume Analyzer

## 1. Project Overview

AI Career Copilot is a web-based application designed to assist users in evaluating and improving their resumes using artificial intelligence.

The application allows users to submit their resume content for analysis. It uses the Gemini API to process the resume and generate structured feedback, including an estimated ATS-style score, resume summary, identified strengths, missing keywords, and suggestions for improvement.

The project combines frontend web development with an AI-powered backend to demonstrate how generative AI can be integrated into a practical career-support application.

## 2. Objectives

The main objectives of this project are:

- To develop an AI-powered resume analysis application.
- To understand how generative AI APIs can be integrated into web applications.
- To analyse resume content using an AI model.
- To generate structured feedback to help users improve their resumes.
- To identify strengths and missing keywords in resume content.
- To understand frontend and backend integration.
- To implement secure API-key handling through environment variables.

## 3. Technologies Used

The project uses the following technologies:

- **HTML:** Structures the web application.
- **CSS:** Provides styling and layout.
- **JavaScript:** Handles frontend interactions and API communication.
- **Gemini API:** Provides AI-powered resume analysis.
- **Vercel:** Supports deployment and serverless backend functionality.
- **Node.js:** Supports the backend API environment.

## 4. Features

The application includes the following features:

- **Resume Analysis:** Allows users to submit resume content for AI-based evaluation.
- **ATS-Style Score:** Generates an estimated resume score to provide an indication of resume quality.
- **Resume Summary:** Produces a concise overview of the submitted resume.
- **Strength Identification:** Highlights positive aspects of the resume.
- **Missing Keyword Detection:** Identifies potentially relevant keywords that may be absent.
- **Improvement Suggestions:** Provides recommendations for improving resume content.
- **AI Integration:** Uses the Gemini API to process and analyse resume information.
- **Web Interface:** Provides a frontend through which users can interact with the application.
- **Serverless API:** Uses a backend endpoint to handle analysis requests.

## 5. Project Structure

```text
AI-Career-Copilot/
│
├── api/
│   └── analyze.js
│
├── public/
│   └── index.html
│
├── README.md
│
└── package.json
```

**File Description:**

- `api/analyze.js` – Handles backend requests and communicates with the Gemini API.
- `public/index.html` – Contains the web application interface.
- `package.json` – Defines project dependencies and configuration.
- `README.md` – Provides project documentation and setup instructions.

The exact folder and file arrangement should be checked against the supplied project ZIP before deployment.

## 6. Installation and Setup

### Prerequisites

Ensure that the following are available:

- Node.js
- npm
- A Gemini API key
- A Vercel account for deployment

### Step 1: Extract the Project

Extract the downloaded project ZIP into a working directory.

### Step 2: Open the Project

Open the extracted project folder using Visual Studio Code or another code editor.

### Step 3: Install Dependencies

If a `package.json` file is present, open the terminal in the project directory and run:

```bash
npm install
```

### Step 4: Configure the Gemini API Key

Obtain a Gemini API key and configure it as an environment variable.

Use the following variable name:

```text
GEMINI_API_KEY
```

For local development, store the key in an environment configuration file if supported by the project. Do not expose the API key in frontend JavaScript or commit it to a public repository.

### Step 5: Deploy Using Vercel

1. Sign in to Vercel.
2. Import the project repository or upload the project through a supported deployment workflow.
3. Configure the `GEMINI_API_KEY` environment variable in the project settings.
4. Deploy the application.
5. Open the deployment URL and test the application.

## 7. Usage

1. Open the deployed AI Career Copilot application.
2. Enter or submit the resume content through the provided interface.
3. Initiate the resume analysis.
4. The frontend sends the request to the backend analysis endpoint.
5. The backend processes the request using the Gemini API.
6. The AI-generated response is returned to the frontend.
7. Review the generated resume summary, estimated score, strengths, missing keywords, and improvement suggestions.
8. Use the feedback to identify areas where the resume may be improved.

**Note:** The ATS-style score is an AI-generated estimate and should not be treated as an official score from an employer's applicant tracking system.

## 8. Error Handling and Analysis

The application depends on communication between the frontend, backend API, and Gemini service.

Potential issues include:

- **Missing API Key:** The application may fail to generate results if the Gemini API key is not configured correctly.
- **API Request Failure:** Network issues or service errors may interrupt analysis.
- **Invalid Input:** Empty or unsuitable resume content may prevent meaningful analysis.
- **API Limitations:** Requests may fail if usage limits or service restrictions are reached.
- **Response Handling:** The frontend must correctly process the response returned by the backend.

The API key should be stored securely as an environment variable. It should never be placed directly in publicly accessible frontend code.

Users should also avoid submitting sensitive personal information unless they understand how the application and its AI provider process submitted data.

## 9. Learning Outcomes

Through this project, the following skills were developed:

- Understanding frontend web development using HTML, CSS, and JavaScript.
- Learning how frontend and backend components communicate.
- Integrating generative AI into a web application.
- Working with the Gemini API.
- Understanding API requests and responses.
- Implementing serverless backend functionality.
- Managing API keys through environment variables.
- Understanding application deployment using Vercel.
- Exploring practical applications of AI in career development.

## 10. Conclusion

AI Career Copilot demonstrates how artificial intelligence can be integrated into a web-based application to support resume evaluation and improvement.

By combining frontend technologies, backend API functionality, and the Gemini API, the project provides an interactive approach to analysing resume content and generating useful feedback.

The project also provides practical experience in API integration, full-stack application development, environment configuration, and cloud deployment.

Overall, AI Career Copilot demonstrates the potential of generative AI in developing accessible tools for career preparation and professional development.

---

**Author:** M. Ayshwarya
