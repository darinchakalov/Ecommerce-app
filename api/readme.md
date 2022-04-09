# REST-api for Angular ecommerce project

## Getting started

Let's make our first API request to the REST-api!

In the example below, we're trying to get information about the REST-api:

`https://localhost:3000/api/test`

Here is the response we get:

```
{
    "name": "rest-api",
    "version": "1.0.0",
    "description": "REST-api for Angular ecommerce project",
    "main": "index.js",
}
```

If your response looks slightly different don't panic. This is probably because more data has been added to the API since I made this documentation.

## Base URL

The Base URL is the root URL for all of the API, if you ever make a request to the API and you get back a 404 NOT FOUND response then check the Base URL first.

The Base URL for the API is:

`https://localhost:3000/api`

The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.

## Authentication

This API isn't open API. Authentication is required to store and get data. You can use the connected REACT-app to make registration and sign in. This also means that I've limited what you can do. If you find a mistake, then just write an issue.
