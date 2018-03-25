# Eat-Da-Burger

## Overview
A simple Node/Handlebars application developed for the UNC Coding Bootcamp. It allows users to use persistant data to log the types of burgers they would like to devour, and inventory those burgers they have already consumed.

### Technologies Used
- [Node.js and npm](https://nodejs.org/en/download/ "Download Node.js and npm"). First, this application relies on both Node.js and npm to download Node packages and to run the application. Users can download the latest versions of both using the link to the left.
- [MySQL](https://www.mysql.com/ "MySQL") - This application assumes users have both MySQL installed, and the [MySQL npm Package](https://www.npmjs.com/package/mysql "MySQL npm Package") installed as well. 
- [Handlebars](https://handlebarsjs.com/ "Handlebars") - Handlebars is a templating engine for Node that serves up views easily.
- [Sequelize](http://docs.sequelizejs.com/ "Sequelize documentation") - A very useful ORM for managing relational databases.

### Downloading This Application
To use this application:

1. Ensure that Node.js, npm, and MySQL are installed on your machine. For instructions, see the Technologies Used section below.
- Next, clone this repo to your local machine:
```
git clone git@github.com:stoversa/burger.git
```
2. Open the repo and execute in the bash terminal. Doing so should install the cTable, inquirer, and MySQL npm packages:
```
npm i
```
3. Navigate to the db folder of the repo:
```
cd db
```
4. Open up MySQL in the terminal:
```
mysql -u root -p
```

5. Enter the following command to create your database:
```
source schema.sql
```

6. Exit MySQL
```
exit
```

7. Update the connections.js file with your MySQL credentials. Failing to do this will not allow the application to run properly.

8. Run the application from the command line:
```
node server.js
```