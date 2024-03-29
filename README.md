# idea-paas-app

> Project idea-paas-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## To know more about project base

Ref `README.info.md`

## Getting Started

1. Clone the application repository
    ```
    $ git clone https://github.com/Ideas2IT/idea-paas-app.git --branch dev
    ```

2. Environment Config

Before start the application need to configure the environment variables.
Sample environment config file `.env.example` rename the file to `.env` and customize the variable `REACT_APP_BASE_URL`.

3. Install your dependencies
    ```
    $ npm install
    ```

4. Start your application
    ```
    $ npm start
    ```
## Docker setup

1. Make sure you have [docker-compose](https://docs.docker.com/compose/install/#install-compose)
 or ref [digitalocean](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-16-04)
installed.

2. Clone the application repository
    ```
    $ git clone https://github.com/Ideas2IT/idea-paas-app.git --branch dev
    ```

3. Environment Config

Before start the application need to configure the environment variables.
Sample environment config file `.env.example` rename the file to `.env` and customize the variable `REACT_APP_BASE_URL`.

4. Build your application using docker
    ```
    $ docker-compose build web
    ```

5. Install your dependencies
    ```
    $ docker-compose run --rm web npm install --unsafe-perm
    ```

6. Start your application
    ```
    $ docker-compose up web
    ```

## Web URL

Web URL - `http://localhost:3000/`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.
