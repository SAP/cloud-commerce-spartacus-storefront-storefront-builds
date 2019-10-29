/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AsmService, AuthService, GlobalMessageService, GlobalMessageType, RoutingService, UserService, } from '@spartacus/core';
import { of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
export class AsmMainUiComponent {
    /**
     * @param {?} authService
     * @param {?} userService
     * @param {?} asmService
     * @param {?} globalMessageService
     * @param {?} routing
     */
    constructor(authService, userService, asmService, globalMessageService, routing) {
        this.authService = authService;
        this.userService = userService;
        this.asmService = asmService;
        this.globalMessageService = globalMessageService;
        this.routing = routing;
        this.startingCustomerSession = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.csAgentToken$ = this.authService.getCustomerSupportAgentToken();
        this.csAgentTokenLoading$ = this.authService.getCustomerSupportAgentTokenLoading();
        this.searchResultsLoading$ = this.asmService.getCustomerSearchResultsLoading();
        this.customer$ = this.authService.getUserToken().pipe(switchMap((/**
         * @param {?} token
         * @return {?}
         */
        token => {
            if (token && !!token.access_token) {
                this.handleCustomerSessionStartRedirection(token);
                return this.userService.get();
            }
            else {
                return of(undefined);
            }
        })));
    }
    /**
     * @private
     * @param {?} token
     * @return {?}
     */
    handleCustomerSessionStartRedirection(token) {
        if (this.startingCustomerSession &&
            this.authService.isCustomerEmulationToken(token)) {
            this.startingCustomerSession = false;
            this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
            this.routing.go('/');
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    loginCustomerSupportAgent({ userId, password, }) {
        this.authService.authorizeCustomerSupporAgent(userId, password);
    }
    /**
     * @return {?}
     */
    logoutCustomerSupportAgent() {
        this.authService.logoutCustomerSupportAgent();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    startCustomerEmulationSession({ customerId }) {
        this.authService
            .getCustomerSupportAgentToken()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} customerSupportAgentToken
         * @return {?}
         */
        customerSupportAgentToken => this.authService.startCustomerEmulationSession(customerSupportAgentToken, customerId)))
            .unsubscribe();
        this.startingCustomerSession = true;
    }
    /**
     * @return {?}
     */
    hideUi() {
        this.asmService.updateAsmUiState({ visible: false });
    }
    /**
     * @return {?}
     */
    endSession() {
        this.authService.logout();
        this.routing.go({ cxRoute: 'home' });
    }
}
AsmMainUiComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-asm-main-ui',
                template: "<div class=\"fd-shellbar\">\n  <div class=\"fd-shellbar__group fd-shellbar__group--start\">\n    <a href=\"#\" class=\"fd-shellbar__logo\"\n      ><img\n        src=\"data:image/png;base64,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\"\n        width=\"48\"\n        height=\"24\"\n        alt=\"{{ 'asm.mainLogoLabel' | cxTranslate }}\"\n    /></a>\n    <div class=\"fd-shellbar__product\">\n      <span class=\"fd-shellbar__title\">{{\n        'asm.mainTitle' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n  <div class=\"fd-shellbar__group fd-shellbar__group--end\">\n    <div class=\"fd-shellbar__actions\">\n      <div class=\"fd-shellbar__action fd-shellbar__action--show-always\">\n        <div class=\"sap-icon--decline\">\n          <a\n            title=\"{{ 'asm.hideUi' | cxTranslate }}\"\n            *ngIf=\"\n              !(csAgentToken$ | async)?.access_token &&\n              !(csAgentTokenLoading$ | async)\n            \"\n            (click)=\"hideUi()\"\n          >\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"15\"\n              height=\"15\"\n              viewBox=\"0 0 18 18\"\n            >\n              <path\n                d=\"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z\"\n              />\n            </svg>\n          </a>\n        </div>\n        <div class=\"sap-icon--log\">\n          <a\n            title=\"{{ 'asm.logout' | cxTranslate }}\"\n            *ngIf=\"\n              (csAgentToken$ | async)?.access_token &&\n              !(customer$ | async) &&\n              !(searchResultsLoading$ | async)\n            \"\n            (click)=\"logoutCustomerSupportAgent()\"\n          >\n            <img\n              src=\"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4Ij48cGF0aCBmaWxsPSIjZDFlM2ZmIiBkPSJNMTYuOTk5IDguNDRjMS4xODcuNTY1IDIuMTg3IDEuNDUzIDIuODkxIDIuNTYgMS4yNTMgMS45NDcgMS40NjQgNC4zODguNTYyIDYuNTItLjM0Mi44MTYtLjgzNSAxLjU1OS0xLjQ1MSAyLjE5LS42NDIuNjM3LTEuMzk3IDEuMTQ2LTIuMjI5IDEuNS0uODYyLjM1OS0xLjc4Ny41NDQtMi43Mi41NC0uOTM4LjAwOC0xLjg2Ny0uMTc1LTIuNzMtLjU0LS44MjgtLjM1NC0xLjU4MS0uODY1LTIuMjItMS41LS42MzgtLjYzOC0xLjE0Ny0xLjM5MS0xLjUtMi4yMi0uOTEtMi4xMTYtLjcxOS00LjU0Mi41MDgtNi40OS43MDQtMS4xMDcgMS43MDUtMS45OTUgMi44OS0yLjU2djEuMTNjLS44OTYuNTE1LTEuNjQzIDEuMjUyLTIuMTcgMi4xNC0uNTQ4LjkwNC0uODM1IDEuOTQzLS44MyAzLS4wMTQgMS42MDUuNjE2IDMuMTUxIDEuNzUgNC4yOS41NDUuNTUgMS4xOTUuOTg1IDEuOTEgMS4yOCAxLjQ5OC42MjUgMy4xODMuNjI1IDQuNjgxIDAgLjcxNS0uMjk1IDEuMzY0LS43MyAxLjkwOC0xLjI4IDEuMTI1LTEuMTI3IDEuNzU2LTIuNjU2IDEuNzUxLTQuMjQ5LjAwNS0xLjA1OS0uMjgxLTIuMDk3LS44My0zLjAwMS0uNTIxLS45MDItMS4yNy0xLjY1NC0yLjE3MS0yLjE4di0xLjEzem0tMi45OTkgNi4zMTFjLS4yNjguMDA1LS41MjctLjA5Ni0uNzItLjI4MS0uMTg3LS4xOTMtLjI4Ny0uNDUyLS4yODEtLjcydi03Yy0uMDAxLS4yNjEuMDk5LS41MTIuMjgxLS42OTkuMzgzLS4zOTggMS4wMTYtLjQxIDEuNDE0LS4wMjYuMTk2LjE4OS4zMDguNDUxLjMwNi43MjV2Ny4wMDFjLjAwOS4yNzItLjEwMS41MzQtLjMuNzItLjE4OC4xNzktLjQzOS4yOC0uNy4yOHoiLz48L3N2Zz4=\"\n            />\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-container *ngIf=\"(csAgentToken$ | async)?.access_token; else showLoginForm\">\n  <ng-container\n    *ngIf=\"customer$ | async as customer; else showCustomerSelection\"\n  >\n    <div class=\"cx-customer-emulation\">\n      <div class=\"fd-container\">\n        <div class=\"fd-col--6\">\n          <label>\n            <input\n              class=\"form-control ng-untouched ng-pristine ng-invalid\"\n              formcontrolname=\"customer\"\n              type=\"text\"\n              disabled=\"true\"\n              placeholder=\"{{ customer?.name }}, {{ customer?.uid }}\"\n            />\n          </label>\n        </div>\n\n        <div class=\"fd-col--3\">\n          <button class=\"fd-button--negative\" (click)=\"endSession()\">\n            <svg\n              height=\"14\"\n              width=\"14\"\n              aria-hidden=\"true\"\n              data-icon=\"stop-circle\"\n              data-prefix=\"far\"\n              focusable=\"false\"\n              role=\"img\"\n              viewBox=\"0 0 512 512\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n            >\n              <path\n                d=\"M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm296-80v160c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16z\"\n              />\n            </svg>\n            <span>\n              {{ 'asm.endSession' | cxTranslate }}\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <ng-template #showCustomerSelection>\n    <cx-customer-selection\n      (submitEvent)=\"startCustomerEmulationSession($event)\"\n    ></cx-customer-selection>\n  </ng-template>\n</ng-container>\n\n<ng-template #showLoginForm>\n  <cx-csagent-login-form\n    (submitEvent)=\"loginCustomerSupportAgent($event)\"\n    [csAgentTokenLoading]=\"csAgentTokenLoading$ | async\"\n  ></cx-csagent-login-form>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
AsmMainUiComponent.ctorParameters = () => [
    { type: AuthService },
    { type: UserService },
    { type: AsmService },
    { type: GlobalMessageService },
    { type: RoutingService }
];
if (false) {
    /** @type {?} */
    AsmMainUiComponent.prototype.csAgentToken$;
    /** @type {?} */
    AsmMainUiComponent.prototype.csAgentTokenLoading$;
    /** @type {?} */
    AsmMainUiComponent.prototype.customer$;
    /** @type {?} */
    AsmMainUiComponent.prototype.searchResultsLoading$;
    /**
     * @type {?}
     * @private
     */
    AsmMainUiComponent.prototype.startingCustomerSession;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.asmService;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.routing;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLW1haW4tdWkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL2FzbS1tYWluLXVpL2FzbS1tYWluLXVpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsVUFBVSxFQUNWLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFFZCxXQUFXLEdBRVosTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNakQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7SUFRN0IsWUFDWSxXQUF3QixFQUN4QixXQUF3QixFQUN4QixVQUFzQixFQUN0QixvQkFBMEMsRUFDMUMsT0FBdUI7UUFKdkIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBUDNCLDRCQUF1QixHQUFHLEtBQUssQ0FBQztJQVFyQyxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG1DQUFtQyxFQUFFLENBQUM7UUFDbkYsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsK0JBQStCLEVBQUUsQ0FBQztRQUMvRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNuRCxTQUFTOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQy9CO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLHFDQUFxQyxDQUFDLEtBQWdCO1FBQzVELElBQ0UsSUFBSSxDQUFDLHVCQUF1QjtZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxFQUNoRDtZQUNBLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7WUFDckMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7O0lBRUQseUJBQXlCLENBQUMsRUFDeEIsTUFBTSxFQUNOLFFBQVEsR0FJVDtRQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7SUFFRCwwQkFBMEI7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsNkJBQTZCLENBQUMsRUFBRSxVQUFVLEVBQTBCO1FBQ2xFLElBQUksQ0FBQyxXQUFXO2FBQ2IsNEJBQTRCLEVBQUU7YUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVM7Ozs7UUFBQyx5QkFBeUIsQ0FBQyxFQUFFLENBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsNkJBQTZCLENBQzVDLHlCQUF5QixFQUN6QixVQUFVLENBQ1gsRUFDRjthQUNBLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBbEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixzNVVBQTJDO2FBQzVDOzs7O1lBZEMsV0FBVztZQUtYLFdBQVc7WUFOWCxVQUFVO1lBRVYsb0JBQW9CO1lBRXBCLGNBQWM7Ozs7SUFhZCwyQ0FBcUM7O0lBQ3JDLGtEQUEwQzs7SUFDMUMsdUNBQTRCOztJQUM1QixtREFBMkM7Ozs7O0lBRTNDLHFEQUF3Qzs7Ozs7SUFHdEMseUNBQWtDOzs7OztJQUNsQyx5Q0FBa0M7Ozs7O0lBQ2xDLHdDQUFnQzs7Ozs7SUFDaEMsa0RBQW9EOzs7OztJQUNwRCxxQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXNtU2VydmljZSxcbiAgQXV0aFNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFVzZXIsXG4gIFVzZXJTZXJ2aWNlLFxuICBVc2VyVG9rZW4sXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hc20tbWFpbi11aScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hc20tbWFpbi11aS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzbU1haW5VaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNzQWdlbnRUb2tlbiQ6IE9ic2VydmFibGU8VXNlclRva2VuPjtcbiAgY3NBZ2VudFRva2VuTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGN1c3RvbWVyJDogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgc2VhcmNoUmVzdWx0c0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIHByaXZhdGUgc3RhcnRpbmdDdXN0b21lclNlc3Npb24gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFzbVNlcnZpY2U6IEFzbVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3NBZ2VudFRva2VuJCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbigpO1xuICAgIHRoaXMuY3NBZ2VudFRva2VuTG9hZGluZyQgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5Mb2FkaW5nKCk7XG4gICAgdGhpcy5zZWFyY2hSZXN1bHRzTG9hZGluZyQgPSB0aGlzLmFzbVNlcnZpY2UuZ2V0Q3VzdG9tZXJTZWFyY2hSZXN1bHRzTG9hZGluZygpO1xuICAgIHRoaXMuY3VzdG9tZXIkID0gdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyVG9rZW4oKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRva2VuICYmICEhdG9rZW4uYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVDdXN0b21lclNlc3Npb25TdGFydFJlZGlyZWN0aW9uKHRva2VuKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS5nZXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDdXN0b21lclNlc3Npb25TdGFydFJlZGlyZWN0aW9uKHRva2VuOiBVc2VyVG9rZW4pOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnN0YXJ0aW5nQ3VzdG9tZXJTZXNzaW9uICYmXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzQ3VzdG9tZXJFbXVsYXRpb25Ub2tlbih0b2tlbilcbiAgICApIHtcbiAgICAgIHRoaXMuc3RhcnRpbmdDdXN0b21lclNlc3Npb24gPSBmYWxzZTtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UucmVtb3ZlKEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SKTtcbiAgICAgIHRoaXMucm91dGluZy5nbygnLycpO1xuICAgIH1cbiAgfVxuXG4gIGxvZ2luQ3VzdG9tZXJTdXBwb3J0QWdlbnQoe1xuICAgIHVzZXJJZCxcbiAgICBwYXNzd29yZCxcbiAgfToge1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gIH0pOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhvcml6ZUN1c3RvbWVyU3VwcG9yQWdlbnQodXNlcklkLCBwYXNzd29yZCk7XG4gIH1cblxuICBsb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50KCk7XG4gIH1cblxuICBzdGFydEN1c3RvbWVyRW11bGF0aW9uU2Vzc2lvbih7IGN1c3RvbWVySWQgfTogeyBjdXN0b21lcklkOiBzdHJpbmcgfSk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgIC5nZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKGN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4gPT5cbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zdGFydEN1c3RvbWVyRW11bGF0aW9uU2Vzc2lvbihcbiAgICAgICAgICBjdXN0b21lclN1cHBvcnRBZ2VudFRva2VuLFxuICAgICAgICAgIGN1c3RvbWVySWRcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zdGFydGluZ0N1c3RvbWVyU2Vzc2lvbiA9IHRydWU7XG4gIH1cblxuICBoaWRlVWkoKTogdm9pZCB7XG4gICAgdGhpcy5hc21TZXJ2aWNlLnVwZGF0ZUFzbVVpU3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGVuZFNlc3Npb24oKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICB0aGlzLnJvdXRpbmcuZ28oeyBjeFJvdXRlOiAnaG9tZScgfSk7XG4gIH1cbn1cbiJdfQ==