# Associations between North Carolina SAT Scores and Various Demographic Variables

Using data from the North Carolina Public Schools website, we explore the relationship between average household income, dropout rates, percent of students on free/reduced lunch, and race and gender in each of North Carolina’s school districts and recent SAT scores. We aim to find a correlation or association in our variables in the last five years, 2013 until 2017. 

***

## 1. Creating the Database

### 1.1 Converting from Excel to CSV

Each of our dataset was first obtained by downloading data online as Excel files. We then cleaned the dataset and converted them to CSV files so that we can copy the data into our postgreSQL database.

### 1.2 Creating the Database

We created a database called north_carolina by running the following command. 

```sql
CREATE DATABASE north_carolina;
```

The following files that were used to create our tables are stored in our sql_create folder. create_tables.sql have all of our CREATE TABLE SQL expressions and convertCSVtoSQL.sql converts our CSV files to these tables.

***

## 2 Our data using Python 

### 2.1 Jupyter Notebook Files 

We have several Jupyter notebook files which connected our postgreSQL database so we can wrangle with the data
using Python. To view our database, open the database.ipynb file. To view our linear regression models, open the mlr.ipynb file. 

### 2.2 Viewing the Map

To view the map, copy and paste the following link into your browser: [Map Visualization](jestradasal.github.io).




