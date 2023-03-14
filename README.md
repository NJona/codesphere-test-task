# Codesphere Test Task

Used Framework: React

## Table of Contents

1. Available Scripts
2. Architecture & Design Desicions
3. Problems

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Architecture & Design Desicions

### Frontend Framework

Used Framework: React

### State Management

I used redux for state management because it is designed to handle complex applications with large amounts of data. However, for this simple applications that do not require such advanced state management, Redux may be overkill. I still used it so that the application is scalable from the beginning.

### Styling

I used CSS Modules for this application, to encapsulate CSS styles within a specific component, preventing them from clashing with other styles in the application.

## Problems

### CORS

Unfortunately, I was unable to call the API directly from the client due to receiving cross-origin errors that I was unable to resolve within the client. As a result, I created a proxy server that calls the Codesphere Test Task API and accepts cross-origin requests.

The server is simple in structure and uses node-fetch to call the Codesphere Test Task API. Here is the link to the repository: https://github.com/NJona/codesphere-test-task-api-proxy

The API URI can be changed to the initial Codesphere Test Task API URI in the `src/config.ts` file by setting the value of useAPIProxy to false.
