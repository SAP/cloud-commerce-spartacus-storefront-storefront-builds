import { OnDestroy, OnInit } from '@angular/core';
import { GlobalMessageService, TranslationService, UserIdService, UserInterestsService, UserNotificationPreferenceService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { CurrentProductService } from '../current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class StockNotificationComponent implements OnInit, OnDestroy {
    private currentProductService;
    private globalMessageService;
    private translationService;
    private interestsService;
    private modalService;
    private notificationPrefService;
    private userIdService;
    hasProductInterests$: Observable<boolean>;
    prefsEnabled$: Observable<boolean>;
    outOfStock$: Observable<boolean>;
    isRemoveInterestLoading$: Observable<boolean>;
    anonymous: boolean;
    private enabledPrefs;
    private productCode;
    private subscribeSuccess$;
    private subscriptions;
    constructor(currentProductService: CurrentProductService, globalMessageService: GlobalMessageService, translationService: TranslationService, interestsService: UserInterestsService, modalService: ModalService, notificationPrefService: UserNotificationPreferenceService, userIdService: UserIdService);
    ngOnInit(): void;
    subscribe(): void;
    unsubscribe(): void;
    private onInterestRemovingSuccess;
    private onInterestAddingError;
    private openDialog;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StockNotificationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StockNotificationComponent, "cx-stock-notification", never, {}, {}, never, never>;
}

//# sourceMappingURL=stock-notification.component.d.ts.map