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

You can either call API for the urls, or just pass them in via `@Input()`

### Getting urls by calling API

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

2. Add `<lib-system-navigator></lib-system-navigator>` to where you want to use it.
3. Wrap a div around `<lib-system-navigator></lib-system-navigator>` to style it however you want. Like this:
    ```HTML
    <div class="menu-container">
        <lib-system-navigator></lib-system-navigator>
    </div>
    ```

### Passing data in `@Input()`

1. Add `SystemNavigatorModule` to the module that you wish to use. No need to run `forChild()`

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
                SystemNavigatorModule,
            ]
        })
        export class ThemeModule {
        }
    ```

2. Add `<lib-system-navigator [inputAppUrls]="appUrls"></lib-system-navigator>` to where you want to use it. The `appUrls` is the data passed into the component via `@Input`, which takes the form of:

    ```typescript
    inputAppUrls = [
        {
        name: "admin",
        url: "https://google.com",
        image: null
        },
        {
        name: "marketing platform",
        url: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
        image: "https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_04_105_34923369/882279561615ff4ba604.jpg"
        },
        {
        name: "marketing platform",
        url: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
        image: "https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_04_105_34923369/882279561615ff4ba604.jpg"
        },
    ],
    ```

3. Wrap a div around `<lib-system-navigator [inputAppUrls]="appUrls"></lib-system-navigator>` to style it however you want. Like this:
    ```HTML
    <div class="menu-container">
        <lib-system-navigator [inputAppUrls]="appUrls"></lib-system-navigator>
    </div>
    ```

## APIs

The library expect a response like this from your api:

```JSON
{
  "status": true,
  "message": "ok",
  "httpCode": 200,
  "data": [
    {
      "name": "admin",
      "url": "https://google.com",
      "image": null
    },
    {
      "name": "marketing platform",
      "url": "https://www.youtube.com/watch?v=kXYiU_JCYtU",
      "image": "https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_04_105_34923369/882279561615ff4ba604.jpg"
    },
    {
      "name": "marketing platform",
      "url": "https://www.youtube.com/watch?v=kXYiU_JCYtU",
      "image": "https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_04_105_34923369/882279561615ff4ba604.jpg"
    },
  ],
  "errorCode": "ok"
}
```

Here are some interfaces

```typescript
export interface AppUrl {
    name: string;
    url: string;
    image?: any;
}

export interface ServerResponse {
    status?: boolean;
    message?: string;
    httpCode?: number;
    data: AppUrl[];
    errorCode?: string;
}
```

## Plans for next version

    - Themes can be imported
