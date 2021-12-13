# Player Hub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

This is a fully responsive website built utilizing [NGX Bootstrap](https://valor-software.com/ngx-bootstrap/#/documentation#getting-started), [Bootstrap Icons](https://icons.getbootstrap.com/), and [CanvasJS](https://canvasjs.com/angular-charts/).

It is broken out into three main directories in the `src/app/` folder: `modules`, `modules-shared`, and `services`.
- `modules` are where our main components are kept such as the Player Page along with child components unique to the parent (like Game Logs). 
- `modules-shared` contains components that are more global and could be utilized in multiple locations (header and graphs).
- `services` is where different services are stored like player endpoints for this project. It could also include things such as Google Analytics, AuthGuard, or whatever else we may need.

Styles are kept to their respective components along with breaking out color variables and reusable components found in `src/assets/theme/`. Global styling is also found in `styles.scss`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
