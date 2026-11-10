# Project 4: CI/CD Pipeline for a Node.js Application

## 1. Project Overview

This project demonstrates the implementation of a Continuous Integration and Continuous Deployment (CI/CD) pipeline for a Node.js application using Docker and GitHub Actions.

The application is containerized using Docker, and GitHub Actions automates the Docker image build and push process whenever code is pushed to the main branch.

The Docker image is published to Docker Hub, making it available for deployment on any Docker-supported environment.

## 2. Project Objectives

- Develop a simple Node.js application using Express.js.
- Create a Dockerfile to containerize the application.
- Implement a CI/CD pipeline using GitHub Actions.
- Automate Docker image building and publishing.
- Store Docker Hub credentials securely using GitHub Secrets.
- Test application functionality using automated tests.
- Verify the application using Docker containers.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | Application runtime |
| Express.js | Backend framework |
| Docker | Application containerization |
| Docker Hub | Docker image repository |
| Git | Version control |
| GitHub | Source code hosting |
| GitHub Actions | CI/CD automation |
| Ubuntu | Development environment |

## 4. Project Structure

```text
project-4/
│
├── app/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── Dockerfile
│   └── tests/
│       └── server.test.js
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
└── README.md
```

## 5. Application Development

A simple Node.js application was developed using Express.js.

The application provides two endpoints:

- **Homepage (/):** Displays a welcome message.
- **Health endpoint (/health):** Returns the application health status in JSON format.

The application runs on port 3000.

## 6. Docker Implementation

A Dockerfile was created using the Node.js Alpine base image.

The Docker image includes the application source code and required dependencies.

Build the Docker image:

```bash
docker build -t project-4-app ./app
```

Run the Docker container:

```bash
docker run -d --name project4-app -p 3000:3000 project-4-app
```

Verify the running container:

```bash
docker ps
```

## 7. CI/CD Pipeline Using GitHub Actions

A GitHub Actions workflow was created at:

`.github/workflows/ci-cd.yml`

The workflow is triggered whenever code is pushed to the main branch.

### Pipeline stages

1. Checkout source code.
2. Set up Docker Buildx.
3. Authenticate with Docker Hub.
4. Build the Docker image.
5. Push the image to Docker Hub.

Docker Hub credentials are securely configured using GitHub repository secrets:

- DOCKER_USERNAME
- DOCKER_PASSWORD

This automation reduces manual effort in building and publishing Docker images.

## 8. Docker Hub Integration

The generated Docker image is published to Docker Hub.

**Docker Hub Repository:**

https://hub.docker.com/r/amithasri16/project-4-app

**Image name:**

```bash
amithasri16/project-4-app:latest
```

Pull the image:

```bash
docker pull amithasri16/project-4-app:latest
```

## 9. Testing and Verification

Application functionality was tested using Node.js automated tests.

Test execution:

```bash
cd app
npm test
```

**Test results:**
- Total tests: 2
- Passed: 2
- Failed: 0

The following tests were verified:

1. Homepage returns the expected welcome message.
2. Health endpoint returns UP status.

The Docker container was also executed successfully, and both application endpoints were verified through a web browser.

## 10. Project Outcome

Successfully implemented a CI/CD pipeline for a Node.js application using Docker and GitHub Actions.

The project demonstrates application development, containerization, automated Docker image building, Docker Hub integration, and application testing.

The successful GitHub Actions workflow and Docker container execution demonstrate the completion of the implemented pipeline.

## 11. Project Links

- **GitHub Repository:** https://github.com/iamamitha16/project-4-devops-app
- **Docker Hub:** https://hub.docker.com/r/amithasri16/project-4-app
- **GitHub Actions:** https://github.com/iamamitha16/project-4-devops-app/actions

---

**Project:** Project 4 – CI/CD Pipeline for a Node.js Application  
**Platform:** Elevate Labs Internship Project
