# Chat4You

This project is a chat app, including API Server and Ratings app.

## Technologies and main dependencies

- React
- JS
- ASP.Net
- SignalR

## Prerequisites

You need to install first:

- Node.js and npm - https://nodejs.org/en/
- .NET - https://dotnet.microsoft.com/en-us/download
- MariaDB - https://mariadb.org/download/

## Get the code

Use those commands:

```
git clone https://github.com/orielProg/Chat4YouWeb.git
cd Chat4YouWeb
```

## Run

Please open the appsettings.json files in RatingApp/Chat4YouServer & server-api/webAPI, and change the DB section username and password to those you declared in your mariaDB installation.

run these commands:

```
cd client-chat
npm install
cd ..
npm install
```

it will install the dependencies in node_moudles

```
npm run dev
```
note: if 'npm run dev' did not work, got to environment variables=> and add the path: C:\Windows\System32

it will run the app.

## Interact

Open localhost:3000 in your browser if it didn't open.
Register and login to the app to start.

Happy chatting!
