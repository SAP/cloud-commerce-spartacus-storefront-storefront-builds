/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthService, GlobalMessageService, GlobalMessageType, RoutingService, UserService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
var UpdateEmailComponent = /** @class */ (function () {
    function UpdateEmailComponent(routingService, globalMessageService, userService, authService) {
        this.routingService = routingService;
        this.globalMessageService = globalMessageService;
        this.userService = userService;
        this.authService = authService;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    UpdateEmailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.userService.resetUpdateEmailResultState();
        this.subscription.add(this.userService.get().subscribe(function (result) { return (_this.uid = result.uid); }));
        this.subscription.add(this.userService
            .getUpdateEmailResultSuccess()
            .subscribe(function (success) { return _this.onSuccess(success); }));
        this.isLoading$ = this.userService.getUpdateEmailResultLoading();
    };
    /**
     * @return {?}
     */
    UpdateEmailComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.routingService.go({ route: 'home' });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    UpdateEmailComponent.prototype.onSubmit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var newUid = _a.newUid, password = _a.password;
        this.newUid = newUid;
        this.userService.updateEmail(this.uid, password, newUid);
    };
    /**
     * @param {?} success
     * @return {?}
     */
    UpdateEmailComponent.prototype.onSuccess = /**
     * @param {?} success
     * @return {?}
     */
    function (success) {
        if (success) {
            this.globalMessageService.add({
                text: "Success. Please sign in with " + this.newUid,
                type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
            });
            this.authService.logout();
            this.routingService.go({ route: 'login' });
        }
    };
    /**
     * @return {?}
     */
    UpdateEmailComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.userService.resetUpdateEmailResultState();
    };
    UpdateEmailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-update-email',
                    template: "<ng-container>\n  <div *ngIf=\"(isLoading$ | async); else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-email-form\n          class=\"col-md-6\"\n          (saveEmail)=\"onSubmit($event)\"\n          (cancelEmail)=\"onCancel()\"\n        >\n        </cx-update-email-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    UpdateEmailComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: GlobalMessageService },
        { type: UserService },
        { type: AuthService }
    ]; };
    return UpdateEmailComponent;
}());
export { UpdateEmailComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.uid;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.newUid;
    /** @type {?} */
    UpdateEmailComponent.prototype.isLoading$;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9teS1hY2NvdW50L3VwZGF0ZS1lbWFpbC91cGRhdGUtZW1haWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsV0FBVyxFQUNYLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEQ7SUFNRSw4QkFDVSxjQUE4QixFQUM5QixvQkFBMEMsRUFDMUMsV0FBd0IsRUFDeEIsV0FBd0I7UUFIeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFHMUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRnZDLENBQUM7Ozs7SUFPSix1Q0FBUTs7O0lBQVI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxXQUFXLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQ3BFLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLFdBQVc7YUFDYiwyQkFBMkIsRUFBRTthQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQ2pELENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztJQUNuRSxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELHVDQUFROzs7O0lBQVIsVUFBUyxFQUEwRDtZQUF4RCxrQkFBTSxFQUFFLHNCQUFRO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsd0NBQVM7Ozs7SUFBVCxVQUFVLE9BQWdCO1FBQ3hCLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztnQkFDNUIsSUFBSSxFQUFFLGtDQUFnQyxJQUFJLENBQUMsTUFBUTtnQkFDbkQsSUFBSSxFQUFFLGlCQUFpQixDQUFDLHFCQUFxQjthQUM5QyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDOzs7O0lBQ0QsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLDJCQUEyQixFQUFFLENBQUM7SUFDakQsQ0FBQzs7Z0JBeERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixzaEJBQTRDOztpQkFFN0M7Ozs7Z0JBVEMsY0FBYztnQkFGZCxvQkFBb0I7Z0JBR3BCLFdBQVc7Z0JBSlgsV0FBVzs7SUFpRWIsMkJBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXBEWSxvQkFBb0I7Ozs7OztJQVEvQiw0Q0FBMEM7Ozs7O0lBQzFDLG1DQUFvQjs7Ozs7SUFDcEIsc0NBQXVCOztJQUN2QiwwQ0FBZ0M7Ozs7O0lBVDlCLDhDQUFzQzs7Ozs7SUFDdEMsb0RBQWtEOzs7OztJQUNsRCwyQ0FBZ0M7Ozs7O0lBQ2hDLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC11cGRhdGUtZW1haWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBkYXRlLWVtYWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXBkYXRlLWVtYWlsLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVtYWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHByaXZhdGUgdWlkOiBzdHJpbmc7XG4gIHByaXZhdGUgbmV3VWlkOiBzdHJpbmc7XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFVwZGF0ZUVtYWlsUmVzdWx0U3RhdGUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpLnN1YnNjcmliZShyZXN1bHQgPT4gKHRoaXMudWlkID0gcmVzdWx0LnVpZCkpXG4gICAgKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRVcGRhdGVFbWFpbFJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAuc3Vic2NyaWJlKHN1Y2Nlc3MgPT4gdGhpcy5vblN1Y2Nlc3Moc3VjY2VzcykpXG4gICAgKTtcbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFVwZGF0ZUVtYWlsUmVzdWx0TG9hZGluZygpO1xuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IHJvdXRlOiAnaG9tZScgfSk7XG4gIH1cblxuICBvblN1Ym1pdCh7IG5ld1VpZCwgcGFzc3dvcmQgfTogeyBuZXdVaWQ6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgdGhpcy5uZXdVaWQgPSBuZXdVaWQ7XG4gICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVFbWFpbCh0aGlzLnVpZCwgcGFzc3dvcmQsIG5ld1VpZCk7XG4gIH1cblxuICBvblN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgIHRleHQ6IGBTdWNjZXNzLiBQbGVhc2Ugc2lnbiBpbiB3aXRoICR7dGhpcy5uZXdVaWR9YCxcbiAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IHJvdXRlOiAnbG9naW4nIH0pO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFVwZGF0ZUVtYWlsUmVzdWx0U3RhdGUoKTtcbiAgfVxufVxuIl19