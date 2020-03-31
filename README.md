## Table of Content

- [Welcome to my React + Redux + Redux-Thunk demo](#welcome-to-my-react---redux---redux-thunk-demo)
  * [1. Quick Start](#quick-start)
  * [2. Main Feature](#main-feature)
  * [3. Design diagram](#design-diagram)
  * [4. Run the application](#run-the-application)


# Welcome to my React + Redux + Redux-Thunk demo
<a name="quick-start"></a>
## 1. Quick Start

To run the app from heroku,  Click  [Heroku deployment](http://employee-list-react.herokuapp.com/)

To run the same on  AWS S3, Click [S3 Deployment](http://employee-list-react.s3-website-ap-southeast-2.amazonaws.com/)

<a name="main-feature"></a>

#### See the application in action, run it on [StackBlitz](https://stackblitz.com/github/billonline33/employee-list-react) 

[![stackblitz](screenshots//stackblitz-screenshot.png)](https://stackblitz.com/github/billonline33/employee-list-react)


## 2. Main Feature

This is a sample employee list page, with sort and search features

The home page shows a list of employees

![home page](screenshots/home.PNG)

You can click "Sort by" drop-down, to sort the list.

![Sort](screenshots/sort.PNG)

You can also search the employees based on the current sort by field. e,g the screen below will return all employees whose last name contains "an"

![enter image description here](screenshots/search.PNG)

Click on one of the employee, will pop up the details of this employee.

![enter image description here](screenshots/popupdetails.PNG)

<a name="design-diagram"></a>
## 3. Design diagram

This web page contains two part:

 1. Front-end react.js app - React + Redux + Redux-Thunk
 2.  Restful web server - use [json-server](https://github.com/typicode/json-server) to fake a restful web server. Data is stored in json file (in a real production environment, it would be kept in a database)

See below shows the diagram.
![enter image description here](screenshots/Diagram.png)
<a name="run-the-application"></a>
## 4. Run the application

### Run from the cloud


#### Restful Web Server - https://employee-list-api.herokuapp.com/

you can view the restful web service from browser

![Restful web service](screenshots/webapihome.PNG)

Click [/companyInfo](https://employee-list-api.herokuapp.com/companyInfo) will return a json object which contains company details

![companyInfo](screenshots/webapicompanyinfo.PNG)

Click [/employees](https://employee-list-api.herokuapp.com/employees) will return a json object which contains employee list
![employees](screenshots/webapiemployees.PNG)


#### Front-end react app 

I have published the site to heroku, which can be found on  [http://employee-list-react.herokuapp.com/](http://employee-list-react.herokuapp.com/)

I have also publised it on AWS S3, which can be found on  [http://employee-list-react.s3-website-ap-southeast-2.amazonaws.com](http://employee-list-react.s3-website-ap-southeast-2.amazonaws.com/)
