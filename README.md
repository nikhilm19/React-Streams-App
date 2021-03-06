# React-Redux-Streams 📹

A React starter app for streaming which using various concepts like Navigation, Redux, Authentication, REST API, Forms!
The app allows user to Sign in with Google using OAuth2.0 and supports CRUD operations on streams!

Dummy server setup using [`json-server`](https://www.npmjs.com/package/json-server) package
Media server setup using [`node-media-server`](https://github.com/illuspas/Node-Media-Server) package

## Setup

### Install dependencies

    cd api
    npm install
    cd ../frontend/
    npm install
    cd ../rtmpserver/
    npm install

### TailwindCss Setup

    cd frontend/
    npx tailwind init tailwind.js --full

This will initialize `tailwind.js` in the `frontend` directory

### Environment variable

    touch .env

Add `REACT_APP_GOOGLE_CLIENT_ID=<YOUR_CLIENT_ID>` to the file and replace `YOUR_CLIENT_ID` with the actual client id .

To get your client id refer this - [https://developers.google.com/identity/protocols/oauth2](https://developers.google.com/identity/protocols/oauth2)

## Available Scripts

In the `frontend` directory, you can run:

    npm start

Runs the app in the development mode and builds `tailwind.css` <br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To start the `api` server, you can run:

    cd api
    npm start

To start the `rtmpserver`, you can run:

    cd rtmpserver
    npm start

### Snapshots

![Home](docs/landing.png?raw=true "Home")

![All Streams](docs/all-streams.png?raw=true "All Streams")
