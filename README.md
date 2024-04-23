# User Management
In this full-stack project, we are capable of creating, deleting, updating, or requesting users. Authentication is performed through token-based validation, and a user can have multiple tokens, enabling login from multiple devices. Tokens are stored in cookies, and each token expires after 1 month.

## How to use
The application is built in [NodeJS](https://nodejs.org/en) environment, so it must first be installed on your computer.

You should run `npm install` in the backend folder, which will download all the packages that needs for the application

Finally you can start the application: `nodemon main` in the backend folder

## Data Structures
**User:**
```js
{
    _id: ObjectId('randomString'),
    username: 'UniqueName'
    displayName: 'Edward Example',
    email: 'edward@example.com',
    password: 'i am hashed',
    details: {
        //custom data about user (birthday, ect..)
    },
    createdAt: //date of the user created,
    updatedAt: //date of the user last updated
}
```
**Token:**
```js
{
    _id: ObjectId('randomString'),
    ownerID: ObjectId('ownerID')
    token: 'randomString',
    expiryDate: //current date + 1 month
}
```

## What i used
- **Backend:**
    - Express 4.19.2 ([official documentation](https://expressjs.com/))
    - Nodemon 3.1.0 ([official documentation](https://nodemon.io/))