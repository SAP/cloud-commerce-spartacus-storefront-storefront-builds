/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
var BillingAddressFormComponent = /** @class */ (function () {
    function BillingAddressFormComponent() {
    }
    /**
     * @param {?} country
     * @return {?}
     */
    BillingAddressFormComponent.prototype.countrySelected = /**
     * @param {?} country
     * @return {?}
     */
    function (country) {
        this.billingAddress['controls'].country['controls'].isocode.setValue(country.isocode);
    };
    BillingAddressFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-billing-address-form',
                    template: "<div [formGroup]=\"billingAddress\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.firstName.label' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        required\n        placeholder=\"{{ 'addressForm.firstName.placeholder' | cxTranslate }}\"\n        formControlName=\"firstName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.lastName.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n        formControlName=\"lastName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.address1' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n        formControlName=\"line1\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'addressForm.address2' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n        formControlName=\"line2\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <ng-container *ngIf=\"(countries$ | async) as countries\">\n      <div *ngIf=\"countries.length !== 0\">\n        <label aria-required=\"true\">\n          <span class=\"label-content required\">{{\n            'addressForm.country' | cxTranslate\n          }}</span>\n          <ng-select\n            [searchable]=\"false\"\n            [clearable]=\"false\"\n            [items]=\"countries\"\n            bindLabel=\"name\"\n            bindValue=\"isocode\"\n            placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n            (change)=\"countrySelected($event)\"\n          >\n          </ng-select>\n        </label>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'addressForm.city.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n          formControlName=\"town\"\n        />\n      </label>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'addressForm.zipCode.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'addressForm.zipCode.placeholder' | cxTranslate }}\"\n          formControlName=\"postalCode\"\n        />\n      </label>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:991.98px){:host{display:var(--cx-display,block);background-color:var(--cx-background-color,var(--cx-g-color-background))}.col-md-12{padding:var(--cx-padding,0 4.375rem)}.container{width:var(--cx-width,100%)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 2.25rem)}}.cx-checkout-btns{padding:var(--cx-padding,1rem 0);justify-content:var(--cx-justify-content,flex-end)}@media (max-width:767.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}}@media (max-width:991.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}.cx-checkout-btns .btn-action{margin:var(--cx-margin,0 0 1rem)}.cx-checkout-body.row{padding:var(--cx-padding,0)}}.cx-checkout-title{text-transform:var(--cx-text-transform,capitalize);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}.cx-checkout-body{display:var(--cx-display,flex);align-items:var(--cx-align-items,stretch)}.cx-checkout-text{margin-bottom:var(--cx-margin,1.25rem)}@media (max-width:991.98px){.cx-checkout-text{padding-left:var(--cx-padding,3.5rem)}}@media (max-width:767.98px){.cx-checkout-text{padding-left:var(--cx-padding,1.5rem)}}.cx-spinner{padding-top:var(--cx-padding,30px);padding-bottom:var(--cx-padding,30px)}"]
                }] }
    ];
    BillingAddressFormComponent.propDecorators = {
        billingAddress: [{ type: Input }],
        countries$: [{ type: Input }]
    };
    return BillingAddressFormComponent;
}());
export { BillingAddressFormComponent };
if (false) {
    /** @type {?} */
    BillingAddressFormComponent.prototype.billingAddress;
    /** @type {?} */
    BillingAddressFormComponent.prototype.countries$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1hZGRyZXNzLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L2NvbXBvbmVudHMvbXVsdGktc3RlcC1jaGVja291dC9wYXltZW50LW1ldGhvZC9iaWxsaW5nLWFkZHJlc3MtZm9ybS9iaWxsaW5nLWFkZHJlc3MtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDO0lBQUE7SUFrQkEsQ0FBQzs7Ozs7SUFMQyxxREFBZTs7OztJQUFmLFVBQWdCLE9BQWdCO1FBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQ2xFLE9BQU8sQ0FBQyxPQUFPLENBQ2hCLENBQUM7SUFDSixDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLDZvR0FBb0Q7b0JBRXBELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7OztpQ0FFRSxLQUFLOzZCQUdMLEtBQUs7O0lBUVIsa0NBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQVpZLDJCQUEyQjs7O0lBQ3RDLHFEQUMwQjs7SUFFMUIsaURBQ2tDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYmlsbGluZy1hZGRyZXNzLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYmlsbGluZy1hZGRyZXNzLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iaWxsaW5nLWFkZHJlc3MtZm9ybS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQmlsbGluZ0FkZHJlc3NGb3JtQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgYmlsbGluZ0FkZHJlc3M6IEZvcm1Hcm91cDtcblxuICBASW5wdXQoKVxuICBjb3VudHJpZXMkOiBPYnNlcnZhYmxlPENvdW50cnlbXT47XG5cbiAgY291bnRyeVNlbGVjdGVkKGNvdW50cnk6IENvdW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLmJpbGxpbmdBZGRyZXNzWydjb250cm9scyddLmNvdW50cnlbJ2NvbnRyb2xzJ10uaXNvY29kZS5zZXRWYWx1ZShcbiAgICAgIGNvdW50cnkuaXNvY29kZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==