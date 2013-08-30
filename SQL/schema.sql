CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  usernames VARCHAR(12),
  messages VARCHAR(140),
  createdAt DATE
);

/* You can also create more tables, if you need them... */

/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/
