CREATE TABLE cal_event (
    cal_event_id SERIAL PRIMARY KEY,
    user_id int references users(user_id),
    cal_event_title VARCHAR(250),
    cal_event_location VARCHAR(150),
    cal_start date,
    cal_end date
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(250) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(250) NOT NULL
);