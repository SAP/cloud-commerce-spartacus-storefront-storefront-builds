/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { FormComponentsModule, ListNavigationModule, MediaModule, StarRatingModule, } from '../../../shared/index';
import { AddToCartModule } from '../../cart/index';
import { IconModule } from '../../misc/icon/index';
import { ProductListComponent } from './container/product-list.component';
import { ProductFacetNavigationComponent } from './product-facet-navigation/product-facet-navigation.component';
import { ProductGridItemComponent } from './product-grid-item/product-grid-item.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductViewComponent } from './product-view/product-view.component';
export class ProductListModule {
}
ProductListModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CMSProductListComponent: { selector: 'cx-product-list' },
                            SearchResultsListComponent: { selector: 'cx-product-list' },
                            ProductRefinementComponent: { selector: 'cx-product-facet-navigation' },
                        },
                    }))),
                    RouterModule,
                    MediaModule,
                    AddToCartModule,
                    FormComponentsModule,
                    ListNavigationModule,
                    UrlModule,
                    I18nModule,
                    StarRatingModule,
                    IconModule,
                ],
                declarations: [
                    ProductListComponent,
                    ProductFacetNavigationComponent,
                    ProductListItemComponent,
                    ProductGridItemComponent,
                    ProductViewComponent,
                ],
                exports: [
                    ProductListComponent,
                    ProductListItemComponent,
                    ProductGridItemComponent,
                ],
                entryComponents: [ProductListComponent, ProductFacetNavigationComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNoSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQW9DN0UsTUFBTSxPQUFPLGlCQUFpQjs7O1lBbEM3QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLHVCQUF1QixFQUFFLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFOzRCQUN4RCwwQkFBMEIsRUFBRSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRTs0QkFDM0QsMEJBQTBCLEVBQUUsRUFBRSxRQUFRLEVBQUUsNkJBQTZCLEVBQUU7eUJBQ3hFO3FCQUNGLEVBQUEsQ0FBQztvQkFDRixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsU0FBUztvQkFDVCxVQUFVO29CQUNWLGdCQUFnQjtvQkFDaEIsVUFBVTtpQkFDWDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osb0JBQW9CO29CQUNwQiwrQkFBK0I7b0JBQy9CLHdCQUF3QjtvQkFDeEIsd0JBQXdCO29CQUN4QixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsd0JBQXdCO2lCQUN6QjtnQkFDRCxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSwrQkFBK0IsQ0FBQzthQUN6RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBGb3JtQ29tcG9uZW50c01vZHVsZSxcbiAgTGlzdE5hdmlnYXRpb25Nb2R1bGUsXG4gIE1lZGlhTW9kdWxlLFxuICBTdGFyUmF0aW5nTW9kdWxlLFxufSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQWRkVG9DYXJ0TW9kdWxlIH0gZnJvbSAnLi4vLi4vY2FydC9pbmRleCc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXIvcHJvZHVjdC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24vcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0R3JpZEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtZ3JpZC1pdGVtL3Byb2R1Y3QtZ3JpZC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtbGlzdC1pdGVtL3Byb2R1Y3QtbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC12aWV3L3Byb2R1Y3Qtdmlldy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDTVNQcm9kdWN0TGlzdENvbXBvbmVudDogeyBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtbGlzdCcgfSxcbiAgICAgICAgU2VhcmNoUmVzdWx0c0xpc3RDb21wb25lbnQ6IHsgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWxpc3QnIH0sXG4gICAgICAgIFByb2R1Y3RSZWZpbmVtZW50Q29tcG9uZW50OiB7IHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uJyB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgQWRkVG9DYXJ0TW9kdWxlLFxuICAgIEZvcm1Db21wb25lbnRzTW9kdWxlLFxuICAgIExpc3ROYXZpZ2F0aW9uTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFN0YXJSYXRpbmdNb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICBQcm9kdWN0TGlzdEl0ZW1Db21wb25lbnQsXG4gICAgUHJvZHVjdEdyaWRJdGVtQ29tcG9uZW50LFxuICAgIFByb2R1Y3RWaWV3Q29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgUHJvZHVjdExpc3RJdGVtQ29tcG9uZW50LFxuICAgIFByb2R1Y3RHcmlkSXRlbUNvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdExpc3RDb21wb25lbnQsIFByb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdE1vZHVsZSB7fVxuIl19