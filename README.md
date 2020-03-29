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
- [ ] Fix 'create bug' dialog
- [ ] Make sure all data gets passed between Angular components

#### Back-End
- [ ] Create skeleton MySQL database
- [ ] Connect DB to application
- [ ] Create SQL queries write data
- [ ] Create SQL queries read data
- [ ] Create Docker containers and images for Angular App and MySQL DB
- [ ] Create Docker-Compose and configure Docker network
- [ ] Publish app and DB to AWS (AWS tools still yet to be defined..)

#### Minor Improvements
- [ ] Users are able to add comments to different bugs

## TOOLS

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Angular-CLI Commands

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
