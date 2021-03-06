import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, Address, CheckoutCostCenterService, CheckoutDeliveryService, PaymentTypeService, TranslationService, UserAddressService, UserCostCenterService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { Card } from '../../../../shared/components/card/card.component';
import { CheckoutStepService } from '../../services/checkout-step.service';
export interface CardWithAddress {
    card: Card;
    address: Address;
}
export declare class ShippingAddressComponent implements OnInit, OnDestroy {
    protected userAddressService: UserAddressService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected activatedRoute: ActivatedRoute;
    protected translation: TranslationService;
    protected activeCartService: ActiveCartService;
    protected checkoutStepService: CheckoutStepService;
    protected paymentTypeService?: PaymentTypeService;
    protected userCostCenterService?: UserCostCenterService;
    protected checkoutCostCenterService?: CheckoutCostCenterService;
    addressFormOpened: boolean;
    forceLoader: boolean;
    selectedAddress: Address;
    doneAutoSelect: boolean;
    isAccountPayment: boolean;
    protected subscriptions: Subscription;
    constructor(userAddressService: UserAddressService, checkoutDeliveryService: CheckoutDeliveryService, activatedRoute: ActivatedRoute, translation: TranslationService, activeCartService: ActiveCartService, checkoutStepService: CheckoutStepService, paymentTypeService?: PaymentTypeService, userCostCenterService?: UserCostCenterService, checkoutCostCenterService?: CheckoutCostCenterService);
    get isGuestCheckout(): boolean;
    get backBtnText(): string;
    get isLoading$(): Observable<boolean>;
    get selectedAddress$(): Observable<Address>;
    get cards$(): Observable<CardWithAddress[]>;
    getSupportedAddresses(): Observable<Address[]>;
    selectDefaultAddress(addresses: Address[], selected: Address): void;
    ngOnInit(): void;
    getCardContent(address: Address, selected: any, textDefaultShippingAddress: string, textShipToThisAddress: string, textSelected: string): Card;
    selectAddress(address: Address): void;
    addAddress(address: Address): void;
    showNewAddressForm(): void;
    hideNewAddressForm(goPrevious?: boolean): void;
    next(): void;
    back(): void;
    ngOnDestroy(): void;
}
