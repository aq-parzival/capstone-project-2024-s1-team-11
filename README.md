# Project Name: Maths Rocks

Deployed Website: http://13.211.213.56/  (UPDATE: NO LONGER DEPLOYED)

Project Report: https://docs.google.com/document/d/1cSgQvvblX7qky8wv3vqDdA7suEtV0H2LmVCQVZg5f9I/edit?usp=sharing 

Our project provides Kiwi kids with an engaging educational web application that works in tandem with the real world hobby of searching for painted rocks, making positive associations between maths, treasure hunting, fun and discovery.

## Technologies Used

Technologies used to build the project (include the languages used, the libraries and their versions).

- JavaScript
- Vanilla CSS
- [React 18.2.66](https://react.dev/) installed with [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/en/main)
- [emailjs 4.3.3](https://www.emailjs.com/)
- [Quill Rich Text Editor](https://quilljs.com/) 
- [PostgreSQL](https://www.postgresql.org/)
- [pgAdmin 4](https://www.pgadmin.org/)
- [Express 4.19.2](https://expressjs.com/) 
- [Node.js](https://nodejs.org/en)

## Installation Instructions

Instructions on how to install and setup the project (specify all dependencies).

**Prerequisites**

- Install [Node.js](https://nodejs.org/en/download).
- Install PostgreSQL and PgAdmin.
- Create a new database with PostgreSQL, name the database as "maths_rocks".
  
**Client Folder (Fronted)**

- In your command line, cd to the *client* folder, then run <code>npm install</code> to install all dependencies.
- In your command line, run <code>npm run dev</code> to start the project.
- To end the project type <code>Ctrl + C </code> in your command line.
  
**Server Folder (Backend)**

- In the database-utils/config.js file, change the password to your postgreSQL user password.
- In your command line, cd to the *server* folder, then run: <code>npm install</code> to install all dependencies.
- In your command line, run <code>npm run devStart</code> to start the project.
- To end the project type <code>Ctrl + C </code> in your command line.

**Database**

The database is hosted on AWS. Here is how to access it.
- Install PgAdmin.
- Register a new connection to the database.
- Specify the IP address of the AWS virtual machine, currently it is **13.211.213.56**, but that might be changed in the future.
- Specify your PostgreSQL user account, and the password.

**Content Management System (CMS)**

Administrative rights are needed to access the CMS. Once logged in as an Admin, the CMS can be accessed from the **Content Management** item in the navigation.

![image](https://github.com/uoa-compsci399-s1-2024/capstone-project-2024-s1-team-11/assets/159106252/6d59abb9-977d-4f10-a2d2-2246b6adb683)

![image](https://github.com/uoa-compsci399-s1-2024/capstone-project-2024-s1-team-11/assets/159106252/15a1e844-e31d-4bc4-bc06-3d6a9ef9a570)

## Usage Examples

### Use case 1: A user finds a rock and scans the QR code
- The user is directed to a webpage that displays information about the mathematical concept painted on the rock. 
- If the user is not logged into the website, they are presented with a <code>SIGN IN TO COLLECT +</code> button. Clicking this button gives the user the option to log in or sign up.
- Once logged in, the button text changes to <code>ADD TO COLLECTION +</code>
- Once clicked, the rock is added to their profile, and badges are awarded if they reach a rock-collecting milestone.

### Use case 2: A user accesses the website directly through Google search or entering the URL into the search bar

Users can browse the website to learn about maths concepts, and view the leaderboard. Users can create an account.

### Use case 3: The client logs in with administrator rights and accesses the CMS

In addition to use cases 1 and 2 outlined above, the user can add, amend or delete content on the website.

![UML Use-Case diagram](https://github.com/uoa-compsci399-s1-2024/capstone-project-2024-s1-team-11/assets/159106252/d7a5e1bb-dd63-45fc-95aa-9a0a7c03f7bd)

## Future Plan

We have identified the following possibilities to enhance this project in the future:

- Creating a members-only area with advanced features to enhance user engagement.
- Implementing a more sophisticated badge and reward system that can scale and provide more personalised rewards.
- Reset password and reset username functionality. 
- Create your own custom avatar by choosing clothing, hairstyles and accessories. This had the potential to work with the badge system where users could earn unique items for reaching rock collecting milestones.
- Resizing images uploaded to the content management system (CMS) so they would be optimised and load faster.
- Mapping the location of rocks, with the ability to record where users find and hide rocks.
- Gamification, including puzzles or quizzes to enhance the user experience.
- Social networking page where users can interact with each other, share their milestones and organise real-life rock hunting meet-ups. 
- Using a more economical hosting solution by integrating with a mainstream CMS like WordPress could reduce ongoing hosting costs from approximately $30 per month to $8 per month.
- Use a custom domain name and use HTTPS to encrypt data securely.

## Contributors

- Tech Lead: Edward Lam
- Team Leader, Frontend, UI/UX: Helen Emmett
- Backend, Frontend: Aaron Quiat
- Backend, Frontend: Alyssa Lee Sang
- Backend, Frontend: Kelly Williams
- Backend, Frontend: Jie He 

## Acknowledgements

### Tutorials Used

#### Front-end
- Learning React and how to think in React: https://react.dev/learn
- React router createBrowserRouter tutoral: https://reactrouter.com/en/main/start/tutorial
- Learning React: https://youtu.be/5ZdHfJVAY-s?si=OpaMQGt9UGh4AE0P
- How to use Quill editor with React: https://youtu.be/I3JQNq7Cbt0?si=okbB4NFFChEpGGEB
- Responsive Navbar in React using React Router: https://www.youtube.com/watch?v=17l6AOc8s10
- Add Waves, Shapes & Curves to your Website: https://www.youtube.com/shorts/AnP5CPVtO7Y
- Learn React Router v6 – Full Course: https://www.youtube.com/watch?v=SMq1IQRweDc&t=2450s

#### Back-end
- Learn JavaScript - Full Course for Beginners: https://www.youtube.com/watch?v=PkZNo7MFNFg
- Node.js and Express.js - Full Course: https://www.youtube.com/watch?v=Oe421EPjeBE

#### Deploying the Web-App
- Understanding the PERN stack: https://www.freecodecamp.org/news/learn-the-pern-stack-full-course/
- Deploying a PERN stack application to AWS: https://www.youtube.com/watch?si=TUiqcPWXnipddPkW&v=NjYsXuSBZ5U&feature=youtu.be
- Deploying a PERN stack application to AWS: https://github.com/calvin-puram/AWS-EC2-Demo

### Images Used

- Main image is a stock photo from [iStock](https://www.istockphoto.com/photo/hand-painted-colorful-stones-and-pens-gm1055477172-282032140)
- Avatar images designed by [freepik](https://www.freepik.com/)
- Placeholder rock images created with [Adobe Express](https://new.express.adobe.com/) text-to-image
- Topic Images (number images) are obtained from [Pexels](https://www.pexels.com/)
- Favicon generated with [favicon.io](https://favicon.io/)

### Project Management tool
[Jira Gantt Chart](https://exquisitech.atlassian.net/jira/software/projects/KAN/boards/1/timeline?timeline=QUARTERS&shared=&atlOrigin=eyJpIjoiZWFhOWU5YzYwYjhmNGI5MGFmY2FlZTBkYzU4YWIzNWEiLCJwIjoiaiJ9)
