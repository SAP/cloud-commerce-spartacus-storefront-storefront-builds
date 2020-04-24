import { __decorate, __read } from "tslib";
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { UserInterestsService, UserNotificationPreferenceService, AuthService, OCC_USER_ID_ANONYMOUS, NotificationPreference, NotificationType, Product, GlobalMessageService, TranslationService, GlobalMessageType, } from '@spartacus/core';
import { Subscription, combineLatest } from 'rxjs';
import { map, filter, tap, first } from 'rxjs/operators';
import { CurrentProductService } from '../current-product.service';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { StockNotificationDialogComponent } from './stock-notification-dialog/stock-notification-dialog.component';
var StockNotificationComponent = /** @class */ (function () {
    function StockNotificationComponent(authService, currentProductService, globalMessageService, translationService, interestsService, modalService, notificationPrefService) {
        this.authService = authService;
        this.currentProductService = currentProductService;
        this.globalMessageService = globalMessageService;
        this.translationService = translationService;
        this.interestsService = interestsService;
        this.modalService = modalService;
        this.notificationPrefService = notificationPrefService;
        this.anonymous = true;
        this.enabledPrefs = [];
        this.subscriptions = new Subscription();
    }
    StockNotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.outOfStock$ = combineLatest([
            this.currentProductService.getProduct().pipe(filter(Boolean)),
            this.authService.getOccUserId(),
        ]).pipe(tap(function (_a) {
            var _b = __read(_a, 2), product = _b[0], userId = _b[1];
            _this.productCode = product.code;
            if (userId !== OCC_USER_ID_ANONYMOUS) {
                _this.anonymous = false;
                _this.notificationPrefService.loadPreferences();
                _this.interestsService.loadProductInterests(null, null, null, product.code, NotificationType.BACK_IN_STOCK);
            }
        }), map(function (_a) {
            var _b = __read(_a, 1), product = _b[0];
            return !!product.stock && product.stock.stockLevelStatus === 'outOfStock';
        }));
        this.hasProductInterests$ = this.interestsService
            .getProductInterests()
            .pipe(map(function (interests) { return !!interests.results && interests.results.length === 1; }));
        this.subscribeSuccess$ = this.interestsService.getAddProductInterestSuccess();
        this.isRemoveInterestLoading$ = this.interestsService.getRemoveProdutInterestLoading();
        this.prefsEnabled$ = this.notificationPrefService
            .getEnabledPreferences()
            .pipe(tap(function (prefs) { return (_this.enabledPrefs = prefs); }), map(function (prefs) { return prefs.length > 0; }));
        this.subscriptions.add(this.interestsService.getAddProductInterestError().subscribe(function (error) {
            if (error) {
                _this.onInterestAddingError();
            }
        }));
        this.subscriptions.add(this.interestsService
            .getRemoveProdutInterestSuccess()
            .subscribe(function (success) {
            if (success) {
                _this.onInterestRemovingSuccess();
            }
        }));
    };
    StockNotificationComponent.prototype.subscribe = function () {
        this.openDialog();
        this.interestsService.addProductInterest(this.productCode, NotificationType.BACK_IN_STOCK);
    };
    StockNotificationComponent.prototype.unsubscribe = function () {
        this.interestsService.removeProdutInterest({
            product: {
                code: this.productCode,
            },
            productInterestEntry: [
                {
                    interestType: NotificationType.BACK_IN_STOCK,
                },
            ],
        }, true);
    };
    StockNotificationComponent.prototype.onInterestRemovingSuccess = function () {
        var _this = this;
        this.subscriptions.add(this.translationService
            .translate('stockNotification.unsubscribeSuccess')
            .pipe(first())
            .subscribe(function (text) {
            return _this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_INFO);
        }));
        this.interestsService.resetRemoveInterestState();
    };
    StockNotificationComponent.prototype.onInterestAddingError = function () {
        this.modalService.dismissActiveModal();
        this.interestsService.resetAddInterestState();
    };
    StockNotificationComponent.prototype.openDialog = function () {
        var modalInstance = this.modalService.open(StockNotificationDialogComponent, {
            centered: true,
            size: 'lg',
        }).componentInstance;
        modalInstance.subscribeSuccess$ = this.subscribeSuccess$;
        modalInstance.enabledPrefs = this.enabledPrefs;
    };
    StockNotificationComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
        this.interestsService.clearProductInterests();
        this.notificationPrefService.clearPreferences();
    };
    StockNotificationComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: CurrentProductService },
        { type: GlobalMessageService },
        { type: TranslationService },
        { type: UserInterestsService },
        { type: ModalService },
        { type: UserNotificationPreferenceService }
    ]; };
    StockNotificationComponent = __decorate([
        Component({
            selector: 'cx-stock-notification',
            template: "<ng-container *ngIf=\"outOfStock$ | async\">\n  <ng-container *ngIf=\"!(hasProductInterests$ | async); else stopNotify\">\n    <ng-container *ngIf=\"prefsEnabled$ | async; else disableNotify\">\n      <div class=\"stock-notification-notes\">\n        <p>{{ 'stockNotification.getNotified' | cxTranslate }}</p>\n      </div>\n      <button\n        class=\"btn btn-primary btn-block btn-notify\"\n        type=\"button\"\n        (click)=\"subscribe()\"\n      >\n        {{ 'stockNotification.notifyMe' | cxTranslate }}\n      </button>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #disableNotify>\n  <div class=\"stock-notification-notes\">\n    <p>\n      <ng-container *ngIf=\"anonymous; else loggedIn\">\n        <a [routerLink]=\"{ cxRoute: 'login' } | cxUrl\">\n          {{ 'miniLogin.signInRegister' | cxTranslate }}</a\n        >\n        {{ 'stockNotification.getNotifySuffix' | cxTranslate }}<br />\n      </ng-container>\n      <ng-template #loggedIn>\n        {{ 'stockNotification.getNotify' | cxTranslate }}<br />\n        {{ 'stockNotification.activateChannelsPrefix' | cxTranslate\n        }}<a [routerLink]=\"['/my-account/notification-preference']\">{{\n          'stockNotification.channelsLink' | cxTranslate\n        }}</a\n        >{{ 'stockNotification.activateChannelsSuffix' | cxTranslate }}\n      </ng-template>\n    </p>\n  </div>\n  <button\n    class=\"btn btn-primary btn-block btn-notify\"\n    type=\"button\"\n    disabled=\"true\"\n  >\n    {{ 'stockNotification.notifyMe' | cxTranslate }}\n  </button>\n</ng-template>\n\n<ng-template #stopNotify>\n  <ng-container *ngIf=\"!(isRemoveInterestLoading$ | async); else loading\">\n    <div class=\"stock-notification-notes\">\n      <p>{{ 'stockNotification.notified' | cxTranslate }}</p>\n    </div>\n    <button\n      class=\"btn btn-primary btn-block btn-stop-notify\"\n      type=\"button\"\n      (click)=\"unsubscribe()\"\n    >\n      {{ 'stockNotification.stopNotify' | cxTranslate }}\n    </button>\n  </ng-container>\n</ng-template>\n\n<ng-template #loading>\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"cx-dialog-row\">\n      <div class=\"col-sm-12\">\n        <cx-spinner></cx-spinner>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], StockNotificationComponent);
    return StockNotificationComponent;
}());
export { StockNotificationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stbm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3Qvc3RvY2stbm90aWZpY2F0aW9uL3N0b2NrLW5vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsaUNBQWlDLEVBQ2pDLFdBQVcsRUFDWCxxQkFBcUIsRUFDckIsc0JBQXNCLEVBQ3RCLGdCQUFnQixFQUNoQixPQUFPLEVBQ1Asb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNsQixpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBT25IO0lBWUUsb0NBQ1UsV0FBd0IsRUFDeEIscUJBQTRDLEVBQzVDLG9CQUEwQyxFQUMxQyxrQkFBc0MsRUFDdEMsZ0JBQXNDLEVBQ3RDLFlBQTBCLEVBQzFCLHVCQUEwRDtRQU4xRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtR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Q0FBQyxZQUFZLENBQUMsSUFBSSxDQUMxQyxnQ0FBZ0MsRUFDaEM7WUFDRSxRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FDRixDQUFDLGlCQUFpQixDQUFDO1FBQ3BCLGFBQWEsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDekQsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ2pELENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNsRCxDQUFDOztnQkE3SHNCLFdBQVc7Z0JBQ0QscUJBQXFCO2dCQUN0QixvQkFBb0I7Z0JBQ3RCLGtCQUFrQjtnQkFDcEIsb0JBQW9CO2dCQUN4QixZQUFZO2dCQUNELGlDQUFpQzs7SUFuQnpELDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLHF2RUFBa0Q7WUFDbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLDBCQUEwQixDQTJJdEM7SUFBRCxpQ0FBQztDQUFBLEFBM0lELElBMklDO1NBM0lZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFVzZXJJbnRlcmVzdHNTZXJ2aWNlLFxuICBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG4gIE5vdGlmaWNhdGlvblByZWZlcmVuY2UsXG4gIE5vdGlmaWNhdGlvblR5cGUsXG4gIFByb2R1Y3QsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFwLCBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvY2tOb3RpZmljYXRpb25EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3N0b2NrLW5vdGlmaWNhdGlvbi1kaWFsb2cvc3RvY2stbm90aWZpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9jay1ub3RpZmljYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvY2stbm90aWZpY2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFN0b2NrTm90aWZpY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBoYXNQcm9kdWN0SW50ZXJlc3RzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHJlZnNFbmFibGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgb3V0T2ZTdG9jayQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGlzUmVtb3ZlSW50ZXJlc3RMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgYW5vbnltb3VzID0gdHJ1ZTtcblxuICBwcml2YXRlIGVuYWJsZWRQcmVmczogTm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdID0gW107XG4gIHByaXZhdGUgcHJvZHVjdENvZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBzdWJzY3JpYmVTdWNjZXNzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGludGVyZXN0c1NlcnZpY2U6IFVzZXJJbnRlcmVzdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25QcmVmU2VydmljZTogVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm91dE9mU3RvY2skID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KCkucGlwZShmaWx0ZXIoQm9vbGVhbikpLFxuICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICBdKS5waXBlKFxuICAgICAgdGFwKChbcHJvZHVjdCwgdXNlcklkXTogW1Byb2R1Y3QsIFN0cmluZ10pID0+IHtcbiAgICAgICAgdGhpcy5wcm9kdWN0Q29kZSA9IHByb2R1Y3QuY29kZTtcbiAgICAgICAgaWYgKHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXMgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblByZWZTZXJ2aWNlLmxvYWRQcmVmZXJlbmNlcygpO1xuICAgICAgICAgIHRoaXMuaW50ZXJlc3RzU2VydmljZS5sb2FkUHJvZHVjdEludGVyZXN0cyhcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHByb2R1Y3QuY29kZSxcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvblR5cGUuQkFDS19JTl9TVE9DS1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKFxuICAgICAgICAoW3Byb2R1Y3RdOiBbUHJvZHVjdCwgU3RyaW5nXSkgPT5cbiAgICAgICAgICAhIXByb2R1Y3Quc3RvY2sgJiYgcHJvZHVjdC5zdG9jay5zdG9ja0xldmVsU3RhdHVzID09PSAnb3V0T2ZTdG9jaydcbiAgICAgIClcbiAgICApO1xuXG4gICAgdGhpcy5oYXNQcm9kdWN0SW50ZXJlc3RzJCA9IHRoaXMuaW50ZXJlc3RzU2VydmljZVxuICAgICAgLmdldFByb2R1Y3RJbnRlcmVzdHMoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICAoaW50ZXJlc3RzKSA9PiAhIWludGVyZXN0cy5yZXN1bHRzICYmIGludGVyZXN0cy5yZXN1bHRzLmxlbmd0aCA9PT0gMVxuICAgICAgICApXG4gICAgICApO1xuICAgIHRoaXMuc3Vic2NyaWJlU3VjY2VzcyQgPSB0aGlzLmludGVyZXN0c1NlcnZpY2UuZ2V0QWRkUHJvZHVjdEludGVyZXN0U3VjY2VzcygpO1xuICAgIHRoaXMuaXNSZW1vdmVJbnRlcmVzdExvYWRpbmckID0gdGhpcy5pbnRlcmVzdHNTZXJ2aWNlLmdldFJlbW92ZVByb2R1dEludGVyZXN0TG9hZGluZygpO1xuICAgIHRoaXMucHJlZnNFbmFibGVkJCA9IHRoaXMubm90aWZpY2F0aW9uUHJlZlNlcnZpY2VcbiAgICAgIC5nZXRFbmFibGVkUHJlZmVyZW5jZXMoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgocHJlZnMpID0+ICh0aGlzLmVuYWJsZWRQcmVmcyA9IHByZWZzKSksXG4gICAgICAgIG1hcCgocHJlZnMpID0+IHByZWZzLmxlbmd0aCA+IDApXG4gICAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuaW50ZXJlc3RzU2VydmljZS5nZXRBZGRQcm9kdWN0SW50ZXJlc3RFcnJvcigpLnN1YnNjcmliZSgoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgdGhpcy5vbkludGVyZXN0QWRkaW5nRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLmludGVyZXN0c1NlcnZpY2VcbiAgICAgICAgLmdldFJlbW92ZVByb2R1dEludGVyZXN0U3VjY2VzcygpXG4gICAgICAgIC5zdWJzY3JpYmUoKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5vbkludGVyZXN0UmVtb3ZpbmdTdWNjZXNzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBzdWJzY3JpYmUoKSB7XG4gICAgdGhpcy5vcGVuRGlhbG9nKCk7XG4gICAgdGhpcy5pbnRlcmVzdHNTZXJ2aWNlLmFkZFByb2R1Y3RJbnRlcmVzdChcbiAgICAgIHRoaXMucHJvZHVjdENvZGUsXG4gICAgICBOb3RpZmljYXRpb25UeXBlLkJBQ0tfSU5fU1RPQ0tcbiAgICApO1xuICB9XG5cbiAgdW5zdWJzY3JpYmUoKSB7XG4gICAgdGhpcy5pbnRlcmVzdHNTZXJ2aWNlLnJlbW92ZVByb2R1dEludGVyZXN0KFxuICAgICAge1xuICAgICAgICBwcm9kdWN0OiB7XG4gICAgICAgICAgY29kZTogdGhpcy5wcm9kdWN0Q29kZSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZHVjdEludGVyZXN0RW50cnk6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbnRlcmVzdFR5cGU6IE5vdGlmaWNhdGlvblR5cGUuQkFDS19JTl9TVE9DSyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHRydWVcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkludGVyZXN0UmVtb3ZpbmdTdWNjZXNzKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uU2VydmljZVxuICAgICAgICAudHJhbnNsYXRlKCdzdG9ja05vdGlmaWNhdGlvbi51bnN1YnNjcmliZVN1Y2Nlc3MnKVxuICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAuc3Vic2NyaWJlKCh0ZXh0KSA9PlxuICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHRleHQsIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0lORk8pXG4gICAgICAgIClcbiAgICApO1xuICAgIHRoaXMuaW50ZXJlc3RzU2VydmljZS5yZXNldFJlbW92ZUludGVyZXN0U3RhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25JbnRlcmVzdEFkZGluZ0Vycm9yKCkge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLmRpc21pc3NBY3RpdmVNb2RhbCgpO1xuICAgIHRoaXMuaW50ZXJlc3RzU2VydmljZS5yZXNldEFkZEludGVyZXN0U3RhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgb3BlbkRpYWxvZygpIHtcbiAgICBjb25zdCBtb2RhbEluc3RhbmNlID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihcbiAgICAgIFN0b2NrTm90aWZpY2F0aW9uRGlhbG9nQ29tcG9uZW50LFxuICAgICAge1xuICAgICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgICAgc2l6ZTogJ2xnJyxcbiAgICAgIH1cbiAgICApLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIG1vZGFsSW5zdGFuY2Uuc3Vic2NyaWJlU3VjY2VzcyQgPSB0aGlzLnN1YnNjcmliZVN1Y2Nlc3MkO1xuICAgIG1vZGFsSW5zdGFuY2UuZW5hYmxlZFByZWZzID0gdGhpcy5lbmFibGVkUHJlZnM7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmludGVyZXN0c1NlcnZpY2UuY2xlYXJQcm9kdWN0SW50ZXJlc3RzKCk7XG4gICAgdGhpcy5ub3RpZmljYXRpb25QcmVmU2VydmljZS5jbGVhclByZWZlcmVuY2VzKCk7XG4gIH1cbn1cbiJdfQ==