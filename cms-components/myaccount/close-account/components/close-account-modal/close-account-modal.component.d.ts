import { OnDestroy, OnInit } from '@angular/core';
import { AuthService, GlobalMessageService, RoutingService, TranslationService, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/icon.model';
import { ModalService } from '../../../../../shared/components/modal/modal.service';
export declare class CloseAccountModalComponent implements OnInit, OnDestroy {
    protected modalService: ModalService;
    private userService;
    private authService;
    private globalMessageService;
    private routingService;
    private translationService;
    iconTypes: typeof ICON_TYPE;
    private subscription;
    isLoggedIn$: Observable<boolean>;
    isLoading$: Observable<boolean>;
    constructor(modalService: ModalService, userService: UserService, authService: AuthService, globalMessageService: GlobalMessageService, routingService: RoutingService, translationService: TranslationService);
    ngOnInit(): void;
    onSuccess(success: boolean): void;
    onError(error: boolean): void;
    dismissModal(reason?: any): void;
    closeAccount(): void;
    ngOnDestroy(): void;
}
