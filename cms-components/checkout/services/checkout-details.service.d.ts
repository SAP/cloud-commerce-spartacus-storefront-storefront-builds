import { ActiveCartService, Address, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, PaymentDetails } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutDetailsService {
    protected checkoutService: CheckoutService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected checkoutPaymentService: CheckoutPaymentService;
    protected activeCartService: ActiveCartService;
    cartId$: Observable<string>;
    getCheckoutDetailsLoaded$: Observable<boolean>;
    constructor(checkoutService: CheckoutService, checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, activeCartService: ActiveCartService);
    getDeliveryAddress(): Observable<Address>;
    getSelectedDeliveryModeCode(): Observable<string>;
    getPaymentDetails(): Observable<PaymentDetails>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutDetailsService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LWRldGFpbHMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7O0FBV0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UsIEFkZHJlc3MsIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLCBDaGVja291dFBheW1lbnRTZXJ2aWNlLCBDaGVja291dFNlcnZpY2UsIFBheW1lbnREZXRhaWxzIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENoZWNrb3V0RGV0YWlsc1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgY2FydElkJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIGdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgY29uc3RydWN0b3IoY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSwgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSwgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlKTtcbiAgICBnZXREZWxpdmVyeUFkZHJlc3MoKTogT2JzZXJ2YWJsZTxBZGRyZXNzPjtcbiAgICBnZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIGdldFBheW1lbnREZXRhaWxzKCk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+O1xufVxuIl19