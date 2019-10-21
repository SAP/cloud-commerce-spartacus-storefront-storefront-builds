import { OnDestroy, OnInit } from '@angular/core';
import { AnonymousConsent, AnonymousConsentsConfig, AnonymousConsentsService, ConsentTemplate } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/index';
import { ModalService } from '../../modal/index';
export declare class AnonymousConsentsDialogComponent implements OnInit, OnDestroy {
    private config;
    private modalService;
    private anonymousConsentsService;
    private subscriptions;
    showLegalDescription: boolean;
    iconTypes: typeof ICON_TYPE;
    requiredConsents: string[];
    templates$: Observable<ConsentTemplate[]>;
    consents$: Observable<AnonymousConsent[]>;
    constructor(config: AnonymousConsentsConfig, modalService: ModalService, anonymousConsentsService: AnonymousConsentsService);
    ngOnInit(): void;
    closeModal(reason?: any): void;
    rejectAll(): void;
    allowAll(): void;
    private isRequiredConsent;
    onConsentChange({ given, template, }: {
        given: boolean;
        template: ConsentTemplate;
    }): void;
    getCorrespondingConsent(template: ConsentTemplate, consents?: AnonymousConsent[]): AnonymousConsent;
    ngOnDestroy(): void;
}