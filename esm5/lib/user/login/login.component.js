/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthService, UserService } from '@spartacus/core';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, userService) {
        this.auth = auth;
        this.userService = userService;
        this.isLogin = false;
    }
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.user$ = this.userService.get();
        this.subscription = this.auth
            .getUserToken()
            .subscribe(function (token) {
            if (token && token.access_token && !_this.isLogin) {
                _this.isLogin = true;
                _this.userService.load(token.userId);
                _this.auth.login();
            }
            else if (token && !token.access_token && _this.isLogin) {
                _this.isLogin = false;
            }
        });
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-login',
                    template: "<ng-container *ngIf=\"(user$ | async) as user\">\n  <ng-container *ngIf=\"user?.name\">\n    <div class=\"cx-login-greet\">\n      {{ 'common.label.userGreeting' | cxTranslate: { name: user.name } }}\n    </div>\n    <cx-page-slot position=\"HeaderLinks\"></cx-page-slot>\n  </ng-container>\n\n  <ng-container *ngIf=\"!user?.name\">\n    <a role=\"link\" [routerLink]=\"{ route: ['login'] } | cxTranslateUrl\">{{\n      'common.action.signInRegister' | cxTranslate\n    }}</a>\n  </ng-container>\n</ng-container>\n",
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-login-greet{margin:var(--cx-margin,0);color:var(--cx-color,var(--cx-g-color-inverse));font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);font-weight:var(--cx-font-weight,var(--cx-g-font-weight-semi));padding:var(--cx-padding,0)}@media (max-width:991.98px){.cx-login-greet{color:var(--cx-color,var(--cx-g-color-text));padding:var(--cx-padding,.5rem 1rem 0);font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.6)}}"]
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: UserService }
    ]; };
    return LoginComponent;
}());
export { LoginComponent };
if (false) {
    /** @type {?} */
    LoginComponent.prototype.user$;
    /** @type {?} */
    LoginComponent.prototype.isLogin;
    /** @type {?} */
    LoginComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.auth;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.userService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsV0FBVyxFQUFtQixXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1RTtJQVdFLHdCQUFvQixJQUFpQixFQUFVLFdBQXdCO1FBQW5ELFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUp2RSxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBSTBELENBQUM7Ozs7SUFFM0UsaUNBQVE7OztJQUFSO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSTthQUMxQixZQUFZLEVBQUU7YUFDZCxTQUFTLENBQUMsVUFBQyxLQUFnQjtZQUMxQixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsWUFBWSxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEQsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNuQjtpQkFBTSxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksS0FBSSxDQUFDLE9BQU8sRUFBRTtnQkFDdkQsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDdEI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLDhnQkFBcUM7O2lCQUV0Qzs7OztnQkFOUSxXQUFXO2dCQUFtQixXQUFXOztJQW9DbEQscUJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQTdCWSxjQUFjOzs7SUFDekIsK0JBQXdCOztJQUN4QixpQ0FBZ0I7O0lBRWhCLHNDQUEyQjs7Ozs7SUFFZiw4QkFBeUI7Ozs7O0lBQUUscUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgVXNlclRva2VuLCBVc2VyLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHVzZXIkOiBPYnNlcnZhYmxlPFVzZXI+O1xuICBpc0xvZ2luID0gZmFsc2U7XG5cbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51c2VyJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0KCk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYXV0aFxuICAgICAgLmdldFVzZXJUb2tlbigpXG4gICAgICAuc3Vic2NyaWJlKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICAgIGlmICh0b2tlbiAmJiB0b2tlbi5hY2Nlc3NfdG9rZW4gJiYgIXRoaXMuaXNMb2dpbikge1xuICAgICAgICAgIHRoaXMuaXNMb2dpbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkKHRva2VuLnVzZXJJZCk7XG4gICAgICAgICAgdGhpcy5hdXRoLmxvZ2luKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodG9rZW4gJiYgIXRva2VuLmFjY2Vzc190b2tlbiAmJiB0aGlzLmlzTG9naW4pIHtcbiAgICAgICAgICB0aGlzLmlzTG9naW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=