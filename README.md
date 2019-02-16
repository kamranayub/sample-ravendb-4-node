Quick example of a Node server accessing the demo RavenDB 4 instance [ravendb](https://github.com/ravendb/ravendb-nodejs-client/tree/v4.1) Node.js client.

```
npm install
npm start
```

Then from a web app using whatever technology of your choosing:

```js
const res = await fetch("http://localhost:1337/company/91-A");
const company = await res.json();

console.log(company);
```
