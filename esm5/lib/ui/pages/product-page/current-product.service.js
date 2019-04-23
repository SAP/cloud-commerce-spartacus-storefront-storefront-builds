/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, switchMap } from 'rxjs/operators';
import { ProductService, RoutingService } from '@spartacus/core';
var CurrentProductService = /** @class */ (function () {
    function CurrentProductService(routingService, productService) {
        this.routingService = routingService;
        this.productService = productService;
    }
    /**
     * @return {?}
     */
    CurrentProductService.prototype.getProduct = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.routingService.getRouterState().pipe(map(function (state) { return state.state.params['productCode']; }), filter(function (productCode) { return !!productCode; }), switchMap(function (productCode) { return _this.productService.get(productCode); }));
    };
    CurrentProductService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CurrentProductService.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductService }
    ]; };
    return CurrentProductService;
}());
export { CurrentProductService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrentProductService.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    CurrentProductService.prototype.productService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1wcm9kdWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvdWkvcGFnZXMvcHJvZHVjdC1wYWdlL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFhLE1BQU0saUJBQWlCLENBQUM7QUFFNUU7SUFFRSwrQkFDVSxjQUE4QixFQUM5QixjQUE4QjtRQUQ5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7Ozs7SUFFSiwwQ0FBVTs7O0lBQVY7UUFBQSxpQkFNQztRQUxDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLEVBQy9DLE1BQU0sQ0FBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQWIsQ0FBYSxDQUFDLEVBQ3BDLFNBQVMsQ0FBQyxVQUFDLFdBQW1CLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBcEMsQ0FBb0MsQ0FBQyxDQUN6RSxDQUFDO0lBQ0osQ0FBQzs7Z0JBYkYsVUFBVTs7OztnQkFGYyxjQUFjO2dCQUE5QixjQUFjOztJQWdCdkIsNEJBQUM7Q0FBQSxBQWRELElBY0M7U0FiWSxxQkFBcUI7Ozs7OztJQUU5QiwrQ0FBc0M7Ozs7O0lBQ3RDLCtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSwgUm91dGluZ1NlcnZpY2UsIFVJUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXJyZW50UHJvZHVjdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZVxuICApIHt9XG5cbiAgZ2V0UHJvZHVjdCgpOiBPYnNlcnZhYmxlPFVJUHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0ZS5wYXJhbXNbJ3Byb2R1Y3RDb2RlJ10pLFxuICAgICAgZmlsdGVyKHByb2R1Y3RDb2RlID0+ICEhcHJvZHVjdENvZGUpLFxuICAgICAgc3dpdGNoTWFwKChwcm9kdWN0Q29kZTogc3RyaW5nKSA9PiB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChwcm9kdWN0Q29kZSkpXG4gICAgKTtcbiAgfVxufVxuIl19