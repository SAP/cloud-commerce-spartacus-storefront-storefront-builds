/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, } from '@angular/core';
import { CartService } from '@spartacus/core';
import { filter } from 'rxjs/operators';
import { ModalService } from '../../../shared/components/modal/index';
import { CurrentProductService } from '../../product/current-product.service';
import { AddedToCartDialogComponent } from './added-to-cart-dialog/added-to-cart-dialog.component';
var AddToCartComponent = /** @class */ (function () {
    function AddToCartComponent(cartService, modalService, currentProductService, cd) {
        this.cartService = cartService;
        this.modalService = modalService;
        this.currentProductService = currentProductService;
        this.cd = cd;
        this.showQuantity = true;
        this.hasStock = false;
        this.quantity = 1;
        this.increment = false;
    }
    /**
     * @return {?}
     */
    AddToCartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.product) {
            this.productCode = this.product.code;
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
            this.setStockInfo(this.product);
            this.cd.markForCheck();
        }
        else if (this.productCode) {
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
            // force hasStock and quantity for the time being, as we do not have more info:
            this.quantity = 1;
            this.hasStock = true;
            this.cd.markForCheck();
        }
        else {
            this.subscription = this.currentProductService
                .getProduct()
                .pipe(filter(Boolean))
                .subscribe((/**
             * @param {?} product
             * @return {?}
             */
            function (product) {
                _this.productCode = product.code;
                _this.setStockInfo(product);
                _this.cartEntry$ = _this.cartService.getEntry(_this.productCode);
                _this.cd.markForCheck();
            }));
        }
    };
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    AddToCartComponent.prototype.setStockInfo = /**
     * @private
     * @param {?} product
     * @return {?}
     */
    function (product) {
        this.quantity = 1;
        this.hasStock =
            product.stock && product.stock.stockLevelStatus !== 'outOfStock';
        if (this.hasStock && product.stock.stockLevel) {
            this.maxQuantity = product.stock.stockLevel;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AddToCartComponent.prototype.updateCount = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.quantity = value;
    };
    /**
     * @return {?}
     */
    AddToCartComponent.prototype.addToCart = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.productCode || this.quantity <= 0) {
            return;
        }
        // check item is already present in the cart
        // so modal will have proper header text displayed
        this.cartService
            .getEntry(this.productCode)
            .subscribe((/**
         * @param {?} entry
         * @return {?}
         */
        function (entry) {
            if (entry) {
                _this.increment = true;
            }
            _this.openModal();
            _this.cartService.addEntry(_this.productCode, _this.quantity);
            _this.increment = false;
        }))
            .unsubscribe();
    };
    /**
     * @private
     * @return {?}
     */
    AddToCartComponent.prototype.openModal = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modalInstance;
        this.modalRef = this.modalService.open(AddedToCartDialogComponent, {
            centered: true,
            size: 'lg',
        });
        modalInstance = this.modalRef.componentInstance;
        modalInstance.entry$ = this.cartEntry$;
        modalInstance.cart$ = this.cartService.getActive();
        modalInstance.loaded$ = this.cartService.getLoaded();
        modalInstance.quantity = this.quantity;
        modalInstance.increment = this.increment;
    };
    /**
     * @return {?}
     */
    AddToCartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AddToCartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-add-to-cart',
                    template: "<div class=\"quantity\" *ngIf=\"productCode && showQuantity\">\n  <label>{{ 'addToCart.quantity' | cxTranslate }}</label>\n  <cx-item-counter\n    [value]=\"quantity\"\n    isValueChangeable=\"true\"\n    [min]=\"1\"\n    [max]=\"maxQuantity || null\"\n    *ngIf=\"hasStock\"\n    (update)=\"updateCount($event)\"\n  ></cx-item-counter>\n  <span class=\"info\">{{\n    hasStock\n      ? ('addToCart.inStock' | cxTranslate)\n      : ('addToCart.outOfStock' | cxTranslate)\n  }}</span>\n</div>\n<button\n  *ngIf=\"hasStock\"\n  class=\"btn btn-primary btn-block\"\n  type=\"button\"\n  [disabled]=\"quantity <= 0 || quantity > maxQuantity\"\n  (click)=\"addToCart()\"\n>\n  {{ 'addToCart.addToCart' | cxTranslate }}\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    AddToCartComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: ModalService },
        { type: CurrentProductService },
        { type: ChangeDetectorRef }
    ]; };
    AddToCartComponent.propDecorators = {
        productCode: [{ type: Input }],
        showQuantity: [{ type: Input }],
        product: [{ type: Input }]
    };
    return AddToCartComponent;
}());
export { AddToCartComponent };
if (false) {
    /** @type {?} */
    AddToCartComponent.prototype.productCode;
    /** @type {?} */
    AddToCartComponent.prototype.showQuantity;
    /**
     * As long as we do not support #5026, we require product input, as we need
     *  a reference to the product model to fetch the stock data.
     * @type {?}
     */
    AddToCartComponent.prototype.product;
    /** @type {?} */
    AddToCartComponent.prototype.maxQuantity;
    /** @type {?} */
    AddToCartComponent.prototype.modalRef;
    /** @type {?} */
    AddToCartComponent.prototype.hasStock;
    /** @type {?} */
    AddToCartComponent.prototype.quantity;
    /** @type {?} */
    AddToCartComponent.prototype.increment;
    /** @type {?} */
    AddToCartComponent.prototype.cartEntry$;
    /** @type {?} */
    AddToCartComponent.prototype.subscription;
    /**
     * @type {?}
     * @protected
     */
    AddToCartComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    AddToCartComponent.prototype.modalService;
    /**
     * @type {?}
     * @protected
     */
    AddToCartComponent.prototype.currentProductService;
    /**
     * @type {?}
     * @private
     */
    AddToCartComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBdUIsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFZLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRW5HO0lBZ0NFLDRCQUNZLFdBQXdCLEVBQ3hCLFlBQTBCLEVBQzFCLHFCQUE0QyxFQUM5QyxFQUFxQjtRQUhuQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzlDLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBN0J0QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQVc3QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBaUJmLENBQUM7Ozs7SUFFSixxQ0FBUTs7O0lBQVI7UUFBQSxpQkF1QkM7UUF0QkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDckMs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IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIE9yZGVyRW50cnksIFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNb2RhbFJlZiwgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vYWRkZWQtdG8tY2FydC1kaWFsb2cvYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkLXRvLWNhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLXRvLWNhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWRkVG9DYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwcm9kdWN0Q29kZTogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93UXVhbnRpdHkgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBBcyBsb25nIGFzIHdlIGRvIG5vdCBzdXBwb3J0ICM1MDI2LCB3ZSByZXF1aXJlIHByb2R1Y3QgaW5wdXQsIGFzIHdlIG5lZWRcbiAgICogIGEgcmVmZXJlbmNlIHRvIHRoZSBwcm9kdWN0IG1vZGVsIHRvIGZldGNoIHRoZSBzdG9jayBkYXRhLlxuICAgKi9cbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDtcblxuICBtYXhRdWFudGl0eTogbnVtYmVyO1xuICBtb2RhbFJlZjogTW9kYWxSZWY7XG5cbiAgaGFzU3RvY2sgPSBmYWxzZTtcbiAgcXVhbnRpdHkgPSAxO1xuICBpbmNyZW1lbnQgPSBmYWxzZTtcbiAgY2FydEVudHJ5JDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PjtcblxuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsXG4gICAgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5wcm9kdWN0KSB7XG4gICAgICB0aGlzLnByb2R1Y3RDb2RlID0gdGhpcy5wcm9kdWN0LmNvZGU7XG4gICAgICB0aGlzLmNhcnRFbnRyeSQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEVudHJ5KHRoaXMucHJvZHVjdENvZGUpO1xuICAgICAgdGhpcy5zZXRTdG9ja0luZm8odGhpcy5wcm9kdWN0KTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2R1Y3RDb2RlKSB7XG4gICAgICB0aGlzLmNhcnRFbnRyeSQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEVudHJ5KHRoaXMucHJvZHVjdENvZGUpO1xuICAgICAgLy8gZm9yY2UgaGFzU3RvY2sgYW5kIHF1YW50aXR5IGZvciB0aGUgdGltZSBiZWluZywgYXMgd2UgZG8gbm90IGhhdmUgbW9yZSBpbmZvOlxuICAgICAgdGhpcy5xdWFudGl0eSA9IDE7XG4gICAgICB0aGlzLmhhc1N0b2NrID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2VcbiAgICAgICAgLmdldFByb2R1Y3QoKVxuICAgICAgICAucGlwZShmaWx0ZXIoQm9vbGVhbikpXG4gICAgICAgIC5zdWJzY3JpYmUoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgICB0aGlzLnByb2R1Y3RDb2RlID0gcHJvZHVjdC5jb2RlO1xuICAgICAgICAgIHRoaXMuc2V0U3RvY2tJbmZvKHByb2R1Y3QpO1xuICAgICAgICAgIHRoaXMuY2FydEVudHJ5JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0RW50cnkodGhpcy5wcm9kdWN0Q29kZSk7XG4gICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdG9ja0luZm8ocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQge1xuICAgIHRoaXMucXVhbnRpdHkgPSAxO1xuICAgIHRoaXMuaGFzU3RvY2sgPVxuICAgICAgcHJvZHVjdC5zdG9jayAmJiBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWxTdGF0dXMgIT09ICdvdXRPZlN0b2NrJztcbiAgICBpZiAodGhpcy5oYXNTdG9jayAmJiBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWwpIHtcbiAgICAgIHRoaXMubWF4UXVhbnRpdHkgPSBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWw7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ291bnQodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucXVhbnRpdHkgPSB2YWx1ZTtcbiAgfVxuXG4gIGFkZFRvQ2FydCgpIHtcbiAgICBpZiAoIXRoaXMucHJvZHVjdENvZGUgfHwgdGhpcy5xdWFudGl0eSA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGNoZWNrIGl0ZW0gaXMgYWxyZWFkeSBwcmVzZW50IGluIHRoZSBjYXJ0XG4gICAgLy8gc28gbW9kYWwgd2lsbCBoYXZlIHByb3BlciBoZWFkZXIgdGV4dCBkaXNwbGF5ZWRcbiAgICB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0RW50cnkodGhpcy5wcm9kdWN0Q29kZSlcbiAgICAgIC5zdWJzY3JpYmUoZW50cnkgPT4ge1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB0aGlzLmluY3JlbWVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuTW9kYWwoKTtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5hZGRFbnRyeSh0aGlzLnByb2R1Y3RDb2RlLCB0aGlzLnF1YW50aXR5KTtcbiAgICAgICAgdGhpcy5pbmNyZW1lbnQgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgb3Blbk1vZGFsKCkge1xuICAgIGxldCBtb2RhbEluc3RhbmNlOiBhbnk7XG4gICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnQsIHtcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgc2l6ZTogJ2xnJyxcbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UgPSB0aGlzLm1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIG1vZGFsSW5zdGFuY2UuZW50cnkkID0gdGhpcy5jYXJ0RW50cnkkO1xuICAgIG1vZGFsSW5zdGFuY2UuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICAgIG1vZGFsSW5zdGFuY2UubG9hZGVkJCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0TG9hZGVkKCk7XG4gICAgbW9kYWxJbnN0YW5jZS5xdWFudGl0eSA9IHRoaXMucXVhbnRpdHk7XG4gICAgbW9kYWxJbnN0YW5jZS5pbmNyZW1lbnQgPSB0aGlzLmluY3JlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==