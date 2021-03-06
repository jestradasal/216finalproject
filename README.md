# Associations between North Carolina SAT Scores and Various Demographic Variables

Using data from the North Carolina Public Schools website, we explore the relationship between average household income, dropout rates, percent of students on free lunch, and race in each of North Carolina’s school districts and recent SAT scores. We aim to find a correlation or association in our variables in the last five years, 2013 until 2017. 

***

## 1. Recreating the Database

### 1.1 Converting from Excel to CSV

Each of our dataset was first obtained by downloading data online as Excel files. We then cleaned the dataset and converted them to CSV files so that we can copy the data into our postgreSQL database.

### 1.2 Using PostgreSQL

We created a database called north_carolina by running the following command. 

```sql
CREATE DATABASE north_carolina;
```

### 1.3 Creating Tables and using /copy

The following files that were used to create our tables are stored in our sql_create folder. create_tables.sql has all of our ```CREATE TABLE ``` expressions and convertCSVtoSQL.sql converts our CSV files to these tables.

***

## 2. Our data using Python 

### 2.1 Jupyter Notebook Files 

We have several Jupyter notebook files which connected our postgreSQL database so we can wrangle with the data
using Python. To view our database, open the database.ipynb file. To view our linear regression models and graphs, open the mlr.ipynb file. 

***

## 3. Viewing the Map

To view the map, click on the following link: [Map Visualization](https://jestradasal.github.io/216finalproject/).

Once on the map, you can hover and click over any county to see information for the given county change. Also, to see the differences in years, move the slider bar and click on the different buttons to see how it changes the map. 




