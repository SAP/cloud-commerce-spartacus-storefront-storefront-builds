/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { CheckoutService, RoutingService, GlobalMessageService, GlobalMessageType, CartService, CartDataService, } from '@spartacus/core';
import { filter } from 'rxjs/operators';
export class MultiStepCheckoutComponent {
    /**
     * @param {?} checkoutService
     * @param {?} cartService
     * @param {?} cartDataService
     * @param {?} routingService
     * @param {?} globalMessageService
     * @param {?} cd
     */
    constructor(checkoutService, cartService, cartDataService, routingService, globalMessageService, cd) {
        this.checkoutService = checkoutService;
        this.cartService = cartService;
        this.cartDataService = cartDataService;
        this.routingService = routingService;
        this.globalMessageService = globalMessageService;
        this.cd = cd;
        this.step = 1;
        this.done = false;
        this.subscriptions = [];
        this.tAndCToggler = false;
        this.navs = this.initializeCheckoutNavBar();
    }
    /**
     * @private
     * @return {?}
     */
    refreshCart() {
        this.cartService.loadDetails();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.cartDataService.getDetails) {
            this.cartService.loadDetails();
        }
        this.cart$ = this.cartService.getActive();
        this.processSteps();
    }
    /**
     * @return {?}
     */
    processSteps() {
        // step1: set delivery address
        this.subscriptions.push(this.checkoutService
            .getDeliveryAddress()
            .pipe(filter(deliveryAddress => Object.keys(deliveryAddress).length !== 0 && this.step === 1))
            .subscribe(deliveryAddress => {
            this.deliveryAddress = deliveryAddress;
            this.nextStep(2);
            this.refreshCart();
            this.cd.detectChanges();
        }));
        // step2: select delivery mode
        this.subscriptions.push(this.checkoutService
            .getSelectedDeliveryModeCode()
            .pipe(filter(selected => selected !== '' && this.step === 2))
            .subscribe(selectedMode => {
            this.nextStep(3);
            this.refreshCart();
            this.shippingMethod = selectedMode;
            this.cd.detectChanges();
        }));
        // step3: set payment information
        this.subscriptions.push(this.checkoutService
            .getPaymentDetails()
            .pipe(filter(paymentInfo => Object.keys(paymentInfo).length !== 0 && this.step === 3))
            .subscribe(paymentInfo => {
            if (!paymentInfo['hasError']) {
                this.nextStep(4);
                this.paymentDetails = paymentInfo;
                this.cd.detectChanges();
            }
            else {
                Object.keys(paymentInfo).forEach(key => {
                    if (key.startsWith('InvalidField')) {
                        this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'InvalidField: ' + paymentInfo[key],
                        });
                    }
                });
                this.checkoutService.clearCheckoutStep(3);
            }
        }));
        // step4: place order
        this.subscriptions.push(this.checkoutService
            .getOrderDetails()
            .pipe(filter(order => Object.keys(order).length !== 0 && this.step === 4))
            .subscribe(() => {
            // checkout steps are done
            this.done = true;
            this.routingService.go({ route: 'orderConfirmation' });
        }));
    }
    /**
     * @param {?} backStep
     * @return {?}
     */
    setStep(backStep) {
        this.nextStep(backStep);
    }
    /**
     * @param {?} step
     * @return {?}
     */
    nextStep(step) {
        /** @type {?} */
        const previousStep = step - 1;
        this.navs.forEach(function (nav) {
            if (nav.id === previousStep) {
                nav.status.completed = true;
            }
            if (nav.id === step) {
                nav.status.active = true;
                nav.status.disabled = false;
            }
            else {
                nav.status.active = false;
            }
            nav.progressBar = nav.status.active || nav.status.completed;
        });
        this.step = step;
        this.tAndCToggler = false;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    addAddress({ newAddress, address, }) {
        if (newAddress) {
            this.checkoutService.createAndSetAddress(address);
            return;
        }
        // if the selected address is the same as the cart's one
        if (this.deliveryAddress && address.id === this.deliveryAddress.id) {
            this.nextStep(2);
            return;
        }
        this.checkoutService.setDeliveryAddress(address);
        return;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    setDeliveryMode({ deliveryModeId }) {
        // if the selected shipping method is the same as the cart's one
        if (this.shippingMethod && this.shippingMethod === deliveryModeId) {
            this.nextStep(3);
            return;
        }
        this.checkoutService.setDeliveryMode(deliveryModeId);
        return;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    addPaymentInfo({ newPayment, payment, billingAddress, }) {
        payment.billingAddress = billingAddress
            ? billingAddress
            : this.deliveryAddress;
        if (newPayment) {
            this.checkoutService.createPaymentDetails(payment);
            return;
        }
        // if the selected payment is the same as the cart's one
        if (this.paymentDetails && this.paymentDetails.id === payment.id) {
            this.nextStep(4);
            return;
        }
        this.checkoutService.setPaymentDetails(payment);
    }
    /**
     * @return {?}
     */
    placeOrder() {
        this.checkoutService.placeOrder();
    }
    /**
     * @return {?}
     */
    toggleTAndC() {
        this.tAndCToggler = !this.tAndCToggler;
    }
    /**
     * @return {?}
     */
    initializeCheckoutNavBar() {
        return [
            {
                id: 1,
                label: '1. Shipping Address',
                status: {
                    disabled: false,
                    completed: false,
                    active: true,
                },
                progressBar: true,
            },
            {
                id: 2,
                label: '2. Shipping Method',
                status: {
                    disabled: true,
                    completed: false,
                    active: false,
                },
                progressBar: false,
            },
            {
                id: 3,
                label: '3. Payment',
                status: {
                    disabled: true,
                    completed: false,
                    active: false,
                },
                progressBar: false,
            },
            {
                id: 4,
                label: '4. Review',
                status: {
                    disabled: true,
                    completed: false,
                    active: false,
                },
                progressBar: false,
            },
        ];
    }
    /**
     * @return {?}
     */
    clearCheckoutNavBar() {
        this.navs = [];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
        if (!this.done) {
            this.checkoutService.clearCheckoutData();
        }
        this.clearCheckoutNavBar();
    }
}
MultiStepCheckoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-multi-step-checkout',
                template: "<ng-container *ngIf=\"(cart$ | async) as cart\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-8\">\n      <!-- VISIBLE ONLY ON LG AND XL SCREENS -->\n      <!-- Navigation -->\n      <div class=\"cx-nav d-none d-lg-block d-xl-block\">\n        <ul class=\"cx-list\">\n          <li\n            *ngFor=\"let nav of navs\"\n            class=\"cx-item\"\n            [ngClass]=\"{\n              ' is-disabled': nav.status.disabled,\n              ' is-active': nav.status.active\n            }\"\n          >\n            <a\n              class=\"cx-link \"\n              [ngClass]=\"{\n                ' is-disabled': nav.status.disabled,\n                ' is-active': nav.status.active\n              }\"\n              (click)=\"nav.status.disabled === false ? setStep(nav.id) : false\"\n              >{{ nav.label }}</a\n            >\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"cx-media\">\n        <div class=\"cx-list-media\">\n          {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalItems } }}:\n          {{ cart.subTotal?.formattedValue }}\n        </div>\n\n        <div *ngFor=\"let nav of navs\">\n          <!-- Navigation -->\n          <div\n            class=\"cx-list-media\"\n            [ngClass]=\"{ ' is-active': nav.status.active }\"\n          >\n            <div>{{ nav.label }}</div>\n            <button\n              *ngIf=\"nav.status.completed && !nav.status.active\"\n              class=\"btn btn-link\"\n              (click)=\"setStep(nav.id)\"\n            >\n              {{ 'common.edit' | cxTranslate }}\n            </button>\n          </div>\n\n          <!-- Content -->\n          <div *ngIf=\"nav.status.active && step === 1\">\n            <cx-shipping-address\n              [selectedAddress]=\"deliveryAddress\"\n              (addAddress)=\"addAddress($event)\"\n            ></cx-shipping-address>\n          </div>\n          <div *ngIf=\"nav.status.active && step === 2\">\n            <cx-delivery-mode\n              [selectedShippingMethod]=\"shippingMethod\"\n              (selectMode)=\"setDeliveryMode($event)\"\n              (backStep)=\"setStep(1)\"\n            ></cx-delivery-mode>\n          </div>\n          <div *ngIf=\"nav.status.active && step === 3\">\n            <cx-payment-method\n              [selectedPayment]=\"paymentDetails\"\n              (addPaymentInfo)=\"addPaymentInfo($event)\"\n              (backStep)=\"setStep(2)\"\n            ></cx-payment-method>\n          </div>\n          <div *ngIf=\"nav.status.active && step === 4\">\n            <cx-review-submit\n              [deliveryAddress]=\"deliveryAddress\"\n              [shippingMethod]=\"shippingMethod\"\n              [paymentDetails]=\"paymentDetails\"\n            >\n            </cx-review-submit>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- ORDER SUMMARY SECTION -->\n    <div class=\"col-md-7 offset-md-5 col-lg-4 offset-lg-0\">\n      <cx-order-summary [cart]=\"cart\"></cx-order-summary>\n\n      <!-- CHECKBOX AND PLACE ORDER BUTTON -->\n      <div class=\"cx-place-order\" *ngIf=\"step === 4\">\n        <div class=\"cx-place-order-form form-check\">\n          <label>\n            <input\n              class=\"form-check-input\"\n              type=\"checkbox\"\n              (change)=\"toggleTAndC()\"\n            />\n            <span class=\"form-check-label\">\n              {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n              <a\n                [routerLink]=\"{ route: 'termsAndConditions' } | cxTranslateUrl\"\n                class=\"cx-tc-link\"\n                target=\"_blank\"\n              >\n                {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n              </a>\n            </span>\n          </label>\n        </div>\n        <button\n          [disabled]=\"!tAndCToggler\"\n          (click)=\"placeOrder()\"\n          class=\"btn btn-primary btn-block\"\n        >\n          {{ 'checkoutReview.placeOrder' | cxTranslate }}\n        </button>\n        <button class=\"btn btn-action btn-block\" (click)=\"setStep(3)\">\n          {{ 'common.back' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-nav{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,0)}.cx-nav .cx-list{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,row);list-style:var(--cx-list-style,none);padding:var(--cx-padding,0);margin:var(--cx-margin,0)}.cx-nav .cx-item{color:var(--cx-color,var(--cx-g-color-text));padding:var(--cx-padding,0 0 1.375rem 0)}.cx-nav .cx-item.progressbar{border-bottom:5px solid;border-color:var(--cx-border-color,var(--cx-g-color-primary))}.cx-nav .cx-item.progressbar ::before{color:var(--cx-color,var(--cx-g-color-text))}.cx-nav .cx-item ::before{padding:var(--cx-padding,0 .5rem);content:var(--cx-content, \">\")}.cx-nav .cx-item:first-child ::before{padding:var(--cx-padding,0);content:var(--cx-content, \"\")}.cx-link,.cx-link:hover{cursor:var(--cx-cursor,pointer)}.cx-link.is-disabled,.cx-link:hover.is-disabled{color:var(--cx-color,var(--cx-g-color-light));cursor:var(--cx-cursor,not-allowed)}.cx-link.is-active,.cx-link:hover.is-active{color:var(--cx-color,var(--cx-g-color-primary))}.cx-link.is-active ::before,.cx-link:hover.is-active ::before{color:var(--cx-color,var(--cx-g-color-text))}@media (max-width:991.98px){:host{padding:var(--cx-padding,1.5rem 0)}.cx-media>:last-child{border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}}.cx-media .cx-list-media{display:var(--cx-display,none);font-size:var(--cx-font-size,1.375rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);text-transform:var(--cx-text-transform,capitalize);justify-content:var(--cx-justify-content,space-between);align-items:var(--cx-align-items,center);line-height:var(--cx-line-height,4.75rem);min-width:var(--cx-min-width,100%);border-width:var(--cx-border-width,1px 0 0 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));margin:var(--cx-margin,0)}.cx-media .cx-list-media button{text-transform:var(--cx-text-transform,capitalize);font-weight:var(--cx-font-weight,var(--cx-g-font-weight-semi))}@media (max-width:991.98px){.cx-media .cx-list-media{display:var(--cx-display,flex);padding:var(--cx-padding,0 3.5rem)}}@media (max-width:767.98px){.cx-media .cx-list-media{padding:var(--cx-padding,0 1.375rem)}}.cx-place-order{padding:var(--cx-padding,0 1rem)}.cx-place-order .cx-form{display:var(--cx-display,flex)}.cx-place-order .cx-form .form-check-input{min-height:var(--cx-min-height,1.375rem);min-width:var(--cx-min-width,1.375rem)}.cx-place-order button{margin:var(--cx-margin,1.25rem 0 0)}@media (max-width:991.98px){.col-md-12{max-width:var(--cx-max-width,100%);padding:var(--cx-padding,0 0 2rem)}.cx-list-media.is-active{background-color:var(--cx-background-color,var(--cx-g-color-background))}}"]
            }] }
];
/** @nocollapse */
MultiStepCheckoutComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: CartService },
    { type: CartDataService },
    { type: RoutingService },
    { type: GlobalMessageService },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.step;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.done;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.deliveryAddress;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.paymentDetails;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.shippingMethod;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.subscriptions;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.cart$;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.tAndCToggler;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.navs;
    /**
     * @type {?}
     * @protected
     */
    MultiStepCheckoutComponent.prototype.checkoutService;
    /**
     * @type {?}
     * @protected
     */
    MultiStepCheckoutComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    MultiStepCheckoutComponent.prototype.cartDataService;
    /**
     * @type {?}
     * @protected
     */
    MultiStepCheckoutComponent.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    MultiStepCheckoutComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @protected
     */
    MultiStepCheckoutComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc3RlcC1jaGVja291dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L2NvbnRhaW5lci9tdWx0aS1zdGVwLWNoZWNrb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFHdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxlQUFlLEVBQ2YsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGVBQWUsR0FJaEIsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVeEMsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7Ozs7O0lBY3JDLFlBQ1ksZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsY0FBOEIsRUFDOUIsb0JBQTBDLEVBQzFDLEVBQXFCO1FBTHJCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFuQmpDLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBS2Isa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRXJCLFNBQUksR0FBeUIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFTMUQsQ0FBQzs7Ozs7SUFFSSxXQUFXO1FBQ2pCLElBQUks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O0lBQ2xDLHFEQUEwQzs7Ozs7SUFDMUMsb0RBQXdDOzs7OztJQUN4QywwREFBb0Q7Ozs7O0lBQ3BELHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIENoZWNrb3V0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgQ2FydFNlcnZpY2UsXG4gIENhcnREYXRhU2VydmljZSxcbiAgUGF5bWVudERldGFpbHMsXG4gIEFkZHJlc3MsXG4gIENhcnQsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDaGVja291dE5hdkJhckl0ZW0gfSBmcm9tICcuL2NoZWNrb3V0LW5hdmlnYXRpb24tYmFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbXVsdGktc3RlcC1jaGVja291dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tdWx0aS1zdGVwLWNoZWNrb3V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXVsdGktc3RlcC1jaGVja291dC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlTdGVwQ2hlY2tvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0ZXAgPSAxO1xuICBkb25lID0gZmFsc2U7XG5cbiAgZGVsaXZlcnlBZGRyZXNzOiBBZGRyZXNzO1xuICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHM7XG4gIHNoaXBwaW5nTWV0aG9kOiBzdHJpbmc7XG4gIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIHRBbmRDVG9nZ2xlciA9IGZhbHNlO1xuXG4gIG5hdnM6IENoZWNrb3V0TmF2QmFySXRlbVtdID0gdGhpcy5pbml0aWFsaXplQ2hlY2tvdXROYXZCYXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FydERhdGFTZXJ2aWNlOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIHByaXZhdGUgcmVmcmVzaENhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5sb2FkRGV0YWlscygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmNhcnREYXRhU2VydmljZS5nZXREZXRhaWxzKSB7XG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLmxvYWREZXRhaWxzKCk7XG4gICAgfVxuICAgIHRoaXMuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICAgIHRoaXMucHJvY2Vzc1N0ZXBzKCk7XG4gIH1cblxuICBwcm9jZXNzU3RlcHMoKTogdm9pZCB7XG4gICAgLy8gc3RlcDE6IHNldCBkZWxpdmVyeSBhZGRyZXNzXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgICAuZ2V0RGVsaXZlcnlBZGRyZXNzKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgZGVsaXZlcnlBZGRyZXNzID0+XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRlbGl2ZXJ5QWRkcmVzcykubGVuZ3RoICE9PSAwICYmIHRoaXMuc3RlcCA9PT0gMVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKGRlbGl2ZXJ5QWRkcmVzcyA9PiB7XG4gICAgICAgICAgdGhpcy5kZWxpdmVyeUFkZHJlc3MgPSBkZWxpdmVyeUFkZHJlc3M7XG4gICAgICAgICAgdGhpcy5uZXh0U3RlcCgyKTtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hDYXJ0KCk7XG4gICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIHN0ZXAyOiBzZWxlY3QgZGVsaXZlcnkgbW9kZVxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgICAgLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpXG4gICAgICAgIC5waXBlKGZpbHRlcihzZWxlY3RlZCA9PiBzZWxlY3RlZCAhPT0gJycgJiYgdGhpcy5zdGVwID09PSAyKSlcbiAgICAgICAgLnN1YnNjcmliZShzZWxlY3RlZE1vZGUgPT4ge1xuICAgICAgICAgIHRoaXMubmV4dFN0ZXAoMyk7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQ2FydCgpO1xuICAgICAgICAgIHRoaXMuc2hpcHBpbmdNZXRob2QgPSBzZWxlY3RlZE1vZGU7XG4gICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIHN0ZXAzOiBzZXQgcGF5bWVudCBpbmZvcm1hdGlvblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgICAgLmdldFBheW1lbnREZXRhaWxzKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgcGF5bWVudEluZm8gPT5cbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bWVudEluZm8pLmxlbmd0aCAhPT0gMCAmJiB0aGlzLnN0ZXAgPT09IDNcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShwYXltZW50SW5mbyA9PiB7XG4gICAgICAgICAgaWYgKCFwYXltZW50SW5mb1snaGFzRXJyb3InXSkge1xuICAgICAgICAgICAgdGhpcy5uZXh0U3RlcCg0KTtcbiAgICAgICAgICAgIHRoaXMucGF5bWVudERldGFpbHMgPSBwYXltZW50SW5mbztcbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXltZW50SW5mbykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ0ludmFsaWRGaWVsZCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnSW52YWxpZEZpZWxkOiAnICsgcGF5bWVudEluZm9ba2V5XSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckNoZWNrb3V0U3RlcCgzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIHN0ZXA0OiBwbGFjZSBvcmRlclxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgICAgLmdldE9yZGVyRGV0YWlscygpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihvcmRlciA9PiBPYmplY3Qua2V5cyhvcmRlcikubGVuZ3RoICE9PSAwICYmIHRoaXMuc3RlcCA9PT0gNClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAvLyBjaGVja291dCBzdGVwcyBhcmUgZG9uZVxuICAgICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IHJvdXRlOiAnb3JkZXJDb25maXJtYXRpb24nIH0pO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBzZXRTdGVwKGJhY2tTdGVwOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm5leHRTdGVwKGJhY2tTdGVwKTtcbiAgfVxuXG4gIG5leHRTdGVwKHN0ZXA6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHByZXZpb3VzU3RlcCA9IHN0ZXAgLSAxO1xuXG4gICAgdGhpcy5uYXZzLmZvckVhY2goZnVuY3Rpb24obmF2KSB7XG4gICAgICBpZiAobmF2LmlkID09PSBwcmV2aW91c1N0ZXApIHtcbiAgICAgICAgbmF2LnN0YXR1cy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKG5hdi5pZCA9PT0gc3RlcCkge1xuICAgICAgICBuYXYuc3RhdHVzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIG5hdi5zdGF0dXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdi5zdGF0dXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIG5hdi5wcm9ncmVzc0JhciA9IG5hdi5zdGF0dXMuYWN0aXZlIHx8IG5hdi5zdGF0dXMuY29tcGxldGVkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdGVwID0gc3RlcDtcbiAgICB0aGlzLnRBbmRDVG9nZ2xlciA9IGZhbHNlO1xuICB9XG5cbiAgYWRkQWRkcmVzcyh7XG4gICAgbmV3QWRkcmVzcyxcbiAgICBhZGRyZXNzLFxuICB9OiB7XG4gICAgbmV3QWRkcmVzczogYm9vbGVhbjtcbiAgICBhZGRyZXNzOiBBZGRyZXNzO1xuICB9KTogdm9pZCB7XG4gICAgaWYgKG5ld0FkZHJlc3MpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNyZWF0ZUFuZFNldEFkZHJlc3MoYWRkcmVzcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIHRoZSBzZWxlY3RlZCBhZGRyZXNzIGlzIHRoZSBzYW1lIGFzIHRoZSBjYXJ0J3Mgb25lXG4gICAgaWYgKHRoaXMuZGVsaXZlcnlBZGRyZXNzICYmIGFkZHJlc3MuaWQgPT09IHRoaXMuZGVsaXZlcnlBZGRyZXNzLmlkKSB7XG4gICAgICB0aGlzLm5leHRTdGVwKDIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5zZXREZWxpdmVyeUFkZHJlc3MoYWRkcmVzcyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2V0RGVsaXZlcnlNb2RlKHsgZGVsaXZlcnlNb2RlSWQgfTogeyBkZWxpdmVyeU1vZGVJZDogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICAvLyBpZiB0aGUgc2VsZWN0ZWQgc2hpcHBpbmcgbWV0aG9kIGlzIHRoZSBzYW1lIGFzIHRoZSBjYXJ0J3Mgb25lXG4gICAgaWYgKHRoaXMuc2hpcHBpbmdNZXRob2QgJiYgdGhpcy5zaGlwcGluZ01ldGhvZCA9PT0gZGVsaXZlcnlNb2RlSWQpIHtcbiAgICAgIHRoaXMubmV4dFN0ZXAoMyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLnNldERlbGl2ZXJ5TW9kZShkZWxpdmVyeU1vZGVJZCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYWRkUGF5bWVudEluZm8oe1xuICAgIG5ld1BheW1lbnQsXG4gICAgcGF5bWVudCxcbiAgICBiaWxsaW5nQWRkcmVzcyxcbiAgfToge1xuICAgIG5ld1BheW1lbnQ6IGJvb2xlYW47XG4gICAgcGF5bWVudDogUGF5bWVudERldGFpbHM7XG4gICAgYmlsbGluZ0FkZHJlc3M6IEFkZHJlc3M7XG4gIH0pOiB2b2lkIHtcbiAgICBwYXltZW50LmJpbGxpbmdBZGRyZXNzID0gYmlsbGluZ0FkZHJlc3NcbiAgICAgID8gYmlsbGluZ0FkZHJlc3NcbiAgICAgIDogdGhpcy5kZWxpdmVyeUFkZHJlc3M7XG5cbiAgICBpZiAobmV3UGF5bWVudCkge1xuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY3JlYXRlUGF5bWVudERldGFpbHMocGF5bWVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIHNlbGVjdGVkIHBheW1lbnQgaXMgdGhlIHNhbWUgYXMgdGhlIGNhcnQncyBvbmVcbiAgICBpZiAodGhpcy5wYXltZW50RGV0YWlscyAmJiB0aGlzLnBheW1lbnREZXRhaWxzLmlkID09PSBwYXltZW50LmlkKSB7XG4gICAgICB0aGlzLm5leHRTdGVwKDQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLnNldFBheW1lbnREZXRhaWxzKHBheW1lbnQpO1xuICB9XG5cbiAgcGxhY2VPcmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5wbGFjZU9yZGVyKCk7XG4gIH1cblxuICB0b2dnbGVUQW5kQygpOiB2b2lkIHtcbiAgICB0aGlzLnRBbmRDVG9nZ2xlciA9ICF0aGlzLnRBbmRDVG9nZ2xlcjtcbiAgfVxuXG4gIGluaXRpYWxpemVDaGVja291dE5hdkJhcigpOiBDaGVja291dE5hdkJhckl0ZW1bXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGxhYmVsOiAnMS4gU2hpcHBpbmcgQWRkcmVzcycsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbGFiZWw6ICcyLiBTaGlwcGluZyBNZXRob2QnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBsYWJlbDogJzMuIFBheW1lbnQnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBsYWJlbDogJzQuIFJldmlldycsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgY2xlYXJDaGVja291dE5hdkJhcigpOiB2b2lkIHtcbiAgICB0aGlzLm5hdnMgPSBbXTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XG4gICAgaWYgKCF0aGlzLmRvbmUpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXREYXRhKCk7XG4gICAgfVxuICAgIHRoaXMuY2xlYXJDaGVja291dE5hdkJhcigpO1xuICB9XG59XG4iXX0=