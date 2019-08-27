# Meetapp - Backend application

## Node.js - Express server

_Postgres DB_

Application for developers to keep track of events as meet up's and workshops.

Users can sign up using name, email and password. (confirmation field required)
**Authentication: JWT**
**Validation Schema: Yup**
**Encryptation: becrypt**

User Model:
name: String, required,
email: String, required, unique
password: min 6 characters

- POST - create user
- PUT - edit user/:id
- POST - create session
- DELETE - user/:id
