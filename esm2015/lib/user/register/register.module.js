/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from '../login/login.module';
import { RegisterComponent } from './register.component';
import { UserModule, UrlTranslationModule, ConfigModule, I18nModule, } from '@spartacus/core';
export class RegisterComponentModule {
}
RegisterComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    LoginModule,
                    ReactiveFormsModule,
                    RouterModule,
                    UserModule,
                    UrlTranslationModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            RegisterCustomerComponent: {
                                selector: 'cx-register',
                            },
                        },
                    }))),
                    I18nModule,
                ],
                declarations: [RegisterComponent],
                exports: [RegisterComponent],
                entryComponents: [RegisterComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxVQUFVLEVBQ1Ysb0JBQW9CLEVBQ3BCLFlBQVksRUFFWixVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQXVCekIsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBckJuQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixvQkFBb0I7b0JBQ3BCLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYix5QkFBeUIsRUFBRTtnQ0FDekIsUUFBUSxFQUFFLGFBQWE7NkJBQ3hCO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztvQkFDRixVQUFVO2lCQUNYO2dCQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUIsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IExvZ2luTW9kdWxlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4ubW9kdWxlJztcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZWdpc3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgVXNlck1vZHVsZSxcbiAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG4gIENvbmZpZ01vZHVsZSxcbiAgQ21zQ29uZmlnLFxuICBJMThuTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIExvZ2luTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFVzZXJNb2R1bGUsXG4gICAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFJlZ2lzdGVyQ3VzdG9tZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LXJlZ2lzdGVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUmVnaXN0ZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUmVnaXN0ZXJDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtSZWdpc3RlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50TW9kdWxlIHt9XG4iXX0=