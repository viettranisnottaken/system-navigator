import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppUrl, ServerResponse } from './models';

export class SystemNavigatorServiceConfig {
    api: string;
    header?: any;
}

@Injectable()
export class SystemNavigatorService {
    api: string;
    imageToShow: string | ArrayBuffer;

    constructor(@Inject(SystemNavigatorServiceConfig) config: SystemNavigatorServiceConfig, public http: HttpClient) {
        this.api = config.api;
    }

    getUrls(): Observable<ServerResponse> {
        return this.http.get<ServerResponse>(this.api).pipe(
            map((res: ServerResponse) => {
                res.data.map((appUrl: AppUrl) => {
                    this.createImageFromBlob(appUrl.image);
                    appUrl.image = this.imageToShow;
                    return appUrl;
                });

                return res;
            })
        );
    }

    private createImageFromBlob(image: Blob | string) {
        if (!image) {
            this.imageToShow = undefined;
            return;
        }

        if (typeof image === 'string') {
            this.imageToShow = image;
            return;
        }

        let reader = new FileReader();
        reader.addEventListener(
            'load',
            () => {
                this.imageToShow = reader.result;
            },
            false
        );

        reader.readAsDataURL(image);
    }
}
