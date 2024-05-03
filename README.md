# FE Technical Test

Tech Test CODE.ID <> AXA (May, 2nd 2024)

## Tech Stack

**Frontend:** React, NextJs, TailwindCSS, Shadcn, React-query, React-hook-form,

**Backend:** JSONPlaceholder

**Deployment FE:** Vercel (https://axa-mandiri-test.vercel.app/)

**Deployment BE:** AWS EC2 (http://18.143.75.177:5000/)

## Run Locally

Clone the project

```bash
  git clone [https://github.com/caamaann/axa-mandiri-test](https://github.com/caamaann/axa-mandiri-test.git)
```

Go to the project directory

```bash
  cd axa-mandiri-test
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Demo

https://axa-mandiri-test.vercel.app/

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SITE_URL=http://localhost:3000`

`API_URL=http://18.143.75.177:5000`

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Features

- Light/dark mode toggle
- User can view list of users
- User can view list of posts of each user
- User can view list of albums of each user
- User can view the detail of each post and its comment
- User can view list of photos from an album
- User can view the detail of photo
- User can add, edit and delete post
- User can add, edit and delete comment
- Hide request to BE (using server action)
- Empty State
