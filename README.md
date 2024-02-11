# ECommerce

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.
- Includes an authentication module with necessary components and routing configured.
- Uses reactive forms with necessary validations.
- Uses a service to call login/register APIs.
- The token received from these APIs is saved to local storage and used in subsequent requests via an interceptor.
- On app startup, if a token is found in local storage, the user is set to be logged in.
- The App Component calls the get user details API if the user is authenticated.
- The user name is displayed in the header using an @input decorator.
- The project also includes client-side pagination and CRUD operations for products.
- The Add, Edit, Delete, and Details operations redirect to their respective components with necessary route parameters.
- The Delete operations initiate a confirmation op up using Angular Material

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
