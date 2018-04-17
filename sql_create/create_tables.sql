CREATE TABLE median_income 
(
    county character(25) NOT NULL,
    "2012" double precision,
    "2013" double precision,
    "2014" double precision,
    "2015" double precision,
    "2016" double precision,
    "2017" double precision

);

CREATE TABLE sat_scores 
(
    county character(25) NOT NULL,
    Math_2011 float(4),
    CR_2011 float(4),
    Writing_2011 float(4),
    Total_2011 float(4),
    Math_2012 float(4),
    CR_2012 float(4),
    Writing_2012 float(4),
    Total_2012 float(4),
    Math_2013 float(4),
    CR_2013 float(4),
    Writing_2013 float(4),
    Total_2013 float(4),
    Math_2014 float(4),
    CR_2014 float(4),
    Writing_2014 float(4),
    Total_2014 float(4),
    Math_2015 float(4),
    CR_2015 float(4),
    Writing_2015 float(4),
    Total_2015 float(4),
    Math_2016 float(4),
    CR_2016 float(4),
    Writing_2016 float(4),
    Total_2016 float(4),
    ERW_2017 float(4),
    Math_2017 float(4),
    Total_2017 float(4)
);

CREATE TABLE races
(
    county character(25) NOT NULL,
    hispanic_2013 double precision, 
    black_2013 double precision, 
    white_2013 double precision, 
    other_2013 double precision, 
    total_2013 double precision,
    hispanic_2014 double precision, 
    black_2014 double precision, 
    white_2014 double precision, 
    other_2014 double precision, 
    total_2014 double precision, 
    hispanic_2015 double precision, 
    black_2015 double precision, 
    white_2015 double precision, 
    other_2015 double precision, 
    total_2015 double precision, 
    hispanic_2016 double precision, 
    black_2016 double precision, 
    white_2016 double precision, 
    other_2016 double precision, 
    total_2016 double precision, 
    hispanic_2017 double precision, 
    black_2017 double precision, 
    white_2017 double precision, 
    other_2017 double precision, 
    total_2017 double precision
);

CREATE TABLE dropout_rates 
(
    county character(25) NOT NULL,
    "2013" float(4),
    "2014" float(4),
    "2015" float(4),
    "2016" float(4),
    "2017" float(4)
);

CREATE TABLE free_lunch 
(
    county character(25) NOT NULL,
    avg_2013 double precision, 
    free_2013 double precision, 
    percent_2013 double precision, 
    avg_2014 double precision, 
    free_2014 double precision, 
    percent_2014 double precision,
    avg_2015 double precision, 
    free_2015 double precision, 
    percent_2015 double precision,
    avg_2016 double precision, 
    free_2016 double precision, 
    percent_2016 double precision,
    avg_2017 double precision, 
    free_2017 double precision, 
    percent_2017 double precision
);