import { Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import Copyright from "./Copyright"

const About = () => {
  return (
    <>
      <Container maxWidth='md' sx={{
        bgcolor: 'background.paper',
        boxShadow: 2,
        my: 10,
        py: 10
      }}>
        <div align="center">
          <a href="/">
            <img src="/static/logo.png" alt="Logo" width="80" height="80" />
          </a>

          <h2 align="center">SplitShare</h2>

          <p align="center">
            Build with the MERN stack (MongoDB, Express, React and NodeJS).
            <br />
            <br />
            <Copyright />
          </p>
        </div>
        <br />
        <center>
          <img src="/static/images/dashboard-main-transparent.png" alt="splitapp" width={'80%'} />
        </center>
        <Typography variant="h5">
          MERN Stack Group Expense Splitting Application
        </Typography>
        <br />
        <ul style={{ marginLeft: '40px' }}>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#key-features">Key Features</a></li>
          <li><a href="#technologies-used">Technologies used</a>
            <ul style={{ marginLeft: '40px' }}>
              <li><a href="#frontend">Frontend</a></li>
              <li><a href="#backend">Backend</a></li>
              <li><a href="#database">Database</a></li>
            </ul>
          </li>
        </ul>
        <br />
        <h2 id="introduction">Introduction</h2>
        <br />
        <p>This is a side project I've been working on — a full-stack expense splitting app built using the MERN stack (MongoDB, Express, React, and Node.js). It's specifically designed to help groups of friends manage and split expenses but can also be adapted for other business needs. The app allows users to add expense details and access analytics features such as group balance, monthly spending, and category-wise expense graphs. It was developed during my free time, so while it's fully functional, there may be some issues.
</p>
        <br />
        <center>
          <img src="/static/images/combined-screenshot.png" alt="Features" width={'80%'} />
        </center>
        <br />
        <h2 id="key-features">Key Features</h2>
        <br />
        <ul style={{ marginLeft: '40px' }}>
          <li>Create user groups and track group expense</li>
          <li>Keep track of shared expenses and settle your corresponding balances in a convenient and personalized way.</li>
          <li>Get Analytical graphs to understand your expenditure trend</li>
          <li>Multiple user registration.</li>
          <li>Authentication using JSON web token (JWT)</li>
        </ul>
        <br />
        <h2 id="technologies-used">Technologies used</h2>
        <br />
        <p>This project was created using the following technologies.</p>
        <br />
        <h4 id="frontend">Frontend</h4>
        <br />
        <ul style={{ marginLeft: '40px' }}>
          <li>React JS</li>
          <li>Redux (for managing and centralizing application state)</li>
          <li>Axios (for making api calls)</li>
          <li>Material UI (for User Interface)</li>
          <li>Chart.js (To display various analytics graphs)</li>
          <li>React-chartjs-2</li>
          <li>Gravitar (for user profile picture)</li>
        </ul>
        <br />
        <h4 id="backend">Backend</h4>
        <br />
        <ul style={{ marginLeft: '40px' }}>
          <li>Express</li>
          <li>Mongoose</li>
          <li>JWT (For authentication)</li>
          <li>bcryptjs (for data encryption)</li>
        </ul>
        <br />
        <h4 id="database">Database</h4>
        <br />
        <ul style={{ marginLeft: '40px' }}>
          <li>MongoDB (MongoDB Atlas)</li>
        </ul>
        <br />
        <h2 id="about">About</h2>
        <br />
        <p>SplitShare is an intuitive app designed to simplify group expense management and bill splitting among friends and colleagues.</p>
        <br />
        <Copyright />
        <br />
      </Container>
    </>
  )
}

export default About
