import { Inject, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SystemNavigatorComponent } from './system-navigator.component';
import { SystemNavigatorService, SystemNavigatorServiceConfig } from './system-navigator.service';
import { InitialsPipe } from './initials.pipe';

@NgModule({
    declarations: [SystemNavigatorComponent, InitialsPipe],
    imports: [CommonModule, BrowserModule, HttpClientModule],
    exports: [SystemNavigatorComponent],
})
export class SystemNavigatorModule {
    constructor(@Optional() @SkipSelf() @Inject(SystemNavigatorComponent) parentModule?: SystemNavigatorComponent) {}

    static forChild(
        @Optional() @Inject(SystemNavigatorServiceConfig) config?: SystemNavigatorServiceConfig
    ): ModuleWithProviders<SystemNavigatorModule> {
        return {
            ngModule: SystemNavigatorModule,
            providers: [
                {
                    provide: SystemNavigatorServiceConfig,
                    useValue: config,
                },
                SystemNavigatorService,
            ],
        };
    }
}
