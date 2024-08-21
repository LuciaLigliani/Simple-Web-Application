# Simple Arithmetic Calculator

## Overview

This is a simple web application that interacts with a backend server and allows users to perform arithmetic calculation. The calculator performs a basic arithmetic operation involving the sum of the two input numbers and then add to this sum the first prime number greater than the higher of the two numbers.
The application is built using a React frontend and a Node.js backend.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Run the Backend](#run-the-backend)
- [Run the Frontend](#run-the-frontend)
- [How it Works](#how-it-works)
- [Technologies Used](#technologies-used)

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v20.x or higher to ensure compatibility)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Git](https://git-scm.com/) for version control
- [Nodemon](https://nodemon.io/) (optional) to automatically restart the server when files are changed while developing 

## Installation

### 1. Clone the Repository

First, clone the repository to your local machine using Git:

```bash
git clone https://github.com/LuciaLigliani/Simple-Web-Application.git
cd Simple-Web-Application
```
### 2. Install Dependencies

Make sure that you are in the root directory of the backend ```Simple-Web-Application``` and install the required dependencies:

```bash
npm install
```

Next, navigate to the frontend root directory and do the same:

```bash
cd src/client
npm install
```

## Run the Backend

There are two ways to run the server: one involves the use of nodemon, while the other does not.

### a. With Nodemon

Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. 
After installing that, you can navigate to the backend root directory ```Simple-Web-Application``` and start the server through the use nodemon:

```bash
cd ../../
npm run start
```

### b. Without Nodemon

Navigate to the backend root directory ```Simple-Web-Application``` and start the server:

```bash
cd ../../
node app.js
```

## Run the Frontend

Navigate to the frontend root directory and start the React development server:

```bash
cd src/client
npm start
```

The frontend server will start on http://localhost:3001. If it doesn’t open automatically, you can open the browser and navigate to this URL.

## How it Works

Once both the backend and frontend servers are running, you can access the calculator by navigating to ```http://localhost:3001``` in your web browser.

- Enter two numbers in the input fields.
- Click the "Calculate" button to see the result.
- The result will be displayed along with an info icon next to it. Hover over the icon to see the details of the calculation.
- To reset the input fields and clear the result, click the "Reset" link above the "Calculate" button.

If you accidentally navigate to different paths within the same base URL ```http://localhost:3001```, the application will show a _PageNotFound_ to help you go back to the correct application endpoint.

## Technologies Used

- Frontend: React, HTML, CSS
- Backend: Node.js, Express
- Version Control: Git
