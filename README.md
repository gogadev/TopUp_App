## TopUp App

####

React Redux TopUp App based on fake JSON API that displays a TopUp Flow in 5 steps:

➢ User must select a country from the "countries" property in JSON.

➢ User can enter a phone number.

➢ User will select operator from the JSON response.

➢ User will be asked to select a TopUp amount.

➢ User will see a success screen indicating that their TopUp has been sent.

## Project Status

####

This project is currently in development. User can select a country, enter the phone number, select the right operator, choose a top-up amount and see a success screen after a top-up.

## Project Screen Shot(s)

https://user-images.githubusercontent.com/56350554/124103116-dfb39e80-da58-11eb-8ac9-7792b77d176d.mp4

####

**I am going to upload two versions (older one and newer one) because with the newest version it says that I am above my daily Fake Units limit. There is slight difference when it comes to design and I also removed one console.log in newer version.**

➢ Older Version
App is available on: https://topup-app.netlify.app/

➢ Newer Version
App is available on: https://topup-new-version.netlify.app/

![TopUp Screenshot](https://user-images.githubusercontent.com/56350554/124107953-a6316200-da5d-11eb-8caf-64babb0bb846.png)

## Installation and Setup Instructions

####

Get Request at https://app.fakejson.com/q/xdOdc9ZF?token=M37SFqOXjnZXOBpUuOCRXA

Clone down this repository. You will need `node` and `npm` installed globally on your machine

git clone

Installation:

`npm install`

To Start Server:

`npm start`

## Libraries and Platforms

####

➢ react.js

➢ react-router-dom

➢ react-redux

➢ redux-thunk

➢ redux-devtools

➢ redux-persist

➢ axios

➢ styled-components

➢ material-ui

➢ react-reveal

➢ undraw-platform

➢ netlify

## Reflection

####

The TopUp App project was based on fake JSON API. I also created mock JSON data based on fake JSON API during the development to be able to continue with the project in case if I exceed the daily limit. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features to be able to finish the project.

The project consists of 5 parts: User selects a recipient country, enters the phone number, selects correct operator, chooses the amount he/she wants to send to the recipient and see the success screen after the successful top-up.

I used React Hooks throughout my app to make my code look cleaner, easier to read and test. I chose React Redux for the state management to avoid prop drilling. It will ensure that the component only re-renders when a specific object in the store changes I chose Redux Thunk middleware that allows for delayed actions and handles asynchronous actions. I used Redux DevTools to be able to debug bugs, track the changes of the TopUp App.

For fetching the main data, I used axios library because it performs automatic transforms of JSON data.

I chose React Router to allow my application to navigate between different components. React Router is dynamic, client-side routing that allows us to build a single-page web application with navigation without the page refreshing as the user navigates.

I decided to use Redux Persist library to persist data. It allows saving a Redux store in the local storage of an application.

I chose Material-UI Icons to make the UI visually more consistent, appealing and interactive. I decided to use Styled Components - CSS-in-JS styling framework that can be customised through props and/or extended via styled(Component) and it also avoids clashes with CSS selectors. I chose React-Reveal Animation Library to give the app a little extra flavor and to enhance the user experience.

App is responsive. It scales from desktop to mobile. I used modern CSS3 Grid and Flexbox System in combination with media query.

I used Undraw Platform to get customizable, high quality svg and png icons.

I used Netlify to deploy the final version of the TopUp App.

At the end of the day, the technologies implemented in this project are React, modern ES6+ VanillaJS, JSX, Styled Components and modern CSS3. I chose to use the `create-react-app` boilerplate to minimize initial setup.
