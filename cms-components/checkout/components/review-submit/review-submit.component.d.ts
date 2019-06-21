import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address, Cart, CartService, CheckoutDeliveryService, CheckoutPaymentService, DeliveryMode, OrderEntry, PaymentDetails, TranslationService, UserAddressService } from '@spartacus/core';
import { Card } from '../../../../shared/components/card/card.component';
export declare class ReviewSubmitComponent implements OnInit {
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected checkoutPaymentService: CheckoutPaymentService;
    protected userAddressService: UserAddressService;
    protected cartService: CartService;
    private translation;
    entries$: Observable<OrderEntry[]>;
    cart$: Observable<Cart>;
    deliveryMode$: Observable<DeliveryMode>;
    countryName$: Observable<string>;
    deliveryAddress$: Observable<Address>;
    paymentDetails$: Observable<PaymentDetails>;
    constructor(checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, userAddressService: UserAddressService, cartService: CartService, translation: TranslationService);
    ngOnInit(): void;
    getShippingAddressCard(deliveryAddress: Address, countryName: string): Observable<Card>;
    getDeliveryModeCard(deliveryMode: DeliveryMode): Observable<Card>;
    getPaymentMethodCard(paymentDetails: PaymentDetails): Observable<Card>;
}
