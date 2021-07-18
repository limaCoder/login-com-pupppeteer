# .ENV in Node.js

To create a .env file in Node.js, first install the package dotenv as a Dev dependence with the command:
```shell
npm i dotenv -D
```
And then, import the package in your main file with
```js
require('dotenv').config(); 
```
The usage of enviroment variables will be like this, creating a .env in the root of the project, and then in the code write the prefix process.env and the name of variable created:
```js
await page.type('[name="user[email]"]', process.env.UNPLASH_EMAIL);
```