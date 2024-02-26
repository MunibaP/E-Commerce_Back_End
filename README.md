<div align ="center">

# E-Commerce Back End

![License Badge](https://shields.io/badge/license-MIT-blue)
</div>

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Contributions](#contributions)
- [Tests](#tests)
- [Links](#links)
- [Contact Information](#contact-information)
- [License](#license)

## Description
Welcome to my e-commerce backend project! In this week's challenge, as a transitional web developer I was tasked with creating an e-commerce backend application. This project is a fully functional backend server designed to support an e-commerce website. It provides essential functionality for hosting the website and managing various operations, such as creating, updating, reading, and deleting data. By leveraging technologies like Express.js and Sequelize, this project ensures smooth connectivity to databases and efficient handling of requests from both owners and users. In essence, the goal is to empower businesses to establish and maintain successful online stores in today's competitive e-commerce landscape.

## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Technologies
The technologies I used in this challenge includes:

1. Node.js
2. Express.js [v4.17.1]
3. Sequelize [v5.21.7]
4. Node MySQL2 [v2.1.0]
5. Dotenv [v8.2.0]
4. Visual Studio Code(VS-code)
5. Github: Github was used to create a repository which includes the links to the projects, server.js, package.json, schema.sql, seeds folder, routes folder, model folder and the README file.
6. Gitlab: Gitlab was used to clone the project to our laptop.

## Installation
1. To install the challenge#13 , first create a new repository in your Github account, and then clone this repository to your local computer. 
```
To clone: git clone https://github.com/your-username/repository-name.git   
```           
2. Install Express.js [v4.16.4].

3. Install Sequelize [v5.21.7], Node MySQL2 [v2.1.0], and Dotenv [v8.2.0].

4. Open the cloned repository in a visual studio code.
 
5. Open integrated terminal on server.js in order to run "npm install" on the command line to install dependencies. In addition, create a gitignore file, which should includes node_modules, .env file, and .DS_Store.   

## Usage
1. Open the repository, run 'npm install' to install dependencies and update the '.env file'.

2. To initiate the database setup, utilize the schema.sql file located in the db folder by executing MySQL shell commands. Similarly, use the environment variable to store sensitive data like your MySQL username, password, and database name. 

3. Use the command 'npm run seed' to populate the database with test data. Afterwards, initiate the server and synchronize the Sequelize models with the MySQL database by running 'npm start' or 'nodemon'.

4. Create a development database with sample data by utilizing the schema and seed commands.

5. Using Insomnia, test the API's GET, POST, PUT, and DELETE routes for categories, products, and tags. Verify that data can be successfully created, updated, and deleted within the database.

## Screenshot
![insomnia_test_1](/Assets/insomnia_test_1.png)

![insomnia_test_1](/Assets/insomnia_test_2.png)


## Contributions
Contributions to the E-Commerce Back End are welcome and encouraged. Here are some ways you can contribute:

1. **Bug Reports and Feature Requests:**
  - If you encounter any issues or have suggestions for new features, please open an issue on the GitHub repository.
    
2. **Enhancements to E-Commerce Back End Application:**
  -  We welcome contributions aimed at improving E-Commerce Back End aaplication. If you find ways to enhance the application or identify any limitations, feel free to submit a pull request.

3. **Documentation Improvements:**
  - Help improve the clarity and completeness of this documentation. If you find areas that need clarification or additional information, submit a pull request with your suggested changes.     

## Tests
There are no tests required for this project.

## Links
- Video Link: [E-Commerce Back End walkthrough video]()
- [GitHub repository](https://github.com/MunibaP/Note_Taker.git)
  
## Questions
I appreciate and encourage any questions you may have. Feel free to reach out for further information.
  
## Contact Information
- GitHub: [MunibaP](https://github.com/MunibaP)
- Email: munibapervez596@gmail.com

## License
Please refer to [MIT]() to acquire details about this license 

### Copyright © 2024 Muniba Pervez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.