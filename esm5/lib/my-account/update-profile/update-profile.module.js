/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { SpinnerModule } from '../../ui/components/spinner/spinner.module';
import { UpdateProfileFormComponent } from './components/update-profile-form.component';
import { UpdateProfileComponent } from './update-profile.component';
var UpdateProfileModule = /** @class */ (function () {
    function UpdateProfileModule() {
    }
    UpdateProfileModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                UpdateProfileComponent: { selector: 'cx-update-profile' },
                            },
                        }))),
                        FormsModule,
                        ReactiveFormsModule,
                        SpinnerModule,
                        I18nModule,
                    ],
                    declarations: [UpdateProfileComponent, UpdateProfileFormComponent],
                    exports: [UpdateProfileComponent],
                    entryComponents: [UpdateProfileComponent],
                },] }
    ];
    return UpdateProfileModule;
}());
export { UpdateProfileModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL215LWFjY291bnQvdXBkYXRlLXByb2ZpbGUvdXBkYXRlLXByb2ZpbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFhLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFcEU7SUFBQTtJQWlCa0MsQ0FBQzs7Z0JBakJsQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLHNCQUFzQixFQUFFLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFOzZCQUMxRDt5QkFDRixFQUFBLENBQUM7d0JBQ0YsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IsVUFBVTtxQkFDWDtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSwwQkFBMEIsQ0FBQztvQkFDbEUsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ2pDLGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUMxQzs7SUFDaUMsMEJBQUM7Q0FBQSxBQWpCbkMsSUFpQm1DO1NBQXRCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi91aS9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgVXBkYXRlUHJvZmlsZUZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBkYXRlUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdXBkYXRlLXByb2ZpbGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgVXBkYXRlUHJvZmlsZUNvbXBvbmVudDogeyBzZWxlY3RvcjogJ2N4LXVwZGF0ZS1wcm9maWxlJyB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVXBkYXRlUHJvZmlsZUNvbXBvbmVudCwgVXBkYXRlUHJvZmlsZUZvcm1Db21wb25lbnRdLFxuICBleHBvcnRzOiBbVXBkYXRlUHJvZmlsZUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1VwZGF0ZVByb2ZpbGVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBVcGRhdGVQcm9maWxlTW9kdWxlIHt9XG4iXX0=