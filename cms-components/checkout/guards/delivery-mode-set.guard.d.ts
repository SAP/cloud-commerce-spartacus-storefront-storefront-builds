import { CanActivate, Router, UrlTree } from '@angular/router';
import { RoutingConfigService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutConfigService } from '../services/checkout-config.service';
import { CheckoutDetailsService } from '../services/checkout-details.service';
export declare class DeliveryModeSetGuard implements CanActivate {
    private checkoutDetailsService;
    private checkoutConfigService;
    private routingConfigService;
    private router;
    constructor(checkoutDetailsService: CheckoutDetailsService, checkoutConfigService: CheckoutConfigService, routingConfigService: RoutingConfigService, router: Router);
    canActivate(): Observable<boolean | UrlTree>;
}
