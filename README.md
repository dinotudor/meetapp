# Meetapp - Backend application

## Node.js - Express server

_Postgres DB_

Application for developers to keep track of events as meet up's and workshops.

Users can sign up using name, email and password. (confirmation field required)

- **- Authentication: JWT**
- **- Validation Schema: Yup**
- **- Encryptation: becrypt**

### Models:

- _User:_
- _File:_
- _Meetup:_
- _Subscritpion:_

- name: String, required,
- email: String, required, unique
- password: min 6 characters

### Routes

- USERS:
  - POST - `'/users'` - create user
  - PUT - `'/users/:id'` - edit user
  - DELETE - `'users/:id'` - delete user

-SESSIONS:

- POST - `'/session'` - create login session
