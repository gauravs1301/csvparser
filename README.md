# Project Setup Guide

This guide explains how to set up the project on your local system.

## Prerequisites

Before proceeding, you need to ensure that you have the following installed on your system:

- Node.js
- npm
- Git

## Installation

Clone the repository to your local machine using the following command:

git clone https://github.com/{username}/{repository-name}.git


where `username` is your GitHub username and `repository-name` is the name of the repository.

Navigate to the project root directory:
cd {repository-name}


Install the project dependencies:
- npm install


Create an `uploads` folder in the project root directory:
- mkdir uploads


## Usage

To run the application, use the following command in the project root directory:
npm start


This command will start the application on port 3000. You can access it in your web browser by navigating to http://localhost:3000.

## Functionality

The application allows users to upload CSV files, view them in a table, and search for specific data. The following routes are available:

- `/` - The index page, where uploaded files are displayed in a table.
- `/upload-csv` - The route for uploading a CSV file.
- `/open` - The route for opening a CSV file and viewing its contents in a table.
- `/delete` - The route for deleting a CSV file.

## Conclusion

That's it! You now have the project set up on your local machine and can start using it.
