ApnoAI – Task 1
Intern Performance and Engagement Data Analysis Using Python
1. Project Overview
This project analyses a structured dataset of 50 interns across three learning tracks: Web Development, Data Analytics, and AI / ML. The dataset contains information about each intern's active days, completed tasks, quiz score, practice questions, weekly study hours, and satisfaction status.
Python data-analysis libraries are used to inspect the dataset, calculate descriptive statistics, and create visualisations. The analysis explores patterns between learning activity, task completion, quiz performance, and intern satisfaction.
The dataset is defined directly in the Python script for this exercise; it is not presented as a verified real-world organisational dataset.
2. Objectives
Load and inspect a structured intern dataset using Pandas.
Examine the distribution of interns across learning tracks.
Summarise activity, task completion, quiz scores, practice questions, and weekly study hours.
Check for missing values and review descriptive statistics.
Visualise distributions and relationships between selected variables.
Identify exploratory patterns in intern participation, performance, and satisfaction.
3. Technologies Used
Python 3
Pandas
Matplotlib
Seaborn
Google Colab, Jupyter Notebook, or another Python-compatible environment
Git and GitHub for version control and project submission
4. Features
Includes records for 50 interns.
Covers three learning tracks: Web Development, Data Analytics, and AI / ML.
Displays dataset information, descriptive statistics, and missing-value counts.
Summarises intern counts by track and satisfaction status.
Creates visualisations for:
Interns by learning track.
Quiz score distribution.
Number of tasks completed.
Weekly study hours versus quiz scores.
Active days versus satisfaction.
Average quiz score by learning track.
Prints key exploratory insights from the dataset.
5. Project Structure
```text
intern-performance-analysis/
├── Task 1.py
└── README.md
```
6. Installation and Setup
Install Python 3.
Install the required libraries:
```bash
pip install pandas matplotlib seaborn
```
Download or clone the repository.
Open `Task 1.py` in Google Colab, Jupyter Notebook, or a compatible Python environment.
Run the script or notebook cells in order.
The script uses `display()` for tabular previews, so a notebook environment such as Google Colab or Jupyter is recommended.
7. Usage
Open the project in Google Colab or Jupyter Notebook.
Run the library-import section.
Execute the dataset creation section.
Review the dataset preview, information, descriptive statistics, and missing-value summary.
Run the visualisation sections to inspect the charts.
Review the printed key insights and average quiz score by track.
8. Analysis and Visualisation
Pandas is used for data loading, tabulation, grouping, and descriptive analysis. Seaborn and Matplotlib are used to create charts that make distributions and relationships easier to inspect.
The script explores whether higher weekly study hours are generally associated with higher quiz scores, whether active days vary with satisfaction, and how quiz performance differs across learning tracks. These are exploratory patterns in the supplied dataset and should not be interpreted as proof of causation.
9. Learning Outcomes
This project provides practical experience with data-frame creation, data inspection, descriptive statistics, missing-value checks, grouping, and data visualisation. It also demonstrates how charts can support exploratory analysis and how observations should be interpreted carefully without assuming that correlation establishes causation.
10. Conclusion
The project demonstrates a basic end-to-end Python data-analysis workflow using an intern engagement and performance dataset. It combines data inspection, summary statistics, and visualisation to explore participation, performance, and satisfaction patterns.
Author  
M. Ayshwarya
