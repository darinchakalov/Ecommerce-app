# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

It is an ecommerce website which has two types of users: admins and customers.

Admin users can create, edit and delete products.

Customers can add products to shopping cart and finish their order. Only logged in users can add products to their cart.

## App Details

The app is based on Angular + Node.js + Express.js + MongoDB.

## Development server

Run `ng serve` for a dev server within the app folder. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## RESTful API

The following endpoints are supported:

GET /api/products - list all products
GET /api/products/:id - get details about given product
POST /api/products - create a new product
PUT /api/products/:id - edit given product
DELETE /api/products/:id - delete given product

Run `npm start` for a dev api server within the api folder. The api will be available at `http://localhost:3000/`.

## Live site

The application has been build and deployed onto a hosting enviroment and is publicly available at: `https://angular.f4ster.com`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Screenshots
![screenshot-angular f4ster com-2022 04 13-18_51_13](https://user-images.githubusercontent.com/19432229/163223268-7ef54086-cc51-4734-a1f2-5a5887921b4e.png)

![screenshot-angular f4ster com-2022 04 13-18_51_25](https://user-images.githubusercontent.com/19432229/163223287-c36ad919-571f-4d3f-b964-04926d5ebadb.png)
