\copy sat_scores(county, math_2011, cr_2011, writing_2011, total_2011,
math_2012, cr_2012, writing_2012, total_2012,
math_2013, cr_2013, writing_2013, total_2013,
math_2014, cr_2014, writing_2014, total_2014,
math_2015, cr_2015, writing_2015, total_2015,
math_2016, cr_2016, writing_2016, total_2016,
erw_2017, math_2017, total_2017
) FROM '/home/ar358/final_project/sat_scores.csv' DELIMITER ',' CSV HEADER;


\copy dropout_rates(county, "2013", "2014", "2015", "2016", "2017") FROM '/home/ar358/final_project/dropout_rates.csv ' DELIMITER ',' CSV HEADER;

\copy income(county, "2012", "2013", "2014", "2015", "2016", "2017")  
FROM  '/media/sf_cs216/final_project/csv files/median_income.csv ' DELIMITER ',' CSV HEADER;

\copy free_lunch(county, avg_2013, free_2013, percent_2013, avg_2014, free_2014, percent_2014, 
avg_2015,  free_2015, percent_2015, avg_2016, free_2016, percent_2016, avg_2017, free_2017, percent_2017) FROM '/home/ar358/final_project/free_lunch.csv' 
DELIMITER ',' CSV HEADER; 

\copy races(county, hispanic_2013, black_2013, white_2013, other_2013, total_2013, hispanic_2014, black_2014, white_2014, other_2014, total_2014, hispanic_2015, 
black_2015, white_2015, other_2015, total_2015, hispanic_2016, black_2016, white_2016, other_2016, total_2016, hispanic_2017, black_2017, white_2017, other_2017, total_2017)
FROM '/home/ar358/final_project/races_2013-2017.csv' DELIMITER ',' CSV HEADER;

-- if error invalid byte sequence for encoding UTF8: 
-- SET client_encoding = 'ISO_8859_5';