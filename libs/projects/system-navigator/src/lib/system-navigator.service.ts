import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppUrl } from './models';

export class SystemNavigatorServiceConfig {
    api: string;
    header?: any;
}

@Injectable()
export class SystemNavigatorService {
    api: string;
    imageToShow: string | ArrayBuffer;

    constructor(@Inject(SystemNavigatorServiceConfig) config: SystemNavigatorServiceConfig, private http: HttpClient) {
        this.api = config.api;
    }

    getUrls(): Observable<AppUrl[]> {
        return this.http.get<AppUrl[]>(this.api).pipe(
            map((res) =>
                res.map((appUrl) => {
                    this.createImageFromBlob(appUrl.image);
                    appUrl.image = this.imageToShow;
                    return appUrl;
                })
            )
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
