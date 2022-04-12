# Job Tracking App

> Web app built during a coruse with the MERN stack.

This project done by the course: https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs/

![screenshot](https://github.com/amitshuu/jobify/blob/master/uploads/Jobify_Dashboard.png)
![screenshot](https://github.com/amitshuu/jobify/blob/master/uploads/Jobify_AllJobs.png)

#Features

- User member (regiser/login)
- User profile update
- Jobs (Add/Edit/Remove)
- Searching jobs by queries
- Stats page that track your jobs
- Monthly charts

# Usage

Create a .env file in the root and add the following

```
PORT = 5000
MONGO_URL = YOUR MONGODB URL
JWT_SECRET = ANY JWT SECRET CODE
JWT_LIFETIME = 1d (TOKEN LIFETIME)
```

### Install Dependencies (front & back)

```
npm install
cd client
npm install
```

### Run

```
Run frontend (:3000) & backend (:5000)

npm run dev

Run backend only
npm run server
```
