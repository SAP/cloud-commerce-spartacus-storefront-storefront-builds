import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ActivatedRouterStateSnapshot, Breadcrumb, PageType, ProductSearchPage, RoutingService, } from '@spartacus/core';
import { filter, map, pluck, switchMap } from 'rxjs/operators';
import { ProductListComponentService } from '../../container/product-list-component.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../../container/product-list-component.service";
/**
 * Provides access to all the facets and active facets for the Product Listing Page.
 */
let ProductFacetService = class ProductFacetService {
    constructor(routing, productListComponentService) {
        this.routing = routing;
        this.productListComponentService = productListComponentService;
        this.routeState$ = this.routing
            .getRouterState()
            .pipe(pluck('state'));
        this.searchResult$ = this.routeState$.pipe(switchMap((state) => this.productListComponentService.model$.pipe(filter((page) => this.filterForPage(state, page)), map((page) => this.mapResults(state, page)))));
        /**
         * Observes the facets and active facets for the given page. The facet data
         * is provided in a `FacetList`.
         */
        this.facetList$ = this.searchResult$.pipe(map((result) => ({
            facets: result.facets,
            activeFacets: result.breadcrumbs,
        })));
    }
    /**
     * Filters the current result by verifying if the result is related to the page.
     * This is done to avoid a combination of the next page and the current search results.
     */
    filterForPage(state, page) {
        var _a, _b, _c;
        if (state.context.type === PageType.CATEGORY_PAGE) {
            return (((_c = (_b = (_a = page.currentQuery) === null || _a === void 0 ? void 0 : _a.query) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.indexOf(`allCategories:${state.context.id}`)) > -1);
        }
        if (state.context.type === PageType.CONTENT_PAGE &&
            state.context.id === 'search') {
            return page.currentQuery.query.value.startsWith(`${state.params.query}:`);
        }
        return false;
    }
    mapResults(state, page) {
        return Object.assign(Object.assign({}, page), { breadcrumbs: this.filterBreadcrumbs(page.breadcrumbs, state.params) });
    }
    /**
     * filter breadcrumbs which are not actively selected
     * but coming from the route navigation
     */
    filterBreadcrumbs(breadcrumbs, params) {
        return breadcrumbs
            ? breadcrumbs.filter((breadcrumb) => !this.hasBreadcrumb(breadcrumb, params))
            : [];
    }
    /**
     * Indicates whether the breadcrumb is related to navigation parameters,
     * since either the category or brand code should match those codes.
     */
    hasBreadcrumb(breadcrumb, params) {
        return (breadcrumb.facetCode === 'allCategories' &&
            breadcrumb.facetValueCode === params.categoryCode);
    }
};
ProductFacetService.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductListComponentService }
];
ProductFacetService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductFacetService_Factory() { return new ProductFacetService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductListComponentService)); }, token: ProductFacetService, providedIn: "root" });
ProductFacetService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductFacetService);
export { ProductFacetService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uL3NlcnZpY2VzL3Byb2R1Y3QtZmFjZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsNEJBQTRCLEVBQzVCLFVBQVUsRUFDVixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7OztBQUc3Rjs7R0FFRztBQUlILElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBZ0I5QixZQUNZLE9BQXVCLEVBQ3ZCLDJCQUF3RDtRQUR4RCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBakJqRCxnQkFBVyxHQUFHLElBQUksQ0FBQyxPQUFPO2FBQzFDLGNBQWMsRUFBRTthQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFTCxrQkFBYSxHQUU1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDdkIsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDbEIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQzFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFDakQsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUM1QyxDQUNGLENBQ0YsQ0FBQztRQU9GOzs7V0FHRztRQUNNLGVBQVUsR0FBMEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ2xFLEdBQUcsQ0FDRCxDQUFDLE1BQXlCLEVBQUUsRUFBRSxDQUM1QixDQUFDO1lBQ0MsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLFlBQVksRUFBRSxNQUFNLENBQUMsV0FBVztTQUNuQixDQUFBLENBQ2xCLENBQ0YsQ0FBQztJQWRDLENBQUM7SUFnQko7OztPQUdHO0lBQ08sYUFBYSxDQUNyQixLQUFtQyxFQUNuQyxJQUF1Qjs7UUFFdkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsYUFBYSxFQUFFO1lBQ2pELE9BQU8sQ0FDTCxtQkFBQSxJQUFJLENBQUMsWUFBWSwwQ0FBRSxLQUFLLDBDQUFFLEtBQUssMENBQUUsT0FBTyxDQUN0QyxpQkFBaUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsS0FDakMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztTQUNIO1FBRUQsSUFDRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsWUFBWTtZQUM1QyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQzdCO1lBQ0EsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU8sVUFBVSxDQUNoQixLQUFtQyxFQUNuQyxJQUF1QjtRQUV2Qix1Q0FDSyxJQUFJLEtBQ1AsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFDbkU7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssaUJBQWlCLENBQ3ZCLFdBQXlCLEVBQ3pCLE1BQWM7UUFFZCxPQUFPLFdBQVc7WUFDaEIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQ2hCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUN4RDtZQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssYUFBYSxDQUFDLFVBQXNCLEVBQUUsTUFBYztRQUMxRCxPQUFPLENBQ0wsVUFBVSxDQUFDLFNBQVMsS0FBSyxlQUFlO1lBQ3hDLFVBQVUsQ0FBQyxjQUFjLEtBQUssTUFBTSxDQUFDLFlBQVksQ0FDbEQsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQTlFc0IsY0FBYztZQUNNLDJCQUEyQjs7O0FBbEJ6RCxtQkFBbUI7SUFIL0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLG1CQUFtQixDQStGL0I7U0EvRlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3QsXG4gIEJyZWFkY3J1bWIsXG4gIFBhZ2VUeXBlLFxuICBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgcGx1Y2ssIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2NvbnRhaW5lci9wcm9kdWN0LWxpc3QtY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFjZXRMaXN0IH0gZnJvbSAnLi4vZmFjZXQubW9kZWwnO1xuXG4vKipcbiAqIFByb3ZpZGVzIGFjY2VzcyB0byBhbGwgdGhlIGZhY2V0cyBhbmQgYWN0aXZlIGZhY2V0cyBmb3IgdGhlIFByb2R1Y3QgTGlzdGluZyBQYWdlLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEZhY2V0U2VydmljZSB7XG4gIHByb3RlY3RlZCByZWFkb25seSByb3V0ZVN0YXRlJCA9IHRoaXMucm91dGluZ1xuICAgIC5nZXRSb3V0ZXJTdGF0ZSgpXG4gICAgLnBpcGUocGx1Y2soJ3N0YXRlJykpO1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBzZWFyY2hSZXN1bHQkOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3RTZWFyY2hQYWdlXG4gID4gPSB0aGlzLnJvdXRlU3RhdGUkLnBpcGUoXG4gICAgc3dpdGNoTWFwKChzdGF0ZSkgPT5cbiAgICAgIHRoaXMucHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlLm1vZGVsJC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHBhZ2UpID0+IHRoaXMuZmlsdGVyRm9yUGFnZShzdGF0ZSwgcGFnZSkpLFxuICAgICAgICBtYXAoKHBhZ2UpID0+IHRoaXMubWFwUmVzdWx0cyhzdGF0ZSwgcGFnZSkpXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlOiBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBPYnNlcnZlcyB0aGUgZmFjZXRzIGFuZCBhY3RpdmUgZmFjZXRzIGZvciB0aGUgZ2l2ZW4gcGFnZS4gVGhlIGZhY2V0IGRhdGFcbiAgICogaXMgcHJvdmlkZWQgaW4gYSBgRmFjZXRMaXN0YC5cbiAgICovXG4gIHJlYWRvbmx5IGZhY2V0TGlzdCQ6IE9ic2VydmFibGU8RmFjZXRMaXN0PiA9IHRoaXMuc2VhcmNoUmVzdWx0JC5waXBlKFxuICAgIG1hcChcbiAgICAgIChyZXN1bHQ6IFByb2R1Y3RTZWFyY2hQYWdlKSA9PlxuICAgICAgICAoe1xuICAgICAgICAgIGZhY2V0czogcmVzdWx0LmZhY2V0cyxcbiAgICAgICAgICBhY3RpdmVGYWNldHM6IHJlc3VsdC5icmVhZGNydW1icyxcbiAgICAgICAgfSBhcyBGYWNldExpc3QpXG4gICAgKVxuICApO1xuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIHRoZSBjdXJyZW50IHJlc3VsdCBieSB2ZXJpZnlpbmcgaWYgdGhlIHJlc3VsdCBpcyByZWxhdGVkIHRvIHRoZSBwYWdlLlxuICAgKiBUaGlzIGlzIGRvbmUgdG8gYXZvaWQgYSBjb21iaW5hdGlvbiBvZiB0aGUgbmV4dCBwYWdlIGFuZCB0aGUgY3VycmVudCBzZWFyY2ggcmVzdWx0cy5cbiAgICovXG4gIHByb3RlY3RlZCBmaWx0ZXJGb3JQYWdlKFxuICAgIHN0YXRlOiBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICAgIHBhZ2U6IFByb2R1Y3RTZWFyY2hQYWdlXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmIChzdGF0ZS5jb250ZXh0LnR5cGUgPT09IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHBhZ2UuY3VycmVudFF1ZXJ5Py5xdWVyeT8udmFsdWU/LmluZGV4T2YoXG4gICAgICAgICAgYGFsbENhdGVnb3JpZXM6JHtzdGF0ZS5jb250ZXh0LmlkfWBcbiAgICAgICAgKSA+IC0xXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHN0YXRlLmNvbnRleHQudHlwZSA9PT0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFICYmXG4gICAgICBzdGF0ZS5jb250ZXh0LmlkID09PSAnc2VhcmNoJ1xuICAgICkge1xuICAgICAgcmV0dXJuIHBhZ2UuY3VycmVudFF1ZXJ5LnF1ZXJ5LnZhbHVlLnN0YXJ0c1dpdGgoYCR7c3RhdGUucGFyYW1zLnF1ZXJ5fTpgKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXBSZXN1bHRzKFxuICAgIHN0YXRlOiBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICAgIHBhZ2U6IFByb2R1Y3RTZWFyY2hQYWdlXG4gICk6IFByb2R1Y3RTZWFyY2hQYWdlIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucGFnZSxcbiAgICAgIGJyZWFkY3J1bWJzOiB0aGlzLmZpbHRlckJyZWFkY3J1bWJzKHBhZ2UuYnJlYWRjcnVtYnMsIHN0YXRlLnBhcmFtcyksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmaWx0ZXIgYnJlYWRjcnVtYnMgd2hpY2ggYXJlIG5vdCBhY3RpdmVseSBzZWxlY3RlZFxuICAgKiBidXQgY29taW5nIGZyb20gdGhlIHJvdXRlIG5hdmlnYXRpb25cbiAgICovXG4gIHByaXZhdGUgZmlsdGVyQnJlYWRjcnVtYnMoXG4gICAgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJbXSxcbiAgICBwYXJhbXM6IFBhcmFtc1xuICApOiBCcmVhZGNydW1iW10ge1xuICAgIHJldHVybiBicmVhZGNydW1ic1xuICAgICAgPyBicmVhZGNydW1icy5maWx0ZXIoXG4gICAgICAgICAgKGJyZWFkY3J1bWIpID0+ICF0aGlzLmhhc0JyZWFkY3J1bWIoYnJlYWRjcnVtYiwgcGFyYW1zKVxuICAgICAgICApXG4gICAgICA6IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBicmVhZGNydW1iIGlzIHJlbGF0ZWQgdG8gbmF2aWdhdGlvbiBwYXJhbWV0ZXJzLFxuICAgKiBzaW5jZSBlaXRoZXIgdGhlIGNhdGVnb3J5IG9yIGJyYW5kIGNvZGUgc2hvdWxkIG1hdGNoIHRob3NlIGNvZGVzLlxuICAgKi9cbiAgcHJpdmF0ZSBoYXNCcmVhZGNydW1iKGJyZWFkY3J1bWI6IEJyZWFkY3J1bWIsIHBhcmFtczogUGFyYW1zKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGJyZWFkY3J1bWIuZmFjZXRDb2RlID09PSAnYWxsQ2F0ZWdvcmllcycgJiZcbiAgICAgIGJyZWFkY3J1bWIuZmFjZXRWYWx1ZUNvZGUgPT09IHBhcmFtcy5jYXRlZ29yeUNvZGVcbiAgICApO1xuICB9XG59XG4iXX0=