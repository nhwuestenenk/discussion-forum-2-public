This repository contains the code for the discussion platform used in the article "The influence of group membership on online expressions and polarization on a discussion platform: an experimental study" published in New Media and Society. 

Authors: Nick Wuestenenk, Frank van Tubergen and Tobias Stark. 
Contact: Nick Wuestenenk (n.h.wuestenenk@uu.nl). 

The code has been updated to that you can run the discussion plaform on your local environment. 

Steps to start it:
- Install Nodejs if you haven't already done so.
- Run `npm install` in this folder to install the required packages.
- Run `npx sequelize-cli db:seed:all --debug` in this folder to import the posts, comments, users, upvotes and downvotes of the discussion in the database.
- Run `node ./bin/www.js` in this folder to start the server.
- Go to http://localhost:8080/?qualtricsId=1 (we use qualtricsId=1 to bypass all user verifcation we did in the original study)

Difference with this version and the original version used for the article:
- This version uses an unsecured website ("http://" instead of "https://").
- Sqlite is used as the database so you don't need to install MySql.
- No user verification

From MySql to Sqlite:
- The original MySql (sequelize) seeders (users, comments, posts etc.) can be found in "/seeders".
- The original MySql database structure can be found in "struct.mysql".
- The Sqlite database data generated from the MySql structure and seeders is in "sqlite3.db" (an unreadable binary file).