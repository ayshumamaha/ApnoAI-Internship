# Iris Flower Classification Using Machine Learning

## 1. Project Overview

The Iris Flower Classification project focuses on developing a machine learning model that can classify iris flowers into different species based on their physical measurements.

The project uses the well-known Iris dataset available through the Scikit-learn library. It contains measurements of sepal length, sepal width, petal length, and petal width for three iris species: Setosa, Versicolor, and Virginica.

A Decision Tree Classifier is implemented to learn patterns from the dataset and predict the species of flowers using their measurements.

The project also explores model performance under different training and testing configurations.

## 2. Objectives

The main objectives of this project are:

- To understand the fundamentals of supervised machine learning.
- To explore and analyse the Iris dataset.
- To preprocess the dataset for model training.
- To implement a Decision Tree Classification model.
- To evaluate model performance using training and testing data.
- To examine classification accuracy and prediction errors.
- To compare model performance under different experimental configurations.

## 3. Technologies Used

The project uses the following technologies and libraries:

- **Python:** Main programming language.
- **Pandas:** Data handling and manipulation.
- **NumPy:** Numerical operations.
- **Matplotlib:** Data visualisation.
- **Seaborn:** Statistical visualisation.
- **Scikit-learn:** Dataset loading, data splitting, machine learning, and model evaluation.
- **Jupyter Notebook / Google Colab:** Development and execution environment.

## 4. Features

The project includes the following features:

- **Dataset Loading:** Uses the built-in Iris dataset from Scikit-learn.
- **Dataset Exploration:** Examines the dataset, features, target classes, and dimensions.
- **Data Splitting:** Divides the dataset into training and testing subsets using stratified sampling.
- **Decision Tree Classification:** Implements a Decision Tree Classifier with a maximum depth of 4.
- **Model Evaluation:** Calculates training and testing accuracy.
- **Prediction Analysis:** Compares predicted flower species with actual labels.
- **Performance Comparison:** Tests different training and testing proportions.
- **Model Comparison:** Evaluates a Random Forest Classifier as an additional model.

## 5. Project Structure

```text
Iris-Flower-Classification/
│
├── Task 2.ipynb
└── README.md
```

**File Description:**

- `Task 2.ipynb` – Contains the complete Jupyter Notebook, including dataset exploration, preprocessing, model training, prediction, and evaluation.
- `README.md` – Provides project documentation and instructions.

## 6. Installation and Setup

### Prerequisites

Ensure that Python 3.x is installed.

### Install Required Libraries

Run the following command:

```bash
pip install numpy pandas matplotlib seaborn scikit-learn jupyter
```

### Open the Notebook

The notebook can be executed using:

- Jupyter Notebook
- Google Colab
- JupyterLab

### Launch Jupyter Notebook

```bash
jupyter notebook
```

Open `Task 2.ipynb` and execute the cells sequentially.

## 7. Usage

1. Open `Task 2.ipynb`.
2. Import the required Python libraries.
3. Load the Iris dataset using Scikit-learn.
4. Explore the dataset and its features.
5. Separate the input features and target labels.
6. Divide the dataset into training and testing subsets.
7. Train the Decision Tree Classifier.
8. Generate predictions using the testing dataset.
9. Evaluate the model using accuracy and prediction comparisons.
10. Examine the additional experiments and model comparison.

### Experimental Results

The notebook reports the following results:

| Evaluation | Accuracy |
|---|---:|
| Decision Tree – Training Accuracy | 99.2% |
| Decision Tree – Testing Accuracy | 93.3% |
| Random Forest – Testing Accuracy | 90.0% |

The Decision Tree model correctly classified 28 out of 30 testing samples.

The notebook also evaluates different test-set proportions:

| Test Set Proportion | Accuracy |
|---|---:|
| 20% | 86.7% |
| 30% | 93.3% |
| 40% | 95.0% |
| 25% | 88.0% |

These results demonstrate how model performance can vary depending on the training and testing configuration.

## 8. Error Handling and Analysis

The project evaluates model performance through training and testing accuracy.

- The dataset is divided using stratified sampling to preserve class representation.
- Model predictions are compared against actual flower labels.
- Misclassified samples are examined to understand prediction errors.
- Different test-set proportions are evaluated to observe performance variation.
- A Random Forest model is used for additional comparison.

The Decision Tree model achieved 93.3% testing accuracy in the primary experiment. Two of the 30 testing samples were incorrectly classified: one Versicolor sample was predicted as Virginica, and one Virginica sample was predicted as Versicolor.

The results should be interpreted in the context of the small Iris dataset. Accuracy from this experiment does not automatically indicate equivalent performance on larger or unrelated datasets.

## 9. Learning Outcomes

Through this project, the following skills were developed:

- Understanding supervised machine learning.
- Working with datasets using Scikit-learn.
- Understanding features, labels, and classification.
- Splitting data into training and testing subsets.
- Implementing Decision Tree and Random Forest classifiers.
- Evaluating machine learning models using accuracy.
- Analysing prediction errors and classification performance.
- Understanding how experimental configurations affect model evaluation.

## 10. Conclusion

The Iris Flower Classification project demonstrates the application of supervised machine learning to a multi-class classification problem.

By using the Iris dataset and implementing a Decision Tree Classifier, the project successfully demonstrates the process of data exploration, model training, prediction, and performance evaluation.

The additional experiments and Random Forest comparison provide further understanding of how different model configurations can influence classification performance.

Overall, the project provides practical experience in implementing and evaluating machine learning algorithms using Python and Scikit-learn.

---

**Author:** M. Ayshwarya
