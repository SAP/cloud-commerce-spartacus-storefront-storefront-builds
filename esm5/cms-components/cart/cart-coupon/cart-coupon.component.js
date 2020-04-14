import { __decorate, __read } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActiveCartService, AuthService, Cart, CartVoucherService, CustomerCoupon, CustomerCouponSearchResult, CustomerCouponService, FeatureConfigService, OCC_USER_ID_ANONYMOUS, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
var CartCouponComponent = /** @class */ (function () {
    function CartCouponComponent(authService, cartVoucherService, formBuilder, customerCouponService, featureConfig, activeCartService) {
        this.authService = authService;
        this.cartVoucherService = cartVoucherService;
        this.formBuilder = formBuilder;
        this.customerCouponService = customerCouponService;
        this.featureConfig = featureConfig;
        this.activeCartService = activeCartService;
        this.MAX_CUSTOMER_COUPON_PAGE = 100;
        this.ignoreCloseEvent = false;
        this.subscription = new Subscription();
        this.couponBoxIsActive = false;
    }
    CartCouponComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.customerCouponService) {
            this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
        }
        if (this.featureConfig && this.featureConfig.isLevel('1.5')) {
            this.cart$ = combineLatest([
                this.activeCartService.getActive(),
                this.authService.getOccUserId(),
                this.customerCouponService.getCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE),
            ]).pipe(tap(function (_a) {
                var _b = __read(_a, 3), cart = _b[0], userId = _b[1], customerCoupons = _b[2];
                _this.cartId =
                    userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code;
                _this.getApplicableCustomerCoupons(cart, customerCoupons.coupons);
            }), map(function (_a) {
                var _b = __read(_a, 1), cart = _b[0];
                return cart;
            }));
        }
        //TODO(issue:#5971) Deprecated since 1.5
        else {
            this.cart$ = combineLatest([
                this.activeCartService.getActive(),
                this.authService.getOccUserId(),
            ]).pipe(tap(function (_a) {
                var _b = __read(_a, 2), cart = _b[0], userId = _b[1];
                return (_this.cartId =
                    userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code);
            }), map(function (_a) {
                var _b = __read(_a, 1), cart = _b[0];
                return cart;
            }));
        }
        //TODO(issue:#5971) Deprecated since 1.5
        this.cartIsLoading$ = this.activeCartService
            .isStable()
            .pipe(map(function (loaded) { return !loaded; }));
        this.cartVoucherService.resetAddVoucherProcessingState();
        this.couponForm = this.formBuilder.group({
            couponCode: ['', [Validators.required]],
        });
        // TODO(#7241): Replace process subscriptions with event listeners and drop process for ADD_VOUCHER
        this.subscription.add(this.cartVoucherService
            .getAddVoucherResultSuccess()
            .subscribe(function (success) {
            _this.onSuccess(success);
        }));
        // TODO(#7241): Replace process subscriptions with event listeners and drop process for ADD_VOUCHER
        this.subscription.add(this.cartVoucherService.getAddVoucherResultError().subscribe(function (error) {
            _this.onError(error);
        }));
    };
    CartCouponComponent.prototype.onError = function (error) {
        if (error) {
            this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
            this.cartVoucherService.resetAddVoucherProcessingState();
        }
    };
    CartCouponComponent.prototype.onSuccess = function (success) {
        if (success) {
            this.couponForm.reset();
            this.cartVoucherService.resetAddVoucherProcessingState();
        }
    };
    CartCouponComponent.prototype.getApplicableCustomerCoupons = function (cart, coupons) {
        var _this = this;
        this.applicableCoupons = coupons || [];
        if (cart.appliedVouchers) {
            cart.appliedVouchers.forEach(function (appliedVoucher) {
                _this.applicableCoupons = _this.applicableCoupons.filter(function (coupon) { return coupon.couponId !== appliedVoucher.code; });
            });
        }
    };
    CartCouponComponent.prototype.applyVoucher = function () {
        if (this.couponForm.valid) {
            this.cartVoucherService.addVoucher(this.couponForm.value.couponCode, this.cartId);
        }
        else {
            this.couponForm.markAllAsTouched();
        }
    };
    CartCouponComponent.prototype.applyCustomerCoupon = function (couponId) {
        this.cartVoucherService.addVoucher(couponId, this.cartId);
        this.couponBoxIsActive = false;
    };
    CartCouponComponent.prototype.close = function (event) {
        if (!this.ignoreCloseEvent) {
            this.couponBoxIsActive = false;
            if (event && event.target) {
                event.target.blur();
            }
        }
        this.ignoreCloseEvent = false;
    };
    CartCouponComponent.prototype.disableClose = function () {
        this.ignoreCloseEvent = true;
    };
    CartCouponComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.cartVoucherService.resetAddVoucherProcessingState();
    };
    CartCouponComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: CartVoucherService },
        { type: FormBuilder },
        { type: CustomerCouponService },
        { type: FeatureConfigService },
        { type: ActiveCartService }
    ]; };
    CartCouponComponent = __decorate([
        Component({
            selector: 'cx-cart-coupon',
            template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <div class=\"cx-cart-coupon-title\">\n    {{ 'voucher.coupon' | cxTranslate }}\n  </div>\n  <div class=\"form-group\">\n    <form (ngSubmit)=\"applyVoucher()\" [formGroup]=\"couponForm\">\n      <div class=\"cx-cart-coupon-container\">\n        <input\n          type=\"text\"\n          class=\"form-control input-coupon-code\"\n          formControlName=\"couponCode\"\n          placeholder=\"{{ 'voucher.placeholder' | cxTranslate }}\"\n        />\n        <button\n          class=\"btn btn-block btn-action apply-coupon-button\"\n          type=\"submit\"\n          [disabled]=\"cartIsLoading$ | async\"\n          [class.disabled]=\"cartIsLoading$ | async\"\n        >\n          {{ 'voucher.apply' | cxTranslate }}\n        </button>\n        <cx-form-errors\n          [control]=\"couponForm.get('couponCode')\"\n        ></cx-form-errors>\n      </div>\n    </form>\n  </div>\n\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [cartIsLoading]=\"cartIsLoading$ | async\"\n    [isReadOnly]=\"false\"\n  >\n  </cx-applied-coupons>\n\n  <ng-container *ngIf=\"applicableCoupons && applicableCoupons.length > 0\">\n    <div class=\"cx-available-coupon\">\n      <div class=\"title cx-cart-coupon-title\">\n        {{ 'voucher.availableCoupons' | cxTranslate }}\n      </div>\n      <div class=\"message\">\n        {{ 'voucher.availableCouponsLabel' | cxTranslate }}\n      </div>\n      <div class=\"scroll\">\n        <div class=\"coupons card\" *ngFor=\"let coupon of applicableCoupons\">\n          <button\n            (click)=\"applyCustomerCoupon(coupon.couponId)\"\n            class=\"coupon-id link\"\n            [disabled]=\"cartIsLoading$ | async\"\n            [class.disabled]=\"cartIsLoading$ | async\"\n          >\n            {{ coupon.couponId }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n"
        })
    ], CartCouponComponent);
    return CartCouponComponent;
}());
export { CartCouponComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLElBQUksRUFDSixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLDBCQUEwQixFQUMxQixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLHFCQUFxQixHQUN0QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNMUM7SUFjRSw2QkFDWSxXQUF3QixFQUN4QixrQkFBc0MsRUFDdEMsV0FBd0IsRUFDeEIscUJBQTRDLEVBQzVDLGFBQW1DLEVBQ25DLGlCQUFvQztRQUxwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFuQmhELDZCQUF3QixHQUFHLEdBQUcsQ0FBQztRQU92QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFekIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFDLHNC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QUM7T0FDVyxtQkFBbUIsQ0FnSy9CO0lBQUQsMEJBQUM7Q0FBQSxBQWhLRCxJQWdLQztTQWhLWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBDYXJ0LFxuICBDYXJ0Vm91Y2hlclNlcnZpY2UsXG4gIEN1c3RvbWVyQ291cG9uLFxuICBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdCxcbiAgQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLFxuICBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1jb3Vwb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1jb3Vwb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0Q291cG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBNQVhfQ1VTVE9NRVJfQ09VUE9OX1BBR0UgPSAxMDA7XG4gIGNvdXBvbkZvcm06IEZvcm1Hcm91cDtcbiAgY2FydElzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBjYXJ0SWQ6IHN0cmluZztcbiAgYXBwbGljYWJsZUNvdXBvbnM6IEN1c3RvbWVyQ291cG9uW107XG5cbiAgcHJpdmF0ZSBpZ25vcmVDbG9zZUV2ZW50ID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY291cG9uQm94SXNBY3RpdmUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0Vm91Y2hlclNlcnZpY2U6IENhcnRWb3VjaGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCBjdXN0b21lckNvdXBvblNlcnZpY2U6IEN1c3RvbWVyQ291cG9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tZXJDb3Vwb25TZXJ2aWNlKSB7XG4gICAgICB0aGlzLmN1c3RvbWVyQ291cG9uU2VydmljZS5sb2FkQ3VzdG9tZXJDb3Vwb25zKFxuICAgICAgICB0aGlzLk1BWF9DVVNUT01FUl9DT1VQT05fUEFHRVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZmVhdHVyZUNvbmZpZyAmJiB0aGlzLmZlYXR1cmVDb25maWcuaXNMZXZlbCgnMS41JykpIHtcbiAgICAgIHRoaXMuY2FydCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgICAgdGhpcy5jdXN0b21lckNvdXBvblNlcnZpY2UuZ2V0Q3VzdG9tZXJDb3Vwb25zKFxuICAgICAgICAgIHRoaXMuTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFXG4gICAgICAgICksXG4gICAgICBdKS5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgKFtjYXJ0LCB1c2VySWQsIGN1c3RvbWVyQ291cG9uc106IFtcbiAgICAgICAgICAgIENhcnQsXG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdFxuICAgICAgICAgIF0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FydElkID1cbiAgICAgICAgICAgICAgdXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgPyBjYXJ0Lmd1aWQgOiBjYXJ0LmNvZGU7XG4gICAgICAgICAgICB0aGlzLmdldEFwcGxpY2FibGVDdXN0b21lckNvdXBvbnMoY2FydCwgY3VzdG9tZXJDb3Vwb25zLmNvdXBvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgbWFwKChbY2FydF06IFtDYXJ0LCBzdHJpbmcsIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0XSkgPT4gY2FydClcbiAgICAgICk7XG4gICAgfVxuICAgIC8vVE9ETyhpc3N1ZTojNTk3MSkgRGVwcmVjYXRlZCBzaW5jZSAxLjVcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2FydCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgIF0pLnBpcGUoXG4gICAgICAgIHRhcChcbiAgICAgICAgICAoW2NhcnQsIHVzZXJJZF06IFtDYXJ0LCBzdHJpbmddKSA9PlxuICAgICAgICAgICAgKHRoaXMuY2FydElkID1cbiAgICAgICAgICAgICAgdXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgPyBjYXJ0Lmd1aWQgOiBjYXJ0LmNvZGUpXG4gICAgICAgICksXG4gICAgICAgIG1hcCgoW2NhcnRdOiBbQ2FydCwgc3RyaW5nXSkgPT4gY2FydClcbiAgICAgICk7XG4gICAgfVxuICAgIC8vVE9ETyhpc3N1ZTojNTk3MSkgRGVwcmVjYXRlZCBzaW5jZSAxLjVcblxuICAgIHRoaXMuY2FydElzTG9hZGluZyQgPSB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAuaXNTdGFibGUoKVxuICAgICAgLnBpcGUobWFwKChsb2FkZWQpID0+ICFsb2FkZWQpKTtcblxuICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLnJlc2V0QWRkVm91Y2hlclByb2Nlc3NpbmdTdGF0ZSgpO1xuXG4gICAgdGhpcy5jb3Vwb25Gb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBjb3Vwb25Db2RlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgfSk7XG5cbiAgICAvLyBUT0RPKCM3MjQxKTogUmVwbGFjZSBwcm9jZXNzIHN1YnNjcmlwdGlvbnMgd2l0aCBldmVudCBsaXN0ZW5lcnMgYW5kIGRyb3AgcHJvY2VzcyBmb3IgQUREX1ZPVUNIRVJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZVxuICAgICAgICAuZ2V0QWRkVm91Y2hlclJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAuc3Vic2NyaWJlKChzdWNjZXNzKSA9PiB7XG4gICAgICAgICAgdGhpcy5vblN1Y2Nlc3Moc3VjY2Vzcyk7XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIFRPRE8oIzcyNDEpOiBSZXBsYWNlIHByb2Nlc3Mgc3Vic2NyaXB0aW9ucyB3aXRoIGV2ZW50IGxpc3RlbmVycyBhbmQgZHJvcCBwcm9jZXNzIGZvciBBRERfVk9VQ0hFUlxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLmdldEFkZFZvdWNoZXJSZXN1bHRFcnJvcigpLnN1YnNjcmliZSgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5vbkVycm9yKGVycm9yKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkVycm9yKGVycm9yOiBib29sZWFuKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGlzLmN1c3RvbWVyQ291cG9uU2VydmljZS5sb2FkQ3VzdG9tZXJDb3Vwb25zKFxuICAgICAgICB0aGlzLk1BWF9DVVNUT01FUl9DT1VQT05fUEFHRVxuICAgICAgKTtcbiAgICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLnJlc2V0QWRkVm91Y2hlclByb2Nlc3NpbmdTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKSB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuY291cG9uRm9ybS5yZXNldCgpO1xuICAgICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UucmVzZXRBZGRWb3VjaGVyUHJvY2Vzc2luZ1N0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldEFwcGxpY2FibGVDdXN0b21lckNvdXBvbnMoXG4gICAgY2FydDogQ2FydCxcbiAgICBjb3Vwb25zOiBDdXN0b21lckNvdXBvbltdXG4gICk6IHZvaWQge1xuICAgIHRoaXMuYXBwbGljYWJsZUNvdXBvbnMgPSBjb3Vwb25zIHx8IFtdO1xuICAgIGlmIChjYXJ0LmFwcGxpZWRWb3VjaGVycykge1xuICAgICAgY2FydC5hcHBsaWVkVm91Y2hlcnMuZm9yRWFjaCgoYXBwbGllZFZvdWNoZXIpID0+IHtcbiAgICAgICAgdGhpcy5hcHBsaWNhYmxlQ291cG9ucyA9IHRoaXMuYXBwbGljYWJsZUNvdXBvbnMuZmlsdGVyKFxuICAgICAgICAgIChjb3Vwb24pID0+IGNvdXBvbi5jb3Vwb25JZCAhPT0gYXBwbGllZFZvdWNoZXIuY29kZVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlWb3VjaGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvdXBvbkZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLmFkZFZvdWNoZXIoXG4gICAgICAgIHRoaXMuY291cG9uRm9ybS52YWx1ZS5jb3Vwb25Db2RlLFxuICAgICAgICB0aGlzLmNhcnRJZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb3Vwb25Gb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBhcHBseUN1c3RvbWVyQ291cG9uKGNvdXBvbklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5hZGRWb3VjaGVyKGNvdXBvbklkLCB0aGlzLmNhcnRJZCk7XG4gICAgdGhpcy5jb3Vwb25Cb3hJc0FjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgY2xvc2UoZXZlbnQ6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaWdub3JlQ2xvc2VFdmVudCkge1xuICAgICAgdGhpcy5jb3Vwb25Cb3hJc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnRhcmdldCkge1xuICAgICAgICAoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuYmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlnbm9yZUNsb3NlRXZlbnQgPSBmYWxzZTtcbiAgfVxuXG4gIGRpc2FibGVDbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlnbm9yZUNsb3NlRXZlbnQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5yZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTtcbiAgfVxufVxuIl19