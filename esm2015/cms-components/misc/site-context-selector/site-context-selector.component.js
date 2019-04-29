/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICON_TYPES } from '../icon/icon.config';
import { SiteContextComponentService } from './site-context-component.service';
import { SiteContextType } from './site-context.model';
export class SiteContextSelectorComponent {
    /**
     * @param {?} componentService
     */
    constructor(componentService) {
        this.componentService = componentService;
        this.iconTypes = ICON_TYPES;
    }
    /**
     * @return {?}
     */
    get items$() {
        return this.componentService.getItems(this.context);
    }
    /**
     * @return {?}
     */
    get activeItem$() {
        return this.componentService.getActiveItem(this.context);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set active(value) {
        this.componentService.setActive(value, this.context);
    }
    /**
     * @return {?}
     */
    get label$() {
        return this.componentService.getLabel(this.context);
    }
}
SiteContextSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-site-context-selector',
                template: "<label *ngIf=\"(items$ | async)?.length > 1 && (items$ | async) as items\">\n  <span>{{ label$ | async }}</span>\n  <select (change)=\"active = $event.target.value\">\n    <option\n      *ngFor=\"let item of items\"\n      value=\"{{ item.isocode }}\"\n      [selected]=\"(activeItem$ | async) === item.isocode\"\n      >{{ item.label }}</option\n    > </select\n  ><cx-icon [type]=\"iconTypes.CARET_DOWN\"></cx-icon>\n</label>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SiteContextSelectorComponent.ctorParameters = () => [
    { type: SiteContextComponentService }
];
SiteContextSelectorComponent.propDecorators = {
    context: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SiteContextSelectorComponent.prototype.siteContextService;
    /** @type {?} */
    SiteContextSelectorComponent.prototype.iconTypes;
    /**
     * the context type can be set as an input. If the context is
     * not given, the context will be loaded from the backend.
     * @type {?}
     */
    SiteContextSelectorComponent.prototype.context;
    /**
     * @type {?}
     * @private
     */
    SiteContextSelectorComponent.prototype.componentService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2Mvc2l0ZS1jb250ZXh0LXNlbGVjdG9yL3NpdGUtY29udGV4dC1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPdkQsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQVN2QyxZQUFvQixnQkFBNkM7UUFBN0MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUE2QjtRQVBqRSxjQUFTLEdBQUcsVUFBVSxDQUFDO0lBTzZDLENBQUM7Ozs7SUFFckUsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELElBQUksTUFBTSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMseWJBQXFEO2dCQUNyRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVBRLDJCQUEyQjs7O3NCQWVqQyxLQUFLOzs7O0lBTk4sMERBQXFDOztJQUNyQyxpREFBdUI7Ozs7OztJQUt2QiwrQ0FBa0M7Ozs7O0lBRXRCLHdEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQ09OX1RZUEVTIH0gZnJvbSAnLi4vaWNvbi9pY29uLmNvbmZpZyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL3NpdGUtY29udGV4dC1jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFR5cGUgfSBmcm9tICcuL3NpdGUtY29udGV4dC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNpdGUtY29udGV4dC1zZWxlY3RvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaXRlLWNvbnRleHQtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCB7XG4gIHNpdGVDb250ZXh0U2VydmljZTogU2l0ZUNvbnRleHQ8YW55PjtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFUztcbiAgLyoqXG4gICAqIHRoZSBjb250ZXh0IHR5cGUgY2FuIGJlIHNldCBhcyBhbiBpbnB1dC4gSWYgdGhlIGNvbnRleHQgaXNcbiAgICogbm90IGdpdmVuLCB0aGUgY29udGV4dCB3aWxsIGJlIGxvYWRlZCBmcm9tIHRoZSBiYWNrZW5kLlxuICAgKi9cbiAgQElucHV0KCkgY29udGV4dDogU2l0ZUNvbnRleHRUeXBlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50U2VydmljZTogU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlKSB7fVxuXG4gIGdldCBpdGVtcyQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRTZXJ2aWNlLmdldEl0ZW1zKHRoaXMuY29udGV4dCk7XG4gIH1cblxuICBnZXQgYWN0aXZlSXRlbSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRTZXJ2aWNlLmdldEFjdGl2ZUl0ZW0odGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIHNldCBhY3RpdmUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuY29tcG9uZW50U2VydmljZS5zZXRBY3RpdmUodmFsdWUsIHRoaXMuY29udGV4dCk7XG4gIH1cblxuICBnZXQgbGFiZWwkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50U2VydmljZS5nZXRMYWJlbCh0aGlzLmNvbnRleHQpO1xuICB9XG59XG4iXX0=