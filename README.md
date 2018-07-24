There are several ways to read data from sample-data.json, in the real scenario it would be read from web service. For that reason, I created a dummy json-server to simulate the web service.

To run the app from your local computer, run  "npm start",josn-server will be started automatically and run on port 3001.

Redux is not really required for a simple project like this. However, for demonstrate purpose, I use redux to manage state.

For a sample React App which does not use Redux, please see my other sample [hCard Builder](https://github.com/billonline33/hcard-builder)

I have also published the site to heroku, which can be found on http://employee-list-react.herokuapp.com/

I have also publised the site on AWS S3, which can be found on http://employee-list-react.s3-website-ap-southeast-2.amazonaws.com


You can also run the web service on https://employee-list-api.herokuapp.com/

How the demo works:

1. Select "Sort By" will change the sort by field.
2. depends on the current sort by field, you can enter the search value. e.g. if the current Sort By is firstName, and you enter as in search box, it returns all employees who first name contains "as".
