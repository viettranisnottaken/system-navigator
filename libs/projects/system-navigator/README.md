# SystemNavigator

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## Code scaffolding

Run `ng generate component component-name --project system-navigator` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project system-navigator`.

> Note: Don't forget to add `--project system-navigator` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build system-navigator` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build system-navigator`, go to the dist folder `cd dist/system-navigator` and run `npm publish`.

## Running unit tests

Run `ng test system-navigator` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Usage

1. Add `SystemNavigatorModule` to the module that you wish to use it in and use `forChild({ api: 'someUrl'})` to pass in the url of the API that will provide information about the applications icons on the menu:

```typescript
...
    import { SystemNavigatorModule } from 'system-navigator';

    @NgModule({
        declarations: [
            ...
        ],
        exports: [
            ...
            SystemNavigatorModule,
        ],
        providers: [
            HtmlClassService,
        ],
        imports: [
            ...
            SystemNavigatorModule.forChild({ api: 'https://sample-api.com/urls', headers: {'SomeHeader': '123'} }),
        ]
    })
    export class ThemeModule {
    }
```

2. Add `<lib-system-navigator></lib-system-navigator>` to where you want to use it

## APIs

```typescript
export interface AppUrl {
    name: string;
    url: string;
    image?: any;
}
```
