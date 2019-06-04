/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductSearchService, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { PageLayoutService } from '../../../../cms-structure/page/index';
import { ViewModes } from '../product-view/product-view.component';
export class ProductListComponent {
    /**
     * @param {?} productSearchService
     * @param {?} activatedRoute
     * @param {?} pageLayoutService
     */
    constructor(productSearchService, activatedRoute, pageLayoutService) {
        this.productSearchService = productSearchService;
        this.activatedRoute = activatedRoute;
        this.pageLayoutService = pageLayoutService;
        this.searchConfig = {};
        this.gridMode$ = new BehaviorSubject(ViewModes.Grid);
    }
    /**
     * @return {?}
     */
    update() {
        const { queryParams } = this.activatedRoute.snapshot;
        this.options = this.createOptionsByUrlParams();
        if (this.categoryCode && this.categoryCode !== queryParams.categoryCode) {
            this.query = ':relevance:category:' + this.categoryCode;
        }
        if (this.brandCode && this.brandCode !== queryParams.brandCode) {
            this.query = ':relevance:brand:' + this.brandCode;
        }
        if (!this.query && queryParams.query) {
            this.query = queryParams.query;
        }
        this.search(this.query, this.options);
    }
    /**
     * @return {?}
     */
    createOptionsByUrlParams() {
        const { queryParams } = this.activatedRoute.snapshot;
        /** @type {?} */
        const newConfig = Object.assign({}, queryParams);
        delete newConfig.query;
        /** @type {?} */
        const options = Object.assign({}, this.searchConfig, newConfig, { pageSize: this.itemPerPage || 10 });
        if (this.categoryCode) {
            options.categoryCode = this.categoryCode;
        }
        if (this.brandCode) {
            options.brandCode = this.brandCode;
        }
        return options;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateParams$ = this.activatedRoute.params.pipe(tap((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            this.categoryCode = params.categoryCode;
            this.brandCode = params.brandCode;
            this.query = params.query;
            this.update();
        })));
        this.pageLayoutService.templateName$.pipe(take(1)).subscribe((/**
         * @param {?} template
         * @return {?}
         */
        template => {
            this.gridMode$.next(template === 'ProductGridPageTemplate' ? ViewModes.Grid : ViewModes.List);
        }));
        // clean previous search result
        this.productSearchService.clearResults();
        this.model$ = this.productSearchService.getResults().pipe(tap((/**
         * @param {?} searchResult
         * @return {?}
         */
        searchResult => {
            if (Object.keys(searchResult).length === 0) {
                this.search(this.query, this.options);
            }
            else {
                this.getCategoryTitle(searchResult);
            }
        })), filter((/**
         * @param {?} searchResult
         * @return {?}
         */
        searchResult => Object.keys(searchResult).length > 0)));
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    getCategoryTitle(data) {
        if (data.breadcrumbs && data.breadcrumbs.length > 0) {
            this.categoryTitle = data.breadcrumbs[0].facetValueName;
        }
        else if (!this.query.includes(':relevance:')) {
            this.categoryTitle = this.query;
        }
        if (this.categoryTitle) {
            this.categoryTitle =
                data.pagination.totalResults + ' results for ' + this.categoryTitle;
        }
        return this.categoryTitle;
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    viewPage(pageNumber) {
        this.search(this.query, { currentPage: pageNumber });
    }
    /**
     * @param {?} sortCode
     * @return {?}
     */
    sortList(sortCode) {
        this.search(this.query, { sortCode: sortCode });
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setGridMode(mode) {
        this.gridMode$.next(mode);
    }
    /**
     * @protected
     * @param {?} query
     * @param {?=} options
     * @return {?}
     */
    search(query, options) {
        if (this.query) {
            if (options) {
                // Overide default options
                this.searchConfig = Object.assign({}, this.searchConfig, options);
            }
            this.productSearchService.search(query, this.searchConfig);
        }
    }
}
ProductListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-list',
                template: "<ng-container *ngIf=\"(updateParams$ | async)\">\n  <div class=\"cx-page\" *ngIf=\"(model$ | async) as model\">\n    <section class=\"cx-page-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12 col-lg-12\" *ngIf=\"(gridMode$ | async) as gridMode\">\n            <div class=\"cx-sorting top\">\n              <div class=\"row\">\n                <div class=\"col-12 col-lg-4 mr-auto\">\n                  <div class=\"form-group cx-sort-dropdown\">\n                    <cx-sorting\n                      [sortOptions]=\"model.sorts\"\n                      (sortListEvent)=\"sortList($event)\"\n                      [selectedOption]=\"model.pagination.sort\"\n                      placeholder=\"{{\n                        'productList.sortByRelevance' | cxTranslate\n                      }}\"\n                    ></cx-sorting>\n                  </div>\n                </div>\n                <div class=\"col-auto\">\n                  <div\n                    class=\"cx-pagination\"\n                    aria-label=\"product search pagination\"\n                  >\n                    <cx-pagination\n                      [pagination]=\"model.pagination\"\n                      (viewPageEvent)=\"viewPage($event)\"\n                    ></cx-pagination>\n                  </div>\n                </div>\n                <div class=\"col-auto ml-auto ml-lg-0\">\n                  <cx-product-view\n                    (modeChange)=\"setGridMode($event)\"\n                    [mode]=\"gridMode\"\n                  ></cx-product-view>\n                </div>\n              </div>\n            </div>\n            <div class=\"cx-product-container\">\n              <ng-container *ngIf=\"gridMode === 'grid'\">\n                <div class=\"row\">\n                  <cx-product-grid-item\n                    *ngFor=\"let product of model?.products\"\n                    [product]=\"product\"\n                    class=\"col-12 col-sm-6 col-md-4\"\n                  ></cx-product-grid-item>\n                </div>\n              </ng-container>\n\n              <ng-container *ngIf=\"gridMode === 'list'\">\n                <cx-product-list-item\n                  *ngFor=\"let product of model?.products\"\n                  [product]=\"product\"\n                  class=\"cx-product-search-list\"\n                ></cx-product-list-item>\n              </ng-container>\n            </div>\n            <div class=\"cx-sorting bottom\">\n              <div class=\"row\">\n                <div class=\"col-12 col-lg-4 mr-auto\">\n                  <div class=\"form-group cx-sort-dropdown\">\n                    <cx-sorting\n                      [sortOptions]=\"model.sorts\"\n                      (sortListEvent)=\"sortList($event)\"\n                      [selectedOption]=\"model.pagination.sort\"\n                      placeholder=\"{{\n                        'productList.sortByRelevance' | cxTranslate\n                      }}\"\n                    ></cx-sorting>\n                  </div>\n                </div>\n                <div class=\"col-auto\" aria-label=\"product search pagination\">\n                  <div class=\"cx-pagination\">\n                    <cx-pagination\n                      [pagination]=\"model.pagination\"\n                      (viewPageEvent)=\"viewPage($event)\"\n                    ></cx-pagination>\n                  </div>\n                </div>\n                <div class=\"col-auto ml-auto ml-lg-0\">\n                  <cx-product-view\n                    (modeChange)=\"setGridMode($event)\"\n                    [mode]=\"gridMode\"\n                  ></cx-product-view>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
ProductListComponent.ctorParameters = () => [
    { type: ProductSearchService },
    { type: ActivatedRoute },
    { type: PageLayoutService }
];
if (false) {
    /** @type {?} */
    ProductListComponent.prototype.query;
    /** @type {?} */
    ProductListComponent.prototype.categoryCode;
    /** @type {?} */
    ProductListComponent.prototype.brandCode;
    /** @type {?} */
    ProductListComponent.prototype.itemPerPage;
    /** @type {?} */
    ProductListComponent.prototype.model$;
    /** @type {?} */
    ProductListComponent.prototype.searchConfig;
    /** @type {?} */
    ProductListComponent.prototype.categoryTitle;
    /** @type {?} */
    ProductListComponent.prototype.options;
    /** @type {?} */
    ProductListComponent.prototype.updateParams$;
    /** @type {?} */
    ProductListComponent.prototype.gridMode$;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponent.prototype.productSearchService;
    /**
     * @type {?}
     * @private
     */
    ProductListComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    ProductListComponent.prototype.pageLayoutService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L2NvbnRhaW5lci9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBRUwsb0JBQW9CLEdBRXJCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFNbkUsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBYS9CLFlBQ1ksb0JBQTBDLEVBQzVDLGNBQThCLEVBQzlCLGlCQUFvQztRQUZsQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBVDlDLGlCQUFZLEdBQWlCLEVBQUUsQ0FBQztRQUloQyxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBTXhELENBQUM7Ozs7SUFFSixNQUFNO2NBQ0UsRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVE7UUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztR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RUFBRSxPQUFzQjtRQUNwRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLE9BQU8sRUFBRTtnQkFDWCwwQkFBMEI7Z0JBQzFCLElBQUksQ0FBQyxZQUFZLHFCQUNaLElBQUksQ0FBQyxZQUFZLEVBQ2pCLE9BQU8sQ0FDWCxDQUFDO2FBQ0g7WUFFRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzs7WUFqSUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHV5SEFBNEM7YUFDN0M7Ozs7WUFYQyxvQkFBb0I7WUFIYixjQUFjO1lBUWQsaUJBQWlCOzs7O0lBUXhCLHFDQUFjOztJQUNkLDRDQUFxQjs7SUFDckIseUNBQWtCOztJQUNsQiwyQ0FBb0I7O0lBRXBCLHNDQUFzQzs7SUFDdEMsNENBQWdDOztJQUNoQyw2Q0FBc0I7O0lBQ3RCLHVDQUFzQjs7SUFDdEIsNkNBQWtDOztJQUNsQyx5Q0FBMkQ7Ozs7O0lBR3pELG9EQUFvRDs7Ozs7SUFDcEQsOENBQXNDOzs7OztJQUN0QyxpREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gIFNlYXJjaENvbmZpZyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9pbmRleCc7XG5pbXBvcnQgeyBWaWV3TW9kZXMgfSBmcm9tICcuLi9wcm9kdWN0LXZpZXcvcHJvZHVjdC12aWV3LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHF1ZXJ5OiBzdHJpbmc7XG4gIGNhdGVnb3J5Q29kZTogc3RyaW5nO1xuICBicmFuZENvZGU6IHN0cmluZztcbiAgaXRlbVBlclBhZ2U6IG51bWJlcjtcblxuICBtb2RlbCQ6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+O1xuICBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZyA9IHt9O1xuICBjYXRlZ29yeVRpdGxlOiBzdHJpbmc7XG4gIG9wdGlvbnM6IFNlYXJjaENvbmZpZztcbiAgdXBkYXRlUGFyYW1zJDogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuICBncmlkTW9kZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFZpZXdNb2Rlcz4oVmlld01vZGVzLkdyaWQpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwYWdlTGF5b3V0U2VydmljZTogUGFnZUxheW91dFNlcnZpY2VcbiAgKSB7fVxuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90O1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY3JlYXRlT3B0aW9uc0J5VXJsUGFyYW1zKCk7XG5cbiAgICBpZiAodGhpcy5jYXRlZ29yeUNvZGUgJiYgdGhpcy5jYXRlZ29yeUNvZGUgIT09IHF1ZXJ5UGFyYW1zLmNhdGVnb3J5Q29kZSkge1xuICAgICAgdGhpcy5xdWVyeSA9ICc6cmVsZXZhbmNlOmNhdGVnb3J5OicgKyB0aGlzLmNhdGVnb3J5Q29kZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYnJhbmRDb2RlICYmIHRoaXMuYnJhbmRDb2RlICE9PSBxdWVyeVBhcmFtcy5icmFuZENvZGUpIHtcbiAgICAgIHRoaXMucXVlcnkgPSAnOnJlbGV2YW5jZTpicmFuZDonICsgdGhpcy5icmFuZENvZGU7XG4gICAgfVxuICAgIGlmICghdGhpcy5xdWVyeSAmJiBxdWVyeVBhcmFtcy5xdWVyeSkge1xuICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5UGFyYW1zLnF1ZXJ5O1xuICAgIH1cbiAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5LCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgY3JlYXRlT3B0aW9uc0J5VXJsUGFyYW1zKCk6IFNlYXJjaENvbmZpZyB7XG4gICAgY29uc3QgeyBxdWVyeVBhcmFtcyB9ID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdDtcbiAgICBjb25zdCBuZXdDb25maWcgPSB7XG4gICAgICAuLi5xdWVyeVBhcmFtcyxcbiAgICB9O1xuICAgIGRlbGV0ZSBuZXdDb25maWcucXVlcnk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIC4uLnRoaXMuc2VhcmNoQ29uZmlnLFxuICAgICAgLi4ubmV3Q29uZmlnLFxuICAgICAgcGFnZVNpemU6IHRoaXMuaXRlbVBlclBhZ2UgfHwgMTAsXG4gICAgfTtcbiAgICBpZiAodGhpcy5jYXRlZ29yeUNvZGUpIHtcbiAgICAgIG9wdGlvbnMuY2F0ZWdvcnlDb2RlID0gdGhpcy5jYXRlZ29yeUNvZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLmJyYW5kQ29kZSkge1xuICAgICAgb3B0aW9ucy5icmFuZENvZGUgPSB0aGlzLmJyYW5kQ29kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUGFyYW1zJCA9IHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnBpcGUoXG4gICAgICB0YXAocGFyYW1zID0+IHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeUNvZGUgPSBwYXJhbXMuY2F0ZWdvcnlDb2RlO1xuICAgICAgICB0aGlzLmJyYW5kQ29kZSA9IHBhcmFtcy5icmFuZENvZGU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBwYXJhbXMucXVlcnk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnBhZ2VMYXlvdXRTZXJ2aWNlLnRlbXBsYXRlTmFtZSQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUodGVtcGxhdGUgPT4ge1xuICAgICAgdGhpcy5ncmlkTW9kZSQubmV4dChcbiAgICAgICAgdGVtcGxhdGUgPT09ICdQcm9kdWN0R3JpZFBhZ2VUZW1wbGF0ZScgPyBWaWV3TW9kZXMuR3JpZCA6IFZpZXdNb2Rlcy5MaXN0XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gY2xlYW4gcHJldmlvdXMgc2VhcmNoIHJlc3VsdFxuICAgIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuY2xlYXJSZXN1bHRzKCk7XG5cbiAgICB0aGlzLm1vZGVsJCA9IHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpLnBpcGUoXG4gICAgICB0YXAoc2VhcmNoUmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNlYXJjaFJlc3VsdCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdldENhdGVnb3J5VGl0bGUoc2VhcmNoUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIoc2VhcmNoUmVzdWx0ID0+IE9iamVjdC5rZXlzKHNlYXJjaFJlc3VsdCkubGVuZ3RoID4gMClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENhdGVnb3J5VGl0bGUoZGF0YTogUHJvZHVjdFNlYXJjaFBhZ2UpOiBzdHJpbmcge1xuICAgIGlmIChkYXRhLmJyZWFkY3J1bWJzICYmIGRhdGEuYnJlYWRjcnVtYnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jYXRlZ29yeVRpdGxlID0gZGF0YS5icmVhZGNydW1ic1swXS5mYWNldFZhbHVlTmFtZTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnF1ZXJ5LmluY2x1ZGVzKCc6cmVsZXZhbmNlOicpKSB7XG4gICAgICB0aGlzLmNhdGVnb3J5VGl0bGUgPSB0aGlzLnF1ZXJ5O1xuICAgIH1cbiAgICBpZiAodGhpcy5jYXRlZ29yeVRpdGxlKSB7XG4gICAgICB0aGlzLmNhdGVnb3J5VGl0bGUgPVxuICAgICAgICBkYXRhLnBhZ2luYXRpb24udG90YWxSZXN1bHRzICsgJyByZXN1bHRzIGZvciAnICsgdGhpcy5jYXRlZ29yeVRpdGxlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNhdGVnb3J5VGl0bGU7XG4gIH1cblxuICB2aWV3UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5LCB7IGN1cnJlbnRQYWdlOiBwYWdlTnVtYmVyIH0pO1xuICB9XG5cbiAgc29ydExpc3Qoc29ydENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnksIHsgc29ydENvZGU6IHNvcnRDb2RlIH0pO1xuICB9XG5cbiAgc2V0R3JpZE1vZGUobW9kZTogVmlld01vZGVzKTogdm9pZCB7XG4gICAgdGhpcy5ncmlkTW9kZSQubmV4dChtb2RlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZWFyY2gocXVlcnk6IHN0cmluZywgb3B0aW9ucz86IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnF1ZXJ5KSB7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAvLyBPdmVyaWRlIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgICB0aGlzLnNlYXJjaENvbmZpZyA9IHtcbiAgICAgICAgICAuLi50aGlzLnNlYXJjaENvbmZpZyxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLnNlYXJjaChxdWVyeSwgdGhpcy5zZWFyY2hDb25maWcpO1xuICAgIH1cbiAgfVxufVxuIl19