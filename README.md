# BuggetBoardApp

## Description

This is a simple bug tracking application. It allows users to create accounts and join/create different groups. Each group has its own set of create and tracked bugs. Groups is a way of separating projects each user is associated with. Users can work on different projects and track reported issues on those projects.

## Task List

#### Front-End
- [x] Create front-end skeleton using Angular
- [x] Create cards that get populated based on number of bugs
- [x] Create header
- [ ] Create left nav bar which shows user icon and groups
- [ ] Create login page
- [ ] Group handling
- [x] Fix 'create bug' dialog
- [x] Make sure all data gets passed between Angular components
- [x] Create API requests for fetching and posting data

#### Back-End
- [x] Create skeleton MySQL database
- [x] Connect DB to application
- [x] Create SQL queries write data
- [x] Create SQL queries read data
- [x] Create AWS API Gateway, middle man between app and DB
- [x] Create Lambda functions for API gateway to interact with
- [ ] Create Docker containers and images for Angular App and MySQL DB
- [ ] Create Docker-Compose and configure Docker network
- [x] Publish app to AWS (currently running on s3, need to move to EC2)

#### Minor Improvements
- [ ] Users are able to add comments to different bugs

## TOOLS

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.
- Git/GitHub for source control.
- GitHub Action Workflow to build and deploy into AWS S3.
- AWS Networking (VPC, IGW, Pub/Priv Subnets)
- AWS Route53 for domain hosting.
- AWS s3 configured for static website hosting (for now).
- AWS API Gateway to trigger Lambda functions.
- AWS Lambda functions are used to execute GET, PUT, POST, DELETE actions on the DB while validating the requests.

## CLI Commands

#### Development server

[ Local ]
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

[ Build and Deploy ]
GitHub actions are used to automate CI/CD. Script is created (`.github/workflows/main.yml`) to automate building the Angular app and deploying it to s3.

Currently s3 is configured as a static website which is hosted by AWS Route53.

**Note:** Environment variables are required  and are defined under `Settings/Secrets` within GitHub profile.
