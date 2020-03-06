import { __decorate, __extends, __read, __values, __param, __awaiter, __generator, __assign, __spread } from 'tslib';
import { CommonModule, isPlatformBrowser, DOCUMENT, isPlatformServer, Location, formatCurrency, getCurrencySymbol } from '@angular/common';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, ElementRef, Renderer2, Input, Component, NgModule, ComponentFactoryResolver, Inject, PLATFORM_ID, Optional, NgZone, Injector, ViewContainerRef, Directive, INJECTOR, InjectionToken, isDevMode, ChangeDetectionStrategy, TemplateRef, EventEmitter, ComponentFactory, Output, HostBinding, APP_INITIALIZER, SecurityContext, RendererFactory2, ViewEncapsulation, ChangeDetectorRef, Pipe, ViewChild, HostListener, ViewChildren, inject } from '@angular/core';
import { WindowRef, ConfigModule, Config, isFeatureLevel, AnonymousConsentsConfig, AnonymousConsentsService, I18nModule, FeaturesConfigModule, DeferLoadingStrategy, CmsConfig, AuthService, CartService, CartDataService, CheckoutService, CheckoutDeliveryService, CheckoutPaymentService, CmsService, PageMetaService, FeatureConfigService, GlobalMessageService, TranslationService, KymaService, OccEndpointsService, ProductService, ProductSearchService, ProductReviewService, ProductReferenceService, SearchboxService, RoutingService, CurrencyService, LanguageService, BaseSiteService, UserService, UserAddressService, UserConsentService, UserOrderService, UserPaymentService, UserNotificationPreferenceService, UserInterestsService, SelectiveCartService, DynamicAttributeService, TranslationChunkService, PageType, SemanticPathService, ProtectedRoutesGuard, GlobalMessageType, provideConfig, RoutingModule as RoutingModule$1, PageRobotsMeta, ProductScope, AsmAuthService, AsmConfig, AsmService, AsmModule as AsmModule$1, PromotionLocation, OccConfig, UrlModule, LANGUAGE_CONTEXT_ID, CURRENCY_CONTEXT_ID, ContextServiceMap, SiteContextModule, EMAIL_PATTERN, PASSWORD_PATTERN, CartVoucherService, OCC_USER_ID_ANONYMOUS, CustomerCouponService, WishListService, ActiveCartService, CartModule, RoutingConfigService, AuthRedirectService, ANONYMOUS_CONSENT_STATUS, isFeatureEnabled, ANONYMOUS_CONSENTS_FEATURE, AuthGuard, NotAuthGuard, OrderReturnRequestService, CmsPageTitleModule, VariantType, VariantQualifier, NotificationType, StoreDataService, StoreFinderService, GoogleMapRendererService, StoreFinderCoreModule, ProtectedRoutesService, UrlMatcherService, DEFAULT_URL_MATCHER, StateModule, AuthModule, AnonymousConsentsModule as AnonymousConsentsModule$1, ConfigInitializerModule, CmsModule, GlobalMessageModule, ProcessModule, CheckoutModule, UserModule, ProductModule, provideConfigFromMetaTags, SmartEditModule, PersonalizationModule, OccModule, ExternalRoutesModule } from '@spartacus/core';
import { Subscription, combineLatest, concat, of, isObservable, from, fromEvent, BehaviorSubject, Observable, asyncScheduler } from 'rxjs';
import { take, distinctUntilChanged, tap, first, skipWhile, endWith, debounceTime, startWith, map, switchMap, filter, withLatestFrom, flatMap, observeOn, mergeMap, shareReplay, scan, distinctUntilKeyChanged, pluck } from 'rxjs/operators';
import { DomSanitizer, Title, Meta } from '@angular/platform-browser';
import { NgbModalRef, NgbModal, NgbModule, NgbActiveModal, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder, ReactiveFormsModule, FormGroup, FormControl, FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { ServiceWorkerModule, SwRegistrationOptions } from '@angular/service-worker';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule, HttpUrlEncodingCodec } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

var ICON_TYPE;
(function (ICON_TYPE) {
    ICON_TYPE["STAR"] = "STAR";
    ICON_TYPE["SEARCH"] = "SEARCH";
    ICON_TYPE["CART"] = "CART";
    ICON_TYPE["INFO"] = "INFO";
    ICON_TYPE["GRID"] = "GRID";
    ICON_TYPE["LIST"] = "LIST";
    ICON_TYPE["CARET_DOWN"] = "CARET_DOWN";
    ICON_TYPE["CARET_LEFT"] = "CARET_LEFT";
    ICON_TYPE["CARET_RIGHT"] = "CARET_RIGHT";
    ICON_TYPE["CLOSE"] = "CLOSE";
    ICON_TYPE["ERROR"] = "ERROR";
    ICON_TYPE["WARNING"] = "WARNING";
    ICON_TYPE["SUCCESS"] = "SUCCESS";
    ICON_TYPE["VISA"] = "VISA";
    ICON_TYPE["MASTER_CARD"] = "MASTER_CARD";
    ICON_TYPE["AMEX"] = "AMEX";
    ICON_TYPE["DINERS_CLUB"] = "DINERS_CLUB";
    ICON_TYPE["CREDIT_CARD"] = "CREDIT_CARD";
    ICON_TYPE["EXPAND"] = "EXPAND";
    ICON_TYPE["COLLAPSE"] = "COLLAPSE";
    ICON_TYPE["RESET"] = "RESET";
    ICON_TYPE["CIRCLE"] = "CIRCLE";
    ICON_TYPE["HEART"] = "HEART";
    ICON_TYPE["EMPTY_HEART"] = "EMPTY_HEART";
})(ICON_TYPE || (ICON_TYPE = {}));
var IconConfig = /** @class */ (function () {
    function IconConfig() {
    }
    return IconConfig;
}());
/**
 * Each ICON type can have an companied resource type, such as SVG, LINK (font) or just TEXT.
 * The resources will be automitacally loaded in case they're required for the `ICON_TYPE`.
 */
var IconResourceType;
(function (IconResourceType) {
    /**
     * An svg based icon requires an SVG resource that must be loaded,
     * this is typically a sprite svg file.
     */
    IconResourceType["SVG"] = "svg";
    /**
     * A font based ICON might require an additional CSS file to be loaded.
     */
    IconResourceType["LINK"] = "link";
    /**
     * Text based icons will simply add the ICON string to the DOM. Text icons do not need an image
     * or CSS pseudo class (i.e. :before), as the text itself is the icon (i.e. +)
     */
    IconResourceType["TEXT"] = "text";
})(IconResourceType || (IconResourceType = {}));

var fontawesomeIconConfig = {
    icon: {
        symbols: {
            SEARCH: 'fas fa-search',
            CART: 'fas fa-shopping-cart',
            INFO: 'fas fa-info-circle',
            STAR: 'fas fa-star',
            GRID: 'fas fa-th-large',
            LIST: 'fas fa-bars',
            CARET_DOWN: 'fas fa-angle-down',
            CARET_RIGHT: 'fas fa-angle-right',
            CARET_LEFT: 'fas fa-angle-left',
            ERROR: 'fas fa-exclamation-circle',
            WARNING: 'fas fa-exclamation-triangle',
            SUCCESS: 'fas fa-check-circle',
            CLOSE: 'fas fa-times',
            VISA: 'fab fa-cc-visa',
            MASTER_CARD: 'fab fa-cc-mastercard',
            AMEX: 'fab fa-cc-amex',
            DINERS_CLUB: 'fab fa-cc-diners-club',
            CREDIT_CARD: 'fas fa-credit-card',
            COLLAPSE: 'fas fa-minus',
            EXPAND: 'fas fa-plus',
            RESET: 'fas fa-times-circle',
            CIRCLE: 'fas fa-circle',
            HEART: 'fas fa-heart',
            EMPTY_HEART: 'far fa-heart',
        },
        resources: [
            {
                type: IconResourceType.LINK,
                url: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
            },
        ],
    },
};

var IconLoaderService = /** @class */ (function () {
    function IconLoaderService(winRef, iconConfig, sanitizer) {
        this.winRef = winRef;
        this.iconConfig = iconConfig;
        this.sanitizer = sanitizer;
        this.loadedResources = [];
    }
    /**
     * Returns an html fragment which can be added to the DOM in a safe way.
     */
    IconLoaderService.prototype.getHtml = function (type) {
        if (this.isResourceType(type, IconResourceType.SVG)) {
            return this.sanitizer.bypassSecurityTrustHtml("<svg><use xlink:href=\"" + this.getSvgPath(type) + "\"></use></svg>");
        }
        if (this.isResourceType(type, IconResourceType.TEXT)) {
            return this.sanitizer.bypassSecurityTrustHtml(this.getSymbol(type));
        }
    };
    /**
     *
     * Returns the symbol class(es) for the icon type.
     */
    IconLoaderService.prototype.getStyleClasses = function (iconType) {
        return this.getSymbol(iconType) || '';
    };
    /**
     * Indicates whether the given `ICON_TYPE` is configured for
     * the given `IconResourceType`.
     */
    IconLoaderService.prototype.isResourceType = function (iconType, resourceType) {
        return (this.config.resources &&
            !!this.config.resources.find(function (res) {
                return res.types && res.type === resourceType && res.types.includes(iconType);
            }));
    };
    /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config a[[s been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     */
    IconLoaderService.prototype.getSvgPath = function (iconType) {
        var svgResource = this.config.resources.find(function (res) {
            return res.type === IconResourceType.SVG &&
                res.types &&
                res.types.includes(iconType);
        });
        if (svgResource) {
            return svgResource.url
                ? svgResource.url + "#" + this.getSymbol(iconType)
                : "#" + this.getSymbol(iconType);
        }
    };
    /**
     * Loads the resource url (if any) for the given icon.
     * The icon will only be loaded once.
     *
     * NOTE: this is not working when the shadow is used as there's
     * no head element available and the link must be loaded for every
     * web component.
     */
    IconLoaderService.prototype.addLinkResource = function (iconType) {
        var resource = this.findResource(iconType, IconResourceType.LINK);
        if (resource &&
            resource.url &&
            !this.loadedResources.includes(resource.url)) {
            this.loadedResources.push(resource.url);
            var head = this.winRef.document.getElementsByTagName('head')[0];
            var link = this.winRef.document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = resource.url;
            head.appendChild(link);
        }
    };
    IconLoaderService.prototype.findResource = function (iconType, resourceType) {
        if (!this.config.resources) {
            return;
        }
        var resource = this.config.resources.find(function (res) {
            return res.type === resourceType && res.types && res.types.includes(iconType);
        });
        // no specific resource found, let's try to find a one-size-fits-all resource
        if (!resource) {
            resource = this.config.resources.find(function (res) { return (res.type === resourceType && !res.types) || res.types === []; });
        }
        return resource;
    };
    IconLoaderService.prototype.getSymbol = function (iconType) {
        if (this.config && this.config.symbols && this.config.symbols[iconType]) {
            return this.config.symbols[iconType];
        }
    };
    Object.defineProperty(IconLoaderService.prototype, "config", {
        get: function () {
            return this.iconConfig.icon;
        },
        enumerable: true,
        configurable: true
    });
    IconLoaderService.ctorParameters = function () { return [
        { type: WindowRef },
        { type: IconConfig },
        { type: DomSanitizer }
    ]; };
    IconLoaderService.ɵprov = ɵɵdefineInjectable({ factory: function IconLoaderService_Factory() { return new IconLoaderService(ɵɵinject(WindowRef), ɵɵinject(IconConfig), ɵɵinject(DomSanitizer)); }, token: IconLoaderService, providedIn: "root" });
    IconLoaderService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], IconLoaderService);
    return IconLoaderService;
}());

/**
 *
 * The icon component can be added in different ways:
 *
 * With the component selector:
 * `<cx-icon type="SEARCH"></cx-icon>`
 *
 * With the attribute selector:
 * `<span cxIcon="STAR"></span>`
 *
 * Additionally, content can be projected to the icon:
 *
 * `<button cxIcon="HAPPY">happy label</button>`
 *
 * The above button would become (based on a TEXT resource type):
 * `<button>😊happy label</button>`
 *
 * While the content is projected, the icon itself doesn't require an
 * additional DOM node which is an advantage over the component selector.
 */
var IconComponent = /** @class */ (function () {
    function IconComponent(iconLoader, elementRef, renderer) {
        this.iconLoader = iconLoader;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    Object.defineProperty(IconComponent.prototype, "cxIcon", {
        /**
         * The cxIcon directive is bound to the icon type. You can feed the `ICON_TYPE` to
         * accomplish a configurable button in the UI.
         */
        set: function (type) {
            this.setIcon(type);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "type", {
        /**
         * The type input parameter is bound to the icon type. You can feed the `ICON_TYPE` to
         * accomplish a configurable button in the UI.
         */
        set: function (type) {
            this.setIcon(type);
        },
        enumerable: true,
        configurable: true
    });
    IconComponent.prototype.setIcon = function (type) {
        if (!type || type === '') {
            return;
        }
        this.icon = this.iconLoader.getHtml(type);
        this.addStyleClasses(type);
        this.iconLoader.addLinkResource(type);
    };
    /**
     * Adds the style classes and the link resource (if available).
     */
    IconComponent.prototype.addStyleClasses = function (type) {
        var _this = this;
        this.renderer.addClass(this.host, 'cx-icon');
        if (this.styleClasses) {
            this.styleClasses.forEach(function (cls) {
                return _this.renderer.removeClass(_this.host, cls);
            });
        }
        this.styleClasses = this.iconLoader.getStyleClasses(type).split(' ');
        this.styleClasses.forEach(function (cls) {
            if (cls !== '') {
                _this.renderer.addClass(_this.host, cls);
            }
        });
    };
    Object.defineProperty(IconComponent.prototype, "host", {
        get: function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    IconComponent.ctorParameters = function () { return [
        { type: IconLoaderService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input()
    ], IconComponent.prototype, "cxIcon", null);
    __decorate([
        Input()
    ], IconComponent.prototype, "type", null);
    IconComponent = __decorate([
        Component({
            selector: 'cx-icon,[cxIcon]',
            template: "<i [outerHTML]=\"icon\"></i><ng-content></ng-content>\n"
        })
    ], IconComponent);
    return IconComponent;
}());

var IconModule = /** @class */ (function () {
    function IconModule() {
    }
    IconModule = __decorate([
        NgModule({
            declarations: [IconComponent],
            imports: [CommonModule, ConfigModule.withConfig(fontawesomeIconConfig)],
            providers: [{ provide: IconConfig, useExisting: Config }],
            exports: [IconComponent],
        })
    ], IconModule);
    return IconModule;
}());

/**
 * A reference to a newly opened modal
 *
 * @todo remove ngb dependency and create our own implementation of ModalRef
 */
var ModalRef = /** @class */ (function (_super) {
    __extends(ModalRef, _super);
    function ModalRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModalRef;
}(NgbModalRef));

/**
 * A service to handle modal
 */
var ModalService = /** @class */ (function () {
    function ModalService(ngbModalService) {
        this.ngbModalService = ngbModalService;
        this.modals = [];
    }
    ModalService.prototype.open = function (content, options) {
        var activeModal;
        activeModal = this.ngbModalService.open(content, options);
        this.modals.push(activeModal);
        return activeModal;
    };
    ModalService.prototype.getActiveModal = function () {
        var modal = this.modals[this.modals.length - 1];
        return modal ? modal : null;
    };
    ModalService.prototype.dismissActiveModal = function (reason) {
        var modal = this.getActiveModal();
        if (modal) {
            modal.dismiss(reason);
            this.modals.pop();
        }
    };
    ModalService.prototype.closeActiveModal = function (reason) {
        var modal = this.getActiveModal();
        if (modal) {
            modal.close(reason);
            this.modals.pop();
        }
    };
    ModalService.ctorParameters = function () { return [
        { type: NgbModal }
    ]; };
    ModalService.ɵprov = ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(ɵɵinject(NgbModal)); }, token: ModalService, providedIn: "root" });
    ModalService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ModalService);
    return ModalService;
}());

var AnonymousConsentDialogComponent = /** @class */ (function () {
    function AnonymousConsentDialogComponent(config, modalService, anonymousConsentsService) {
        this.config = config;
        this.modalService = modalService;
        this.anonymousConsentsService = anonymousConsentsService;
        this.subscriptions = new Subscription();
        this.showLegalDescription = true;
        this.iconTypes = ICON_TYPE;
        this.requiredConsents = [];
        // TODO(issue:4989) Anonymous consents - remove
        this.isLevel13 = isFeatureLevel(this.config, '1.3');
        if (Boolean(this.config.anonymousConsents)) {
            this.showLegalDescription = this.config.anonymousConsents.showLegalDescriptionInDialog;
            if (Boolean(this.config.anonymousConsents.requiredConsents)) {
                this.requiredConsents = this.config.anonymousConsents.requiredConsents;
            }
        }
    }
    AnonymousConsentDialogComponent.prototype.ngOnInit = function () {
        this.templates$ = this.anonymousConsentsService.getTemplates();
        this.consents$ = this.anonymousConsentsService.getConsents();
        this.loading$ = this.anonymousConsentsService.getLoadTemplatesLoading();
    };
    AnonymousConsentDialogComponent.prototype.closeModal = function (reason) {
        this.modalService.closeActiveModal(reason);
    };
    AnonymousConsentDialogComponent.prototype.rejectAll = function () {
        var _this = this;
        this.subscriptions.add(combineLatest([this.templates$, this.consents$])
            .pipe(take(1), distinctUntilChanged(), tap(function (_a) {
            var _b = __read(_a, 2), templates = _b[0], consents = _b[1];
            return templates.forEach(function (template) {
                var consent = _this.getCorrespondingConsent(template, consents);
                if (_this.anonymousConsentsService.isConsentGiven(consent)) {
                    if (_this.isRequiredConsent(template)) {
                        return;
                    }
                    _this.anonymousConsentsService.withdrawConsent(template.id);
                }
            });
        }))
            .subscribe());
        this.closeModal('rejectAll');
    };
    AnonymousConsentDialogComponent.prototype.allowAll = function () {
        var _this = this;
        this.subscriptions.add(combineLatest([this.templates$, this.consents$])
            .pipe(take(1), distinctUntilChanged(), tap(function (_a) {
            var _b = __read(_a, 2), templates = _b[0], consents = _b[1];
            return templates.forEach(function (template) {
                var consent = _this.getCorrespondingConsent(template, consents);
                if ((consent && consent.consentState == null) ||
                    _this.anonymousConsentsService.isConsentWithdrawn(consent)) {
                    if (_this.isRequiredConsent(template)) {
                        return;
                    }
                    _this.anonymousConsentsService.giveConsent(template.id);
                }
            });
        }))
            .subscribe());
        this.closeModal('allowAll');
    };
    AnonymousConsentDialogComponent.prototype.isRequiredConsent = function (template) {
        return (Boolean(this.config.anonymousConsents) &&
            Boolean(this.config.anonymousConsents.requiredConsents) &&
            this.config.anonymousConsents.requiredConsents.includes(template.id));
    };
    AnonymousConsentDialogComponent.prototype.onConsentChange = function (_a) {
        var given = _a.given, template = _a.template;
        if (given) {
            this.anonymousConsentsService.giveConsent(template.id);
        }
        else {
            this.anonymousConsentsService.withdrawConsent(template.id);
        }
    };
    AnonymousConsentDialogComponent.prototype.getCorrespondingConsent = function (template, consents) {
        var e_1, _a;
        if (consents === void 0) { consents = []; }
        try {
            for (var consents_1 = __values(consents), consents_1_1 = consents_1.next(); !consents_1_1.done; consents_1_1 = consents_1.next()) {
                var consent = consents_1_1.value;
                if (template.id === consent.templateCode) {
                    return consent;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (consents_1_1 && !consents_1_1.done && (_a = consents_1.return)) _a.call(consents_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    AnonymousConsentDialogComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    AnonymousConsentDialogComponent.ctorParameters = function () { return [
        { type: AnonymousConsentsConfig },
        { type: ModalService },
        { type: AnonymousConsentsService }
    ]; };
    AnonymousConsentDialogComponent = __decorate([
        Component({
            selector: 'cx-anonymous-consent-dialog',
            template: "<div #dialog>\n  <div *ngIf=\"loading$ | async; else dialogBody\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <!-- Modal Header -->\n  <ng-template #dialogBody>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'anonymousConsents.dialog.title' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"closeModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Separator -->\n    <div\n      class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n    ></div>\n    <div class=\"cx-dialog-description\" *ngIf=\"showLegalDescription\">\n      {{ 'anonymousConsents.dialog.legalDescription' | cxTranslate }}\n      <div\n        class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n      ></div>\n    </div>\n    <!-- Actions -->\n    <div class=\"cx-dialog-buttons\">\n      <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"rejectAll()\">{{\n        'anonymousConsents.dialog.clearAll' | cxTranslate\n      }}</a>\n      <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"allowAll()\">{{\n        'anonymousConsents.dialog.selectAll' | cxTranslate\n      }}</a>\n    </div>\n    <!-- Modal Body -->\n    <div\n      class=\"cx-dialog-body modal-body\"\n      *ngIf=\"templates$ | async as templates\"\n    >\n      <div *ngIf=\"consents$ | async as consents\">\n        <div\n          class=\"cx-dialog-row col-sm-12 col-md-6\"\n          *ngFor=\"let template of templates\"\n        >\n          <cx-consent-management-form\n            [consentTemplate]=\"template\"\n            [requiredConsents]=\"requiredConsents\"\n            [consent]=\"getCorrespondingConsent(template, consents)\"\n            [isAnonymousConsentsEnabled]=\"true\"\n            [isLevel13]=\"isLevel13\"\n            (consentChanged)=\"onConsentChange($event)\"\n          ></cx-consent-management-form>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
        })
    ], AnonymousConsentDialogComponent);
    return AnonymousConsentDialogComponent;
}());

var AnonymousConsentManagementBannerComponent = /** @class */ (function () {
    function AnonymousConsentManagementBannerComponent(modalService, anonymousConsentsService) {
        this.modalService = modalService;
        this.anonymousConsentsService = anonymousConsentsService;
        this.subscriptions = new Subscription();
        this.bannerVisible$ = this.anonymousConsentsService.isBannerVisible();
    }
    AnonymousConsentManagementBannerComponent.prototype.viewDetails = function () {
        this.hideBanner();
        this.modalService.open(AnonymousConsentDialogComponent, {
            centered: true,
            size: 'lg',
        });
    };
    AnonymousConsentManagementBannerComponent.prototype.allowAll = function () {
        var _this = this;
        this.subscriptions.add(this.anonymousConsentsService
            .giveAllConsents()
            .pipe(tap(function (_) { return _this.hideBanner(); }))
            .subscribe());
    };
    AnonymousConsentManagementBannerComponent.prototype.hideBanner = function () {
        this.anonymousConsentsService.toggleBannerDismissed(true);
    };
    AnonymousConsentManagementBannerComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    AnonymousConsentManagementBannerComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: AnonymousConsentsService }
    ]; };
    AnonymousConsentManagementBannerComponent = __decorate([
        Component({
            selector: 'cx-anonymous-consent-management-banner',
            template: "<ng-container *ngIf=\"bannerVisible$ | async as bannerVisible\">\n  <div\n    [ngClass]=\"{ 'anonymous-consent-banner-hidden': !bannerVisible }\"\n    class=\"anonymous-consent-banner\"\n  >\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-xs-12\">\n          <div class=\"cx-banner-title\">\n            {{ 'anonymousConsents.banner.title' | cxTranslate }}\n          </div>\n          <div class=\"cx-banner-description\">\n            {{ 'anonymousConsents.banner.description' | cxTranslate }}\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-xs-12 cx-banner-buttons\">\n          <button class=\"btn btn-action\" (click)=\"viewDetails()\">\n            {{ 'anonymousConsents.banner.viewDetails' | cxTranslate }}\n          </button>\n          <button class=\"btn btn-primary\" (click)=\"allowAll()\">\n            {{ 'anonymousConsents.banner.allowAll' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
        })
    ], AnonymousConsentManagementBannerComponent);
    return AnonymousConsentManagementBannerComponent;
}());

var AnonymousConsentOpenDialogComponent = /** @class */ (function () {
    function AnonymousConsentOpenDialogComponent(modalService) {
        this.modalService = modalService;
    }
    AnonymousConsentOpenDialogComponent.prototype.openDialog = function () {
        this.modalService.open(AnonymousConsentDialogComponent, {
            centered: true,
            size: 'lg',
        });
    };
    AnonymousConsentOpenDialogComponent.ctorParameters = function () { return [
        { type: ModalService }
    ]; };
    AnonymousConsentOpenDialogComponent = __decorate([
        Component({
            selector: 'cx-anonymous-consent-open-dialog',
            template: "<div class=\"anonymous-consents\">\n  <button class=\"btn btn-link\" (click)=\"openDialog()\">\n    {{ 'anonymousConsents.preferences' | cxTranslate }}\n  </button>\n</div>\n"
        })
    ], AnonymousConsentOpenDialogComponent);
    return AnonymousConsentOpenDialogComponent;
}());

var AnonymousConsentManagementBannerModule = /** @class */ (function () {
    function AnonymousConsentManagementBannerModule() {
    }
    AnonymousConsentManagementBannerModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                I18nModule,
                FeaturesConfigModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        AnonymousConsentManagementBannerComponent: {
                            component: AnonymousConsentManagementBannerComponent,
                            deferLoading: DeferLoadingStrategy.INSTANT,
                        },
                        AnonymousConsentOpenDialogComponent: {
                            component: AnonymousConsentOpenDialogComponent,
                        },
                    },
                }),
            ],
            declarations: [
                AnonymousConsentManagementBannerComponent,
                AnonymousConsentOpenDialogComponent,
            ],
            exports: [
                AnonymousConsentManagementBannerComponent,
                AnonymousConsentOpenDialogComponent,
            ],
            entryComponents: [
                AnonymousConsentManagementBannerComponent,
                AnonymousConsentOpenDialogComponent,
            ],
        })
    ], AnonymousConsentManagementBannerModule);
    return AnonymousConsentManagementBannerModule;
}());

var CmsComponentData = /** @class */ (function () {
    function CmsComponentData() {
    }
    return CmsComponentData;
}());

var ComponentMapperService = /** @class */ (function () {
    function ComponentMapperService(componentFactoryResolver, config, document, platform) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.config = config;
        this.document = document;
        this.platform = platform;
        this.missingComponents = [];
        this.loadedWebComponents = {};
    }
    /**
     * @desc
     * returns a web component for the CMS typecode.
     *
     * The mapping of CMS components to web componetns requires a mapping.
     * This is configurable when the module is loaded.
     *
     * For example:
     *
     *  {
     *      'CMSLinkComponent': 'LinkComponent',
     *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
     *      [etc.]
     *  }
     *
     * The type codes are dynamic since they depend on the implementation.
     * Customer will add, extend or ingore standard components.
     *
     * @param typeCode the component type
     */
    ComponentMapperService.prototype.getComponent = function (typeCode) {
        var componentConfig = this.config.cmsComponents[typeCode];
        if (!componentConfig) {
            if (!this.missingComponents.includes(typeCode)) {
                this.missingComponents.push(typeCode);
                console.warn("No component implementation found for the CMS component type '" + typeCode + "'.\n", "Make sure you implement a component and register it in the mapper.");
            }
        }
        return componentConfig ? componentConfig.component : null;
    };
    ComponentMapperService.prototype.getComponentFactoryByCode = function (typeCode) {
        var component = this.getComponent(typeCode);
        if (!component) {
            return null;
        }
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        if (!factory) {
            console.warn("No component factory found for the CMS component type '" + typeCode + "'.\n", "Make sure you add a component to the 'entryComponents' array in the NgModule.");
            return null;
        }
        return factory;
    };
    ComponentMapperService.prototype.isWebComponent = function (typeCode) {
        var component = this.getComponent(typeCode);
        return typeof component === 'string' && (component || '').includes('#');
    };
    ComponentMapperService.prototype.initWebComponent = function (componentType, renderer) {
        var _this = this;
        return new Promise(function (resolve) {
            var _a = __read(_this.getComponent(componentType).split('#'), 2), path = _a[0], selector = _a[1];
            var script = _this.loadedWebComponents[path];
            if (!script) {
                if (path) {
                    script = renderer.createElement('script');
                    _this.loadedWebComponents[path] = script;
                    script.setAttribute('src', path);
                    renderer.appendChild(_this.document.body, script);
                    if (isPlatformBrowser(_this.platform)) {
                        script.onload = function () {
                            script.onload = null;
                        };
                    }
                }
                else {
                    script = {};
                }
            }
            if (script.onload) {
                // If script is still loading (has onload callback defined)
                // add new callback and chain it with the existing one.
                // Needed to support loading multiple components from one script
                var chainedOnload_1 = script.onload;
                script.onload = function () {
                    chainedOnload_1();
                    resolve(selector);
                };
            }
            else {
                resolve(selector);
            }
        });
    };
    ComponentMapperService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: CmsConfig },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ComponentMapperService.ɵprov = ɵɵdefineInjectable({ factory: function ComponentMapperService_Factory() { return new ComponentMapperService(ɵɵinject(ComponentFactoryResolver), ɵɵinject(CmsConfig), ɵɵinject(DOCUMENT), ɵɵinject(PLATFORM_ID)); }, token: ComponentMapperService, providedIn: "root" });
    ComponentMapperService = __decorate([
        Injectable({ providedIn: 'root' }),
        __param(2, Inject(DOCUMENT)),
        __param(3, Inject(PLATFORM_ID))
    ], ComponentMapperService);
    return ComponentMapperService;
}());

var CxApiService = /** @class */ (function () {
    function CxApiService(
    // auth
    auth, 
    // cart
    cart, cartData, 
    // checkout
    checkout, checkoutDelivery, checkoutPayment, 
    // cms
    cms, pageMeta, 
    // features config
    featureConfig, 
    // global message
    globalMessage, 
    // i18n
    translation, 
    // kyma
    kyma, 
    // occ
    occEndpoints, 
    // product
    product, productSearch, productReview, productReference, searchbox, 
    // routing
    routing, 
    // site context
    currency, language, baseSite, 
    // user
    user, userAddress, userConsent, userOrder, userPayment, userNotificationPreferenceService, userInterestsService, selectiveCartService, 
    // framework
    ngZone) {
        this.auth = auth;
        this.cart = cart;
        this.cartData = cartData;
        this.checkout = checkout;
        this.checkoutDelivery = checkoutDelivery;
        this.checkoutPayment = checkoutPayment;
        this.cms = cms;
        this.pageMeta = pageMeta;
        this.featureConfig = featureConfig;
        this.globalMessage = globalMessage;
        this.translation = translation;
        this.kyma = kyma;
        this.occEndpoints = occEndpoints;
        this.product = product;
        this.productSearch = productSearch;
        this.productReview = productReview;
        this.productReference = productReference;
        this.searchbox = searchbox;
        this.routing = routing;
        this.currency = currency;
        this.language = language;
        this.baseSite = baseSite;
        this.user = user;
        this.userAddress = userAddress;
        this.userConsent = userConsent;
        this.userOrder = userOrder;
        this.userPayment = userPayment;
        this.userNotificationPreferenceService = userNotificationPreferenceService;
        this.userInterestsService = userInterestsService;
        this.selectiveCartService = selectiveCartService;
        this.ngZone = ngZone;
    }
    CxApiService.ctorParameters = function () { return [
        { type: AuthService, decorators: [{ type: Optional }] },
        { type: CartService, decorators: [{ type: Optional }] },
        { type: CartDataService, decorators: [{ type: Optional }] },
        { type: CheckoutService, decorators: [{ type: Optional }] },
        { type: CheckoutDeliveryService, decorators: [{ type: Optional }] },
        { type: CheckoutPaymentService, decorators: [{ type: Optional }] },
        { type: CmsService, decorators: [{ type: Optional }] },
        { type: PageMetaService, decorators: [{ type: Optional }] },
        { type: FeatureConfigService, decorators: [{ type: Optional }] },
        { type: GlobalMessageService, decorators: [{ type: Optional }] },
        { type: TranslationService, decorators: [{ type: Optional }] },
        { type: KymaService, decorators: [{ type: Optional }] },
        { type: OccEndpointsService, decorators: [{ type: Optional }] },
        { type: ProductService, decorators: [{ type: Optional }] },
        { type: ProductSearchService, decorators: [{ type: Optional }] },
        { type: ProductReviewService, decorators: [{ type: Optional }] },
        { type: ProductReferenceService, decorators: [{ type: Optional }] },
        { type: SearchboxService, decorators: [{ type: Optional }] },
        { type: RoutingService, decorators: [{ type: Optional }] },
        { type: CurrencyService, decorators: [{ type: Optional }] },
        { type: LanguageService, decorators: [{ type: Optional }] },
        { type: BaseSiteService, decorators: [{ type: Optional }] },
        { type: UserService, decorators: [{ type: Optional }] },
        { type: UserAddressService, decorators: [{ type: Optional }] },
        { type: UserConsentService, decorators: [{ type: Optional }] },
        { type: UserOrderService, decorators: [{ type: Optional }] },
        { type: UserPaymentService, decorators: [{ type: Optional }] },
        { type: UserNotificationPreferenceService, decorators: [{ type: Optional }] },
        { type: UserInterestsService, decorators: [{ type: Optional }] },
        { type: SelectiveCartService, decorators: [{ type: Optional }] },
        { type: NgZone }
    ]; };
    CxApiService.ɵprov = ɵɵdefineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(ɵɵinject(AuthService, 8), ɵɵinject(CartService, 8), ɵɵinject(CartDataService, 8), ɵɵinject(CheckoutService, 8), ɵɵinject(CheckoutDeliveryService, 8), ɵɵinject(CheckoutPaymentService, 8), ɵɵinject(CmsService, 8), ɵɵinject(PageMetaService, 8), ɵɵinject(FeatureConfigService, 8), ɵɵinject(GlobalMessageService, 8), ɵɵinject(TranslationService, 8), ɵɵinject(KymaService, 8), ɵɵinject(OccEndpointsService, 8), ɵɵinject(ProductService, 8), ɵɵinject(ProductSearchService, 8), ɵɵinject(ProductReviewService, 8), ɵɵinject(ProductReferenceService, 8), ɵɵinject(SearchboxService, 8), ɵɵinject(RoutingService, 8), ɵɵinject(CurrencyService, 8), ɵɵinject(LanguageService, 8), ɵɵinject(BaseSiteService, 8), ɵɵinject(UserService, 8), ɵɵinject(UserAddressService, 8), ɵɵinject(UserConsentService, 8), ɵɵinject(UserOrderService, 8), ɵɵinject(UserPaymentService, 8), ɵɵinject(UserNotificationPreferenceService, 8), ɵɵinject(UserInterestsService, 8), ɵɵinject(SelectiveCartService, 8), ɵɵinject(NgZone)); }, token: CxApiService, providedIn: "root" });
    CxApiService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(0, Optional()),
        __param(1, Optional()),
        __param(2, Optional()),
        __param(3, Optional()),
        __param(4, Optional()),
        __param(5, Optional()),
        __param(6, Optional()),
        __param(7, Optional()),
        __param(8, Optional()),
        __param(9, Optional()),
        __param(10, Optional()),
        __param(11, Optional()),
        __param(12, Optional()),
        __param(13, Optional()),
        __param(14, Optional()),
        __param(15, Optional()),
        __param(16, Optional()),
        __param(17, Optional()),
        __param(18, Optional()),
        __param(19, Optional()),
        __param(20, Optional()),
        __param(21, Optional()),
        __param(22, Optional()),
        __param(23, Optional()),
        __param(24, Optional()),
        __param(25, Optional()),
        __param(26, Optional()),
        __param(27, Optional()),
        __param(28, Optional()),
        __param(29, Optional())
    ], CxApiService);
    return CxApiService;
}());

var ComponentWrapperDirective = /** @class */ (function () {
    function ComponentWrapperDirective(vcr, componentMapper, injector, cmsService, dynamicAttributeService, renderer, config, platformId) {
        this.vcr = vcr;
        this.componentMapper = componentMapper;
        this.injector = injector;
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.config = config;
        this.platformId = platformId;
    }
    ComponentWrapperDirective.prototype.ngOnInit = function () {
        if (!this.shouldRenderComponent()) {
            return;
        }
        if (this.componentMapper.isWebComponent(this.cxComponentWrapper.flexType)) {
            this.launchWebComponent();
        }
        else {
            this.launchComponent();
        }
    };
    ComponentWrapperDirective.prototype.shouldRenderComponent = function () {
        var isSSR = isPlatformServer(this.platformId);
        var isComponentDisabledInSSR = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {}).disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    };
    ComponentWrapperDirective.prototype.launchComponent = function () {
        var factory = this.componentMapper.getComponentFactoryByCode(this.cxComponentWrapper.flexType);
        if (factory) {
            this.cmpRef = this.vcr.createComponent(factory, undefined, this.getInjectorForComponent());
            if (this.cmsService.isLaunchInSmartEdit()) {
                this.addSmartEditContract(this.cmpRef.location.nativeElement);
            }
        }
    };
    ComponentWrapperDirective.prototype.launchWebComponent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var elementName, cmsComponentData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.componentMapper.initWebComponent(this.cxComponentWrapper.flexType, this.renderer)];
                    case 1:
                        elementName = _a.sent();
                        if (elementName) {
                            this.webElement = this.renderer.createElement(elementName);
                            cmsComponentData = this.getCmsDataForComponent();
                            this.webElement.cxApi = __assign(__assign({}, this.injector.get(CxApiService)), { CmsComponentData: cmsComponentData, // TODO: remove / deprecated since 1.0.x
                                cmsComponentData: cmsComponentData });
                            this.renderer.appendChild(this.vcr.element.nativeElement.parentElement, this.webElement);
                            if (this.cmsService.isLaunchInSmartEdit()) {
                                this.addSmartEditContract(this.webElement);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ComponentWrapperDirective.prototype.getCmsDataForComponent = function () {
        return {
            uid: this.cxComponentWrapper.uid,
            data$: this.cmsService.getComponentData(this.cxComponentWrapper.uid),
        };
    };
    ComponentWrapperDirective.prototype.getInjectorForComponent = function () {
        var configProviders = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {})
            .providers || [];
        return Injector.create({
            providers: __spread([
                {
                    provide: CmsComponentData,
                    useValue: this.getCmsDataForComponent(),
                }
            ], configProviders),
            parent: this.injector,
        });
    };
    ComponentWrapperDirective.prototype.addSmartEditContract = function (element) {
        this.dynamicAttributeService.addDynamicAttributes(this.cxComponentWrapper.properties, element, this.renderer);
    };
    ComponentWrapperDirective.prototype.ngOnDestroy = function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        if (this.webElement) {
            this.webElement.remove();
        }
    };
    ComponentWrapperDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentMapperService },
        { type: Injector },
        { type: CmsService },
        { type: DynamicAttributeService },
        { type: Renderer2 },
        { type: CmsConfig },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    __decorate([
        Input()
    ], ComponentWrapperDirective.prototype, "cxComponentWrapper", void 0);
    ComponentWrapperDirective = __decorate([
        Directive({
            selector: '[cxComponentWrapper]',
        }),
        __param(7, Inject(PLATFORM_ID))
    ], ComponentWrapperDirective);
    return ComponentWrapperDirective;
}());

var PageComponentModule = /** @class */ (function () {
    function PageComponentModule() {
    }
    PageComponentModule = __decorate([
        NgModule({
            imports: [CommonModule],
            providers: [],
            declarations: [ComponentWrapperDirective],
            exports: [ComponentWrapperDirective],
        })
    ], PageComponentModule);
    return PageComponentModule;
}());

/**
 * Please don't put that service in public API.
 * */
var CmsMappingService = /** @class */ (function () {
    function CmsMappingService(config, platformId) {
        this.config = config;
        this.platformId = platformId;
    }
    CmsMappingService.prototype.isComponentEnabled = function (flexType) {
        var isSSR = isPlatformServer(this.platformId);
        var isComponentDisabledInSSR = (this.config.cmsComponents[flexType] || {})
            .disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    };
    CmsMappingService.prototype.getRoutesForComponents = function (componentTypes) {
        var e_1, _a;
        var routes = [];
        try {
            for (var componentTypes_1 = __values(componentTypes), componentTypes_1_1 = componentTypes_1.next(); !componentTypes_1_1.done; componentTypes_1_1 = componentTypes_1.next()) {
                var componentType = componentTypes_1_1.value;
                if (this.isComponentEnabled(componentType)) {
                    routes.push.apply(routes, __spread(this.getRoutesForComponent(componentType)));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (componentTypes_1_1 && !componentTypes_1_1.done && (_a = componentTypes_1.return)) _a.call(componentTypes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return routes;
    };
    CmsMappingService.prototype.getGuardsForComponents = function (componentTypes) {
        var e_2, _a;
        var guards = new Set();
        try {
            for (var componentTypes_2 = __values(componentTypes), componentTypes_2_1 = componentTypes_2.next(); !componentTypes_2_1.done; componentTypes_2_1 = componentTypes_2.next()) {
                var componentType = componentTypes_2_1.value;
                this.getGuardsForComponent(componentType).forEach(function (guard) {
                    return guards.add(guard);
                });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (componentTypes_2_1 && !componentTypes_2_1.done && (_a = componentTypes_2.return)) _a.call(componentTypes_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return Array.from(guards);
    };
    CmsMappingService.prototype.getI18nKeysForComponents = function (componentTypes) {
        var e_3, _a;
        var i18nKeys = new Set();
        try {
            for (var componentTypes_3 = __values(componentTypes), componentTypes_3_1 = componentTypes_3.next(); !componentTypes_3_1.done; componentTypes_3_1 = componentTypes_3.next()) {
                var componentType = componentTypes_3_1.value;
                if (this.isComponentEnabled(componentType)) {
                    this.getI18nKeysForComponent(componentType).forEach(function (key) {
                        return i18nKeys.add(key);
                    });
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (componentTypes_3_1 && !componentTypes_3_1.done && (_a = componentTypes_3.return)) _a.call(componentTypes_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return Array.from(i18nKeys);
    };
    CmsMappingService.prototype.getRoutesForComponent = function (componentType) {
        var mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.childRoutes) || [];
    };
    CmsMappingService.prototype.getGuardsForComponent = function (componentType) {
        var mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.guards) || [];
    };
    CmsMappingService.prototype.getI18nKeysForComponent = function (componentType) {
        var mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.i18nKeys) || [];
    };
    CmsMappingService.ctorParameters = function () { return [
        { type: CmsConfig },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    CmsMappingService.ɵprov = ɵɵdefineInjectable({ factory: function CmsMappingService_Factory() { return new CmsMappingService(ɵɵinject(CmsConfig), ɵɵinject(PLATFORM_ID)); }, token: CmsMappingService, providedIn: "root" });
    CmsMappingService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(1, Inject(PLATFORM_ID))
    ], CmsMappingService);
    return CmsMappingService;
}());

/**
 * Please don't put that service in public API.
 * */
var CmsGuardsService = /** @class */ (function () {
    function CmsGuardsService(cmsMapping, injector) {
        this.cmsMapping = cmsMapping;
        this.injector = injector;
    }
    CmsGuardsService.prototype.cmsPageCanActivate = function (componentTypes, route, state) {
        var _this = this;
        var guards = this.cmsMapping.getGuardsForComponents(componentTypes);
        if (guards.length) {
            var canActivateObservables = guards.map(function (guardClass) {
                var guard = _this.injector.get(guardClass, null);
                if (isCanActivate(guard)) {
                    return wrapIntoObservable(guard.canActivate(route, state)).pipe(first());
                }
                else {
                    throw new Error('Invalid CanActivate guard in cmsMapping');
                }
            });
            return concat.apply(void 0, __spread(canActivateObservables)).pipe(skipWhile(function (canActivate) { return canActivate === true; }), endWith(true), first());
        }
        else {
            return of(true);
        }
    };
    CmsGuardsService.ctorParameters = function () { return [
        { type: CmsMappingService },
        { type: Injector }
    ]; };
    CmsGuardsService.ɵprov = ɵɵdefineInjectable({ factory: function CmsGuardsService_Factory() { return new CmsGuardsService(ɵɵinject(CmsMappingService), ɵɵinject(INJECTOR)); }, token: CmsGuardsService, providedIn: "root" });
    CmsGuardsService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CmsGuardsService);
    return CmsGuardsService;
}());
function wrapIntoObservable(value) {
    if (isObservable(value)) {
        return value;
    }
    if (isPromise(value)) {
        return from(Promise.resolve(value));
    }
    return of(value);
}
function isPromise(obj) {
    return !!obj && typeof obj.then === 'function';
}
function isCanActivate(guard) {
    return guard && isFunction(guard.canActivate);
}
function isFunction(v) {
    return typeof v === 'function';
}

/**
 * Please don't put that service in public API.
 * */
var CmsI18nService = /** @class */ (function () {
    function CmsI18nService(cmsMapping, translation, translationChunk) {
        this.cmsMapping = cmsMapping;
        this.translation = translation;
        this.translationChunk = translationChunk;
    }
    CmsI18nService.prototype.loadChunksForComponents = function (componentTypes) {
        var e_1, _a;
        var i18nKeys = this.cmsMapping.getI18nKeysForComponents(componentTypes);
        var i18nChunks = new Set();
        try {
            for (var i18nKeys_1 = __values(i18nKeys), i18nKeys_1_1 = i18nKeys_1.next(); !i18nKeys_1_1.done; i18nKeys_1_1 = i18nKeys_1.next()) {
                var key = i18nKeys_1_1.value;
                i18nChunks.add(this.translationChunk.getChunkNameForKey(key));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (i18nKeys_1_1 && !i18nKeys_1_1.done && (_a = i18nKeys_1.return)) _a.call(i18nKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.translation.loadChunks(Array.from(i18nChunks));
    };
    CmsI18nService.ctorParameters = function () { return [
        { type: CmsMappingService },
        { type: TranslationService },
        { type: TranslationChunkService }
    ]; };
    CmsI18nService.ɵprov = ɵɵdefineInjectable({ factory: function CmsI18nService_Factory() { return new CmsI18nService(ɵɵinject(CmsMappingService), ɵɵinject(TranslationService), ɵɵinject(TranslationChunkService)); }, token: CmsI18nService, providedIn: "root" });
    CmsI18nService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CmsI18nService);
    return CmsI18nService;
}());

var BREAKPOINT;
(function (BREAKPOINT) {
    BREAKPOINT["xs"] = "xs";
    BREAKPOINT["sm"] = "sm";
    BREAKPOINT["md"] = "md";
    BREAKPOINT["lg"] = "lg";
    BREAKPOINT["xl"] = "xl";
})(BREAKPOINT || (BREAKPOINT = {}));
/**
 * The LayoutConfig supports the configuration of page slots by page templates
 * or page sections, such as headers and footers. The configuration also supports
 * adaptive design per breadpoint (not per device type), so that the DOM is (re)rendered
 * por a given breakpoint.
 */
var LayoutConfig = /** @class */ (function () {
    function LayoutConfig() {
    }
    return LayoutConfig;
}());

var _a;
var DEFAULT_BREAKPOINTS = (_a = {},
    _a[BREAKPOINT.xs] = 576,
    _a[BREAKPOINT.sm] = 768,
    _a[BREAKPOINT.md] = 992,
    _a[BREAKPOINT.lg] = 1200,
    _a);
var BreakpointService = /** @class */ (function () {
    function BreakpointService(winRef, config) {
        this.winRef = winRef;
        this.config = config;
    }
    BreakpointService.prototype.getSize = function (breakpoint) {
        return this.config.breakpoints
            ? this.config.breakpoints[breakpoint]
            : DEFAULT_BREAKPOINTS[breakpoint];
    };
    Object.defineProperty(BreakpointService.prototype, "breakpoint$", {
        get: function () {
            var _this = this;
            if (!this.window) {
                return of(BREAKPOINT.xs);
            }
            return fromEvent(this.window, 'resize').pipe(debounceTime(300), startWith({ target: this.window }), map(function (event) { return _this.getBreakpoint(event.target.innerWidth); }), distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakpointService.prototype, "breakpoints", {
        get: function () {
            return [
                BREAKPOINT.xs,
                BREAKPOINT.sm,
                BREAKPOINT.md,
                BREAKPOINT.lg,
                BREAKPOINT.xl,
            ];
        },
        enumerable: true,
        configurable: true
    });
    BreakpointService.prototype.getBreakpoint = function (windowWidth) {
        var breakpoint = this.getClosest(windowWidth);
        return BREAKPOINT[breakpoint || BREAKPOINT.lg];
    };
    BreakpointService.prototype.getClosest = function (windowWidth) {
        var _this = this;
        if (!windowWidth) {
            windowWidth = this.window.innerWidth;
        }
        return windowWidth < this.getSize(BREAKPOINT.xs)
            ? BREAKPOINT.xs
            : this.breakpoints.reverse().find(function (br) { return windowWidth >= _this.getSize(br); });
    };
    Object.defineProperty(BreakpointService.prototype, "window", {
        get: function () {
            return this.winRef.nativeWindow;
        },
        enumerable: true,
        configurable: true
    });
    BreakpointService.ctorParameters = function () { return [
        { type: WindowRef },
        { type: LayoutConfig }
    ]; };
    BreakpointService.ɵprov = ɵɵdefineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(ɵɵinject(WindowRef), ɵɵinject(LayoutConfig)); }, token: BreakpointService, providedIn: "root" });
    BreakpointService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], BreakpointService);
    return BreakpointService;
}());

var PAGE_LAYOUT_HANDLER = new InjectionToken('PageLayoutHandler');

var PageLayoutService = /** @class */ (function () {
    function PageLayoutService(cms, config, breakpointService, handlers) {
        this.cms = cms;
        this.config = config;
        this.breakpointService = breakpointService;
        this.handlers = handlers;
        // Prints warn messages for missing layout configs.
        // The warnings are only printed once per config
        // to not pollute the console log.
        this.warnLogMessages = {};
        this.logSlots = {};
    }
    PageLayoutService.prototype.getSlots = function (section) {
        var _this = this;
        return combineLatest([this.page$, this.breakpointService.breakpoint$]).pipe(map(function (_a) {
            var _b = __read(_a, 2), page = _b[0], breakpoint = _b[1];
            var pageTemplate = page.template;
            var slots = _this.resolveSlots(page, section, breakpoint);
            return { slots: slots, pageTemplate: pageTemplate, breakpoint: breakpoint };
        }), switchMap(function (_a) {
            var e_1, _b;
            var slots = _a.slots, pageTemplate = _a.pageTemplate, breakpoint = _a.breakpoint;
            var result = of(slots);
            try {
                for (var _c = __values(_this.handlers || []), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var handler = _d.value;
                    result = handler.handle(result, pageTemplate, section, breakpoint);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return result;
        }), distinctUntilChanged(function (a, b) {
            if (a.length !== b.length) {
                return false;
            }
            for (var i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) {
                    return false;
                }
            }
            return true;
        }));
    };
    /**
     * Returns an observable with the last page slot above-the-fold
     * for the given pageTemplate / breakpoint.
     *
     * The page fold is configurable in the `LayoutConfig` for each page layout.
     */
    PageLayoutService.prototype.getPageFoldSlot = function (pageTemplate) {
        var _this = this;
        return this.breakpointService.breakpoint$.pipe(map(function (breakpoint) {
            if (!_this.config.layoutSlots) {
                // no layout config available
                return null;
            }
            var pageTemplateConfig = _this.config.layoutSlots[pageTemplate];
            var config = _this.getResponsiveSlotConfig(pageTemplateConfig, 'pageFold', breakpoint);
            return config ? config.pageFold : null;
        }));
    };
    PageLayoutService.prototype.resolveSlots = function (page, section, breakpoint) {
        var config = this.getSlotConfig(page.template, 'slots', section, breakpoint);
        if (config && config.slots) {
            var pageSlots_1 = Object.keys(page.slots);
            return config.slots.filter(function (slot) { return pageSlots_1.includes(slot); });
        }
        else if (!section) {
            this.logMissingLayoutConfig(page);
            return Object.keys(page.slots);
        }
        else {
            this.logMissingLayoutConfig(page, section);
            return [];
        }
    };
    Object.defineProperty(PageLayoutService.prototype, "page$", {
        get: function () {
            return this.cms.getCurrentPage().pipe(filter(function (page) { return !!page; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageLayoutService.prototype, "templateName$", {
        get: function () {
            return this.page$.pipe(filter(function (page) { return !!page.template; }), map(function (page) { return page.template; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * load slots from the layout configuration. The breakpoint is used
     * to load a specific configuration for the given breakpoint. If there's
     * no configuration available for the given breakpoint the default slot
     * configuration is returned.
     */
    PageLayoutService.prototype.getSlotConfig = function (templateUid, configAttribute, section, breakpoint) {
        if (!this.config.layoutSlots) {
            return null;
        }
        var pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (section) {
            return this.getSlotConfigForSection(templateUid, configAttribute, section, breakpoint);
        }
        if (pageTemplateConfig) {
            return this.getResponsiveSlotConfig(pageTemplateConfig, configAttribute, breakpoint);
        }
    };
    PageLayoutService.prototype.getSlotConfigForSection = function (templateUid, configAttribute, section, breakpoint) {
        var pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (!pageTemplateConfig) {
            return null;
        }
        // if there's no section config on the page layout
        // we fall back to the global section config
        var sectionConfig = pageTemplateConfig[section]
            ? pageTemplateConfig[section]
            : this.config.layoutSlots[section];
        if (!sectionConfig) {
            return null;
        }
        var responsiveConfig = this.getResponsiveSlotConfig(sectionConfig, configAttribute, breakpoint);
        if (responsiveConfig.hasOwnProperty(configAttribute)) {
            return responsiveConfig;
        }
        else if (pageTemplateConfig[section].hasOwnProperty(configAttribute)) {
            return pageTemplateConfig[section];
        }
        else if (this.config.layoutSlots[section]) {
            return this.config.layoutSlots[section];
        }
    };
    /**
     * Returns a list of slots for a breakpoint specific configuratoin
     * If there's no specific configuration for the breakpoint,
     * the closest available configuration will be returned.
     */
    PageLayoutService.prototype.getResponsiveSlotConfig = function (layoutSlotConfig, configAttribute, breakpoint) {
        var e_2, _a;
        var slotConfig = layoutSlotConfig;
        // fallback to default slot config
        if (!layoutSlotConfig || !breakpoint) {
            return slotConfig;
        }
        // we have a config for the specific breakpoint
        if (layoutSlotConfig[breakpoint] &&
            layoutSlotConfig[breakpoint].hasOwnProperty(configAttribute)) {
            return layoutSlotConfig[breakpoint];
        }
        // find closest config
        var all = this.breakpointService.breakpoints;
        try {
            for (var _b = __values(all.splice(0, all.indexOf(breakpoint))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var br = _c.value;
                if (layoutSlotConfig[br] &&
                    layoutSlotConfig[br].hasOwnProperty(configAttribute)) {
                    slotConfig = layoutSlotConfig[br];
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return slotConfig;
    };
    /**
     * In order to help developers, we print some detailed log information in
     * case there's no layout configuration available for the given page template
     * or section. Additionally, the slot positions are printed in the console
     * in a format that can be copied / paste to the configuration.
     */
    PageLayoutService.prototype.logMissingLayoutConfig = function (page, section) {
        if (!isDevMode()) {
            return;
        }
        if (!this.logSlots[page.template]) {
            // the info log is not printed in production
            // tslint:disable-next-line: no-console
            console.info("Available CMS page slots: '" + Object.keys(page.slots).join("','") + "'");
            this.logSlots[page.template] = true;
        }
        var cacheKey = section || page.template;
        if (!this.warnLogMessages[cacheKey]) {
            console.warn("No layout config found for " + cacheKey + ", you can configure a 'LayoutConfig' to control the rendering of page slots.");
            this.warnLogMessages[cacheKey] = true;
        }
    };
    PageLayoutService.ctorParameters = function () { return [
        { type: CmsService },
        { type: LayoutConfig },
        { type: BreakpointService },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [PAGE_LAYOUT_HANDLER,] }] }
    ]; };
    PageLayoutService = __decorate([
        Injectable(),
        __param(3, Optional()),
        __param(3, Inject(PAGE_LAYOUT_HANDLER))
    ], PageLayoutService);
    return PageLayoutService;
}());

var PageLayoutComponent = /** @class */ (function () {
    function PageLayoutComponent(el, renderer, pageLayoutService) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.pageLayoutService = pageLayoutService;
        this.section$ = new BehaviorSubject(undefined);
        this.templateName$ = this.pageLayoutService
            .templateName$;
        this.layoutName$ = this.section$.pipe(switchMap(function (section) { return (section ? of(section) : _this.templateName$); }), tap(function (name) {
            _this.styleClass = name;
        }));
        this.slots$ = this.section$.pipe(switchMap(function (section) { return _this.pageLayoutService.getSlots(section); }));
        this.pageFoldSlot$ = this.templateName$.pipe(switchMap(function (templateName) {
            return _this.pageLayoutService.getPageFoldSlot(templateName);
        }), distinctUntilChanged());
    }
    Object.defineProperty(PageLayoutComponent.prototype, "section", {
        set: function (value) {
            this.section$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageLayoutComponent.prototype, "styleClass", {
        set: function (cls) {
            if (this.currentClass) {
                this.renderer.removeClass(this.el.nativeElement, this.currentClass);
            }
            this.renderer.addClass(this.el.nativeElement, cls);
            this.currentClass = cls;
        },
        enumerable: true,
        configurable: true
    });
    PageLayoutComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: PageLayoutService }
    ]; };
    __decorate([
        Input()
    ], PageLayoutComponent.prototype, "section", null);
    PageLayoutComponent = __decorate([
        Component({
            selector: 'cx-page-layout',
            template: "<ng-template\n  [cxOutlet]=\"layoutName$ | async\"\n  [cxOutletContext]=\"{\n    templateName$: templateName$,\n    slots$: slots$,\n    section$: section$\n  }\"\n>\n  <ng-content></ng-content>\n\n  <cx-page-slot\n    *ngFor=\"let slot of slots$ | async\"\n    [position]=\"slot\"\n    [isPageFold]=\"slot === (pageFoldSlot$ | async)\"\n  ></cx-page-slot>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PageLayoutComponent);
    return PageLayoutComponent;
}());

/**
 * Please don't put that service in public API.
 * */
var CmsRoutesService = /** @class */ (function () {
    function CmsRoutesService(router, cmsMapping) {
        this.router = router;
        this.cmsMapping = cmsMapping;
    }
    CmsRoutesService.prototype.cmsRouteExist = function (url) {
        var isCmsDrivenRoute = url.startsWith('/');
        if (!isCmsDrivenRoute) {
            return false;
        }
        var routePath = url.substr(1);
        return (isCmsDrivenRoute &&
            !!this.router.config.find(function (route) {
                return route.data && route.data.cxCmsRouteContext && route.path === routePath;
            }));
    };
    /**
     * Contains Cms driven routing logic intended for use use in guards, especially in canActivate method.
     *
     * Will return true, when logic wont have to modify routing (so canActivate could be easily resolved to true)
     * or will return false, when routing configuration was updated and redirection to newly generated route was initiated.
     *
     * @param pageContext
     * @param currentUrl
     */
    CmsRoutesService.prototype.handleCmsRoutesInGuard = function (pageContext, componentTypes, currentUrl, currentPageLabel) {
        var componentRoutes = this.cmsMapping.getRoutesForComponents(componentTypes);
        if (componentRoutes.length) {
            if (this.updateRouting(pageContext, currentPageLabel, componentRoutes)) {
                this.router.navigateByUrl(currentUrl);
                return false;
            }
        }
        return true;
    };
    CmsRoutesService.prototype.updateRouting = function (pageContext, pageLabel, routes) {
        if (pageContext.type === PageType.CONTENT_PAGE &&
            pageLabel.startsWith('/') &&
            pageLabel.length > 1) {
            var newRoute = {
                path: pageLabel.substr(1),
                component: PageLayoutComponent,
                children: routes,
                data: {
                    cxCmsRouteContext: {
                        type: pageContext.type,
                        id: pageLabel,
                    },
                },
            };
            this.router.resetConfig(__spread([newRoute], this.router.config));
            return true;
        }
        return false;
    };
    CmsRoutesService.ctorParameters = function () { return [
        { type: Router },
        { type: CmsMappingService }
    ]; };
    CmsRoutesService.ɵprov = ɵɵdefineInjectable({ factory: function CmsRoutesService_Factory() { return new CmsRoutesService(ɵɵinject(Router), ɵɵinject(CmsMappingService)); }, token: CmsRoutesService, providedIn: "root" });
    CmsRoutesService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CmsRoutesService);
    return CmsRoutesService;
}());

var CmsPageGuard = /** @class */ (function () {
    function CmsPageGuard(
    // expose as `protected` only services from public API:
    routingService, cmsService, cmsRoutes, cmsI18n, cmsGuards, semanticPathService, protectedRoutesGuard) {
        this.routingService = routingService;
        this.cmsService = cmsService;
        this.cmsRoutes = cmsRoutes;
        this.cmsI18n = cmsI18n;
        this.cmsGuards = cmsGuards;
        this.semanticPathService = semanticPathService;
        this.protectedRoutesGuard = protectedRoutesGuard;
    }
    CmsPageGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        /**
         * TODO(issue:4646) Expect that `ProtectedRoutesGuard` dependency is required (remove `if` logic)
         */
        return this.protectedRoutesGuard
            ? this.protectedRoutesGuard
                .canActivate(route)
                .pipe(switchMap(function (result) {
                return result ? _this.getCmsPage(route, state) : of(result);
            }))
            : this.getCmsPage(route, state);
    };
    CmsPageGuard.prototype.getCmsPage = function (route, state) {
        var _this = this;
        return this.routingService.getNextPageContext().pipe(switchMap(function (pageContext) {
            return _this.cmsService
                .getPage(pageContext, true)
                .pipe(first(), withLatestFrom(of(pageContext)));
        }), switchMap(function (_a) {
            var _b = __read(_a, 2), pageData = _b[0], pageContext = _b[1];
            return pageData
                ? _this.resolveCmsPageLogic(pageContext, pageData, route, state)
                : _this.handleNotFoundPage(pageContext, route, state);
        }));
    };
    CmsPageGuard.prototype.resolveCmsPageLogic = function (pageContext, pageData, route, state) {
        var _this = this;
        return this.cmsService.getPageComponentTypes(pageContext).pipe(take(1), switchMap(function (componentTypes) {
            return _this.cmsGuards
                .cmsPageCanActivate(componentTypes, route, state)
                .pipe(withLatestFrom(of(componentTypes)));
        }), tap(function (_a) {
            var _b = __read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
            if (canActivate === true) {
                _this.cmsI18n.loadChunksForComponents(componentTypes);
            }
        }), map(function (_a) {
            var _b = __read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
            var pageLabel = pageData.label || pageContext.id; // for content pages the page label returned from backend can be different than ID initially assumed from route
            if (canActivate === true &&
                !route.data.cxCmsRouteContext &&
                !_this.cmsRoutes.cmsRouteExist(pageLabel)) {
                return _this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url, pageLabel);
            }
            return canActivate;
        }));
    };
    CmsPageGuard.prototype.handleNotFoundPage = function (pageContext, route, state) {
        var _this = this;
        var notFoundCmsPageContext = {
            type: PageType.CONTENT_PAGE,
            id: this.semanticPathService.get('notFound'),
        };
        return this.cmsService.getPage(notFoundCmsPageContext).pipe(switchMap(function (notFoundPage) {
            if (notFoundPage) {
                return _this.cmsService.getPageIndex(notFoundCmsPageContext).pipe(tap(function (notFoundIndex) {
                    _this.cmsService.setPageFailIndex(pageContext, notFoundIndex);
                }), switchMap(function (notFoundIndex) {
                    return _this.cmsService.getPageIndex(pageContext).pipe(
                    // we have to wait for page index update
                    filter(function (index) { return index === notFoundIndex; }));
                }), switchMap(function () {
                    return _this.resolveCmsPageLogic(pageContext, notFoundPage, route, state);
                }));
            }
            return of(false);
        }));
    };
    CmsPageGuard.guardName = 'CmsPageGuard';
    CmsPageGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: CmsService },
        { type: CmsRoutesService },
        { type: CmsI18nService },
        { type: CmsGuardsService },
        { type: SemanticPathService },
        { type: ProtectedRoutesGuard }
    ]; };
    CmsPageGuard.ɵprov = ɵɵdefineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(ɵɵinject(RoutingService), ɵɵinject(CmsService), ɵɵinject(CmsRoutesService), ɵɵinject(CmsI18nService), ɵɵinject(CmsGuardsService), ɵɵinject(SemanticPathService), ɵɵinject(ProtectedRoutesGuard)); }, token: CmsPageGuard, providedIn: "root" });
    CmsPageGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CmsPageGuard);
    return CmsPageGuard;
}());

var OutletPosition;
(function (OutletPosition) {
    OutletPosition["REPLACE"] = "replace";
    OutletPosition["BEFORE"] = "before";
    OutletPosition["AFTER"] = "after";
})(OutletPosition || (OutletPosition = {}));
var AVOID_STACKED_OUTLETS = false;
var USE_STACKED_OUTLETS = true;

var OutletService = /** @class */ (function () {
    function OutletService() {
        this.templatesRefs = new Map();
        this.templatesRefsBefore = new Map();
        this.templatesRefsAfter = new Map();
    }
    /**
     * @param templateOrFactory A `ComponentFactory` that inserts a component dynamically.
     */
    OutletService.prototype.add = function (outlet, templateOrFactory, position) {
        if (position === void 0) { position = OutletPosition.REPLACE; }
        if (position === OutletPosition.BEFORE) {
            this.store(this.templatesRefsBefore, outlet, templateOrFactory);
        }
        if (position === OutletPosition.REPLACE) {
            this.store(this.templatesRefs, outlet, templateOrFactory);
        }
        if (position === OutletPosition.AFTER) {
            this.store(this.templatesRefsAfter, outlet, templateOrFactory);
        }
    };
    /**
     *
     * Returns a single object or multiple objects for the given outlet reference,
     * depending on the `stacked` argument.
     *
     * @param outlet The outlet reference
     * @param position the outlet position, `OutletPosition.before`, `OutletPosition.AFTER` or `OutletPosition.REPLACE`
     * @param stacked Indicates whether an array of outlet components is returned
     */
    OutletService.prototype.get = function (outlet, position, stacked) {
        if (position === void 0) { position = OutletPosition.REPLACE; }
        if (stacked === void 0) { stacked = AVOID_STACKED_OUTLETS; }
        var templateRef;
        switch (position) {
            case OutletPosition.BEFORE:
                templateRef = this.templatesRefsBefore.get(outlet);
                break;
            case OutletPosition.AFTER:
                templateRef = this.templatesRefsAfter.get(outlet);
                break;
            default:
                templateRef = this.templatesRefs.get(outlet);
        }
        if (templateRef && !stacked) {
            return templateRef[0];
        }
        return templateRef;
    };
    OutletService.prototype.store = function (store, outlet, value) {
        var existing = store.get(outlet) || [];
        var newValue = existing.concat([value]);
        store.set(outlet, newValue);
    };
    OutletService.ɵprov = ɵɵdefineInjectable({ factory: function OutletService_Factory() { return new OutletService(); }, token: OutletService, providedIn: "root" });
    OutletService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OutletService);
    return OutletService;
}());

var OutletRefDirective = /** @class */ (function () {
    function OutletRefDirective(tpl, outletService) {
        this.tpl = tpl;
        this.outletService = outletService;
    }
    OutletRefDirective.prototype.ngOnInit = function () {
        this.outletService.add(this.cxOutletRef, this.tpl, this.cxOutletPos);
    };
    OutletRefDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: OutletService }
    ]; };
    __decorate([
        Input()
    ], OutletRefDirective.prototype, "cxOutletRef", void 0);
    __decorate([
        Input()
    ], OutletRefDirective.prototype, "cxOutletPos", void 0);
    OutletRefDirective = __decorate([
        Directive({
            selector: '[cxOutletRef]',
        })
    ], OutletRefDirective);
    return OutletRefDirective;
}());

var OutletRefModule = /** @class */ (function () {
    function OutletRefModule() {
    }
    OutletRefModule = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [OutletRefDirective],
            exports: [OutletRefDirective],
        })
    ], OutletRefModule);
    return OutletRefModule;
}());

/**
 * The IntersectionService uses the native IntersectionObserver (v2), which
 * can be used to implement pre-loading and deferred loading of DOM content.
 *
 */
var IntersectionService = /** @class */ (function () {
    function IntersectionService(config) {
        this.config = config;
    }
    /**
     * Returns an Observable that emits only once a boolean value whenever
     * the given element has shown in the view port.
     *
     * The returned obervable will only emit the first value. The
     * observable must be cleaned up either way, since the value might never emit; it
     *  depends on whether the element appears in the view port.
     */
    IntersectionService.prototype.isIntersected = function (element, options) {
        return this.intersects(element, options).pipe(first(function (v) { return v === true; }));
    };
    /**
     * Indicates whenever the element intersects the view port. An optional margin
     * is used to intersects before the element shows up in the viewport.
     * A value is emitted each time the element intersects.
     *
     * This is private for now, but could be exposed as a public API
     * to introduce additional (css) render effects to the UI.
     */
    IntersectionService.prototype.intersects = function (element, options) {
        var _this = this;
        var elementVisible$ = new Observable(function (observer) {
            var rootMargin = _this.getRootMargin(options);
            var intersectOptions = { rootMargin: rootMargin };
            var intersectionObserver = new IntersectionObserver(function (entries) {
                observer.next(entries);
            }, intersectOptions);
            intersectionObserver.observe(element);
            return function () {
                intersectionObserver.disconnect();
            };
        }).pipe(flatMap(function (entries) { return entries; }), map(function (entry) { return entry.isIntersecting; }), distinctUntilChanged());
        return elementVisible$;
    };
    IntersectionService.prototype.getRootMargin = function (options) {
        if (options.rootMargin) {
            return options.rootMargin;
        }
        var layoutConfig = this.config;
        if (layoutConfig.deferredLoading &&
            layoutConfig.deferredLoading.intersectionMargin) {
            return layoutConfig.deferredLoading.intersectionMargin;
        }
    };
    IntersectionService.ctorParameters = function () { return [
        { type: LayoutConfig }
    ]; };
    IntersectionService.ɵprov = ɵɵdefineInjectable({ factory: function IntersectionService_Factory() { return new IntersectionService(ɵɵinject(LayoutConfig)); }, token: IntersectionService, providedIn: "root" });
    IntersectionService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], IntersectionService);
    return IntersectionService;
}());

/**
 * The defer loading serivce is used to defer loading of DOM elements
 * until the elements are required for the user experience.
 */
var DeferLoaderService = /** @class */ (function () {
    function DeferLoaderService(platformId, config, intersectionService) {
        this.platformId = platformId;
        this.config = config;
        this.intersectionService = intersectionService;
        this.globalLoadStrategy = config.deferredLoading
            ? config.deferredLoading.strategy
            : DeferLoadingStrategy.INSTANT;
    }
    /**
     * Defer loading till the element intersects the viewport.
     *
     * We evalutes whether we instantly load the element for different reasons:
     * - we run in SSR mode
     * - there's no global strategy given
     * - the global loading strategy is set to INSTANT loading,
     *   and the loading strategy in the given is not set to DEFER
     * - the loading strategy in the given options is set to INSTANT
     */
    DeferLoaderService.prototype.load = function (element, options) {
        if (this.shouldLoadInstantly((options || {}).deferLoading)) {
            return of(true);
        }
        else {
            return this.intersectionService.isIntersected(element, options);
        }
    };
    DeferLoaderService.prototype.shouldLoadInstantly = function (elementLoadingStrategy) {
        return (isPlatformServer(this.platformId) ||
            elementLoadingStrategy === DeferLoadingStrategy.INSTANT ||
            (elementLoadingStrategy !== DeferLoadingStrategy.DEFER &&
                this.globalLoadStrategy === DeferLoadingStrategy.INSTANT));
    };
    DeferLoaderService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: LayoutConfig },
        { type: IntersectionService }
    ]; };
    DeferLoaderService.ɵprov = ɵɵdefineInjectable({ factory: function DeferLoaderService_Factory() { return new DeferLoaderService(ɵɵinject(PLATFORM_ID), ɵɵinject(LayoutConfig), ɵɵinject(IntersectionService)); }, token: DeferLoaderService, providedIn: "root" });
    DeferLoaderService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(0, Inject(PLATFORM_ID))
    ], DeferLoaderService);
    return DeferLoaderService;
}());

var OutletDirective = /** @class */ (function () {
    function OutletDirective(vcr, templateRef, outletService, deferLoaderService) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.outletService = outletService;
        this.deferLoaderService = deferLoaderService;
        this.loaded = new EventEmitter(true);
        this.subscription = new Subscription();
    }
    OutletDirective.prototype.initializeOutlet = function () {
        this.vcr.clear();
        this.subscription.unsubscribe();
        this.subscription = new Subscription();
        if (this.cxOutletDefer) {
            this.deferLoading();
        }
        else {
            this.render();
        }
    };
    OutletDirective.prototype.ngOnChanges = function (changes) {
        if (changes.cxOutlet) {
            this.initializeOutlet();
        }
    };
    OutletDirective.prototype.deferLoading = function () {
        var _this = this;
        this.loaded.emit(false);
        var hostElement = this.getHostElement(this.vcr.element.nativeElement);
        // Although the deferLoaderService might emit only once, as long as the hostElement
        // isn't being loaded, there's no value being emitted. Therefor we need to clean up
        // the subscription on destroy.
        this.subscription.add(this.deferLoaderService
            .load(hostElement, this.cxOutletDefer)
            .subscribe(function () {
            _this.render();
            _this.loaded.emit(true);
        }));
    };
    OutletDirective.prototype.render = function () {
        this.renderOutlet(OutletPosition.BEFORE);
        this.renderOutlet(OutletPosition.REPLACE);
        this.renderOutlet(OutletPosition.AFTER);
    };
    OutletDirective.prototype.renderOutlet = function (position) {
        var _this = this;
        var templates = (this.outletService.get(this.cxOutlet, position, USE_STACKED_OUTLETS));
        if (!templates && position === OutletPosition.REPLACE) {
            templates = [this.templateRef];
        }
        // Just in case someone extended the `OutletService` and
        // returns a singular object.
        if (!Array.isArray(templates)) {
            templates = [templates];
        }
        templates.forEach(function (obj) {
            _this.create(obj);
        });
    };
    OutletDirective.prototype.create = function (tmplOrFactory) {
        if (tmplOrFactory instanceof ComponentFactory) {
            this.vcr.createComponent(tmplOrFactory);
        }
        else if (tmplOrFactory instanceof TemplateRef) {
            var view = this.vcr.createEmbeddedView(tmplOrFactory, {
                $implicit: this.cxOutletContext,
            });
            // we do not know if content is created dynamically or not
            // so we apply change detection anyway
            view.markForCheck();
        }
    };
    /**
     * Returns the closest `HtmlElement`, by iterating over the
     * parent elements of the given element.
     *
     * @param element
     */
    OutletDirective.prototype.getHostElement = function (element) {
        if (element instanceof HTMLElement) {
            return element;
        }
        return this.getHostElement(element.parentElement);
    };
    OutletDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    OutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef },
        { type: OutletService },
        { type: DeferLoaderService }
    ]; };
    __decorate([
        Input()
    ], OutletDirective.prototype, "cxOutlet", void 0);
    __decorate([
        Input()
    ], OutletDirective.prototype, "cxOutletContext", void 0);
    __decorate([
        Input()
    ], OutletDirective.prototype, "cxOutletDefer", void 0);
    __decorate([
        Output()
    ], OutletDirective.prototype, "loaded", void 0);
    OutletDirective = __decorate([
        Directive({
            selector: '[cxOutlet]',
        })
    ], OutletDirective);
    return OutletDirective;
}());

var OutletModule = /** @class */ (function () {
    function OutletModule() {
    }
    OutletModule = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [OutletDirective],
            providers: [OutletService],
            exports: [OutletDirective],
        })
    ], OutletModule);
    return OutletModule;
}());

var PageSlotComponent = /** @class */ (function () {
    function PageSlotComponent(cmsService, dynamicAttributeService, renderer, hostElement, config) {
        var _this = this;
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.config = config;
        this.isPending = true;
        this.hasComponents = false;
        this.isPageFold = false;
        this.position$ = new BehaviorSubject(undefined);
        /**
         * observable with `ContentSlotData` for the current position
         *
         * @deprecated we'll stop supporting this property in 2.0 as
         * it is not used separately.
         */
        this.slot$ = this.position$.pipe(switchMap(function (position) { return _this.cmsService.getContentSlot(position); }), tap(function (slot) { return _this.addSmartEditSlotClass(slot); }));
        this.components$ = this.slot$.pipe(map(function (slot) { return (slot && slot.components ? slot.components : []); }), distinctUntilChanged(function (a, b) {
            return a.length === b.length && !a.find(function (el, index) { return el.uid !== b[index].uid; });
        }));
        this.subscription = new Subscription();
    }
    Object.defineProperty(PageSlotComponent.prototype, "position", {
        get: function () {
            return this.position$.value;
        },
        /**
         * The position is used to find the CMS page slot (and optional outlet)
         * that is rendered in the PageSlotComponent. Furthermore, the position
         * is added as a CSS class name to the host element.
         */
        set: function (position) {
            this.position$.next(position);
            this.renderer.addClass(this.hostElement.nativeElement, position);
        },
        enumerable: true,
        configurable: true
    });
    PageSlotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription.add(this.components$.subscribe(function (components) {
            _this.hasComponents = components && components.length > 0;
            _this.pendingComponentCount = components ? components.length : 0;
            _this.isPending = _this.pendingComponentCount > 0;
        }));
    };
    PageSlotComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    /**
     * Is triggered when a component is added to the view.
     * We use this information to dropthe `is-pending` class from the page slot
     * when all nested components have been added.
     */
    PageSlotComponent.prototype.isLoaded = function (loadState) {
        if (loadState) {
            this.pendingComponentCount--;
        }
        this.isPending = this.pendingComponentCount > 0;
    };
    PageSlotComponent.prototype.getComponentDeferOptions = function (componentType) {
        var deferLoading = this.getDeferLoadingStrategy(componentType);
        return { deferLoading: deferLoading };
    };
    /**
     * The `DeferLoadingStrategy` indicates whether component rendering
     * should be deferred.
     */
    PageSlotComponent.prototype.getDeferLoadingStrategy = function (componentType) {
        if (this.config) {
            return (this.config.cmsComponents[componentType] || {})
                .deferLoading;
        }
    };
    PageSlotComponent.prototype.addSmartEditSlotClass = function (slot) {
        if (slot && this.cmsService.isLaunchInSmartEdit()) {
            this.addSmartEditContract(slot);
        }
    };
    PageSlotComponent.prototype.addSmartEditContract = function (slot) {
        this.dynamicAttributeService.addDynamicAttributes(slot.properties, this.hostElement.nativeElement, this.renderer);
    };
    PageSlotComponent.ctorParameters = function () { return [
        { type: CmsService },
        { type: DynamicAttributeService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: CmsConfig }
    ]; };
    __decorate([
        Input()
    ], PageSlotComponent.prototype, "position", null);
    __decorate([
        HostBinding('class.cx-pending')
    ], PageSlotComponent.prototype, "isPending", void 0);
    __decorate([
        HostBinding('class.has-components')
    ], PageSlotComponent.prototype, "hasComponents", void 0);
    __decorate([
        HostBinding('class.page-fold'), Input()
    ], PageSlotComponent.prototype, "isPageFold", void 0);
    PageSlotComponent = __decorate([
        Component({
            selector: 'cx-page-slot,[cx-page-slot]',
            template: "<ng-template\n  [cxOutlet]=\"position\"\n  [cxOutletContext]=\"{ components$: components$ }\"\n  [cxSkipLink]=\"position\"\n>\n  <ng-template\n    *ngFor=\"let component of components$ | async\"\n    [cxOutlet]=\"component.flexType\"\n    [cxOutletContext]=\"{ component: component }\"\n    [cxOutletDefer]=\"getComponentDeferOptions(component.flexType)\"\n    (loaded)=\"isLoaded($event)\"\n  >\n    <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n  </ng-template>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PageSlotComponent);
    return PageSlotComponent;
}());

var SkipLinkConfig = /** @class */ (function () {
    function SkipLinkConfig() {
    }
    return SkipLinkConfig;
}());
var SkipLink = /** @class */ (function () {
    function SkipLink() {
    }
    return SkipLink;
}());
var SkipLinkScrollPosition;
(function (SkipLinkScrollPosition) {
    SkipLinkScrollPosition["BEFORE"] = "BEFORE";
    SkipLinkScrollPosition["AFTER"] = "AFTER";
})(SkipLinkScrollPosition || (SkipLinkScrollPosition = {}));

var SkipLinkService = /** @class */ (function () {
    function SkipLinkService(config) {
        this.config = config;
        this.skipLinks$ = new BehaviorSubject([]);
    }
    SkipLinkService.prototype.getSkipLinks = function () {
        return this.skipLinks$;
    };
    SkipLinkService.prototype.add = function (key, target) {
        var found = this.config.skipLinks.find(function (skipLink) { return skipLink.key === key; });
        if (found) {
            var existing = this.skipLinks$.value;
            existing.splice(this.getSkipLinkIndexInArray(key), 0, {
                target: target,
                i18nKey: found.i18nKey,
                position: found.position,
                key: key,
            });
            this.skipLinks$.next(existing);
        }
    };
    SkipLinkService.prototype.remove = function (key) {
        var found = this.config.skipLinks.find(function (skipLink) { return skipLink.key === key; });
        if (found) {
            var existing = this.skipLinks$.value;
            existing = existing.filter(function (skipLink) { return skipLink.key !== key; });
            this.skipLinks$.next(existing);
        }
    };
    SkipLinkService.prototype.scrollToTarget = function (target, position, event) {
        target = target.parentNode;
        event.target.blur();
        var options = position === SkipLinkScrollPosition.AFTER ? { inline: 'end' } : {};
        target.scrollIntoView(options);
    };
    SkipLinkService.prototype.getSkipLinkIndexInArray = function (key) {
        var index = this.config.skipLinks.findIndex(function (skipLink) { return skipLink.key === key; });
        var _loop_1 = function () {
            index--;
            var previous = this_1.config.skipLinks[index];
            if (previous) {
                var existing = this_1.skipLinks$.value;
                var found = existing.findIndex(function (skipLink) { return skipLink.key === previous.key; });
                if (found > -1) {
                    return { value: found + 1 };
                }
            }
        };
        var this_1 = this;
        while (index > 0) {
            var state_1 = _loop_1();
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return 0;
    };
    SkipLinkService.ctorParameters = function () { return [
        { type: SkipLinkConfig }
    ]; };
    SkipLinkService.ɵprov = ɵɵdefineInjectable({ factory: function SkipLinkService_Factory() { return new SkipLinkService(ɵɵinject(SkipLinkConfig)); }, token: SkipLinkService, providedIn: "root" });
    SkipLinkService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], SkipLinkService);
    return SkipLinkService;
}());

var SkipLinkComponent = /** @class */ (function () {
    function SkipLinkComponent(skipLinkService) {
        this.skipLinkService = skipLinkService;
        this.skipLinks$ = this.skipLinkService
            .getSkipLinks()
            .pipe(observeOn(asyncScheduler)); // delay view's update to avoid ExpressionChangedAfterItHasBeenCheckedError
    }
    SkipLinkComponent.prototype.scrollToTarget = function (skipLink, event) {
        this.skipLinkService.scrollToTarget(skipLink.target, skipLink.position, event);
    };
    /**
     * Hides the skip link by removing the focus.
     */
    SkipLinkComponent.prototype.blur = function (event) {
        event.target.blur();
    };
    SkipLinkComponent.prototype.tabNext = function (event) {
        if (this.isElement(event.target.nextSibling)) {
            event.target.nextSibling.focus();
        }
    };
    SkipLinkComponent.prototype.tabPrev = function (event) {
        if (this.isElement(event.target.previousSibling)) {
            event.target.previousSibling.focus();
        }
    };
    SkipLinkComponent.prototype.isElement = function (element) {
        return !!element && element instanceof HTMLElement;
    };
    SkipLinkComponent.ctorParameters = function () { return [
        { type: SkipLinkService }
    ]; };
    SkipLinkComponent = __decorate([
        Component({
            selector: 'cx-skip-link',
            template: "<button\n  *ngFor=\"let skipLink of skipLinks$ | async\"\n  (click)=\"scrollToTarget(skipLink, $event)\"\n  (keydown.esc)=\"blur($event)\"\n  (keydown.arrowright)=\"tabNext($event)\"\n  (keydown.arrowleft)=\"tabPrev($event)\"\n>\n  {{ 'skipLink.skipTo' | cxTranslate }}\n  {{ skipLink.i18nKey | cxTranslate }}\n</button>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], SkipLinkComponent);
    return SkipLinkComponent;
}());

var defaultSkipLinkConfig = {
    skipLinks: [
        {
            key: 'SiteContext',
            i18nKey: 'skipLink.labels.header',
        },
        {
            key: 'BottomHeaderSlot',
            position: SkipLinkScrollPosition.AFTER,
            i18nKey: 'skipLink.labels.main',
        },
        {
            key: 'ProductLeftRefinements',
            i18nKey: 'skipLink.labels.productFacets',
        },
        { key: 'ProductListSlot', i18nKey: 'skipLink.labels.productList' },
        { key: 'Footer', i18nKey: 'skipLink.labels.footer' },
    ],
};

var SkipLinkDirective = /** @class */ (function () {
    function SkipLinkDirective(elRef, skipLinkService) {
        this.elRef = elRef;
        this.skipLinkService = skipLinkService;
    }
    SkipLinkDirective.prototype.ngOnInit = function () {
        this.skipLinkService.add(this.cxSkipLink, this.elRef.nativeElement);
    };
    SkipLinkDirective.prototype.ngOnDestroy = function () {
        this.skipLinkService.remove(this.cxSkipLink);
    };
    SkipLinkDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SkipLinkService }
    ]; };
    __decorate([
        Input()
    ], SkipLinkDirective.prototype, "cxSkipLink", void 0);
    SkipLinkDirective = __decorate([
        Directive({
            selector: '[cxSkipLink]',
        })
    ], SkipLinkDirective);
    return SkipLinkDirective;
}());

var SkipLinkModule = /** @class */ (function () {
    function SkipLinkModule() {
    }
    SkipLinkModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                I18nModule,
                ConfigModule.withConfig(defaultSkipLinkConfig),
            ],
            declarations: [SkipLinkComponent, SkipLinkDirective],
            exports: [SkipLinkDirective],
            entryComponents: [SkipLinkComponent],
            providers: [
                { provide: SkipLinkConfig, useExisting: Config },
                {
                    provide: APP_INITIALIZER,
                    useFactory: skipLinkFactory,
                    deps: [ComponentFactoryResolver, OutletService],
                    multi: true,
                },
            ],
        })
    ], SkipLinkModule);
    return SkipLinkModule;
}());
/**
 * Adds the skip link component before the cx-storefront.
 */
function skipLinkFactory(componentFactoryResolver, outletService) {
    var isReady = function () {
        var factory = componentFactoryResolver.resolveComponentFactory(SkipLinkComponent);
        outletService.add('cx-storefront', factory, OutletPosition.BEFORE);
    };
    return isReady;
}

var PageSlotModule = /** @class */ (function () {
    function PageSlotModule() {
    }
    PageSlotModule = __decorate([
        NgModule({
            imports: [CommonModule, OutletModule, PageComponentModule, SkipLinkModule],
            providers: [],
            declarations: [PageSlotComponent],
            exports: [PageSlotComponent],
        })
    ], PageSlotModule);
    return PageSlotModule;
}());

var PageLayoutModule = /** @class */ (function () {
    function PageLayoutModule() {
    }
    PageLayoutModule = __decorate([
        NgModule({
            imports: [CommonModule, OutletModule, PageSlotModule],
            declarations: [PageLayoutComponent],
            providers: [PageLayoutService],
            exports: [PageLayoutComponent],
        })
    ], PageLayoutModule);
    return PageLayoutModule;
}());

var PWAModuleConfig = /** @class */ (function () {
    function PWAModuleConfig() {
    }
    return PWAModuleConfig;
}());
var defaultPWAModuleConfig = {
    pwa: {
        enabled: false,
        addToHomeScreen: false,
    },
};

var AddToHomeScreenService = /** @class */ (function () {
    function AddToHomeScreenService(config, globalMessageService, winRef) {
        this.config = config;
        this.globalMessageService = globalMessageService;
        this.winRef = winRef;
        this.canPrompt = new BehaviorSubject(false);
        this.canPrompt$ = this.canPrompt.asObservable();
        if (this.config.pwa.addToHomeScreen) {
            this.init();
        }
    }
    AddToHomeScreenService.prototype.init = function () {
        var _this = this;
        if (this.winRef.nativeWindow) {
            this.winRef.nativeWindow.addEventListener('beforeinstallprompt', function (event) {
                event.preventDefault();
                _this.deferredEvent = event;
                _this.enableAddToHomeScreen();
            });
            this.winRef.nativeWindow.addEventListener('appinstalled', function () {
                _this.globalMessageService.add({ key: 'pwa.addedToHomeScreen' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                _this.disableAddToHomeScreen();
                _this.deferredEvent = null;
            });
        }
    };
    AddToHomeScreenService.prototype.enableAddToHomeScreen = function () {
        this.canPrompt.next(true);
    };
    AddToHomeScreenService.prototype.disableAddToHomeScreen = function () {
        this.canPrompt.next(false);
    };
    AddToHomeScreenService.prototype.firePrompt = function () {
        if (this.deferredEvent) {
            this.deferredEvent.prompt();
        }
    };
    AddToHomeScreenService.ctorParameters = function () { return [
        { type: PWAModuleConfig },
        { type: GlobalMessageService },
        { type: WindowRef }
    ]; };
    AddToHomeScreenService = __decorate([
        Injectable()
    ], AddToHomeScreenService);
    return AddToHomeScreenService;
}());

var AddToHomeScreenComponent = /** @class */ (function () {
    function AddToHomeScreenComponent(addToHomeScreenService) {
        this.addToHomeScreenService = addToHomeScreenService;
    }
    AddToHomeScreenComponent.prototype.ngOnInit = function () {
        this.canPrompt$ = this.addToHomeScreenService.canPrompt$;
    };
    AddToHomeScreenComponent.prototype.prompt = function () {
        this.addToHomeScreenService.firePrompt();
    };
    return AddToHomeScreenComponent;
}());

var AddToHomeScreenBannerComponent = /** @class */ (function (_super) {
    __extends(AddToHomeScreenBannerComponent, _super);
    function AddToHomeScreenBannerComponent(addToHomeScreenService) {
        var _this = _super.call(this, addToHomeScreenService) || this;
        _this.addToHomeScreenService = addToHomeScreenService;
        return _this;
    }
    AddToHomeScreenBannerComponent.ctorParameters = function () { return [
        { type: AddToHomeScreenService }
    ]; };
    AddToHomeScreenBannerComponent = __decorate([
        Component({
            selector: 'cx-add-to-home-screen-banner',
            template: "<div *ngIf=\"canPrompt$ | async\">\n  <div class=\"cx-add-to-home-screen-banner\">\n    <div class=\"cx-add-to-home-screen-banner-inner\">\n      <p>\n        {{ 'pwa.addToHomeScreenDescription' | cxTranslate }}\n      </p>\n      <ul>\n        <li>{{ 'pwa.noInstallationNeeded' | cxTranslate }}</li>\n        <li>{{ 'pwa.fastAccessToApplication' | cxTranslate }}</li>\n      </ul>\n      <button (click)=\"prompt()\" class=\"btn btn-primary\">\n        {{ 'pwa.addToHomeScreen' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
        })
    ], AddToHomeScreenBannerComponent);
    return AddToHomeScreenBannerComponent;
}(AddToHomeScreenComponent));

var AddToHomeScreenBtnComponent = /** @class */ (function (_super) {
    __extends(AddToHomeScreenBtnComponent, _super);
    function AddToHomeScreenBtnComponent(addToHomeScreenService) {
        var _this = _super.call(this, addToHomeScreenService) || this;
        _this.addToHomeScreenService = addToHomeScreenService;
        return _this;
    }
    AddToHomeScreenBtnComponent.ctorParameters = function () { return [
        { type: AddToHomeScreenService }
    ]; };
    AddToHomeScreenBtnComponent = __decorate([
        Component({
            selector: 'cx-add-to-home-screen-btn',
            template: "<span (click)=\"prompt()\">\n  <ng-content *ngIf=\"canPrompt$ | async\"></ng-content>\n</span>\n"
        })
    ], AddToHomeScreenBtnComponent);
    return AddToHomeScreenBtnComponent;
}(AddToHomeScreenComponent));

function pwaConfigurationFactory(pwaConfig) {
    return { enabled: (!isDevMode() && pwaConfig.pwa.enabled) || false };
}
function pwaFactory(addToHomeScreenService) {
    var result = function () { return addToHomeScreenService; };
    return result;
}
var PwaModule = /** @class */ (function () {
    function PwaModule() {
    }
    PwaModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig(defaultPWAModuleConfig),
                ServiceWorkerModule.register('/ngsw-worker.js'),
                I18nModule,
            ],
            providers: [
                { provide: PWAModuleConfig, useExisting: Config },
                {
                    provide: SwRegistrationOptions,
                    useFactory: pwaConfigurationFactory,
                    deps: [Config],
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: pwaFactory,
                    deps: [AddToHomeScreenService],
                    multi: true,
                },
                AddToHomeScreenService,
            ],
            declarations: [AddToHomeScreenBtnComponent, AddToHomeScreenBannerComponent],
            exports: [AddToHomeScreenBtnComponent, AddToHomeScreenBannerComponent],
        })
    ], PwaModule);
    return PwaModule;
}());

var cmsRoute = {
    path: '**',
    canActivate: [CmsPageGuard],
    component: PageLayoutComponent,
};
function addCmsRoute(injector) {
    var result = function () {
        var router = injector.get(Router);
        router.config.push(cmsRoute);
    };
    return result;
}

var ɵ0 = addCmsRoute;
var CmsRouteModule = /** @class */ (function () {
    function CmsRouteModule() {
    }
    CmsRouteModule = __decorate([
        NgModule({
            providers: [
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [Injector],
                    useFactory: ɵ0,
                },
            ],
        })
    ], CmsRouteModule);
    return CmsRouteModule;
}());

var defaultStorefrontRoutesConfig = {
    home: { paths: [''] },
    notFound: { paths: ['not-found'] },
    cart: { paths: ['cart'] },
    // semantic links for login related pages
    login: { paths: ['login'], protected: false },
    register: { paths: ['login/register'], protected: false },
    forgotPassword: { paths: ['login/forgot-password'], protected: false },
    resetPassword: { paths: ['login/pw/change'], protected: false },
    logout: { paths: ['logout'] },
    checkoutLogin: { paths: ['checkout-login'] },
    checkout: { paths: ['checkout'] },
    checkoutShippingAddress: { paths: ['checkout/shipping-address'] },
    checkoutDeliveryMode: { paths: ['checkout/delivery-mode'] },
    checkoutPaymentDetails: { paths: ['checkout/payment-details'] },
    checkoutReviewOrder: { paths: ['checkout/review-order'] },
    orderConfirmation: { paths: ['order-confirmation'] },
    // plp routes
    search: { paths: ['search/:query'] },
    category: {
        paths: ['category/:categoryCode'],
        paramsMapping: { categoryCode: 'code' },
    },
    brand: { paths: ['Brands/:brandName/c/:brandCode'] },
    // pdp routes
    product: {
        paths: ['product/:productCode/:name'],
        paramsMapping: { productCode: 'code' },
    },
    termsAndConditions: { paths: ['terms-and-conditions'] },
    orders: {
        paths: ['my-account/orders'],
    },
    orderDetails: {
        paths: ['my-account/order/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orderGuest: {
        paths: ['guest/order/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orderReturn: {
        paths: ['my-account/order/return/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orderReturnConfirmation: {
        paths: ['my-account/order/return/confirmation/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orderCancel: {
        paths: ['my-account/order/cancel/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orderCancelConfirmation: {
        paths: ['my-account/order/cancel/confirmation/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    returnRequestDetails: {
        paths: ['my-account/return-request/:returnCode'],
        paramsMapping: { returnCode: 'rma' },
    },
    coupons: { paths: ['my-account/coupons'] },
    couponClaim: {
        paths: ['my-account/coupon/claim/:couponCode'],
        paramsMapping: { couponCode: 'code' },
    },
};
var defaultRoutingConfig = {
    routing: {
        routes: defaultStorefrontRoutesConfig,
    },
};

var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule_1 = RoutingModule;
    RoutingModule.forRoot = function () {
        return {
            ngModule: RoutingModule_1,
            providers: [provideConfig(defaultRoutingConfig)],
        };
    };
    var RoutingModule_1;
    RoutingModule = RoutingModule_1 = __decorate([
        NgModule({
            imports: [RoutingModule$1.forRoot(), CmsRouteModule],
        })
    ], RoutingModule);
    return RoutingModule;
}());

/**
 * Matches the pattern '[ ** / ] marker / :paramName'
 *
 * @param marker phrase that indicates the start of the match
 * @param paramName name of the parameter present after the marker
 * @param precedingParamName name of the parameter for every preceding url segment
 *        i.e. `param` will result in `param0`, `param1`, ...
 */
function getSuffixUrlMatcher(_a) {
    var marker = _a.marker, paramName = _a.paramName, precedingParamName = _a.precedingParamName;
    precedingParamName = precedingParamName || 'param';
    var matcher = function suffixUrlMatcher(segments) {
        var _a;
        var markerIndex = findLastIndex(segments, function (_a) {
            var path = _a.path;
            return path === marker;
        });
        var isMarkerLastSegment = markerIndex === segments.length - 1;
        if (markerIndex === -1 || isMarkerLastSegment) {
            return null;
        }
        var paramIndex = markerIndex + 1;
        var posParams = (_a = {},
            _a[paramName] = segments[paramIndex],
            _a);
        for (var i = 0; i < markerIndex; i++) {
            posParams["" + precedingParamName + i] = segments[i];
        }
        return { consumed: segments.slice(0, paramIndex + 1), posParams: posParams };
    };
    if (isDevMode()) {
        matcher['_suffixRouteConfig'] = { marker: marker, paramName: paramName, precedingParamName: precedingParamName }; // property added for easier debugging of routes
    }
    return matcher;
}
function findLastIndex(elements, predicate) {
    for (var index = elements.length - 1; index >= 0; index--) {
        if (predicate(elements[index])) {
            return index;
        }
    }
    return -1;
}

var SeoMetaService = /** @class */ (function () {
    function SeoMetaService(ngTitle, ngMeta, pageMetaService) {
        this.ngTitle = ngTitle;
        this.ngMeta = ngMeta;
        this.pageMetaService = pageMetaService;
    }
    SeoMetaService.prototype.init = function () {
        var _this = this;
        this.pageMetaService
            .getMeta()
            .pipe(filter(Boolean))
            .subscribe(function (meta) { return (_this.meta = meta); });
    };
    Object.defineProperty(SeoMetaService.prototype, "meta", {
        set: function (meta) {
            this.title = meta.title;
            this.description = meta.description;
            this.image = meta.image;
            this.robots = meta.robots || [PageRobotsMeta.INDEX, PageRobotsMeta.FOLLOW];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeoMetaService.prototype, "title", {
        set: function (title) {
            this.ngTitle.setTitle(title || '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeoMetaService.prototype, "description", {
        set: function (value) {
            this.addTag({ name: 'description', content: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeoMetaService.prototype, "image", {
        set: function (imageUrl) {
            if (imageUrl) {
                this.addTag({ name: 'og:image', content: imageUrl });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeoMetaService.prototype, "robots", {
        set: function (value) {
            if (value) {
                this.addTag({ name: 'robots', content: value.join(', ') });
            }
        },
        enumerable: true,
        configurable: true
    });
    SeoMetaService.prototype.addTag = function (meta) {
        if (meta.content) {
            this.ngMeta.updateTag(meta);
        }
    };
    SeoMetaService.ctorParameters = function () { return [
        { type: Title },
        { type: Meta },
        { type: PageMetaService }
    ]; };
    SeoMetaService.ɵprov = ɵɵdefineInjectable({ factory: function SeoMetaService_Factory() { return new SeoMetaService(ɵɵinject(Title), ɵɵinject(Meta), ɵɵinject(PageMetaService)); }, token: SeoMetaService, providedIn: "root" });
    SeoMetaService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], SeoMetaService);
    return SeoMetaService;
}());

var htmlLangProvider = {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: setHtmlLangAttribute,
    deps: [WindowRef, LanguageService],
};
/**
 * Sets active language in <html lang="">
 */
function setHtmlLangAttribute(winRef, languageService) {
    var result = function () {
        languageService.getActive().subscribe(function (lang) {
            winRef.document.documentElement.lang = lang;
        });
    };
    return result;
}

var JsonLdScriptFactory = /** @class */ (function () {
    function JsonLdScriptFactory(platformId, winRef, rendererFactory, sanitizer) {
        this.platformId = platformId;
        this.winRef = winRef;
        this.rendererFactory = rendererFactory;
        this.sanitizer = sanitizer;
    }
    JsonLdScriptFactory.prototype.build = function (schema) {
        if (schema && this.isJsonLdRequired()) {
            this.createJsonLdScriptElement().innerHTML = this.sanitize(schema);
        }
    };
    /**
     * Only return schema data in case of SSR or development mode,
     * to not waste memory unnecessary.
     */
    JsonLdScriptFactory.prototype.isJsonLdRequired = function () {
        return !isPlatformBrowser(this.platformId) || isDevMode();
    };
    JsonLdScriptFactory.prototype.createJsonLdScriptElement = function () {
        var id = 'json-ld';
        var scriptElement = (this.winRef.document.getElementById(id));
        if (!scriptElement) {
            var renderer = this.rendererFactory.createRenderer(null, null);
            var script = renderer.createElement('script');
            script.id = id;
            script.type = 'application/ld+json';
            renderer.appendChild(this.winRef.document.body, script);
            scriptElement = script;
        }
        return scriptElement;
    };
    /**
     * Sanitizes the given json-ld schema by leveraging the angular HTML sanitizer.
     *
     * The given schema is not trusted, as malicious code could be injected (XSS)
     * into the json-ld script.
     */
    JsonLdScriptFactory.prototype.sanitize = function (schema) {
        var _this = this;
        return JSON.stringify(schema, function (_key, value) {
            return typeof value === 'string'
                ? _this.sanitizer.sanitize(SecurityContext.HTML, value)
                : value;
        });
    };
    JsonLdScriptFactory.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: WindowRef },
        { type: RendererFactory2 },
        { type: DomSanitizer }
    ]; };
    JsonLdScriptFactory.ɵprov = ɵɵdefineInjectable({ factory: function JsonLdScriptFactory_Factory() { return new JsonLdScriptFactory(ɵɵinject(PLATFORM_ID), ɵɵinject(WindowRef), ɵɵinject(RendererFactory2), ɵɵinject(DomSanitizer)); }, token: JsonLdScriptFactory, providedIn: "root" });
    JsonLdScriptFactory = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(0, Inject(PLATFORM_ID))
    ], JsonLdScriptFactory);
    return JsonLdScriptFactory;
}());

/**
 * Low level directive that adds a json-ld script tag to the component.
 * This code bypasses the strict XSS security, as otherwise we're not able
 * to append a script tag with JS inside.
 */
var JsonLdDirective = /** @class */ (function () {
    function JsonLdDirective(jsonLdScriptFactory, sanitizer) {
        this.jsonLdScriptFactory = jsonLdScriptFactory;
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(JsonLdDirective.prototype, "cxJsonLd", {
        set: function (schema) {
            this.writeJsonLd(schema);
        },
        enumerable: true,
        configurable: true
    });
    JsonLdDirective.prototype.writeJsonLd = function (schema) {
        if (schema && this.jsonLdScriptFactory.isJsonLdRequired()) {
            var sanitizedSchema = this.jsonLdScriptFactory.sanitize(schema);
            var html = "<script type=\"application/ld+json\">" + sanitizedSchema + "</script>";
            this.jsonLD = this.sanitizer.bypassSecurityTrustHtml(html);
        }
    };
    JsonLdDirective.ctorParameters = function () { return [
        { type: JsonLdScriptFactory },
        { type: DomSanitizer }
    ]; };
    __decorate([
        Input()
    ], JsonLdDirective.prototype, "cxJsonLd", null);
    __decorate([
        HostBinding('innerHTML')
    ], JsonLdDirective.prototype, "jsonLD", void 0);
    JsonLdDirective = __decorate([
        Directive({
            selector: '[cxJsonLd]',
        })
    ], JsonLdDirective);
    return JsonLdDirective;
}());

/**
 * Injection token to extend schema builders for adding structural data (json-ld).
 *
 * Some builders (i.e. `JSONLD_PRODUCT_BUILDER`) might have additional
 * lowever level builder to further extend the schema.
 */
var SCHEMA_BUILDER = new InjectionToken('SchemaBuilderToken');
/**
 * Injection token to add specific json-ld builders for product related schema's.
 * See see https://schema.org/product for more information.
 */
var JSONLD_PRODUCT_BUILDER = new InjectionToken('JsonLdProductBuilderToken');

var StructuredDataFactory = /** @class */ (function () {
    function StructuredDataFactory(scriptBuilder, builders) {
        this.scriptBuilder = scriptBuilder;
        this.builders = builders;
    }
    StructuredDataFactory.prototype.build = function () {
        var _this = this;
        this.collectSchemas().subscribe(function (schema) {
            _this.scriptBuilder.build(schema);
        });
    };
    StructuredDataFactory.prototype.collectSchemas = function () {
        if (!this.scriptBuilder.isJsonLdRequired() || !this.builders) {
            return of();
        }
        return combineLatest(this.builders.map(function (builder) { return builder.build(); })).pipe();
    };
    StructuredDataFactory.ctorParameters = function () { return [
        { type: JsonLdScriptFactory },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [SCHEMA_BUILDER,] }] }
    ]; };
    StructuredDataFactory.ɵprov = ɵɵdefineInjectable({ factory: function StructuredDataFactory_Factory() { return new StructuredDataFactory(ɵɵinject(JsonLdScriptFactory), ɵɵinject(SCHEMA_BUILDER, 8)); }, token: StructuredDataFactory, providedIn: "root" });
    StructuredDataFactory = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(1, Optional()),
        __param(1, Inject(SCHEMA_BUILDER))
    ], StructuredDataFactory);
    return StructuredDataFactory;
}());

/**
 * Factory to build the structure data
 * without any interaction with the UI.
 */
function getStructuredDataFactory(injector) {
    var result = function () {
        var factory = injector.get(StructuredDataFactory);
        factory.build();
    };
    return result;
}
var StructuredDataModule = /** @class */ (function () {
    function StructuredDataModule() {
    }
    StructuredDataModule = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [JsonLdDirective],
            exports: [JsonLdDirective],
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: getStructuredDataFactory,
                    deps: [Injector],
                    multi: true,
                },
            ],
        })
    ], StructuredDataModule);
    return StructuredDataModule;
}());

function initSeoService(injector) {
    var result = function () {
        var service = injector.get(SeoMetaService);
        service.init();
    };
    return result;
}
var SeoModule = /** @class */ (function () {
    function SeoModule() {
    }
    SeoModule = __decorate([
        NgModule({
            imports: [StructuredDataModule],
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: initSeoService,
                    deps: [Injector],
                    multi: true,
                },
                htmlLangProvider,
            ],
        })
    ], SeoModule);
    return SeoModule;
}());

var BreadcrumbSchemaBuilder = /** @class */ (function () {
    function BreadcrumbSchemaBuilder(pageMetaService) {
        this.pageMetaService = pageMetaService;
    }
    BreadcrumbSchemaBuilder.prototype.build = function () {
        var _this = this;
        return this.pageMetaService
            .getMeta()
            .pipe(map(function (pageMeta) { return _this.collect(pageMeta); }));
    };
    BreadcrumbSchemaBuilder.prototype.collect = function (pageMeta) {
        var _a;
        if (!((_a = pageMeta) === null || _a === void 0 ? void 0 : _a.breadcrumbs)) {
            return;
        }
        var crumbs = pageMeta.breadcrumbs.map(function (crumb, index) {
            return {
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@id': crumb.link,
                    name: crumb.label,
                },
            };
        });
        if (pageMeta.title) {
            crumbs.push({
                '@type': 'ListItem',
                position: crumbs.length + 1,
                item: {
                    '@id': pageMeta.title,
                    name: pageMeta.title,
                },
            });
        }
        return {
            '@context': 'http://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: crumbs,
        };
    };
    BreadcrumbSchemaBuilder.ctorParameters = function () { return [
        { type: PageMetaService }
    ]; };
    BreadcrumbSchemaBuilder.ɵprov = ɵɵdefineInjectable({ factory: function BreadcrumbSchemaBuilder_Factory() { return new BreadcrumbSchemaBuilder(ɵɵinject(PageMetaService)); }, token: BreadcrumbSchemaBuilder, providedIn: "root" });
    BreadcrumbSchemaBuilder = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], BreadcrumbSchemaBuilder);
    return BreadcrumbSchemaBuilder;
}());

/**
 * Builds the basic structured data for the product, see https://schema.org/product.
 * This builder includes data for sku number, name, description, brand and main image.
 */
var JsonLdBaseProductBuilder = /** @class */ (function () {
    function JsonLdBaseProductBuilder() {
    }
    JsonLdBaseProductBuilder.prototype.build = function (product) {
        return of(__assign(__assign(__assign({}, this.getProductBase(product)), this.getProductBrand(product)), this.getProductImage(product)));
    };
    JsonLdBaseProductBuilder.prototype.getProductBase = function (product) {
        var result = { sku: product.code };
        if (product.name) {
            result.name = product.name;
        }
        if (product.summary) {
            result.description = product.summary;
        }
        return result;
    };
    JsonLdBaseProductBuilder.prototype.getProductImage = function (product) {
        return product.images &&
            product.images.PRIMARY &&
            product.images.PRIMARY['zoom'] &&
            product.images.PRIMARY['zoom'].url
            ? {
                image: product.images.PRIMARY['zoom'].url,
            }
            : {};
    };
    JsonLdBaseProductBuilder.prototype.getProductBrand = function (product) {
        return product['manufacturer']
            ? {
                brand: product['manufacturer'],
            }
            : null;
    };
    JsonLdBaseProductBuilder.ɵprov = ɵɵdefineInjectable({ factory: function JsonLdBaseProductBuilder_Factory() { return new JsonLdBaseProductBuilder(); }, token: JsonLdBaseProductBuilder, providedIn: "root" });
    JsonLdBaseProductBuilder = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], JsonLdBaseProductBuilder);
    return JsonLdBaseProductBuilder;
}());

/**
 * Builds the structured data for the product offer, see https://schema.org/offers.
 * The data includes the price, currency and availability level.
 */
var JsonLdProductOfferBuilder = /** @class */ (function () {
    function JsonLdProductOfferBuilder() {
    }
    JsonLdProductOfferBuilder.prototype.build = function (product) {
        var schema = { '@type': 'Offer' };
        if (product.price) {
            if (product.price.value) {
                schema.price = product.price.value;
            }
            if (product.price.currencyIso) {
                schema.priceCurrency = product.price.currencyIso;
            }
        }
        if (product.stock && product.stock.stockLevelStatus) {
            schema.availability =
                product.stock.stockLevelStatus === 'inStock' ? 'InStock' : 'OutOfStock';
        }
        return of({
            offers: schema,
        });
    };
    JsonLdProductOfferBuilder.ɵprov = ɵɵdefineInjectable({ factory: function JsonLdProductOfferBuilder_Factory() { return new JsonLdProductOfferBuilder(); }, token: JsonLdProductOfferBuilder, providedIn: "root" });
    JsonLdProductOfferBuilder = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], JsonLdProductOfferBuilder);
    return JsonLdProductOfferBuilder;
}());

/**
 * Builds the structured data for the product reviews, see https://schema.org/Review.
 * The data includes the aggregated product rating and the individual reviews.
 */
var JsonLdProductReviewBuilder = /** @class */ (function () {
    function JsonLdProductReviewBuilder(reviewService) {
        this.reviewService = reviewService;
    }
    JsonLdProductReviewBuilder.prototype.build = function (product) {
        var _this = this;
        return this.reviewService.getByProductCode(product.code).pipe(filter(Boolean), map(function (reviews) {
            return {
                aggregateRating: _this.buildAggregatedReviews(product, reviews),
                review: reviews.map(function (review) { return _this.buildReviews(review); }),
            };
        }));
    };
    JsonLdProductReviewBuilder.prototype.buildAggregatedReviews = function (product, reviews) {
        var aggregated = {
            '@type': 'AggregateRating',
        };
        if (product.averageRating) {
            aggregated.ratingValue = product.averageRating;
        }
        if (reviews) {
            aggregated.ratingCount = reviews.filter(function (rev) { return !!rev.rating; }).length;
            aggregated.reviewCount = reviews.filter(function (rev) { return !!rev.comment; }).length;
        }
        return aggregated;
    };
    JsonLdProductReviewBuilder.prototype.buildReviews = function (review) {
        var reviewSchema = {
            '@type': 'review',
        };
        if (review.principal && review.principal.name) {
            reviewSchema.author = review.principal.name;
        }
        if (review.date) {
            var date = new Date(review.date);
            reviewSchema.datePublished = date.getFullYear() + "-" + (date.getMonth() +
                1) + "-" + date.getDate();
        }
        if (review.headline) {
            reviewSchema.name = review.headline;
        }
        if (review.comment) {
            reviewSchema.description = review.comment;
        }
        if (review.rating) {
            reviewSchema.reviewRating = {
                '@type': 'Rating',
                ratingValue: review.rating.toString(),
            };
        }
        return reviewSchema;
    };
    JsonLdProductReviewBuilder.ctorParameters = function () { return [
        { type: ProductReviewService }
    ]; };
    JsonLdProductReviewBuilder.ɵprov = ɵɵdefineInjectable({ factory: function JsonLdProductReviewBuilder_Factory() { return new JsonLdProductReviewBuilder(ɵɵinject(ProductReviewService)); }, token: JsonLdProductReviewBuilder, providedIn: "root" });
    JsonLdProductReviewBuilder = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], JsonLdProductReviewBuilder);
    return JsonLdProductReviewBuilder;
}());

var CurrentProductService = /** @class */ (function () {
    function CurrentProductService(routingService, productService, features) {
        this.routingService = routingService;
        this.productService = productService;
        this.features = features;
        this.DEFAULT_PRODUCT_SCOPE = this.features && this.features.isLevel('1.4') ? ProductScope.DETAILS : '';
    }
    CurrentProductService.prototype.getProduct = function (scopes) {
        var _this = this;
        return this.routingService.getRouterState().pipe(map(function (state) { return state.state.params['productCode']; }), filter(Boolean), switchMap(function (productCode) {
            return _this.productService.get(productCode, 
            // TODO deprecated since 1.4 - should be replaced with 'scopes || this.DEFAULT_PRODUCT_SCOPE'
            _this.features && _this.features.isLevel('1.4')
                ? scopes || _this.DEFAULT_PRODUCT_SCOPE
                : undefined
            // deprecated END
            );
        }));
    };
    CurrentProductService.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductService },
        { type: FeatureConfigService }
    ]; };
    CurrentProductService.ɵprov = ɵɵdefineInjectable({ factory: function CurrentProductService_Factory() { return new CurrentProductService(ɵɵinject(RoutingService), ɵɵinject(ProductService), ɵɵinject(FeatureConfigService)); }, token: CurrentProductService, providedIn: "root" });
    CurrentProductService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CurrentProductService);
    return CurrentProductService;
}());

/**
 * Adds the minimal structured data for the product, see https://schema.org/product.
 * The actual data collection is delegated to `JsonLdBuilder`s, which can be injected
 * using the `JSONLD_PRODUCT_BUILDER` token.
 */
var ProductSchemaBuilder = /** @class */ (function () {
    function ProductSchemaBuilder(currentProduct, builders) {
        this.currentProduct = currentProduct;
        this.builders = builders;
    }
    ProductSchemaBuilder.prototype.build = function () {
        var _this = this;
        return this.currentProduct.getProduct().pipe(startWith(null), switchMap(function (product) {
            if (product) {
                return combineLatest(_this.collect(product)).pipe(map(function (res) { return Object.assign.apply(Object, __spread([{}], res)); }));
            }
            return of({});
        }));
    };
    ProductSchemaBuilder.prototype.collect = function (product) {
        if (!product || !product.code) {
            return [];
        }
        var builders = this.builders
            ? this.builders.map(function (builder) { return builder.build(product); })
            : [];
        return __spread([
            of({
                '@context': 'http://schema.org',
                '@type': 'Product',
            })
        ], builders);
    };
    ProductSchemaBuilder.ctorParameters = function () { return [
        { type: CurrentProductService },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [JSONLD_PRODUCT_BUILDER,] }] }
    ]; };
    ProductSchemaBuilder.ɵprov = ɵɵdefineInjectable({ factory: function ProductSchemaBuilder_Factory() { return new ProductSchemaBuilder(ɵɵinject(CurrentProductService), ɵɵinject(JSONLD_PRODUCT_BUILDER, 8)); }, token: ProductSchemaBuilder, providedIn: "root" });
    ProductSchemaBuilder = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(1, Optional()),
        __param(1, Inject(JSONLD_PRODUCT_BUILDER))
    ], ProductSchemaBuilder);
    return ProductSchemaBuilder;
}());

/**
 * Provides several standard json-ld builders that contribute
 * to colleting and building json-ld data.
 */
var JsonLdBuilderModule = /** @class */ (function () {
    function JsonLdBuilderModule() {
    }
    JsonLdBuilderModule = __decorate([
        NgModule({
            providers: [
                {
                    provide: SCHEMA_BUILDER,
                    useExisting: ProductSchemaBuilder,
                    multi: true,
                },
                {
                    provide: SCHEMA_BUILDER,
                    useExisting: BreadcrumbSchemaBuilder,
                    multi: true,
                },
                // lower level json-ld builder classes offering fine-graiend control
                // for product related schema's
                {
                    provide: JSONLD_PRODUCT_BUILDER,
                    useExisting: JsonLdBaseProductBuilder,
                    multi: true,
                },
                {
                    provide: JSONLD_PRODUCT_BUILDER,
                    useExisting: JsonLdProductOfferBuilder,
                    multi: true,
                },
                {
                    provide: JSONLD_PRODUCT_BUILDER,
                    useExisting: JsonLdProductReviewBuilder,
                    multi: true,
                },
            ],
        })
    ], JsonLdBuilderModule);
    return JsonLdBuilderModule;
}());

var ASM_ENABLED_LOCAL_STORAGE_KEY = 'asm_enabled';

var AsmComponentService = /** @class */ (function () {
    function AsmComponentService(authService, asmAuthService, routingService, winRef) {
        this.authService = authService;
        this.asmAuthService = asmAuthService;
        this.routingService = routingService;
        this.winRef = winRef;
    }
    AsmComponentService.prototype.logoutCustomerSupportAgentAndCustomer = function () {
        var _this = this;
        this.authService
            .getUserToken()
            .pipe(take(1))
            .subscribe(function (token) {
            if (_this.asmAuthService.isCustomerEmulationToken(token)) {
                _this.logoutCustomer();
            }
            _this.asmAuthService.logoutCustomerSupportAgent();
        });
    };
    AsmComponentService.prototype.logoutCustomer = function () {
        this.authService.logout();
        this.routingService.go({ cxRoute: 'home' });
    };
    AsmComponentService.prototype.isCustomerEmulationSessionInProgress = function () {
        var _this = this;
        return this.authService
            .getUserToken()
            .pipe(mergeMap(function (userToken) {
            return of(_this.asmAuthService.isCustomerEmulationToken(userToken));
        }));
    };
    /**
     * We're currently only removing the persisted storage in the browser
     * to ensure the ASM experience isn't loaded on the next visit. There are a few
     * optimsiations we could think of:
     * - drop the `asm` parameter from the URL, in case it's still there
     * - remove the generated UI from the DOM (outlets currently do not support this)
     */
    AsmComponentService.prototype.unload = function () {
        if (this.winRef.localStorage) {
            this.winRef.localStorage.removeItem(ASM_ENABLED_LOCAL_STORAGE_KEY);
        }
    };
    AsmComponentService.ctorParameters = function () { return [
        { type: AuthService },
        { type: AsmAuthService },
        { type: RoutingService },
        { type: WindowRef }
    ]; };
    AsmComponentService.ɵprov = ɵɵdefineInjectable({ factory: function AsmComponentService_Factory() { return new AsmComponentService(ɵɵinject(AuthService), ɵɵinject(AsmAuthService), ɵɵinject(RoutingService), ɵɵinject(WindowRef)); }, token: AsmComponentService, providedIn: "root" });
    AsmComponentService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AsmComponentService);
    return AsmComponentService;
}());

var AsmMainUiComponent = /** @class */ (function () {
    function AsmMainUiComponent(authService, asmAuthService, userService, asmComponentService, globalMessageService, routingService) {
        this.authService = authService;
        this.asmAuthService = asmAuthService;
        this.userService = userService;
        this.asmComponentService = asmComponentService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.disabled = false;
        this.startingCustomerSession = false;
    }
    AsmMainUiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.csAgentToken$ = this.asmAuthService.getCustomerSupportAgentToken();
        this.csAgentTokenLoading$ = this.asmAuthService.getCustomerSupportAgentTokenLoading();
        this.customer$ = this.authService.getUserToken().pipe(switchMap(function (token) {
            if (token && !!token.access_token) {
                _this.handleCustomerSessionStartRedirection(token);
                return _this.userService.get();
            }
            else {
                return of(undefined);
            }
        }));
    };
    AsmMainUiComponent.prototype.handleCustomerSessionStartRedirection = function (token) {
        if (this.startingCustomerSession &&
            this.asmAuthService.isCustomerEmulationToken(token)) {
            this.startingCustomerSession = false;
            this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
            this.routingService.go('/');
        }
    };
    AsmMainUiComponent.prototype.loginCustomerSupportAgent = function (_a) {
        var userId = _a.userId, password = _a.password;
        this.asmAuthService.authorizeCustomerSupportAgent(userId, password);
    };
    AsmMainUiComponent.prototype.logout = function () {
        this.asmComponentService.logoutCustomerSupportAgentAndCustomer();
    };
    AsmMainUiComponent.prototype.startCustomerEmulationSession = function (_a) {
        var _this = this;
        var customerId = _a.customerId;
        this.asmAuthService
            .getCustomerSupportAgentToken()
            .pipe(take(1))
            .subscribe(function (customerSupportAgentToken) {
            return _this.asmAuthService.startCustomerEmulationSession(customerSupportAgentToken, customerId);
        })
            .unsubscribe();
        this.startingCustomerSession = true;
    };
    AsmMainUiComponent.prototype.hideUi = function () {
        this.disabled = true;
        this.asmComponentService.unload();
    };
    AsmMainUiComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: AsmAuthService },
        { type: UserService },
        { type: AsmComponentService },
        { type: GlobalMessageService },
        { type: RoutingService }
    ]; };
    __decorate([
        HostBinding('class.hidden')
    ], AsmMainUiComponent.prototype, "disabled", void 0);
    AsmMainUiComponent = __decorate([
        Component({
            selector: 'cx-asm-main-ui',
            template: "<div class=\"asm-bar\">\n  <div class=\"asm-bar-branding\">\n    <img\n      class=\"logo\"\n      src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAwCAYAAADuFn/PAAAAAXNSR0IArs4c6QAAD7RJREFUeAHtW3twVGcVP7t795V30rwJBBJeASq01NJgnZa2otTW2nHAqrRak+rUKfgYZ/xDW5lRR2e0/mGtAadqq6WjUAdNa4udqVZaEdtCKQ2FQEh5JSQh5Lnvp7/ft9lkd9l7swkhwMiZ3N27937fd8533ufcG9P1L/VE5SpMOwdMmk0iocDzWjAUnnbk/9cITSYx2xwS9Xs3Wzs7NmqhcOT/mh/Tunkw32SzScjr2Vy2v3XDa5tWhbRI5KoHmi4hmGx2ifi8mz8UmvHI9k2VyvVokasWMC38N8HtRHyezUejex5pXbdu1O9r5qsCuLgCUD4fmu/1bq5sbd9wdNMY84lYM10VwMUTAJlvtUnU491c0XZc+fxUZFo0Mn4QjiJMMFREcKJG4xxrC/7ETCQ854+JAtbBny5Mak3d1ab3BsKtCrhhuJ2K9lNpmU+KYAHpWRAFa4K4x7t5NouU5WhS4rRIvt0idotJ3MGIDPgj0usNSZ8vLMOBiIQhJQukoZkpHGOJcGXLiPD0WBNStOmvQ8ETAjp7iN0d++RelBLhBFsAnVQe/fXHZk7wDEuarXaJBrxNFe2nNzLb0VsBMWA0HoyO8WNDDnDxIzOy5ONzcuX6MqdU5VhxLZlYWoUvFJEud0iODQZkb5dXHa19PnEFw2LDBi0QRqqac14BBPnz2yul0GEZxZt68vzhQXm6pS+Gl9xLANL4uUWFsm5hPmiIjiPu2EQqSY8nJCeHAnK4zy+tOLrdQXXTClqVLFLwJKDM7BSLmMD8iN/btCRn3obtm+adz+CElTTlW0YuEDe1qR6M//oNJXJDRVbC0PNPqYFZVrPUFNjU8bHqHGUF3NxLx4ZkZ/uQdLnOF34Acad+To6srDRe/7ML8+T5Q/3KEpNFD5lijVKnWa4tdpxPWIZXeiGM/3S65Y/vD8hbnR6lLBdkEdR8DZrv9zUtyT+wYfu6+YbMJ5mjQZjMZ1H20HXF8s0VZWKjjU4C6IIWgyk8PlqVLY0vnhDGkMTVNJjA3bV5464+t9AhS4vtsqfDBWuiKY0Bk4dIhq5nbFbyWXGWJnfPzZc1NRT0gDy+p1uG/WHlmpJHZvALG6TmR/2epoOFBzccTEg1jWabTXBBpkhYgoGQNCy9Rr6zsnzSzE9ERKZvazknAX9IzFhf4QGuMFofNXmarKjMThye9pwWtqYmV6Jwc2R4fI3Rb/qyKQDGgvsWF8ovVlcJSEOPJsaTUTzkkdGBRMZstorA7SwqXLRBMmQ+STczC/IHwnA3TvlGfdkUbCe2xBsnhmVna79YTQi3YB7x8AhA0LfPzpNsW7JG6yG+BWOLHWYJgwHxNUa/KeUphPqZOfKt+nKlJIk0j+Ib2UPyb8QfMD/q8zYV9/Ru3L7ONK7bSSTZHIUZm6FJDdeXIrsZnynMdBh4jfbuR1B8YnenhBCIVZZFV4GDuLLh2j4xLz+RBsPzylyrspYAlIRrJB1TZAGJBHxmUZFcV5YFRUmDLxU/fpP5aC80Fff1GWY7iTgSzzWa26wCu6yA9I3g7VPDsu1Ar3zQ75MAGEwNLnBoUgtfv2JmriybkSM5SFcJO1p65Z3Tw2JnPgqtiUMIgluGsXUlzviljL7vnF8gLx86h7UShnNdIy3A0NeODcrrHwwqn56LrKv2GtA6K0+K4Pv1wAoF+STw7T05lBy4kibQ8lhkMdvxNZUMD06K+VxSC0NLawtto8xLwjPyYx+Y2bCtVVwjAYrpGvdOBXzlcFSeguVUF9rlzroiuXlOgfzmv2fEwgFwG4kQhitag80xUE8EbgLTZsISOgb9Y3MhzPEE8NapIdmyu0McyNRIDjOcmVC2x1ZXy621BbokLK/KEZQ8CPLJ9I9OwDpm9POR7fzqYPXyjTJBtzO6Dk4QH8MosPQ1goND4DSDNFCKDT4dHk99O8xRRSjKaTnR65Ff7jolX37ufTnT78UYBE1oafygT2Uhd9vcwkT8GZ3noVa4tSY/5tIS1jQBrxFYIWdkqurIAkMdoL2jzyvf/1u7dA8HdKdW5FmlCHEnFozH9qASAfDCYtLYz2+qe7P9gphPAhADEBipTQZwIzTwJ3fVSmm2VTy+kARgNeyiqkDFbzDFooQioh7w4PfovZFxDL7U5Mp8W1pMrLppYXqwBtbFuJ2MF2ptAFEwK4kO0MWkoGPAK/s7hnVnMhZmw30m4eI+aEZgPtzOr+pqTmzYvj25saa7oMENiDIq3UN+gyGxW5+6tkRurM6XHe/2yIstZ6XtrEcJTgOxTOPoluIVbypb+JvK+slF1+jiae/1yuvH+qVx5Yy0Y66tzJX5xVnScsYlrFpZA5AfRkCGcVwEljoKoDOMaz5UxXqgIQ7Aa6lxo1Mxj3l+OOD73eEFKze2rKvX1xa9hdNcx1aicqjLJb0ufZOMzyvPs8nDH62SPzculWceWAJmVUkNAlsAgdwFywhCS0LQstTDz0BfZJebEB/0YM8HA7Jjf7eqpNONYWF4x4JC8QVDav0g8LCvYwS8z3GJ9NDaEY9lfql+Fc4kg/sJJ8wNm20S9nu3+sKBr12Iz0+l10wtOQ2fTa3OFBjUbpqdL9/9xBz5y1eXyVNfWCy0EA0bc6Pw4oZJfPzwwWXdPr9IcrhzHdjV1icHod20LD1YXVes1qCgufZ4AmDKTOFTQUgDafPg+PwNFbIAqaYeuOEKe90B5XIUHgseIwa9W/3RYOPxTat8evMmc121o+m/m/51QlaBSdVFE0sRnVaLmse5LZ0ueeK14/IShKk6nbQvCDiLqd3iYl36uuAC950cFK8/KK9DEAvK0lfJc0uyZHlVrvzzyLmY+xnHAvIg8CpYrQM0ZiGAVF+TJXdDUe6+ttSwC9ra7ZJ+eASVraG3A5+/1VLqbmjfeOf4vlp3l+lvQAAoxHDvNLKDh7e+J1vWf0hmogczGVhSmSNbPr9EnvnPafnB344iINP8o3Lj7AJZDB+uB3va+6V70KcC+T9bz0nDyplpny8wzty1pFRePXQ2IwE8WD9DPgdtN2EiBWBFvMoEXnm/V/xwddnOLHY1n9OGfQ1tP5x65pMW1PgIRjiYYew/MSj3bdkrfz/YkwmdumO+WF8lP753IVLQqEod74LWscDRg1cP9ap+jxWMOgBL6BjQt/JVC4qkIgfv1JBurG8E1PyCLKvkI83OlPknoYgvvtslDjzDDQe8W8H8L7c9cXGYT9qRa2ETPJAZ2OEyTvS65StPvysP//6AvH18wGh/hvfWLq+QtcvLhW5g9aIS3bH96Mf/tw09IygAApL0DvlkdxuqXh0oy7PLzaglmNbGzEBn4CQuM2b86IUjctYFrxD0bTU5LI0Xk/kk0RxhMEs4GCbplnbs7ZC1T74lX9jytvzpzQ45Y6CVentdf1OVrIHLmGkQV/a098mpc24xgfmKDmj2Ky3GFnjX0jIIi3pjbAF6dKW7zjrksR2Hpfm9PtEi/q3RLG3KA246vBrdRCrQWTjgL1kJ/gPM4FGe75Dl8OV3LC6VW5CNVBSMHycWVuTKN1fXpi6f9Jsuh81Atq0JVIAPetwyhEedeToV+sraIvSgnOhank+7WmSCH0eRhv8Ymr8TzwSQ7zxr7rc9dPzxqc129Egy1Xz9paRd8Eeqt+Y1lVNjwzwvRz/l08tnyCNgbhH88YUAU8O2brd0IhX24zlzCVzMbGQ7FLDR06nvbTsodvitR++tmxT6QU9QDqEafuGdTmned0b6fSaxg/mRwa6Hjj/9oH4QmhQ2/UnnWQALFWYbDFpxQfCb+QMrRAqgH02xJ3celdOIF5sbl+NhRHykPiK9O9l2TZbOyleH3ph019fADe05qh8rOOeNw72y+0gv6I7thSnxOaSXp895YGUelfmxTnA4nGKPBrfCrTW2P/3glKea6eiPX9Ms8P9xYMq4/iOzlAvY09qrLttIfDr+QiLtnUMqflM40w3LqgtQNxh3A954v0cebz4szpE2OWnkXpiWMsdnC8XuQLaDgBs1WxoudsBNxyNYQEwAZP6c0hx5dO0SVUTthGlu//cJOXC8X4bx8JouSAkCJsAZOXgW8NAdtcoq0i18sa9lA//NC/WLO+Jnzygbb3Kkvs2haIMgzKhwI0g1oxbrJWE+6dAs9CmAIPzvA7fORsESaxfcc2OVfOrDVXKsa1gOnhyQDrSbB1Ce0y+XoVBbsaBEFs3M/MlWDMvUfjoSNDvdyrRM7i++x8QxJjI/6Hs2rFkveqqZiDf1XFkAU7B55Tny6fpZSfep8XORyfC4IoEtWFp4BBsZAb4wpv45Iuh/1uvvY8CdVp8fpyP+rbH4iSIQrV81B2kfnuxPA/AlgJ9tf0/KUR8sqi6U8kInyn6rCvpMAs6hGDuJVHQ/CrL7bquRuZXjv8KSjmy0/tWTOfV0bmSAcjsh/7OewMC0Zjvp6OM1ja+J1MGVrL1ljt6YKb/ehuD93KvHVJfSjnaB06aJNvLWHRXWj86lF+mpF4IqRTo6WQHwAQULPB4EExtrYL7X6Wg8/utLq/lxpppZUfrQ+37tnTNq4/Ebk/lmoH793TOKeUbzd2EM35jIBvMZcfxgthvxhYfXizYwqmEnnkjxIf+/W7rQqoox0GjNdPdoASw0eZjRzxf4fG+H45L6/FQ6zVS8M2dd8u0nd8v9P/yH/H7nETnd40odZ/ib7NmHfPurP90lbx7uESdyeyPYtb8TjwbBHAiMLpDtcAoifvAa7/Hd0kNoVUyUnjhu9b4n10fANQX8f3BndTa2vXzxGmtxvBP5Nl33pW1KvUCnejWR2laEarQOvnnZvGKpm10olXgUWJhrFxs0lsCxLk9AulG9toBBb0Cj6a/d3qCsva1W5lTQZ6tl1fjEj0Fo+XOvHAUuMHksNiYOSTpnS/tOJAcLZvFhfvo1kyYk/Njd0i1vHxlAbAltc3VlP3C5MZ+kmq574E/n7YquhO+JsuPLgsWJjiaDZLylywk+uI1hMJzpKythK1wGGcrfRi6DYyjIDHgfYyUGBrDmZP6XzWZHO0NCzR6LfX3rb+/Rfwofw3RJPrV4gErErlwBKmDlE3AjDAYMBn1J3V8ykk+9NPaRCTQL/KmXeg16/6Nj1UkGH1iT/48AZBkMHhvCt5Qj4UCzW3NctswntRr5lgmo/DmVBzGeZzJ9WseQ+eFgoNkz5Frf2vzZy1Lz4wxBDM5QAvEZl/m32cJUE8y3kfkNlzXzyUr1XtBlztOMyVNuJ+Rvdg571u+7Apg/IoCM93dZD+S7mnA7f/W4PPdfKcwfEcCV74KU26HPd3vvvxLcTqImX4pWfiL+Cz7nf6ZEI8G/ut3eK8Lnp254pAOTevnK+G0yI4RFQvtzQ9r6vc0NEyvfL5Mt/g8XIbTVhsig+gAAAABJRU5ErkJggg==\"\n      width=\"48\"\n      height=\"24\"\n      alt=\"{{ 'asm.mainLogoLabel' | cxTranslate }}\"\n    />\n\n    <div class=\"asm-title\">\n      {{ 'asm.mainTitle' | cxTranslate }}\n    </div>\n  </div>\n  <div class=\"asm-bar-actions\">\n    <cx-asm-session-timer\n      *ngIf=\"(csAgentToken$ | async)?.access_token\"\n    ></cx-asm-session-timer>\n\n    <a\n      class=\"close\"\n      title=\"{{ 'asm.hideUi' | cxTranslate }}\"\n      *ngIf=\"\n        !(csAgentToken$ | async)?.access_token &&\n        !(csAgentTokenLoading$ | async)\n      \"\n      (click)=\"hideUi()\"\n    ></a>\n\n    <a\n      class=\"logout\"\n      title=\"{{ 'asm.logout' | cxTranslate }}\"\n      *ngIf=\"(csAgentToken$ | async)?.access_token\"\n      (click)=\"logout()\"\n    >\n    </a>\n  </div>\n</div>\n\n<ng-container *ngIf=\"(csAgentToken$ | async)?.access_token; else showLoginForm\">\n  <cx-customer-emulation\n    *ngIf=\"customer$ | async as customer; else showCustomerSelection\"\n  ></cx-customer-emulation>\n  <ng-template #showCustomerSelection>\n    <cx-customer-selection\n      (submitEvent)=\"startCustomerEmulationSession($event)\"\n    ></cx-customer-selection>\n  </ng-template>\n</ng-container>\n\n<ng-template #showLoginForm>\n  <cx-csagent-login-form\n    (submitEvent)=\"loginCustomerSupportAgent($event)\"\n    [csAgentTokenLoading]=\"csAgentTokenLoading$ | async\"\n  ></cx-csagent-login-form>\n</ng-template>\n",
            encapsulation: ViewEncapsulation.None,
            styles: ["cx-asm-main-ui{font-family:Arial,sans-serif;font-size:14px;width:100%;display:flex;flex-direction:column}cx-asm-main-ui .close,cx-asm-main-ui .logout{cursor:pointer;width:16px;height:16px}cx-asm-main-ui .close{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='white' d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'/%3E%3C/svg%3E\")}cx-asm-main-ui .logout{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23d1e3ff' d='M11,2.7c1.2,0.6,2.2,1.5,2.9,2.6c1.3,1.9,1.5,4.4,0.6,6.5c-0.3,0.8-0.8,1.6-1.5,2.2c-0.6,0.6-1.4,1.1-2.2,1.5 C9.9,15.8,9,16,8,16c-0.9,0-1.9-0.2-2.7-0.5c-0.8-0.4-1.6-0.9-2.2-1.5c-0.6-0.6-1.1-1.4-1.5-2.2C0.7,9.6,0.9,7.2,2.1,5.3 c0.7-1.1,1.7-2,2.9-2.6v1.1C4.1,4.3,3.3,5.1,2.8,6C2.3,6.9,2,7.9,2,9c0,1.6,0.6,3.2,1.8,4.3c0.5,0.5,1.2,1,1.9,1.3 c1.5,0.6,3.2,0.6,4.7,0c0.7-0.3,1.4-0.7,1.9-1.3C13.4,12.1,14,10.6,14,9c0-1.1-0.3-2.1-0.8-3c-0.5-0.9-1.3-1.7-2.2-2.2 C11,3.8,11,2.7,11,2.7z M8,9C7.7,9,7.5,8.9,7.3,8.7C7.1,8.5,7,8.3,7,8V1c0-0.3,0.1-0.5,0.3-0.7c0.4-0.4,1-0.4,1.4,0 C8.9,0.5,9,0.7,9,1v7c0,0.3-0.1,0.5-0.3,0.7C8.5,8.9,8.2,9,8,9z'/%3E%3C/svg%3E%0A\")}cx-asm-main-ui button{padding:0 12px;white-space:nowrap;border-radius:4px;height:36px;font-weight:400;border-style:solid;border-width:1px}cx-asm-main-ui button:disabled{opacity:.4;cursor:not-allowed}cx-asm-main-ui .spinner{display:flex;justify-content:center;width:100%;color:#0a6ed1}cx-asm-main-ui .spinner>div{width:8px;height:8px;margin:6px;border-radius:100%;background-color:currentColor;-webkit-animation:1s infinite spinner-dots-pulse;animation:1s infinite spinner-dots-pulse}cx-asm-main-ui .spinner>div:nth-child(1){-webkit-animation-delay:-.2s;animation-delay:-.2s}@-webkit-keyframes spinner-dots-pulse{0%,100%,60%{transform:scale(1)}30%{transform:scale(2)}}@keyframes spinner-dots-pulse{0%,100%,60%{transform:scale(1)}30%{transform:scale(2)}}cx-asm-main-ui.hidden{display:none}cx-asm-main-ui .asm-bar{color:#fff;background-color:#354a5f;height:48px;display:flex;padding:0 32px;justify-content:space-between;z-index:1}cx-asm-main-ui .asm-bar-branding{display:flex;align-items:center}cx-asm-main-ui .asm-bar-branding .logo{-webkit-margin-end:8px;margin-inline-end:8px}cx-asm-main-ui .asm-bar-branding .asm-title{font-size:16px;font-weight:700}cx-asm-main-ui .asm-bar-actions{display:flex;justify-content:flex-end;align-items:center}cx-asm-main-ui>:nth-child(2){margin:32px;display:flex;width:calc(100vw - 4rem)}@media (min-width:767px){cx-asm-main-ui>:nth-child(2){width:50vw}}cx-asm-main-ui input{outline:0;border:1px solid #89919a;color:#32363a;background-color:#fff;border-radius:4px;padding:0 12px;height:36px}cx-asm-main-ui input:focus{box-shadow:0 0 0 1px #fafafa}cx-asm-main-ui input:hover{border-color:#085caf}cx-asm-main-ui input::-webkit-input-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input::-moz-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input:-ms-input-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input::-ms-input-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input::placeholder{color:#74777a;font-style:italic}@media (max-width:575px){cx-asm-main-ui .asm-bar-branding .asm-title{display:none}cx-asm-main-ui .asm-alert{margin-top:30px}}"]
        })
    ], AsmMainUiComponent);
    return AsmMainUiComponent;
}());

/**
 * The AsmEnablerService is used to enable ASM for those scenario's
 * where it's actually used. This service is added to avoid any polution
 * of the UI and runtime performance for the ordinary production user.
 */
var AsmEnablerService = /** @class */ (function () {
    function AsmEnablerService(location, winRef, componentFactoryResolver, outletService) {
        this.location = location;
        this.winRef = winRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.outletService = outletService;
        /** indicates whether the ASM UI has been added already */
        this.isUiAdded = false;
    }
    /**
     * Loads the ASM UI if needed. The ASM UI will be added based on the
     * existence of a URL parameter or previous usage given by local storage.
     */
    AsmEnablerService.prototype.load = function () {
        if (this.isEnabled()) {
            this.addUi();
        }
    };
    /**
     * Indicates whether the ASM module is enabled.
     */
    AsmEnablerService.prototype.isEnabled = function () {
        if (this.isLaunched() && !this.isUsedBefore()) {
            if (this.winRef.localStorage) {
                this.winRef.localStorage.setItem(ASM_ENABLED_LOCAL_STORAGE_KEY, 'true');
            }
        }
        return this.isLaunched() || this.isUsedBefore();
    };
    /**
     * Indicates whether ASM is launched through the URL,
     * using the asm flag in the URL.
     */
    AsmEnablerService.prototype.isLaunched = function () {
        var params = this.location.path().split('?')[1];
        return params && params.split('&').includes('asm=true');
    };
    /**
     * Evaluates local storage where we persist the usage of ASM.
     */
    AsmEnablerService.prototype.isUsedBefore = function () {
        return (this.winRef.localStorage &&
            this.winRef.localStorage.getItem(ASM_ENABLED_LOCAL_STORAGE_KEY) === 'true');
    };
    /**
     * Adds the ASM UI by using the `cx-storefront` outlet.
     */
    AsmEnablerService.prototype.addUi = function () {
        if (this.isUiAdded) {
            return;
        }
        var factory = this.componentFactoryResolver.resolveComponentFactory(AsmMainUiComponent);
        this.outletService.add('cx-storefront', factory, OutletPosition.BEFORE);
        this.isUiAdded = true;
    };
    AsmEnablerService.ctorParameters = function () { return [
        { type: Location },
        { type: WindowRef },
        { type: ComponentFactoryResolver },
        { type: OutletService }
    ]; };
    AsmEnablerService.ɵprov = ɵɵdefineInjectable({ factory: function AsmEnablerService_Factory() { return new AsmEnablerService(ɵɵinject(Location), ɵɵinject(WindowRef), ɵɵinject(ComponentFactoryResolver), ɵɵinject(OutletService)); }, token: AsmEnablerService, providedIn: "root" });
    AsmEnablerService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AsmEnablerService);
    return AsmEnablerService;
}());

/**
 * The ASM loader module takes care of loading the ASM UI
 * only in case there's a reason to do so.
 */
var AsmLoaderModule = /** @class */ (function () {
    function AsmLoaderModule() {
    }
    AsmLoaderModule = __decorate([
        NgModule({
            imports: [CommonModule, PageComponentModule],
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: asmFactory,
                    deps: [AsmEnablerService],
                    multi: true,
                },
            ],
        })
    ], AsmLoaderModule);
    return AsmLoaderModule;
}());
/**
 *
 * We do not like to block the UI, which is why we delgate loading of ASM
 * to a real component; the router and state aren't available in an optimized
 * way during the APP_INITIALIZER.
 */
function asmFactory(asmEnablerService) {
    var isReady = function () {
        asmEnablerService.load();
    };
    return isReady;
}

var AsmSessionTimerComponent = /** @class */ (function () {
    function AsmSessionTimerComponent(config, asmComponentService, authService, routingService, changeDetectorRef) {
        this.config = config;
        this.asmComponentService = asmComponentService;
        this.authService = authService;
        this.routingService = routingService;
        this.changeDetectorRef = changeDetectorRef;
        this.subscriptions = new Subscription();
        this.maxStartDelayInSeconds = 60000;
    }
    AsmSessionTimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timeLeft = this.getTimerStartDelayInSeconds();
        this.interval = setInterval(function () {
            if (_this.timeLeft > 0) {
                _this.timeLeft--;
            }
            else {
                clearInterval(_this.interval);
                _this.asmComponentService.logoutCustomerSupportAgentAndCustomer();
            }
            _this.changeDetectorRef.markForCheck();
        }, 1000);
        this.resetOnNavigate();
        this.resetOnCustomerSessionChange();
    };
    AsmSessionTimerComponent.prototype.resetOnNavigate = function () {
        var _this = this;
        this.subscriptions.add(this.routingService.isNavigating().subscribe(function (isNavigating) {
            if (isNavigating) {
                _this.resetTimer();
            }
        }));
    };
    AsmSessionTimerComponent.prototype.resetOnCustomerSessionChange = function () {
        var _this = this;
        this.subscriptions.add(this.authService
            .getOccUserId()
            .pipe(distinctUntilChanged())
            .subscribe(function (_) { return _this.resetTimer(); }));
    };
    AsmSessionTimerComponent.prototype.resetTimer = function () {
        if (this.timeLeft > 0) {
            this.timeLeft = this.getTimerStartDelayInSeconds();
        }
    };
    AsmSessionTimerComponent.prototype.getTimerStartDelayInSeconds = function () {
        if (this.config.asm.agentSessionTimer.startingDelayInSeconds >
            this.maxStartDelayInSeconds) {
            return this.maxStartDelayInSeconds;
        }
        else {
            return this.config.asm.agentSessionTimer.startingDelayInSeconds;
        }
    };
    AsmSessionTimerComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    AsmSessionTimerComponent.ctorParameters = function () { return [
        { type: AsmConfig },
        { type: AsmComponentService },
        { type: AuthService },
        { type: RoutingService },
        { type: ChangeDetectorRef }
    ]; };
    AsmSessionTimerComponent = __decorate([
        Component({
            selector: 'cx-asm-session-timer',
            template: "<span class=\"label\">{{ 'asm.agentSessionTimer.label' | cxTranslate }}:</span>\n<span class=\"time\"\n  >{{ timeLeft | formatTimer }}\n  {{ 'asm.agentSessionTimer.minutes' | cxTranslate }}</span\n>\n<a\n  class=\"reset\"\n  title=\"{{ 'asm.agentSessionTimer.reset' | cxTranslate }}\"\n  (click)=\"resetTimer()\"\n>\n</a>\n",
            encapsulation: ViewEncapsulation.None,
            styles: ["cx-asm-session-timer{display:flex;align-items:center;height:16px;margin:0 15px}cx-asm-session-timer .label{margin:0 6px}@media (max-width:575px){cx-asm-session-timer .label{display:none}}cx-asm-session-timer .time{font-weight:600}cx-asm-session-timer .reset{margin:0 15px;cursor:pointer;width:16px;height:16px;background:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23d1e3ff' d='M14.9,7.5l-1,0.2c0.2,0.9,0.1,1.7-0.1,2.5c-0.3,1-0.8,2-1.5,2.7c-1.1,1.1-2.7,1.8-4.2,1.8 c-0.8,0-1.5-0.1-2.3-0.4c-1.5-0.6-2.7-1.8-3.3-3.3C2.1,10.2,2,9.5,2,8.7c0-1.6,0.7-3.1,1.8-4.3c0.7-0.8,1.7-1.3,2.7-1.5 c1-0.3,2-0.2,3,0l0,0v-1c-1-0.2-2.1-0.2-3.1,0C4.2,2.4,2.4,4,1.5,6.1C1.2,6.9,1,7.8,1,8.7c0,0.9,0.2,1.8,0.5,2.6 c0.4,0.9,0.9,1.7,1.5,2.3c0.7,0.7,1.4,1.2,2.3,1.5c0.8,0.3,1.7,0.5,2.6,0.5c0.9,0,1.8-0.2,2.6-0.5c2.1-0.9,3.7-2.7,4.2-5 C15,9.3,15,8.4,14.9,7.5z'/%3E%3Cpolygon fill='%23d1e3ff' points='11.5,2.8 9.2,4.5 9.7,0.5 '/%3E%3C/svg%3E%0A\") center center no-repeat}"]
        })
    ], AsmSessionTimerComponent);
    return AsmSessionTimerComponent;
}());

var FormatTimerPipe = /** @class */ (function () {
    function FormatTimerPipe() {
    }
    FormatTimerPipe.prototype.transform = function (totalSeconds) {
        if (totalSeconds < 0) {
            totalSeconds = 0;
        }
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds % 60;
        var zeroPaddedMinutes;
        if (minutes < 10) {
            zeroPaddedMinutes = ('00' + minutes).slice(-2);
        }
        else {
            zeroPaddedMinutes = minutes + '';
        }
        var zeroPaddedSeconds = ('00' + seconds).slice(-2);
        return zeroPaddedMinutes + ":" + zeroPaddedSeconds;
    };
    FormatTimerPipe = __decorate([
        Pipe({
            name: 'formatTimer',
        })
    ], FormatTimerPipe);
    return FormatTimerPipe;
}());

/**
 * Utility class when working with forms.
 */
var FormUtils = /** @class */ (function () {
    function FormUtils() {
    }
    /**
     *
     * Validates a field of the given form group
     *
     * If the field is NOT valid (or invalid), the method returns `true`.
     *
     * @param form Form with fields to check
     * @param formControlName Name of the form field to check
     * @param submitted Has the form been submitted
     */
    FormUtils.isNotValidField = function (form, formControlName, submitted) {
        var control = form.get(formControlName);
        return control.invalid && (submitted || (control.touched && control.dirty));
    };
    return FormUtils;
}());

var CSAgentLoginFormComponent = /** @class */ (function () {
    function CSAgentLoginFormComponent(fb) {
        this.fb = fb;
        this.submitClicked = false;
        this.csAgentTokenLoading = false;
        this.submitEvent = new EventEmitter();
    }
    CSAgentLoginFormComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            userId: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    };
    CSAgentLoginFormComponent.prototype.onSubmit = function () {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submitEvent.emit({
            userId: this.form.controls.userId.value,
            password: this.form.controls.password.value,
        });
    };
    CSAgentLoginFormComponent.prototype.isNotValid = function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    };
    CSAgentLoginFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    __decorate([
        Input()
    ], CSAgentLoginFormComponent.prototype, "csAgentTokenLoading", void 0);
    __decorate([
        Output()
    ], CSAgentLoginFormComponent.prototype, "submitEvent", void 0);
    CSAgentLoginFormComponent = __decorate([
        Component({
            selector: 'cx-csagent-login-form',
            template: "<form (submit)=\"onSubmit()\" [formGroup]=\"form\" *ngIf=\"!csAgentTokenLoading\">\n  <label>\n    <input\n      type=\"text\"\n      [class.is-invalid]=\"isNotValid('userId')\"\n      formControlName=\"userId\"\n      placeholder=\"{{ 'asm.loginForm.userId.label' | cxTranslate }}\"\n    />\n    <div class=\"invalid-feedback\" *ngIf=\"isNotValid('userId')\">\n      <span>{{ 'asm.loginForm.userId.required' | cxTranslate }}</span>\n    </div>\n  </label>\n\n  <label>\n    <input\n      type=\"password\"\n      [class.is-invalid]=\"isNotValid('password')\"\n      placeholder=\"{{ 'asm.loginForm.password.label' | cxTranslate }}\"\n      formControlName=\"password\"\n    />\n    <div class=\"invalid-feedback\" *ngIf=\"isNotValid('password')\">\n      <span>{{ 'asm.loginForm.password.required' | cxTranslate }}</span>\n    </div>\n  </label>\n  <button type=\"submit\">\n    {{ 'asm.loginForm.submit' | cxTranslate }}\n  </button>\n</form>\n\n<div\n  *ngIf=\"csAgentTokenLoading\"\n  class=\"spinner\"\n  aria-hidden=\"false\"\n  aria-label=\"Loading\"\n>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n",
            encapsulation: ViewEncapsulation.None,
            styles: ["cx-csagent-login-form .invalid-feedback{display:block}cx-csagent-login-form form{display:flex;width:100%}@media (max-width:575px){cx-csagent-login-form form{flex-direction:column}cx-csagent-login-form form>*{margin-bottom:12px}}cx-csagent-login-form form label input{width:100%}cx-csagent-login-form button[type=submit]{color:#fff;border-color:#0a6ed1;background-color:#0a6ed1}cx-csagent-login-form button[type=submit]:hover{background-color:#085caf}@media (min-width:575px){cx-csagent-login-form label:nth-child(2){margin:0 8px}}"]
        })
    ], CSAgentLoginFormComponent);
    return CSAgentLoginFormComponent;
}());

var CustomerEmulationComponent = /** @class */ (function () {
    function CustomerEmulationComponent(asmComponentService, userService) {
        this.asmComponentService = asmComponentService;
        this.userService = userService;
        this.subscription = new Subscription();
    }
    CustomerEmulationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription.add(this.userService.get().subscribe(function (user) { return (_this.customer = user); }));
        this.isCustomerEmulationSessionInProgress$ = this.asmComponentService.isCustomerEmulationSessionInProgress();
    };
    CustomerEmulationComponent.prototype.logoutCustomer = function () {
        this.asmComponentService.logoutCustomer();
    };
    CustomerEmulationComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CustomerEmulationComponent.ctorParameters = function () { return [
        { type: AsmComponentService },
        { type: UserService }
    ]; };
    CustomerEmulationComponent = __decorate([
        Component({
            selector: 'cx-customer-emulation',
            template: "<ng-container\n  *ngIf=\"\n    isCustomerEmulationSessionInProgress$ | async;\n    else realCustomerSession\n  \"\n>\n  <input\n    formcontrolname=\"customer\"\n    type=\"text\"\n    disabled=\"true\"\n    placeholder=\"{{ customer?.name }}, {{ customer?.uid }}\"\n  />\n  <button (click)=\"logoutCustomer()\">\n    {{ 'asm.endSession' | cxTranslate }}\n  </button>\n</ng-container>\n\n<ng-template #realCustomerSession>\n  <div class=\"asm-alert\" role=\"alert\">\n    {{ 'asm.standardSessionInProgress' | cxTranslate }}\n  </div>\n</ng-template>\n",
            encapsulation: ViewEncapsulation.None,
            styles: ["cx-customer-emulation{display:flex}@media (max-width:575px){cx-customer-emulation{flex-direction:column}cx-customer-emulation>*{margin-bottom:12px}}cx-customer-emulation button{padding-left:35px;color:#b00;border-color:#b00;background:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23bb0000' d='M14.8,8c0-3.7-3-6.8-6.8-6.8S1.3,4.2,1.3,8s3,6.8,6.8,6.8S14.8,11.7,14.8,8z M2.6,8c0-3,2.4-5.5,5.5-5.5S13.5,5,13.5,8 s-2.4,5.5-5.5,5.5S2.6,11,2.6,8z M10.7,5.8v4.4c0,0.2-0.2,0.4-0.4,0.4H5.9c-0.2,0-0.4-0.2-0.4-0.4V5.8c0-0.2,0.2-0.4,0.4-0.4h4.4 C10.5,5.4,10.7,5.6,10.7,5.8z'/%3E%3C/svg%3E%0A\") 10px center no-repeat}@media (min-width:575px){cx-customer-emulation input{flex:1}cx-customer-emulation button{-webkit-margin-start:8px;margin-inline-start:8px}}cx-customer-emulation button:hover{background:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='white' d='M14.8,8c0-3.7-3-6.8-6.8-6.8S1.3,4.2,1.3,8s3,6.8,6.8,6.8S14.8,11.7,14.8,8z M2.6,8c0-3,2.4-5.5,5.5-5.5S13.5,5,13.5,8 s-2.4,5.5-5.5,5.5S2.6,11,2.6,8z M10.7,5.8v4.4c0,0.2-0.2,0.4-0.4,0.4H5.9c-0.2,0-0.4-0.2-0.4-0.4V5.8c0-0.2,0.2-0.4,0.4-0.4h4.4 C10.5,5.4,10.7,5.6,10.7,5.8z'/%3E%3C/svg%3E%0A\") 10px center no-repeat #b00;color:#fff;fill:#fff}.asm-alert{padding:9px 12px;border-radius:4px;border:1px solid #89919a;background-color:#f4f4f4;color:#32363a;text-align:center;flex:1}"]
        })
    ], CustomerEmulationComponent);
    return CustomerEmulationComponent;
}());

var CustomerSelectionComponent = /** @class */ (function () {
    function CustomerSelectionComponent(fb, asmService, config) {
        this.fb = fb;
        this.asmService = asmService;
        this.config = config;
        this.subscription = new Subscription();
        this.submitEvent = new EventEmitter();
    }
    CustomerSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            searchTerm: [''],
        });
        this.asmService.customerSearchReset();
        this.searchResultsLoading$ = this.asmService.getCustomerSearchResultsLoading();
        this.searchResults = this.asmService.getCustomerSearchResults();
        this.subscription.add(this.form.controls.searchTerm.valueChanges
            .pipe(debounceTime(300))
            .subscribe(function (searchTermValue) {
            _this.handleSearchTerm(searchTermValue);
        }));
    };
    CustomerSelectionComponent.prototype.handleSearchTerm = function (searchTermValue) {
        if (Boolean(this.selectedCustomer) &&
            searchTermValue !== this.selectedCustomer.name) {
            this.selectedCustomer = undefined;
        }
        if (Boolean(this.selectedCustomer)) {
            return;
        }
        this.asmService.customerSearchReset();
        if (searchTermValue.trim().length >= 3) {
            this.asmService.customerSearch({
                query: searchTermValue,
                pageSize: this.config.asm.customerSearch.maxResults,
            });
        }
    };
    CustomerSelectionComponent.prototype.selectCustomerFromList = function (customer) {
        this.selectedCustomer = customer;
        this.form.controls.searchTerm.setValue(this.selectedCustomer.name);
        this.asmService.customerSearchReset();
    };
    CustomerSelectionComponent.prototype.onSubmit = function () {
        if (Boolean(this.selectedCustomer)) {
            this.submitEvent.emit({ customerId: this.selectedCustomer.customerId });
        }
    };
    CustomerSelectionComponent.prototype.onDocumentClick = function (event) {
        if (Boolean(this.resultList)) {
            if (this.resultList.nativeElement.contains(event.target) ||
                this.searchTerm.nativeElement.contains(event.target)) {
                return;
            }
            else {
                this.asmService.customerSearchReset();
            }
        }
    };
    CustomerSelectionComponent.prototype.closeResults = function () {
        this.asmService.customerSearchReset();
    };
    CustomerSelectionComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.asmService.customerSearchReset();
    };
    CustomerSelectionComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: AsmService },
        { type: AsmConfig }
    ]; };
    __decorate([
        Output()
    ], CustomerSelectionComponent.prototype, "submitEvent", void 0);
    __decorate([
        ViewChild('resultList')
    ], CustomerSelectionComponent.prototype, "resultList", void 0);
    __decorate([
        ViewChild('searchTerm')
    ], CustomerSelectionComponent.prototype, "searchTerm", void 0);
    CustomerSelectionComponent = __decorate([
        Component({
            selector: 'cx-customer-selection',
            template: "<form (submit)=\"onSubmit()\" [formGroup]=\"form\">\n  <input\n    #searchTerm\n    type=\"text\"\n    formControlName=\"searchTerm\"\n    placeholder=\"{{ 'asm.customerSearch.searchTerm.label' | cxTranslate }}\"\n  />\n  <button type=\"submit\" [disabled]=\"!selectedCustomer\">\n    {{ 'asm.customerSearch.submit' | cxTranslate }}\n  </button>\n</form>\n\n<div *ngIf=\"searchResults | async as results\" class=\"asm-results\" #resultList>\n  <a\n    *ngFor=\"let result of results.entries\"\n    (click)=\"selectCustomerFromList(result)\"\n    ><span class=\"result-name\">{{ result.name }}</span>\n    <span class=\"result-id\">{{ result.uid }}</span></a\n  >\n  <a\n    (click)=\"closeResults()\"\n    *ngIf=\"\n      !(searchResultsLoading$ | async) &&\n      searchTerm.value.length >= 3 &&\n      !!results.entries &&\n      results.entries.length <= 0\n    \"\n    >{{ 'asm.customerSearch.noMatch' | cxTranslate }}</a\n  >\n</div>\n\n<div class=\"asm-results\" *ngIf=\"searchResultsLoading$ | async\">\n  <div class=\"spinner\" aria-hidden=\"false\" aria-label=\"Loading\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</div>\n",
            encapsulation: ViewEncapsulation.None,
            host: {
                '(document:click)': 'onDocumentClick($event)',
            },
            styles: ["cx-customer-selection button[type=submit]{border-color:#0a7e3e;color:#fff;padding-left:35px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAKtmlDQ1BEaXNwbGF5AABIx62Wd1BT+RbHf/fe9EILICAl9N6lSwk9dOkgKiEJJJQYEoKIDZHFFVwLKiKgrugiRcFGkbUgFiwsgg2sC7IoqOtiwYbKu8Aj7L6Z98ebeWfm3N9nzpzf+Z1z7/3NfAGgApZQmA7LAZAhyBKF+3nSY+Pi6fghAAEYEIE+cGaxxUJGWFgQQG12/ad9uIdmo3bbfKoW+N9MnsMVswGAwlBO4ojZGSifQv0ZWyjKAgCpROO6K7KEU9yOsqIIbRDlO1OcMsMjU5w0w1+ncyLDvQDAoFMRKCyWKAUAijoap2ezU9A6lIUoWwk4fAHKU/26sXksDspHUDbLyFg+xf0oGyX9rU7KP2omSWuyWClSnpll2gjefLEwnbUS/L8tI10ye4YB6hSeyD8cXWXQd9aftjxQyoKkkNBZ5nOm86eZJ/GPmmW22Ct+ljks70Dp3vSQoFlO5vsypXWymJGzzBX7RMyyaHm49KxkkRdjllmiuXMlaVHSOI/LlNbP5UXGzHI2PzpklsVpEYFzOV7SuEgSLu2fK/DznDvXVzp7hvhv8/KZ0r1ZvEh/6eysuf65AsZcTXGstDcO19tnLidKmi/M8pSeJUwPk+Zz0/2kcXF2hHRvFvpDzu0Nk77DVFZA2CwDfxAG6MAGWIEcwAcgi5uTNTWE13LhShE/hZdFZ6C3i0tnCtgWZnQbK2snAKbu6syv8K5/+g5CyoS5WGY+AE7ofUCC52JLFwNwvAEAhdC5mMFn9Mqg3+DsdrZElD0Tw0w9sIAEZIEiUAWaQBcYAXO0O3vgAjyADwgAoSASxIGlgA14IAOIwAqwGqwHhaAYbAO7QDnYDw6CGnAUnAAt4Ay4AK6AG6AH3AUPwQAYBi/BGPgAJiAIwkNUiAapQlqQPmQK2UCOkBvkAwVB4VAclAilQAJIAq2GNkDFUAlUDh2AaqHj0GnoAnQN6oXuQ4PQKPQW+gIjMAVWhDVgA9gSdoQZcCAcCS+BU+BMOBcugLfAZXAVfARuhi/AN+C78AD8Eh5HAEJGlBFtxBxxRLyQUCQeSUZEyFqkCClFqpAGpA3pRG4jA8gr5DMGh6Fh6BhzjAvGHxOFYWMyMWsxmzHlmBpMM+YS5jZmEDOG+Y6lYtWxplhnLBMbi03BrsAWYkux1dgm7GXsXeww9gMOh1PGGeIccP64OFwqbhVuM24vrhHXjuvFDeHG8Xi8Kt4U74oPxbPwWfhC/B78Efx5/C38MP4TgUzQItgQfAnxBAEhn1BKqCOcI9wiPCdMEOWI+kRnYiiRQ1xJ3Eo8RGwj3iQOEydI8iRDkispkpRKWk8qIzWQLpMekd6RyWQdshN5EZlPziOXkY+Rr5IHyZ8pChQTihclgSKhbKEcprRT7lPeUalUA6oHNZ6aRd1CraVepD6hfpKhyVjIMGU4MutkKmSaZW7JvJYlyurLMmSXyubKlsqelL0p+0qOKGcg5yXHklsrVyF3Wq5PblyeJm8tHyqfIb9Zvk7+mvyIAl7BQMFHgaNQoHBQ4aLCEA2h6dK8aGzaBtoh2mXasCJO0VCRqZiqWKx4VLFbcUxJQWmBUrRSjlKF0lmlAWVE2UCZqZyuvFX5hPI95S/zNOYx5nHnbZrXMO/WvI8q81U8VLgqRSqNKndVvqjSVX1U01S3q7aoPlbDqJmoLVJbobZP7bLaq/mK813ms+cXzT8x/4E6rG6iHq6+Sv2gepf6uIamhp+GUGOPxkWNV5rKmh6aqZo7Nc9pjmrRtNy0+Fo7tc5rvaAr0Rn0dHoZ/RJ9TFtd219bon1Au1t7QsdQJ0onX6dR57EuSddRN1l3p26H7piell6w3mq9er0H+kR9R32e/m79Tv2PBoYGMQYbDVoMRgxVDJmGuYb1ho+MqEbuRplGVUZ3jHHGjsZpxnuNe0xgEzsTnkmFyU1T2NTelG+617TXDGvmZCYwqzLrM6eYM8yzzevNBy2ULYIs8i1aLF5b6lnGW2637LT8bmVnlW51yOqhtYJ1gHW+dZv1WxsTG7ZNhc0dW6qtr+0621bbNwtMF3AX7FvQb0ezC7bbaNdh983ewV5k32A/6qDnkOhQ6dDnqOgY5rjZ8aoT1snTaZ3TGafPzvbOWc4nnP9yMXdJc6lzGVlouJC78NDCIVcdV5brAdcBN7pbotvPbgPu2u4s9yr3px66HhyPao/nDGNGKuMI47WnlafIs8nzo5ez1xqvdm/E28+7yLvbR8Enyqfc54mvjm+Kb73vmJ+d3yq/dn+sf6D/dv8+pgaTzaxljgU4BKwJuBRICYwILA98GmQSJApqC4aDA4J3BD8K0Q8RhLSEglBm6I7Qx2GGYZlhvy7CLQpbVLHoWbh1+OrwzghaxLKIuogPkZ6RWyMfRhlFSaI6omWjE6Jroz/GeMeUxAzEWsauib0RpxbHj2uNx8dHx1fHjy/2Wbxr8XCCXUJhwr0lhktyllxbqrY0fenZZbLLWMtOJmITYxLrEr+yQllVrPEkZlJl0hjbi72b/ZLjwdnJGeW6cku4z5Ndk0uSR1JcU3akjPLceaW8V3wvfjn/Tap/6v7Uj2mhaYfTJtNj0hszCBmJGacFCoI0waXlmstzlvcKTYWFwoFM58xdmWOiQFG1GBIvEbdmKaKiqEtiJPlBMpjtll2R/WlF9IqTOfI5gpyulSYrN618nuub+8sqzCr2qo7V2qvXrx5cw1hzYC20NmltxzrddQXrhvP88mrWk9anrf8t3yq/JP/9hpgNbQUaBXkFQz/4/VBfKFMoKuzb6LJx/4+YH/k/dm+y3bRn0/ciTtH1Yqvi0uKvm9mbr/9k/VPZT5Nbkrd0b7Xfum8bbptg273t7ttrSuRLckuGdgTvaN5J31m08/2uZbuulS4o3b+btFuye6AsqKx1j96ebXu+lvPK71Z4VjRWqlduqvy4l7P31j6PfQ37NfYX7//yM//n/gN+B5qrDKpKD+IOZh98dij6UOcvjr/UVqtVF1d/Oyw4PFATXnOp1qG2tk69bms9XC+pHz2ScKTnqPfR1gbzhgONyo3Fx8AxybEXxxOP3zsReKLjpOPJhlP6pyqbaE1FzVDzyuaxFl7LQGtca+/pgNMdbS5tTb9a/Hr4jPaZirNKZ7eeI50rODd5Pvf8eLuw/dWFlAtDHcs6Hl6MvXjn0qJL3ZcDL1+94nvlYiej8/xV16tnrjlfO33d8XrLDfsbzV12XU2/2f3W1G3f3XzT4WZrj1NPW+/C3nO33G9duO19+8od5p0bd0Pu9t6Lutffl9A30M/pH7mffv/Ng+wHEw/zHmEfFT2We1z6RP1J1e/GvzcO2A+cHfQe7Hoa8fThEHvo5R/iP74OFzyjPit9rvW8dsRm5Myo72jPi8Uvhl8KX068KvxT/s/K10avT/3l8VfXWOzY8BvRm8m3m9+pvjv8fsH7jvGw8ScfMj5MfCz6pPqp5rPj584vMV+eT6z4iv9a9s34W9v3wO+PJjMmJ4UsEWtaCiCow8nJALw9DAA1DgBaDwCkxTNaetqgGf0/TeC/8YzenjZ7AA55ABCJ6vkQdN2HukEeqklQD5uKewDY1lbq/zZxsq3NTC1yCypNSicn36GaBW8MwLe+ycmJlsnJb9Vosw8AaP8wo+GnTGcMlfreU9SdM5H3n1r6X/dYEDmGJmdAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGL2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIyNSIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjI3IiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wOS0yNVQxMjoyODo1MS0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iRGlzcGxheSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowZTIyOTVhMC0yYWY0LTQ2Y2UtOThlNy0zZTU2YTM0YjFkZjUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozYmMzNWI0YS0wNjkxLTRmNDEtODk5OC1lYWFmOTI2NGQ2NmMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZWE4Y2FhMC0yMGU1LTQzN2ItYmQ5YS03YjlmMGZiNmYyZTYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZWE4Y2FhMC0yMGU1LTQzN2ItYmQ5YS03YjlmMGZiNmYyZTYiIHN0RXZ0OndoZW49IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZTIyOTVhMC0yYWY0LTQ2Y2UtOThlNy0zZTU2YTM0YjFkZjUiIHN0RXZ0OndoZW49IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuzZx/kAAAEoSURBVDjLY/z//z8DNQATA5UAhkGNe+f8f/757f+09e2kORXkNWR86P75/zCw7cax/6o9If/R1WDDOA368/cvmH7/7dP/tHXt/8k2KGlNy/8dN4/DXbf95rH/anhch9Mgz/kFYE3p6zv+f/j+GSwGokF8sgwCYZBLQC6CAZBL0V1HlEEwnLquDRxmMNfFrmyAqyEpHd1+85jh5Zd3YDYfOzeDlrgi4ehHdpFYi8f/KcdW///7DxKTQAP/e8zLJ81rfgtL/j949wws9vvvn/+9h5f9F212/090YEetqP2/+Nx2eABfeHbrv/WMNNKj/8fvX2D6+++f/+t3z/ov2Ojyn6wECQJHHlz8bzgplrws0rBn9v9XX97/L9zS/5+vwYkoQ0CYcdCVRwBmUrSjUTYI3gAAAABJRU5ErkJggg==) 10px center no-repeat #0a7e3e}cx-customer-selection form{display:flex;width:100%}@media (min-width:575px){cx-customer-selection button[type=submit]{-webkit-margin-start:8px;margin-inline-start:8px}cx-customer-selection form input{flex:1}}@media (max-width:575px){cx-customer-selection form{flex-direction:column}cx-customer-selection form>*{margin-bottom:12px}}cx-customer-selection .spinner{height:42px;align-items:center}cx-customer-selection .asm-results{width:calc(100vw - 4rem);border:1px solid #89919a;position:absolute;z-index:11;margin-top:40px;box-shadow:0 5px 20px 0 #d9d9d9,0 2px 8px 0 #ededed;background-color:#fff;border-radius:4px;min-height:50px}cx-customer-selection .asm-results a{color:#51555a;display:flex;flex-direction:column;cursor:pointer;padding:10px}@media (min-width:767px){cx-customer-selection .asm-results,cx-customer-selection form{width:50vw}cx-customer-selection .asm-results a{flex-direction:row}}cx-customer-selection .asm-results a *{flex:1}cx-customer-selection .asm-results a:hover{color:#32363a;background-color:#fafafa}"]
        })
    ], CustomerSelectionComponent);
    return CustomerSelectionComponent;
}());

var AsmModule = /** @class */ (function () {
    function AsmModule() {
    }
    AsmModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                I18nModule,
                AsmModule$1.forRoot(),
                AsmLoaderModule,
            ],
            declarations: [
                AsmMainUiComponent,
                CSAgentLoginFormComponent,
                CustomerSelectionComponent,
                AsmSessionTimerComponent,
                FormatTimerPipe,
                CustomerEmulationComponent,
            ],
            entryComponents: [AsmMainUiComponent],
        })
    ], AsmModule);
    return AsmModule;
}());

var OrderDetailsService = /** @class */ (function () {
    function OrderDetailsService(userOrderService, routingService) {
        var _this = this;
        this.userOrderService = userOrderService;
        this.routingService = routingService;
        this.orderCode$ = this.routingService
            .getRouterState()
            .pipe(map(function (routingData) { return routingData.state.params.orderCode; }));
        this.orderLoad$ = this.orderCode$.pipe(tap(function (orderCode) {
            if (orderCode) {
                _this.userOrderService.loadOrderDetails(orderCode);
            }
            else {
                _this.userOrderService.clearOrderDetails();
            }
        }), shareReplay({ bufferSize: 1, refCount: true }));
    }
    OrderDetailsService.prototype.getOrderDetails = function () {
        var _this = this;
        return this.orderLoad$.pipe(switchMap(function () { return _this.userOrderService.getOrderDetails(); }));
    };
    OrderDetailsService.ctorParameters = function () { return [
        { type: UserOrderService },
        { type: RoutingService }
    ]; };
    OrderDetailsService.ɵprov = ɵɵdefineInjectable({ factory: function OrderDetailsService_Factory() { return new OrderDetailsService(ɵɵinject(UserOrderService), ɵɵinject(RoutingService)); }, token: OrderDetailsService, providedIn: "root" });
    OrderDetailsService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OrderDetailsService);
    return OrderDetailsService;
}());

var PromotionService = /** @class */ (function () {
    function PromotionService(cartService, orderDetailsService, checkoutService) {
        this.cartService = cartService;
        this.orderDetailsService = orderDetailsService;
        this.checkoutService = checkoutService;
    }
    PromotionService.prototype.getOrderPromotions = function (promotionLocation) {
        switch (promotionLocation) {
            case PromotionLocation.ActiveCart:
                return this.getOrderPromotionsFromCart();
            case PromotionLocation.Checkout:
                return this.getOrderPromotionsFromCheckout();
            case PromotionLocation.Order:
                return this.getOrderPromotionsFromOrder();
            default:
                return of([]);
        }
    };
    PromotionService.prototype.getOrderPromotionsFromCart = function () {
        var _this = this;
        return this.cartService
            .getActive()
            .pipe(map(function (cart) { return _this.getOrderPromotionsFromCartHelper(cart); }));
    };
    PromotionService.prototype.getOrderPromotionsFromCartHelper = function (cart) {
        var potentialPromotions = [];
        potentialPromotions.push.apply(potentialPromotions, __spread((cart.potentialOrderPromotions || [])));
        var appliedPromotions = [];
        appliedPromotions.push.apply(appliedPromotions, __spread((cart.appliedOrderPromotions || [])));
        return __spread(potentialPromotions, appliedPromotions);
    };
    PromotionService.prototype.getOrderPromotionsFromCheckout = function () {
        var _this = this;
        return this.checkoutService
            .getOrderDetails()
            .pipe(map(function (order) { return _this.getOrderPromotionsFromOrderHelper(order); }));
    };
    PromotionService.prototype.getOrderPromotionsFromOrder = function () {
        var _this = this;
        return this.orderDetailsService
            .getOrderDetails()
            .pipe(map(function (order) { return _this.getOrderPromotionsFromOrderHelper(order); }));
    };
    PromotionService.prototype.getOrderPromotionsFromOrderHelper = function (order) {
        var appliedOrderPromotions = [];
        appliedOrderPromotions.push.apply(appliedOrderPromotions, __spread((order.appliedOrderPromotions || [])));
        return appliedOrderPromotions;
    };
    PromotionService.prototype.getProductPromotionForEntry = function (item, promotionLocation) {
        var _this = this;
        switch (promotionLocation) {
            case PromotionLocation.ActiveCart:
                return this.cartService
                    .getActive()
                    .pipe(map(function (cart) {
                    return _this.getProductPromotion(item, cart.appliedProductPromotions || []);
                }));
            case PromotionLocation.Checkout:
                return this.checkoutService
                    .getOrderDetails()
                    .pipe(map(function (order) {
                    return _this.getProductPromotion(item, order.appliedProductPromotions || []);
                }));
            case PromotionLocation.Order:
                return this.orderDetailsService
                    .getOrderDetails()
                    .pipe(map(function (order) {
                    return _this.getProductPromotion(item, order.appliedProductPromotions || []);
                }));
        }
    };
    PromotionService.prototype.getProductPromotion = function (item, promotions) {
        var e_1, _a, e_2, _b;
        var entryPromotions = [];
        if (promotions && promotions.length > 0) {
            try {
                for (var promotions_1 = __values(promotions), promotions_1_1 = promotions_1.next(); !promotions_1_1.done; promotions_1_1 = promotions_1.next()) {
                    var promotion = promotions_1_1.value;
                    if (promotion.description &&
                        promotion.consumedEntries &&
                        promotion.consumedEntries.length > 0) {
                        try {
                            for (var _c = (e_2 = void 0, __values(promotion.consumedEntries)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var consumedEntry = _d.value;
                                if (this.isConsumedByEntry(consumedEntry, item)) {
                                    entryPromotions.push(promotion);
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (promotions_1_1 && !promotions_1_1.done && (_a = promotions_1.return)) _a.call(promotions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return entryPromotions;
    };
    PromotionService.prototype.isConsumedByEntry = function (consumedEntry, entry) {
        var e_3, _a;
        var consumedEntryNumber = consumedEntry.orderEntryNumber;
        if (entry.entries && entry.entries.length > 0) {
            try {
                for (var _b = __values(entry.entries), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var subEntry = _c.value;
                    if (subEntry.entryNumber === consumedEntryNumber) {
                        return true;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return false;
        }
        else {
            return consumedEntryNumber === entry.entryNumber;
        }
    };
    PromotionService.ctorParameters = function () { return [
        { type: CartService },
        { type: OrderDetailsService },
        { type: CheckoutService }
    ]; };
    PromotionService.ɵprov = ɵɵdefineInjectable({ factory: function PromotionService_Factory() { return new PromotionService(ɵɵinject(CartService), ɵɵinject(OrderDetailsService), ɵɵinject(CheckoutService)); }, token: PromotionService, providedIn: "root" });
    PromotionService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PromotionService);
    return PromotionService;
}());

var AddedToCartDialogComponent = /** @class */ (function () {
    function AddedToCartDialogComponent(modalService, cartService, promotionService) {
        this.modalService = modalService;
        this.cartService = cartService;
        this.promotionService = promotionService;
        this.iconTypes = ICON_TYPE;
        this.promotionLocation = PromotionLocation.ActiveCart;
        this.quantity = 0;
        this.modalIsOpen = false;
        this.form = new FormGroup({});
    }
    /**
     * Returns an observable formControl with the quantity of the cartEntry,
     * but also updates the entry in case of a changed value.
     * The quantity can be set to zero in order to remove the entry.
     */
    AddedToCartDialogComponent.prototype.getQuantityControl = function () {
        var _this = this;
        if (!this.quantityControl$) {
            this.quantityControl$ = this.entry$.pipe(filter(function (e) { return !!e; }), map(function (entry) { return _this.getFormControl(entry); }), switchMap(function () {
                return _this.form.valueChanges.pipe(
                // tslint:disable-next-line:deprecation
                startWith(null), tap(function (valueChange) {
                    if (valueChange) {
                        _this.cartService.updateEntry(valueChange.entryNumber, valueChange.quantity);
                        if (valueChange.quantity === 0) {
                            _this.dismissModal('Removed');
                        }
                    }
                    else {
                        _this.form.markAsPristine();
                    }
                }));
            }), map(function () { return _this.form.get('quantity'); }));
        }
        return this.quantityControl$;
    };
    AddedToCartDialogComponent.prototype.ngOnInit = function () {
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
    };
    AddedToCartDialogComponent.prototype.getFormControl = function (entry) {
        if (!this.form.get('quantity')) {
            var quantity = new FormControl(entry.quantity, { updateOn: 'blur' });
            this.form.addControl('quantity', quantity);
            var entryNumber = new FormControl(entry.entryNumber);
            this.form.addControl('entryNumber', entryNumber);
        }
        return this.form.get('quantity');
    };
    AddedToCartDialogComponent.prototype.dismissModal = function (reason) {
        this.modalService.dismissActiveModal(reason);
    };
    AddedToCartDialogComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: CartService },
        { type: PromotionService }
    ]; };
    __decorate([
        ViewChild('dialog', { read: ElementRef })
    ], AddedToCartDialogComponent.prototype, "dialog", void 0);
    AddedToCartDialogComponent = __decorate([
        Component({
            selector: 'cx-added-to-cart-dialog',
            template: "<div #dialog>\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"(loaded$ | async) || modalIsOpen; else loading\">\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{\n          (increment\n            ? 'addToCart.itemsIncrementedInYourCart'\n            : 'addToCart.itemsAddedToYourCart'\n          ) | cxTranslate\n        }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\" *ngIf=\"entry$ | async as entry\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-6\">\n          <cx-cart-item\n            [item]=\"entry\"\n            [compact]=\"true\"\n            [quantityControl]=\"getQuantityControl() | async\"\n            [promotionLocation]=\"promotionLocation\"\n            (view)=\"dismissModal('Product selected')\"\n          ></cx-cart-item>\n        </div>\n        <!-- Separator -->\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n        <!-- Total container -->\n        <div class=\"cx-dialog-actions col-sm-12 col-md-6\">\n          <div class=\"cx-dialog-total\" *ngIf=\"cart$ | async as cart\">\n            <div>\n              {{\n                'cartItems.cartTotal'\n                  | cxTranslate: { count: cart.deliveryItemsQuantity }\n              }}\n            </div>\n\n            <div>{{ cart.subTotal?.formattedValue }}</div>\n          </div>\n\n          <!-- Promotions -->\n          <ng-container *cxFeatureLevel=\"'1.5'\">\n            <div\n              class=\"cx-dialog-promotions\"\n              *ngIf=\"orderPromotions$ | async as orderPromotions\"\n            >\n              <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n            </div>\n          </ng-container>\n\n          <!-- Actions -->\n          <div class=\"cx-dialog-buttons\">\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n              class=\"btn btn-primary\"\n              cxAutoFocus\n              (click)=\"!form.dirty && dismissModal('View Cart click')\"\n              >{{ 'addToCart.viewCart' | cxTranslate }}</a\n            >\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'checkout' } | cxUrl\"\n              class=\"btn btn-secondary\"\n              (click)=\"!form.dirty && dismissModal('Proceed To Checkout click')\"\n              >{{ 'addToCart.proceedToCheckout' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.updatingCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"col-sm-12\"><cx-spinner></cx-spinner></div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
        })
    ], AddedToCartDialogComponent);
    return AddedToCartDialogComponent;
}());

var AddToCartComponent = /** @class */ (function () {
    function AddToCartComponent(cartService, modalService, currentProductService, cd) {
        this.cartService = cartService;
        this.modalService = modalService;
        this.currentProductService = currentProductService;
        this.cd = cd;
        this.showQuantity = true;
        this.hasStock = false;
        this.quantity = 1;
        this.increment = false;
        this.addToCartForm = new FormGroup({
            quantity: new FormControl(1),
        });
    }
    AddToCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.product) {
            this.productCode = this.product.code;
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
            this.setStockInfo(this.product);
            this.cd.markForCheck();
        }
        else if (this.productCode) {
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
            // force hasStock and quantity for the time being, as we do not have more info:
            this.quantity = 1;
            this.hasStock = true;
            this.cd.markForCheck();
        }
        else {
            this.subscription = this.currentProductService
                .getProduct()
                .pipe(filter(Boolean))
                .subscribe(function (product) {
                _this.productCode = product.code;
                _this.setStockInfo(product);
                _this.cartEntry$ = _this.cartService.getEntry(_this.productCode);
                _this.cd.markForCheck();
            });
        }
    };
    AddToCartComponent.prototype.setStockInfo = function (product) {
        this.quantity = 1;
        this.hasStock =
            product.stock && product.stock.stockLevelStatus !== 'outOfStock';
        if (this.hasStock && product.stock.stockLevel) {
            this.maxQuantity = product.stock.stockLevel;
        }
    };
    AddToCartComponent.prototype.updateCount = function (value) {
        this.quantity = value;
    };
    AddToCartComponent.prototype.addToCart = function () {
        var _this = this;
        var quantity = this.addToCartForm.get('quantity').value;
        if (!this.productCode || quantity <= 0) {
            return;
        }
        // check item is already present in the cart
        // so modal will have proper header text displayed
        this.cartService
            .getEntry(this.productCode)
            .subscribe(function (entry) {
            if (entry) {
                _this.increment = true;
            }
            _this.openModal();
            _this.cartService.addEntry(_this.productCode, quantity);
            _this.increment = false;
        })
            .unsubscribe();
    };
    AddToCartComponent.prototype.openModal = function () {
        var modalInstance;
        this.modalRef = this.modalService.open(AddedToCartDialogComponent, {
            centered: true,
            size: 'lg',
        });
        modalInstance = this.modalRef.componentInstance;
        modalInstance.entry$ = this.cartEntry$;
        modalInstance.cart$ = this.cartService.getActive();
        modalInstance.loaded$ = this.cartService.getLoaded();
        modalInstance.quantity = this.quantity;
        modalInstance.increment = this.increment;
    };
    AddToCartComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AddToCartComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: ModalService },
        { type: CurrentProductService },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input()
    ], AddToCartComponent.prototype, "productCode", void 0);
    __decorate([
        Input()
    ], AddToCartComponent.prototype, "showQuantity", void 0);
    __decorate([
        Input()
    ], AddToCartComponent.prototype, "product", void 0);
    AddToCartComponent = __decorate([
        Component({
            selector: 'cx-add-to-cart',
            template: "<form *ngIf=\"productCode\" [formGroup]=\"addToCartForm\" (submit)=\"addToCart()\">\n  <div class=\"quantity\" *ngIf=\"showQuantity\">\n    <label>{{ 'addToCart.quantity' | cxTranslate }}</label>\n    <cx-item-counter\n      *ngIf=\"hasStock\"\n      [max]=\"maxQuantity\"\n      [control]=\"addToCartForm.get('quantity')\"\n    ></cx-item-counter>\n    <span class=\"info\">{{\n      hasStock\n        ? ('addToCart.inStock' | cxTranslate)\n        : ('addToCart.outOfStock' | cxTranslate)\n    }}</span>\n  </div>\n\n  <button\n    *ngIf=\"hasStock\"\n    class=\"btn btn-primary btn-block\"\n    type=\"submit\"\n    [disabled]=\"quantity <= 0 || quantity > maxQuantity\"\n  >\n    {{ 'addToCart.addToCart' | cxTranslate }}\n  </button>\n</form>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], AddToCartComponent);
    return AddToCartComponent;
}());

var AutoFocusDirective = /** @class */ (function () {
    function AutoFocusDirective(hostElement) {
        this.hostElement = hostElement;
    }
    AutoFocusDirective.prototype.ngAfterViewInit = function () {
        this.hostElement.nativeElement.focus();
    };
    AutoFocusDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AutoFocusDirective = __decorate([
        Directive({
            selector: '[cxAutoFocus]',
        })
    ], AutoFocusDirective);
    return AutoFocusDirective;
}());

var AutoFocusDirectiveModule = /** @class */ (function () {
    function AutoFocusDirectiveModule() {
    }
    AutoFocusDirectiveModule = __decorate([
        NgModule({
            declarations: [AutoFocusDirective],
            exports: [AutoFocusDirective],
        })
    ], AutoFocusDirectiveModule);
    return AutoFocusDirectiveModule;
}());

var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.iconTypes = ICON_TYPE;
        this.deleteCard = new EventEmitter();
        this.setDefaultCard = new EventEmitter();
        this.sendCard = new EventEmitter();
        this.editCard = new EventEmitter();
        this.cancelCard = new EventEmitter();
        this.border = false;
        this.editMode = false;
        this.isDefault = false;
        this.fitToContainer = false;
    }
    // ACTIONS
    CardComponent.prototype.setEditMode = function () {
        this.editMode = true;
    };
    CardComponent.prototype.cancelEdit = function () {
        this.editMode = false;
        this.cancelCard.emit(5);
    };
    CardComponent.prototype.delete = function () {
        this.deleteCard.emit(1);
    };
    CardComponent.prototype.setDefault = function () {
        this.isDefault = true;
        this.setDefaultCard.emit(2);
    };
    CardComponent.prototype.send = function () {
        this.sendCard.emit(3);
    };
    CardComponent.prototype.edit = function () {
        this.editCard.emit(4);
    };
    CardComponent.prototype.ngOnInit = function () { };
    __decorate([
        Output()
    ], CardComponent.prototype, "deleteCard", void 0);
    __decorate([
        Output()
    ], CardComponent.prototype, "setDefaultCard", void 0);
    __decorate([
        Output()
    ], CardComponent.prototype, "sendCard", void 0);
    __decorate([
        Output()
    ], CardComponent.prototype, "editCard", void 0);
    __decorate([
        Output()
    ], CardComponent.prototype, "cancelCard", void 0);
    __decorate([
        Input()
    ], CardComponent.prototype, "border", void 0);
    __decorate([
        Input()
    ], CardComponent.prototype, "editMode", void 0);
    __decorate([
        Input()
    ], CardComponent.prototype, "isDefault", void 0);
    __decorate([
        Input()
    ], CardComponent.prototype, "content", void 0);
    __decorate([
        Input()
    ], CardComponent.prototype, "fitToContainer", void 0);
    CardComponent = __decorate([
        Component({
            selector: 'cx-card',
            template: "<div\n  *ngIf=\"content\"\n  class=\"cx-card\"\n  [class.cx-card-border]=\"border\"\n  [class.cx-card-fit-to-container]=\"fitToContainer\"\n>\n  <!-- Card Header -->\n  <div *ngIf=\"content.header && !editMode\" class=\"card-header\">\n    {{ content.header }}\n  </div>\n  <!-- Card Body -->\n  <div class=\"card-body cx-card-body\" [class.cx-card-delete]=\"editMode\">\n    <!-- Edit message -->\n    <div *ngIf=\"editMode\" class=\"cx-card-delete-msg\">\n      {{ content.deleteMsg }}\n    </div>\n    <!-- Card title -->\n    <h4 *ngIf=\"content.title\" class=\"cx-card-title\">\n      {{ content.title }}\n    </h4>\n    <!-- Card Content -->\n    <div class=\"cx-card-container\">\n      <!-- Card Label -->\n      <div class=\"cx-card-label-container\">\n        <div *ngIf=\"content.textBold\" class=\"cx-card-label-bold\">\n          {{ content.textBold }}\n        </div>\n        <div *ngFor=\"let line of content.text\">\n          <div class=\"cx-card-label\">{{ line }}</div>\n        </div>\n      </div>\n      <!-- Image -->\n      <div *ngIf=\"content.img\" class=\"cx-card-img-container\">\n        <cx-icon [type]=\"content.img\"></cx-icon>\n      </div>\n    </div>\n    <!-- Edit Mode Actions -->\n    <div *ngIf=\"editMode\" class=\"row cx-card-body-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-primary\"\n          (click)=\"delete()\"\n          cxAutoFocus\n        >\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"content.actions && !editMode\" class=\"cx-card-actions\">\n      <div *ngFor=\"let action of content.actions\">\n        <div [ngSwitch]=\"action.event\">\n          <a\n            *ngSwitchCase=\"'delete'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"delete()\"\n            (keydown.enter)=\"delete()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'default'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"setDefault()\"\n            (keydown.enter)=\"setDefault()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'send'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"send()\"\n            (keydown.enter)=\"send()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'edit'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"edit()\"\n            (keydown.enter)=\"edit()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchDefault\n            href=\"{{ action.link }}\"\n            class=\"card-link btn-link\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
        })
    ], CardComponent);
    return CardComponent;
}());

var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = __decorate([
        NgModule({
            imports: [CommonModule, I18nModule, IconModule, AutoFocusDirectiveModule],
            declarations: [CardComponent],
            exports: [CardComponent],
        })
    ], CardModule);
    return CardModule;
}());

var CarouselService = /** @class */ (function () {
    function CarouselService(winRef) {
        this.winRef = winRef;
    }
    /**
     * The number of items per slide is calculated by the help of
     * the item width and the available width of the host element.
     * This appoach makes it possible to place the carousel in different
     * layouts. Instead of using the page breakpoints, the host size is
     * taken into account.
     *
     * Since there's no element resize API available, we use the
     * window `resize` event, so that we can adjust the number of items
     * whenever the window got resized.
     */
    CarouselService.prototype.getItemsPerSlide = function (nativeElement, itemWidth) {
        var _this = this;
        return this.winRef.resize$.pipe(map(function () { return nativeElement.clientWidth; }), map(function (totalWidth) { return _this.calculateItems(totalWidth, itemWidth); }));
    };
    /**
     * Calculates the number of items per given hostSize.  calculated based on the given
     * intended size in pixels or percentages. The
     *
     * @param availableWidth The available width in pixels for the carousel items.
     * @param itemWidth The width per carousel item, in px or percentage.
     */
    CarouselService.prototype.calculateItems = function (availableWidth, itemWidth) {
        var calculatedItems = 0;
        if (itemWidth.endsWith('px')) {
            var num = itemWidth.substring(0, itemWidth.length - 2);
            calculatedItems = availableWidth / num;
        }
        if (itemWidth.endsWith('%')) {
            var perc = itemWidth.substring(0, itemWidth.length - 1);
            calculatedItems =
                availableWidth / (availableWidth * (perc / 100));
        }
        return Math.floor(calculatedItems) || 1;
    };
    CarouselService.ctorParameters = function () { return [
        { type: WindowRef }
    ]; };
    CarouselService.ɵprov = ɵɵdefineInjectable({ factory: function CarouselService_Factory() { return new CarouselService(ɵɵinject(WindowRef)); }, token: CarouselService, providedIn: "root" });
    CarouselService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CarouselService);
    return CarouselService;
}());

/**
 * Generic carousel component that can be used to render any carousel items,
 * such as products, images, banners, or any component. Carousel items are
 * rendered in so-called carousel slides, and the previous/next buttons as well as
 * the indicator-buttons can used to navigate the slides.
 *
 * The component uses an array of Observables (`items$`) as an input, to allow
 * for lazy loading of items.
 *
 * The number of items per slide is calculated with the `itemWidth`, which can given
 * in pixels or percentage.
 *
 * To allow for flexible rendering of items, the rendering is delegated to the
 * given `template`. This allows for maximum flexibility.
 */
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(el, service) {
        this.el = el;
        this.service = service;
        /**
         * Specifies the minimum size of the carousel item, either in px or %.
         * This value is used for the calculation of numbers per carousel, so that
         * the number of carousel items is dynamic. The calculation uses the `itemWidth`
         * and the host element `clientWidth`, so that the carousel is reusable in
         * different layouts (for example in a 50% grid).
         */
        this.itemWidth = '300px';
        /**
         * Indicates whether the visual indicators are used.
         */
        this.hideIndicators = false;
        this.indicatorIcon = ICON_TYPE.CIRCLE;
        this.previousIcon = ICON_TYPE.CARET_LEFT;
        this.nextIcon = ICON_TYPE.CARET_RIGHT;
    }
    Object.defineProperty(CarouselComponent.prototype, "setItems", {
        set: function (inputItems) {
            this.items = inputItems;
            //Reset slider when changing products
            this.activeSlide = 0;
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.template && isDevMode()) {
            console.error('No template reference provided to render the carousel items for the `cx-carousel`');
            return;
        }
        this.size$ = this.service
            .getItemsPerSlide(this.el.nativeElement, this.itemWidth)
            .pipe(tap(function () { return (_this.activeSlide = 0); }));
    };
    CarouselComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: CarouselService }
    ]; };
    __decorate([
        Input()
    ], CarouselComponent.prototype, "title", void 0);
    __decorate([
        Input('items')
    ], CarouselComponent.prototype, "setItems", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "template", void 0);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "itemWidth", void 0);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "hideIndicators", void 0);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "indicatorIcon", void 0);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "previousIcon", void 0);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "nextIcon", void 0);
    CarouselComponent = __decorate([
        Component({
            selector: 'cx-carousel',
            template: "<ng-container *ngIf=\"items?.length > 0 && (size$ | async) as size\">\n  <h3 *ngIf=\"title\">{{ title }}</h3>\n\n  <div class=\"carousel-panel\" [ngClass]=\"'size-' + size\">\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"previous\"\n      (click)=\"activeSlide = activeSlide - size\"\n      [disabled]=\"activeSlide === 0\"\n    >\n      <cx-icon [type]=\"previousIcon\"></cx-icon>\n    </button>\n\n    <div class=\"slides\">\n      <ng-container *ngFor=\"let _ of items; let i = index\">\n        <div class=\"slide\" *ngIf=\"i % size === 0\">\n          <ng-container\n            *ngFor=\"let item of items | slice: i:i + size; let j = index\"\n          >\n            <div\n              *ngIf=\"item | async as data\"\n              class=\"item\"\n              [class.active]=\"i === activeSlide\"\n            >\n              <ng-container\n                *ngTemplateOutlet=\"template; context: { item: data }\"\n              ></ng-container>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"next\"\n      (click)=\"activeSlide = activeSlide + size\"\n      tabindex=\"-1\"\n      [disabled]=\"activeSlide > items.length - size - 1\"\n    >\n      <cx-icon [type]=\"nextIcon\"></cx-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"!hideIndicators && size < items.length\" class=\"indicators\">\n    <ng-container *ngFor=\"let _ of items; let i = index\">\n      <button\n        *ngIf=\"i % size === 0\"\n        (focus)=\"activeSlide = i\"\n        [disabled]=\"i === activeSlide\"\n        tabindex=\"-1\"\n      >\n        <cx-icon [type]=\"indicatorIcon\"></cx-icon>\n      </button>\n    </ng-container>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CarouselComponent);
    return CarouselComponent;
}());

/** the default format is used for browsers that do not support   */
var DEFAULT_MEDIA_FORMAT = 'tablet';
var MediaService = /** @class */ (function () {
    function MediaService(config, breakpointService) {
        this.config = config;
        this.breakpointService = breakpointService;
    }
    Object.defineProperty(MediaService.prototype, "mediaFormats", {
        get: function () {
            return [
                {
                    code: 'mobile',
                    threshold: this.breakpointService.getSize(BREAKPOINT.xs),
                },
                {
                    code: 'tablet',
                    threshold: this.breakpointService.getSize(BREAKPOINT.sm),
                },
                {
                    code: 'desktop',
                    threshold: this.breakpointService.getSize(BREAKPOINT.md),
                },
                {
                    code: 'widescreen',
                    threshold: this.breakpointService.getSize(BREAKPOINT.lg),
                },
            ];
        },
        enumerable: true,
        configurable: true
    });
    MediaService.prototype.getMedia = function (container, format, alt) {
        return {
            src: this.getMainImage(container, format),
            srcset: this.getSrcSet(container),
            alt: alt || this.getAlt(container, format),
        };
    };
    MediaService.prototype.getMainImage = function (media, format) {
        if (media && media[format || DEFAULT_MEDIA_FORMAT]) {
            return this.getImageUrl(media[format || DEFAULT_MEDIA_FORMAT].url);
        }
        else if (media && media.url) {
            return this.getImageUrl(media.url);
        }
        else if (media && media[this.getHighestAvailableFormat(media)]) {
            return this.getImageUrl(media[this.getHighestAvailableFormat(media)].url);
        }
        else {
            return null;
        }
    };
    /**
     * returns highest resolution format name from media formats
     */
    MediaService.prototype.getHighestAvailableFormat = function (media) {
        if (media) {
            var mediaFormat_1;
            this.mediaFormats.forEach(function (format) {
                if (!mediaFormat_1 ||
                    (mediaFormat_1.threshold < format.threshold && media[format.code])) {
                    mediaFormat_1 = format;
                }
            });
            return mediaFormat_1.code;
        }
        return null;
    };
    MediaService.prototype.getAlt = function (media, format) {
        if (!media) {
            return undefined;
        }
        else if (media[format || DEFAULT_MEDIA_FORMAT]) {
            return media[format || DEFAULT_MEDIA_FORMAT].altText;
        }
        else if (media.altText) {
            return media.altText;
        }
    };
    /**
     * builds a set of images aligned with the breakpoints
     */
    MediaService.prototype.getSrcSet = function (media) {
        var _this = this;
        if (!media) {
            return undefined;
        }
        var srcset = this.mediaFormats.reduce(function (set, format) {
            if (!!media[format.code]) {
                if (set) {
                    set += ', ';
                }
                set += _this.getImageUrl(media[format.code].url) + " " + format.threshold + "w";
            }
            return set;
        }, '');
        return srcset === '' ? undefined : srcset;
    };
    MediaService.prototype.getImageUrl = function (url) {
        if (!url) {
            return null;
        }
        return url.startsWith('http') ? url : this.getBaseUrl() + url;
    };
    MediaService.prototype.getBaseUrl = function () {
        return (this.config.backend.media.baseUrl || this.config.backend.occ.baseUrl || '');
    };
    MediaService.ctorParameters = function () { return [
        { type: OccConfig },
        { type: BreakpointService }
    ]; };
    MediaService.ɵprov = ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(ɵɵinject(OccConfig), ɵɵinject(BreakpointService)); }, token: MediaService, providedIn: "root" });
    MediaService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], MediaService);
    return MediaService;
}());

var MediaComponent = /** @class */ (function () {
    function MediaComponent(mediaService) {
        this.mediaService = mediaService;
        /**
         * Once the media is loaded, we emit an event.
         */
        this.loaded = new EventEmitter();
        /**
         * The `cx-media` component has an `is-initialized` class as long as the
         * media is being initialized.
         */
        this.isInitialized = false;
        /**
         * The `cx-media` component has a `is-loading` class as long as the
         * media is loaded. Wehn the media is loaded, the `is-initialized` class
         * is added.
         */
        this.isLoading = true;
        /**
         * When there's no media provided for the content, or in case an error
         * happened during loading, we add the `is-missing` class. Visual effects
         * can be controlled by CSS.
         */
        this.isMissing = false;
    }
    MediaComponent.prototype.ngOnChanges = function () {
        this.create();
    };
    /**
     * Creates the `Media` object
     */
    MediaComponent.prototype.create = function () {
        this.media = this.mediaService.getMedia(this.container, this.format, this.alt);
        if (!this.media.src) {
            this.handleMissing();
        }
    };
    /**
     * This handler is called from the UI when the image is loaded.
     */
    MediaComponent.prototype.loadHandler = function () {
        this.isLoading = false;
        this.isInitialized = true;
        this.isMissing = false;
        this.loaded.emit(true);
    };
    /**
     * Whenever an error happens during load, we mark the component
     * with css classes to have a missing media.
     */
    MediaComponent.prototype.errorHandler = function () {
        this.handleMissing();
    };
    MediaComponent.prototype.handleMissing = function () {
        this.isLoading = false;
        this.isInitialized = true;
        this.isMissing = true;
        this.loaded.emit(false);
    };
    MediaComponent.ctorParameters = function () { return [
        { type: MediaService }
    ]; };
    __decorate([
        Input()
    ], MediaComponent.prototype, "container", void 0);
    __decorate([
        Input()
    ], MediaComponent.prototype, "format", void 0);
    __decorate([
        Input()
    ], MediaComponent.prototype, "alt", void 0);
    __decorate([
        Output()
    ], MediaComponent.prototype, "loaded", void 0);
    __decorate([
        HostBinding('class.is-initialized')
    ], MediaComponent.prototype, "isInitialized", void 0);
    __decorate([
        HostBinding('class.is-loading')
    ], MediaComponent.prototype, "isLoading", void 0);
    __decorate([
        HostBinding('class.is-missing')
    ], MediaComponent.prototype, "isMissing", void 0);
    MediaComponent = __decorate([
        Component({
            selector: 'cx-media',
            template: "<img\n  *ngIf=\"media?.src\"\n  [attr.src]=\"media.src\"\n  [attr.srcset]=\"media.srcset\"\n  [attr.alt]=\"media.alt\"\n  (load)=\"loadHandler()\"\n  (error)=\"errorHandler()\"\n/>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], MediaComponent);
    return MediaComponent;
}());

var MediaModule = /** @class */ (function () {
    function MediaModule() {
    }
    MediaModule = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [MediaComponent],
            exports: [MediaComponent],
        })
    ], MediaModule);
    return MediaModule;
}());

var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule = __decorate([
        NgModule({
            imports: [CommonModule, RouterModule, IconModule, MediaModule, UrlModule],
            declarations: [CarouselComponent],
            exports: [CarouselComponent],
        })
    ], CarouselModule);
    return CarouselModule;
}());

/**
 * Provides a UI to manage the count of the quantity, typically by using
 * increase and decrease functinality. The item counter expects an input `FormControl`
 * so that the state of the control can be managed outside of this component.
 */
var ItemCounterComponent = /** @class */ (function () {
    function ItemCounterComponent() {
        /**
         * This can be used in case an item has a minmum order quantity.
         * @default 1
         */
        this.min = 1;
        /**
         * The step is used to increment the count. It is supposed to be a
         * positive inteteger or float.
         * @default 1
         */
        this.step = 1;
        /**
         * Inidicates that the input can be manually set to zero,
         * despite the fact that the input controls will be limited to
         * the minimum. The zero value can be used to remove an item.
         */
        this.allowZero = false;
        /**
         * In readonly mode the item counter will only be shown as a label,
         * the form controls are not rendered.
         * Please not that readonly is different from the `disabled` form state.
         * @default false
         */
        this.readonly = false;
    }
    ItemCounterComponent.prototype.handleClick = function () {
        this.input.nativeElement.focus();
    };
    ItemCounterComponent.prototype.increment = function () {
        // it's too early to use the `stepUp` and `stepDown` API...
        // let's wait for FF: https://caniuse.com/#search=stepUp
        this.control.setValue(this.control.value + this.step);
        this.control.markAsDirty();
    };
    ItemCounterComponent.prototype.decrement = function () {
        this.control.setValue(this.control.value - this.step);
        this.control.markAsDirty();
    };
    /**
     * Returns an observable with the control. The value changes of the
     * control are intercepted in order to suppress invalid values.
     */
    ItemCounterComponent.prototype.getControl = function () {
        var _this = this;
        if (!this._control$) {
            this._control$ = this.control.valueChanges.pipe(startWith(this.control.value), tap(function (value) {
                return _this.control.setValue(_this.getValidCount(value), { emitEvent: false });
            }), map(function () { return _this.control; }));
        }
        return this._control$;
    };
    /**
     * Validate that the given value is in between
     * the `min` and `max` value. If the value is out
     * of  the min/max range, it will be altered.
     * If `allowZero` is set to true, the 0 value is ignored.
     *
     */
    ItemCounterComponent.prototype.getValidCount = function (value) {
        if (value < this.min && !(value === 0 && this.allowZero)) {
            value = this.min;
        }
        if (this.max && value > this.max) {
            value = this.max;
        }
        return value;
    };
    __decorate([
        Input()
    ], ItemCounterComponent.prototype, "control", void 0);
    __decorate([
        Input()
    ], ItemCounterComponent.prototype, "min", void 0);
    __decorate([
        Input()
    ], ItemCounterComponent.prototype, "max", void 0);
    __decorate([
        Input()
    ], ItemCounterComponent.prototype, "step", void 0);
    __decorate([
        Input()
    ], ItemCounterComponent.prototype, "allowZero", void 0);
    __decorate([
        HostBinding('class.readonly'), Input()
    ], ItemCounterComponent.prototype, "readonly", void 0);
    __decorate([
        ViewChild('qty')
    ], ItemCounterComponent.prototype, "input", void 0);
    __decorate([
        HostListener('click')
    ], ItemCounterComponent.prototype, "handleClick", null);
    ItemCounterComponent = __decorate([
        Component({
            selector: 'cx-item-counter',
            template: "<button\n  type=\"button\"\n  (click)=\"decrement()\"\n  [disabled]=\"qty.disabled || qty?.value <= min\"\n  tabindex=\"-1\"\n>\n  -\n</button>\n\n<input\n  #qty\n  type=\"number\"\n  [min]=\"min\"\n  [max]=\"max\"\n  [step]=\"step\"\n  [formControl]=\"getControl() | async\"\n/>\n\n<button\n  type=\"button\"\n  (click)=\"increment()\"\n  [disabled]=\"qty.disabled || qty?.value >= max\"\n  tabindex=\"-1\"\n>\n  +\n</button>\n"
        })
    ], ItemCounterComponent);
    return ItemCounterComponent;
}());

var ItemCounterModule = /** @class */ (function () {
    function ItemCounterModule() {
    }
    ItemCounterModule = __decorate([
        NgModule({
            imports: [CommonModule, ReactiveFormsModule],
            declarations: [ItemCounterComponent],
            exports: [ItemCounterComponent],
        })
    ], ItemCounterModule);
    return ItemCounterModule;
}());

/**
 * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
 */
var GenericLinkComponent = /** @class */ (function () {
    function GenericLinkComponent() {
        this.protocolRegex = /^https?:\/\//i;
    }
    Object.defineProperty(GenericLinkComponent.prototype, "rel", {
        get: function () {
            return this.target === '_blank' ? 'noopener' : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericLinkComponent.prototype, "routerUrl", {
        get: function () {
            if (typeof this.url === 'string') {
                return [this.getAbsoluteUrl(this.url)];
            }
            return this.url;
        },
        enumerable: true,
        configurable: true
    });
    GenericLinkComponent.prototype.isExternalUrl = function () {
        return typeof this.url === 'string' && this.protocolRegex.test(this.url);
    };
    GenericLinkComponent.prototype.getAbsoluteUrl = function (url) {
        return url.startsWith('/') ? this.url : '/' + this.url;
    };
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "target", void 0);
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "title", void 0);
    GenericLinkComponent = __decorate([
        Component({
            selector: 'cx-generic-link',
            template: "<!-- https://github.com/angular/angular/issues/24567 -->\n\n<ng-container *ngIf=\"isExternalUrl(); else isLocalUrl\">\n  <a\n    role=\"link\"\n    [href]=\"url\"\n    [attr.target]=\"target\"\n    [attr.rel]=\"rel\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-template #isLocalUrl>\n  <a\n    role=\"link\"\n    [routerLink]=\"routerUrl\"\n    [attr.target]=\"target\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
        })
    ], GenericLinkComponent);
    return GenericLinkComponent;
}());

var GenericLinkModule = /** @class */ (function () {
    function GenericLinkModule() {
    }
    GenericLinkModule = __decorate([
        NgModule({
            imports: [CommonModule, RouterModule],
            declarations: [GenericLinkComponent],
            exports: [GenericLinkComponent],
        })
    ], GenericLinkModule);
    return GenericLinkModule;
}());

var defaultPaginationConfig = {
    pagination: {
        addStart: true,
        addEnd: true,
    },
};

var PaginationConfig = /** @class */ (function () {
    function PaginationConfig() {
    }
    return PaginationConfig;
}());

/**
 * The item type is used to add semantic structure to the
 * PaginationItem, so that the UI understands the usage.
 */
var PaginationItemType;
(function (PaginationItemType) {
    PaginationItemType["GAP"] = "gap";
    PaginationItemType["FIRST"] = "first";
    PaginationItemType["LAST"] = "last";
    PaginationItemType["PREVIOUS"] = "previous";
    PaginationItemType["NEXT"] = "next";
    PaginationItemType["START"] = "start";
    PaginationItemType["END"] = "end";
    PaginationItemType["PAGE"] = "page";
})(PaginationItemType || (PaginationItemType = {}));
var PaginationNavigationPosition;
(function (PaginationNavigationPosition) {
    PaginationNavigationPosition["ASIDE"] = "aside";
    PaginationNavigationPosition["BEFORE"] = "before";
    PaginationNavigationPosition["AFTER"] = "after";
})(PaginationNavigationPosition || (PaginationNavigationPosition = {}));

var FALLBACK_PAGINATION_OPTIONS = {
    rangeCount: 3,
    dotsLabel: '...',
    startLabel: '«',
    previousLabel: '‹',
    nextLabel: '›',
    endLabel: '»',
};
/**
 * Builds a pagination structures based on a pageCount and current page number.
 * There are various {@link PaginationConfig} options which can be used to configure
 * the behaviour of the build. Alternatively, CSS can be used to further customise
 * the pagination.
 *
 * Examples:
 * The full blown pagination items contain the follow elements:
 *
 * `« ‹ 1 ... 4 (5) 6 ... 9 › »`
 *
 * This includes pagination items to the following pages:
 * - start page
 * - previous page
 * - first page
 * - page range
 * - last page
 * - next page
 * - end page
 *
 * All of those links are configurable, including the size of the page range.
 * The current page will always be centered in the page range to provide direct access
 * to the previous and next page.
 */
var PaginationBuilder = /** @class */ (function () {
    function PaginationBuilder(paginationConfig) {
        this.paginationConfig = paginationConfig;
    }
    /**
     * Builds a list of `PaginationItem`. The give pageCount and current are used
     * to build out the full pagination. There are various {@link PaginationConfig} options
     * which can be used to configure the behaviour of the build. Alternatively, CSS
     * can be used to further specialize visibility of the pagination.
     *
     * @param pageCount The total number of pages
     * @param current The current page number, 0-index based
     * @returns An array of `PaginationItem`
     */
    PaginationBuilder.prototype.paginate = function (pageCount, current) {
        var pages = [];
        if (pageCount < 2) {
            return pages;
        }
        this.addPages(pages, pageCount, current);
        this.addDots(pages, pageCount);
        this.addFirstLast(pages, pageCount);
        this.addNavigation(pages, pageCount, current);
        return pages;
    };
    /**
     * Returns the current page with surrounding pages (based on the `config.rangeCount`).
     * The current page is always centered to provide direct access to the previous and next page.
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     * @param current The current page number, 0-index based
     */
    PaginationBuilder.prototype.addPages = function (pages, pageCount, current) {
        var start = this.getStartOfRange(pageCount, current);
        var max = Math.min(this.config.rangeCount, pageCount);
        Array.from(Array(max)).forEach(function (_, i) {
            pages.push({
                number: i + start,
                label: String(i + start + 1),
                type: PaginationItemType.PAGE,
            });
        });
    };
    /**
     * Adds dots before and after the given pages, if configured (defaults to true).
     * If the dots only represent a single page, the page number is added instead of
     * the dots, unless the configuration requires dots always.
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     */
    PaginationBuilder.prototype.addDots = function (pages, pageCount) {
        var _this = this;
        if (!this.config.addDots) {
            return;
        }
        var addFirstGap = function () {
            var firstItemNumber = pages[0].number;
            var gapNumber = _this.config.addFirst ? 1 : 0;
            if (firstItemNumber > gapNumber) {
                var isGap = !_this.config.substituteDotsForSingularPage ||
                    firstItemNumber !== gapNumber + 1;
                var isSubstitued = _this.config.addFirst &&
                    _this.config.substituteDotsForSingularPage &&
                    gapNumber === 0;
                var type = isGap
                    ? PaginationItemType.GAP
                    : isSubstitued
                        ? PaginationItemType.FIRST
                        : PaginationItemType.PAGE;
                return [
                    Object.assign({
                        label: isGap ? _this.config.dotsLabel : String(gapNumber + 1),
                        type: type,
                    }, isGap ? null : { number: gapNumber }),
                ];
            }
            else
                return [];
        };
        var addLastGap = function () {
            var nextPageNumber = pages[pages.length - 1].number + 1;
            var last = pageCount - (_this.config.addLast ? 2 : 1);
            if (nextPageNumber <= last) {
                var isSubstitued = _this.config.addLast &&
                    _this.config.substituteDotsForSingularPage &&
                    nextPageNumber === last;
                var isGap = nextPageNumber <
                    pageCount -
                        (_this.config.substituteDotsForSingularPage ? 1 : 0) -
                        (_this.config.addLast ? 1 : 0);
                var type = isGap
                    ? PaginationItemType.GAP
                    : isSubstitued
                        ? PaginationItemType.LAST
                        : PaginationItemType.PAGE;
                return [
                    Object.assign({
                        label: isGap ? _this.config.dotsLabel : String(nextPageNumber + 1),
                        type: type,
                    }, isGap ? null : { number: nextPageNumber }),
                ];
            }
            else
                return [];
        };
        pages.unshift.apply(pages, __spread(addFirstGap()));
        pages.push.apply(pages, __spread(addLastGap()));
    };
    /**
     * Add links to the first and last page, if configured to do so.
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     *
     */
    PaginationBuilder.prototype.addFirstLast = function (pages, pageCount) {
        if (this.config.addFirst && pages[0].number !== 0) {
            pages.unshift({
                number: 0,
                label: '1',
                type: PaginationItemType.FIRST,
            });
        }
        if (this.config.addLast &&
            pages[pages.length - 1].number !== pageCount - 1) {
            pages.push({
                number: pageCount - 1,
                label: String(pageCount),
                type: PaginationItemType.LAST,
            });
        }
    };
    /**
     * Add links to the start, previous, next and last page, if configured to do so.
     * The order of the links can be configured by using the {@link PaginationConfig},
     * using the `PaginationNavigationPosition` (`BEFORE` or `AFTER`).
     * The `PaginationNavigationPosition` allows for 3 flavours:
     *
     * - by default the pagination starts with start and previous and ends with the next and end links
     * - BEFORE – all navigation links are added in the front of the pagination list
     * - AFTER – all navigation links are pushed to the end of the pagination list
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     * @param current The current page number, 0-index based
     *
     */
    PaginationBuilder.prototype.addNavigation = function (pages, pageCount, current) {
        var before = this.getBeforeLinks(current);
        var after = this.getAfter(pageCount, current);
        var pos = this.config.navigationPosition;
        if (!pos || pos === PaginationNavigationPosition.ASIDE) {
            pages.unshift.apply(pages, __spread(before));
            pages.push.apply(pages, __spread(after));
        }
        else {
            if (pos === PaginationNavigationPosition.BEFORE) {
                pages.unshift.apply(pages, __spread(before, after));
            }
            if (pos === PaginationNavigationPosition.AFTER) {
                pages.push.apply(pages, __spread(before, after));
            }
        }
    };
    /**
     * Returns the start and previous links, if applicable.
     */
    PaginationBuilder.prototype.getBeforeLinks = function (current) {
        var _this = this;
        var list = [];
        if (this.config.addStart) {
            var start = function () {
                return Object.assign({
                    label: _this.config.startLabel,
                    type: PaginationItemType.START,
                }, current > 0 ? { number: 0 } : null);
            };
            list.push(start());
        }
        if (this.config.addPrevious) {
            var previous = function () {
                return Object.assign({
                    label: _this.config.previousLabel,
                    type: PaginationItemType.PREVIOUS,
                }, current > 0 ? { number: current - 1 } : null);
            };
            list.push(previous());
        }
        return list;
    };
    /**
     * Returns the next and end links, if applicable.
     */
    PaginationBuilder.prototype.getAfter = function (pageCount, current) {
        var _this = this;
        var list = [];
        if (this.config.addNext) {
            var next = function () {
                return Object.assign({
                    label: _this.config.nextLabel,
                    type: PaginationItemType.NEXT,
                }, current < pageCount - 1 ? { number: current + 1 } : null);
            };
            list.push(next());
        }
        if (this.config.addEnd) {
            var end = function () {
                return Object.assign({
                    label: _this.config.endLabel,
                    type: PaginationItemType.END,
                }, current < pageCount - 1 ? { number: pageCount - 1 } : null);
            };
            list.push(end());
        }
        return list;
    };
    /**
     * Resolves the first page of the range we need to build.
     * This is the page that is leading up to the range of the
     * current page.
     *
     * @param pageCount The total number of pages.
     * @param current The current page number, 0-index based.
     */
    PaginationBuilder.prototype.getStartOfRange = function (pageCount, current) {
        var count = this.config.rangeCount - 1;
        // the least number of pages before and after the current
        var delta = Math.round(count / 2);
        // ensure that we start with at least the first page
        var minStart = Math.max(0, current - delta);
        // ensures that we start with at least 1 and do not pass the last range
        var maxStart = Math.max(0, pageCount - count - 1);
        // ensure that we get at least a full range at the end
        return Math.min(maxStart, minStart);
    };
    Object.defineProperty(PaginationBuilder.prototype, "config", {
        get: function () {
            return Object.assign(FALLBACK_PAGINATION_OPTIONS, this.paginationConfig.pagination);
        },
        enumerable: true,
        configurable: true
    });
    PaginationBuilder.ctorParameters = function () { return [
        { type: PaginationConfig }
    ]; };
    PaginationBuilder.ɵprov = ɵɵdefineInjectable({ factory: function PaginationBuilder_Factory() { return new PaginationBuilder(ɵɵinject(PaginationConfig)); }, token: PaginationBuilder, providedIn: "root" });
    PaginationBuilder = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PaginationBuilder);
    return PaginationBuilder;
}());

/**
 * The `PaginationComponent` is a generic component that is used for
 * all lists in Spartacus that require pagination. The component supports
 * all common features, which can be configured or hidden by CSS.
 */
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(paginationBuilder, activatedRoute) {
        this.paginationBuilder = paginationBuilder;
        this.activatedRoute = activatedRoute;
        this.viewPageEvent = new EventEmitter();
        this.pages = [];
    }
    Object.defineProperty(PaginationComponent.prototype, "pagination", {
        get: function () {
            return this._pagination;
        },
        set: function (value) {
            this._pagination = value;
            this.render(value);
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.render = function (pagination) {
        this.pages = this.paginationBuilder.paginate(pagination.totalPages, pagination.currentPage);
    };
    /**
     * Inidicates whether the given item is the current item.
     *
     * @param item PaginationItem
     * @returns boolean
     */
    PaginationComponent.prototype.isCurrent = function (item) {
        return (item.type === PaginationItemType.PAGE &&
            item.number === this.pagination.currentPage);
    };
    /**
     * Indicates whether the pagination item is inactive. This is used
     * to disabled a link or set the tabindex to `-1`.
     *
     * Defaults to true
     *
     * @param item PaginationItem
     * @returns returns -1 in case of a disabled
     */
    PaginationComponent.prototype.isInactive = function (item) {
        return (!item.hasOwnProperty('number') ||
            item.number === this.pagination.currentPage);
    };
    PaginationComponent.prototype.getQueryParams = function (item) {
        var queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
        if (this.queryParam &&
            item.number < this.pagination.totalPages &&
            !this.isCurrent(item)) {
            queryParams[this.queryParam] = item.number;
        }
        // omit the page number from the query parameters in case it's the default
        // to clean up the experience and avoid unnecessary polluting of the URL
        if (queryParams[this.queryParam] === this.defaultPage) {
            delete queryParams[this.queryParam];
        }
        return queryParams;
    };
    PaginationComponent.prototype.pageChange = function (page) {
        this.viewPageEvent.emit(page.number);
    };
    PaginationComponent.ctorParameters = function () { return [
        { type: PaginationBuilder },
        { type: ActivatedRoute }
    ]; };
    __decorate([
        Input()
    ], PaginationComponent.prototype, "pageRoute", void 0);
    __decorate([
        Input()
    ], PaginationComponent.prototype, "queryParam", void 0);
    __decorate([
        Input()
    ], PaginationComponent.prototype, "defaultPage", void 0);
    __decorate([
        Input()
    ], PaginationComponent.prototype, "pagination", null);
    __decorate([
        Output()
    ], PaginationComponent.prototype, "viewPageEvent", void 0);
    PaginationComponent = __decorate([
        Component({
            selector: 'cx-pagination',
            template: "<a\n  *ngFor=\"let item of pages\"\n  [class]=\"item.type\"\n  [class.disabled]=\"isInactive(item)\"\n  [class.current]=\"isCurrent(item)\"\n  [routerLink]=\"pageRoute\"\n  [queryParams]=\"getQueryParams(item)\"\n  [tabIndex]=\"isInactive(item) ? -1 : 0\"\n  (click)=\"pageChange(item)\"\n>\n  {{ item.label }}\n</a>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PaginationComponent);
    return PaginationComponent;
}());

var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    PaginationModule = __decorate([
        NgModule({
            imports: [CommonModule, RouterModule],
            providers: [
                provideConfig(defaultPaginationConfig),
                { provide: PaginationConfig, useExisting: Config },
            ],
            declarations: [PaginationComponent],
            exports: [PaginationComponent],
        })
    ], PaginationModule);
    return PaginationModule;
}());

var SortingComponent = /** @class */ (function () {
    function SortingComponent() {
        this.sortListEvent = new EventEmitter();
    }
    SortingComponent.prototype.sortList = function (sortCode) {
        this.sortListEvent.emit(sortCode);
    };
    __decorate([
        Input()
    ], SortingComponent.prototype, "sortOptions", void 0);
    __decorate([
        Input()
    ], SortingComponent.prototype, "selectedOption", void 0);
    __decorate([
        Input()
    ], SortingComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], SortingComponent.prototype, "sortLabels", void 0);
    __decorate([
        Output()
    ], SortingComponent.prototype, "sortListEvent", void 0);
    SortingComponent = __decorate([
        Component({
            selector: 'cx-sorting',
            template: "<ng-select\n  [searchable]=\"false\"\n  [clearable]=\"false\"\n  placeholder=\"{{ placeholder }}\"\n  (change)=\"sortList($event)\"\n  [ngModel]=\"selectedOption\"\n>\n  <ng-option *ngFor=\"let sort of sortOptions\" [value]=\"sort.code\">{{\n    sort.name ? sort.name : sortLabels ? sortLabels[sort.code] : ''\n  }}</ng-option>\n</ng-select>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], SortingComponent);
    return SortingComponent;
}());

var ListNavigationModule = /** @class */ (function () {
    function ListNavigationModule() {
    }
    ListNavigationModule = __decorate([
        NgModule({
            imports: [CommonModule, NgSelectModule, FormsModule, PaginationModule],
            declarations: [SortingComponent],
            exports: [SortingComponent, PaginationComponent],
        })
    ], ListNavigationModule);
    return ListNavigationModule;
}());

// TODO: Improve a11y with better text appropriate to usage (example: loading cart spinner)
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent = __decorate([
        Component({
            selector: 'cx-spinner',
            template: "<div class=\"loader-container\">\n  <div class=\"loader\">{{ 'spinner.loading' | cxTranslate }}</div>\n</div>\n"
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());

var SpinnerModule = /** @class */ (function () {
    function SpinnerModule() {
    }
    SpinnerModule = __decorate([
        NgModule({
            imports: [CommonModule, I18nModule],
            declarations: [SpinnerComponent],
            exports: [SpinnerComponent],
        })
    ], SpinnerModule);
    return SpinnerModule;
}());

var GlobalMessageComponent = /** @class */ (function () {
    function GlobalMessageComponent(globalMessageService) {
        this.globalMessageService = globalMessageService;
        this.iconTypes = ICON_TYPE;
        this.messageType = GlobalMessageType;
    }
    GlobalMessageComponent.prototype.ngOnInit = function () {
        this.messages$ = this.globalMessageService.get();
    };
    GlobalMessageComponent.prototype.clear = function (type, index) {
        this.globalMessageService.remove(type, index);
    };
    GlobalMessageComponent.ctorParameters = function () { return [
        { type: GlobalMessageService }
    ]; };
    GlobalMessageComponent = __decorate([
        Component({
            selector: 'cx-global-message',
            template: "<div *ngIf=\"messages$ | async as messages\">\n  <div\n    class=\"alert alert-success\"\n    *ngFor=\"\n      let confMsg of messages[messageType.MSG_TYPE_CONFIRMATION];\n      let i = index\n    \"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.SUCCESS\"></cx-icon>\n    </span>\n    <span>{{ confMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_CONFIRMATION, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n  <div\n    class=\"alert alert-info\"\n    *ngFor=\"let infoMsg of messages[messageType.MSG_TYPE_INFO]; let i = index\"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.INFO\"></cx-icon>\n    </span>\n    <span>{{ infoMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_INFO, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n  <div\n    class=\"alert alert-warning\"\n    *ngFor=\"\n      let infoMsg of messages[messageType.MSG_TYPE_WARNING];\n      let i = index\n    \"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.WARNING\"></cx-icon>\n    </span>\n    <span>{{ infoMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_INFO, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n  <div\n    class=\"alert alert-danger\"\n    *ngFor=\"let errorMsg of messages[messageType.MSG_TYPE_ERROR]; let i = index\"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.ERROR\"></cx-icon>\n    </span>\n    <span>{{ errorMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_ERROR, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n</div>\n"
        })
    ], GlobalMessageComponent);
    return GlobalMessageComponent;
}());

var GlobalMessageComponentModule = /** @class */ (function () {
    function GlobalMessageComponentModule() {
    }
    GlobalMessageComponentModule = __decorate([
        NgModule({
            imports: [CommonModule, HttpClientModule, IconModule, I18nModule],
            declarations: [GlobalMessageComponent],
            exports: [GlobalMessageComponent],
        })
    ], GlobalMessageComponentModule);
    return GlobalMessageComponentModule;
}());

var QualtricsConfig = /** @class */ (function () {
    function QualtricsConfig() {
    }
    return QualtricsConfig;
}());

var QualtricsLoaderService = /** @class */ (function () {
    function QualtricsLoaderService(winRef, config) {
        this.winRef = winRef;
        this.config = config;
        this.qualtricsLoaded$ = new BehaviorSubject(false);
        if (Boolean(this.winRef.nativeWindow) &&
            Boolean(this.winRef.document) &&
            this.isQualtricsConfigured()) {
            this.initialize();
            this.setup();
        }
    }
    QualtricsLoaderService.prototype.initialize = function () {
        var _this = this;
        fromEvent(this.winRef.nativeWindow, 'qsi_js_loaded').subscribe(function (_) {
            return _this.qualtricsLoaded$.next(true);
        });
    };
    QualtricsLoaderService.prototype.setup = function () {
        var qualtricsScript = this.winRef.document.createElement('script');
        qualtricsScript.type = 'text/javascript';
        qualtricsScript.defer = true;
        qualtricsScript.src = 'assets/qualtricsIntegration.js';
        var idScript = this.winRef.document.createElement('div');
        idScript.id = this.config.qualtrics.projectId;
        this.winRef.document
            .getElementsByTagName('head')[0]
            .appendChild(qualtricsScript);
        this.winRef.document.getElementsByTagName('head')[0].appendChild(idScript);
    };
    QualtricsLoaderService.prototype.isQualtricsConfigured = function () {
        return (Boolean(this.config.qualtrics) && Boolean(this.config.qualtrics.projectId));
    };
    QualtricsLoaderService.prototype.load = function () {
        var _this = this;
        return this.qualtricsLoaded$.pipe(filter(function (loaded) { return loaded; }), switchMap(function (_) {
            var qsi = _this.winRef.nativeWindow['QSI'];
            return _this.isDataLoaded().pipe(distinctUntilChanged(), tap(function (dataLoaded) {
                if (dataLoaded) {
                    qsi.API.unload();
                    qsi.API.load().done(qsi.API.run());
                }
            }));
        }));
    };
    /**
     * This logic exist in order to let the client(s) add their own logic to wait for any kind of page data
     * If client(s) does not extend this service to override this implementation, it returns true
     * Return false otherwise.
     */
    QualtricsLoaderService.prototype.isDataLoaded = function () {
        return of(true);
    };
    QualtricsLoaderService.ctorParameters = function () { return [
        { type: WindowRef },
        { type: QualtricsConfig }
    ]; };
    QualtricsLoaderService.ɵprov = ɵɵdefineInjectable({ factory: function QualtricsLoaderService_Factory() { return new QualtricsLoaderService(ɵɵinject(WindowRef), ɵɵinject(QualtricsConfig)); }, token: QualtricsLoaderService, providedIn: "root" });
    QualtricsLoaderService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], QualtricsLoaderService);
    return QualtricsLoaderService;
}());

var QualtricsComponent = /** @class */ (function () {
    function QualtricsComponent(qualtricsLoader) {
        this.qualtricsLoader = qualtricsLoader;
        this.qualtricsEnabled$ = this.qualtricsLoader.load();
    }
    QualtricsComponent.ctorParameters = function () { return [
        { type: QualtricsLoaderService }
    ]; };
    QualtricsComponent = __decorate([
        Component({
            selector: 'cx-qualtrics',
            template: "\n    <ng-container *ngIf=\"qualtricsEnabled$ | async\"></ng-container>\n  "
        })
    ], QualtricsComponent);
    return QualtricsComponent;
}());

var defaultQualtricsConfig = {
    qualtrics: {},
};

var QualtricsModule = /** @class */ (function () {
    function QualtricsModule() {
    }
    QualtricsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                HttpClientModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        QualtricsComponent: {
                            component: QualtricsComponent,
                        },
                    },
                }),
                ConfigModule.withConfig(defaultQualtricsConfig),
            ],
            declarations: [QualtricsComponent],
            entryComponents: [QualtricsComponent],
            providers: [
                {
                    provide: QualtricsConfig,
                    useExisting: Config,
                },
            ],
        })
    ], QualtricsModule);
    return QualtricsModule;
}());

var LanguageCurrencyComponent = /** @class */ (function () {
    function LanguageCurrencyComponent() {
    }
    LanguageCurrencyComponent = __decorate([
        Component({
            selector: 'cx-language-currency-selector',
            template: "\n    <cx-site-context-selector context=\"language\"></cx-site-context-selector>\n    <cx-site-context-selector context=\"currency\"></cx-site-context-selector>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], LanguageCurrencyComponent);
    return LanguageCurrencyComponent;
}());

var _a$1;
var LABELS = (_a$1 = {},
    _a$1[LANGUAGE_CONTEXT_ID] = 'Language',
    _a$1[CURRENCY_CONTEXT_ID] = 'Currency',
    _a$1);
var SiteContextComponentService = /** @class */ (function () {
    function SiteContextComponentService(componentData, contextServiceMap, injector) {
        this.componentData = componentData;
        this.contextServiceMap = contextServiceMap;
        this.injector = injector;
    }
    SiteContextComponentService.prototype.getItems = function (context) {
        var _this = this;
        return this.getService(context).pipe(switchMap(function (service) { return service.getAll(); }), switchMap(function (items) {
            return _this.getContext(context).pipe(switchMap(function (ctx) {
                var e_1, _a;
                var itemsCopy = [];
                try {
                    for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                        var item = items_1_1.value;
                        itemsCopy.push(__assign(__assign({}, item), { label: _this.getOptionLabel(item, ctx) }));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return of(itemsCopy);
            }));
        }));
    };
    SiteContextComponentService.prototype.getActiveItem = function (context) {
        return this.getService(context).pipe(switchMap(function (service) { return service.getActive(); }));
    };
    SiteContextComponentService.prototype.getLabel = function (context) {
        return this.getContext(context).pipe(map(function (ctx) {
            return LABELS[ctx];
        }));
    };
    SiteContextComponentService.prototype.setActive = function (value, context) {
        this.getService(context)
            .pipe(take(1))
            .subscribe(function (service) {
            service.setActive(value);
        });
    };
    SiteContextComponentService.prototype.getService = function (context) {
        var _this = this;
        return this.getContext(context).pipe(map(function (ctx) { return _this.getInjectedService(ctx); }), filter(function (s) { return !!s; }));
    };
    SiteContextComponentService.prototype.getContext = function (context) {
        if (context) {
            return of(context);
        }
        else if (this.componentData) {
            return this.componentData.data$.pipe(map(function (data) { return data.context; }), map(function (ctx) {
                switch (ctx) {
                    case 'LANGUAGE':
                        return LANGUAGE_CONTEXT_ID;
                    case 'CURRENCY':
                        return CURRENCY_CONTEXT_ID;
                    default:
                        return ctx;
                }
            }));
        }
    };
    SiteContextComponentService.prototype.getInjectedService = function (context) {
        return this.injector.get(this.contextServiceMap[context], null);
    };
    SiteContextComponentService.prototype.getOptionLabel = function (item, context) {
        switch (context) {
            case LANGUAGE_CONTEXT_ID:
                return item.nativeName;
            case CURRENCY_CONTEXT_ID:
                return item.symbol + ' ' + item.isocode;
            default:
                return item.isocode;
        }
    };
    SiteContextComponentService.ctorParameters = function () { return [
        { type: CmsComponentData, decorators: [{ type: Optional }] },
        { type: ContextServiceMap },
        { type: Injector }
    ]; };
    SiteContextComponentService = __decorate([
        Injectable(),
        __param(0, Optional())
    ], SiteContextComponentService);
    return SiteContextComponentService;
}());

var SiteContextSelectorComponent = /** @class */ (function () {
    function SiteContextSelectorComponent(componentService) {
        this.componentService = componentService;
        this.iconTypes = ICON_TYPE;
    }
    Object.defineProperty(SiteContextSelectorComponent.prototype, "items$", {
        get: function () {
            return this.componentService.getItems(this.context);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextSelectorComponent.prototype, "activeItem$", {
        get: function () {
            return this.componentService.getActiveItem(this.context);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextSelectorComponent.prototype, "active", {
        set: function (value) {
            this.componentService.setActive(value, this.context);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextSelectorComponent.prototype, "label$", {
        get: function () {
            return this.componentService.getLabel(this.context);
        },
        enumerable: true,
        configurable: true
    });
    SiteContextSelectorComponent.ctorParameters = function () { return [
        { type: SiteContextComponentService }
    ]; };
    __decorate([
        Input()
    ], SiteContextSelectorComponent.prototype, "context", void 0);
    SiteContextSelectorComponent = __decorate([
        Component({
            selector: 'cx-site-context-selector',
            template: "<label *ngIf=\"(items$ | async)?.length > 1 && (items$ | async) as items\">\n  <span>{{ label$ | async }}</span>\n  <select (change)=\"active = $event.target.value\">\n    <option\n      *ngFor=\"let item of items\"\n      value=\"{{ item.isocode }}\"\n      [selected]=\"(activeItem$ | async) === item.isocode\"\n      >{{ item.label }}</option\n    > </select\n  ><cx-icon [type]=\"iconTypes.CARET_DOWN\" class=\"small\"></cx-icon>\n</label>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], SiteContextSelectorComponent);
    return SiteContextSelectorComponent;
}());

var SiteContextSelectorModule = /** @class */ (function () {
    function SiteContextSelectorModule() {
    }
    SiteContextSelectorModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CMSSiteContextComponent: {
                            component: SiteContextSelectorComponent,
                            providers: [
                                {
                                    provide: SiteContextComponentService,
                                    useClass: SiteContextComponentService,
                                    deps: [CmsComponentData, ContextServiceMap, Injector],
                                },
                            ],
                        },
                        LanguageCurrencyComponent: {
                            component: LanguageCurrencyComponent,
                        },
                    },
                }),
                SiteContextModule,
                IconModule,
            ],
            providers: [SiteContextComponentService],
            declarations: [SiteContextSelectorComponent, LanguageCurrencyComponent],
            entryComponents: [SiteContextSelectorComponent, LanguageCurrencyComponent],
            exports: [SiteContextSelectorComponent, LanguageCurrencyComponent],
        })
    ], SiteContextSelectorModule);
    return SiteContextSelectorModule;
}());

var SiteContextType;
(function (SiteContextType) {
    SiteContextType["LANGUAGE"] = "LANGUAGE";
    SiteContextType["CURRENCY"] = "CURRENCY";
})(SiteContextType || (SiteContextType = {}));

var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /**
         * The rating component can be used in disabled mode,
         * so that the interation is not provided.
         */
        this.disabled = false;
        /**
         * Emits the given rating when the user clicks on a star.
         */
        this.change = new EventEmitter();
        this.initialRate = 0;
        this.iconTypes = ICON_TYPE;
    }
    StarRatingComponent.prototype.ngOnInit = function () {
        this.setRate(this.rating, true);
    };
    StarRatingComponent.prototype.setRate = function (value, force) {
        if (!this.disabled || force) {
            // TODO(issue:#3803) deprecated since 1.0.2
            if (this.renderer) {
                this.renderer.setAttribute(this.el.nativeElement, 'style', "--star-fill:" + (value || this.initialRate) + ";");
            }
            else {
                this.el.nativeElement.style.setProperty('--star-fill', value || this.initialRate);
            }
        }
    };
    StarRatingComponent.prototype.saveRate = function (rating) {
        if (this.disabled) {
            return;
        }
        this.initialRate = rating;
        this.setRate(rating);
        this.change.emit(rating);
    };
    StarRatingComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input(), HostBinding('attr.disabled')
    ], StarRatingComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], StarRatingComponent.prototype, "rating", void 0);
    __decorate([
        Output()
    ], StarRatingComponent.prototype, "change", void 0);
    StarRatingComponent = __decorate([
        Component({
            selector: 'cx-star-rating',
            template: "<cx-icon\n  *ngFor=\"let i of [1, 2, 3, 4, 5]\"\n  [type]=\"iconTypes.STAR\"\n  class=\"star\"\n  (mouseover)=\"setRate(i)\"\n  (mouseout)=\"setRate(0)\"\n  (click)=\"saveRate(i)\"\n  [attr.tabindex]=\"disabled ? null : 0\"\n></cx-icon>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], StarRatingComponent);
    return StarRatingComponent;
}());

var StarRatingModule = /** @class */ (function () {
    function StarRatingModule() {
    }
    StarRatingModule = __decorate([
        NgModule({
            imports: [CommonModule, IconModule],
            declarations: [StarRatingComponent],
            exports: [StarRatingComponent],
        })
    ], StarRatingModule);
    return StarRatingModule;
}());

var ViewConfig = /** @class */ (function () {
    function ViewConfig() {
    }
    return ViewConfig;
}());

var ViewConfigModule = /** @class */ (function () {
    function ViewConfigModule() {
    }
    ViewConfigModule_1 = ViewConfigModule;
    ViewConfigModule.forRoot = function () {
        return {
            ngModule: ViewConfigModule_1,
            providers: [
                provideConfig({
                    view: {},
                }),
                {
                    provide: ViewConfig,
                    useExisting: Config,
                },
            ],
        };
    };
    var ViewConfigModule_1;
    ViewConfigModule = ViewConfigModule_1 = __decorate([
        NgModule({})
    ], ViewConfigModule);
    return ViewConfigModule;
}());

var CustomFormValidators = /** @class */ (function () {
    function CustomFormValidators() {
    }
    CustomFormValidators.emailDomainValidator = function (control) {
        var email = control.value;
        return email.match('[.][a-zA-Z]+$') ? null : { InvalidEmail: true };
    };
    CustomFormValidators.emailValidator = function (control) {
        var email = control.value;
        return email.match(EMAIL_PATTERN) ? null : { InvalidEmail: true };
    };
    CustomFormValidators.passwordValidator = function (control) {
        var password = control.value;
        return password.match(PASSWORD_PATTERN) ? null : { InvalidPassword: true };
    };
    CustomFormValidators.matchPassword = function (control) {
        if (control.get('password').value !== control.get('passwordconf').value) {
            return { NotEqual: true };
        }
        return null;
    };
    return CustomFormValidators;
}());

var titleScores = {
    mr: 1,
    mrs: 2,
    miss: 3,
    ms: 4,
    dr: 5,
    rev: 6,
};
function sortTitles(title1, title2) {
    if (!titleScores[title1.code] || !titleScores[title2.code]) {
        return 1;
    }
    else {
        return titleScores[title1.code] - titleScores[title2.code];
    }
}

var PromotionsComponent = /** @class */ (function () {
    function PromotionsComponent() {
    }
    __decorate([
        Input()
    ], PromotionsComponent.prototype, "promotions", void 0);
    PromotionsComponent = __decorate([
        Component({
            selector: 'cx-promotions',
            template: "<div class=\"cx-promotions\" *ngIf=\"promotions\">\n  <ng-container *cxFeatureLevel=\"'!1.4'\">\n    <strong *ngFor=\"let promotion of promotions\">\n      <li>{{ promotion.description }}</li>\n    </strong>\n  </ng-container>\n\n  <ng-container *cxFeatureLevel=\"'1.4'\">\n    <ul *ngFor=\"let promotion of promotions\">\n      <li>{{ promotion.description }}</li>\n    </ul>\n  </ng-container>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PromotionsComponent);
    return PromotionsComponent;
}());

var PromotionsModule = /** @class */ (function () {
    function PromotionsModule() {
    }
    PromotionsModule = __decorate([
        NgModule({
            imports: [CommonModule, FeaturesConfigModule],
            declarations: [PromotionsComponent],
            exports: [PromotionsComponent],
        })
    ], PromotionsModule);
    return PromotionsModule;
}());

var AppliedCouponsComponent = /** @class */ (function () {
    function AppliedCouponsComponent(cartVoucherService) {
        this.cartVoucherService = cartVoucherService;
        this.cartIsLoading = false;
        this.isReadOnly = false;
        this.iconTypes = ICON_TYPE;
    }
    Object.defineProperty(AppliedCouponsComponent.prototype, "sortedVouchers", {
        get: function () {
            this.vouchers = this.vouchers || [];
            return this.vouchers.slice().sort(function (a, b) {
                return a.code.localeCompare(b.code);
            });
        },
        enumerable: true,
        configurable: true
    });
    AppliedCouponsComponent.prototype.removeVoucher = function (voucherId) {
        this.cartVoucherService.removeVoucher(voucherId);
    };
    AppliedCouponsComponent.ctorParameters = function () { return [
        { type: CartVoucherService }
    ]; };
    __decorate([
        Input()
    ], AppliedCouponsComponent.prototype, "vouchers", void 0);
    __decorate([
        Input()
    ], AppliedCouponsComponent.prototype, "cartIsLoading", void 0);
    __decorate([
        Input()
    ], AppliedCouponsComponent.prototype, "isReadOnly", void 0);
    AppliedCouponsComponent = __decorate([
        Component({
            selector: 'cx-applied-coupons',
            template: "<div *ngIf=\"isReadOnly; else editableCoupons\">\r\n  <div *ngIf=\"sortedVouchers.length > 0\">\r\n    <div class=\"cx-applied-coupon-title\">\r\n      {{ 'voucher.vouchersApplied' | cxTranslate }}\r\n    </div>\r\n  </div>\r\n  <div\r\n    *ngFor=\"let voucher of sortedVouchers\"\r\n    class=\"coupon-summary cx-coupon-card textonly\"\r\n    role=\"filter\"\r\n  >\r\n    <span class=\"cx-applied-coupon-code\">{{ voucher.voucherCode }}</span>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #editableCoupons>\r\n  <div class=\"row\">\r\n    <div\r\n      *ngFor=\"let voucher of sortedVouchers\"\r\n      class=\"col-sm-12 col-md-6 col-lg-12 cx-coupon-card-grid\"\r\n      role=\"filter\"\r\n    >\r\n      <div class=\"cx-coupon-apply cx-coupon-card cx-coupon-list-wrap\">\r\n        <span class=\"cx-cart-coupon-code\">{{ voucher.voucherCode }}</span>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          aria-label=\"Close\"\r\n          (click)=\"removeVoucher(voucher.voucherCode)\"\r\n          [disabled]=\"cartIsLoading\"\r\n          [class.disabled]=\"cartIsLoading\"\r\n        >\r\n          <span aria-hidden=\"true\">\r\n            <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\r\n          </span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], AppliedCouponsComponent);
    return AppliedCouponsComponent;
}());

var CartCouponComponent = /** @class */ (function () {
    function CartCouponComponent(cartService, authService, cartVoucherService, formBuilder, customerCouponService, featureConfig) {
        this.cartService = cartService;
        this.authService = authService;
        this.cartVoucherService = cartVoucherService;
        this.formBuilder = formBuilder;
        this.customerCouponService = customerCouponService;
        this.featureConfig = featureConfig;
        this.MAX_CUSTOMER_COUPON_PAGE = 100;
        this.ignoreCloseEvent = false;
        this.subscription = new Subscription();
        this.couponBoxIsActive = false;
    }
    CartCouponComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.customerCouponService) {
            this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
        }
        if (this.featureConfig && this.featureConfig.isLevel('1.5')) {
            this.cart$ = combineLatest([
                this.cartService.getActive(),
                this.authService.getOccUserId(),
                this.customerCouponService.getCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE),
            ]).pipe(tap(function (_a) {
                var _b = __read(_a, 3), cart = _b[0], userId = _b[1], customerCoupons = _b[2];
                _this.cartId =
                    userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code;
                _this.getApplicableCustomerCoupons(cart, customerCoupons.coupons);
            }), map(function (_a) {
                var _b = __read(_a, 1), cart = _b[0];
                return cart;
            }));
        }
        //TODO(issue:#5971) Deprecated since 1.5
        else {
            this.cart$ = combineLatest([
                this.cartService.getActive(),
                this.authService.getOccUserId(),
            ]).pipe(tap(function (_a) {
                var _b = __read(_a, 2), cart = _b[0], userId = _b[1];
                return (_this.cartId =
                    userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code);
            }), map(function (_a) {
                var _b = __read(_a, 1), cart = _b[0];
                return cart;
            }));
        }
        //TODO(issue:#5971) Deprecated since 1.5
        this.cartIsLoading$ = this.cartService
            .getLoaded()
            .pipe(map(function (loaded) { return !loaded; }));
        this.cartVoucherService.resetAddVoucherProcessingState();
        this.form = this.formBuilder.group({
            couponCode: ['', [Validators.required]],
        });
        this.submitDisabled$ = combineLatest([
            this.cartIsLoading$,
            this.form.valueChanges.pipe(startWith(true), map(function () { return _this.form.valid; })),
            this.cartVoucherService.getAddVoucherResultLoading(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 3), cartIsLoading = _b[0], btnEnabled = _b[1], addVoucherIsLoading = _b[2];
            return cartIsLoading || !btnEnabled || addVoucherIsLoading;
        }));
        this.subscription.add(this.cartVoucherService
            .getAddVoucherResultSuccess()
            .subscribe(function (success) {
            _this.onSuccess(success);
        }));
        this.subscription.add(this.cartVoucherService.getAddVoucherResultError().subscribe(function (error) {
            _this.onError(error);
        }));
    };
    CartCouponComponent.prototype.onError = function (error) {
        if (error) {
            this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
            this.cartVoucherService.resetAddVoucherProcessingState();
        }
    };
    CartCouponComponent.prototype.onSuccess = function (success) {
        if (success) {
            this.form.reset();
            this.cartVoucherService.resetAddVoucherProcessingState();
        }
    };
    CartCouponComponent.prototype.getApplicableCustomerCoupons = function (cart, coupons) {
        var _this = this;
        this.applicableCoupons = coupons || [];
        if (cart.appliedVouchers) {
            cart.appliedVouchers.forEach(function (appliedVoucher) {
                _this.applicableCoupons = _this.applicableCoupons.filter(function (coupon) { return coupon.couponId !== appliedVoucher.code; });
            });
        }
        this.filteredCoupons = this.applicableCoupons;
    };
    CartCouponComponent.prototype.applyVoucher = function () {
        this.cartVoucherService.addVoucher(this.form.value.couponCode, this.cartId);
    };
    CartCouponComponent.prototype.applyCustomerCoupon = function (couponId) {
        this.cartVoucherService.addVoucher(couponId, this.cartId);
        this.couponBoxIsActive = false;
    };
    CartCouponComponent.prototype.filter = function (query) {
        var filterValue = query.toLowerCase();
        this.filteredCoupons = this.applicableCoupons.filter(function (coupon) { return coupon.couponId.toLowerCase().indexOf(filterValue) > -1; });
    };
    CartCouponComponent.prototype.open = function () {
        this.filteredCoupons = this.applicableCoupons;
        if (this.applicableCoupons.length > 0) {
            this.couponBoxIsActive = true;
        }
    };
    CartCouponComponent.prototype.close = function (event) {
        if (!this.ignoreCloseEvent) {
            this.couponBoxIsActive = false;
            if (event && event.target) {
                event.target.blur();
            }
        }
        this.ignoreCloseEvent = false;
    };
    CartCouponComponent.prototype.disableClose = function () {
        this.ignoreCloseEvent = true;
    };
    CartCouponComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.cartVoucherService.resetAddVoucherProcessingState();
    };
    CartCouponComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: AuthService },
        { type: CartVoucherService },
        { type: FormBuilder },
        { type: CustomerCouponService },
        { type: FeatureConfigService }
    ]; };
    CartCouponComponent = __decorate([
        Component({
            selector: 'cx-cart-coupon',
            template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <div class=\"cx-cart-coupon-title\">\n    {{ 'voucher.coupon' | cxTranslate }}\n  </div>\n  <div class=\"form-group \">\n    <ng-container *cxFeatureLevel=\"'1.5'\">\n      <form (submit)=\"applyVoucher()\" [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"cx-apply-voucher\">\n              <input\n                #couponInput\n                class=\"form-control input-coupon-code\"\n                id=\"applyVoucher\"\n                formControlName=\"couponCode\"\n                [placeholder]=\"'voucher.placeholder' | cxTranslate\"\n                aria-label=\"applyVoucher\"\n                (focus)=\"open()\"\n                (input)=\"filter(couponInput.value)\"\n                (blur)=\"close($event)\"\n                (keydown.escape)=\"close($event)\"\n                autocomplete=\"off\"\n              />\n\n              <div [class.couponbox-is-active]=\"couponBoxIsActive\">\n                <div\n                  *ngIf=\"filteredCoupons && filteredCoupons.length > 0\"\n                  class=\"cx-customer-coupons\"\n                  (click)=\"close($event)\"\n                >\n                  <div class=\"coupons\" (mousedown)=\"disableClose()\">\n                    <a\n                      *ngFor=\"let coupon of filteredCoupons\"\n                      (click)=\"applyCustomerCoupon(coupon.couponId)\"\n                    >\n                      <div class=\"coupon-id\">{{ coupon.couponId }}</div>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-block btn-action apply-coupon-button\"\n              type=\"submit\"\n              [disabled]=\"submitDisabled$ | async\"\n              [class.disabled]=\"submitDisabled$ | async\"\n            >\n              {{ 'voucher.apply' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </ng-container>\n\n    <ng-container *cxFeatureLevel=\"'!1.5'\">\n      <form (submit)=\"applyVoucher()\" [formGroup]=\"form\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <input\n              type=\"text\"\n              class=\"form-control input-coupon-code\"\n              id=\"applyVoucher\"\n              formControlName=\"couponCode\"\n              placeholder=\"{{ 'voucher.placeholder' | cxTranslate }}\"\n            />\n          </div>\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-block btn-action apply-coupon-button\"\n              type=\"submit\"\n              [disabled]=\"submitDisabled$ | async\"\n              [class.disabled]=\"submitDisabled$ | async\"\n            >\n              {{ 'voucher.apply' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </ng-container>\n  </div>\n\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [cartIsLoading]=\"cartIsLoading$ | async\"\n    [isReadOnly]=\"false\"\n  >\n  </cx-applied-coupons>\n</ng-container>\n"
        })
    ], CartCouponComponent);
    return CartCouponComponent;
}());

var CartCouponModule = /** @class */ (function () {
    function CartCouponModule() {
    }
    CartCouponModule = __decorate([
        NgModule({
            declarations: [CartCouponComponent, AppliedCouponsComponent],
            exports: [CartCouponComponent, AppliedCouponsComponent],
            imports: [
                FeaturesConfigModule,
                CommonModule,
                NgSelectModule,
                FormsModule,
                ReactiveFormsModule,
                I18nModule,
                IconModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CartApplyCouponComponent: {
                            component: CartCouponComponent,
                        },
                    },
                }),
            ],
            entryComponents: [CartCouponComponent],
        })
    ], CartCouponModule);
    return CartCouponModule;
}());

var CartItemListComponent = /** @class */ (function () {
    function CartItemListComponent(cartService, selectiveCartService, featureConfig) {
        this.cartService = cartService;
        this.selectiveCartService = selectiveCartService;
        this.featureConfig = featureConfig;
        this.readonly = false;
        this.hasHeader = true;
        this.options = {
            isSaveForLater: false,
            optionalBtn: null,
        };
        this._items = [];
        this.potentialProductPromotions = [];
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    Object.defineProperty(CartItemListComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this.resolveItems(items);
            this.createForm();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartItemListComponent.prototype, "setLoading", {
        set: function (value) {
            if (!this.readonly) {
                // Whenver the cart is loading, we disable the complete form
                // to avoid any user interaction with the cart.
                value
                    ? this.form.disable({ emitEvent: false })
                    : this.form.enable({ emitEvent: false });
            }
        },
        enumerable: true,
        configurable: true
    });
    //TODO remove feature flag for #5958
    CartItemListComponent.prototype.isSaveForLaterEnabled = function () {
        if (this.featureConfig) {
            return this.featureConfig.isEnabled('saveForLater');
        }
        return false;
    };
    //TODO remove feature flag for #5958
    /**
     * The items we're getting form the input do not have a consistent model.
     * In case of a `consignmentEntry`, we need to normalize the data from the orderEntry.
     */
    CartItemListComponent.prototype.resolveItems = function (items) {
        if (items.every(function (item) { return item.hasOwnProperty('orderEntry'); })) {
            this._items = items.map(function (consignmentEntry) {
                var entry = Object.assign({}, consignmentEntry.orderEntry);
                entry.quantity = consignmentEntry.quantity;
                return entry;
            });
        }
        else {
            this._items = items;
        }
    };
    CartItemListComponent.prototype.createForm = function () {
        var _this = this;
        this.form = new FormGroup({});
        this._items.forEach(function (item) {
            var code = item.product.code;
            var group = new FormGroup({
                entryNumber: new FormControl(item.entryNumber),
                quantity: new FormControl(item.quantity, { updateOn: 'blur' }),
            });
            if (!item.updateable || _this.readonly) {
                group.disable();
            }
            _this.form.addControl(code, group);
        });
    };
    CartItemListComponent.prototype.removeEntry = function (item) {
        if (this.selectiveCartService && this.options.isSaveForLater) {
            this.selectiveCartService.removeEntry(item);
        }
        else {
            this.cartService.removeEntry(item);
        }
        delete this.form.controls[item.product.code];
    };
    CartItemListComponent.prototype.getControl = function (item) {
        var _this = this;
        return this.form.get(item.product.code).valueChanges.pipe(
        // tslint:disable-next-line:deprecation
        startWith(null), map(function (value) {
            if (value && _this.selectiveCartService && _this.options.isSaveForLater) {
                _this.selectiveCartService.updateEntry(value.entryNumber, value.quantity);
            }
            else if (value) {
                _this.cartService.updateEntry(value.entryNumber, value.quantity);
            }
        }), map(function () { return _this.form.get(item.product.code); }));
    };
    CartItemListComponent.prototype.getPotentialProductPromotionsForItem = function (item) {
        var e_1, _a, e_2, _b;
        var entryPromotions = [];
        //don't show promotions in saveforlater
        if (this.options.isSaveForLater) {
            return entryPromotions;
        }
        if (this.potentialProductPromotions &&
            this.potentialProductPromotions.length > 0) {
            try {
                for (var _c = __values(this.potentialProductPromotions), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var promotion = _d.value;
                    if (promotion.description &&
                        promotion.consumedEntries &&
                        promotion.consumedEntries.length > 0) {
                        try {
                            for (var _e = (e_2 = void 0, __values(promotion.consumedEntries)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var consumedEntry = _f.value;
                                if (this.isConsumedByEntry(consumedEntry, item)) {
                                    entryPromotions.push(promotion);
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return entryPromotions;
    };
    CartItemListComponent.prototype.isConsumedByEntry = function (consumedEntry, entry) {
        var e_3, _a;
        var consumedEntryNumber = consumedEntry.orderEntryNumber;
        if (entry.entries && entry.entries.length > 0) {
            try {
                for (var _b = __values(entry.entries), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var subEntry = _c.value;
                    if (subEntry.entryNumber === consumedEntryNumber) {
                        return true;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return false;
        }
        else {
            return consumedEntryNumber === entry.entryNumber;
        }
    };
    CartItemListComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: SelectiveCartService },
        { type: FeatureConfigService }
    ]; };
    __decorate([
        Input()
    ], CartItemListComponent.prototype, "readonly", void 0);
    __decorate([
        Input()
    ], CartItemListComponent.prototype, "hasHeader", void 0);
    __decorate([
        Input()
    ], CartItemListComponent.prototype, "options", void 0);
    __decorate([
        Input('items')
    ], CartItemListComponent.prototype, "items", null);
    __decorate([
        Input()
    ], CartItemListComponent.prototype, "potentialProductPromotions", void 0);
    __decorate([
        Input()
    ], CartItemListComponent.prototype, "promotionLocation", void 0);
    __decorate([
        Input('cartIsLoading')
    ], CartItemListComponent.prototype, "setLoading", null);
    CartItemListComponent = __decorate([
        Component({
            selector: 'cx-cart-item-list',
            template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n\n    <ng-container\n      *ngIf=\"\n        isSaveForLaterEnabled() && options.isSaveForLater;\n        else totalHeader\n      \"\n    >\n      <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n        {{ 'saveForLaterItems.stock' | cxTranslate }}\n      </div>\n    </ng-container>\n  </div>\n</div>\n\n<div class=\"cx-item-list-row\" *ngFor=\"let item of items; let i = index\">\n  <div\n    class=\"cx-item-list-items\"\n    *ngIf=\"getControl(item) | async as control\"\n    [class.is-changed]=\"control.get('quantity').dirty\"\n  >\n    <cx-cart-item\n      [item]=\"item\"\n      [quantityControl]=\"control.get('quantity')\"\n      [readonly]=\"readonly\"\n      [potentialProductPromotions]=\"getPotentialProductPromotionsForItem(item)\"\n      [promotionLocation]=\"promotionLocation\"\n      [options]=\"options\"\n    >\n    </cx-cart-item>\n  </div>\n</div>\n\n<ng-template #totalHeader>\n  <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n    {{ 'cartItems.total' | cxTranslate }}\n  </div>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CartItemListComponent);
    return CartItemListComponent;
}());

var CartItemComponent = /** @class */ (function () {
    function CartItemComponent(promotionService, featureConfig) {
        this.promotionService = promotionService;
        this.featureConfig = featureConfig;
        this.compact = false;
        this.readonly = false;
        this.view = new EventEmitter();
        this.promotionLocation = PromotionLocation.ActiveCart;
        // TODO: evaluate whether this is generic enough
        this.options = {
            isSaveForLater: false,
            optionalBtn: null,
        };
    }
    CartItemComponent.prototype.ngOnInit = function () {
        this.appliedProductPromotions$ = this.promotionService.getProductPromotionForEntry(this.item, this.promotionLocation);
    };
    //TODO remove feature flag for #5958
    CartItemComponent.prototype.isSaveForLaterEnabled = function () {
        if (this.featureConfig) {
            return this.featureConfig.isEnabled('saveForLater');
        }
        return false;
    };
    //TODO remove feature flag for #5958
    CartItemComponent.prototype.isProductOutOfStock = function (product) {
        // TODO Move stocklevelstatuses across the app to an enum
        return (product &&
            product.stock &&
            product.stock.stockLevelStatus === 'outOfStock');
    };
    CartItemComponent.prototype.removeItem = function () {
        this.quantityControl.setValue(0);
        this.quantityControl.markAsDirty();
    };
    CartItemComponent.prototype.viewItem = function () {
        this.view.emit();
    };
    CartItemComponent.ctorParameters = function () { return [
        { type: PromotionService },
        { type: FeatureConfigService }
    ]; };
    __decorate([
        Input()
    ], CartItemComponent.prototype, "compact", void 0);
    __decorate([
        Input()
    ], CartItemComponent.prototype, "item", void 0);
    __decorate([
        Input()
    ], CartItemComponent.prototype, "potentialProductPromotions", void 0);
    __decorate([
        Input()
    ], CartItemComponent.prototype, "readonly", void 0);
    __decorate([
        Input()
    ], CartItemComponent.prototype, "quantityControl", void 0);
    __decorate([
        Output()
    ], CartItemComponent.prototype, "view", void 0);
    __decorate([
        Input()
    ], CartItemComponent.prototype, "promotionLocation", void 0);
    __decorate([
        Input()
    ], CartItemComponent.prototype, "options", void 0);
    CartItemComponent = __decorate([
        Component({
            selector: 'cx-cart-item',
            template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n      (click)=\"viewItem()\"\n      tabindex=\"-1\"\n    >\n      <cx-media\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n            (click)=\"viewItem()\"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <ng-container *cxFeatureLevel=\"'!1.5'\">\n          <div\n            *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n            class=\"cx-property\"\n          >\n            <div class=\"cx-label\">{{ variant.name }}</div>\n            <div class=\"cx-value\">{{ variant.value }}</div>\n          </div>\n        </ng-container>\n        <ng-container *cxFeatureLevel=\"'1.5'\">\n          <ng-container *ngIf=\"item.product.baseOptions?.length\">\n            <div\n              *ngFor=\"\n                let variant of item.product.baseOptions[0]?.selected\n                  ?.variantOptionQualifiers\n              \"\n              class=\"cx-property\"\n            >\n              <div class=\"cx-label\" *ngIf=\"variant.name && variant.value\">\n                {{ variant.name }}: {{ variant.value }}\n              </div>\n            </div>\n          </ng-container>\n        </ng-container>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div class=\"cx-quantity\" [ngClass]=\"compact ? '' : ' col-3'\">\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">\n          <cx-item-counter\n            [control]=\"quantityControl\"\n            [readonly]=\"\n              !item.updateable ||\n              readonly ||\n              (isSaveForLaterEnabled() && options.isSaveForLater)\n            \"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            [allowZero]=\"true\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <ng-container\n        *ngIf=\"isSaveForLaterEnabled() && options.isSaveForLater; else total\"\n      >\n        <div\n          class=\"cx-total\"\n          [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n        >\n          <div\n            class=\"cx-label\"\n            [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          >\n            {{ 'saveForLaterItems.stock' | cxTranslate }}\n          </div>\n          <div\n            *ngIf=\"item.product?.stock?.stockLevel >= 0; else forceInstock\"\n            class=\"cx-value\"\n          >\n            {{ item.product.stock.stockLevel }}\n          </div>\n          <ng-template #forceInstock\n            ><div class=\"cx-value\">\n              {{ 'saveForLaterItems.forceInStock' | cxTranslate }}\n            </div></ng-template\n          >\n        </div>\n      </ng-container>\n    </div>\n    <!-- Availability -->\n    <div\n      *ngIf=\"isProductOutOfStock(item.product)\"\n      class=\"cx-availability col-12\"\n    >\n      {{ 'productSummary.outOfStock' | cxTranslate }}\n    </div>\n    <!-- Promotion -->\n    <ng-container *cxFeatureLevel=\"'!1.5'\">\n      <cx-promotions [promotions]=\"potentialProductPromotions\"></cx-promotions>\n    </ng-container>\n\n    <ng-container *cxFeatureLevel=\"'1.5'\">\n      <ng-container\n        *ngIf=\"appliedProductPromotions$ | async as appliedProductPromotions\"\n      >\n        <cx-promotions [promotions]=\"appliedProductPromotions\"></cx-promotions>\n      </ng-container>\n    </ng-container>\n\n    <!-- Actions -->\n    <div\n      *ngIf=\"(!readonly || options.isSaveForLater) && item.updateable\"\n      class=\"cx-actions col-12\"\n    >\n      <ng-container *ngIf=\"!isProductOutOfStock(item.product)\">\n        <ng-container\n          *ngTemplateOutlet=\"\n            options.optionalBtn;\n            context: {\n              $implicit: { loading: quantityControl.disabled, item: item }\n            }\n          \"\n        ></ng-container>\n      </ng-container>\n\n      <div class=\"col-md-3 cx-remove-btn\">\n        <button\n          class=\"link\"\n          [disabled]=\"quantityControl.disabled\"\n          (click)=\"removeItem()\"\n        >\n          {{ 'common.remove' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #total>\n  <div\n    *ngIf=\"item.totalPrice\"\n    class=\"cx-total\"\n    [ngClass]=\"compact ? '' : ' col-md-3 col-xl-2'\"\n  >\n    <div\n      class=\"cx-label\"\n      [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n    >\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n    <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n  </div>\n</ng-template>\n"
        })
    ], CartItemComponent);
    return CartItemComponent;
}());

var OrderSummaryComponent = /** @class */ (function () {
    function OrderSummaryComponent() {
    }
    __decorate([
        Input()
    ], OrderSummaryComponent.prototype, "cart", void 0);
    OrderSummaryComponent = __decorate([
        Component({
            selector: 'cx-order-summary',
            template: "<h4>{{ 'orderCost.orderSummary' | cxTranslate }}</h4>\n\n<div class=\"cx-summary-partials\" *ngIf=\"cart\">\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.subtotal' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.subTotal?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.estimatedShipping' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{\n        cart.deliveryCost?.formattedValue\n          ? cart.deliveryCost.formattedValue\n          : 'TBD'\n      }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"cart.net\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.salesTax' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalTax?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row cx-summary-total\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.total' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalPriceWithTax?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"cart.totalDiscounts?.value > 0\">\n    {{ 'orderCost.discount' | cxTranslate }}\n    {{ cart.totalDiscounts?.formattedValue }}\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"!cart.net\">\n    {{ 'orderCost.grossTax' | cxTranslate }}\n    {{ cart.totalTax?.formattedValue }}.\n  </div>\n</div>\n\n<!--\n<cx-promotions\n  *ngIf=\"cart\"\n  [promotions]=\"cart.appliedOrderPromotions\"\n></cx-promotions>\n-->\n\n<ng-container *cxFeatureLevel=\"'1.3'\">\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [isReadOnly]=\"true\"\n  ></cx-applied-coupons>\n</ng-container>\n"
        })
    ], OrderSummaryComponent);
    return OrderSummaryComponent;
}());

var CartSharedModule = /** @class */ (function () {
    function CartSharedModule() {
    }
    CartSharedModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                CartCouponModule,
                ReactiveFormsModule,
                UrlModule,
                NgbModule,
                PromotionsModule,
                I18nModule,
                MediaModule,
                ItemCounterModule,
                FeaturesConfigModule,
            ],
            declarations: [
                CartItemComponent,
                OrderSummaryComponent,
                CartItemListComponent,
            ],
            exports: [CartItemComponent, CartItemListComponent, OrderSummaryComponent],
        })
    ], CartSharedModule);
    return CartSharedModule;
}());

var AddToCartModule = /** @class */ (function () {
    function AddToCartModule() {
    }
    AddToCartModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                CartSharedModule,
                RouterModule,
                SpinnerModule,
                PromotionsModule,
                FeaturesConfigModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        ProductAddToCartComponent: {
                            component: AddToCartComponent,
                        },
                    },
                }),
                UrlModule,
                IconModule,
                I18nModule,
                ItemCounterModule,
                AutoFocusDirectiveModule,
            ],
            declarations: [AddToCartComponent, AddedToCartDialogComponent],
            entryComponents: [AddToCartComponent, AddedToCartDialogComponent],
            exports: [AddToCartComponent, AddedToCartDialogComponent],
        })
    ], AddToCartModule);
    return AddToCartModule;
}());

var CartDetailsComponent = /** @class */ (function () {
    function CartDetailsComponent(cartService, promotionService, selectiveCartService, authService, routingService, featureConfig) {
        this.cartService = cartService;
        this.promotionService = promotionService;
        this.selectiveCartService = selectiveCartService;
        this.authService = authService;
        this.routingService = routingService;
        this.featureConfig = featureConfig;
        this.loggedIn = false;
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    CartDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart$ = this.cartService.getActive();
        /**
         * TODO Remove the check for promotion service
         * Issue: GH-5670
         */
        if (this.promotionService) {
            this.promotions$ = this.promotionService.getOrderPromotionsFromCart();
        }
        this.entries$ = this.cartService
            .getEntries()
            .pipe(filter(function (entries) { return entries.length > 0; }));
        if (this.isSaveForLaterEnabled()) {
            this.cartLoaded$ = combineLatest([
                this.cartService.getLoaded(),
                this.selectiveCartService.getLoaded(),
                this.authService.isUserLoggedIn(),
            ]).pipe(tap(function (_a) {
                var _b = __read(_a, 3), loggedIn = _b[2];
                return (_this.loggedIn = loggedIn);
            }), map(function (_a) {
                var _b = __read(_a, 3), cartLoaded = _b[0], sflLoaded = _b[1], loggedIn = _b[2];
                return loggedIn ? cartLoaded && sflLoaded : cartLoaded;
            }));
        }
        //TODO remove for #5958
        else {
            this.cartLoaded$ = this.cartService.getLoaded();
        }
        //TODO  remove for #5958 end
        if (this.promotionService) {
            this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
        }
    };
    //TODO remove feature flag for #5958
    CartDetailsComponent.prototype.isSaveForLaterEnabled = function () {
        if (this.featureConfig) {
            return this.featureConfig.isEnabled('saveForLater');
        }
        return false;
    };
    //TODO remove feature flag for #5958 end
    /**
     * @deprecated Since 1.5
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     */
    CartDetailsComponent.prototype.getAllPromotionsForCart = function (cart) {
        var potentialPromotions = [];
        potentialPromotions.push.apply(potentialPromotions, __spread((cart.potentialOrderPromotions || [])));
        potentialPromotions.push.apply(potentialPromotions, __spread((cart.potentialProductPromotions || [])));
        var appliedPromotions = [];
        appliedPromotions.push.apply(appliedPromotions, __spread((cart.appliedOrderPromotions || [])));
        appliedPromotions.push.apply(appliedPromotions, __spread((cart.appliedProductPromotions || [])));
        return __spread(potentialPromotions, appliedPromotions);
    };
    CartDetailsComponent.prototype.saveForLater = function (item) {
        if (this.loggedIn) {
            this.cartService.removeEntry(item);
            this.selectiveCartService.addEntry(item.product.code, item.quantity);
        }
        else {
            this.routingService.go({ cxRoute: 'login' });
        }
    };
    CartDetailsComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: PromotionService },
        { type: SelectiveCartService },
        { type: AuthService },
        { type: RoutingService },
        { type: FeatureConfigService }
    ]; };
    CartDetailsComponent = __decorate([
        Component({
            selector: 'cx-cart-details',
            template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"cart.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{ 'cartDetails.cartName' | cxTranslate: { code: cart.code } }}\n      </div>\n\n      <ng-container *cxFeatureLevel=\"'!1.5'\">\n        <cx-promotions [promotions]=\"promotions$ | async\"></cx-promotions>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [cartIsLoading]=\"!(cartLoaded$ | async)\"\n          [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        ></cx-cart-item-list>\n      </ng-container>\n\n      <ng-container *cxFeatureLevel=\"'1.5'\">\n        <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n          <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [cartIsLoading]=\"!(cartLoaded$ | async)\"\n          [promotionLocation]=\"promotionLocation\"\n          [options]=\"{\n            isSaveForLater: false,\n            optionalBtn: isSaveForLaterEnabled() ? saveForLaterBtn : null\n          }\"\n        ></cx-cart-item-list>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #saveForLaterBtn>\n  <div class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\">\n    <button\n      class=\"link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"saveForLater(ctx.item)\"\n    >\n      {{ 'saveForLaterItems.saveForLater' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CartDetailsComponent);
    return CartDetailsComponent;
}());

var CartDetailsModule = /** @class */ (function () {
    function CartDetailsModule() {
    }
    CartDetailsModule = __decorate([
        NgModule({
            imports: [
                CartSharedModule,
                CommonModule,
                CartCouponModule,
                RouterModule,
                UrlModule,
                PromotionsModule,
                FeaturesConfigModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CartComponent: {
                            component: CartDetailsComponent,
                        },
                    },
                }),
                I18nModule,
            ],
            declarations: [CartDetailsComponent],
            exports: [CartDetailsComponent],
            entryComponents: [CartDetailsComponent],
        })
    ], CartDetailsModule);
    return CartDetailsModule;
}());

var CartNotEmptyGuard = /** @class */ (function () {
    function CartNotEmptyGuard(cartService, routingService) {
        this.cartService = cartService;
        this.routingService = routingService;
    }
    CartNotEmptyGuard.prototype.canActivate = function () {
        var _this = this;
        return combineLatest([
            this.cartService.getActive(),
            this.cartService.getLoaded(),
        ]).pipe(filter(function (_a) {
            var _b = __read(_a, 2), _ = _b[0], loaded = _b[1];
            return loaded;
        }), map(function (_a) {
            var _b = __read(_a, 1), cart = _b[0];
            if (_this.isEmpty(cart)) {
                _this.routingService.go({ cxRoute: 'home' });
                return false;
            }
            return true;
        }));
    };
    CartNotEmptyGuard.prototype.isEmpty = function (cart) {
        return cart && !cart.totalItems;
    };
    CartNotEmptyGuard.ctorParameters = function () { return [
        { type: CartService },
        { type: RoutingService }
    ]; };
    CartNotEmptyGuard.ɵprov = ɵɵdefineInjectable({ factory: function CartNotEmptyGuard_Factory() { return new CartNotEmptyGuard(ɵɵinject(CartService), ɵɵinject(RoutingService)); }, token: CartNotEmptyGuard, providedIn: "root" });
    CartNotEmptyGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CartNotEmptyGuard);
    return CartNotEmptyGuard;
}());

var CartPageLayoutHandler = /** @class */ (function () {
    function CartPageLayoutHandler(cartService, selectiveCartService, featureConfig) {
        this.cartService = cartService;
        this.selectiveCartService = selectiveCartService;
        this.featureConfig = featureConfig;
    }
    CartPageLayoutHandler.prototype.handle = function (slots$, pageTemplate, section) {
        if (pageTemplate === 'CartPageTemplate' && !section) {
            if (this.featureConfig && this.featureConfig.isEnabled('saveForLater')) {
                return combineLatest([
                    slots$,
                    this.cartService.getActive(),
                    this.selectiveCartService.getCart(),
                ]).pipe(map(function (_a) {
                    var _b = __read(_a, 3), slots = _b[0], cart = _b[1], selectiveCart = _b[2];
                    if (cart.totalItems) {
                        return slots.filter(function (slot) { return slot !== 'EmptyCartMiddleContent'; });
                    }
                    else if (selectiveCart.totalItems) {
                        return slots.filter(function (slot) {
                            return slot !== 'EmptyCartMiddleContent' &&
                                slot !== 'CenterRightContentSlot';
                        });
                    }
                    else {
                        return slots.filter(function (slot) {
                            return slot !== 'TopContent' && slot !== 'CenterRightContentSlot';
                        });
                    }
                }));
            }
            //TODO remove old code for #5958
            return combineLatest([slots$, this.cartService.getActive()]).pipe(map(function (_a) {
                var _b = __read(_a, 2), slots = _b[0], cart = _b[1];
                if (cart.totalItems) {
                    return slots.filter(function (slot) { return slot !== 'EmptyCartMiddleContent'; });
                }
                else {
                    return slots.filter(function (slot) { return slot !== 'TopContent' && slot !== 'CenterRightContentSlot'; });
                }
            }));
            ////TODO remove old code for #5958
        }
        return slots$;
    };
    CartPageLayoutHandler.ctorParameters = function () { return [
        { type: CartService },
        { type: SelectiveCartService },
        { type: FeatureConfigService }
    ]; };
    CartPageLayoutHandler.ɵprov = ɵɵdefineInjectable({ factory: function CartPageLayoutHandler_Factory() { return new CartPageLayoutHandler(ɵɵinject(CartService), ɵɵinject(SelectiveCartService), ɵɵinject(FeatureConfigService)); }, token: CartPageLayoutHandler, providedIn: "root" });
    CartPageLayoutHandler = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CartPageLayoutHandler);
    return CartPageLayoutHandler;
}());

var CartTotalsComponent = /** @class */ (function () {
    function CartTotalsComponent(cartService) {
        this.cartService = cartService;
    }
    CartTotalsComponent.prototype.ngOnInit = function () {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService
            .getEntries()
            .pipe(filter(function (entries) { return entries.length > 0; }));
    };
    CartTotalsComponent.ctorParameters = function () { return [
        { type: CartService }
    ]; };
    CartTotalsComponent = __decorate([
        Component({
            selector: 'cx-cart-totals',
            template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <cx-order-summary [cart]=\"cart\"></cx-order-summary>\n    <button\n      [routerLink]=\"{ cxRoute: 'checkout' } | cxUrl\"\n      *ngIf=\"entries.length\"\n      class=\"btn btn-primary btn-block\"\n      type=\"button\"\n    >\n      {{ 'cartDetails.proceedToCheckout' | cxTranslate }}\n    </button>\n  </ng-container>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CartTotalsComponent);
    return CartTotalsComponent;
}());

var CartTotalsModule = /** @class */ (function () {
    function CartTotalsModule() {
    }
    CartTotalsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                UrlModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CartTotalsComponent: {
                            component: CartTotalsComponent,
                        },
                    },
                }),
                CartSharedModule,
                I18nModule,
                CartCouponModule,
            ],
            declarations: [CartTotalsComponent],
            exports: [CartTotalsComponent],
            entryComponents: [CartTotalsComponent],
        })
    ], CartTotalsModule);
    return CartTotalsModule;
}());

var MiniCartComponent = /** @class */ (function () {
    function MiniCartComponent(cartService) {
        this.cartService = cartService;
        this.iconTypes = ICON_TYPE;
        this.quantity$ = this.cartService.getActive().pipe(startWith({ deliveryItemsQuantity: 0 }), map(function (cart) { return cart.deliveryItemsQuantity || 0; }));
        this.total$ = this.cartService.getActive().pipe(filter(function (cart) { return !!cart.totalPrice; }), map(function (cart) { return cart.totalPrice.formattedValue; }));
    }
    MiniCartComponent.ctorParameters = function () { return [
        { type: CartService }
    ]; };
    MiniCartComponent = __decorate([
        Component({
            selector: 'cx-mini-cart',
            template: "<a\n  [attr.aria-label]=\"\n    'miniCart.item' | cxTranslate: { count: quantity$ | async }\n  \"\n  [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n>\n  <cx-icon [type]=\"iconTypes.CART\"></cx-icon>\n\n  <span class=\"total\">{{ total$ | async }}</span>\n  <span class=\"count\">{{ quantity$ | async }}</span>\n</a>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], MiniCartComponent);
    return MiniCartComponent;
}());

var MiniCartModule = /** @class */ (function () {
    function MiniCartModule() {
    }
    MiniCartModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        MiniCartComponent: {
                            component: MiniCartComponent,
                        },
                    },
                }),
                UrlModule,
                IconModule,
                I18nModule,
            ],
            declarations: [MiniCartComponent],
            exports: [MiniCartComponent],
            entryComponents: [MiniCartComponent],
        })
    ], MiniCartModule);
    return MiniCartModule;
}());

var AddToWishListComponent = /** @class */ (function () {
    function AddToWishListComponent(wishListService, currentProductService, authService) {
        var _this = this;
        this.wishListService = wishListService;
        this.currentProductService = currentProductService;
        this.authService = authService;
        this.product$ = this.currentProductService.getProduct().pipe(filter(function (product) { return Boolean(product); }), tap(function (product) { return _this.setStockInfo(product); }));
        this.wishListEntries$ = this.wishListService.getWishList().pipe(filter(function (wishlist) { return Boolean(wishlist); }), map(function (wishList) { return wishList.entries; }));
        this.userLoggedIn$ = this.authService.isUserLoggedIn();
        this.loading$ = this.wishListService.getWishListLoading();
        this.hasStock = false;
        this.iconTypes = ICON_TYPE;
    }
    AddToWishListComponent.prototype.add = function (product) {
        this.wishListService.addEntry(product.code);
    };
    AddToWishListComponent.prototype.remove = function (entry) {
        this.wishListService.removeEntry(entry);
    };
    AddToWishListComponent.prototype.getProductInWishList = function (product, entries) {
        var item = entries.find(function (entry) { return entry.product.code === product.code; });
        return item;
    };
    AddToWishListComponent.prototype.setStockInfo = function (product) {
        this.hasStock =
            product.stock && product.stock.stockLevelStatus !== 'outOfStock';
    };
    AddToWishListComponent.ctorParameters = function () { return [
        { type: WishListService },
        { type: CurrentProductService },
        { type: AuthService }
    ]; };
    AddToWishListComponent = __decorate([
        Component({
            selector: 'cx-add-to-wishlist',
            template: "<ng-container *ngIf=\"product$ | async as product\">\n  <ng-container *ngIf=\"userLoggedIn$ | async; else loginPrompt\">\n    <ng-container *ngIf=\"wishListEntries$ | async as entries\">\n      <ng-container *ngIf=\"hasStock\">\n        <div\n          *ngIf=\"getProductInWishList(product, entries) as entry; else addItem\"\n        >\n          <button\n            class=\"btn btn-link button-remove\"\n            (click)=\"remove(entry)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.HEART\"></cx-icon>\n            <span class=\"button-text\">{{\n              'addToWishList.remove' | cxTranslate\n            }}</span>\n          </button>\n        </div>\n        <ng-template #addItem>\n          <button\n            class=\"btn btn-link button-add\"\n            (click)=\"add(product)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.EMPTY_HEART\"></cx-icon>\n            <span class=\"button-text\">{{\n              'addToWishList.add' | cxTranslate\n            }}</span>\n          </button>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #loginPrompt>\n  <ng-container *ngIf=\"hasStock\">\n    <a\n      class=\"btn btn-link button-add-link\"\n      [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >\n      <cx-icon [type]=\"iconTypes.EMPTY_HEART\"></cx-icon>\n      <span class=\"button-text\">{{\n        'addToWishList.anonymous' | cxTranslate\n      }}</span>\n    </a>\n  </ng-container>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], AddToWishListComponent);
    return AddToWishListComponent;
}());

var AddToWishListModule = /** @class */ (function () {
    function AddToWishListModule() {
    }
    AddToWishListModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        AddToWishListComponent: {
                            component: AddToWishListComponent,
                        },
                    },
                }),
                I18nModule,
                IconModule,
                RouterModule,
                UrlModule,
            ],
            declarations: [AddToWishListComponent],
            entryComponents: [AddToWishListComponent],
            exports: [AddToWishListComponent],
        })
    ], AddToWishListModule);
    return AddToWishListModule;
}());

var SaveForLaterComponent = /** @class */ (function () {
    function SaveForLaterComponent(cmsService, cartService, selectiveCartService) {
        this.cmsService = cmsService;
        this.cartService = cartService;
        this.selectiveCartService = selectiveCartService;
    }
    SaveForLaterComponent.prototype.ngOnInit = function () {
        this.isCartEmpty$ = this.cartService
            .getActive()
            .pipe(map(function (cart) { return !(cart && cart.totalItems && cart.totalItems > 0); }));
        this.saveForLater$ = this.selectiveCartService.getCart();
        this.entries$ = this.selectiveCartService
            .getEntries()
            .pipe(filter(function (entries) { return entries.length > 0; }));
        this.cartLoaded$ = combineLatest([
            this.cartService.getLoaded(),
            this.selectiveCartService.getLoaded(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), cartLoaded = _b[0], sflLoaded = _b[1];
            return cartLoaded && sflLoaded;
        }));
        this.data$ = this.cmsService.getComponentData('EmptyCartParagraphComponent');
    };
    SaveForLaterComponent.prototype.moveToCart = function (item) {
        this.selectiveCartService.removeEntry(item);
        this.cartService.addEntry(item.product.code, item.quantity);
    };
    SaveForLaterComponent.ctorParameters = function () { return [
        { type: CmsService },
        { type: ActiveCartService },
        { type: SelectiveCartService }
    ]; };
    SaveForLaterComponent = __decorate([
        Component({
            selector: 'cx-save-for-later',
            template: "<ng-container *ngIf=\"isCartEmpty$ | async\">\n  <p\n    *ngIf=\"data$ | async as data\"\n    [innerHTML]=\"data.content\"\n    class=\"cx-empty-cart-info\"\n  ></p>\n</ng-container>\n\n<ng-container *ngIf=\"saveForLater$ | async as saveForLater\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"saveForLater.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{\n          'saveForLaterItems.itemTotal'\n            | cxTranslate: { count: saveForLater.totalItems }\n        }}\n      </div>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [readonly]=\"false\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n        [options]=\"{\n          isSaveForLater: true,\n          optionalBtn: moveToCartBtn\n        }\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #moveToCartBtn>\n  <div class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\">\n    <button\n      class=\"link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"moveToCart(ctx.item)\"\n    >\n      {{ 'saveForLaterItems.moveToCart' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n"
        })
    ], SaveForLaterComponent);
    return SaveForLaterComponent;
}());

var SaveForLaterModule = /** @class */ (function () {
    function SaveForLaterModule() {
    }
    SaveForLaterModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        SaveForLaterComponent: {
                            component: SaveForLaterComponent,
                        },
                    },
                    features: {
                        saveForLater: '1.5',
                    },
                }),
                I18nModule,
                CartSharedModule,
            ],
            declarations: [SaveForLaterComponent],
            exports: [SaveForLaterComponent],
            entryComponents: [SaveForLaterComponent],
        })
    ], SaveForLaterModule);
    return SaveForLaterModule;
}());

var CartComponentModule = /** @class */ (function () {
    function CartComponentModule() {
    }
    CartComponentModule = __decorate([
        NgModule({
            imports: [
                NgbModule,
                CartDetailsModule,
                CartTotalsModule,
                CartSharedModule,
                SaveForLaterModule,
            ],
            exports: [
                AddToWishListModule,
                CartDetailsModule,
                CartTotalsModule,
                CartSharedModule,
                AddToCartModule,
                MiniCartModule,
                CartModule,
                SaveForLaterModule,
            ],
            declarations: [],
            providers: [
                {
                    provide: PAGE_LAYOUT_HANDLER,
                    useExisting: CartPageLayoutHandler,
                    multi: true,
                },
            ],
        })
    ], CartComponentModule);
    return CartComponentModule;
}());

var DeliveryModePreferences;
(function (DeliveryModePreferences) {
    DeliveryModePreferences["FREE"] = "FREE";
    DeliveryModePreferences["LEAST_EXPENSIVE"] = "LEAST_EXPENSIVE";
    DeliveryModePreferences["MOST_EXPENSIVE"] = "MOST_EXPENSIVE";
})(DeliveryModePreferences || (DeliveryModePreferences = {}));
var CheckoutConfig = /** @class */ (function () {
    function CheckoutConfig() {
    }
    return CheckoutConfig;
}());

var CheckoutStepType;
(function (CheckoutStepType) {
    CheckoutStepType["SHIPPING_ADDRESS"] = "shippingAddress";
    CheckoutStepType["DELIVERY_MODE"] = "deliveryMode";
    CheckoutStepType["PAYMENT_DETAILS"] = "paymentDetails";
    CheckoutStepType["REVIEW_ORDER"] = "reviewOrder";
})(CheckoutStepType || (CheckoutStepType = {}));

var defaultCheckoutConfig = {
    checkout: {
        steps: [
            {
                id: 'shippingAddress',
                name: 'checkoutProgress.shippingAddress',
                routeName: 'checkoutShippingAddress',
                type: [CheckoutStepType.SHIPPING_ADDRESS],
            },
            {
                id: 'deliveryMode',
                name: 'checkoutProgress.deliveryMode',
                routeName: 'checkoutDeliveryMode',
                type: [CheckoutStepType.DELIVERY_MODE],
            },
            {
                id: 'paymentDetails',
                name: 'checkoutProgress.paymentDetails',
                routeName: 'checkoutPaymentDetails',
                type: [CheckoutStepType.PAYMENT_DETAILS],
            },
            {
                id: 'reviewOrder',
                name: 'checkoutProgress.reviewOrder',
                routeName: 'checkoutReviewOrder',
                type: [CheckoutStepType.REVIEW_ORDER],
            },
        ],
        express: false,
        defaultDeliveryMode: [DeliveryModePreferences.FREE],
        guest: false,
    },
};

var CheckoutConfigService = /** @class */ (function () {
    function CheckoutConfigService(checkoutConfig, routingConfigService) {
        this.checkoutConfig = checkoutConfig;
        this.routingConfigService = routingConfigService;
        this.steps = this.checkoutConfig.checkout.steps;
        this.express = this.checkoutConfig.checkout.express;
        this.guest = this.checkoutConfig.checkout.guest;
        this.defaultDeliveryMode = this.checkoutConfig.checkout.defaultDeliveryMode || [];
    }
    CheckoutConfigService.prototype.getCheckoutStep = function (currentStepType) {
        return this.steps[this.getCheckoutStepIndex('type', currentStepType)];
    };
    CheckoutConfigService.prototype.getCheckoutStepRoute = function (currentStepType) {
        return this.getCheckoutStep(currentStepType).routeName;
    };
    CheckoutConfigService.prototype.getFirstCheckoutStepRoute = function () {
        return this.steps[0].routeName;
    };
    CheckoutConfigService.prototype.getNextCheckoutStepUrl = function (activatedRoute) {
        var stepIndex = this.getCurrentStepIndex(activatedRoute);
        return stepIndex >= 0 && this.steps[stepIndex + 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex + 1].routeName)
            : null;
    };
    CheckoutConfigService.prototype.getPreviousCheckoutStepUrl = function (activatedRoute) {
        var stepIndex = this.getCurrentStepIndex(activatedRoute);
        return stepIndex >= 0 && this.steps[stepIndex - 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex - 1].routeName)
            : null;
    };
    CheckoutConfigService.prototype.getCurrentStepIndex = function (activatedRoute) {
        var e_1, _a;
        var currentStepUrl = this.getStepUrlFromActivatedRoute(activatedRoute);
        var stepIndex;
        var index = 0;
        try {
            for (var _b = __values(this.steps), _c = _b.next(); !_c.done; _c = _b.next()) {
                var step = _c.value;
                if (currentStepUrl === "/" + this.getStepUrlFromStepRoute(step.routeName)) {
                    stepIndex = index;
                }
                else {
                    index++;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return stepIndex >= 0 ? stepIndex : null;
    };
    CheckoutConfigService.prototype.compareDeliveryCost = function (deliveryMode1, deliveryMode2) {
        if (deliveryMode1.deliveryCost.value > deliveryMode2.deliveryCost.value) {
            return 1;
        }
        else if (deliveryMode1.deliveryCost.value < deliveryMode2.deliveryCost.value) {
            return -1;
        }
        return 0;
    };
    CheckoutConfigService.prototype.findMatchingDeliveryMode = function (deliveryModes, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        switch (this.defaultDeliveryMode[index]) {
            case DeliveryModePreferences.FREE:
                if (deliveryModes[0].deliveryCost.value === 0) {
                    return deliveryModes[0].code;
                }
                break;
            case DeliveryModePreferences.LEAST_EXPENSIVE:
                var leastExpensiveFound = deliveryModes.find(function (deliveryMode) { return deliveryMode.deliveryCost.value !== 0; });
                if (leastExpensiveFound) {
                    return leastExpensiveFound.code;
                }
                break;
            case DeliveryModePreferences.MOST_EXPENSIVE:
                return deliveryModes[deliveryModes.length - 1].code;
            default:
                var codeFound = deliveryModes.find(function (deliveryMode) { return deliveryMode.code === _this.defaultDeliveryMode[index]; });
                if (codeFound) {
                    return codeFound.code;
                }
        }
        var lastMode = this.defaultDeliveryMode.length - 1 <= index;
        return lastMode
            ? deliveryModes[0].code
            : this.findMatchingDeliveryMode(deliveryModes, index + 1);
    };
    CheckoutConfigService.prototype.getPreferredDeliveryMode = function (deliveryModes) {
        deliveryModes.sort(this.compareDeliveryCost);
        return this.findMatchingDeliveryMode(deliveryModes);
    };
    CheckoutConfigService.prototype.isExpressCheckout = function () {
        return this.express;
    };
    CheckoutConfigService.prototype.isGuestCheckout = function () {
        return this.guest;
    };
    CheckoutConfigService.prototype.getStepUrlFromActivatedRoute = function (activatedRoute) {
        return activatedRoute &&
            activatedRoute.snapshot &&
            activatedRoute.snapshot.url
            ? "/" + activatedRoute.snapshot.url.join('/')
            : null;
    };
    CheckoutConfigService.prototype.getStepUrlFromStepRoute = function (stepRoute) {
        return this.routingConfigService.getRouteConfig(stepRoute).paths[0];
    };
    CheckoutConfigService.prototype.getCheckoutStepIndex = function (key, value) {
        return key && value
            ? this.steps.findIndex(function (step) { return step[key].includes(value); })
            : null;
    };
    CheckoutConfigService.ctorParameters = function () { return [
        { type: CheckoutConfig },
        { type: RoutingConfigService }
    ]; };
    CheckoutConfigService.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutConfigService_Factory() { return new CheckoutConfigService(ɵɵinject(CheckoutConfig), ɵɵinject(RoutingConfigService)); }, token: CheckoutConfigService, providedIn: "root" });
    CheckoutConfigService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutConfigService);
    return CheckoutConfigService;
}());

var CheckoutAuthGuard = /** @class */ (function () {
    function CheckoutAuthGuard(routingService, authService, authRedirectService, cartService, checkoutConfigService) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
        this.cartService = cartService;
        this.checkoutConfigService = checkoutConfigService;
    }
    CheckoutAuthGuard.prototype.canActivate = function () {
        var _this = this;
        return combineLatest([
            this.authService.getUserToken(),
            this.cartService.getAssignedUser(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), token = _b[0], user = _b[1];
            if (!token.access_token) {
                if (_this.cartService.isGuestCart()) {
                    return Boolean(user);
                }
                if (_this.checkoutConfigService.isGuestCheckout()) {
                    _this.routingService.go({ cxRoute: 'login' }, { forced: true });
                }
                else {
                    _this.routingService.go({ cxRoute: 'login' });
                }
                _this.authRedirectService.reportAuthGuard();
            }
            return !!token.access_token;
        }));
    };
    CheckoutAuthGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: AuthService },
        { type: AuthRedirectService },
        { type: CartService },
        { type: CheckoutConfigService }
    ]; };
    CheckoutAuthGuard.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutAuthGuard_Factory() { return new CheckoutAuthGuard(ɵɵinject(RoutingService), ɵɵinject(AuthService), ɵɵinject(AuthRedirectService), ɵɵinject(CartService), ɵɵinject(CheckoutConfigService)); }, token: CheckoutAuthGuard, providedIn: "root" });
    CheckoutAuthGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutAuthGuard);
    return CheckoutAuthGuard;
}());

var CheckoutDetailsService = /** @class */ (function () {
    function CheckoutDetailsService(checkoutService, checkoutDeliveryService, checkoutPaymentService, cartService) {
        var _this = this;
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.cartService = cartService;
        this.cartId$ = this.cartService.getActive().pipe(map(function (cartData) {
            if ((cartData.user && cartData.user.uid === OCC_USER_ID_ANONYMOUS) ||
                _this.cartService.isGuestCart()) {
                return cartData.guid;
            }
            return cartData.code;
        }), filter(function (cartId) { return !!cartId; }));
        this.getCheckoutDetailsLoaded$ = this.cartId$.pipe(tap(function (cartId) { return _this.checkoutService.loadCheckoutDetails(cartId); }), shareReplay(1), switchMap(function () { return _this.checkoutService.getCheckoutDetailsLoaded(); }), skipWhile(function (loaded) { return !loaded; }));
    }
    CheckoutDetailsService.prototype.getDeliveryAddress = function () {
        var _this = this;
        return this.getCheckoutDetailsLoaded$.pipe(switchMap(function () { return _this.checkoutDeliveryService.getDeliveryAddress(); }));
    };
    CheckoutDetailsService.prototype.getSelectedDeliveryModeCode = function () {
        var _this = this;
        return this.getCheckoutDetailsLoaded$.pipe(switchMap(function () {
            return _this.checkoutDeliveryService.getSelectedDeliveryModeCode();
        }));
    };
    CheckoutDetailsService.prototype.getPaymentDetails = function () {
        var _this = this;
        return this.getCheckoutDetailsLoaded$.pipe(switchMap(function () { return _this.checkoutPaymentService.getPaymentDetails(); }));
    };
    CheckoutDetailsService.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: CheckoutDeliveryService },
        { type: CheckoutPaymentService },
        { type: CartService }
    ]; };
    CheckoutDetailsService.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutDetailsService_Factory() { return new CheckoutDetailsService(ɵɵinject(CheckoutService), ɵɵinject(CheckoutDeliveryService), ɵɵinject(CheckoutPaymentService), ɵɵinject(CartService)); }, token: CheckoutDetailsService, providedIn: "root" });
    CheckoutDetailsService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutDetailsService);
    return CheckoutDetailsService;
}());

var ExpressCheckoutService = /** @class */ (function () {
    function ExpressCheckoutService(userAddressService, userPaymentService, checkoutDeliveryService, checkoutPaymentService, checkoutDetailsService, checkoutConfigService) {
        this.userAddressService = userAddressService;
        this.userPaymentService = userPaymentService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.setShippingAddress();
        this.setDeliveryMode();
        this.setPaymentMethod();
    }
    ExpressCheckoutService.prototype.setShippingAddress = function () {
        var _this = this;
        this.shippingAddressSet$ = combineLatest([
            this.userAddressService.getAddresses(),
            this.userAddressService.getAddressesLoadedSuccess(),
            this.checkoutDeliveryService.getSetDeliveryAddressProcess(),
        ]).pipe(debounceTime(0), tap(function (_a) {
            var _b = __read(_a, 2), addressesLoadedSuccess = _b[1];
            if (!addressesLoadedSuccess) {
                _this.userAddressService.loadAddresses();
            }
        }), filter(function (_a) {
            var _b = __read(_a, 2), addressesLoadedSuccess = _b[1];
            return addressesLoadedSuccess;
        }), switchMap(function (_a) {
            var _b = __read(_a, 3), addresses = _b[0], setDeliveryAddressProcess = _b[2];
            var defaultAddress = addresses.find(function (address) { return address.defaultAddress; }) || addresses[0];
            if (defaultAddress && Object.keys(defaultAddress).length) {
                if (!(setDeliveryAddressProcess.success ||
                    setDeliveryAddressProcess.error ||
                    setDeliveryAddressProcess.loading)) {
                    _this.checkoutDeliveryService.setDeliveryAddress(defaultAddress);
                }
                return of(setDeliveryAddressProcess).pipe(filter(function (setDeliveryAddressProcessState) {
                    return ((setDeliveryAddressProcessState.success ||
                        setDeliveryAddressProcessState.error) &&
                        !setDeliveryAddressProcessState.loading);
                }), switchMap(function (setDeliveryAddressProcessState) {
                    if (setDeliveryAddressProcessState.success) {
                        return _this.checkoutDetailsService.getDeliveryAddress();
                    }
                    return of(false);
                }), map(function (data) { return Boolean(data && Object.keys(data).length); }));
            }
            return of(false);
        }));
    };
    ExpressCheckoutService.prototype.setPaymentMethod = function () {
        var _this = this;
        this.paymentMethodSet$ = combineLatest([
            this.userPaymentService.getPaymentMethods(),
            this.userPaymentService.getPaymentMethodsLoadedSuccess(),
            this.checkoutPaymentService.getSetPaymentDetailsResultProcess(),
        ]).pipe(debounceTime(0), tap(function (_a) {
            var _b = __read(_a, 2), paymentMethodsLoadedSuccess = _b[1];
            if (!paymentMethodsLoadedSuccess) {
                _this.userPaymentService.loadPaymentMethods();
            }
        }), filter(function (_a) {
            var _b = __read(_a, 2), success = _b[1];
            return success;
        }), switchMap(function (_a) {
            var _b = __read(_a, 3), payments = _b[0], setPaymentDetailsProcess = _b[2];
            var defaultPayment = payments.find(function (address) { return address.defaultPayment; }) || payments[0];
            if (defaultPayment && Object.keys(defaultPayment).length) {
                if (!(setPaymentDetailsProcess.success ||
                    setPaymentDetailsProcess.error ||
                    setPaymentDetailsProcess.loading)) {
                    _this.checkoutPaymentService.setPaymentDetails(defaultPayment);
                }
                return of(setPaymentDetailsProcess).pipe(filter(function (setPaymentDetailsProcessState) {
                    return ((setPaymentDetailsProcessState.success ||
                        setPaymentDetailsProcessState.error) &&
                        !setPaymentDetailsProcessState.loading);
                }), switchMap(function (setPaymentDetailsProcessState) {
                    if (setPaymentDetailsProcessState.success) {
                        return _this.checkoutDetailsService.getPaymentDetails();
                    }
                    return of(false);
                }), map(function (data) { return Boolean(data && Object.keys(data).length); }));
            }
            return of(false);
        }));
    };
    ExpressCheckoutService.prototype.setDeliveryMode = function () {
        var _this = this;
        this.deliveryModeSet$ = combineLatest([
            this.shippingAddressSet$,
            this.checkoutDeliveryService.getSupportedDeliveryModes(),
            this.checkoutDeliveryService.getSetDeliveryModeProcess(),
            this.checkoutDeliveryService.getLoadSupportedDeliveryModeProcess(),
        ]).pipe(debounceTime(0), switchMap(function (_a) {
            var _b = __read(_a, 4), addressSet = _b[0], supportedDeliveryModes = _b[1], setDeliveryModeStatusFlag = _b[2], loadSupportedDeliveryModeStatus = _b[3];
            if (addressSet) {
                return of([
                    supportedDeliveryModes,
                    setDeliveryModeStatusFlag,
                    loadSupportedDeliveryModeStatus,
                ]).pipe(filter(function (_a) {
                    var _b = __read(_a, 3), supportedDeliveryModeStatus = _b[2];
                    return supportedDeliveryModeStatus.success;
                }), switchMap(function (_a) {
                    var _b = __read(_a, 3), deliveryModes = _b[0], setDeliveryModeStatus = _b[1];
                    if (Boolean(deliveryModes.length)) {
                        var preferredDeliveryMode = _this.checkoutConfigService.getPreferredDeliveryMode(deliveryModes);
                        return of([
                            preferredDeliveryMode,
                            setDeliveryModeStatus,
                        ]).pipe(tap(function (_a) {
                            var _b = __read(_a, 2), deliveryMode = _b[0], deliveryModeLoadingStatus = _b[1];
                            if (deliveryMode &&
                                !(deliveryModeLoadingStatus.success ||
                                    deliveryModeLoadingStatus.error ||
                                    deliveryModeLoadingStatus.loading)) {
                                _this.checkoutDeliveryService.setDeliveryMode(deliveryMode);
                            }
                        }), filter(function (_a) {
                            var _b = __read(_a, 2), deliveryModeLoadingStatus = _b[1];
                            return ((deliveryModeLoadingStatus.success ||
                                deliveryModeLoadingStatus.error) &&
                                !deliveryModeLoadingStatus.loading);
                        }), switchMap(function (_a) {
                            var _b = __read(_a, 2), deliveryModeLoadingStatus = _b[1];
                            if (deliveryModeLoadingStatus.success) {
                                return _this.checkoutDetailsService.getSelectedDeliveryModeCode();
                            }
                            return of(false);
                        }), map(function (data) { return Boolean(data); }));
                    }
                    return of(false);
                }));
            }
            else {
                return of(false);
            }
        }));
    };
    ExpressCheckoutService.prototype.resetCheckoutProcesses = function () {
        this.checkoutDeliveryService.resetSetDeliveryAddressProcess();
        this.checkoutPaymentService.resetSetPaymentDetailsProcess();
        this.checkoutDeliveryService.resetSetDeliveryModeProcess();
    };
    ExpressCheckoutService.prototype.trySetDefaultCheckoutDetails = function () {
        this.resetCheckoutProcesses();
        return combineLatest([this.deliveryModeSet$, this.paymentMethodSet$]).pipe(map(function (_a) {
            var _b = __read(_a, 2), deliveryModeSet = _b[0], paymentMethodSet = _b[1];
            return Boolean(deliveryModeSet && paymentMethodSet);
        }));
    };
    ExpressCheckoutService.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: UserPaymentService },
        { type: CheckoutDeliveryService },
        { type: CheckoutPaymentService },
        { type: CheckoutDetailsService },
        { type: CheckoutConfigService }
    ]; };
    ExpressCheckoutService.ɵprov = ɵɵdefineInjectable({ factory: function ExpressCheckoutService_Factory() { return new ExpressCheckoutService(ɵɵinject(UserAddressService), ɵɵinject(UserPaymentService), ɵɵinject(CheckoutDeliveryService), ɵɵinject(CheckoutPaymentService), ɵɵinject(CheckoutDetailsService), ɵɵinject(CheckoutConfigService)); }, token: ExpressCheckoutService, providedIn: "root" });
    ExpressCheckoutService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ExpressCheckoutService);
    return ExpressCheckoutService;
}());

var CheckoutGuard = /** @class */ (function () {
    function CheckoutGuard(router, config, routingConfigService, checkoutConfigService, expressCheckoutService, cartService) {
        this.router = router;
        this.config = config;
        this.routingConfigService = routingConfigService;
        this.checkoutConfigService = checkoutConfigService;
        this.expressCheckoutService = expressCheckoutService;
        this.cartService = cartService;
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.checkoutConfigService) {
            this.firstStep$ = of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.checkoutConfigService.getFirstCheckoutStepRoute()).paths[0]));
        }
        else {
            this.firstStep$ = of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.config.checkout.steps[0].routeName).paths[0]));
        }
    }
    CheckoutGuard.prototype.canActivate = function () {
        var _this = this;
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.checkoutConfigService &&
            this.expressCheckoutService &&
            this.cartService) {
            if (this.checkoutConfigService.isExpressCheckout() &&
                !this.cartService.isGuestCart()) {
                return this.expressCheckoutService.trySetDefaultCheckoutDetails().pipe(switchMap(function (expressCheckoutPossible) {
                    return expressCheckoutPossible
                        ? of(_this.router.parseUrl(_this.routingConfigService.getRouteConfig(_this.checkoutConfigService.getCheckoutStepRoute(CheckoutStepType.REVIEW_ORDER)).paths[0]))
                        : _this.firstStep$;
                }));
            }
        }
        return this.firstStep$;
    };
    CheckoutGuard.ctorParameters = function () { return [
        { type: Router },
        { type: CheckoutConfig },
        { type: RoutingConfigService },
        { type: CheckoutConfigService },
        { type: ExpressCheckoutService },
        { type: CartService }
    ]; };
    CheckoutGuard.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutGuard_Factory() { return new CheckoutGuard(ɵɵinject(Router), ɵɵinject(CheckoutConfig), ɵɵinject(RoutingConfigService), ɵɵinject(CheckoutConfigService), ɵɵinject(ExpressCheckoutService), ɵɵinject(CartService)); }, token: CheckoutGuard, providedIn: "root" });
    CheckoutGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutGuard);
    return CheckoutGuard;
}());

var CheckoutOrchestratorComponent = /** @class */ (function () {
    function CheckoutOrchestratorComponent() {
    }
    CheckoutOrchestratorComponent = __decorate([
        Component({
            selector: 'cx-checkout-orchestrator',
            template: "",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CheckoutOrchestratorComponent);
    return CheckoutOrchestratorComponent;
}());

var CheckoutOrchestratorModule = /** @class */ (function () {
    function CheckoutOrchestratorModule() {
    }
    CheckoutOrchestratorModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig(defaultCheckoutConfig),
                ConfigModule.withConfig({
                    cmsComponents: {
                        CheckoutOrchestrator: {
                            component: CheckoutOrchestratorComponent,
                            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutGuard],
                        },
                    },
                }),
            ],
            providers: [{ provide: CheckoutConfig, useExisting: Config }],
            declarations: [CheckoutOrchestratorComponent],
            entryComponents: [CheckoutOrchestratorComponent],
            exports: [CheckoutOrchestratorComponent],
        })
    ], CheckoutOrchestratorModule);
    return CheckoutOrchestratorModule;
}());

var CheckoutOrderSummaryComponent = /** @class */ (function () {
    function CheckoutOrderSummaryComponent(cartService) {
        this.cartService = cartService;
        this.cart$ = this.cartService.getActive();
    }
    CheckoutOrderSummaryComponent.ctorParameters = function () { return [
        { type: CartService }
    ]; };
    CheckoutOrderSummaryComponent = __decorate([
        Component({
            selector: 'cx-checkout-order-summary',
            template: "<cx-order-summary [cart]=\"cart$ | async\"></cx-order-summary>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CheckoutOrderSummaryComponent);
    return CheckoutOrderSummaryComponent;
}());

var CheckoutOrderSummaryModule = /** @class */ (function () {
    function CheckoutOrderSummaryModule() {
    }
    CheckoutOrderSummaryModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                CartSharedModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CheckoutOrderSummary: {
                            component: CheckoutOrderSummaryComponent,
                        },
                    },
                }),
            ],
            declarations: [CheckoutOrderSummaryComponent],
            entryComponents: [CheckoutOrderSummaryComponent],
            exports: [CheckoutOrderSummaryComponent],
        })
    ], CheckoutOrderSummaryModule);
    return CheckoutOrderSummaryModule;
}());

var CheckoutProgressMobileBottomComponent = /** @class */ (function () {
    function CheckoutProgressMobileBottomComponent(config, routingService, routingConfigService) {
        this.config = config;
        this.routingService = routingService;
        this.routingConfigService = routingConfigService;
    }
    CheckoutProgressMobileBottomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.steps = this.config.checkout.steps;
        this.routerState$ = this.routingService.getRouterState().pipe(tap(function (router) {
            _this.activeStepUrl = router.state.context.id;
            _this.steps.forEach(function (step, index) {
                var routeUrl = "/" + _this.routingConfigService.getRouteConfig(step.routeName).paths[0];
                if (routeUrl === _this.activeStepUrl) {
                    _this.activeStepIndex = index;
                }
            });
        }));
    };
    CheckoutProgressMobileBottomComponent.ctorParameters = function () { return [
        { type: CheckoutConfig },
        { type: RoutingService },
        { type: RoutingConfigService }
    ]; };
    CheckoutProgressMobileBottomComponent = __decorate([
        Component({
            selector: 'cx-checkout-progress-mobile-bottom',
            template: "<div *ngIf=\"routerState$ | async as routerState\">\n  <div class=\"cx-media\">\n    <div *ngFor=\"let step of steps; let i = index\">\n      <div class=\"cx-list-media\" *ngIf=\"i > activeStepIndex\">\n        <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"
        })
    ], CheckoutProgressMobileBottomComponent);
    return CheckoutProgressMobileBottomComponent;
}());

var CheckoutProgressMobileBottomModule = /** @class */ (function () {
    function CheckoutProgressMobileBottomModule() {
    }
    CheckoutProgressMobileBottomModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                UrlModule,
                I18nModule,
                RouterModule,
                ConfigModule.withConfig(defaultCheckoutConfig),
                ConfigModule.withConfig({
                    cmsComponents: {
                        CheckoutProgressMobileBottom: {
                            component: CheckoutProgressMobileBottomComponent,
                            guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                        },
                    },
                }),
            ],
            declarations: [CheckoutProgressMobileBottomComponent],
            entryComponents: [CheckoutProgressMobileBottomComponent],
            exports: [CheckoutProgressMobileBottomComponent],
        })
    ], CheckoutProgressMobileBottomModule);
    return CheckoutProgressMobileBottomModule;
}());

var CheckoutProgressMobileTopComponent = /** @class */ (function () {
    function CheckoutProgressMobileTopComponent(config, routingService, cartService, routingConfigService) {
        this.config = config;
        this.routingService = routingService;
        this.cartService = cartService;
        this.routingConfigService = routingConfigService;
    }
    CheckoutProgressMobileTopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.steps = this.config.checkout.steps;
        this.cart$ = this.cartService.getActive();
        this.routerState$ = this.routingService.getRouterState().pipe(tap(function (router) {
            _this.activeStepUrl = router.state.context.id;
            _this.steps.forEach(function (step, index) {
                var routeUrl = "/" + _this.routingConfigService.getRouteConfig(step.routeName).paths[0];
                if (routeUrl === _this.activeStepUrl) {
                    _this.activeStepIndex = index;
                }
            });
        }));
    };
    CheckoutProgressMobileTopComponent.ctorParameters = function () { return [
        { type: CheckoutConfig },
        { type: RoutingService },
        { type: CartService },
        { type: RoutingConfigService }
    ]; };
    CheckoutProgressMobileTopComponent = __decorate([
        Component({
            selector: 'cx-checkout-progress-mobile-top',
            template: "<div *ngIf=\"routerState$ | async as routerState\">\n  <div *ngIf=\"cart$ | async as cart\">\n    <div class=\"cx-media\">\n      <div class=\"cx-list-media\" *ngIf=\"cart?.totalItems && cart?.subTotal\">\n        {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalItems } }}:\n        {{ cart.subTotal.formattedValue }}\n      </div>\n      <div *ngFor=\"let step of steps; let i = index\">\n        <div class=\"cx-list-media\" *ngIf=\"i < activeStepIndex\">\n          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n          <button\n            class=\"btn btn-link\"\n            [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n          >\n            {{ 'common.edit' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"cx-list-media is-active\" *ngIf=\"i === activeStepIndex\">\n          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
        })
    ], CheckoutProgressMobileTopComponent);
    return CheckoutProgressMobileTopComponent;
}());

var CheckoutProgressMobileTopModule = /** @class */ (function () {
    function CheckoutProgressMobileTopModule() {
    }
    CheckoutProgressMobileTopModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                UrlModule,
                I18nModule,
                RouterModule,
                ConfigModule.withConfig(defaultCheckoutConfig),
                ConfigModule.withConfig({
                    cmsComponents: {
                        CheckoutProgressMobileTop: {
                            component: CheckoutProgressMobileTopComponent,
                            guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                        },
                    },
                }),
            ],
            declarations: [CheckoutProgressMobileTopComponent],
            entryComponents: [CheckoutProgressMobileTopComponent],
            exports: [CheckoutProgressMobileTopComponent],
        })
    ], CheckoutProgressMobileTopModule);
    return CheckoutProgressMobileTopModule;
}());

var CheckoutProgressComponent = /** @class */ (function () {
    function CheckoutProgressComponent(config, routingService, routingConfigService) {
        this.config = config;
        this.routingService = routingService;
        this.routingConfigService = routingConfigService;
    }
    CheckoutProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.steps = this.config.checkout.steps;
        this.routerState$ = this.routingService.getRouterState().pipe(tap(function (router) {
            _this.activeStepUrl = router.state.context.id;
            _this.steps.forEach(function (step, index) {
                var routeUrl = "/" + _this.routingConfigService.getRouteConfig(step.routeName).paths[0];
                if (routeUrl === _this.activeStepUrl) {
                    _this.activeStepIndex = index;
                }
            });
        }));
    };
    CheckoutProgressComponent.prototype.getTabIndex = function (stepIndex) {
        return !this.isActive(stepIndex) && !this.isDisabled(stepIndex) ? 0 : -1;
    };
    CheckoutProgressComponent.prototype.isActive = function (index) {
        return index === this.activeStepIndex;
    };
    CheckoutProgressComponent.prototype.isDisabled = function (index) {
        return index > this.activeStepIndex;
    };
    CheckoutProgressComponent.ctorParameters = function () { return [
        { type: CheckoutConfig },
        { type: RoutingService },
        { type: RoutingConfigService }
    ]; };
    CheckoutProgressComponent = __decorate([
        Component({
            selector: 'cx-checkout-progress',
            template: "<section *ngIf=\"routerState$ | async as routerState\">\n  <div class=\"cx-nav d-none d-lg-block d-xl-block\">\n    <ul class=\"cx-list\">\n      <li class=\"cx-item\" *ngFor=\"let step of steps; let i = index\">\n        <a\n          [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n          class=\"cx-link\"\n          [class.active]=\"isActive(i)\"\n          [class.disabled]=\"isDisabled(i)\"\n          [tabindex]=\"getTabIndex(i)\"\n        >\n          {{ i + 1 }}. {{ step.name | cxTranslate }}\n        </a>\n      </li>\n    </ul>\n  </div>\n</section>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CheckoutProgressComponent);
    return CheckoutProgressComponent;
}());

var CheckoutProgressModule = /** @class */ (function () {
    function CheckoutProgressModule() {
    }
    CheckoutProgressModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                UrlModule,
                I18nModule,
                RouterModule,
                ConfigModule.withConfig(defaultCheckoutConfig),
                ConfigModule.withConfig({
                    cmsComponents: {
                        CheckoutProgress: {
                            component: CheckoutProgressComponent,
                            guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                        },
                    },
                }),
            ],
            declarations: [CheckoutProgressComponent],
            entryComponents: [CheckoutProgressComponent],
            exports: [CheckoutProgressComponent],
            providers: [{ provide: CheckoutConfig, useExisting: Config }],
        })
    ], CheckoutProgressModule);
    return CheckoutProgressModule;
}());

var ShippingAddressSetGuard = /** @class */ (function () {
    function ShippingAddressSetGuard(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    ShippingAddressSetGuard.prototype.canActivate = function () {
        var _this = this;
        var checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.SHIPPING_ADDRESS);
        if (!checkoutStep && isDevMode()) {
            console.warn("Missing step with type " + CheckoutStepType.SHIPPING_ADDRESS + " in checkout configuration.");
        }
        return this.checkoutDetailsService
            .getDeliveryAddress()
            .pipe(map(function (deliveryAddress) {
            return deliveryAddress && Object.keys(deliveryAddress).length
                ? true
                : _this.router.parseUrl(checkoutStep &&
                    _this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]);
        }));
    };
    ShippingAddressSetGuard.ctorParameters = function () { return [
        { type: CheckoutDetailsService },
        { type: CheckoutConfigService },
        { type: RoutingConfigService },
        { type: Router }
    ]; };
    ShippingAddressSetGuard.ɵprov = ɵɵdefineInjectable({ factory: function ShippingAddressSetGuard_Factory() { return new ShippingAddressSetGuard(ɵɵinject(CheckoutDetailsService), ɵɵinject(CheckoutConfigService), ɵɵinject(RoutingConfigService), ɵɵinject(Router)); }, token: ShippingAddressSetGuard, providedIn: "root" });
    ShippingAddressSetGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ShippingAddressSetGuard);
    return ShippingAddressSetGuard;
}());

var DeliveryModeComponent = /** @class */ (function () {
    function DeliveryModeComponent(fb, checkoutDeliveryService, routingService, checkoutConfigService, activatedRoute) {
        this.fb = fb;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.routingService = routingService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.allowRedirect = false;
        this.mode = this.fb.group({
            deliveryModeId: ['', Validators.required],
        });
    }
    DeliveryModeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
        this.supportedDeliveryModes$ = this.checkoutDeliveryService.getSupportedDeliveryModes();
        this.deliveryModeSub = this.supportedDeliveryModes$
            .pipe(withLatestFrom(this.checkoutDeliveryService
            .getSelectedDeliveryMode()
            .pipe(map(function (deliveryMode) {
            return deliveryMode && deliveryMode.code ? deliveryMode.code : null;
        }))))
            .subscribe(function (_a) {
            var _b = __read(_a, 2), deliveryModes = _b[0], code = _b[1];
            if (!code && deliveryModes && deliveryModes.length) {
                code = _this.checkoutConfigService.getPreferredDeliveryMode(deliveryModes);
            }
            if (_this.allowRedirect &&
                !!code &&
                code === _this.currentDeliveryModeId) {
                _this.routingService.go(_this.checkoutStepUrlNext);
            }
            _this.currentDeliveryModeId = code;
            if (code) {
                _this.mode.controls['deliveryModeId'].setValue(code);
            }
        });
    };
    DeliveryModeComponent.prototype.changeMode = function (code) {
        if (code !== this.currentDeliveryModeId) {
            this.currentDeliveryModeId = code;
        }
    };
    DeliveryModeComponent.prototype.next = function () {
        this.allowRedirect = true;
        if (this.mode.valid && this.mode.value) {
            if (!this.currentDeliveryModeId) {
                this.currentDeliveryModeId = this.mode.value.deliveryModeId;
            }
            this.checkoutDeliveryService.setDeliveryMode(this.currentDeliveryModeId);
        }
        this.routingService.go(this.checkoutStepUrlNext);
    };
    DeliveryModeComponent.prototype.back = function () {
        this.routingService.go(this.checkoutStepUrlPrevious);
    };
    Object.defineProperty(DeliveryModeComponent.prototype, "deliveryModeInvalid", {
        get: function () {
            return this.mode.controls['deliveryModeId'].invalid;
        },
        enumerable: true,
        configurable: true
    });
    DeliveryModeComponent.prototype.ngOnDestroy = function () {
        if (this.deliveryModeSub) {
            this.deliveryModeSub.unsubscribe();
        }
    };
    DeliveryModeComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CheckoutDeliveryService },
        { type: RoutingService },
        { type: CheckoutConfigService },
        { type: ActivatedRoute }
    ]; };
    DeliveryModeComponent = __decorate([
        Component({
            selector: 'cx-delivery-mode',
            template: "<div [formGroup]=\"mode\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n        {{ 'checkoutShipping.shippingMethod' | cxTranslate }}\n      </h3>\n\n      <ng-container\n        *ngIf=\"(supportedDeliveryModes$ | async)?.length; else loading\"\n      >\n        <div\n          class=\"form-check\"\n          *ngFor=\"let mode of supportedDeliveryModes$ | async\"\n        >\n          <input\n            class=\"form-check-input\"\n            role=\"radio\"\n            type=\"radio\"\n            id=\"deliveryMode-{{ mode.code }}\"\n            aria-checked=\"true\"\n            (change)=\"changeMode(mode.code)\"\n            [value]=\"mode.code\"\n            formControlName=\"deliveryModeId\"\n          />\n          <label\n            class=\"cx-delivery-label form-check-label\n                form-radio-label\"\n            for=\"deliveryMode-{{ mode.code }}\"\n          >\n            <div class=\"cx-delivery-mode\">{{ mode.name }}</div>\n            <div class=\"cx-delivery-price\">\n              {{ mode.deliveryCost.formattedValue }}\n            </div>\n            <div class=\"cx-delivery-details\">{{ mode.description }}</div>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <div class=\"row cx-checkout-btns\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"deliveryModeInvalid\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], DeliveryModeComponent);
    return DeliveryModeComponent;
}());

var DeliveryModeModule = /** @class */ (function () {
    function DeliveryModeModule() {
    }
    DeliveryModeModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                I18nModule,
                SpinnerModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CheckoutDeliveryMode: {
                            component: DeliveryModeComponent,
                            guards: [
                                CheckoutAuthGuard,
                                CartNotEmptyGuard,
                                ShippingAddressSetGuard,
                            ],
                        },
                    },
                }),
            ],
            declarations: [DeliveryModeComponent],
            entryComponents: [DeliveryModeComponent],
            exports: [DeliveryModeComponent],
        })
    ], DeliveryModeModule);
    return DeliveryModeModule;
}());

var DeliveryModeSetGuard = /** @class */ (function () {
    function DeliveryModeSetGuard(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    DeliveryModeSetGuard.prototype.canActivate = function () {
        var _this = this;
        var checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.DELIVERY_MODE);
        if (!checkoutStep && isDevMode()) {
            console.warn("Missing step with type " + CheckoutStepType.DELIVERY_MODE + " in checkout configuration.");
        }
        return this.checkoutDetailsService
            .getSelectedDeliveryModeCode()
            .pipe(map(function (mode) {
            return mode && mode.length
                ? true
                : _this.router.parseUrl(checkoutStep &&
                    _this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]);
        }));
    };
    DeliveryModeSetGuard.ctorParameters = function () { return [
        { type: CheckoutDetailsService },
        { type: CheckoutConfigService },
        { type: RoutingConfigService },
        { type: Router }
    ]; };
    DeliveryModeSetGuard.ɵprov = ɵɵdefineInjectable({ factory: function DeliveryModeSetGuard_Factory() { return new DeliveryModeSetGuard(ɵɵinject(CheckoutDetailsService), ɵɵinject(CheckoutConfigService), ɵɵinject(RoutingConfigService), ɵɵinject(Router)); }, token: DeliveryModeSetGuard, providedIn: "root" });
    DeliveryModeSetGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], DeliveryModeSetGuard);
    return DeliveryModeSetGuard;
}());

var BillingAddressFormComponent = /** @class */ (function () {
    function BillingAddressFormComponent(userAddressService) {
        this.userAddressService = userAddressService;
        this.selectedCountry$ = new BehaviorSubject('');
    }
    BillingAddressFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.regions$ = this.selectedCountry$.pipe(switchMap(function (country) { return _this.userAddressService.getRegions(country); }), tap(function (regions) {
            var regionControl = _this.billingAddress.get('region.isocodeShort');
            if (regions.length > 0) {
                regionControl.enable();
            }
            else {
                regionControl.disable();
            }
        }));
    };
    BillingAddressFormComponent.prototype.countrySelected = function (country) {
        this.billingAddress['controls'].country['controls'].isocode.setValue(country.isocode);
        this.selectedCountry$.next(country.isocode);
    };
    BillingAddressFormComponent.prototype.regionSelected = function (region) {
        this.billingAddress['controls'].region['controls'].isocodeShort.setValue(region.isocodeShort);
    };
    BillingAddressFormComponent.ctorParameters = function () { return [
        { type: UserAddressService }
    ]; };
    __decorate([
        Input()
    ], BillingAddressFormComponent.prototype, "billingAddress", void 0);
    __decorate([
        Input()
    ], BillingAddressFormComponent.prototype, "countries$", void 0);
    BillingAddressFormComponent = __decorate([
        Component({
            selector: 'cx-billing-address-form',
            template: "<div [formGroup]=\"billingAddress\">\n  <div class=\"form-group\">\n    <ng-container *ngIf=\"countries$ | async as countries\">\n      <div *ngIf=\"countries.length !== 0\">\n        <label aria-required=\"true\">\n          <span class=\"label-content required\">{{\n            'addressForm.country' | cxTranslate\n          }}</span>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"countries\"\n            bindLabel=\"name\"\n            bindValue=\"isocode\"\n            placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n            (change)=\"countrySelected($event)\"\n          >\n          </ng-select>\n        </label>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.firstName.label' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        required\n        placeholder=\"{{ 'addressForm.firstName.placeholder' | cxTranslate }}\"\n        formControlName=\"firstName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.lastName.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n        formControlName=\"lastName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.address1' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n        formControlName=\"line1\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'addressForm.address2' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n        formControlName=\"line2\"\n      />\n    </label>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'addressForm.city.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n          formControlName=\"town\"\n        />\n      </label>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <ng-container *ngIf=\"regions$ | async as regions\" formGroupName=\"region\">\n        <div *ngIf=\"regions.length !== 0\">\n          <label aria-required=\"true\">\n            <span class=\"label-content required\">{{\n              'addressForm.state' | cxTranslate\n            }}</span>\n            <ng-select\n              class=\"region-select\"\n              formControlName=\"isocodeShort\"\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"regions\"\n              bindLabel=\"{{ regions[0].name ? 'name' : 'isocodeShort' }}\"\n              bindValue=\"{{ regions[0].name ? 'isocodeShort' : 'region' }}\"\n              placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n              (change)=\"regionSelected($event)\"\n            >\n            </ng-select>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'addressForm.zipCode.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'addressForm.zipCode.placeholder' | cxTranslate }}\"\n          formControlName=\"postalCode\"\n        />\n      </label>\n    </div>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], BillingAddressFormComponent);
    return BillingAddressFormComponent;
}());

var BillingAddressFormModule = /** @class */ (function () {
    function BillingAddressFormModule() {
    }
    BillingAddressFormModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                FormsModule,
                RouterModule,
                NgSelectModule,
                I18nModule,
            ],
            declarations: [BillingAddressFormComponent],
            exports: [BillingAddressFormComponent],
        })
    ], BillingAddressFormModule);
    return BillingAddressFormModule;
}());

var SuggestedAddressDialogComponent = /** @class */ (function () {
    function SuggestedAddressDialogComponent(modalService) {
        this.modalService = modalService;
        this.iconTypes = ICON_TYPE;
    }
    SuggestedAddressDialogComponent.prototype.ngOnInit = function () {
        this.selectedAddress = this.suggestedAddresses.length
            ? this.suggestedAddresses[0]
            : this.enteredAddress;
    };
    SuggestedAddressDialogComponent.prototype.closeModal = function (reason) {
        this.modalService.closeActiveModal(reason);
    };
    SuggestedAddressDialogComponent.ctorParameters = function () { return [
        { type: ModalService }
    ]; };
    __decorate([
        Input()
    ], SuggestedAddressDialogComponent.prototype, "suggestedAddresses", void 0);
    __decorate([
        Input()
    ], SuggestedAddressDialogComponent.prototype, "enteredAddress", void 0);
    SuggestedAddressDialogComponent = __decorate([
        Component({
            selector: 'cx-suggested-addresses-dialog',
            template: "<div class=\"cx-dialog-header modal-header\">\n  <div class=\"cx-dialog-title modal-title\">\n    {{ 'checkoutAddress.verifyYourAddress' | cxTranslate }}\n  </div>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n    <span aria-hidden=\"true\">\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </span>\n  </button>\n</div>\n<div class=\"cx-dialog-body modal-body\" ngForm>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"cx-dialog-info col-md-12\">\n        <p>\n          {{ 'checkoutAddress.ensureAccuracySuggestChange' | cxTranslate }}\n          {{ 'checkoutAddress.chooseAddressToUse' | cxTranslate }}\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"cx-dialog-options col-md-12\">\n        <div\n          class=\"form-check\"\n          *ngFor=\"let suggestedAddress of suggestedAddresses; let i = index\"\n        >\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"suggestedAddress\"\n            [id]=\"'suggested-addresses--suggested-' + i\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            [for]=\"'suggested-addresses--suggested-' + i\"\n          >\n            {{ 'checkoutAddress.suggestedAddress' | cxTranslate }}\n            {{ suggestedAddresses?.length > 1 ? i + 1 : null }}\n          </label>\n          <div class=\"cx-dialog-suggested\">\n            {{ suggestedAddress?.firstName }} {{ suggestedAddress?.lastName\n            }}<br />\n            {{ suggestedAddress?.line1 }}<br />\n            <span>{{ suggestedAddress?.line2 }}</span\n            ><br />\n            {{ suggestedAddress?.town }} {{ suggestedAddress?.region?.isocode\n            }}<br />\n            {{ suggestedAddress?.postalCode }}\n          </div>\n        </div>\n        <div class=\"form-check\">\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"enteredAddress\"\n            id=\"suggested-addresses--entered\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            for=\"suggested-addresses--entered\"\n          >\n            {{ 'checkoutAddress.enteredAddress' | cxTranslate }}\n          </label>\n          <div class=\"cx-dialog-entered\">\n            {{ enteredAddress?.firstName }} {{ enteredAddress?.lastName }}<br />\n            {{ enteredAddress?.line1 }}<br />\n            <span>{{ enteredAddress?.line2 }}</span\n            ><br />\n            {{ enteredAddress?.town }} {{ enteredAddress?.region?.isocode\n            }}<br />\n            {{ enteredAddress?.postalCode }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"cx-dialog-actions col-sm-12 col-md-6 offset-md-6\">\n        <button\n          class=\"btn btn-secondary btn-block cx-dialog-buttons\"\n          (click)=\"closeModal()\"\n        >\n          {{ 'checkoutAddress.editAddress' | cxTranslate }}\n        </button>\n        <button\n          cxAutoFocus\n          class=\"btn btn-primary btn-block cx-dialog-buttons\"\n          (click)=\"closeModal(selectedAddress)\"\n        >\n          {{ 'checkoutAddress.saveAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], SuggestedAddressDialogComponent);
    return SuggestedAddressDialogComponent;
}());

var PaymentFormComponent = /** @class */ (function () {
    function PaymentFormComponent(checkoutPaymentService, checkoutDeliveryService, userPaymentService, globalMessageService, fb, modalService) {
        this.checkoutPaymentService = checkoutPaymentService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.userPaymentService = userPaymentService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.modalService = modalService;
        this.iconTypes = ICON_TYPE;
        this.months = [];
        this.years = [];
        this.sameAsShippingAddress = true;
        this.goBack = new EventEmitter();
        this.closeForm = new EventEmitter();
        this.setPaymentDetails = new EventEmitter();
        this.payment = this.fb.group({
            defaultPayment: [false],
            accountHolderName: ['', Validators.required],
            cardNumber: ['', Validators.required],
            cardType: this.fb.group({
                code: ['', Validators.required],
            }),
            expiryMonth: ['', Validators.required],
            expiryYear: ['', Validators.required],
            cvn: ['', Validators.required],
        });
        this.billingAddress = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            line1: ['', Validators.required],
            line2: [''],
            town: ['', Validators.required],
            region: this.fb.group({
                isocodeShort: [null, Validators.required],
            }),
            country: this.fb.group({
                isocode: [null, Validators.required],
            }),
            postalCode: ['', Validators.required],
        });
    }
    PaymentFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.expMonthAndYear();
        this.countries$ = this.userPaymentService.getAllBillingCountries().pipe(tap(function (countries) {
            // If the store is empty fetch countries. This is also used when changing language.
            if (Object.keys(countries).length === 0) {
                _this.userPaymentService.loadBillingCountries();
            }
        }));
        this.cardTypes$ = this.checkoutPaymentService.getCardTypes().pipe(tap(function (cardTypes) {
            if (Object.keys(cardTypes).length === 0) {
                _this.checkoutPaymentService.loadSupportedCardTypes();
            }
        }));
        this.shippingAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.loading$ = this.checkoutPaymentService.getSetPaymentDetailsResultProcess();
        this.checkboxSub = this.showSameAsShippingAddressCheckbox().subscribe(function (shouldShowCheckbox) {
            // this operation makes sure the checkbox is not checked if not shown and vice versa
            _this.sameAsShippingAddress = shouldShowCheckbox;
        });
        // verify the new added address
        this.addressVerifySub = this.checkoutDeliveryService
            .getAddressVerificationResults()
            .subscribe(function (results) {
            if (results.decision === 'FAIL') {
                _this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                _this.next();
            }
            else if (results.decision === 'REJECT') {
                _this.globalMessageService.add({ key: 'addressForm.invalidAddress' }, GlobalMessageType.MSG_TYPE_ERROR);
                _this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'REVIEW') {
                _this.openSuggestedAddress(results);
            }
        });
    };
    PaymentFormComponent.prototype.expMonthAndYear = function () {
        var year = new Date().getFullYear();
        for (var i = 0; i < 10; i++) {
            this.years.push({ id: i + 1, name: year + i });
        }
        for (var j = 1; j <= 12; j++) {
            if (j < 10) {
                this.months.push({ id: j, name: '0' + j.toString() });
            }
            else {
                this.months.push({ id: j, name: j.toString() });
            }
        }
    };
    PaymentFormComponent.prototype.toggleDefaultPaymentMethod = function () {
        this.payment.value.defaultPayment = !this.payment.value.defaultPayment;
    };
    PaymentFormComponent.prototype.paymentSelected = function (card) {
        this.payment['controls'].cardType['controls'].code.setValue(card.code);
    };
    PaymentFormComponent.prototype.monthSelected = function (month) {
        this.payment['controls'].expiryMonth.setValue(month.name);
    };
    PaymentFormComponent.prototype.yearSelected = function (year) {
        this.payment['controls'].expiryYear.setValue(year.name);
    };
    PaymentFormComponent.prototype.toggleSameAsShippingAddress = function () {
        this.sameAsShippingAddress = !this.sameAsShippingAddress;
    };
    /**
     * Check if the shipping address can also be a billing address
     *
     * @memberof PaymentFormComponent
     */
    PaymentFormComponent.prototype.showSameAsShippingAddressCheckbox = function () {
        return combineLatest([this.countries$, this.shippingAddress$]).pipe(map(function (_a) {
            var _b = __read(_a, 2), countries = _b[0], address = _b[1];
            return (address !== undefined &&
                address.country !== undefined &&
                !!countries.filter(function (country) {
                    return country.isocode === address.country.isocode;
                }).length);
        }));
    };
    PaymentFormComponent.prototype.getAddressCardContent = function (address) {
        var region = '';
        if (address.region && address.region.isocode) {
            region = address.region.isocode + ', ';
        }
        return {
            textBold: address.firstName + ' ' + address.lastName,
            text: [
                address.line1,
                address.line2,
                address.town + ', ' + region + address.country.isocode,
                address.postalCode,
                address.phone,
            ],
        };
    };
    PaymentFormComponent.prototype.openSuggestedAddress = function (results) {
        var _this = this;
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.billingAddress.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then(function () {
                _this.checkoutDeliveryService.clearAddressVerificationResults();
                _this.suggestedAddressModalRef = null;
            })
                .catch(function () {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                _this.checkoutDeliveryService.clearAddressVerificationResults();
                _this.suggestedAddressModalRef = null;
            });
        }
    };
    PaymentFormComponent.prototype.close = function () {
        this.closeForm.emit();
    };
    PaymentFormComponent.prototype.back = function () {
        this.goBack.emit();
    };
    PaymentFormComponent.prototype.verifyAddress = function () {
        if (this.sameAsShippingAddress) {
            this.next();
        }
        else {
            this.checkoutDeliveryService.verifyAddress(this.billingAddress.value);
        }
    };
    PaymentFormComponent.prototype.next = function () {
        this.setPaymentDetails.emit({
            paymentDetails: this.payment.value,
            billingAddress: this.sameAsShippingAddress
                ? null
                : this.billingAddress.value,
        });
    };
    PaymentFormComponent.prototype.ngOnDestroy = function () {
        if (this.checkboxSub) {
            this.checkboxSub.unsubscribe();
        }
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
    };
    PaymentFormComponent.ctorParameters = function () { return [
        { type: CheckoutPaymentService },
        { type: CheckoutDeliveryService },
        { type: UserPaymentService },
        { type: GlobalMessageService },
        { type: FormBuilder },
        { type: ModalService }
    ]; };
    __decorate([
        Input()
    ], PaymentFormComponent.prototype, "setAsDefaultField", void 0);
    __decorate([
        Input()
    ], PaymentFormComponent.prototype, "paymentMethodsCount", void 0);
    __decorate([
        Output()
    ], PaymentFormComponent.prototype, "goBack", void 0);
    __decorate([
        Output()
    ], PaymentFormComponent.prototype, "closeForm", void 0);
    __decorate([
        Output()
    ], PaymentFormComponent.prototype, "setPaymentDetails", void 0);
    PaymentFormComponent = __decorate([
        Component({
            selector: 'cx-payment-form',
            template: "<!-- FORM -->\n<div *ngIf=\"!(loading$ | async).loading; else spinner\" [formGroup]=\"payment\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\">\n        <ng-container *ngIf=\"cardTypes$ | async as cardTypes\">\n          <div *ngIf=\"cardTypes.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'paymentForm.paymentType' | cxTranslate\n              }}</span>\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"cardTypes\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                placeholder=\"{{ 'paymentForm.selectOne' | cxTranslate }}\"\n                (change)=\"paymentSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.accountHolderName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'paymentForm.accountHolderName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"accountHolderName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.cardNumber' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            formControlName=\"cardNumber\"\n          />\n        </label>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.expirationDate' | cxTranslate\n            }}</span>\n          </label>\n          <div class=\"cx-payment-form-exp-date row\">\n            <div class=\"col-sm-6 col-md-5\">\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"months\"\n                bindLabel=\"name\"\n                bindValue=\"expiryMonth\"\n                placeholder=\"{{ 'paymentForm.monthMask' | cxTranslate }}\"\n                (change)=\"monthSelected($event)\"\n              >\n              </ng-select>\n            </div>\n            <div class=\"col-sm-6 col-md-7\">\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"years\"\n                bindLabel=\"name\"\n                bindValue=\"expiryYear\"\n                placeholder=\"{{ 'paymentForm.yearMask' | cxTranslate }}\"\n                (change)=\"yearSelected($event)\"\n              >\n              </ng-select>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">\n              {{ 'paymentForm.securityCode' | cxTranslate }}\n              <cx-icon\n                [type]=\"iconTypes.INFO\"\n                class=\"cx-payment-form-tooltip\"\n                placement=\"right\"\n                title=\"{{ 'paymentForm.securityCodeTitle' | cxTranslate }}\"\n                alt=\"\"\n              ></cx-icon>\n            </span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cVVNumber\"\n              required\n              formControlName=\"cvn\"\n            />\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              (change)=\"toggleDefaultPaymentMethod()\"\n            />\n            <span class=\"form-check-label\">{{\n              'paymentForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n\n      <!-- BILLING -->\n      <div class=\"cx-payment-form-billing\">\n        <div class=\"cx-payment-form-billing-address\">\n          {{ 'paymentForm.billingAddress' | cxTranslate }}\n        </div>\n\n        <!-- SAME AS SHIPPING CHECKBOX -->\n        <ng-container *ngIf=\"showSameAsShippingAddressCheckbox() | async\">\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  class=\"form-check-input\"\n                  [checked]=\"sameAsShippingAddress\"\n                  (change)=\"toggleSameAsShippingAddress()\"\n                />\n                <span class=\"form-check-label\">{{\n                  'paymentForm.sameAsShippingAddress' | cxTranslate\n                }}</span>\n              </label>\n            </div>\n          </div>\n        </ng-container>\n\n        <!-- BILLING INFO COMPONENT -->\n        <ng-container\n          *ngIf=\"\n            sameAsShippingAddress && shippingAddress$\n              | async as shippingAddress;\n            else billingAddressForm\n          \"\n        >\n          <cx-card [content]=\"getAddressCardContent(shippingAddress)\"></cx-card>\n        </ng-container>\n\n        <ng-template #billingAddressForm>\n          <cx-billing-address-form\n            [billingAddress]=\"billingAddress\"\n            [countries$]=\"countries$\"\n          >\n          </cx-billing-address-form>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <!-- BUTTON SECTION -->\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        *ngIf=\"paymentMethodsCount === 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"back()\"\n      >\n        {{ 'common.back' | cxTranslate }}\n      </button>\n      <button\n        *ngIf=\"paymentMethodsCount > 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"close()\"\n      >\n        {{ 'paymentForm.changePayment' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" (click)=\"next()\">\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #spinner>\n  <cx-spinner></cx-spinner>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PaymentFormComponent);
    return PaymentFormComponent;
}());

var PaymentFormModule = /** @class */ (function () {
    function PaymentFormModule() {
    }
    PaymentFormModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                NgSelectModule,
                CardModule,
                BillingAddressFormModule,
                I18nModule,
                IconModule,
                SpinnerModule,
            ],
            declarations: [PaymentFormComponent],
            entryComponents: [PaymentFormComponent],
            exports: [PaymentFormComponent],
        })
    ], PaymentFormModule);
    return PaymentFormModule;
}());

var PaymentMethodComponent = /** @class */ (function () {
    function PaymentMethodComponent(userPaymentService, checkoutService, checkoutDeliveryService, checkoutPaymentService, globalMessageService, routingService, checkoutConfigService, activatedRoute, translation, cartService) {
        this.userPaymentService = userPaymentService;
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.cartService = cartService;
        this.iconTypes = ICON_TYPE;
        this.newPaymentFormManuallyOpened = false;
        this.isGuestCheckout = false;
    }
    PaymentMethodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allowRouting = false;
        this.isLoading$ = this.userPaymentService.getPaymentMethodsLoading();
        if (!this.cartService.isGuestCart()) {
            this.userPaymentService.loadPaymentMethods();
        }
        else {
            this.isGuestCheckout = true;
        }
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
        this.checkoutDeliveryService
            .getDeliveryAddress()
            .pipe(take(1))
            .subscribe(function (address) {
            _this.deliveryAddress = address;
        });
        this.existingPaymentMethods$ = this.userPaymentService.getPaymentMethods();
        this.getPaymentDetailsSub = this.checkoutPaymentService
            .getPaymentDetails()
            .pipe(filter(function (paymentInfo) { return paymentInfo && !!Object.keys(paymentInfo).length; }))
            .subscribe(function (paymentInfo) {
            if (_this.allowRouting) {
                _this.routingService.go(_this.checkoutStepUrlNext);
            }
            if (!paymentInfo['hasError']) {
                _this.selectedPayment = paymentInfo;
            }
            else {
                Object.keys(paymentInfo).forEach(function (key) {
                    if (key.startsWith('InvalidField')) {
                        _this.sendPaymentMethodFailGlobalMessage(paymentInfo[key]);
                    }
                });
                _this.checkoutService.clearCheckoutStep(3);
            }
        });
    };
    PaymentMethodComponent.prototype.getCardContent = function (payment) {
        var _this = this;
        if (!this.selectedPayment && payment.defaultPayment) {
            this.selectedPayment = payment;
        }
        return combineLatest([
            this.translation.translate('paymentCard.expires', {
                month: payment.expiryMonth,
                year: payment.expiryYear,
            }),
            this.translation.translate('paymentForm.useThisPayment'),
            this.translation.translate('paymentCard.defaultPaymentMethod'),
            this.translation.translate('paymentCard.selected'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 4), textExpires = _b[0], textUseThisPayment = _b[1], textDefaultPaymentMethod = _b[2], textSelected = _b[3];
            return _this.createCard(payment, {
                textExpires: textExpires,
                textUseThisPayment: textUseThisPayment,
                textDefaultPaymentMethod: textDefaultPaymentMethod,
                textSelected: textSelected,
            });
        }));
    };
    PaymentMethodComponent.prototype.selectPaymentMethod = function (paymentDetails) {
        this.selectedPayment = paymentDetails;
    };
    PaymentMethodComponent.prototype.showNewPaymentForm = function () {
        this.newPaymentFormManuallyOpened = true;
    };
    PaymentMethodComponent.prototype.hideNewPaymentForm = function () {
        this.newPaymentFormManuallyOpened = false;
    };
    PaymentMethodComponent.prototype.setPaymentDetails = function (_a) {
        var paymentDetails = _a.paymentDetails, billingAddress = _a.billingAddress, _b = _a.isNewPayment, isNewPayment = _b === void 0 ? true : _b;
        var details = __assign({}, paymentDetails);
        details.billingAddress = billingAddress || this.deliveryAddress;
        if (isNewPayment) {
            this.checkoutPaymentService.createPaymentDetails(details);
        }
        else if (this.selectedPayment && this.selectedPayment.id === details.id) {
            this.checkoutPaymentService.setPaymentDetails(details);
        }
        this.allowRouting = true;
    };
    PaymentMethodComponent.prototype.ngOnDestroy = function () {
        if (this.getPaymentDetailsSub) {
            this.getPaymentDetailsSub.unsubscribe();
        }
        this.checkoutPaymentService.paymentProcessSuccess();
    };
    PaymentMethodComponent.prototype.getCardIcon = function (code) {
        var ccIcon;
        if (code === 'visa') {
            ccIcon = this.iconTypes.VISA;
        }
        else if (code === 'master' || code === 'mastercard_eurocard') {
            ccIcon = this.iconTypes.MASTER_CARD;
        }
        else if (code === 'diners') {
            ccIcon = this.iconTypes.DINERS_CLUB;
        }
        else if (code === 'amex') {
            ccIcon = this.iconTypes.AMEX;
        }
        else {
            ccIcon = this.iconTypes.CREDIT_CARD;
        }
        return ccIcon;
    };
    PaymentMethodComponent.prototype.sendPaymentMethodFailGlobalMessage = function (msg) {
        this.globalMessageService.add({
            key: 'paymentMethods.invalidField',
            params: { field: msg },
        }, GlobalMessageType.MSG_TYPE_ERROR);
    };
    PaymentMethodComponent.prototype.createCard = function (paymentDetails, cardLabels) {
        return {
            title: paymentDetails.defaultPayment
                ? cardLabels.textDefaultPaymentMethod
                : '',
            textBold: paymentDetails.accountHolderName,
            text: [paymentDetails.cardNumber, cardLabels.textExpires],
            img: this.getCardIcon(paymentDetails.cardType.code),
            actions: [{ name: cardLabels.textUseThisPayment, event: 'send' }],
            header: this.selectedPayment && this.selectedPayment.id === paymentDetails.id
                ? cardLabels.textSelected
                : undefined,
        };
    };
    PaymentMethodComponent.prototype.goNext = function () {
        this.setPaymentDetails({
            paymentDetails: this.selectedPayment,
            isNewPayment: false,
        });
    };
    PaymentMethodComponent.prototype.goPrevious = function () {
        this.routingService.go(this.checkoutStepUrlPrevious);
    };
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goNext() instead.
     * TODO(issue:#4992) deprecated since 1.3
     */
    PaymentMethodComponent.prototype.next = function () {
        this.goNext();
    };
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goPrevious() instead.
     * TODO(issue:#4992) deprecated since 1.3
     */
    PaymentMethodComponent.prototype.back = function () {
        this.goPrevious();
    };
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use selectPaymentMethod() instead.
     * TODO(issue:#4992) deprecated since 1.3
     */
    PaymentMethodComponent.prototype.paymentMethodSelected = function (paymentDetails) {
        this.selectPaymentMethod(paymentDetails);
    };
    PaymentMethodComponent.ctorParameters = function () { return [
        { type: UserPaymentService },
        { type: CheckoutService },
        { type: CheckoutDeliveryService },
        { type: CheckoutPaymentService },
        { type: GlobalMessageService },
        { type: RoutingService },
        { type: CheckoutConfigService },
        { type: ActivatedRoute },
        { type: TranslationService },
        { type: CartService }
    ]; };
    PaymentMethodComponent = __decorate([
        Component({
            selector: 'cx-payment-method',
            template: "<ng-container *ngIf=\"existingPaymentMethods$ | async as existingPaymentMethods\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        (existingPaymentMethods$ | async).length &&\n          !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let method of existingPaymentMethods; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(method) | async\"\n              (sendCard)=\"paymentMethodSelected(method)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!selectedPayment\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (setPaymentDetails)=\"setPaymentDetails($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"back()\"\n        [paymentMethodsCount]=\"existingPaymentMethods?.length || 0\"\n        [setAsDefaultField]=\"!isGuestCheckout\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PaymentMethodComponent);
    return PaymentMethodComponent;
}());

var PaymentMethodModule = /** @class */ (function () {
    function PaymentMethodModule() {
    }
    PaymentMethodModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                PaymentFormModule,
                CardModule,
                SpinnerModule,
                I18nModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CheckoutPaymentDetails: {
                            component: PaymentMethodComponent,
                            guards: [
                                CheckoutAuthGuard,
                                CartNotEmptyGuard,
                                ShippingAddressSetGuard,
                                DeliveryModeSetGuard,
                            ],
                        },
                    },
                }),
            ],
            providers: [UserService],
            declarations: [PaymentMethodComponent],
            entryComponents: [PaymentMethodComponent],
            exports: [PaymentMethodComponent],
        })
    ], PaymentMethodModule);
    return PaymentMethodModule;
}());

var PlaceOrderComponent = /** @class */ (function () {
    function PlaceOrderComponent(checkoutService, routingService) {
        this.checkoutService = checkoutService;
        this.routingService = routingService;
        this.tAndCToggler = false;
    }
    PlaceOrderComponent.prototype.toggleTAndC = function () {
        this.tAndCToggler = !this.tAndCToggler;
    };
    PlaceOrderComponent.prototype.placeOrder = function () {
        this.checkoutService.placeOrder();
    };
    PlaceOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.placeOrderSubscription = this.checkoutService
            .getOrderDetails()
            .pipe(filter(function (order) { return Object.keys(order).length !== 0; }))
            .subscribe(function () {
            _this.routingService.go({ cxRoute: 'orderConfirmation' });
        });
    };
    PlaceOrderComponent.prototype.ngOnDestroy = function () {
        if (this.placeOrderSubscription) {
            this.placeOrderSubscription.unsubscribe();
        }
    };
    PlaceOrderComponent.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: RoutingService }
    ]; };
    PlaceOrderComponent = __decorate([
        Component({
            selector: 'cx-place-order',
            template: "<div class=\"cx-place-order-form form-check\">\n  <label>\n    <input class=\"form-check-input\" type=\"checkbox\" (change)=\"toggleTAndC()\" />\n    <span class=\"form-check-label\">\n      {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n      <a\n        [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n        class=\"cx-tc-link\"\n        target=\"_blank\"\n      >\n        {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n      </a>\n    </span>\n  </label>\n</div>\n<button\n  [disabled]=\"!tAndCToggler\"\n  (click)=\"placeOrder()\"\n  class=\"btn btn-primary btn-block\"\n>\n  {{ 'checkoutReview.placeOrder' | cxTranslate }}\n</button>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PlaceOrderComponent);
    return PlaceOrderComponent;
}());

var PlaceOrderModule = /** @class */ (function () {
    function PlaceOrderModule() {
    }
    PlaceOrderModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                UrlModule,
                I18nModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CheckoutPlaceOrder: {
                            component: PlaceOrderComponent,
                            guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                        },
                    },
                }),
            ],
            declarations: [PlaceOrderComponent],
            entryComponents: [PlaceOrderComponent],
            exports: [PlaceOrderComponent],
        })
    ], PlaceOrderModule);
    return PlaceOrderModule;
}());

var PaymentDetailsSetGuard = /** @class */ (function () {
    function PaymentDetailsSetGuard(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    PaymentDetailsSetGuard.prototype.canActivate = function () {
        var _this = this;
        var checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.PAYMENT_DETAILS);
        if (!checkoutStep && isDevMode()) {
            console.warn("Missing step with type " + CheckoutStepType.PAYMENT_DETAILS + " in checkout configuration.");
        }
        return this.checkoutDetailsService
            .getPaymentDetails()
            .pipe(map(function (paymentDetails) {
            return paymentDetails && Object.keys(paymentDetails).length !== 0
                ? true
                : _this.router.parseUrl(checkoutStep &&
                    _this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]);
        }));
    };
    PaymentDetailsSetGuard.ctorParameters = function () { return [
        { type: CheckoutDetailsService },
        { type: CheckoutConfigService },
        { type: RoutingConfigService },
        { type: Router }
    ]; };
    PaymentDetailsSetGuard.ɵprov = ɵɵdefineInjectable({ factory: function PaymentDetailsSetGuard_Factory() { return new PaymentDetailsSetGuard(ɵɵinject(CheckoutDetailsService), ɵɵinject(CheckoutConfigService), ɵɵinject(RoutingConfigService), ɵɵinject(Router)); }, token: PaymentDetailsSetGuard, providedIn: "root" });
    PaymentDetailsSetGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PaymentDetailsSetGuard);
    return PaymentDetailsSetGuard;
}());

var ReviewSubmitComponent = /** @class */ (function () {
    function ReviewSubmitComponent(checkoutDeliveryService, checkoutPaymentService, userAddressService, cartService, translation, checkoutConfigService, promotionService) {
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.userAddressService = userAddressService;
        this.cartService = cartService;
        this.translation = translation;
        this.checkoutConfigService = checkoutConfigService;
        this.promotionService = promotionService;
        this.checkoutStepType = CheckoutStepType;
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    ReviewSubmitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService.getEntries();
        this.deliveryAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.paymentDetails$ = this.checkoutPaymentService.getPaymentDetails();
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
        this.deliveryMode$ = this.checkoutDeliveryService
            .getSelectedDeliveryMode()
            .pipe(tap(function (selected) {
            if (selected === null) {
                _this.checkoutDeliveryService.loadSupportedDeliveryModes();
            }
        }));
        this.countryName$ = this.deliveryAddress$.pipe(switchMap(function (address) {
            return _this.userAddressService.getCountry(address.country.isocode);
        }), tap(function (country) {
            if (country === null) {
                _this.userAddressService.loadDeliveryCountries();
            }
        }), map(function (country) { return country && country.name; }));
    };
    ReviewSubmitComponent.prototype.getShippingAddressCard = function (deliveryAddress, countryName) {
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            if (!countryName) {
                countryName = deliveryAddress.country.isocode;
            }
            var region = '';
            if (deliveryAddress.region && deliveryAddress.region.isocode) {
                region = deliveryAddress.region.isocode + ', ';
            }
            return {
                title: textTitle,
                textBold: deliveryAddress.firstName + ' ' + deliveryAddress.lastName,
                text: [
                    deliveryAddress.line1,
                    deliveryAddress.line2,
                    deliveryAddress.town + ', ' + region + countryName,
                    deliveryAddress.postalCode,
                    deliveryAddress.phone,
                ],
            };
        }));
    };
    ReviewSubmitComponent.prototype.getDeliveryModeCard = function (deliveryMode) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            return {
                title: textTitle,
                textBold: deliveryMode.name,
                text: [deliveryMode.description],
            };
        }));
    };
    ReviewSubmitComponent.prototype.getPaymentMethodCard = function (paymentDetails) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: paymentDetails.expiryMonth,
                year: paymentDetails.expiryYear,
            }),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), textTitle = _b[0], textExpires = _b[1];
            return {
                title: textTitle,
                textBold: paymentDetails.accountHolderName,
                text: [paymentDetails.cardNumber, textExpires],
            };
        }));
    };
    ReviewSubmitComponent.prototype.getCheckoutStepUrl = function (stepType) {
        // TODO(issue:#4121) Deprecated since 1.1.0
        if (this.checkoutConfigService) {
            var step = this.checkoutConfigService.getCheckoutStep(stepType);
            return step && step.routeName;
        }
    };
    ReviewSubmitComponent.ctorParameters = function () { return [
        { type: CheckoutDeliveryService },
        { type: CheckoutPaymentService },
        { type: UserAddressService },
        { type: CartService },
        { type: TranslationService },
        { type: CheckoutConfigService },
        { type: PromotionService }
    ]; };
    ReviewSubmitComponent = __decorate([
        Component({
            selector: 'cx-review-submit',
            template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.review' | cxTranslate }}\n  </h3>\n  <div class=\"cx-review-summary row\">\n    <!-- SHIPPING ADDRESS SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-address\">\n          <cx-card\n            [content]=\"\n              getShippingAddressCard(\n                deliveryAddress$ | async,\n                countryName$ | async\n              ) | async\n            \"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              {\n                cxRoute: getCheckoutStepUrl(checkoutStepType.SHIPPING_ADDRESS)\n              } | cxUrl\n            \"\n            >{{ 'checkoutReview.editShippingAddress' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <!-- DELIVERY MODE SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-shipping\">\n          <cx-card\n            *ngIf=\"deliveryMode$ | async as deliveryMode\"\n            [content]=\"getDeliveryModeCard(deliveryMode) | async\"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              { cxRoute: getCheckoutStepUrl(checkoutStepType.DELIVERY_MODE) }\n                | cxUrl\n            \"\n            >{{ 'checkoutReview.editShippingMethod' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <!-- PAYMENT METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-payment\">\n          <cx-card\n            [content]=\"getPaymentMethodCard(paymentDetails$ | async) | async\"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              { cxRoute: getCheckoutStepUrl(checkoutStepType.PAYMENT_DETAILS) }\n                | cxUrl\n            \"\n            >{{ 'checkoutReview.editPaymentMethod' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"cart$ | async as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"entries$ | async as entries\"\n    >\n      <ng-container *cxFeatureLevel=\"'!1.5'\">\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [readonly]=\"true\"\n          [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        ></cx-cart-item-list>\n      </ng-container>\n\n      <ng-container *cxFeatureLevel=\"'1.5'\">\n        <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n          <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [readonly]=\"true\"\n          [promotionLocation]=\"promotionLocation\"\n        ></cx-cart-item-list>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ReviewSubmitComponent);
    return ReviewSubmitComponent;
}());

var ReviewSubmitModule = /** @class */ (function () {
    function ReviewSubmitModule() {
    }
    ReviewSubmitModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                CardModule,
                CartSharedModule,
                I18nModule,
                UrlModule,
                RouterModule,
                PromotionsModule,
                FeaturesConfigModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CheckoutReviewOrder: {
                            component: ReviewSubmitComponent,
                            guards: [
                                CheckoutAuthGuard,
                                CartNotEmptyGuard,
                                ShippingAddressSetGuard,
                                DeliveryModeSetGuard,
                                PaymentDetailsSetGuard,
                            ],
                        },
                    },
                }),
            ],
            declarations: [ReviewSubmitComponent],
            entryComponents: [ReviewSubmitComponent],
            exports: [ReviewSubmitComponent],
        })
    ], ReviewSubmitModule);
    return ReviewSubmitModule;
}());

var AddressFormComponent = /** @class */ (function () {
    function AddressFormComponent(fb, checkoutDeliveryService, userService, userAddressService, globalMessageService, modalService) {
        this.fb = fb;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.userService = userService;
        this.userAddressService = userAddressService;
        this.globalMessageService = globalMessageService;
        this.modalService = modalService;
        this.selectedCountry$ = new BehaviorSubject('');
        this.showCancelBtn = true;
        this.submitAddress = new EventEmitter();
        this.backToAddress = new EventEmitter();
        this.address = this.fb.group({
            defaultAddress: [false],
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            line1: ['', Validators.required],
            line2: [''],
            town: ['', Validators.required],
            region: this.fb.group({
                isocode: [null, Validators.required],
            }),
            country: this.fb.group({
                isocode: [null, Validators.required],
            }),
            postalCode: ['', Validators.required],
            phone: '',
        });
    }
    AddressFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Fetching countries
        this.countries$ = this.userAddressService.getDeliveryCountries().pipe(tap(function (countries) {
            if (Object.keys(countries).length === 0) {
                _this.userAddressService.loadDeliveryCountries();
            }
        }));
        // Fetching titles
        this.titles$ = this.userService.getTitles().pipe(tap(function (titles) {
            if (Object.keys(titles).length === 0) {
                _this.userService.loadTitles();
            }
        }), map(function (titles) {
            titles.sort(sortTitles);
            var noneTitle = { code: '', name: 'Title' };
            return __spread([noneTitle], titles);
        }));
        // Fetching regions
        this.regions$ = this.selectedCountry$.pipe(switchMap(function (country) { return _this.userAddressService.getRegions(country); }), tap(function (regions) {
            var regionControl = _this.address.get('region.isocode');
            if (regions && regions.length > 0) {
                regionControl.enable();
            }
            else {
                regionControl.disable();
            }
        }));
        // verify the new added address
        this.addressVerifySub = this.checkoutDeliveryService
            .getAddressVerificationResults()
            .subscribe(function (results) {
            if (results.decision === 'FAIL') {
                _this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                _this.submitAddress.emit(_this.address.value);
            }
            else if (results.decision === 'REJECT') {
                // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
                if (results.errors.errors.some(function (error) { return error.subject === 'titleCode'; })) {
                    _this.globalMessageService.add({ key: 'addressForm.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
                }
                else {
                    _this.globalMessageService.add({ key: 'addressForm.invalidAddress' }, GlobalMessageType.MSG_TYPE_ERROR);
                }
                _this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'REVIEW') {
                _this.openSuggestedAddress(results);
            }
        });
        if (this.addressData && Object.keys(this.addressData).length !== 0) {
            this.address.patchValue(this.addressData);
            this.countrySelected(this.addressData.country);
            if (this.addressData.region) {
                this.regionSelected(this.addressData.region);
            }
        }
    };
    AddressFormComponent.prototype.titleSelected = function (title) {
        this.address['controls'].titleCode.setValue(title.code);
    };
    AddressFormComponent.prototype.countrySelected = function (country) {
        this.address['controls'].country['controls'].isocode.setValue(country.isocode);
        this.selectedCountry$.next(country.isocode);
    };
    AddressFormComponent.prototype.regionSelected = function (region) {
        this.address['controls'].region['controls'].isocode.setValue(region.isocode);
    };
    AddressFormComponent.prototype.toggleDefaultAddress = function () {
        this.address['controls'].defaultAddress.setValue(this.address.value.defaultAddress);
    };
    AddressFormComponent.prototype.back = function () {
        this.backToAddress.emit();
    };
    AddressFormComponent.prototype.verifyAddress = function () {
        var _this = this;
        if (this.address.controls['region'].value.isocode) {
            this.regionsSub = this.regions$.pipe(take(1)).subscribe(function (regions) {
                var obj = regions.find(function (region) {
                    return region.isocode === _this.address.controls['region'].value.isocode;
                });
                Object.assign(_this.address.value.region, {
                    isocodeShort: obj.isocodeShort,
                });
            });
        }
        if (this.address.dirty) {
            this.checkoutDeliveryService.verifyAddress(this.address.value);
        }
        else {
            // address form value not changed
            // ignore duplicate address
            this.submitAddress.emit(undefined);
        }
    };
    AddressFormComponent.prototype.openSuggestedAddress = function (results) {
        var _this = this;
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.address.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then(function (address) {
                _this.checkoutDeliveryService.clearAddressVerificationResults();
                if (address) {
                    address = Object.assign({
                        titleCode: _this.address.value.titleCode,
                        phone: _this.address.value.phone,
                        selected: true,
                    }, address);
                    _this.submitAddress.emit(address);
                }
                _this.suggestedAddressModalRef = null;
            })
                .catch(function () {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                _this.checkoutDeliveryService.clearAddressVerificationResults();
                var address = Object.assign({
                    selected: true,
                }, _this.address.value);
                _this.submitAddress.emit(address);
                _this.suggestedAddressModalRef = null;
            });
        }
    };
    AddressFormComponent.prototype.ngOnDestroy = function () {
        this.checkoutDeliveryService.clearAddressVerificationResults();
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
        if (this.regionsSub) {
            this.regionsSub.unsubscribe();
        }
    };
    AddressFormComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CheckoutDeliveryService },
        { type: UserService },
        { type: UserAddressService },
        { type: GlobalMessageService },
        { type: ModalService }
    ]; };
    __decorate([
        Input()
    ], AddressFormComponent.prototype, "addressData", void 0);
    __decorate([
        Input()
    ], AddressFormComponent.prototype, "actionBtnLabel", void 0);
    __decorate([
        Input()
    ], AddressFormComponent.prototype, "cancelBtnLabel", void 0);
    __decorate([
        Input()
    ], AddressFormComponent.prototype, "setAsDefaultField", void 0);
    __decorate([
        Input()
    ], AddressFormComponent.prototype, "showTitleCode", void 0);
    __decorate([
        Input()
    ], AddressFormComponent.prototype, "showCancelBtn", void 0);
    __decorate([
        Output()
    ], AddressFormComponent.prototype, "submitAddress", void 0);
    __decorate([
        Output()
    ], AddressFormComponent.prototype, "backToAddress", void 0);
    AddressFormComponent = __decorate([
        Component({
            selector: 'cx-address-form',
            template: "<div [formGroup]=\"address\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\" formGroupName=\"country\">\n        <ng-container *ngIf=\"countries$ | async as countries\">\n          <div *ngIf=\"countries.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.country' | cxTranslate\n              }}</span>\n              <ng-select\n                class=\"country-select\"\n                formControlName=\"isocode\"\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"countries\"\n                bindLabel=\"name\"\n                bindValue=\"isocode\"\n                placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                (change)=\"countrySelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\" *ngIf=\"showTitleCode\">\n        <ng-container *ngIf=\"titles$ | async as titles\">\n          <div *ngIf=\"titles.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.title' | cxTranslate\n              }}</span>\n              <ng-select\n                formControlName=\"titleCode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"titles\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                (change)=\"titleSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.firstName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'addressForm.firstName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"firstName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.lastName.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n            formControlName=\"lastName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.address1' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n            formControlName=\"line1\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.address2' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n            formControlName=\"line2\"\n          />\n        </label>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.city.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n              formControlName=\"town\"\n            />\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <ng-container\n            *ngIf=\"regions$ | async as regions\"\n            formGroupName=\"region\"\n          >\n            <div *ngIf=\"regions.length !== 0\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'addressForm.state' | cxTranslate\n                }}</span>\n                <ng-select\n                  class=\"region-select\"\n                  formControlName=\"isocode\"\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"regions\"\n                  bindLabel=\"{{ regions[0].name ? 'name' : 'isocode' }}\"\n                  bindValue=\"{{ regions[0].name ? 'isocode' : 'region' }}\"\n                  placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                  (change)=\"regionSelected($event)\"\n                >\n                </ng-select>\n              </label>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.zipCode.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{\n                'addressForm.zipCode.placeholder' | cxTranslate\n              }}\"\n              formControlName=\"postalCode\"\n            />\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.phoneNumber.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{\n              'addressForm.phoneNumber.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"phone\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              formControlName=\"defaultAddress\"\n              (change)=\"toggleDefaultAddress()\"\n            />\n            <span class=\"form-check-label\">{{\n              'addressForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\" *ngIf=\"showCancelBtn\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ cancelBtnLabel || ('addressForm.chooseAddress' | cxTranslate) }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" (click)=\"verifyAddress()\">\n        {{ actionBtnLabel || ('common.continue' | cxTranslate) }}\n      </button>\n    </div>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], AddressFormComponent);
    return AddressFormComponent;
}());

var AddressFormModule = /** @class */ (function () {
    function AddressFormModule() {
    }
    AddressFormModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                FormsModule,
                RouterModule,
                NgSelectModule,
                IconModule,
                I18nModule,
                AutoFocusDirectiveModule,
            ],
            declarations: [AddressFormComponent, SuggestedAddressDialogComponent],
            entryComponents: [SuggestedAddressDialogComponent],
            exports: [AddressFormComponent, SuggestedAddressDialogComponent],
        })
    ], AddressFormModule);
    return AddressFormModule;
}());

var CheckoutDetailsLoadedGuard = /** @class */ (function () {
    function CheckoutDetailsLoadedGuard(checkoutDetailsService) {
        this.checkoutDetailsService = checkoutDetailsService;
    }
    CheckoutDetailsLoadedGuard.prototype.canActivate = function () {
        return this.checkoutDetailsService.getCheckoutDetailsLoaded$;
    };
    CheckoutDetailsLoadedGuard.ctorParameters = function () { return [
        { type: CheckoutDetailsService }
    ]; };
    CheckoutDetailsLoadedGuard.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutDetailsLoadedGuard_Factory() { return new CheckoutDetailsLoadedGuard(ɵɵinject(CheckoutDetailsService)); }, token: CheckoutDetailsLoadedGuard, providedIn: "root" });
    CheckoutDetailsLoadedGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutDetailsLoadedGuard);
    return CheckoutDetailsLoadedGuard;
}());

var ShippingAddressComponent = /** @class */ (function () {
    function ShippingAddressComponent(userAddressService, cartService, routingService, checkoutDeliveryService, checkoutConfigService, activatedRoute, translation) {
        this.userAddressService = userAddressService;
        this.cartService = cartService;
        this.routingService = routingService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.newAddressFormManuallyOpened = false;
        this.forceLoader = false; // this helps with smoother steps transition
        /**
         * @deprecated since version 1.3
         * This variable will no longer be in use. Use cards$ observable instead.
         * TODO(issue:#3921) deprecated since 1.3
         */
        this.cards = [];
        /**
         * @deprecated since version 1.3
         * This variable will no longer be in use. Avoid using it.
         * TODO(issue:#3921) deprecated since 1.3
         */
        this.goTo = null;
        /**
         * @deprecated since version 1.3
         * This variable will no longer be in use. Use CheckoutConfigService.getNextCheckoutStepUrl(this.activatedRoute) instead.
         * TODO(issue:#3921) deprecated since 1.3
         */
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        /**
         * @deprecated since version 1.3
         * This variable will no longer be in use. Use CheckoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute) instead.
         * TODO(issue:#3921) deprecated since 1.3
         */
        this.checkoutStepUrlPrevious = 'cart';
        this.isGuestCheckout = false;
    }
    ShippingAddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goTo = null;
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = 'cart';
        this.isLoading$ = this.userAddressService.getAddressesLoading();
        this.existingAddresses$ = this.userAddressService.getAddresses();
        this.selectedAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.cards$ = combineLatest([
            this.existingAddresses$,
            this.selectedAddress$,
            this.translation.translate('checkoutAddress.defaultShippingAddress'),
            this.translation.translate('checkoutAddress.shipToThisAddress'),
            this.translation.translate('addressCard.selected'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 5), addresses = _b[0], selected = _b[1], textDefaultShippingAddress = _b[2], textShipToThisAddress = _b[3], textSelected = _b[4];
            // Select default address if none selected
            if (addresses.length &&
                (!selected ||
                    Object.keys(selected).length === 0 ||
                    !_this.selectedAddress)) {
                var defaultAddress = addresses.find(function (address) { return address.defaultAddress; });
                selected = defaultAddress;
                _this.selectAddress(defaultAddress);
            }
            return addresses.map(function (address) {
                var card = _this.getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected);
                return {
                    address: address,
                    card: card,
                };
            });
        }));
        if (!this.cartService.isGuestCart()) {
            this.userAddressService.loadAddresses();
        }
        else {
            this.isGuestCheckout = true;
        }
    };
    ShippingAddressComponent.prototype.getCardContent = function (address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected) {
        var region = '';
        if (address.region && address.region.isocode) {
            region = address.region.isocode + ', ';
        }
        return {
            title: address.defaultAddress ? textDefaultShippingAddress : '',
            textBold: address.firstName + ' ' + address.lastName,
            text: [
                address.line1,
                address.line2,
                address.town + ', ' + region + address.country.isocode,
                address.postalCode,
                address.phone,
            ],
            actions: [{ name: textShipToThisAddress, event: 'send' }],
            header: selected && selected.id === address.id ? textSelected : '',
        };
    };
    ShippingAddressComponent.prototype.selectAddress = function (address) {
        this.selectedAddress = address;
        this.checkoutDeliveryService.setDeliveryAddress(address);
    };
    ShippingAddressComponent.prototype.addAddress = function (address) {
        var _this = this;
        // TODO(issue:#3921) deprecated since 1.3 - Remove temp address
        var tempAddress = address['address']
            ? address['address']
            : address;
        var selectedSub = this.selectedAddress$.subscribe(function (selected) {
            if (selected && selected.shippingAddress) {
                _this.goNext();
                selectedSub.unsubscribe();
            }
        });
        this.forceLoader = true;
        // TODO(issue:#3921) deprecated since 1.3 - Remove this condition
        if (address['address'] || address['newAddress']) {
            address['newAddress']
                ? this.checkoutDeliveryService.createAndSetAddress(tempAddress)
                : this.selectAddress(tempAddress);
        }
        else {
            // TODO(issue:#3921) deprecated since 1.3 - Use instead of condition
            this.existingAddresses$.pipe(take(1)).subscribe(function (addresses) {
                addresses.includes(tempAddress)
                    ? _this.selectAddress(tempAddress)
                    : _this.checkoutDeliveryService.createAndSetAddress(tempAddress);
            });
        }
    };
    ShippingAddressComponent.prototype.showNewAddressForm = function () {
        this.newAddressFormManuallyOpened = true;
    };
    ShippingAddressComponent.prototype.hideNewAddressForm = function (goPrevious) {
        if (goPrevious === void 0) { goPrevious = false; }
        this.newAddressFormManuallyOpened = false;
        if (goPrevious) {
            this.goPrevious();
        }
    };
    ShippingAddressComponent.prototype.goNext = function () {
        this.routingService.go(this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute));
    };
    ShippingAddressComponent.prototype.goPrevious = function () {
        this.routingService.go(this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute) || 'cart');
    };
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use selectAddress(address: Address) instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    ShippingAddressComponent.prototype.addressSelected = function (address) {
        this.selectAddress(address);
    };
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goPrevious() instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    ShippingAddressComponent.prototype.back = function () {
        this.goPrevious();
    };
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goNext() instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    ShippingAddressComponent.prototype.next = function () {
        this.goNext();
    };
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use addAddress(address: Address) instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    ShippingAddressComponent.prototype.addNewAddress = function (address) {
        this.addAddress(address);
    };
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Remove.
     * TODO(issue:#3921) deprecated since 1.3
     */
    ShippingAddressComponent.prototype.ngOnDestroy = function () {
        if (this.setAddressSub) {
            this.setAddressSub.unsubscribe();
        }
        if (this.selectedAddressSub) {
            this.selectedAddressSub.unsubscribe();
        }
    };
    ShippingAddressComponent.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: CartService },
        { type: RoutingService },
        { type: CheckoutDeliveryService },
        { type: CheckoutConfigService },
        { type: ActivatedRoute },
        { type: TranslationService }
    ]; };
    ShippingAddressComponent = __decorate([
        Component({
            selector: 'cx-shipping-address',
            template: "<ng-container *ngIf=\"cards$ | async as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!forceLoader && !(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newAddressFormManuallyOpened;\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"addressSelected(card.address)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.card\"\n              (sendCard)=\"addressSelected(card.address)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"cx-btn btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'checkout.backToCart' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"\n              (!selectedAddress || !selectedAddress.id) &&\n              !(selectedAddress$ | async)?.shippingAddress\n            \"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <ng-container *ngIf=\"cards.length; else initialAddressForm\">\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          (backToAddress)=\"hideNewAddressForm(false)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-container>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          [setAsDefaultField]=\"!isGuestCheckout\"\n          [addressData]=\"setAddress\"\n          cancelBtnLabel=\"{{ 'checkout.backToCart' | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ShippingAddressComponent);
    return ShippingAddressComponent;
}());

var ShippingAddressModule = /** @class */ (function () {
    function ShippingAddressModule() {
    }
    ShippingAddressModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                AddressFormModule,
                CardModule,
                SpinnerModule,
                I18nModule,
                CheckoutProgressMobileTopModule,
                CheckoutProgressMobileBottomModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CheckoutShippingAddress: {
                            component: ShippingAddressComponent,
                            guards: [
                                CheckoutAuthGuard,
                                CartNotEmptyGuard,
                                CheckoutDetailsLoadedGuard,
                            ],
                        },
                    },
                }),
            ],
            declarations: [ShippingAddressComponent],
            entryComponents: [ShippingAddressComponent],
            exports: [ShippingAddressComponent],
        })
    ], ShippingAddressModule);
    return ShippingAddressModule;
}());

var CheckoutComponentModule = /** @class */ (function () {
    function CheckoutComponentModule() {
    }
    CheckoutComponentModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                CheckoutOrchestratorModule,
                CheckoutOrderSummaryModule,
                CheckoutProgressModule,
                CheckoutProgressMobileTopModule,
                CheckoutProgressMobileBottomModule,
                DeliveryModeModule,
                PaymentMethodModule,
                PlaceOrderModule,
                PromotionsModule,
                ReviewSubmitModule,
                ShippingAddressModule,
            ],
        })
    ], CheckoutComponentModule);
    return CheckoutComponentModule;
}());

var NotCheckoutAuthGuard = /** @class */ (function () {
    function NotCheckoutAuthGuard(routingService, authService, cartService) {
        this.routingService = routingService;
        this.authService = authService;
        this.cartService = cartService;
    }
    NotCheckoutAuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.authService.getUserToken().pipe(map(function (token) {
            if (token.access_token) {
                _this.routingService.go({ cxRoute: 'home' });
            }
            else if (_this.cartService.isGuestCart()) {
                _this.routingService.go({ cxRoute: 'cart' });
                return false;
            }
            return !token.access_token;
        }));
    };
    NotCheckoutAuthGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: AuthService },
        { type: CartService }
    ]; };
    NotCheckoutAuthGuard.ɵprov = ɵɵdefineInjectable({ factory: function NotCheckoutAuthGuard_Factory() { return new NotCheckoutAuthGuard(ɵɵinject(RoutingService), ɵɵinject(AuthService), ɵɵinject(CartService)); }, token: NotCheckoutAuthGuard, providedIn: "root" });
    NotCheckoutAuthGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], NotCheckoutAuthGuard);
    return NotCheckoutAuthGuard;
}());

var HamburgerMenuService = /** @class */ (function () {
    function HamburgerMenuService(router) {
        var _this = this;
        this.isExpanded = new BehaviorSubject(false);
        router.events
            .pipe(filter(function (event) { return event instanceof NavigationStart; }))
            .subscribe(function () {
            _this.toggle(true);
        });
    }
    /**
     * toggles the expand state of the hamburger menu
     */
    HamburgerMenuService.prototype.toggle = function (forceCollapse) {
        if (forceCollapse) {
            this.isExpanded.next(false);
        }
        else {
            this.isExpanded.next(!this.isExpanded.value);
        }
    };
    HamburgerMenuService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    HamburgerMenuService.ɵprov = ɵɵdefineInjectable({ factory: function HamburgerMenuService_Factory() { return new HamburgerMenuService(ɵɵinject(Router)); }, token: HamburgerMenuService, providedIn: "root" });
    HamburgerMenuService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], HamburgerMenuService);
    return HamburgerMenuService;
}());

var HamburgerMenuComponent = /** @class */ (function () {
    function HamburgerMenuComponent(hamburgerMenuService) {
        this.hamburgerMenuService = hamburgerMenuService;
    }
    HamburgerMenuComponent.prototype.toggle = function () {
        this.hamburgerMenuService.toggle();
    };
    Object.defineProperty(HamburgerMenuComponent.prototype, "isExpanded", {
        get: function () {
            return this.hamburgerMenuService.isExpanded;
        },
        enumerable: true,
        configurable: true
    });
    HamburgerMenuComponent.ctorParameters = function () { return [
        { type: HamburgerMenuService }
    ]; };
    HamburgerMenuComponent = __decorate([
        Component({
            selector: 'cx-hamburger-menu',
            template: "<button\n  class=\"cx-hamburger\"\n  type=\"button\"\n  (click)=\"toggle()\"\n  [class.is-active]=\"isExpanded | async\"\n  [attr.aria-expanded]=\"isExpanded | async\"\n  aria-label=\"Menu\"\n  aria-controls=\"header-account-container, header-categories-container, header-locale-container\"\n>\n  <span class=\"hamburger-box\">\n    <span class=\"hamburger-inner\"></span>\n  </span>\n</button>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], HamburgerMenuComponent);
    return HamburgerMenuComponent;
}());

var HamburgerMenuModule = /** @class */ (function () {
    function HamburgerMenuModule() {
    }
    HamburgerMenuModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        HamburgerMenuComponent: {
                            component: HamburgerMenuComponent,
                        },
                    },
                }),
            ],
            declarations: [HamburgerMenuComponent],
            exports: [HamburgerMenuComponent],
            entryComponents: [HamburgerMenuComponent],
        })
    ], HamburgerMenuModule);
    return HamburgerMenuModule;
}());

var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        NgModule({
            imports: [OutletRefModule],
            providers: [{ provide: LayoutConfig, useExisting: Config }],
            exports: [OutletRefModule],
        })
    ], LayoutModule);
    return LayoutModule;
}());

var ConsentManagementFormComponent = /** @class */ (function () {
    function ConsentManagementFormComponent() {
        this.consentGiven = false;
        this.requiredConsents = [];
        this.isAnonymousConsentsEnabled = false;
        // TODO(issue:4989) Anonymous consents - remove
        this.isLevel13 = false;
        this.consentChanged = new EventEmitter();
    }
    ConsentManagementFormComponent.prototype.ngOnInit = function () {
        if (this.isAnonymousConsentsEnabled && this.consent) {
            this.consentGiven = Boolean(this.consent.consentState === ANONYMOUS_CONSENT_STATUS.GIVEN);
        }
        else {
            if (this.consentTemplate && this.consentTemplate.currentConsent) {
                if (this.consentTemplate.currentConsent.consentWithdrawnDate) {
                    this.consentGiven = false;
                }
                else if (this.consentTemplate.currentConsent.consentGivenDate) {
                    this.consentGiven = true;
                }
            }
        }
    };
    ConsentManagementFormComponent.prototype.onConsentChange = function () {
        this.consentGiven = !this.consentGiven;
        this.consentChanged.emit({
            given: this.consentGiven,
            template: this.consentTemplate,
        });
    };
    ConsentManagementFormComponent.prototype.isRequired = function (templateId) {
        return this.isAnonymousConsentsEnabled
            ? this.requiredConsents.includes(templateId)
            : false;
    };
    __decorate([
        Input()
    ], ConsentManagementFormComponent.prototype, "consentTemplate", void 0);
    __decorate([
        Input()
    ], ConsentManagementFormComponent.prototype, "requiredConsents", void 0);
    __decorate([
        Input()
    ], ConsentManagementFormComponent.prototype, "isAnonymousConsentsEnabled", void 0);
    __decorate([
        Input()
    ], ConsentManagementFormComponent.prototype, "consent", void 0);
    __decorate([
        Input()
    ], ConsentManagementFormComponent.prototype, "isLevel13", void 0);
    __decorate([
        Output()
    ], ConsentManagementFormComponent.prototype, "consentChanged", void 0);
    ConsentManagementFormComponent = __decorate([
        Component({
            selector: 'cx-consent-management-form',
            template: "<div class=\"form-check\">\n  <label>\n    <input\n      type=\"checkbox\"\n      class=\"form-check-input\"\n      (change)=\"onConsentChange()\"\n      [checked]=\"consentGiven\"\n      [disabled]=\"isRequired(consentTemplate?.id)\"\n    />\n    <!-- TODO(issue:4989) Anonymous consents - remove the *ngIf=\"isLevel13\" -->\n    <span *ngIf=\"isLevel13\" class=\"form-check-label cx-be-bold\">\n      {{ consentTemplate?.name }}\n    </span>\n    <!-- TODO(issue:4989) Anonymous consents - remove the *ngIf=\"isLevel13\" -->\n    <br *ngIf=\"isLevel13\" />\n    <span class=\"form-check-label\">\n      {{ consentTemplate?.description }}\n    </span>\n  </label>\n</div>\n"
        })
    ], ConsentManagementFormComponent);
    return ConsentManagementFormComponent;
}());

var ConsentManagementComponent = /** @class */ (function () {
    function ConsentManagementComponent(userConsentService, globalMessageService, anonymousConsentsConfig, anonymousConsentsService, authService) {
        this.userConsentService = userConsentService;
        this.globalMessageService = globalMessageService;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.anonymousConsentsService = anonymousConsentsService;
        this.authService = authService;
        this.subscriptions = new Subscription();
        this.allConsentsLoading = new BehaviorSubject(false);
        this.requiredConsents = [];
        this.isAnonymousConsentsEnabled = isFeatureEnabled(this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE);
        // TODO(issue:4989) Anonymous consents - remove
        this.isLevel13 = isFeatureLevel(this.anonymousConsentsConfig, '1.3');
    }
    ConsentManagementComponent.prototype.ngOnInit = function () {
        this.loading$ = combineLatest([
            this.userConsentService.getConsentsResultLoading(),
            this.userConsentService.getGiveConsentResultLoading(),
            this.userConsentService.getWithdrawConsentResultLoading(),
            this.authService.isUserLoggedIn(),
            this.allConsentsLoading,
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 5), consentLoading = _b[0], giveConsentLoading = _b[1], withdrawConsentLoading = _b[2], isUserLoggedIn = _b[3], allConsentsLoading = _b[4];
            return consentLoading ||
                giveConsentLoading ||
                withdrawConsentLoading ||
                !isUserLoggedIn ||
                allConsentsLoading;
        }));
        this.consentListInit();
        this.giveConsentInit();
        this.withdrawConsentInit();
    };
    ConsentManagementComponent.prototype.consentListInit = function () {
        var _this = this;
        this.templateList$ = this.userConsentService.getConsents().pipe(withLatestFrom(this.anonymousConsentsService.getTemplates(), this.authService.isUserLoggedIn()), filter(function (_a) {
            var _b = __read(_a, 3), _templateList = _b[0], _anonymousTemplates = _b[1], isUserLoggedIn = _b[2];
            return isUserLoggedIn;
        }), tap(function (_a) {
            var _b = __read(_a, 2), templateList = _b[0], _anonymousTemplates = _b[1];
            if (!_this.consentsExists(templateList)) {
                _this.userConsentService.loadConsents();
            }
        }), map(function (_a) {
            var _b = __read(_a, 2), templateList = _b[0], anonymousTemplates = _b[1];
            if (!_this.isAnonymousConsentsEnabled) {
                return templateList;
            }
            if (Boolean(_this.anonymousConsentsConfig.anonymousConsents)) {
                if (Boolean(_this.anonymousConsentsConfig.anonymousConsents.requiredConsents)) {
                    _this.requiredConsents = _this.anonymousConsentsConfig.anonymousConsents.requiredConsents;
                }
                if (Boolean(_this.anonymousConsentsConfig.anonymousConsents
                    .consentManagementPage)) {
                    return _this.hideAnonymousConsents(templateList, anonymousTemplates);
                }
            }
            return templateList;
        }));
    };
    ConsentManagementComponent.prototype.hideAnonymousConsents = function (templateList, anonymousTemplates) {
        if (anonymousTemplates === void 0) { anonymousTemplates = []; }
        var hideTemplateIds = [];
        if (!this.anonymousConsentsConfig.anonymousConsents.consentManagementPage
            .showAnonymousConsents) {
            hideTemplateIds = anonymousTemplates.map(function (template) { return template.id; });
            return this.userConsentService.filterConsentTemplates(templateList, hideTemplateIds);
        }
        if (Boolean(this.anonymousConsentsConfig.anonymousConsents.consentManagementPage
            .hideConsents) &&
            this.anonymousConsentsConfig.anonymousConsents.consentManagementPage
                .hideConsents.length > 0) {
            hideTemplateIds = this.anonymousConsentsConfig.anonymousConsents
                .consentManagementPage.hideConsents;
        }
        return this.userConsentService.filterConsentTemplates(templateList, hideTemplateIds);
    };
    ConsentManagementComponent.prototype.giveConsentInit = function () {
        var _this = this;
        this.userConsentService.resetGiveConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getGiveConsentResultSuccess()
            .subscribe(function (success) { return _this.onConsentGivenSuccess(success); }));
    };
    ConsentManagementComponent.prototype.withdrawConsentInit = function () {
        var _this = this;
        this.userConsentService.resetWithdrawConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getWithdrawConsentResultLoading()
            .pipe(skipWhile(Boolean), withLatestFrom(this.userConsentService.getWithdrawConsentResultSuccess()), map(function (_a) {
            var _b = __read(_a, 2), withdrawalSuccess = _b[1];
            return withdrawalSuccess;
        }), tap(function (withdrawalSuccess) {
            if (withdrawalSuccess) {
                _this.userConsentService.loadConsents();
            }
        }))
            .subscribe(function (withdrawalSuccess) {
            return _this.onConsentWithdrawnSuccess(withdrawalSuccess);
        }));
    };
    ConsentManagementComponent.prototype.consentsExists = function (templateList) {
        return Boolean(templateList) && templateList.length > 0;
    };
    ConsentManagementComponent.prototype.onConsentChange = function (_a) {
        var given = _a.given, template = _a.template;
        if (given) {
            this.userConsentService.giveConsent(template.id, template.version);
        }
        else {
            this.userConsentService.withdrawConsent(template.currentConsent.code);
        }
    };
    ConsentManagementComponent.prototype.onConsentGivenSuccess = function (success) {
        if (success) {
            this.userConsentService.resetGiveConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.given' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    };
    ConsentManagementComponent.prototype.onConsentWithdrawnSuccess = function (success) {
        if (success) {
            this.userConsentService.resetWithdrawConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.withdrawn' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    };
    ConsentManagementComponent.prototype.rejectAll = function (templates) {
        var _this = this;
        if (templates === void 0) { templates = []; }
        var consentsToWithdraw = [];
        templates.forEach(function (template) {
            if (_this.userConsentService.isConsentGiven(template.currentConsent)) {
                if (_this.isRequiredConsent(template)) {
                    return;
                }
                consentsToWithdraw.push(template);
            }
        });
        this.allConsentsLoading.next(true);
        this.subscriptions.add(this.setupWithdrawalStream(consentsToWithdraw)
            .pipe(tap(function (_timesLoaded) { return _this.allConsentsLoading.next(false); }))
            .subscribe());
    };
    ConsentManagementComponent.prototype.setupWithdrawalStream = function (consentsToWithdraw) {
        var _this = this;
        if (consentsToWithdraw === void 0) { consentsToWithdraw = []; }
        var loading$ = concat(this.userConsentService.getWithdrawConsentResultLoading()).pipe(distinctUntilChanged(), filter(function (loading) { return !loading; }));
        var count$ = loading$.pipe(scan(function (acc, _value) { return acc + 1; }, -1));
        var withdraw$ = count$.pipe(tap(function (i) {
            if (i < consentsToWithdraw.length) {
                _this.userConsentService.withdrawConsent(consentsToWithdraw[i].currentConsent.code);
            }
        }));
        var checkTimesLoaded$ = withdraw$.pipe(filter(function (timesLoaded) { return timesLoaded === consentsToWithdraw.length; }));
        return checkTimesLoaded$;
    };
    ConsentManagementComponent.prototype.allowAll = function (templates) {
        var _this = this;
        if (templates === void 0) { templates = []; }
        var consentsToGive = [];
        templates.forEach(function (template) {
            if (_this.userConsentService.isConsentWithdrawn(template.currentConsent)) {
                if (_this.isRequiredConsent(template)) {
                    return;
                }
                consentsToGive.push(template);
            }
        });
        this.allConsentsLoading.next(true);
        this.subscriptions.add(this.setupGiveStream(consentsToGive)
            .pipe(tap(function (_timesLoaded) { return _this.allConsentsLoading.next(false); }))
            .subscribe());
    };
    ConsentManagementComponent.prototype.setupGiveStream = function (consentsToGive) {
        var _this = this;
        if (consentsToGive === void 0) { consentsToGive = []; }
        var loading$ = concat(this.userConsentService.getGiveConsentResultLoading()).pipe(distinctUntilChanged(), filter(function (loading) { return !loading; }));
        var count$ = loading$.pipe(scan(function (acc, _value) { return acc + 1; }, -1));
        var giveConsent$ = count$.pipe(tap(function (i) {
            if (i < consentsToGive.length) {
                _this.userConsentService.giveConsent(consentsToGive[i].id, consentsToGive[i].version);
            }
        }));
        var checkTimesLoaded$ = giveConsent$.pipe(filter(function (timesLoaded) { return timesLoaded === consentsToGive.length; }));
        return checkTimesLoaded$;
    };
    ConsentManagementComponent.prototype.isRequiredConsent = function (template) {
        if (!this.isAnonymousConsentsEnabled) {
            return false;
        }
        return (Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.requiredConsents) &&
            this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(template.id));
    };
    ConsentManagementComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
        this.allConsentsLoading.unsubscribe();
        this.userConsentService.resetGiveConsentProcessState();
        this.userConsentService.resetWithdrawConsentProcessState();
    };
    ConsentManagementComponent.ctorParameters = function () { return [
        { type: UserConsentService },
        { type: GlobalMessageService },
        { type: AnonymousConsentsConfig },
        { type: AnonymousConsentsService },
        { type: AuthService }
    ]; };
    ConsentManagementComponent = __decorate([
        Component({
            selector: 'cx-consent-management',
            template: "<!-- TODO(issue:4989) Anonymous consents - remove the wrapping `<ng-container *ngIf=\"isLevel13; else legacyConsentManagementPage\">` -->\n<ng-container *ngIf=\"isLevel13; else legacyConsentManagementPage\">\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <ng-container *ngIf=\"templateList$ | async as templateList\">\n      <div class=\"cx-consent-action-links\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <button\n            tabindex=\"0\"\n            class=\"btn cx-action-link\"\n            (click)=\"rejectAll(templateList)\"\n          >\n            {{ 'consentManagementForm.clearAll' | cxTranslate }}\n          </button>\n          <button\n            tabindex=\"0\"\n            class=\"btn cx-action-link\"\n            (click)=\"allowAll(templateList)\"\n          >\n            {{ 'consentManagementForm.selectAll' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-consent-toggles\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <cx-consent-management-form\n            *ngFor=\"let consentTemplate of templateList\"\n            [consentTemplate]=\"consentTemplate\"\n            [requiredConsents]=\"requiredConsents\"\n            [isAnonymousConsentsEnabled]=\"isAnonymousConsentsEnabled\"\n            [isLevel13]=\"isLevel13\"\n            (consentChanged)=\"onConsentChange($event)\"\n          ></cx-consent-management-form>\n        </div>\n      </div>\n    </ng-container>\n  </ng-template>\n</ng-container>\n\n<!-- TODO(issue:4989) Anonymous consents - remove this whole `<ng-template>` -->\n<ng-template #legacyConsentManagementPage>\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of templateList$ | async\"\n          [consentTemplate]=\"consentTemplate\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-template>\n"
        })
    ], ConsentManagementComponent);
    return ConsentManagementComponent;
}());

var ConsentManagementModule = /** @class */ (function () {
    function ConsentManagementModule() {
    }
    ConsentManagementModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SpinnerModule,
                I18nModule,
                IconModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        ConsentManagementComponent: {
                            component: ConsentManagementComponent,
                            guards: [AuthGuard],
                        },
                    },
                }),
            ],
            declarations: [ConsentManagementComponent, ConsentManagementFormComponent],
            exports: [ConsentManagementComponent, ConsentManagementFormComponent],
            entryComponents: [ConsentManagementComponent],
        })
    ], ConsentManagementModule);
    return ConsentManagementModule;
}());

var AnonymousConsentsModule = /** @class */ (function () {
    function AnonymousConsentsModule() {
    }
    AnonymousConsentsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                I18nModule,
                IconModule,
                SpinnerModule,
                ConsentManagementModule,
            ],
            declarations: [AnonymousConsentDialogComponent],
            entryComponents: [AnonymousConsentDialogComponent],
            exports: [AnonymousConsentDialogComponent],
        })
    ], AnonymousConsentsModule);
    return AnonymousConsentsModule;
}());

var StorefrontComponent = /** @class */ (function () {
    function StorefrontComponent(hamburgerMenuService, routingService) {
        this.hamburgerMenuService = hamburgerMenuService;
        this.routingService = routingService;
        this.isExpanded$ = this.hamburgerMenuService.isExpanded;
    }
    StorefrontComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigateSubscription = this.routingService
            .isNavigating()
            .subscribe(function (val) {
            _this.startNavigating = val === true;
            _this.stopNavigating = val === false;
        });
    };
    StorefrontComponent.prototype.collapseMenuIfClickOutside = function (event) {
        if (event.target.className.includes('is-expanded')) {
            this.collapseMenu();
        }
    };
    StorefrontComponent.prototype.collapseMenu = function () {
        this.hamburgerMenuService.toggle(true);
    };
    StorefrontComponent.prototype.ngOnDestroy = function () {
        if (this.navigateSubscription) {
            this.navigateSubscription.unsubscribe();
        }
    };
    StorefrontComponent.ctorParameters = function () { return [
        { type: HamburgerMenuService },
        { type: RoutingService }
    ]; };
    __decorate([
        HostBinding('class.start-navigating')
    ], StorefrontComponent.prototype, "startNavigating", void 0);
    __decorate([
        HostBinding('class.stop-navigating')
    ], StorefrontComponent.prototype, "stopNavigating", void 0);
    StorefrontComponent = __decorate([
        Component({
            selector: 'cx-storefront',
            template: "<ng-template cxOutlet=\"cx-storefront\">\n  <ng-template cxOutlet=\"cx-header\">\n    <header\n      [class.is-expanded]=\"isExpanded$ | async\"\n      (keydown.escape)=\"collapseMenu()\"\n      (click)=\"collapseMenuIfClickOutside($event)\"\n    >\n      <cx-page-layout section=\"header\"></cx-page-layout>\n      <cx-page-layout section=\"navigation\"></cx-page-layout>\n    </header>\n    <cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n    <cx-global-message></cx-global-message>\n  </ng-template>\n\n  <router-outlet></router-outlet>\n\n  <ng-template cxOutlet=\"cx-footer\">\n    <footer>\n      <cx-page-layout section=\"footer\"></cx-page-layout>\n    </footer>\n  </ng-template>\n</ng-template>\n"
        })
    ], StorefrontComponent);
    return StorefrontComponent;
}());

var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                GlobalMessageComponentModule,
                OutletModule,
                OutletRefModule,
                PwaModule,
                PageLayoutModule,
                SeoModule,
                PageSlotModule,
                AnonymousConsentsModule,
                FeaturesConfigModule,
            ],
            declarations: [StorefrontComponent],
            exports: [StorefrontComponent],
        })
    ], MainModule);
    return MainModule;
}());

/**
 * Generic carousel that renders CMS Components.
 */
var BannerCarouselComponent = /** @class */ (function () {
    function BannerCarouselComponent(componentData, cmsService) {
        var _this = this;
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean), tap(function (d) { return (_this.theme = d.effect + "-theme"); }));
        this.items$ = this.componentData$.pipe(map(function (data) { return data.banners.trim().split(' '); }), map(function (codes) { return codes.map(function (code) { return _this.cmsService.getComponentData(code); }); }));
        /**
         * Adds a specific theme for the carousel. The effect can be
         * used in CSS customisations.
         */
        this.theme = '';
    }
    /**
     * Returns an Obervable with an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     */
    BannerCarouselComponent.prototype.getItems = function () {
        return this.items$;
    };
    BannerCarouselComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: CmsService }
    ]; };
    __decorate([
        HostBinding('class')
    ], BannerCarouselComponent.prototype, "theme", void 0);
    BannerCarouselComponent = __decorate([
        Component({
            selector: 'cx-banner-carousel',
            template: "<cx-carousel\n  [items]=\"getItems() | async\"\n  [template]=\"template\"\n  itemWidth=\"100%\"\n  class=\"inline-navigation\"\n></cx-carousel>\n\n<ng-template #template let-item=\"item\">\n  <ng-container\n    [cxComponentWrapper]=\"{\n      flexType: item.typeCode,\n      typeCode: item.typeCode,\n      uid: item?.uid\n    }\"\n  >\n  </ng-container>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], BannerCarouselComponent);
    return BannerCarouselComponent;
}());

var BannerCarouselModule = /** @class */ (function () {
    function BannerCarouselModule() {
    }
    BannerCarouselModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        RotatingImagesComponent: {
                            component: BannerCarouselComponent,
                        },
                    },
                }),
                PageComponentModule,
                CarouselModule,
                MediaModule,
            ],
            declarations: [BannerCarouselComponent],
            entryComponents: [BannerCarouselComponent],
            exports: [BannerCarouselComponent],
        })
    ], BannerCarouselModule);
    return BannerCarouselModule;
}());

var BannerComponent = /** @class */ (function () {
    function BannerComponent(component) {
        this.component = component;
    }
    BannerComponent.ctorParameters = function () { return [
        { type: CmsComponentData }
    ]; };
    BannerComponent = __decorate([
        Component({
            selector: 'cx-banner',
            template: "<ng-container *ngIf=\"component.data$ | async as data\">\n  <cx-generic-link\n    [url]=\"data.urlLink\"\n    [target]=\"data.external ? '_blank' : null\"\n    [title]=\"data.media?.altText\"\n  >\n    <p *ngIf=\"data.headline\" [innerHTML]=\"data.headline\"></p>\n    <cx-media [container]=\"data.media\"></cx-media>\n    <p *ngIf=\"data.content\" [innerHTML]=\"data.content\"></p>\n  </cx-generic-link>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], BannerComponent);
    return BannerComponent;
}());

var BannerModule = /** @class */ (function () {
    function BannerModule() {
    }
    BannerModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                GenericLinkModule,
                MediaModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        SimpleResponsiveBannerComponent: {
                            component: BannerComponent,
                        },
                        BannerComponent: {
                            component: BannerComponent,
                        },
                        SimpleBannerComponent: {
                            component: BannerComponent,
                        },
                    },
                }),
            ],
            declarations: [BannerComponent],
            entryComponents: [BannerComponent],
            exports: [BannerComponent],
        })
    ], BannerModule);
    return BannerModule;
}());

var LinkComponent = /** @class */ (function () {
    function LinkComponent(component) {
        this.component = component;
    }
    LinkComponent.ctorParameters = function () { return [
        { type: CmsComponentData }
    ]; };
    LinkComponent = __decorate([
        Component({
            selector: 'cx-link',
            template: "<cx-generic-link\n  *ngIf=\"component.data$ | async as data\"\n  [url]=\"data.url\"\n  [style]=\"data.styleAttributes\"\n  >{{ data.linkName }}</cx-generic-link\n>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], LinkComponent);
    return LinkComponent;
}());

var LinkModule = /** @class */ (function () {
    function LinkModule() {
    }
    LinkModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                GenericLinkModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CMSLinkComponent: { component: LinkComponent },
                    },
                }),
            ],
            declarations: [LinkComponent],
            exports: [LinkComponent],
            entryComponents: [LinkComponent],
        })
    ], LinkModule);
    return LinkModule;
}());

var ParagraphComponent = /** @class */ (function () {
    function ParagraphComponent(component) {
        this.component = component;
    }
    ParagraphComponent.ctorParameters = function () { return [
        { type: CmsComponentData }
    ]; };
    ParagraphComponent = __decorate([
        Component({
            selector: 'cx-paragraph',
            template: "<p *ngIf=\"component.data$ | async as data\" [innerHTML]=\"data.content\"></p>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ParagraphComponent);
    return ParagraphComponent;
}());

var CmsParagraphModule = /** @class */ (function () {
    function CmsParagraphModule() {
    }
    CmsParagraphModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CMSParagraphComponent: {
                            component: ParagraphComponent,
                        },
                        CMSTabParagraphComponent: {
                            component: ParagraphComponent,
                        },
                    },
                }),
            ],
            declarations: [ParagraphComponent],
            exports: [ParagraphComponent],
            entryComponents: [ParagraphComponent],
        })
    ], CmsParagraphModule);
    return CmsParagraphModule;
}());

var TabParagraphContainerComponent = /** @class */ (function () {
    function TabParagraphContainerComponent(componentData, cmsService, winRef) {
        var _this = this;
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.winRef = winRef;
        this.activeTabNum = 0;
        this.tabTitleParams = [];
        this.components$ = this.componentData.data$.pipe(distinctUntilKeyChanged('components'), switchMap(function (data) {
            return combineLatest(data.components.split(' ').map(function (component) {
                return _this.cmsService.getComponentData(component).pipe(distinctUntilChanged(), map(function (tab) {
                    if (!tab.flexType) {
                        tab = __assign(__assign({}, tab), { flexType: tab.typeCode });
                    }
                    return __assign(__assign({}, tab), { title: data.uid + ".tabs." + tab.uid });
                }));
            }));
        }));
    }
    TabParagraphContainerComponent.prototype.select = function (tabNum) {
        this.activeTabNum = tabNum;
    };
    TabParagraphContainerComponent.prototype.ngOnInit = function () {
        if (this.winRef && this.winRef.nativeWindow) {
            var routeState = this.winRef.nativeWindow.history &&
                this.winRef.nativeWindow.history.state;
            if (routeState && routeState['activeTab']) {
                this.activeTabNum = routeState['activeTab'];
            }
        }
    };
    TabParagraphContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // If the sub cms components data exist, the components created before ngAfterViewInit are called.
        // In this case, the title parameters are directly pulled from them.
        // If the sub cms components data does not exist, it should should be loaded first.
        // In this case, listen to the changes to wait for them to be created.
        if (this.children.length > 0) {
            this.getTitleParams(this.children);
        }
        else {
            this.subscription = this.children.changes.subscribe(function (tabComps) {
                return _this.getTitleParams(tabComps);
            });
        }
    };
    TabParagraphContainerComponent.prototype.getTitleParams = function (children) {
        var _this = this;
        children.forEach(function (comp) {
            if (comp.cmpRef && comp.cmpRef.instance.tabTitleParam$) {
                _this.tabTitleParams.push(comp.cmpRef.instance.tabTitleParam$);
            }
            else {
                _this.tabTitleParams.push(null);
            }
        });
    };
    TabParagraphContainerComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    TabParagraphContainerComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: CmsService },
        { type: WindowRef }
    ]; };
    __decorate([
        ViewChildren(ComponentWrapperDirective)
    ], TabParagraphContainerComponent.prototype, "children", void 0);
    TabParagraphContainerComponent = __decorate([
        Component({
            selector: 'cx-tab-paragraph-container',
            template: "<ng-container *ngFor=\"let component of components$ | async; let i = index\">\n  <button [class.active]=\"i === activeTabNum\" (click)=\"select(i)\">\n    {{ component.title | cxTranslate: { param: tabTitleParams[i] | async } }}\n  </button>\n  <div [class.active]=\"i === activeTabNum\">\n    <ng-template [cxOutlet]=\"component.flexType\" [cxOutletContext]=\"{}\">\n      <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n    </ng-template>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], TabParagraphContainerComponent);
    return TabParagraphContainerComponent;
}());

var TabParagraphContainerModule = /** @class */ (function () {
    function TabParagraphContainerModule() {
    }
    TabParagraphContainerModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CMSTabParagraphContainer: {
                            component: TabParagraphContainerComponent,
                        },
                    },
                }),
                PageComponentModule,
                OutletModule,
                I18nModule,
            ],
            declarations: [TabParagraphContainerComponent],
            entryComponents: [TabParagraphContainerComponent],
            exports: [TabParagraphContainerComponent],
        })
    ], TabParagraphContainerModule);
    return TabParagraphContainerModule;
}());

var AddressBookComponentService = /** @class */ (function () {
    function AddressBookComponentService(userAddressService, checkoutDeliveryService, featureConfigService) {
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.featureConfigService = featureConfigService;
    }
    AddressBookComponentService.prototype.getAddresses = function () {
        return this.userAddressService.getAddresses();
    };
    AddressBookComponentService.prototype.getAddressesStateLoading = function () {
        return this.userAddressService.getAddressesLoading();
    };
    AddressBookComponentService.prototype.loadAddresses = function () {
        this.userAddressService.loadAddresses();
    };
    AddressBookComponentService.prototype.addUserAddress = function (address) {
        this.userAddressService.addUserAddress(address);
    };
    AddressBookComponentService.prototype.updateUserAddress = function (addressId, address) {
        this.userAddressService.updateUserAddress(addressId, address);
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    };
    AddressBookComponentService.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: CheckoutDeliveryService },
        { type: FeatureConfigService }
    ]; };
    AddressBookComponentService = __decorate([
        Injectable()
    ], AddressBookComponentService);
    return AddressBookComponentService;
}());

var AddressBookComponent = /** @class */ (function () {
    function AddressBookComponent(service, translation, userAddressService, checkoutDeliveryService) {
        this.service = service;
        this.translation = translation;
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.showAddAddressForm = false;
        this.showEditAddressForm = false;
    }
    AddressBookComponent.prototype.ngOnInit = function () {
        this.addresses$ = this.service.getAddresses();
        this.addressesStateLoading$ = this.service.getAddressesStateLoading();
        this.service.loadAddresses();
    };
    AddressBookComponent.prototype.addAddressButtonHandle = function () {
        this.showEditAddressForm = false;
        this.showAddAddressForm = true;
    };
    AddressBookComponent.prototype.editAddressButtonHandle = function (address) {
        this.showAddAddressForm = false;
        this.showEditAddressForm = true;
        this.currentAddress = address;
    };
    AddressBookComponent.prototype.addAddressSubmit = function (address) {
        this.showAddAddressForm = false;
        this.service.addUserAddress(address);
    };
    AddressBookComponent.prototype.addAddressCancel = function () {
        this.showAddAddressForm = false;
    };
    AddressBookComponent.prototype.editAddressSubmit = function (address) {
        this.showEditAddressForm = false;
        this.service.updateUserAddress(this.currentAddress['id'], address);
    };
    AddressBookComponent.prototype.editAddressCancel = function () {
        this.showEditAddressForm = false;
    };
    AddressBookComponent.prototype.getCardContent = function (address) {
        return combineLatest([
            this.translation.translate('addressCard.default'),
            this.translation.translate('addressCard.setAsDefault'),
            this.translation.translate('common.delete'),
            this.translation.translate('common.edit'),
            this.translation.translate('addressBook.areYouSureToDeleteAddress'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 5), defaultText = _b[0], setAsDefaultText = _b[1], textDelete = _b[2], textEdit = _b[3], textVerifyDeleteMsg = _b[4];
            var region = '';
            if (address.region && address.region.isocode) {
                region = address.region.isocode + ', ';
            }
            var actions = [];
            if (!address.defaultAddress) {
                actions.push({ name: setAsDefaultText, event: 'default' });
            }
            actions.push({ name: textEdit, event: 'edit' });
            actions.push({ name: textDelete, event: 'delete' });
            return {
                textBold: address.firstName + ' ' + address.lastName,
                text: [
                    address.line1,
                    address.line2,
                    address.town + ', ' + region + address.country.isocode,
                    address.postalCode,
                    address.phone,
                ],
                actions: actions,
                header: address.defaultAddress ? "\u2713 " + defaultText : '',
                deleteMsg: textVerifyDeleteMsg,
            };
        }));
    };
    AddressBookComponent.prototype.setAddressAsDefault = function (addressId) {
        this.userAddressService.setAddressAsDefault(addressId);
        this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
    };
    AddressBookComponent.prototype.deleteAddress = function (addressId) {
        this.userAddressService.deleteUserAddress(addressId);
        this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
    };
    AddressBookComponent.prototype.setEdit = function (addressId) {
        if (this.editCard !== addressId) {
            this.editCard = addressId;
        }
        else {
            this.deleteAddress(addressId);
        }
    };
    AddressBookComponent.prototype.cancelCard = function () {
        this.editCard = null;
    };
    AddressBookComponent.ctorParameters = function () { return [
        { type: AddressBookComponentService },
        { type: TranslationService },
        { type: UserAddressService },
        { type: CheckoutDeliveryService }
    ]; };
    AddressBookComponent = __decorate([
        Component({
            selector: 'cx-address-book',
            template: "<div class=\"cx-section\">\n  <ng-container\n    *ngIf=\"\n      (addresses$ | async).length &&\n      !(showAddAddressForm || showEditAddressForm)\n    \"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-action\"\n          (click)=\"addAddressButtonHandle()\"\n        >\n          {{ 'addressBook.addNewAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"row cx-address-deck\"\n      *ngIf=\"!(addressesStateLoading$ | async); else loading\"\n    >\n      <div\n        *ngFor=\"let address of addresses$ | async\"\n        class=\"col-md-6 cx-address-card\"\n      >\n        <cx-card\n          [border]=\"true\"\n          [fitToContainer]=\"true\"\n          [content]=\"getCardContent(address) | async\"\n          (editCard)=\"editAddressButtonHandle(address)\"\n          (setDefaultCard)=\"setAddressAsDefault(address.id)\"\n          (deleteCard)=\"setEdit(address.id)\"\n          [editMode]=\"address.id === editCard\"\n          (cancelCard)=\"cancelCard()\"\n        ></cx-card>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"!(addresses$ | async).length || showAddAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.addNewShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        class=\"cx-form\"\n        showTitleCode=\"true\"\n        [showCancelBtn]=\"!((addresses$ | async).length === 0)\"\n        actionBtnLabel=\"{{ 'addressBook.addAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [setAsDefaultField]=\"!((addresses$ | async).length === 0)\"\n        (submitAddress)=\"addAddressSubmit($event)\"\n        (backToAddress)=\"addAddressCancel()\"\n        (cancelCard)=\"cancelCard()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"showEditAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.editShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'addressBook.updateAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [addressData]=\"currentAddress\"\n        (submitAddress)=\"editAddressSubmit($event)\"\n        (backToAddress)=\"editAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"col-md-12 cx-address-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
        })
    ], AddressBookComponent);
    return AddressBookComponent;
}());

var AddressBookModule = /** @class */ (function () {
    function AddressBookModule() {
    }
    AddressBookModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        AccountAddressBookComponent: {
                            component: AddressBookComponent,
                            providers: [
                                {
                                    provide: AddressBookComponentService,
                                    useClass: AddressBookComponentService,
                                    deps: [UserAddressService],
                                },
                            ],
                            guards: [AuthGuard],
                        },
                    },
                }),
                CardModule,
                AddressFormModule,
                SpinnerModule,
                I18nModule,
            ],
            declarations: [AddressBookComponent],
            exports: [AddressBookComponent],
            providers: [UserAddressService, AddressBookComponentService],
            entryComponents: [AddressBookComponent],
        })
    ], AddressBookModule);
    return AddressBookModule;
}());

var CloseAccountModalComponent = /** @class */ (function () {
    function CloseAccountModalComponent(modalService, userService, authService, globalMessageService, routingService, translationService) {
        this.modalService = modalService;
        this.userService = userService;
        this.authService = authService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.translationService = translationService;
        this.iconTypes = ICON_TYPE;
        this.subscription = new Subscription();
    }
    CloseAccountModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userToken$ = this.authService.getUserToken();
        this.userService.resetRemoveUserProcessState();
        this.subscription.add(this.userService
            .getRemoveUserResultSuccess()
            .subscribe(function (success) { return _this.onSuccess(success); }));
        this.subscription.add(this.userService
            .getRemoveUserResultError()
            .subscribe(function (error) { return _this.onError(error); }));
        this.isLoading$ = this.userService.getRemoveUserResultLoading();
    };
    CloseAccountModalComponent.prototype.onSuccess = function (success) {
        var _this = this;
        if (success) {
            this.dismissModal();
            this.translationService
                .translate('closeAccount.accountClosedSuccessfully')
                .pipe(first())
                .subscribe(function (text) {
                _this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            });
            this.routingService.go({ cxRoute: 'home' });
        }
    };
    CloseAccountModalComponent.prototype.onError = function (error) {
        var _this = this;
        if (error) {
            this.dismissModal();
            this.translationService
                .translate('closeAccount.accountClosedFailure')
                .pipe(first())
                .subscribe(function (text) {
                _this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_ERROR);
            });
        }
    };
    CloseAccountModalComponent.prototype.dismissModal = function (reason) {
        this.modalService.dismissActiveModal(reason);
    };
    CloseAccountModalComponent.prototype.closeAccount = function () {
        this.userService.remove();
    };
    CloseAccountModalComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    CloseAccountModalComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: UserService },
        { type: AuthService },
        { type: GlobalMessageService },
        { type: RoutingService },
        { type: TranslationService }
    ]; };
    CloseAccountModalComponent = __decorate([
        Component({
            selector: 'cx-close-account-modal',
            template: "<ng-container *ngIf=\"userToken$ | async as userToken\">\n  <div class=\"modal-header cx-dialog-header\">\n    <h3 class=\"modal-title\">\n      {{ 'closeAccount.confirmAccountClosure' | cxTranslate }}\n    </h3>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"dismissModal()\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n      </span>\n    </button>\n  </div>\n\n  <div *ngIf=\"isLoading$ | async; else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"modal-body\">\n      <div class=\"cx-row\">\n        <p class=\"cx-confirmation\">\n          {{ 'closeAccount.confirmAccountClosureMessage' | cxTranslate }}\n        </p>\n      </div>\n      <div class=\"cx-row\">\n        <div class=\"cx-btn-group\">\n          <button class=\"btn btn-primary\" (click)=\"closeAccount()\">\n            {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n          </button>\n          <button (click)=\"dismissModal()\" class=\"btn btn-block btn-secondary\">\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CloseAccountModalComponent);
    return CloseAccountModalComponent;
}());

var CloseAccountComponent = /** @class */ (function () {
    function CloseAccountComponent(modalService) {
        this.modalService = modalService;
    }
    CloseAccountComponent.prototype.openModal = function () {
        this.modal = this.modalService.open(CloseAccountModalComponent, {
            centered: true,
        }).componentInstance;
    };
    CloseAccountComponent.ctorParameters = function () { return [
        { type: ModalService }
    ]; };
    CloseAccountComponent = __decorate([
        Component({
            selector: 'cx-close-account',
            template: "<div class=\"col-lg-8 col-md-9\">\n  <div class=\"row cx-btn-group\">\n    <div class=\"col-sm-3\">\n      <a\n        [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n        class=\"btn btn-block btn-secondary\"\n        >{{ 'common.cancel' | cxTranslate }}</a\n      >\n    </div>\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-primary\" (click)=\"openModal()\">\n        {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CloseAccountComponent);
    return CloseAccountComponent;
}());

var CloseAccountModule = /** @class */ (function () {
    function CloseAccountModule() {
    }
    CloseAccountModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                UrlModule,
                I18nModule,
                IconModule,
                SpinnerModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CloseAccountComponent: {
                            component: CloseAccountComponent,
                            guards: [AuthGuard],
                        },
                    },
                }),
            ],
            declarations: [CloseAccountComponent, CloseAccountModalComponent],
            exports: [CloseAccountComponent, CloseAccountModalComponent],
            entryComponents: [CloseAccountComponent, CloseAccountModalComponent],
        })
    ], CloseAccountModule);
    return CloseAccountModule;
}());

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(fb, userService, routingService) {
        this.fb = fb;
        this.userService = userService;
        this.routingService = routingService;
        this.submited = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            userEmail: [
                '',
                [Validators.required, CustomFormValidators.emailValidator],
            ],
        });
    };
    ForgotPasswordComponent.prototype.requestForgotPasswordEmail = function () {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        this.userService.requestForgotPasswordEmail(this.form.value.userEmail);
        this.routingService.go({ cxRoute: 'login' });
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: UserService },
        { type: RoutingService }
    ]; };
    ForgotPasswordComponent = __decorate([
        Component({
            selector: 'cx-forgot-password',
            template: "<form (submit)=\"requestForgotPasswordEmail()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'forgottenPassword.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        placeholder=\"{{\n          'forgottenPassword.emailAddress.placeholder' | cxTranslate\n        }}\"\n        formControlName=\"userEmail\"\n        [ngClass]=\"{\n          'is-invalid':\n            form.controls['userEmail'].invalid &&\n            (submited ||\n              (form.controls['userEmail'].touched &&\n                form.controls['userEmail'].dirty))\n        }\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.controls['userEmail'].invalid &&\n          (submited ||\n            (form.controls['userEmail'].touched &&\n              form.controls['userEmail'].dirty))\n        \"\n      >\n        <span>{{ 'forgottenPassword.enterValidEmail' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'common.submit' | cxTranslate }}\n  </button>\n  <a\n    class=\"btn btn-block btn-secondary\"\n    [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >{{ 'common.cancel' | cxTranslate }}</a\n  >\n</form>\n"
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());

var ForgotPasswordModule = /** @class */ (function () {
    function ForgotPasswordModule() {
    }
    ForgotPasswordModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                RouterModule,
                UrlModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        ForgotPasswordComponent: {
                            component: ForgotPasswordComponent,
                            guards: [NotAuthGuard],
                        },
                    },
                }),
                I18nModule,
            ],
            declarations: [ForgotPasswordComponent],
            exports: [ForgotPasswordComponent],
            entryComponents: [ForgotPasswordComponent],
        })
    ], ForgotPasswordModule);
    return ForgotPasswordModule;
}());

var AmendOrderActionsComponent = /** @class */ (function () {
    function AmendOrderActionsComponent() {
        this.styles = 'row';
    }
    __decorate([
        Input()
    ], AmendOrderActionsComponent.prototype, "orderCode", void 0);
    __decorate([
        Input()
    ], AmendOrderActionsComponent.prototype, "isValid", void 0);
    __decorate([
        Input()
    ], AmendOrderActionsComponent.prototype, "backRoute", void 0);
    __decorate([
        Input()
    ], AmendOrderActionsComponent.prototype, "forwardRoute", void 0);
    __decorate([
        HostBinding('class')
    ], AmendOrderActionsComponent.prototype, "styles", void 0);
    AmendOrderActionsComponent = __decorate([
        Component({
            selector: 'cx-amend-order-actions',
            template: "<div class=\"col-xs-12 col-md-4 col-lg-3\">\n  <a\n    [routerLink]=\"\n      {\n        cxRoute: backRoute,\n        params: { code: orderCode }\n      } | cxUrl\n    \"\n    class=\"btn btn-block btn-action\"\n  >\n    {{ 'common.back' | cxTranslate }}\n  </a>\n</div>\n<div class=\"col-xs-12 col-md-4 col-lg-3\">\n  <a\n    *ngIf=\"forwardRoute\"\n    class=\"btn btn-block btn-primary\"\n    [class.disabled]=\"!isValid\"\n    [routerLink]=\"\n      {\n        cxRoute: forwardRoute,\n        params: { code: orderCode }\n      } | cxUrl\n    \"\n  >\n    {{ 'common.continue' | cxTranslate }}\n  </a>\n\n  <button\n    *ngIf=\"!forwardRoute\"\n    class=\"btn btn-block btn-primary\"\n    type=\"submit\"\n    [disabled]=\"!isValid\"\n  >\n    {{ 'orderDetails.cancellationAndReturn.submit' | cxTranslate }}\n  </button>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], AmendOrderActionsComponent);
    return AmendOrderActionsComponent;
}());

var AmendOrderActionsModule = /** @class */ (function () {
    function AmendOrderActionsModule() {
    }
    AmendOrderActionsModule = __decorate([
        NgModule({
            imports: [CommonModule, RouterModule, UrlModule, I18nModule],
            declarations: [AmendOrderActionsComponent],
            exports: [AmendOrderActionsComponent],
        })
    ], AmendOrderActionsModule);
    return AmendOrderActionsModule;
}());

var AmendOrderType;
(function (AmendOrderType) {
    AmendOrderType[AmendOrderType["CANCEL"] = 0] = "CANCEL";
    AmendOrderType[AmendOrderType["RETURN"] = 1] = "RETURN";
})(AmendOrderType || (AmendOrderType = {}));

function ValidateQuantity(control) {
    var q = 0;
    Object.keys(control.value).forEach(function (key) { return (q += control.value[key]); });
    return q > 0 ? null : { required: true };
}
var OrderAmendService = /** @class */ (function () {
    function OrderAmendService(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * Returns entries with an amended quantity.
     */
    OrderAmendService.prototype.getAmendedEntries = function () {
        var _this = this;
        return this.getForm().pipe(switchMap(function (form) {
            return _this.getEntries().pipe(map(function (entries) {
                return entries.filter(function (entry) { return _this.getFormControl(form, entry).value > 0; });
            }));
        }));
    };
    OrderAmendService.prototype.getOrder = function () {
        return this.orderDetailsService.getOrderDetails();
    };
    /**
     * returns the form with form data at runtime
     */
    OrderAmendService.prototype.getForm = function () {
        var _this = this;
        return this.getOrder().pipe(tap(function (order) {
            if (!_this.form || _this.form.get('orderCode').value !== order.code) {
                _this.buildForm(order);
            }
        }), map(function () { return _this.form; }));
    };
    OrderAmendService.prototype.buildForm = function (order) {
        var _this = this;
        this.form = new FormGroup({});
        this.form.addControl('orderCode', new FormControl(order.code));
        var entryGroup = new FormGroup({}, { validators: [ValidateQuantity] });
        this.form.addControl('entries', entryGroup);
        (order.entries || []).forEach(function (entry) {
            var key = entry.entryNumber.toString();
            entryGroup.addControl(key, new FormControl(0, {
                validators: [
                    Validators.min(0),
                    Validators.max(_this.getMaxAmendQuantity(entry)),
                ],
            }));
        });
    };
    OrderAmendService.prototype.getFormControl = function (form, entry) {
        return form.get('entries').get(entry.entryNumber.toString());
    };
    /**
     * As discussed, this calculation is moved to SPA side.
     * The calculation and validation should be in backend facade layer.
     */
    OrderAmendService.prototype.getAmendedPrice = function (entry) {
        var amendedQuantity = this.getFormControl(this.form, entry).value;
        var amendedPrice = Object.assign({}, entry.basePrice);
        amendedPrice.value =
            Math.round(entry.basePrice.value * amendedQuantity * 100) / 100;
        amendedPrice.formattedValue = formatCurrency(amendedPrice.value, 
        // TODO: user current language
        'en', getCurrencySymbol(amendedPrice.currencyIso, 'narrow'), amendedPrice.currencyIso);
        return amendedPrice;
    };
    OrderAmendService.prototype.getMaxAmendQuantity = function (entry) {
        return ((this.isCancellation()
            ? entry.cancellableQuantity
            : entry.returnableQuantity) || entry.quantity);
    };
    OrderAmendService.prototype.isCancellation = function () {
        return this.amendType === AmendOrderType.CANCEL;
    };
    OrderAmendService.ctorParameters = function () { return [
        { type: OrderDetailsService }
    ]; };
    OrderAmendService = __decorate([
        Injectable()
    ], OrderAmendService);
    return OrderAmendService;
}());

var CancelOrReturnItemsComponent = /** @class */ (function () {
    function CancelOrReturnItemsComponent(orderAmendService) {
        this.orderAmendService = orderAmendService;
        this.isConfirmation = false;
        this.form$ = this.orderAmendService.getForm();
    }
    CancelOrReturnItemsComponent.prototype.getControl = function (form, entry) {
        var control = (form.get('entries').get(entry.entryNumber.toString()));
        if (this.isConfirmation) {
            control.disable();
        }
        return control;
    };
    CancelOrReturnItemsComponent.prototype.setAll = function (form) {
        var _this = this;
        this.entries.forEach(function (entry) {
            return _this.getControl(form, entry).setValue(_this.getMaxAmendQuantity(entry));
        });
    };
    CancelOrReturnItemsComponent.prototype.getItemPrice = function (entry) {
        return this.orderAmendService.getAmendedPrice(entry);
    };
    CancelOrReturnItemsComponent.prototype.getMaxAmendQuantity = function (entry) {
        return this.orderAmendService.getMaxAmendQuantity(entry);
    };
    CancelOrReturnItemsComponent.prototype.isCancellation = function () {
        return this.orderAmendService.isCancellation();
    };
    CancelOrReturnItemsComponent.ctorParameters = function () { return [
        { type: OrderAmendService }
    ]; };
    __decorate([
        Input()
    ], CancelOrReturnItemsComponent.prototype, "entries", void 0);
    __decorate([
        Input()
    ], CancelOrReturnItemsComponent.prototype, "isConfirmation", void 0);
    CancelOrReturnItemsComponent = __decorate([
        Component({
            selector: 'cx-amend-order-items',
            template: "<div *ngIf=\"form$ | async as form\">\n  <button\n    *ngIf=\"!isConfirmation\"\n    class=\"btn btn-link cx-action-link\"\n    (click)=\"setAll(form)\"\n  >\n    {{ 'orderDetails.cancellationAndReturn.setAll' | cxTranslate }}\n  </button>\n\n  <div class=\"d-none d-md-block\">\n    <div class=\"cx-item-list-header row\">\n      <div class=\"cx-item-list-desc col-md-5 col-xl-6\">\n        {{ 'orderDetails.cancellationAndReturn.item' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-price col-2\">\n        {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}\n      </div>\n      <div *ngIf=\"!isConfirmation\" class=\"cx-item-list-qty col-md-3 col-xl-2\">\n        {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-qty col-2\">\n        {{\n          (isCancellation()\n            ? 'orderDetails.cancellationAndReturn.cancelQty'\n            : 'orderDetails.cancellationAndReturn.returnQty'\n          ) | cxTranslate\n        }}\n      </div>\n      <div *ngIf=\"isConfirmation\" class=\"cx-item-list-total col-md-3  col-xl-2\">\n        {{ 'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of entries; let i = index\">\n    <div class=\"row cx-item-list-items\">\n      <!-- Item Image -->\n      <cx-media\n        class=\"col-2 cx-image-container\"\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n\n      <!-- Item Information -->\n      <div class=\"cx-info col-10\">\n        <div class=\"cx-info-container row\">\n          <!-- Item Description -->\n          <div class=\"col-md-3 col-xl-5\">\n            <div *ngIf=\"item.product.name\" class=\"cx-name\">\n              {{ item.product.name }}\n            </div>\n            <div *ngIf=\"item.product.code\" class=\"cx-code\">\n              {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n            </div>\n            <!-- Variants -->\n            <ng-container *cxFeatureLevel=\"'!1.5'\">\n              <div\n                *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n                class=\"cx-property\"\n              >\n                <div class=\"cx-label\">{{ variant.name }}</div>\n                <div class=\"cx-value\">{{ variant.value }}</div>\n              </div>\n            </ng-container>\n            <ng-container *cxFeatureLevel=\"'1.5'\">\n              <ng-container *ngIf=\"item.product.baseOptions?.length\">\n                <div\n                  *ngFor=\"\n                    let variant of item.product.baseOptions[0]?.selected\n                      ?.variantOptionQualifiers\n                  \"\n                  class=\"cx-property\"\n                >\n                  <div class=\"cx-label\" *ngIf=\"variant.name\">\n                    {{ variant.name }}:\n                  </div>\n                  <div class=\"cx-value\" *ngIf=\"variant.value\">\n                    {{ variant.value }}\n                  </div>\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n          <!-- Price -->\n          <div\n            *ngIf=\"item.basePrice\"\n            class=\"cx-price col-md-3 col-lg-3 col-xl-2\"\n          >\n            <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n              {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}\n            </div>\n            <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n              {{ item.basePrice?.formattedValue }}\n            </div>\n          </div>\n          <!-- item Quantity -->\n          <div *ngIf=\"!isConfirmation\" class=\"cx-request-qty col-md-3\">\n            <div\n              class=\"cx-label d-block d-md-none d-lg-none d-xl-none\"\n              placement=\"left\"\n              title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n            >\n              {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}\n            </div>\n            <div class=\"cx-value\">\n              {{ getMaxAmendQuantity(item) }}\n            </div>\n          </div>\n          <!-- Amended Quantity -->\n          <div class=\"cx-quantity col-md-3 col-xl-2\">\n            <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n              {{\n                (isCancellation()\n                  ? 'orderDetails.cancellationAndReturn.cancelQty'\n                  : 'orderDetails.cancellationAndReturn.returnQty'\n                ) | cxTranslate\n              }}\n            </div>\n\n            <cx-item-counter\n              [min]=\"0\"\n              [max]=\"getMaxAmendQuantity(item)\"\n              [control]=\"getControl(form, item)\"\n              [readonly]=\"isConfirmation\"\n            >\n            </cx-item-counter>\n          </div>\n          <!-- Total Price -->\n          <div *ngIf=\"isConfirmation\" class=\"cx-total col-3\">\n            <div class=\"cx-label d-block d-md-none\">\n              {{\n                'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate\n              }}\n            </div>\n            <div class=\"cx-value\">\n              {{ getItemPrice(item)?.formattedValue }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CancelOrReturnItemsComponent);
    return CancelOrReturnItemsComponent;
}());

var AmendOrderItemsModule = /** @class */ (function () {
    function AmendOrderItemsModule() {
    }
    AmendOrderItemsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                I18nModule,
                MediaModule,
                ItemCounterModule,
                FeaturesConfigModule,
            ],
            declarations: [CancelOrReturnItemsComponent],
            exports: [CancelOrReturnItemsComponent],
            entryComponents: [CancelOrReturnItemsComponent],
        })
    ], AmendOrderItemsModule);
    return AmendOrderItemsModule;
}());

var CancelOrderConfirmationComponent = /** @class */ (function () {
    function CancelOrderConfirmationComponent(orderAmendService) {
        var _this = this;
        this.orderAmendService = orderAmendService;
        this.form$ = this.orderAmendService
            .getForm()
            .pipe(tap(function (form) { return (_this.orderCode = form.value.orderCode); }));
        this.entries$ = this.orderAmendService.getAmendedEntries();
    }
    CancelOrderConfirmationComponent.prototype.submit = function (form) {
        form.disable();
        this.orderAmendService.save();
    };
    CancelOrderConfirmationComponent.ctorParameters = function () { return [
        { type: OrderAmendService }
    ]; };
    CancelOrderConfirmationComponent = __decorate([
        Component({
            selector: 'cx-cancel-order-confirmation',
            template: "<form\n  *ngIf=\"form$ | async as form\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"submit(form)\"\n>\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf=\"entries$ | async as entries\"\n    [entries]=\"entries\"\n    [isConfirmation]=\"true\"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [isValid]=\"form.valid\"\n      backRoute=\"orderCancel\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CancelOrderConfirmationComponent);
    return CancelOrderConfirmationComponent;
}());

var OrderCancellationService = /** @class */ (function (_super) {
    __extends(OrderCancellationService, _super);
    function OrderCancellationService(orderDetailsService, userOrderService, routing, globalMessageService) {
        var _this = _super.call(this, orderDetailsService) || this;
        _this.orderDetailsService = orderDetailsService;
        _this.userOrderService = userOrderService;
        _this.routing = routing;
        _this.globalMessageService = globalMessageService;
        _this.amendType = AmendOrderType.CANCEL;
        return _this;
    }
    /**
     * Return cancellable order entries.
     */
    OrderCancellationService.prototype.getEntries = function () {
        return this.getOrder().pipe(filter(function (order) { return Boolean(order); }), map(function (order) {
            return order.entries.filter(function (entry) { return entry.entryNumber !== -1 && entry.cancellableQuantity > 0; });
        }));
    };
    OrderCancellationService.prototype.save = function () {
        var _this = this;
        var orderCode = this.form.value.orderCode;
        var entries = this.form.value.entries;
        var inputs = Object.keys(entries)
            .filter(function (entryNumber) { return entries[entryNumber] > 0; })
            .map(function (entryNumber) {
            return ({
                orderEntryNumber: Number(entryNumber),
                quantity: entries[entryNumber],
            });
        });
        this.form.reset();
        this.userOrderService.cancelOrder(orderCode, {
            cancellationRequestEntryInputs: inputs,
        });
        this.userOrderService
            .getCancelOrderSuccess()
            .pipe(first(Boolean))
            .subscribe(function () { return _this.afterSave(orderCode); });
    };
    OrderCancellationService.prototype.afterSave = function (orderCode) {
        this.userOrderService.resetCancelOrderProcessState();
        this.globalMessageService.add({
            key: 'orderDetails.cancellationAndReturn.cancelSuccess',
            params: { orderCode: orderCode },
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        this.routing.go({
            cxRoute: 'orders',
        });
    };
    OrderCancellationService.ctorParameters = function () { return [
        { type: OrderDetailsService },
        { type: UserOrderService },
        { type: RoutingService },
        { type: GlobalMessageService }
    ]; };
    OrderCancellationService.ɵprov = ɵɵdefineInjectable({ factory: function OrderCancellationService_Factory() { return new OrderCancellationService(ɵɵinject(OrderDetailsService), ɵɵinject(UserOrderService), ɵɵinject(RoutingService), ɵɵinject(GlobalMessageService)); }, token: OrderCancellationService, providedIn: "root" });
    OrderCancellationService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OrderCancellationService);
    return OrderCancellationService;
}(OrderAmendService));

var OrderCancellationGuard = /** @class */ (function () {
    function OrderCancellationGuard(routing, orderAmendService) {
        this.routing = routing;
        this.orderAmendService = orderAmendService;
    }
    OrderCancellationGuard.prototype.canActivate = function () {
        var _this = this;
        return this.orderAmendService.getForm().pipe(map(function (form) {
            if (!form.valid) {
                // the order code is not available in the route
                // as long as we're inside a guard, hence we redirect
                // to the common orders page.
                _this.routing.go({ cxRoute: 'orders' });
                return false;
            }
            else {
                return true;
            }
        }));
    };
    OrderCancellationGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: OrderCancellationService }
    ]; };
    OrderCancellationGuard.ɵprov = ɵɵdefineInjectable({ factory: function OrderCancellationGuard_Factory() { return new OrderCancellationGuard(ɵɵinject(RoutingService), ɵɵinject(OrderCancellationService)); }, token: OrderCancellationGuard, providedIn: "root" });
    OrderCancellationGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OrderCancellationGuard);
    return OrderCancellationGuard;
}());

var ɵ0$1 = {
    cxRoute: 'orderCancelConfirmation',
};
var CancelOrderConfirmationModule = /** @class */ (function () {
    function CancelOrderConfirmationModule() {
    }
    CancelOrderConfirmationModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild([
                    {
                        path: null,
                        canActivate: [CmsPageGuard],
                        component: PageLayoutComponent,
                        data: ɵ0$1,
                    },
                ]),
                ReactiveFormsModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CancelOrderConfirmationComponent: {
                            component: CancelOrderConfirmationComponent,
                            guards: [AuthGuard, OrderCancellationGuard],
                            providers: [
                                {
                                    provide: OrderAmendService,
                                    useExisting: OrderCancellationService,
                                },
                            ],
                        },
                    },
                }),
                AmendOrderItemsModule,
                AmendOrderActionsModule,
            ],
            declarations: [CancelOrderConfirmationComponent],
            exports: [CancelOrderConfirmationComponent],
            entryComponents: [CancelOrderConfirmationComponent],
        })
    ], CancelOrderConfirmationModule);
    return CancelOrderConfirmationModule;
}());

var CancelOrderComponent = /** @class */ (function () {
    function CancelOrderComponent(orderAmendService) {
        var _this = this;
        this.orderAmendService = orderAmendService;
        this.form$ = this.orderAmendService
            .getForm()
            .pipe(tap(function (form) { return (_this.orderCode = form.value.orderCode); }));
        this.entries$ = this.orderAmendService.getEntries();
    }
    CancelOrderComponent.ctorParameters = function () { return [
        { type: OrderAmendService }
    ]; };
    CancelOrderComponent = __decorate([
        Component({
            selector: 'cx-cancel-order',
            template: "<ng-container *ngIf=\"form$ | async as form\">\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items *ngIf=\"entries$ | async as entries\" [entries]=\"entries\">\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [isValid]=\"form.valid\"\n      backRoute=\"orderDetails\"\n      forwardRoute=\"orderCancelConfirmation\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CancelOrderComponent);
    return CancelOrderComponent;
}());

var ɵ0$2 = {
    cxRoute: 'orderCancel',
};
var CancelOrderModule = /** @class */ (function () {
    function CancelOrderModule() {
    }
    CancelOrderModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild([
                    {
                        path: null,
                        canActivate: [CmsPageGuard],
                        component: PageLayoutComponent,
                        data: ɵ0$2,
                    },
                ]),
                ConfigModule.withConfig({
                    cmsComponents: {
                        CancelOrderComponent: {
                            component: CancelOrderComponent,
                            guards: [AuthGuard],
                            providers: [
                                {
                                    provide: OrderAmendService,
                                    useExisting: OrderCancellationService,
                                },
                            ],
                        },
                    },
                }),
                AmendOrderItemsModule,
                AmendOrderActionsModule,
            ],
            declarations: [CancelOrderComponent],
            exports: [CancelOrderComponent],
            entryComponents: [CancelOrderComponent],
        })
    ], CancelOrderModule);
    return CancelOrderModule;
}());

var OrderCancellationModule = /** @class */ (function () {
    function OrderCancellationModule() {
    }
    OrderCancellationModule = __decorate([
        NgModule({
            imports: [CancelOrderModule, CancelOrderConfirmationModule],
        })
    ], OrderCancellationModule);
    return OrderCancellationModule;
}());

var OrderReturnService = /** @class */ (function (_super) {
    __extends(OrderReturnService, _super);
    function OrderReturnService(orderDetailsService, returnRequestService, routing, globalMessageService) {
        var _this = _super.call(this, orderDetailsService) || this;
        _this.orderDetailsService = orderDetailsService;
        _this.returnRequestService = returnRequestService;
        _this.routing = routing;
        _this.globalMessageService = globalMessageService;
        _this.amendType = AmendOrderType.RETURN;
        return _this;
    }
    OrderReturnService.prototype.getEntries = function () {
        return this.getOrder().pipe(filter(function (order) { return !!order.entries; }), map(function (order) {
            return order.entries.filter(function (entry) { return entry.entryNumber !== -1 && entry.returnableQuantity > 0; });
        }));
    };
    OrderReturnService.prototype.save = function () {
        var _this = this;
        var orderCode = this.form.value.orderCode;
        var entries = this.form.value.entries;
        var inputs = Object.keys(entries)
            .filter(function (entryNumber) { return entries[entryNumber] > 0; })
            .map(function (entryNumber) {
            return ({
                orderEntryNumber: Number(entryNumber),
                quantity: entries[entryNumber],
            });
        });
        this.form.reset();
        this.returnRequestService.createOrderReturnRequest({
            orderCode: orderCode,
            returnRequestEntryInputs: inputs,
        });
        this.returnRequestService
            .getReturnRequestSuccess()
            .pipe(first(Boolean))
            .subscribe(function () { return _this.afterSave(); });
    };
    OrderReturnService.prototype.afterSave = function () {
        var _this = this;
        this.returnRequestService
            .getOrderReturnRequest()
            .pipe(first(function (r) { return !!r; }))
            .subscribe(function (returnRequest) {
            var rma = returnRequest.rma;
            _this.globalMessageService.add({
                key: 'orderDetails.cancellationAndReturn.returnSuccess',
                params: { rma: rma },
            }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            _this.routing.go({
                cxRoute: 'returnRequestDetails',
                params: { rma: rma },
            });
        });
    };
    OrderReturnService.ctorParameters = function () { return [
        { type: OrderDetailsService },
        { type: OrderReturnRequestService },
        { type: RoutingService },
        { type: GlobalMessageService }
    ]; };
    OrderReturnService.ɵprov = ɵɵdefineInjectable({ factory: function OrderReturnService_Factory() { return new OrderReturnService(ɵɵinject(OrderDetailsService), ɵɵinject(OrderReturnRequestService), ɵɵinject(RoutingService), ɵɵinject(GlobalMessageService)); }, token: OrderReturnService, providedIn: "root" });
    OrderReturnService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OrderReturnService);
    return OrderReturnService;
}(OrderAmendService));

var OrderReturnGuard = /** @class */ (function () {
    function OrderReturnGuard(routing, orderAmendService) {
        this.routing = routing;
        this.orderAmendService = orderAmendService;
    }
    OrderReturnGuard.prototype.canActivate = function () {
        var _this = this;
        return this.orderAmendService.getForm().pipe(map(function (form) {
            if (!form.valid) {
                // the order code is not available in the route
                // as long as we're inside a guard, hence we redirect
                // to the common orders page.
                _this.routing.go({ cxRoute: 'orders' });
                return false;
            }
            else {
                return true;
            }
        }));
    };
    OrderReturnGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: OrderReturnService }
    ]; };
    OrderReturnGuard.ɵprov = ɵɵdefineInjectable({ factory: function OrderReturnGuard_Factory() { return new OrderReturnGuard(ɵɵinject(RoutingService), ɵɵinject(OrderReturnService)); }, token: OrderReturnGuard, providedIn: "root" });
    OrderReturnGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OrderReturnGuard);
    return OrderReturnGuard;
}());

var ReturnOrderConfirmationComponent = /** @class */ (function () {
    function ReturnOrderConfirmationComponent(orderAmendService) {
        var _this = this;
        this.orderAmendService = orderAmendService;
        this.form$ = this.orderAmendService
            .getForm()
            .pipe(tap(function (form) { return (_this.orderCode = form.value.orderCode); }));
        this.entries$ = this.orderAmendService.getAmendedEntries();
    }
    ReturnOrderConfirmationComponent.prototype.submit = function (form) {
        form.disable();
        this.orderAmendService.save();
    };
    ReturnOrderConfirmationComponent.ctorParameters = function () { return [
        { type: OrderAmendService }
    ]; };
    ReturnOrderConfirmationComponent = __decorate([
        Component({
            selector: 'cx-return-order-confirmation',
            template: "<form\n  *ngIf=\"form$ | async as form\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"submit(form)\"\n>\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf=\"entries$ | async as entries\"\n    [entries]=\"entries\"\n    [isConfirmation]=\"true\"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [isValid]=\"form.valid\"\n      backRoute=\"orderReturn\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ReturnOrderConfirmationComponent);
    return ReturnOrderConfirmationComponent;
}());

var ɵ0$3 = {
    cxRoute: 'orderReturnConfirmation',
};
var ReturnOrderConfirmationModule = /** @class */ (function () {
    function ReturnOrderConfirmationModule() {
    }
    ReturnOrderConfirmationModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild([
                    {
                        path: null,
                        canActivate: [CmsPageGuard],
                        component: PageLayoutComponent,
                        data: ɵ0$3,
                    },
                ]),
                ConfigModule.withConfig({
                    cmsComponents: {
                        ReturnOrderConfirmationComponent: {
                            component: ReturnOrderConfirmationComponent,
                            guards: [AuthGuard, OrderReturnGuard],
                            providers: [
                                {
                                    provide: OrderAmendService,
                                    useExisting: OrderReturnService,
                                },
                            ],
                        },
                    },
                }),
                AmendOrderItemsModule,
                I18nModule,
                ReactiveFormsModule,
                AmendOrderActionsModule,
            ],
            declarations: [ReturnOrderConfirmationComponent],
            exports: [ReturnOrderConfirmationComponent],
            entryComponents: [ReturnOrderConfirmationComponent],
        })
    ], ReturnOrderConfirmationModule);
    return ReturnOrderConfirmationModule;
}());

var ReturnOrderComponent = /** @class */ (function () {
    function ReturnOrderComponent(orderAmendService) {
        var _this = this;
        this.orderAmendService = orderAmendService;
        this.form$ = this.orderAmendService
            .getForm()
            .pipe(tap(function (form) { return (_this.orderCode = form.value.orderCode); }));
        this.entries$ = this.orderAmendService.getEntries();
    }
    ReturnOrderComponent.ctorParameters = function () { return [
        { type: OrderAmendService }
    ]; };
    ReturnOrderComponent = __decorate([
        Component({
            selector: 'cx-return-order',
            template: "<ng-container *ngIf=\"form$ | async as form\">\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items *ngIf=\"entries$ | async as entries\" [entries]=\"entries\">\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [isValid]=\"form.valid\"\n      backRoute=\"orderDetails\"\n      forwardRoute=\"orderReturnConfirmation\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ReturnOrderComponent);
    return ReturnOrderComponent;
}());

var ɵ0$4 = {
    cxRoute: 'orderReturn',
};
var ReturnOrderModule = /** @class */ (function () {
    function ReturnOrderModule() {
    }
    ReturnOrderModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild([
                    {
                        path: null,
                        canActivate: [CmsPageGuard],
                        component: PageLayoutComponent,
                        data: ɵ0$4,
                    },
                ]),
                ConfigModule.withConfig({
                    cmsComponents: {
                        ReturnOrderComponent: {
                            component: ReturnOrderComponent,
                            guards: [AuthGuard],
                            providers: [
                                {
                                    provide: OrderAmendService,
                                    useExisting: OrderReturnService,
                                },
                            ],
                        },
                    },
                }),
                AmendOrderItemsModule,
                AmendOrderActionsModule,
            ],
            declarations: [ReturnOrderComponent],
            exports: [ReturnOrderComponent],
            entryComponents: [ReturnOrderComponent],
        })
    ], ReturnOrderModule);
    return ReturnOrderModule;
}());

var OrderReturnModule = /** @class */ (function () {
    function OrderReturnModule() {
    }
    OrderReturnModule = __decorate([
        NgModule({
            imports: [ReturnOrderModule, ReturnOrderConfirmationModule],
        })
    ], OrderReturnModule);
    return OrderReturnModule;
}());

var OrderDetailHeadlineComponent = /** @class */ (function () {
    function OrderDetailHeadlineComponent(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    OrderDetailHeadlineComponent.prototype.ngOnInit = function () {
        this.order$ = this.orderDetailsService.getOrderDetails();
    };
    OrderDetailHeadlineComponent.ctorParameters = function () { return [
        { type: OrderDetailsService }
    ]; };
    OrderDetailHeadlineComponent = __decorate([
        Component({
            selector: 'cx-order-details-headline',
            template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-header row\">\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.orderId' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ order?.code }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.placed' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ order?.created | cxDate }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.status' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\" *ngIf=\"order?.statusDisplay\">\n        {{\n          'orderDetails.statusDisplay'\n            | cxTranslate: { context: order?.statusDisplay }\n        }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
        })
    ], OrderDetailHeadlineComponent);
    return OrderDetailHeadlineComponent;
}());

var completedValues = ['DELIVERY_COMPLETED', 'PICKUP_COMPLETE'];
var cancelledValues = ['CANCELLED'];

var OrderDetailItemsComponent = /** @class */ (function () {
    function OrderDetailItemsComponent(orderDetailsService, promotionService) {
        this.orderDetailsService = orderDetailsService;
        this.promotionService = promotionService;
        this.promotionLocation = PromotionLocation.Order;
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
    OrderDetailItemsComponent.prototype.ngOnInit = function () {
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
        this.others$ = this.getOtherStatus.apply(this, __spread(completedValues, cancelledValues));
        this.completed$ = this.getExactStatus(completedValues);
        this.cancel$ = this.getExactStatus(cancelledValues);
    };
    OrderDetailItemsComponent.prototype.getExactStatus = function (consignmentStatus) {
        return this.order$.pipe(map(function (order) {
            if (Boolean(order.consignments)) {
                return order.consignments.filter(function (consignment) {
                    return consignmentStatus.includes(consignment.status);
                });
            }
        }));
    };
    OrderDetailItemsComponent.prototype.getOtherStatus = function () {
        var consignmentStatus = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            consignmentStatus[_i] = arguments[_i];
        }
        return this.order$.pipe(map(function (order) {
            if (Boolean(order.consignments)) {
                return order.consignments.filter(function (consignment) { return !consignmentStatus.includes(consignment.status); });
            }
        }));
    };
    /**
     * @deprecated
     * NOTE: This function will be removed in version 2.0
     */
    OrderDetailItemsComponent.prototype.getConsignmentProducts = function (consignment) {
        var products = [];
        consignment.entries.forEach(function (element) {
            products.push(element.orderEntry);
        });
        return products;
    };
    OrderDetailItemsComponent.ctorParameters = function () { return [
        { type: OrderDetailsService },
        { type: PromotionService }
    ]; };
    OrderDetailItemsComponent = __decorate([
        Component({
            selector: 'cx-order-details-items',
            template: "<ng-container *ngIf=\"order$ | async as order\">\n  <!-- consigned entries -->\n  <div *cxFeatureLevel=\"'1.4'\">\n    <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n      <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n    </ng-container>\n\n    <cx-order-consigned-entries\n      *ngIf=\"others$ | async as others\"\n      [order]=\"order\"\n      [consignments]=\"others\"\n    ></cx-order-consigned-entries>\n\n    <cx-order-consigned-entries\n      *ngIf=\"completed$ | async as completed\"\n      [order]=\"order\"\n      [consignments]=\"completed\"\n    ></cx-order-consigned-entries>\n\n    <cx-order-consigned-entries\n      *ngIf=\"cancel$ | async as cancel\"\n      [order]=\"order\"\n      [consignments]=\"cancel\"\n    ></cx-order-consigned-entries>\n  </div>\n\n  <div *cxFeatureLevel=\"'!1.4'\">\n    <div *ngFor=\"let consignment of order.consignments\" class=\"cx-list row\">\n      <div class=\"cx-list-header col-12\">\n        <div class=\"cx-list-status\">\n          <span *ngIf=\"consignment\">\n            {{\n              'orderDetails.deliveryStatus'\n                | cxTranslate: { context: consignment.status }\n            }}\n          </span>\n        </div>\n        <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n          <div>{{ 'orderDetails.shippedOn' | cxTranslate }}&nbsp;</div>\n          <div>{{ consignment?.statusDate | cxDate }}</div>\n        </div>\n\n        <cx-consignment-tracking\n          [orderCode]=\"order.code\"\n          [consignment]=\"consignment\"\n          *cxFeature=\"'consignmentTracking'\"\n        >\n        </cx-consignment-tracking>\n      </div>\n      <div class=\"cx-list-item col-12\">\n        <ng-container *cxFeatureLevel=\"'1.5'\">\n          <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n            <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n          </ng-container>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"getConsignmentProducts(consignment)\"\n          [readonly]=\"true\"\n          [promotionLocation]=\"promotionLocation\"\n        ></cx-cart-item-list>\n      </div>\n    </div>\n    <!-- unconsigned entries -->\n    <div *ngIf=\"order.unconsignedEntries?.length\" class=\"cx-list row\">\n      <div class=\"cx-list-header col-12\">\n        <div class=\"cx-list-status\">\n          {{ 'orderDetails.pending' | cxTranslate }}\n        </div>\n      </div>\n      <div class=\"cx-list-item col-12\">\n        <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n          <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"order?.unconsignedEntries\"\n          [readonly]=\"true\"\n          [promotionLocation]=\"promotionLocation\"\n        ></cx-cart-item-list>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
        })
    ], OrderDetailItemsComponent);
    return OrderDetailItemsComponent;
}());

var TrackingEventsComponent = /** @class */ (function () {
    function TrackingEventsComponent(activeModal, userOrderService) {
        this.activeModal = activeModal;
        this.userOrderService = userOrderService;
    }
    TrackingEventsComponent.prototype.ngOnDestroy = function () {
        this.userOrderService.clearConsignmentTracking();
    };
    TrackingEventsComponent.ctorParameters = function () { return [
        { type: NgbActiveModal },
        { type: UserOrderService }
    ]; };
    TrackingEventsComponent = __decorate([
        Component({
            selector: 'cx-tracking-events',
            template: "<div class=\"cx-consignment-tracking-dialog\">\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"tracking$ | async as consignmentTracking; else loading\">\n    <div class=\"header modal-header\">\n      <div class=\"title modal-title\">\n        {{ 'orderDetails.consignmentTracking.dialog.header' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <!-- shipment header -->\n    <ng-container\n      *ngIf=\"\n        consignmentTracking?.carrierDetails && consignmentTracking?.trackingID;\n        else noTracking\n      \"\n    >\n      <div class=\"shipment-heading\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title \">\n              {{\n                'orderDetails.consignmentTracking.dialog.shipped' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ shipDate | cxDate: 'medium' }}\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.estimate' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ consignmentTracking?.targetArrivalDate | cxDate: 'medium' }}\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.carrier' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ consignmentTracking?.carrierDetails?.name }}\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.trackingId'\n                  | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              <ng-container *ngIf=\"consignmentTracking?.trackingUrl\">\n                <a target=\"_blank\" [href]=\"consignmentTracking.trackingUrl\">{{\n                  consignmentTracking?.trackingID\n                }}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!consignmentTracking?.trackingUrl\">\n                <label>\n                  {{ consignmentTracking?.trackingID }}\n                </label>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <!-- tracking events -->\n    <div class=\"events modal-body\">\n      <ng-container\n        *ngFor=\"let consignmentEvent of consignmentTracking.trackingEvents\"\n      >\n        <div class=\"event-body\">\n          <div class=\"event-content\">\n            {{ consignmentEvent.eventDate | cxDate: 'medium' }}\n          </div>\n          <div class=\"event-title\">\n            {{ consignmentEvent.referenceCode }}\n          </div>\n          <div class=\"event-content\">{{ consignmentEvent.detail }}</div>\n          <div class=\"event-city\">\n            location: {{ consignmentEvent.location }}\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n\n  <ng-template #noTracking>\n    <div class=\"no-tracking-heading\">\n      <div class=\"shipment-content\">\n        {{ 'orderDetails.consignmentTracking.dialog.noTracking' | cxTranslate }}\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #loading>\n    <div class=\"tracking-loading\">\n      <div class=\"header modal-header\">\n        <div class=\"title modal-title\">\n          {{\n            'orderDetails.consignmentTracking.dialog.loadingHeader'\n              | cxTranslate\n          }}\n        </div>\n        <button\n          type=\"button\"\n          class=\"close btn-dismiss\"\n          aria-label=\"Close\"\n          (click)=\"activeModal.dismiss('Cross click')\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <!-- Modal Body -->\n      <div class=\"body modal-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <cx-spinner></cx-spinner>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
        })
    ], TrackingEventsComponent);
    return TrackingEventsComponent;
}());

var ConsignmentTrackingComponent = /** @class */ (function () {
    function ConsignmentTrackingComponent(userOrderService, modalService) {
        this.userOrderService = userOrderService;
        this.modalService = modalService;
        this.consignmentStatus = [
            'SHIPPED',
            'IN_TRANSIT',
            'DELIVERY_COMPLETED',
            'DELIVERY_REJECTED',
            'DELIVERING',
        ];
    }
    ConsignmentTrackingComponent.prototype.ngOnInit = function () {
        this.consignmentTracking$ = this.userOrderService.getConsignmentTracking();
    };
    ConsignmentTrackingComponent.prototype.openTrackingDialog = function (consignment) {
        this.userOrderService.loadConsignmentTracking(this.orderCode, consignment.code);
        var modalInstance;
        this.modalRef = this.modalService.open(TrackingEventsComponent, {
            centered: true,
            size: 'lg',
        });
        modalInstance = this.modalRef.componentInstance;
        modalInstance.tracking$ = this.consignmentTracking$;
        modalInstance.shipDate = consignment.statusDate;
        modalInstance.consignmentCode = consignment.code;
    };
    ConsignmentTrackingComponent.prototype.ngOnDestroy = function () {
        this.userOrderService.clearConsignmentTracking();
    };
    ConsignmentTrackingComponent.ctorParameters = function () { return [
        { type: UserOrderService },
        { type: ModalService }
    ]; };
    __decorate([
        Input()
    ], ConsignmentTrackingComponent.prototype, "consignment", void 0);
    __decorate([
        Input()
    ], ConsignmentTrackingComponent.prototype, "orderCode", void 0);
    ConsignmentTrackingComponent = __decorate([
        Component({
            selector: 'cx-consignment-tracking',
            template: "<ng-container *ngIf=\"consignment && consignment.status\">\n  <div *ngIf=\"consignmentStatus.includes(consignment.status)\">\n    <button\n      (click)=\"openTrackingDialog(consignment)\"\n      class=\"btn btn-action btn-track\"\n      type=\"button\"\n    >\n      {{ 'orderDetails.consignmentTracking.action' | cxTranslate }}\n    </button>\n  </div>\n</ng-container>\n"
        })
    ], ConsignmentTrackingComponent);
    return ConsignmentTrackingComponent;
}());

var OrderConsignedEntriesComponent = /** @class */ (function () {
    function OrderConsignedEntriesComponent() {
        this.promotionLocation = PromotionLocation.Order;
    }
    OrderConsignedEntriesComponent.prototype.getConsignmentProducts = function (consignment) {
        var products = [];
        consignment.entries.forEach(function (element) {
            products.push(element.orderEntry);
        });
        return products;
    };
    __decorate([
        Input()
    ], OrderConsignedEntriesComponent.prototype, "consignments", void 0);
    __decorate([
        Input()
    ], OrderConsignedEntriesComponent.prototype, "order", void 0);
    OrderConsignedEntriesComponent = __decorate([
        Component({
            selector: 'cx-order-consigned-entries',
            template: "<div *ngFor=\"let consignment of consignments\" class=\"cx-list row\">\n  <div class=\"cx-list-header col-12\">\n    <div class=\"cx-list-status\">\n      <span *ngIf=\"consignment\">\n        {{\n          'orderDetails.deliveryStatus'\n            | cxTranslate: { context: consignment.status }\n        }}\n      </span>\n    </div>\n    <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n      <div>{{ consignment?.statusDate | cxDate }}</div>\n    </div>\n\n    <cx-consignment-tracking\n      [orderCode]=\"order.code\"\n      [consignment]=\"consignment\"\n      *cxFeature=\"'consignmentTracking'\"\n    >\n    </cx-consignment-tracking>\n  </div>\n  <div class=\"cx-list-item col-12\">\n    <cx-cart-item-list\n      [items]=\"consignment.entries\"\n      [readonly]=\"true\"\n      [promotionLocation]=\"promotionLocation\"\n    ></cx-cart-item-list>\n  </div>\n</div>\n"
        })
    ], OrderConsignedEntriesComponent);
    return OrderConsignedEntriesComponent;
}());

var OrderDetailShippingComponent = /** @class */ (function () {
    function OrderDetailShippingComponent(orderDetailsService, translation) {
        this.orderDetailsService = orderDetailsService;
        this.translation = translation;
    }
    OrderDetailShippingComponent.prototype.ngOnInit = function () {
        this.order$ = this.orderDetailsService.getOrderDetails();
    };
    OrderDetailShippingComponent.prototype.getAddressCardContent = function (address) {
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            return {
                title: textTitle,
                textBold: address.firstName + " " + address.lastName,
                text: [
                    address.line1,
                    address.line2,
                    address.town + ", " + address.country.isocode + ", " + address.postalCode,
                    address.phone,
                ],
            };
        }));
    };
    OrderDetailShippingComponent.prototype.getBillingAddressCardContent = function (billingAddress) {
        return combineLatest([
            this.translation.translate('addressCard.billTo'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            return {
                title: textTitle,
                textBold: billingAddress.firstName + " " + billingAddress.lastName,
                text: [
                    billingAddress.line1,
                    billingAddress.line2,
                    billingAddress.town + ", " + billingAddress.country.isocode + ", " + billingAddress.postalCode,
                    billingAddress.phone,
                ],
            };
        }));
    };
    OrderDetailShippingComponent.prototype.getPaymentCardContent = function (payment) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: payment.expiryMonth,
                year: payment.expiryYear,
            }),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), textTitle = _b[0], textExpires = _b[1];
            return {
                title: textTitle,
                textBold: payment.accountHolderName,
                text: [payment.cardType.name, payment.cardNumber, textExpires],
            };
        }));
    };
    OrderDetailShippingComponent.prototype.getShippingMethodCardContent = function (shipping) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            return {
                title: textTitle,
                textBold: shipping.name,
                text: [shipping.description],
            };
        }));
    };
    OrderDetailShippingComponent.ctorParameters = function () { return [
        { type: OrderDetailsService },
        { type: TranslationService }
    ]; };
    OrderDetailShippingComponent = __decorate([
        Component({
            selector: 'cx-order-details-shipping',
            template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-account-summary row\">\n    <div\n      *ngIf=\"order.deliveryAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"getAddressCardContent(order.deliveryAddress) | async\"\n      ></cx-card>\n    </div>\n    <div\n      *ngIf=\"order.paymentInfo?.billingAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"\n          getBillingAddressCardContent(order.paymentInfo.billingAddress) | async\n        \"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.paymentInfo\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getPaymentCardContent(order.paymentInfo) | async\"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.deliveryMode\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getShippingMethodCardContent(order.deliveryMode) | async\"\n      ></cx-card>\n    </div>\n  </div>\n</ng-container>\n"
        })
    ], OrderDetailShippingComponent);
    return OrderDetailShippingComponent;
}());

var OrderDetailTotalsComponent = /** @class */ (function () {
    function OrderDetailTotalsComponent(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    OrderDetailTotalsComponent.prototype.ngOnInit = function () {
        this.order$ = this.orderDetailsService.getOrderDetails();
    };
    OrderDetailTotalsComponent.ctorParameters = function () { return [
        { type: OrderDetailsService }
    ]; };
    OrderDetailTotalsComponent = __decorate([
        Component({
            selector: 'cx-order-details-totals',
            template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"row justify-content-end\">\n    <div class=\"cx-summary col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <cx-order-summary [cart]=\"order\"></cx-order-summary>\n    </div>\n  </div>\n</ng-container>\n"
        })
    ], OrderDetailTotalsComponent);
    return OrderDetailTotalsComponent;
}());

var OrderDetailActionsComponent = /** @class */ (function () {
    function OrderDetailActionsComponent(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
    OrderDetailActionsComponent.ctorParameters = function () { return [
        { type: OrderDetailsService }
    ]; };
    OrderDetailActionsComponent = __decorate([
        Component({
            selector: 'cx-order-details-actions',
            template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-nav row\">\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button\n        [routerLink]=\"{ cxRoute: 'orders' } | cxUrl\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <a\n        *ngIf=\"order.cancellable\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orderCancel',\n            params: order\n          } | cxUrl\n        \"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'orderDetails.cancellationAndReturn.cancelAction' | cxTranslate }}\n      </a>\n\n      <a\n        *ngIf=\"order.returnable\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orderReturn',\n            params: order\n          } | cxUrl\n        \"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'orderDetails.cancellationAndReturn.returnAction' | cxTranslate }}\n      </a>\n    </div>\n  </div>\n</ng-container>\n"
        })
    ], OrderDetailActionsComponent);
    return OrderDetailActionsComponent;
}());

var moduleComponents = [
    OrderDetailActionsComponent,
    OrderDetailHeadlineComponent,
    OrderDetailItemsComponent,
    OrderDetailTotalsComponent,
    OrderDetailShippingComponent,
    TrackingEventsComponent,
    ConsignmentTrackingComponent,
    OrderConsignedEntriesComponent,
];
var ɵ0$5 = { pageLabel: 'order', cxRoute: 'orderGuest' }, ɵ1 = { cxRoute: 'orderDetails' };
var OrderDetailsModule = /** @class */ (function () {
    function OrderDetailsModule() {
    }
    OrderDetailsModule = __decorate([
        NgModule({
            imports: [
                CartSharedModule,
                CardModule,
                CommonModule,
                I18nModule,
                FeaturesConfigModule,
                PromotionsModule,
                UrlModule,
                RouterModule.forChild([
                    {
                        path: null,
                        canActivate: [CmsPageGuard],
                        component: PageLayoutComponent,
                        data: ɵ0$5,
                    },
                    {
                        path: null,
                        canActivate: [AuthGuard, CmsPageGuard],
                        component: PageLayoutComponent,
                        data: ɵ1,
                    },
                ]),
                ConfigModule.withConfig({
                    cmsComponents: {
                        AccountOrderDetailsActionsComponent: {
                            component: OrderDetailActionsComponent,
                        },
                        AccountOrderDetailsHeadlineComponent: {
                            component: OrderDetailHeadlineComponent,
                        },
                        AccountOrderDetailsItemsComponent: {
                            component: OrderDetailItemsComponent,
                        },
                        AccountOrderDetailsTotalsComponent: {
                            component: OrderDetailTotalsComponent,
                        },
                        AccountOrderDetailsShippingComponent: {
                            component: OrderDetailShippingComponent,
                        },
                    },
                    features: {
                        consignmentTracking: '1.2',
                    },
                }),
                SpinnerModule,
            ],
            providers: [OrderDetailsService],
            declarations: __spread(moduleComponents),
            exports: __spread(moduleComponents),
            entryComponents: __spread(moduleComponents),
        })
    ], OrderDetailsModule);
    return OrderDetailsModule;
}());

var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent(routing, userOrderService, translation) {
        var _this = this;
        this.routing = routing;
        this.userOrderService = userOrderService;
        this.translation = translation;
        this.PAGE_SIZE = 5;
        this.orders$ = this.userOrderService.getOrderHistoryList(this.PAGE_SIZE).pipe(tap(function (orders) {
            if (orders.pagination) {
                _this.sortType = orders.pagination.sort;
            }
        }));
        this.isLoaded$ = this.userOrderService.getOrderHistoryListLoaded();
        /**
         * When "Order Return" feature is enabled, this component becomes one tab in
         * TabParagraphContainerComponent. This can be read from TabParagraphContainer.
         */
        this.tabTitleParam$ = this.orders$.pipe(map(function (order) { return order.pagination.totalResults; }), filter(function (totalResults) { return totalResults !== undefined; }), take(1));
    }
    OrderHistoryComponent.prototype.ngOnDestroy = function () {
        this.userOrderService.clearOrderList();
    };
    OrderHistoryComponent.prototype.changeSortCode = function (sortCode) {
        var event = {
            sortCode: sortCode,
            currentPage: 0,
        };
        this.sortType = sortCode;
        this.fetchOrders(event);
    };
    OrderHistoryComponent.prototype.pageChange = function (page) {
        var event = {
            sortCode: this.sortType,
            currentPage: page,
        };
        this.fetchOrders(event);
    };
    OrderHistoryComponent.prototype.goToOrderDetail = function (order) {
        this.routing.go({
            cxRoute: 'orderDetails',
            params: order,
        });
    };
    OrderHistoryComponent.prototype.getSortLabels = function () {
        return combineLatest([
            this.translation.translate('sorting.date'),
            this.translation.translate('sorting.orderNumber'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), textByDate = _b[0], textByOrderNumber = _b[1];
            return {
                byDate: textByDate,
                byOrderNumber: textByOrderNumber,
            };
        }));
    };
    OrderHistoryComponent.prototype.fetchOrders = function (event) {
        this.userOrderService.loadOrderList(this.PAGE_SIZE, event.currentPage, event.sortCode);
    };
    OrderHistoryComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: UserOrderService },
        { type: TranslationService }
    ]; };
    OrderHistoryComponent = __decorate([
        Component({
            selector: 'cx-order-history',
            template: "<ng-container *ngIf=\"orders$ | async as orders\">\n  <div class=\"container\">\n    <!-- HEADER -->\n    <div class=\"cx-order-history-header\">\n      <h3>{{ 'orderHistory.orderHistory' | cxTranslate }}</h3>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"orders.pagination.totalResults > 0; else noOrder\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'orderHistory.orderId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.date' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'orderHistory.status' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.total' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let order of orders.orders\"\n              (click)=\"goToOrderDetail(order)\"\n            >\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.code }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.date' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                  >{{ order?.placed | cxDate: 'longDate' }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.status' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{\n                    'orderDetails.statusDisplay'\n                      | cxTranslate: { context: order?.statusDisplay }\n                  }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-total\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.total' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.total.formattedValue }}</a\n                >\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- NO ORDER CONTAINER -->\n      <ng-template #noOrder>\n        <div class=\"cx-order-history-no-order row\" *ngIf=\"isLoaded$ | async\">\n          <div class=\"col-sm-12 col-md-6 col-lg-4\">\n            <div>{{ 'orderHistory.noOrders' | cxTranslate }}</div>\n            <a\n              [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n              routerLinkActive=\"active\"\n              class=\"btn btn-primary btn-block\"\n              >{{ 'orderHistory.startShopping' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}());

var ɵ0$6 = { cxRoute: 'orders' };
var OrderHistoryModule = /** @class */ (function () {
    function OrderHistoryModule() {
    }
    OrderHistoryModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild([
                    {
                        path: null,
                        canActivate: [AuthGuard, CmsPageGuard],
                        component: PageLayoutComponent,
                        data: ɵ0$6,
                    },
                ]),
                ConfigModule.withConfig({
                    cmsComponents: {
                        AccountOrderHistoryComponent: {
                            component: OrderHistoryComponent,
                            guards: [AuthGuard],
                        },
                    },
                }),
                RouterModule,
                FormsModule,
                NgSelectModule,
                ListNavigationModule,
                UrlModule,
                I18nModule,
            ],
            declarations: [OrderHistoryComponent],
            exports: [OrderHistoryComponent],
            providers: [UserService],
            entryComponents: [OrderHistoryComponent],
        })
    ], OrderHistoryModule);
    return OrderHistoryModule;
}());

var ReturnRequestService = /** @class */ (function () {
    function ReturnRequestService(routingService, returnRequestService, globalMessageService) {
        this.routingService = routingService;
        this.returnRequestService = returnRequestService;
        this.globalMessageService = globalMessageService;
    }
    Object.defineProperty(ReturnRequestService.prototype, "isCancelling$", {
        get: function () {
            return this.returnRequestService.getCancelReturnRequestLoading();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReturnRequestService.prototype, "isCancelSuccess$", {
        get: function () {
            return this.returnRequestService.getCancelReturnRequestSuccess();
        },
        enumerable: true,
        configurable: true
    });
    ReturnRequestService.prototype.getReturnRequest = function () {
        var _this = this;
        return combineLatest([
            this.routingService.getRouterState(),
            this.returnRequestService.getOrderReturnRequest(),
            this.returnRequestService.getReturnRequestLoading(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 3), routingState = _b[0], returnRequest = _b[1], isLoading = _b[2];
            return [
                routingState.state.params['returnCode'],
                returnRequest,
                isLoading,
            ];
        }), filter(function (_a) {
            var _b = __read(_a, 1), returnCode = _b[0];
            return Boolean(returnCode);
        }), tap(function (_a) {
            var _b = __read(_a, 3), returnCode = _b[0], returnRequest = _b[1], isLoading = _b[2];
            if ((returnRequest === undefined || returnRequest.rma !== returnCode) &&
                !isLoading) {
                _this.returnRequestService.loadOrderReturnRequestDetail(returnCode);
            }
        }), map(function (_a) {
            var _b = __read(_a, 2), _ = _b[0], returnRequest = _b[1];
            return returnRequest;
        }), filter(Boolean), distinctUntilChanged());
    };
    ReturnRequestService.prototype.clearReturnRequest = function () {
        this.returnRequestService.clearOrderReturnRequestDetail();
    };
    ReturnRequestService.prototype.cancelReturnRequest = function (returnRequestCode) {
        this.returnRequestService.cancelOrderReturnRequest(returnRequestCode, {
            status: 'CANCELLING',
        });
    };
    ReturnRequestService.prototype.cancelSuccess = function (rma) {
        this.returnRequestService.resetCancelReturnRequestProcessState();
        this.globalMessageService.add({
            key: 'returnRequest.cancelSuccess',
            params: { rma: rma },
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        this.routingService.go({
            cxRoute: 'orders',
        });
    };
    ReturnRequestService.prototype.backToList = function () {
        this.routingService.go({ cxRoute: 'orders' }, null, {
            state: {
                activeTab: 1,
            },
        });
    };
    ReturnRequestService.ctorParameters = function () { return [
        { type: RoutingService },
        { type: OrderReturnRequestService },
        { type: GlobalMessageService }
    ]; };
    ReturnRequestService.ɵprov = ɵɵdefineInjectable({ factory: function ReturnRequestService_Factory() { return new ReturnRequestService(ɵɵinject(RoutingService), ɵɵinject(OrderReturnRequestService), ɵɵinject(GlobalMessageService)); }, token: ReturnRequestService, providedIn: "root" });
    ReturnRequestService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ReturnRequestService);
    return ReturnRequestService;
}());

var ReturnRequestOverviewComponent = /** @class */ (function () {
    function ReturnRequestOverviewComponent(returnRequestService) {
        var _this = this;
        this.returnRequestService = returnRequestService;
        this.returnRequest$ = this.returnRequestService
            .getReturnRequest()
            .pipe(tap(function (returnRequest) { return (_this.rma = returnRequest.rma); }));
        this.isCancelling$ = this.returnRequestService.isCancelling$;
    }
    ReturnRequestOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.returnRequestService.isCancelSuccess$.subscribe(function (success) {
            if (success) {
                _this.returnRequestService.cancelSuccess(_this.rma);
            }
        });
    };
    ReturnRequestOverviewComponent.prototype.cancelReturn = function (returnRequestCode) {
        this.returnRequestService.cancelReturnRequest(returnRequestCode);
    };
    ReturnRequestOverviewComponent.prototype.back = function () {
        this.returnRequestService.backToList();
    };
    ReturnRequestOverviewComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ReturnRequestOverviewComponent.ctorParameters = function () { return [
        { type: ReturnRequestService }
    ]; };
    ReturnRequestOverviewComponent = __decorate([
        Component({
            selector: 'cx-return-request-overview',
            template: "<ng-container *ngIf=\"returnRequest$ | async as returnRequest\">\n  <div class=\"cx-nav row\">\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button (click)=\"back()\" class=\"btn btn-block btn-action\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button\n        *ngIf=\"returnRequest.cancellable\"\n        class=\"btn btn-block btn-primary\"\n        (click)=\"cancelReturn(returnRequest.rma)\"\n        [disabled]=\"isCancelling$ | async\"\n      >\n        {{ 'returnRequest.cancel' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n  <div class=\"cx-header row\">\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'returnRequest.returnRequestId' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ returnRequest.rma }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'returnRequest.orderCode' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ returnRequest.order?.code }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'returnRequest.status' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">\n        {{\n          'returnRequestList.statusDisplay'\n            | cxTranslate: { context: returnRequest.status }\n        }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ReturnRequestOverviewComponent);
    return ReturnRequestOverviewComponent;
}());

var ReturnRequestItemsComponent = /** @class */ (function () {
    function ReturnRequestItemsComponent(returnRequestService) {
        this.returnRequestService = returnRequestService;
        this.returnRequest$ = this.returnRequestService.getReturnRequest();
    }
    ReturnRequestItemsComponent.ctorParameters = function () { return [
        { type: ReturnRequestService }
    ]; };
    ReturnRequestItemsComponent = __decorate([
        Component({
            selector: 'cx-return-request-items',
            template: "<ng-container *ngIf=\"returnRequest$ | async as returnRequest\">\n  <div class=\"d-none d-md-block d-lg-block d-xl-block\">\n    <div class=\"cx-item-list-header row\">\n      <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n        {{ 'returnRequest.item' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-price col-md-2 col-lg-2 col-xl-2\">\n        {{ 'returnRequest.itemPrice' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-qty col-md-3 col-lg-3 col-xl-2\">\n        {{ 'returnRequest.returnQty' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n        {{ 'returnRequest.total' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n\n  <div\n    class=\"cx-item-list-row\"\n    *ngFor=\"let returnEntry of returnRequest.returnEntries; let i = index\"\n  >\n    <div class=\"cx-item-list-items\">\n      <div class=\"row\">\n        <!-- Item Image -->\n        <div class=\"col-2 cx-image-container\">\n          <cx-media\n            [container]=\"returnEntry.orderEntry?.product.images?.PRIMARY\"\n            format=\"thumbnail\"\n          ></cx-media>\n        </div>\n        <!-- Item Information -->\n        <div class=\"cx-info col-10\">\n          <div class=\"cx-info-container row \">\n            <!-- Item Description -->\n            <div class=\"col-md-3 col-lg-4 col-xl-5\">\n              <div *ngIf=\"returnEntry.orderEntry?.product.name\" class=\"cx-name\">\n                {{ returnEntry.orderEntry?.product.name }}\n              </div>\n              <div *ngIf=\"returnEntry.orderEntry?.product.code\" class=\"cx-code\">\n                {{ 'cartItems.id' | cxTranslate }}\n                {{ returnEntry.orderEntry?.product.code }}\n              </div>\n              <!-- Variants -->\n              <ng-container *cxFeatureLevel=\"'!1.5'\">\n                <div\n                  *ngFor=\"\n                    let variant of returnEntry.orderEntry?.product\n                      .variantOptionQualifiers\n                  \"\n                  class=\"cx-property\"\n                >\n                  <div class=\"cx-label\">{{ variant.name }}</div>\n                  <div class=\"cx-value\">{{ variant.value }}</div>\n                </div>\n              </ng-container>\n              <ng-container *cxFeatureLevel=\"'1.5'\">\n                <div\n                  *ngFor=\"\n                    let variant of (returnEntry.orderEntry?.product\n                      .baseOptions)[0]?.selected?.variantOptionQualifiers\n                  \"\n                  class=\"cx-property\"\n                >\n                  <div class=\"cx-label\" *ngIf=\"variant.name\">\n                    {{ variant.name }}:\n                  </div>\n                  <div class=\"cx-value\" *ngIf=\"variant.value\">\n                    {{ variant.value }}\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n            <!-- Item Price -->\n            <div\n              *ngIf=\"returnEntry.orderEntry?.basePrice\"\n              class=\"cx-price col-md-3 col-lg-2 col-xl-2\"\n            >\n              <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n                {{ 'returnRequest.itemPrice' | cxTranslate }}\n              </div>\n              <div class=\"cx-value\">\n                {{ returnEntry.orderEntry?.basePrice?.formattedValue }}\n              </div>\n            </div>\n            <!-- return Quantity -->\n            <div class=\"cx-quantity col-md-3 col-lg-3 col-xl-3\">\n              <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n                {{ 'returnRequest.returnQty' | cxTranslate }}\n              </div>\n              <div class=\"cx-value\">\n                {{ returnEntry.expectedQuantity }}\n              </div>\n            </div>\n            <!-- Total Price -->\n            <div class=\"cx-total col-md-3 col-lg-3 col-xl-2\">\n              <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n                {{ 'returnRequest.total' | cxTranslate }}\n              </div>\n              <div class=\"cx-value\">\n                {{ returnEntry.refundAmount?.formattedValue }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ReturnRequestItemsComponent);
    return ReturnRequestItemsComponent;
}());

var ReturnRequestTotalsComponent = /** @class */ (function () {
    function ReturnRequestTotalsComponent(returnRequestService) {
        this.returnRequestService = returnRequestService;
        this.returnRequest$ = this.returnRequestService.getReturnRequest();
    }
    ReturnRequestTotalsComponent.prototype.ngOnDestroy = function () {
        this.returnRequestService.clearReturnRequest();
    };
    ReturnRequestTotalsComponent.ctorParameters = function () { return [
        { type: ReturnRequestService }
    ]; };
    ReturnRequestTotalsComponent = __decorate([
        Component({
            selector: 'cx-return-request-totals',
            template: "<ng-container *ngIf=\"returnRequest$ | async as returnRequest\">\n  <div class=\"row justify-content-end\">\n    <div class=\"cx-summary col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <h4>{{ 'returnRequest.summary' | cxTranslate }}</h4>\n      <div class=\"cx-summary-row\">\n        <div class=\"col-6 cx-summary-label\">\n          {{ 'returnRequest.subtotal' | cxTranslate }}\n        </div>\n        <div class=\"col-6 cx-summary-amount\">\n          {{ returnRequest.subTotal?.formattedValue }}\n        </div>\n      </div>\n      <div class=\"cx-summary-row\">\n        <div class=\"col-6 cx-summary-label\">\n          {{ 'returnRequest.deliveryCode' | cxTranslate }}\n        </div>\n        <div class=\"col-6 cx-summary-amount\">\n          {{ returnRequest.deliveryCost?.formattedValue }}\n        </div>\n      </div>\n      <div class=\"cx-summary-row cx-summary-total\">\n        <div class=\"col-6 cx-summary-label\">\n          {{ 'returnRequest.estimatedRefund' | cxTranslate }}\n        </div>\n        <div class=\"col-6 cx-summary-amount\">\n          {{ returnRequest.totalPrice?.formattedValue }}\n        </div>\n      </div>\n      <div class=\"cx-summary-row cx-footnote\">\n        {{ 'returnRequest.note' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ReturnRequestTotalsComponent);
    return ReturnRequestTotalsComponent;
}());

var components = [
    ReturnRequestOverviewComponent,
    ReturnRequestItemsComponent,
    ReturnRequestTotalsComponent,
];
var ɵ0$7 = { cxRoute: 'returnRequestDetails' };
var ReturnRequestDetailModule = /** @class */ (function () {
    function ReturnRequestDetailModule() {
    }
    ReturnRequestDetailModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild([
                    {
                        path: null,
                        canActivate: [AuthGuard, CmsPageGuard],
                        component: PageLayoutComponent,
                        data: ɵ0$7,
                    },
                ]),
                ConfigModule.withConfig({
                    cmsComponents: {
                        ReturnRequestOverviewComponent: {
                            component: ReturnRequestOverviewComponent,
                        },
                        ReturnRequestItemsComponent: {
                            component: ReturnRequestItemsComponent,
                        },
                        ReturnRequestTotalsComponent: {
                            component: ReturnRequestTotalsComponent,
                        },
                    },
                }),
                RouterModule,
                UrlModule,
                I18nModule,
                MediaModule,
                FeaturesConfigModule,
            ],
            declarations: __spread(components),
            exports: __spread(components),
            entryComponents: __spread(components),
        })
    ], ReturnRequestDetailModule);
    return ReturnRequestDetailModule;
}());

var OrderReturnRequestListComponent = /** @class */ (function () {
    function OrderReturnRequestListComponent(returnRequestService, translation) {
        var _this = this;
        this.returnRequestService = returnRequestService;
        this.translation = translation;
        this.PAGE_SIZE = 5;
        this.returnRequests$ = this.returnRequestService.getOrderReturnRequestList(this.PAGE_SIZE).pipe(tap(function (requestList) {
            if (requestList.pagination) {
                _this.sortType = requestList.pagination.sort;
            }
        }));
        /**
         * When "Order Return" feature is enabled, this component becomes one tab in
         * TabParagraphContainerComponent. This can be read from TabParagraphContainer.
         */
        this.tabTitleParam$ = this.returnRequests$.pipe(map(function (returnRequests) { return returnRequests.pagination.totalResults; }), filter(function (totalResults) { return totalResults !== undefined; }), take(1));
    }
    OrderReturnRequestListComponent.prototype.ngOnDestroy = function () {
        this.returnRequestService.clearOrderReturnRequestList();
    };
    OrderReturnRequestListComponent.prototype.changeSortCode = function (sortCode) {
        var event = {
            sortCode: sortCode,
            currentPage: 0,
        };
        this.sortType = sortCode;
        this.fetchReturnRequests(event);
    };
    OrderReturnRequestListComponent.prototype.pageChange = function (page) {
        var event = {
            sortCode: this.sortType,
            currentPage: page,
        };
        this.fetchReturnRequests(event);
    };
    OrderReturnRequestListComponent.prototype.getSortLabels = function () {
        return combineLatest([
            this.translation.translate('sorting.date'),
            this.translation.translate('sorting.rma'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), textByDate = _b[0], textByRma = _b[1];
            return {
                byDate: textByDate,
                byRMA: textByRma,
            };
        }));
    };
    OrderReturnRequestListComponent.prototype.fetchReturnRequests = function (event) {
        this.returnRequestService.loadOrderReturnRequestList(this.PAGE_SIZE, event.currentPage, event.sortCode);
    };
    OrderReturnRequestListComponent.ctorParameters = function () { return [
        { type: OrderReturnRequestService },
        { type: TranslationService }
    ]; };
    OrderReturnRequestListComponent = __decorate([
        Component({
            selector: 'cx-order-return-request-list',
            template: "<ng-container *ngIf=\"returnRequests$ | async as returnRequests\">\n  <div class=\"container\">\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"returnRequests.pagination.totalResults > 0\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"returnRequests.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"returnRequests.pagination.sort\"\n              placeholder=\"{{\n                'returnRequestList.sortByMostRecent' | cxTranslate\n              }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"returnRequests.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'returnRequestList.returnRequestId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'returnRequestList.orderId' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'returnRequestList.date' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'returnRequestList.status' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let return of returnRequests.returnRequests\">\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'returnRequestList.returnRequestId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'returnRequestDetails',\n                      params: return\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ return?.rma }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'returnRequestList.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: return?.order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ return?.order?.code }}</a\n                >\n              </td>\n\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'returnRequestList.date' | cxTranslate }}\n                </div>\n                {{ return?.creationTime | cxDate: 'longDate' }}\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'returnRequestList.status' | cxTranslate }}\n                </div>\n                {{\n                  'returnRequestList.statusDisplay'\n                    | cxTranslate: { context: return?.status }\n                }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"returnRequests.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"returnRequests.pagination.sort\"\n              placeholder=\"{{\n                'returnRequestList.sortByMostRecent' | cxTranslate\n              }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"returnRequests.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], OrderReturnRequestListComponent);
    return OrderReturnRequestListComponent;
}());

var ReturnRequestListModule = /** @class */ (function () {
    function ReturnRequestListModule() {
    }
    ReturnRequestListModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        OrderReturnRequestListComponent: {
                            component: OrderReturnRequestListComponent,
                            guards: [AuthGuard],
                        },
                    },
                }),
                RouterModule,
                ListNavigationModule,
                UrlModule,
                I18nModule,
            ],
            declarations: [OrderReturnRequestListComponent],
            exports: [OrderReturnRequestListComponent],
            entryComponents: [OrderReturnRequestListComponent],
        })
    ], ReturnRequestListModule);
    return ReturnRequestListModule;
}());

var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        NgModule({
            imports: [
                OrderHistoryModule,
                OrderDetailsModule,
                OrderCancellationModule,
                OrderReturnModule,
                ReturnRequestListModule,
                ReturnRequestDetailModule,
            ],
        })
    ], OrderModule);
    return OrderModule;
}());

var PaymentMethodsComponent = /** @class */ (function () {
    function PaymentMethodsComponent(userPaymentService, translation) {
        this.userPaymentService = userPaymentService;
        this.translation = translation;
        this.iconTypes = ICON_TYPE;
    }
    PaymentMethodsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paymentMethods$ = this.userPaymentService.getPaymentMethods().pipe(tap(function (paymentDetails) {
            // Set first payment method to DEFAULT if none is set
            if (paymentDetails.length > 0 &&
                !paymentDetails.find(function (paymentDetail) { return paymentDetail.defaultPayment; })) {
                _this.setDefaultPaymentMethod(paymentDetails[0]);
            }
        }));
        this.editCard = null;
        this.loading$ = this.userPaymentService.getPaymentMethodsLoading();
        this.userPaymentService.loadPaymentMethods();
    };
    PaymentMethodsComponent.prototype.getCardContent = function (_a) {
        var _this = this;
        var defaultPayment = _a.defaultPayment, accountHolderName = _a.accountHolderName, expiryMonth = _a.expiryMonth, expiryYear = _a.expiryYear, cardNumber = _a.cardNumber, cardType = _a.cardType;
        return combineLatest([
            this.translation.translate('paymentCard.setAsDefault'),
            this.translation.translate('common.delete'),
            this.translation.translate('paymentCard.deleteConfirmation'),
            this.translation.translate('paymentCard.expires', {
                month: expiryMonth,
                year: expiryYear,
            }),
            this.translation.translate('paymentCard.defaultPaymentMethod'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 5), textSetAsDefault = _b[0], textDelete = _b[1], textDeleteConfirmation = _b[2], textExpires = _b[3], textDefaultPaymentMethod = _b[4];
            var actions = [];
            if (!defaultPayment) {
                actions.push({ name: textSetAsDefault, event: 'default' });
            }
            actions.push({ name: textDelete, event: 'edit' });
            var card = {
                header: defaultPayment ? textDefaultPaymentMethod : null,
                textBold: accountHolderName,
                text: [cardNumber, textExpires],
                actions: actions,
                deleteMsg: textDeleteConfirmation,
                img: _this.getCardIcon(cardType.code),
            };
            return card;
        }));
    };
    PaymentMethodsComponent.prototype.deletePaymentMethod = function (paymentMethod) {
        this.userPaymentService.deletePaymentMethod(paymentMethod.id);
        this.editCard = null;
    };
    PaymentMethodsComponent.prototype.setEdit = function (paymentMethod) {
        this.editCard = paymentMethod.id;
    };
    PaymentMethodsComponent.prototype.cancelCard = function () {
        this.editCard = null;
    };
    PaymentMethodsComponent.prototype.setDefaultPaymentMethod = function (paymentMethod) {
        this.userPaymentService.setPaymentMethodAsDefault(paymentMethod.id);
    };
    PaymentMethodsComponent.prototype.getCardIcon = function (code) {
        var ccIcon;
        if (code === 'visa') {
            ccIcon = this.iconTypes.VISA;
        }
        else if (code === 'master' || code === 'mastercard_eurocard') {
            ccIcon = this.iconTypes.MASTER_CARD;
        }
        else if (code === 'diners') {
            ccIcon = this.iconTypes.DINERS_CLUB;
        }
        else if (code === 'amex') {
            ccIcon = this.iconTypes.AMEX;
        }
        else {
            ccIcon = this.iconTypes.CREDIT_CARD;
        }
        return ccIcon;
    };
    PaymentMethodsComponent.ctorParameters = function () { return [
        { type: UserPaymentService },
        { type: TranslationService }
    ]; };
    PaymentMethodsComponent = __decorate([
        Component({
            selector: 'cx-payment-methods',
            template: "<ng-container *ngIf=\"paymentMethods$ | async as paymentMethods\">\n  <div class=\"cx-payment container\">\n    <div class=\"cx-header\">\n      <h3>{{ 'paymentMethods.paymentMethods' | cxTranslate }}</h3>\n    </div>\n\n    <div class=\"cx-body\">\n      <div class=\"cx-msg\">\n        {{\n          'paymentMethods.newPaymentMethodsAreAddedDuringCheckout' | cxTranslate\n        }}\n      </div>\n      <div *ngIf=\"loading$ | async; else cards\"><cx-spinner></cx-spinner></div>\n      <ng-template #cards>\n        <div class=\"cx-existing row\">\n          <div\n            class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n            *ngFor=\"let paymentMethod of paymentMethods\"\n          >\n            <div class=\"cx-payment-inner\">\n              <cx-card\n                [border]=\"true\"\n                [fitToContainer]=\"true\"\n                [content]=\"getCardContent(paymentMethod) | async\"\n                (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n                (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n                (editCard)=\"setEdit(paymentMethod)\"\n                [editMode]=\"editCard === paymentMethod.id\"\n                (cancelCard)=\"cancelCard()\"\n              ></cx-card>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n"
        })
    ], PaymentMethodsComponent);
    return PaymentMethodsComponent;
}());

var PaymentMethodsModule = /** @class */ (function () {
    function PaymentMethodsModule() {
    }
    PaymentMethodsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                CardModule,
                SpinnerModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        AccountPaymentDetailsComponent: {
                            component: PaymentMethodsComponent,
                            guards: [AuthGuard],
                        },
                    },
                }),
                I18nModule,
            ],
            providers: [UserService],
            declarations: [PaymentMethodsComponent],
            exports: [PaymentMethodsComponent],
            entryComponents: [PaymentMethodsComponent],
        })
    ], PaymentMethodsModule);
    return PaymentMethodsModule;
}());

var ResetPasswordFormComponent = /** @class */ (function () {
    function ResetPasswordFormComponent(fb, routingService, userService) {
        this.fb = fb;
        this.routingService = routingService;
        this.userService = userService;
        this.subscription = new Subscription();
        this.submited = false;
        this.form = this.fb.group({
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            repassword: ['', [Validators.required]],
        }, { validator: this.matchPassword });
    }
    ResetPasswordFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription.add(this.routingService
            .getRouterState()
            .subscribe(function (state) { return (_this.token = state.state.queryParams['token']); }));
        this.subscription.add(this.userService.isPasswordReset().subscribe(function (reset) {
            if (reset) {
                _this.routingService.go({ cxRoute: 'login' });
            }
        }));
    };
    ResetPasswordFormComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ResetPasswordFormComponent.prototype.resetPassword = function () {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        var password = this.form.value['password'];
        this.userService.resetPassword(this.token, password);
    };
    ResetPasswordFormComponent.prototype.matchPassword = function (ac) {
        if (ac.get('password').value !== ac.get('repassword').value) {
            return { NotEqual: true };
        }
    };
    ResetPasswordFormComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: RoutingService },
        { type: UserService }
    ]; };
    ResetPasswordFormComponent = __decorate([
        Component({
            selector: 'cx-reset-password-form',
            template: "<form\n  (submit)=\"resetPassword()\"\n  [formGroup]=\"form\"\n  class=\"cx-reset-password-form-component\"\n>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.newPassword' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n      >\n        <span>{{ 'register.passwordMinRequirements' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.passwordMinRequirements' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n        type=\"password\"\n        name=\"confirmpassword\"\n        placeholder=\"{{ 'register.confirmPassword.placeholder' | cxTranslate }}\"\n        formControlName=\"repassword\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n      >\n        <span>{{ 'register.bothPasswordMustMatch' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-block btn-primary\" type=\"submit\">\n      {{ 'register.resetPassword' | cxTranslate }}\n    </button>\n  </div>\n</form>\n"
        })
    ], ResetPasswordFormComponent);
    return ResetPasswordFormComponent;
}());

var ResetPasswordModule = /** @class */ (function () {
    function ResetPasswordModule() {
    }
    ResetPasswordModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        ResetPasswordComponent: {
                            component: ResetPasswordFormComponent,
                            guards: [NotAuthGuard],
                        },
                    },
                }),
                FormsModule,
                ReactiveFormsModule,
                RouterModule,
                I18nModule,
            ],
            declarations: [ResetPasswordFormComponent],
            exports: [ResetPasswordFormComponent],
            entryComponents: [ResetPasswordFormComponent],
        })
    ], ResetPasswordModule);
    return ResetPasswordModule;
}());

var UpdateEmailFormComponent = /** @class */ (function () {
    function UpdateEmailFormComponent(fb) {
        this.fb = fb;
        this.submited = false;
        this.saveEmail = new EventEmitter();
        this.cancelEmail = new EventEmitter();
        this.form = this.fb.group({
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            confirmEmail: ['', [Validators.required]],
            password: ['', [Validators.required]],
        }, { validator: this.matchEmail });
    }
    UpdateEmailFormComponent.prototype.isEmailConfirmNotValid = function (formControlName) {
        return (this.form.hasError('NotEqual') &&
            (this.submited ||
                (this.form.get(formControlName).touched &&
                    this.form.get(formControlName).dirty)));
    };
    UpdateEmailFormComponent.prototype.isNotValid = function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submited);
    };
    UpdateEmailFormComponent.prototype.onSubmit = function () {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        var newUid = this.form.value.confirmEmail;
        var password = this.form.value.password;
        this.saveEmail.emit({ newUid: newUid, password: password });
    };
    UpdateEmailFormComponent.prototype.onCancel = function () {
        this.cancelEmail.emit();
    };
    UpdateEmailFormComponent.prototype.matchEmail = function (ac) {
        if (ac.get('email').value !== ac.get('confirmEmail').value) {
            return { NotEqual: true };
        }
    };
    UpdateEmailFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    __decorate([
        Output()
    ], UpdateEmailFormComponent.prototype, "saveEmail", void 0);
    __decorate([
        Output()
    ], UpdateEmailFormComponent.prototype, "cancelEmail", void 0);
    UpdateEmailFormComponent = __decorate([
        Component({
            selector: 'cx-update-email-form',
            template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.newEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"email\"\n          formControlName=\"email\"\n          placeholder=\"{{\n            'updateEmailForm.newEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('email')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('email')\">\n          <span>{{ 'updateEmailForm.enterValidEmail' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.confirmNewEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"confirmEmail\"\n          formControlName=\"confirmEmail\"\n          placeholder=\"{{\n            'updateEmailForm.confirmNewEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isEmailConfirmNotValid('confirmEmail')\"\n        />\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"isEmailConfirmNotValid('confirmEmail')\"\n        >\n          <span>{{ 'updateEmailForm.bothEmailMustMatch' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.password.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"password\"\n          name=\"password\"\n          formControlName=\"password\"\n          placeholder=\"{{\n            'updateEmailForm.password.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('password')\"\n          autocomplete=\"new-password\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('password')\">\n          <span>{{ 'updateEmailForm.pleaseInputPassword' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
        })
    ], UpdateEmailFormComponent);
    return UpdateEmailFormComponent;
}());

var UpdateEmailComponent = /** @class */ (function () {
    function UpdateEmailComponent(routingService, globalMessageService, userService, authService) {
        this.routingService = routingService;
        this.globalMessageService = globalMessageService;
        this.userService = userService;
        this.authService = authService;
        this.subscription = new Subscription();
    }
    UpdateEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.resetUpdateEmailResultState();
        this.subscription.add(this.userService
            .getUpdateEmailResultSuccess()
            .subscribe(function (success) { return _this.onSuccess(success); }));
        this.isLoading$ = this.userService.getUpdateEmailResultLoading();
    };
    UpdateEmailComponent.prototype.onCancel = function () {
        this.routingService.go({ cxRoute: 'home' });
    };
    UpdateEmailComponent.prototype.onSubmit = function (_a) {
        var newUid = _a.newUid, password = _a.password;
        this.newUid = newUid;
        this.userService.updateEmail(password, newUid);
    };
    UpdateEmailComponent.prototype.onSuccess = function (success) {
        if (success) {
            this.globalMessageService.add({
                key: 'updateEmailForm.emailUpdateSuccess',
                params: { newUid: this.newUid },
            }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            this.authService.logout();
            this.routingService.go({ cxRoute: 'login' }, null, {
                state: {
                    newUid: this.newUid,
                },
            });
        }
    };
    UpdateEmailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.userService.resetUpdateEmailResultState();
    };
    UpdateEmailComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: GlobalMessageService },
        { type: UserService },
        { type: AuthService }
    ]; };
    UpdateEmailComponent = __decorate([
        Component({
            selector: 'cx-update-email',
            template: "<ng-container>\n  <div *ngIf=\"isLoading$ | async; else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-email-form\n          class=\"col-md-6\"\n          (saveEmail)=\"onSubmit($event)\"\n          (cancelEmail)=\"onCancel()\"\n        >\n        </cx-update-email-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
        })
    ], UpdateEmailComponent);
    return UpdateEmailComponent;
}());

var UpdateEmailModule = /** @class */ (function () {
    function UpdateEmailModule() {
    }
    UpdateEmailModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        UpdateEmailComponent: {
                            component: UpdateEmailComponent,
                            guards: [AuthGuard],
                        },
                    },
                }),
                FormsModule,
                ReactiveFormsModule,
                SpinnerModule,
                I18nModule,
            ],
            declarations: [UpdateEmailFormComponent, UpdateEmailComponent],
            exports: [UpdateEmailComponent, UpdateEmailFormComponent],
            entryComponents: [UpdateEmailComponent],
        })
    ], UpdateEmailModule);
    return UpdateEmailModule;
}());

var UpdatePasswordFormComponent = /** @class */ (function () {
    function UpdatePasswordFormComponent(fb) {
        this.fb = fb;
        this.submitClicked = false;
        this.submited = new EventEmitter();
        this.cancelled = new EventEmitter();
    }
    UpdatePasswordFormComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            oldPassword: ['', [Validators.required]],
            newPassword: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            newPasswordConfirm: ['', [Validators.required]],
        }, { validator: this.matchPassword });
    };
    UpdatePasswordFormComponent.prototype.isNotValid = function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    };
    UpdatePasswordFormComponent.prototype.isPasswordConfirmNotValid = function () {
        return (this.form.hasError('NotEqual') &&
            (this.submitClicked ||
                (this.form.get('newPasswordConfirm').touched &&
                    this.form.get('newPasswordConfirm').dirty)));
    };
    UpdatePasswordFormComponent.prototype.onSubmit = function () {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submited.emit({
            oldPassword: this.form.value.oldPassword,
            newPassword: this.form.value.newPassword,
        });
    };
    UpdatePasswordFormComponent.prototype.onCancel = function () {
        this.cancelled.emit();
    };
    UpdatePasswordFormComponent.prototype.matchPassword = function (abstractControl) {
        if (abstractControl.get('newPassword').value !==
            abstractControl.get('newPasswordConfirm').value) {
            return { NotEqual: true };
        }
        return null;
    };
    UpdatePasswordFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    __decorate([
        Output()
    ], UpdatePasswordFormComponent.prototype, "submited", void 0);
    __decorate([
        Output()
    ], UpdatePasswordFormComponent.prototype, "cancelled", void 0);
    UpdatePasswordFormComponent = __decorate([
        Component({
            selector: 'cx-update-password-form',
            template: "<form\n  (ngSubmit)=\"onSubmit()\"\n  [formGroup]=\"form\"\n  class=\"cx-update-password-component \"\n>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.oldPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('oldPassword')\"\n          type=\"password\"\n          name=\"oldPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.oldPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"oldPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('oldPassword')\">\n          <span>{{\n            'updatePasswordForm.oldPasswordIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.newPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('newPassword')\"\n          type=\"password\"\n          name=\"newPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.newPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('newPassword')\">\n          <span>{{\n            'updatePasswordForm.passwordMinRequirements' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.confirmPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isPasswordConfirmNotValid()\"\n          type=\"password\"\n          name=\"newPasswordConfirm\"\n          placeholder=\"{{\n            'updatePasswordForm.confirmPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPasswordConfirm\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isPasswordConfirmNotValid()\">\n          <span>{{\n            'updatePasswordForm.bothPasswordMustMatch' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
        })
    ], UpdatePasswordFormComponent);
    return UpdatePasswordFormComponent;
}());

var UpdatePasswordComponent = /** @class */ (function () {
    function UpdatePasswordComponent(routingService, userService, globalMessageService) {
        this.routingService = routingService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.subscription = new Subscription();
    }
    UpdatePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.resetUpdatePasswordProcessState();
        this.loading$ = this.userService.getUpdatePasswordResultLoading();
        this.subscription.add(this.userService
            .getUpdatePasswordResultSuccess()
            .subscribe(function (success) { return _this.onSuccess(success); }));
    };
    UpdatePasswordComponent.prototype.onSuccess = function (success) {
        if (success) {
            this.globalMessageService.add({ key: 'updatePasswordForm.passwordUpdateSuccess' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            this.routingService.go({ cxRoute: 'home' });
        }
    };
    UpdatePasswordComponent.prototype.onCancel = function () {
        this.routingService.go({ cxRoute: 'home' });
    };
    UpdatePasswordComponent.prototype.onSubmit = function (_a) {
        var oldPassword = _a.oldPassword, newPassword = _a.newPassword;
        this.userService.updatePassword(oldPassword, newPassword);
    };
    UpdatePasswordComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.userService.resetUpdatePasswordProcessState();
    };
    UpdatePasswordComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: UserService },
        { type: GlobalMessageService }
    ]; };
    UpdatePasswordComponent = __decorate([
        Component({
            selector: 'cx-update-password',
            template: "<ng-container>\n  <div *ngIf=\"loading$ | async; else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-password-form\n          class=\"col-md-6\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-password-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
        })
    ], UpdatePasswordComponent);
    return UpdatePasswordComponent;
}());

var UpdatePasswordModule = /** @class */ (function () {
    function UpdatePasswordModule() {
    }
    UpdatePasswordModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        UpdatePasswordComponent: {
                            component: UpdatePasswordComponent,
                            guards: [AuthGuard],
                        },
                    },
                }),
                SpinnerModule,
                I18nModule,
            ],
            declarations: [UpdatePasswordComponent, UpdatePasswordFormComponent],
            exports: [UpdatePasswordComponent, UpdatePasswordFormComponent],
            entryComponents: [UpdatePasswordComponent],
        })
    ], UpdatePasswordModule);
    return UpdatePasswordModule;
}());

var UpdateProfileFormComponent = /** @class */ (function () {
    function UpdateProfileFormComponent(fb) {
        this.fb = fb;
        this.submited = new EventEmitter();
        this.cancelled = new EventEmitter();
        this.form = this.fb.group({
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
        });
        this.submitClicked = false;
    }
    UpdateProfileFormComponent.prototype.ngOnInit = function () {
        if (this.user) {
            this.form.patchValue(this.user);
        }
    };
    UpdateProfileFormComponent.prototype.isNotValid = function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    };
    UpdateProfileFormComponent.prototype.onSubmit = function () {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submited.emit({
            userUpdates: __assign({}, this.form.value),
        });
    };
    UpdateProfileFormComponent.prototype.onCancel = function () {
        this.cancelled.emit();
    };
    UpdateProfileFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    __decorate([
        Input()
    ], UpdateProfileFormComponent.prototype, "user", void 0);
    __decorate([
        Input()
    ], UpdateProfileFormComponent.prototype, "titles", void 0);
    __decorate([
        Output()
    ], UpdateProfileFormComponent.prototype, "submited", void 0);
    __decorate([
        Output()
    ], UpdateProfileFormComponent.prototype, "cancelled", void 0);
    UpdateProfileFormComponent = __decorate([
        Component({
            selector: 'cx-update-profile-form',
            template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.title' | cxTranslate\n        }}</span>\n        <select formControlName=\"titleCode\" class=\"form-control\">\n          <option value=\"\">{{ 'updateProfileForm.none' | cxTranslate }}</option>\n          <option *ngFor=\"let title of titles\" [value]=\"title.code\">{{\n            title.name\n          }}</option>\n        </select>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.firstName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"firstName\"\n          placeholder=\"{{\n            'updateProfileForm.firstName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"firstName\"\n          [class.is-invalid]=\"isNotValid('firstName')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('firstName')\">\n          <span>{{\n            'updateProfileForm.firstNameIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.lastName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"lastName\"\n          placeholder=\"{{\n            'updateProfileForm.lastName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"lastName\"\n          [class.is-invalid]=\"isNotValid('lastName')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('lastName')\">\n          <span>{{\n            'updateProfileForm.lastNameIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
        })
    ], UpdateProfileFormComponent);
    return UpdateProfileFormComponent;
}());

var UpdateProfileComponent = /** @class */ (function () {
    function UpdateProfileComponent(routingService, userService, globalMessageService) {
        this.routingService = routingService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.subscription = new Subscription();
    }
    UpdateProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // reset the previous form processing state
        this.userService.resetUpdatePersonalDetailsProcessingState();
        this.user$ = this.userService.get();
        this.titles$ = this.userService.getTitles().pipe(tap(function (titles) {
            if (Object.keys(titles).length === 0) {
                _this.userService.loadTitles();
            }
        }));
        this.loading$ = this.userService.getUpdatePersonalDetailsResultLoading();
        this.subscription.add(this.userService
            .getUpdatePersonalDetailsResultSuccess()
            .subscribe(function (success) { return _this.onSuccess(success); }));
    };
    UpdateProfileComponent.prototype.onSuccess = function (success) {
        if (success) {
            this.globalMessageService.add({ key: 'updateProfileForm.profileUpdateSuccess' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            this.routingService.go({ cxRoute: 'home' });
        }
    };
    UpdateProfileComponent.prototype.onCancel = function () {
        this.routingService.go({ cxRoute: 'home' });
    };
    UpdateProfileComponent.prototype.onSubmit = function (_a) {
        var userUpdates = _a.userUpdates;
        this.userService.updatePersonalDetails(userUpdates);
    };
    UpdateProfileComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        // clean up the state
        this.userService.resetUpdatePersonalDetailsProcessingState();
    };
    UpdateProfileComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: UserService },
        { type: GlobalMessageService }
    ]; };
    UpdateProfileComponent = __decorate([
        Component({
            selector: 'cx-update-profile',
            template: "<ng-container>\n  <div *ngIf=\"loading$ | async; else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-profile-form\n          *ngIf=\"(user$ | async)?.uid\"\n          class=\"col-md-6\"\n          [user]=\"user$ | async\"\n          [titles]=\"titles$ | async\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-profile-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
        })
    ], UpdateProfileComponent);
    return UpdateProfileComponent;
}());

var UpdateProfileModule = /** @class */ (function () {
    function UpdateProfileModule() {
    }
    UpdateProfileModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        UpdateProfileComponent: {
                            component: UpdateProfileComponent,
                            guards: [AuthGuard],
                        },
                    },
                }),
                FormsModule,
                ReactiveFormsModule,
                SpinnerModule,
                I18nModule,
            ],
            declarations: [UpdateProfileComponent, UpdateProfileFormComponent],
            exports: [UpdateProfileComponent, UpdateProfileFormComponent],
            entryComponents: [UpdateProfileComponent],
        })
    ], UpdateProfileModule);
    return UpdateProfileModule;
}());

var MyCouponsComponentService = /** @class */ (function () {
    function MyCouponsComponentService(routingService, translation) {
        this.routingService = routingService;
        this.translation = translation;
        this.RELEVANCE = ':relevance';
        this.CUSTOMER_COUPON_CODE = ':customerCouponCode:';
    }
    MyCouponsComponentService.prototype.launchSearchPage = function (coupon) {
        this.routingService.go({
            cxRoute: 'search',
            params: { query: this.buildSearchParam(coupon) },
        }, { couponcode: coupon.couponId });
    };
    MyCouponsComponentService.prototype.buildSearchParam = function (coupon) {
        return coupon.allProductsApplicable
            ? this.RELEVANCE
            : this.RELEVANCE + this.CUSTOMER_COUPON_CODE + coupon.couponId;
    };
    MyCouponsComponentService.prototype.getSortLabels = function () {
        return combineLatest([
            this.translation.translate('myCoupons.startDateAsc'),
            this.translation.translate('myCoupons.startDateDesc'),
            this.translation.translate('myCoupons.endDateAsc'),
            this.translation.translate('myCoupons.endDateDesc'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 4), textByStartDateAsc = _b[0], textByStartDateDesc = _b[1], textByEndDateAsc = _b[2], textByEndDateDesc = _b[3];
            return {
                byStartDateAsc: textByStartDateAsc,
                byStartDateDesc: textByStartDateDesc,
                byEndDateAsc: textByEndDateAsc,
                byEndDateDesc: textByEndDateDesc,
            };
        }));
    };
    MyCouponsComponentService.ctorParameters = function () { return [
        { type: RoutingService },
        { type: TranslationService }
    ]; };
    MyCouponsComponentService.ɵprov = ɵɵdefineInjectable({ factory: function MyCouponsComponentService_Factory() { return new MyCouponsComponentService(ɵɵinject(RoutingService), ɵɵinject(TranslationService)); }, token: MyCouponsComponentService, providedIn: "root" });
    MyCouponsComponentService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], MyCouponsComponentService);
    return MyCouponsComponentService;
}());

var MyCouponsComponent = /** @class */ (function () {
    function MyCouponsComponent(couponService, myCouponsComponentService) {
        this.couponService = couponService;
        this.myCouponsComponentService = myCouponsComponentService;
        this.iconTypes = ICON_TYPE;
        this.subscriptions = new Subscription();
        this.PAGE_SIZE = 10;
        this.sortMapping = {
            byStartDateAsc: 'startDate:asc',
            byStartDateDesc: 'startDate:desc',
            byEndDateAsc: 'endDate:asc',
            byEndDateDesc: 'endDate:desc',
        };
        this.sort = 'byStartDateAsc';
        this.sortOptions = [
            {
                code: 'byStartDateAsc',
                selected: false,
            },
            {
                code: 'byStartDateDesc',
                selected: false,
            },
            {
                code: 'byEndDateAsc',
                selected: false,
            },
            {
                code: 'byEndDateDesc',
                selected: false,
            },
        ];
    }
    MyCouponsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.couponService.loadCustomerCoupons(this.PAGE_SIZE);
        this.couponResult$ = this.couponService
            .getCustomerCoupons(this.PAGE_SIZE)
            .pipe(tap(function (coupons) {
            return (_this.pagination = {
                currentPage: coupons.pagination.page,
                pageSize: coupons.pagination.count,
                totalPages: coupons.pagination.totalPages,
                totalResults: coupons.pagination.totalCount,
                sort: _this.sort,
            });
        }));
        this.couponsLoading$ = this.couponService.getCustomerCouponsLoading();
        this.couponSubscriptionLoading$ = combineLatest([
            this.couponService.getSubscribeCustomerCouponResultLoading(),
            this.couponService.getUnsubscribeCustomerCouponResultLoading(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), subscribing = _b[0], unsubscribing = _b[1];
            return subscribing || unsubscribing;
        }));
        this.sortLabels = this.myCouponsComponentService.getSortLabels();
        this.subscriptions
            .add(this.couponService
            .getSubscribeCustomerCouponResultError()
            .subscribe(function (error) {
            _this.subscriptionFail(error);
        }))
            .add(this.couponService
            .getUnsubscribeCustomerCouponResultError()
            .subscribe(function (error) {
            _this.subscriptionFail(error);
        }));
    };
    MyCouponsComponent.prototype.subscriptionFail = function (error) {
        if (error) {
            this.couponService.loadCustomerCoupons(this.PAGE_SIZE);
        }
    };
    MyCouponsComponent.prototype.sortChange = function (sort) {
        this.sort = sort;
        this.couponService.loadCustomerCoupons(this.PAGE_SIZE, this.pagination.currentPage, this.sortMapping[sort]);
    };
    MyCouponsComponent.prototype.pageChange = function (page) {
        this.couponService.loadCustomerCoupons(this.PAGE_SIZE, page, this.sortMapping[this.sort]);
    };
    MyCouponsComponent.prototype.notificationChange = function (_a) {
        var couponId = _a.couponId, notification = _a.notification;
        if (notification) {
            this.couponService.subscribeCustomerCoupon(couponId);
        }
        else {
            this.couponService.unsubscribeCustomerCoupon(couponId);
        }
    };
    MyCouponsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    MyCouponsComponent.ctorParameters = function () { return [
        { type: CustomerCouponService },
        { type: MyCouponsComponentService }
    ]; };
    MyCouponsComponent = __decorate([
        Component({
            selector: 'cx-my-coupons',
            template: "<div class=\"cx-section\">\n  <ng-container *ngIf=\"!(couponsLoading$ | async); else loading\">\n    <ng-container *ngIf=\"couponResult$ | async as couponResult\">\n      <div class=\"cx-my-coupons-header\">\n        <h3>{{ 'myCoupons.myCoupons' | cxTranslate }}</h3>\n      </div>\n\n      <ng-container\n        *ngIf=\"couponResult.pagination.totalCount > 0; else noCoupons\"\n      >\n        <div class=\"cx-my-coupons-sort top row\">\n          <div\n            class=\"cx-my-coupons-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"sortOptions\"\n              [sortLabels]=\"sortLabels | async\"\n              (sortListEvent)=\"sortChange($event)\"\n              [selectedOption]=\"sort\"\n            >\n            </cx-sorting>\n          </div>\n          <div class=\"cx-my-coupons-pagination cx-mycoupon-thead-mobile\">\n            <cx-pagination\n              [pagination]=\"pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n\n        <div class=\"row cx-coupon-deck\">\n          <div\n            *ngFor=\"let coupon of couponResult.coupons\"\n            class=\"col-md-6 cx-coupon-card\"\n          >\n            <cx-coupon-card\n              [coupon]=\"coupon\"\n              [couponSubscriptionLoading$]=\"couponSubscriptionLoading$\"\n              (notificationChanged)=\"notificationChange($event)\"\n            ></cx-coupon-card>\n          </div>\n        </div>\n\n        <div class=\"cx-my-coupons-sort bottom row\">\n          <div\n            class=\"cx-my-coupons-form-group form-group cx-mycoupon-thead-mobile col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"sortOptions\"\n              [sortLabels]=\"sortLabels | async\"\n              (sortListEvent)=\"sortChange($event)\"\n              [selectedOption]=\"sort\"\n              placeholder=\"{{ 'myCoupons.sortByMostRecent' | cxTranslate }}\"\n            >\n            </cx-sorting>\n          </div>\n          <div class=\"cx-my-coupons-pagination\">\n            <cx-pagination\n              [pagination]=\"pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <div class=\"cx-my-coupons-notes\">\n          <span>\n            <cx-icon [type]=\"iconTypes.INFO\"></cx-icon>\n            {{ 'myCoupons.notesPreffix' | cxTranslate\n            }}<a [routerLink]=\"['/my-account/notification-preference']\">{{\n              'myCoupons.notesLink' | cxTranslate\n            }}</a\n            >{{ 'myCoupons.notesSuffix' | cxTranslate }}</span\n          >\n        </div>\n      </ng-container>\n    </ng-container>\n\n    <ng-template #noCoupons>\n      <section>\n        <p class=\"cx-section-msg\">\n          {{ 'myCoupons.noCouponsMessage' | cxTranslate }}\n        </p>\n      </section>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"col-md-12 cx-coupon-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</div>\n"
        })
    ], MyCouponsComponent);
    return MyCouponsComponent;
}());

var CouponDialogComponent = /** @class */ (function () {
    function CouponDialogComponent(modalService) {
        this.modalService = modalService;
        this.iconTypes = ICON_TYPE;
    }
    CouponDialogComponent.prototype.dismissModal = function (reason) {
        this.modalService.dismissActiveModal(reason);
    };
    CouponDialogComponent.ctorParameters = function () { return [
        { type: ModalService }
    ]; };
    __decorate([
        ViewChild('dialog', { read: ElementRef })
    ], CouponDialogComponent.prototype, "dialog", void 0);
    CouponDialogComponent = __decorate([
        Component({
            selector: 'cx-coupon-dialog',
            template: "<div #dialog>\n  <!-- Modal Header -->\n\n  <div class=\"cx-dialog-header modal-header\">\n    <div class=\"cx-dialog-title modal-title\">\n      {{ 'myCoupons.dialogTitle' | cxTranslate }}\n    </div>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"dismissModal('Cross click')\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n      </span>\n    </button>\n  </div>\n  <!-- Modal Body -->\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"cx-dialog-row\">\n      <div class=\"cx-dialog-item col-sm-12 col-md-12\">\n        <div class=\"cx-coupon-card-head\">\n          <span class=\"card-label-bold cx-coupon-card-id\">{{\n            coupon?.couponId\n          }}</span>\n          <span>: {{ coupon?.name }}</span>\n        </div>\n        <div class=\"cx-coupon-description\">{{ coupon?.description }}</div>\n\n        <div class=\"cx-coupon-dialog-date\">\n          <p>{{ 'myCoupons.effectiveTitle' | cxTranslate }}</p>\n          <div class=\"cx-coupon-date\">\n            {{ coupon?.startDate | cxDate: 'medium' }} -\n            {{ coupon?.endDate | cxDate: 'medium' }}\n          </div>\n        </div>\n\n        <div class=\"cx-coupon-dialog-status\">\n          <p>{{ 'myCoupons.status' | cxTranslate }}</p>\n          <div class=\"cx-coupon-status {{ coupon?.status | lowercase }}\">\n            {{ 'myCoupons.' + coupon?.status | cxTranslate }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
        })
    ], CouponDialogComponent);
    return CouponDialogComponent;
}());

var CouponCardComponent = /** @class */ (function () {
    function CouponCardComponent(modalService, myCouponsComponentService) {
        this.modalService = modalService;
        this.myCouponsComponentService = myCouponsComponentService;
        this.notificationChanged = new EventEmitter();
    }
    CouponCardComponent.prototype.onSubscriptionChange = function () {
        this.notificationChanged.emit({
            couponId: this.coupon.couponId,
            notification: !this.coupon.notificationOn,
        });
    };
    CouponCardComponent.prototype.readMore = function () {
        var modalInstance;
        this.modalRef = this.modalService.open(CouponDialogComponent, {
            centered: true,
            size: 'lg',
        });
        modalInstance = this.modalRef.componentInstance;
        modalInstance.coupon = this.coupon;
    };
    CouponCardComponent.prototype.findProducts = function () {
        this.myCouponsComponentService.launchSearchPage(this.coupon);
    };
    CouponCardComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: MyCouponsComponentService }
    ]; };
    __decorate([
        Input()
    ], CouponCardComponent.prototype, "coupon", void 0);
    __decorate([
        Input()
    ], CouponCardComponent.prototype, "couponSubscriptionLoading$", void 0);
    __decorate([
        Output()
    ], CouponCardComponent.prototype, "notificationChanged", void 0);
    CouponCardComponent = __decorate([
        Component({
            selector: 'cx-coupon-card',
            template: "<div class=\"card\">\n  <div class=\"card-body cx-card-body\">\n    <div class=\"cx-coupon-data\">\n      <div class=\"cx-coupon-card-row top\">\n        <div class=\"cx-coupon-card-head\">\n          <span class=\"card-label-bold cx-coupon-card-id\">{{\n            coupon?.couponId\n          }}</span>\n          <span>: {{ coupon?.name }}</span>\n        </div>\n\n        <div class=\"cx-coupon-status {{ coupon?.status | lowercase }}\">\n          {{ 'myCoupons.' + coupon?.status | cxTranslate }}\n        </div>\n      </div>\n\n      <div class=\"cx-coupon-card-date\">\n        <p>{{ 'myCoupons.effectiveTitle' | cxTranslate }}</p>\n        <div class=\"cx-coupon-date\">\n          <div class=\"cx-coupon-date-start\">\n            {{ coupon?.startDate | cxDate: 'medium' }} -&nbsp;\n          </div>\n          <div class=\"cx-coupon-date-end\">\n            {{ coupon?.endDate | cxDate: 'medium' }}\n          </div>\n        </div>\n      </div>\n\n      <a (click)=\"readMore()\" class=\"cx-card-read-more\">{{\n        'myCoupons.readMore' | cxTranslate\n      }}</a>\n\n      <div class=\"cx-coupon-card-row bottom\">\n        <div class=\"cx-coupon-notification form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              [checked]=\"coupon?.notificationOn\"\n              [class.disabled]=\"couponSubscriptionLoading$ | async\"\n              [disabled]=\"couponSubscriptionLoading$ | async\"\n              (change)=\"onSubscriptionChange()\"\n            />\n            <span class=\"form-check-label\">\n              {{ 'myCoupons.notification' | cxTranslate }}\n            </span>\n          </label>\n        </div>\n\n        <div class=\"cx-coupon-find-product col-lg-6 col-md-12 col-sm-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"findProducts()\">\n            {{ 'myCoupons.findProducts' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
        })
    ], CouponCardComponent);
    return CouponCardComponent;
}());

var CouponClaimComponent = /** @class */ (function () {
    function CouponClaimComponent(couponService, routingService, messageService) {
        this.couponService = couponService;
        this.routingService = routingService;
        this.messageService = messageService;
    }
    CouponClaimComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routingService
            .getRouterState()
            .subscribe(function (k) {
            var couponCode = k.state.params.couponCode;
            if (couponCode) {
                _this.couponService.claimCustomerCoupon(couponCode);
                _this.subscription = _this.couponService
                    .getClaimCustomerCouponResultSuccess()
                    .subscribe(function (success) {
                    if (success) {
                        _this.messageService.add({ key: 'myCoupons.claimCustomerCoupon' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                    }
                    _this.routingService.go({ cxRoute: 'coupons' });
                });
            }
            else {
                _this.routingService.go({ cxRoute: 'notFound' });
            }
        })
            .unsubscribe();
    };
    CouponClaimComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    CouponClaimComponent.ctorParameters = function () { return [
        { type: CustomerCouponService },
        { type: RoutingService },
        { type: GlobalMessageService }
    ]; };
    CouponClaimComponent = __decorate([
        Component({
            template: "",
            selector: 'cx-coupon-claim'
        })
    ], CouponClaimComponent);
    return CouponClaimComponent;
}());

var ɵ0$8 = { cxRoute: 'couponClaim' };
var MyCouponsModule = /** @class */ (function () {
    function MyCouponsModule() {
    }
    MyCouponsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                CardModule,
                SpinnerModule,
                I18nModule,
                RouterModule,
                UrlModule,
                IconModule,
                ListNavigationModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        MyCouponsComponent: {
                            component: MyCouponsComponent,
                            guards: [AuthGuard],
                        },
                        CouponClaimComponent: {
                            component: CouponClaimComponent,
                            guards: [AuthGuard],
                        },
                    },
                }),
                RouterModule.forChild([
                    {
                        path: null,
                        canActivate: [AuthGuard, CmsPageGuard],
                        component: PageLayoutComponent,
                        data: ɵ0$8,
                    },
                ]),
            ],
            declarations: [
                MyCouponsComponent,
                CouponCardComponent,
                CouponDialogComponent,
                CouponClaimComponent,
            ],
            exports: [MyCouponsComponent, CouponClaimComponent],
            entryComponents: [
                MyCouponsComponent,
                CouponDialogComponent,
                CouponClaimComponent,
            ],
        })
    ], MyCouponsModule);
    return MyCouponsModule;
}());

var NotificationPreferenceComponent = /** @class */ (function () {
    function NotificationPreferenceComponent(notificationPreferenceService) {
        this.notificationPreferenceService = notificationPreferenceService;
        this.preferences = [];
    }
    NotificationPreferenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationPreferenceService.resetNotificationPreferences();
        this.preferences$ = this.notificationPreferenceService
            .getPreferences()
            .pipe(tap(function (preferences) { return (_this.preferences = preferences); }));
        this.notificationPreferenceService.loadPreferences();
        this.isLoading$ = combineLatest([
            this.notificationPreferenceService.getPreferencesLoading(),
            this.notificationPreferenceService.getUpdatePreferencesResultLoading(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), prefsLoading = _b[0], updateLoading = _b[1];
            return prefsLoading || updateLoading;
        }));
    };
    NotificationPreferenceComponent.prototype.updatePreference = function (preference) {
        var updatedPreferences = [];
        this.preferences.forEach(function (p) {
            if (p.channel === preference.channel) {
                updatedPreferences.push(__assign(__assign({}, p), { enabled: !p.enabled }));
            }
            else {
                updatedPreferences.push(p);
            }
        });
        this.notificationPreferenceService.updatePreferences(updatedPreferences);
    };
    NotificationPreferenceComponent.ctorParameters = function () { return [
        { type: UserNotificationPreferenceService }
    ]; };
    NotificationPreferenceComponent = __decorate([
        Component({
            selector: 'cx-notification-preference',
            template: "<ng-container *ngIf=\"preferences$ | async as preferences\">\n  <div *ngIf=\"preferences.length > 0; else loading\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <div class=\"pref-header\">\n          {{ 'notificationPreference.message' | cxTranslate }}\n        </div>\n        <div class=\"form-check cx-notification-channels\">\n          <ng-container *ngFor=\"let preference of preferences\">\n            <label *ngIf=\"preference.visible\" class=\"pref-channel\">\n              <input\n                class=\"form-check-input cx-np-checkbox\"\n                role=\"checkbox\"\n                type=\"checkbox\"\n                [checked]=\"preference.enabled\"\n                (change)=\"updatePreference(preference)\"\n                [disabled]=\"isLoading$ | async\"\n              />\n              <span class=\"form-check-label\">\n                {{\n                  'notificationPreference.' + preference.channel | cxTranslate\n                }}\n                {{ preference.value }}\n              </span>\n            </label>\n          </ng-container>\n        </div>\n        <label class=\"pref-note\"\n          ><strong>{{ 'notificationPreference.note' | cxTranslate }}</strong\n          >{{ 'notificationPreference.noteMessage' | cxTranslate }}\n        </label>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], NotificationPreferenceComponent);
    return NotificationPreferenceComponent;
}());

var NotificationPreferenceModule = /** @class */ (function () {
    function NotificationPreferenceModule() {
    }
    NotificationPreferenceModule = __decorate([
        NgModule({
            declarations: [NotificationPreferenceComponent],
            imports: [
                CommonModule,
                SpinnerModule,
                I18nModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        NotificationPreferenceComponent: {
                            component: NotificationPreferenceComponent,
                            guards: [AuthGuard],
                        },
                    },
                }),
            ],
            exports: [NotificationPreferenceComponent],
            entryComponents: [NotificationPreferenceComponent],
        })
    ], NotificationPreferenceModule);
    return NotificationPreferenceModule;
}());

var MyInterestsComponent = /** @class */ (function () {
    function MyInterestsComponent(productInterestService, translationService, productService) {
        this.productInterestService = productInterestService;
        this.translationService = translationService;
        this.productService = productService;
        this.DEFAULT_PAGE_SIZE = 10;
        this.sortMapping = {
            byNameAsc: 'name:asc',
            byNameDesc: 'name:desc',
        };
        this.sort = 'byNameAsc';
        this.sortOptions = [
            {
                code: 'byNameAsc',
                selected: false,
            },
            {
                code: 'byNameDesc',
                selected: false,
            },
        ];
    }
    MyInterestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interests$ = this.productInterestService
            .getAndLoadProductInterests(this.DEFAULT_PAGE_SIZE)
            .pipe(tap(function (interests) {
            return (_this.pagination = {
                currentPage: interests.pagination.page,
                pageSize: interests.pagination.count,
                totalPages: interests.pagination.totalPages,
                totalResults: interests.pagination.totalCount,
                sort: 'byNameAsc',
            });
        }), map(function (interest) { return (__assign(__assign({}, interest), { results: interest.results
                ? interest.results.map(function (result) { return (__assign(__assign({}, result), { product$: _this.getProduct(result) })); })
                : interest.results })); }));
        this.getInterestsloading$ = this.productInterestService.getProdutInterestsLoading();
        this.isRemoveDisabled$ = combineLatest([
            this.getInterestsloading$,
            this.productInterestService.getRemoveProdutInterestLoading(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), getLoading = _b[0], removeLoading = _b[1];
            return getLoading || removeLoading;
        }));
        this.sortLabels = this.getSortLabels();
    };
    MyInterestsComponent.prototype.getSortLabels = function () {
        return combineLatest([
            this.translationService.translate('myInterests.sorting.byNameAsc'),
            this.translationService.translate('myInterests.sorting.byNameDesc'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), asc = _b[0], desc = _b[1];
            return {
                byNameAsc: asc,
                byNameDesc: desc,
            };
        }));
    };
    MyInterestsComponent.prototype.getProduct = function (interest) {
        return this.productService.get(interest.product.code, ProductScope.DETAILS);
    };
    MyInterestsComponent.prototype.removeInterest = function (relation) {
        this.productInterestService.removeProdutInterest({
            product: relation.product,
            productInterestEntry: relation.productInterestEntry,
        });
    };
    MyInterestsComponent.prototype.sortChange = function (sort) {
        this.sort = sort;
        this.productInterestService.loadProductInterests(this.DEFAULT_PAGE_SIZE, 0, this.sortMapping[sort]);
    };
    MyInterestsComponent.prototype.pageChange = function (page) {
        this.productInterestService.loadProductInterests(this.DEFAULT_PAGE_SIZE, page, this.sortMapping[this.sort]);
    };
    MyInterestsComponent.prototype.ngOnDestroy = function () {
        this.productInterestService.clearProductInterests();
        this.productInterestService.resetRemoveInterestState();
    };
    MyInterestsComponent.ctorParameters = function () { return [
        { type: UserInterestsService },
        { type: TranslationService },
        { type: ProductService }
    ]; };
    MyInterestsComponent = __decorate([
        Component({
            selector: 'cx-my-interests',
            template: "<div *ngIf=\"interests$ | async as interests\" class=\"container\">\n  <div class=\"cx-product-interests-title h3\">\n    <h3>{{ 'myInterests.header' | cxTranslate }}</h3>\n  </div>\n  <div\n    class=\"cx-product-interests-body\"\n    *ngIf=\"!(getInterestsloading$ | async); else loading\"\n  >\n    <ng-container *ngIf=\"interests.pagination.totalCount > 0; else noInterest\">\n      <div class=\"cx-product-interests-sort top row\">\n        <div\n          class=\"cx-product-interests-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n        >\n          <cx-sorting\n            [sortOptions]=\"sortOptions\"\n            [sortLabels]=\"sortLabels | async\"\n            (sortListEvent)=\"sortChange($event)\"\n            [selectedOption]=\"sort\"\n            placeholder=\"{{ 'myInterests.sortByMostRecent' | cxTranslate }}\"\n          >\n          </cx-sorting>\n        </div>\n        <div\n          class=\"cx-product-interests-pagination cx-product-interests-thead-mobile\"\n        >\n          <cx-pagination\n            [pagination]=\"pagination\"\n            (viewPageEvent)=\"pageChange($event)\"\n          ></cx-pagination>\n        </div>\n      </div>\n      <table class=\"table cx-product-interests-table\">\n        <thead class=\"cx-product-interests-thead-mobile\">\n          <th scope=\"col\">\n            {{ 'myInterests.item' | cxTranslate }}\n          </th>\n          <th scope=\"col\"></th>\n          <th scope=\"col\">\n            {{ 'myInterests.price' | cxTranslate }}\n          </th>\n          <th scope=\"col\">\n            {{ 'myInterests.notifications' | cxTranslate }}\n          </th>\n          <th scope=\"col\"></th>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let interest of interests.results\"\n            class=\"cx-product-interests-product-item\"\n          >\n            <ng-container *ngIf=\"interest.product$ | async as product\">\n              <td>\n                <div class=\"cx-product-interests-label\">\n                  <a\n                    class=\"cx-product-interests-product-image-link\"\n                    tabindex=\"-1\"\n                    [routerLink]=\"\n                      { cxRoute: 'product', params: product } | cxUrl\n                    \"\n                  >\n                    <cx-media\n                      [container]=\"product.images?.PRIMARY\"\n                      format=\"thumbnail\"\n                    ></cx-media>\n                  </a>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-info col-10\">\n                  <div class=\"cx-info-container row \">\n                    <div>\n                      <div *ngIf=\"product.name\" class=\"cx-name\">\n                        <a\n                          class=\"cx-link cx-product-interests-product-code-link\"\n                          [routerLink]=\"\n                            { cxRoute: 'product', params: product } | cxUrl\n                          \"\n                        >\n                          {{ product.name }}\n                        </a>\n                      </div>\n                      <div *ngIf=\"product.code\" class=\"cx-code\">\n                        <span>{{\n                          'myInterests.productId'\n                            | cxTranslate: { code: product.code }\n                        }}</span>\n                      </div>\n\n                      <ng-container\n                        *ngFor=\"let baseOptions of product.baseOptions\"\n                      >\n                        <div\n                          *ngFor=\"\n                            let variant of baseOptions.selected\n                              ?.variantOptionQualifiers\n                          \"\n                          class=\"cx-property\"\n                        >\n                          <div\n                            class=\"cx-label cx-product-interests-variant-name\"\n                          >\n                            {{ variant.name }}\n                          </div>\n                          <div\n                            class=\"cx-value cx-product-interests-variant-value\"\n                          >\n                            {{ variant.value }}\n                          </div>\n                        </div>\n                      </ng-container>\n                      <div\n                        class=\"cx-property\"\n                        *ngIf=\"product.stock.stockLevelStatus === 'outOfStock'\"\n                      >\n                        <div\n                          class=\"cx-label cx-product-interests-product-stock\"\n                        >\n                          {{ 'myInterests.outOfStock' | cxTranslate }}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-product-interests-product-price\">\n                  <div class=\"d-md-none cx-product-interests-label\">\n                    {{ 'myInterests.price' | cxTranslate }}\n                  </div>\n                  <span>{{ product.price.formattedValue }}</span>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-product-interests-subscriptions\">\n                  <div class=\"d-md-none cx-product-interests-label\">\n                    {{ 'myInterests.notifications' | cxTranslate }}\n                  </div>\n                  <div\n                    class=\"cx-product-interests-notification\"\n                    *ngFor=\"let interestEntry of interest.productInterestEntry\"\n                  >\n                    <span class=\"cx-product-interests-type\">\n                      {{\n                        'myInterests.' + interestEntry.interestType\n                          | cxTranslate\n                      }}\n                    </span>\n                    <span class=\"cx-product-interests-expiration-date\">\n                      {{\n                        'myInterests.expirationDate'\n                          | cxTranslate\n                            : {\n                                expirationDate:\n                                  interestEntry.expirationDate | date\n                              }\n                      }}\n                    </span>\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-actions cx-product-interests-remove-button\">\n                  <button\n                    type=\"button\"\n                    class=\"link cx-product-interests-remove-btn\"\n                    [disabled]=\"isRemoveDisabled$ | async\"\n                    (click)=\"removeInterest(interest)\"\n                  >\n                    {{ 'myInterests.remove' | cxTranslate }}\n                  </button>\n                </div>\n              </td>\n            </ng-container>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"cx-product-interests-sort bottom row\">\n        <div\n          class=\"cx-product-interests-form-group cx-product-interests-thead-mobile form-group col-sm-12 col-md-4 col-lg-4\"\n        >\n          <cx-sorting\n            [sortOptions]=\"sortOptions\"\n            [sortLabels]=\"sortLabels | async\"\n            (sortListEvent)=\"sortChange($event)\"\n            [selectedOption]=\"sort\"\n            placeholder=\"{{ 'myInterests.sortByMostRecent' | cxTranslate }}\"\n          >\n          </cx-sorting>\n        </div>\n        <div class=\"cx-product-interests-pagination\">\n          <cx-pagination\n            [pagination]=\"pagination\"\n            (viewPageEvent)=\"pageChange($event)\"\n          ></cx-pagination>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n<ng-template #noInterest>\n  <div class=\"cx-product-interests-message\">\n    {{ 'myInterests.noInterests' | cxTranslate }}\n  </div>\n</ng-template>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], MyInterestsComponent);
    return MyInterestsComponent;
}());

var MyInterestsModule = /** @class */ (function () {
    function MyInterestsModule() {
    }
    MyInterestsModule = __decorate([
        NgModule({
            declarations: [MyInterestsComponent],
            imports: [
                CommonModule,
                I18nModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        MyInterestsComponent: {
                            component: MyInterestsComponent,
                            guards: [AuthGuard],
                        },
                    },
                }),
                RouterModule,
                ListNavigationModule,
                I18nModule,
                UrlModule,
                MediaModule,
                SpinnerModule,
            ],
            exports: [MyInterestsComponent],
            entryComponents: [MyInterestsComponent],
        })
    ], MyInterestsModule);
    return MyInterestsModule;
}());

var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(component, pageMetaService, translation) {
        this.component = component;
        this.pageMetaService = pageMetaService;
        this.translation = translation;
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        this.setTitle();
        this.setCrumbs();
    };
    BreadcrumbComponent.prototype.setTitle = function () {
        this.title$ = this.pageMetaService.getMeta().pipe(filter(Boolean), map(function (meta) { return meta.heading || meta.title; }));
    };
    BreadcrumbComponent.prototype.setCrumbs = function () {
        this.crumbs$ = combineLatest([
            this.pageMetaService.getMeta(),
            this.translation.translate('common.home').pipe(observeOn(asyncScheduler)),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), meta = _b[0], textHome = _b[1];
            var _c;
            return ((_c = meta) === null || _c === void 0 ? void 0 : _c.breadcrumbs) ? meta.breadcrumbs : [{ label: textHome, link: '/' }];
        }));
    };
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: PageMetaService },
        { type: TranslationService }
    ]; };
    BreadcrumbComponent = __decorate([
        Component({
            selector: 'cx-breadcrumb',
            template: "<nav>\n  <span *ngFor=\"let crumb of crumbs$ | async\">\n    <a [routerLink]=\"crumb.link\" [innerHTML]=\"crumb.label\"></a>\n  </span>\n</nav>\n<h1>{{ title$ | async }}</h1>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());

var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        BreadcrumbComponent: {
                            component: BreadcrumbComponent,
                        },
                    },
                }),
                CmsPageTitleModule,
            ],
            declarations: [BreadcrumbComponent],
            exports: [BreadcrumbComponent],
            entryComponents: [BreadcrumbComponent],
        })
    ], BreadcrumbModule);
    return BreadcrumbModule;
}());

var NavigationService = /** @class */ (function () {
    function NavigationService(cmsService, semanticPathService) {
        this.cmsService = cmsService;
        this.semanticPathService = semanticPathService;
    }
    NavigationService.prototype.createNavigation = function (data$) {
        return combineLatest([data$, this.getNavigationNode(data$)]).pipe(map(function (_a) {
            var _b = __read(_a, 2), data = _b[0], nav = _b[1];
            return {
                title: data.name,
                children: [nav],
            };
        }));
    };
    /**
     * returns an observable with the `NavigationNode` for the given `CmsNavigationComponent`.
     * This function will load the navigation underlying entries and childs if they haven't been
     * loaded so far.
     */
    NavigationService.prototype.getNavigationNode = function (data$) {
        var _this = this;
        if (!data$) {
            return of();
        }
        return data$.pipe(filter(function (data) { return !!data; }), switchMap(function (data) {
            var navigation = data.navigationNode ? data.navigationNode : data;
            return _this.cmsService.getNavigationEntryItems(navigation.uid).pipe(tap(function (items) {
                if (items === undefined) {
                    _this.loadNavigationEntryItems(navigation, true);
                }
                else {
                    // we should check whether the existing node items are what expected
                    var expectedItems = [];
                    _this.loadNavigationEntryItems(navigation, false, expectedItems);
                    var existingItems_1 = Object.keys(items).map(function (key) { return items[key].uid; });
                    var missingItems = expectedItems.filter(function (it) { return !existingItems_1.includes(it.id); });
                    if (missingItems.length > 0) {
                        _this.cmsService.loadNavigationItems(navigation.uid, missingItems);
                    }
                }
            }), filter(Boolean), map(function (items) { return _this.populateNavigationNode(navigation, items); }));
        }));
    };
    /**
     * Loads all navigation entry items' type and id. Dispatch action to load all these items
     * @param nodeData
     * @param root
     * @param itemsList
     */
    NavigationService.prototype.loadNavigationEntryItems = function (nodeData, root, itemsList) {
        var _this = this;
        if (itemsList === void 0) { itemsList = []; }
        if (nodeData.entries && nodeData.entries.length > 0) {
            nodeData.entries.forEach(function (entry) {
                itemsList.push({
                    superType: entry.itemSuperType,
                    id: entry.itemId,
                });
            });
        }
        if (nodeData.children && nodeData.children.length > 0) {
            nodeData.children.forEach(function (child) {
                return _this.loadNavigationEntryItems(child, false, itemsList);
            });
        }
        if (root) {
            this.cmsService.loadNavigationItems(nodeData.uid, itemsList);
        }
    };
    /**
     * Create a new node tree for the view
     * @param nodeData
     * @param items
     */
    NavigationService.prototype.populateNavigationNode = function (nodeData, items) {
        var _this = this;
        var node = {};
        if (nodeData.title) {
            // the node title will be populated by the first entry (if any)
            // if there's no nodeData.title available
            node.title = nodeData.title;
        }
        if (nodeData.entries && nodeData.entries.length > 0) {
            this.populateLink(node, nodeData.entries[0], items);
        }
        if (nodeData.children && nodeData.children.length > 0) {
            var children = nodeData.children
                .map(function (child) { return _this.populateNavigationNode(child, items); })
                .filter(Boolean);
            if (children.length > 0) {
                node.children = children;
            }
        }
        // return null in case there are no children
        return Object.keys(node).length === 0 ? null : node;
    };
    /**
     * The node link is driven by the first entry.
     */
    NavigationService.prototype.populateLink = function (node, entry, items) {
        var item = items[entry.itemId + "_" + entry.itemSuperType];
        // now we only consider CMSLinkComponent
        if (item && entry.itemType === 'CMSLinkComponent') {
            if (!node.title) {
                node.title = item.linkName;
            }
            var url = this.getLink(item);
            // only populate the node link if we have a visible node
            if (node.title && url) {
                node.url = url;
                // the backend provide boolean value for the target
                // in case the link should be opened in a new window
                node.target = !!item.target ? '_blank' : '';
            }
        }
    };
    /**
     *
     * Gets the URL or link to a related item (category)
     */
    NavigationService.prototype.getLink = function (item) {
        if (item.url) {
            return item.url;
        }
        else if (item.categoryCode) {
            return this.semanticPathService.transform({
                cxRoute: 'category',
                params: {
                    code: item.categoryCode,
                    name: item.name,
                },
            });
        }
    };
    NavigationService.ctorParameters = function () { return [
        { type: CmsService },
        { type: SemanticPathService }
    ]; };
    NavigationService.ɵprov = ɵɵdefineInjectable({ factory: function NavigationService_Factory() { return new NavigationService(ɵɵinject(CmsService), ɵɵinject(SemanticPathService)); }, token: NavigationService, providedIn: "root" });
    NavigationService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], NavigationService);
    return NavigationService;
}());

var CategoryNavigationComponent = /** @class */ (function () {
    function CategoryNavigationComponent(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.data$ = this.componentData.data$;
    }
    CategoryNavigationComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: NavigationService }
    ]; };
    CategoryNavigationComponent = __decorate([
        Component({
            selector: 'cx-category-navigation',
            template: "<cx-navigation-ui\n  *ngIf=\"data$ | async as data\"\n  [node]=\"node$ | async\"\n  [ngClass]=\"data.styleClass\"\n  [wrapAfter]=\"data.wrapAfter\"\n  [allowAlignToRight]=\"true\"\n></cx-navigation-ui>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CategoryNavigationComponent);
    return CategoryNavigationComponent;
}());

var NavigationUIComponent = /** @class */ (function () {
    function NavigationUIComponent(router, renderer, elemRef) {
        var _this = this;
        this.router = router;
        this.renderer = renderer;
        this.elemRef = elemRef;
        this.allowAlignToRight = false;
        /**
         * the icon type that will be used for navigation nodes
         * with children.
         */
        this.iconType = ICON_TYPE;
        /**
         * Indicates whether the navigation should support flyout.
         * If flyout is set to true, the
         * nested child navitation nodes will only appear on hover or focus.
         */
        this.flyout = true;
        this.isOpen = false;
        this.openNodes = [];
        this.subscriptions = new Subscription();
        this.resize = new EventEmitter();
        this.subscriptions.add(this.router.events
            .pipe(filter(function (event) { return event instanceof NavigationEnd; }))
            .subscribe(function () { return _this.clear(); }));
        this.subscriptions.add(this.resize.pipe(debounceTime(50)).subscribe(function () {
            _this.alignWrappersToRightIfStickOut();
        }));
    }
    NavigationUIComponent.prototype.onResize = function () {
        this.resize.next();
    };
    NavigationUIComponent.prototype.toggleOpen = function (event) {
        event.preventDefault();
        var node = event.currentTarget;
        if (this.openNodes.includes(node)) {
            if (event.type === 'keydown') {
                this.back();
            }
            else {
                this.openNodes = this.openNodes.filter(function (n) { return n !== node; });
                this.renderer.removeClass(node, 'is-open');
            }
        }
        else {
            this.openNodes.push(node);
        }
        this.updateClasses();
        event.stopImmediatePropagation();
        event.stopPropagation();
    };
    NavigationUIComponent.prototype.back = function () {
        if (this.openNodes[this.openNodes.length - 1]) {
            this.renderer.removeClass(this.openNodes[this.openNodes.length - 1], 'is-open');
            this.openNodes.pop();
            this.updateClasses();
        }
    };
    NavigationUIComponent.prototype.clear = function () {
        this.openNodes = [];
        this.updateClasses();
    };
    NavigationUIComponent.prototype.onMouseEnter = function (event) {
        this.alignWrapperToRightIfStickOut(event.currentTarget);
        this.focusAfterPreviousClicked(event);
    };
    NavigationUIComponent.prototype.getDepth = function (node, depth) {
        var _this = this;
        if (depth === void 0) { depth = 0; }
        if (node.children && node.children.length > 0) {
            return Math.max.apply(Math, __spread(node.children.map(function (n) { return _this.getDepth(n, depth + 1); })));
        }
        else {
            return depth;
        }
    };
    NavigationUIComponent.prototype.getColumnCount = function (length) {
        return Math.round(length / (this.wrapAfter || length));
    };
    NavigationUIComponent.prototype.focusAfterPreviousClicked = function (event) {
        var target = ((event.target || event.relatedTarget));
        if (target.ownerDocument.activeElement.matches('nav[tabindex]') &&
            target.parentElement.matches('.flyout')) {
            target.focus();
        }
        return target.ownerDocument;
    };
    NavigationUIComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
    };
    NavigationUIComponent.prototype.alignWrapperToRightIfStickOut = function (node) {
        if (this.allowAlignToRight) {
            var wrapper = node.querySelector('.wrapper');
            var navBar = this.elemRef.nativeElement;
            if (wrapper) {
                this.renderer.removeStyle(wrapper, 'margin-left');
                if (wrapper.offsetLeft + wrapper.offsetWidth >
                    navBar.offsetLeft + navBar.offsetWidth) {
                    this.renderer.setStyle(wrapper, 'margin-left', node.offsetWidth - wrapper.offsetWidth + "px");
                }
            }
        }
    };
    NavigationUIComponent.prototype.alignWrappersToRightIfStickOut = function () {
        var _this = this;
        var navs = this.elemRef.nativeElement.childNodes;
        Array.from(navs)
            .filter(function (node) { return node.tagName === 'NAV'; })
            .forEach(function (nav) { return _this.alignWrapperToRightIfStickOut(nav); });
    };
    NavigationUIComponent.prototype.updateClasses = function () {
        var _this = this;
        this.openNodes.forEach(function (node, i) {
            if (i + 1 < _this.openNodes.length) {
                _this.renderer.addClass(node, 'is-opened');
                _this.renderer.removeClass(node, 'is-open');
            }
            else {
                _this.renderer.removeClass(node, 'is-opened');
                _this.renderer.addClass(node, 'is-open');
            }
        });
        this.isOpen = this.openNodes.length > 0;
    };
    NavigationUIComponent.prototype.isTabbable = function (node) {
        return this.flyout && node.children && node.children.length;
    };
    NavigationUIComponent.ctorParameters = function () { return [
        { type: Router },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], NavigationUIComponent.prototype, "node", void 0);
    __decorate([
        Input()
    ], NavigationUIComponent.prototype, "wrapAfter", void 0);
    __decorate([
        Input()
    ], NavigationUIComponent.prototype, "allowAlignToRight", void 0);
    __decorate([
        Input(), HostBinding('class.flyout')
    ], NavigationUIComponent.prototype, "flyout", void 0);
    __decorate([
        Input(), HostBinding('class.is-open')
    ], NavigationUIComponent.prototype, "isOpen", void 0);
    __decorate([
        HostListener('window:resize')
    ], NavigationUIComponent.prototype, "onResize", null);
    NavigationUIComponent = __decorate([
        Component({
            selector: 'cx-navigation-ui',
            template: "<div\n  *ngIf=\"flyout && node?.children.length > 1\"\n  class=\"back is-open\"\n  (click)=\"back()\"\n>\n  <h5>\n    <cx-icon [type]=\"iconType.CARET_LEFT\"></cx-icon>\n    {{ 'common.back' | cxTranslate }}\n  </h5>\n</div>\n\n<ng-container *ngFor=\"let child of node?.children\">\n  <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n  </ng-container>\n</ng-container>\n\n<!-- we generate links in a recursive manner -->\n<ng-template #nav let-node=\"node\">\n  <nav\n    (click)=\"toggleOpen($event)\"\n    (mouseenter)=\"onMouseEnter($event)\"\n    (keydown.space)=\"toggleOpen($event)\"\n    (keydown.esc)=\"back()\"\n  >\n    <cx-generic-link\n      *ngIf=\"\n        node.url && (!node.children || node.children?.length === 0);\n        else heading\n      \"\n      [url]=\"node.url\"\n      [target]=\"node.target\"\n    >\n      {{ node.title }}\n      <cx-icon\n        *ngIf=\"flyout && node.children?.length > 0\"\n        [type]=\"iconType.CARET_DOWN\"\n      ></cx-icon>\n    </cx-generic-link>\n\n    <ng-template #heading>\n      <h5 [attr.aria-label]=\"node.title\" [attr.tabindex]=\"flyout ? 0 : -1\">\n        {{ node.title }}\n        <cx-icon\n          *ngIf=\"flyout && node.children?.length > 0\"\n          [type]=\"iconType.CARET_DOWN\"\n        ></cx-icon>\n      </h5>\n    </ng-template>\n\n    <!-- we add a wrapper to allow for better layout handling in CSS -->\n    <div class=\"wrapper\" *ngIf=\"node.children?.length > 0\">\n      <cx-generic-link\n        *ngIf=\"node.url\"\n        [url]=\"node.url\"\n        [target]=\"node.target\"\n        class=\"all\"\n      >\n        {{ 'navigation.shopAll' | cxTranslate: { navNode: node.title } }}\n      </cx-generic-link>\n      <div\n        class=\"childs\"\n        [attr.depth]=\"getDepth(node)\"\n        [attr.wrap-after]=\"node.children?.length > wrapAfter ? wrapAfter : null\"\n        [attr.columns]=\"getColumnCount(node.children?.length)\"\n      >\n        <ng-container *ngFor=\"let child of node.children\">\n          <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n          </ng-container>\n        </ng-container>\n      </div>\n    </div>\n  </nav>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], NavigationUIComponent);
    return NavigationUIComponent;
}());

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.createNavigation(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map(function (d) { return d.styleClass; }));
    }
    NavigationComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: NavigationService }
    ]; };
    NavigationComponent = __decorate([
        Component({
            selector: 'cx-navigation',
            template: "<cx-navigation-ui [node]=\"node$ | async\" [ngClass]=\"styleClass$ | async\">\n</cx-navigation-ui>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], NavigationComponent);
    return NavigationComponent;
}());

var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                IconModule,
                GenericLinkModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        NavigationComponent: {
                            component: NavigationComponent,
                        },
                    },
                }),
                I18nModule,
            ],
            declarations: [NavigationComponent, NavigationUIComponent],
            entryComponents: [NavigationComponent],
            exports: [NavigationComponent, NavigationUIComponent],
        })
    ], NavigationModule);
    return NavigationModule;
}());

var CategoryNavigationModule = /** @class */ (function () {
    function CategoryNavigationModule() {
    }
    CategoryNavigationModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                NavigationModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CategoryNavigationComponent: {
                            component: CategoryNavigationComponent,
                        },
                    },
                }),
            ],
            declarations: [CategoryNavigationComponent],
            entryComponents: [CategoryNavigationComponent],
            exports: [CategoryNavigationComponent],
        })
    ], CategoryNavigationModule);
    return CategoryNavigationModule;
}());

var FooterNavigationComponent = /** @class */ (function () {
    function FooterNavigationComponent(componentData, service, anonymousConsentsConfig) {
        var _this = this;
        this.componentData = componentData;
        this.service = service;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map(function (d) { return d.styleClass; }));
        // in order to preserve the backwards compatibility, this should render only if anonymous consents feature is disabled
        this.data$ = this.componentData.data$.pipe(filter(function (_) {
            return !isFeatureEnabled(_this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE);
        }));
    }
    FooterNavigationComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: NavigationService },
        { type: AnonymousConsentsConfig }
    ]; };
    FooterNavigationComponent = __decorate([
        Component({
            selector: 'cx-footer-navigation',
            template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [flyout]=\"false\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n\n<div class=\"notice\" *ngIf=\"data$ | async as data\">\n  {{ data.notice }}\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FooterNavigationComponent);
    return FooterNavigationComponent;
}());

var FooterNavigationModule = /** @class */ (function () {
    function FooterNavigationModule() {
    }
    FooterNavigationModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                NavigationModule,
                GenericLinkModule,
                I18nModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        FooterNavigationComponent: {
                            component: FooterNavigationComponent,
                        },
                    },
                }),
            ],
            declarations: [FooterNavigationComponent],
            entryComponents: [FooterNavigationComponent],
            exports: [FooterNavigationComponent],
        })
    ], FooterNavigationModule);
    return FooterNavigationModule;
}());

var HAS_SEARCH_RESULT_CLASS = 'has-searchbox-results';
var SearchBoxComponentService = /** @class */ (function () {
    function SearchBoxComponentService(searchService, routingService, translationService, winRef) {
        this.searchService = searchService;
        this.routingService = routingService;
        this.translationService = translationService;
        this.winRef = winRef;
    }
    /**
     * Executes the search for products and suggestions,
     * unless the configuration is setup to not search for
     * products or suggestions.
     */
    SearchBoxComponentService.prototype.search = function (query, config) {
        if (!query || query === '') {
            this.clearResults();
            return;
        }
        if (config.minCharactersBeforeRequest &&
            query.length < config.minCharactersBeforeRequest) {
            return;
        }
        if (config.displayProducts) {
            this.searchService.search(query, {
                pageSize: config.maxProducts,
            });
        }
        if (config.displaySuggestions) {
            this.searchService.searchSuggestions(query, {
                pageSize: config.maxSuggestions,
            });
        }
    };
    /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     */
    SearchBoxComponentService.prototype.getResults = function (config) {
        var _this = this;
        return combineLatest([
            this.getProductResults(config),
            this.getProductSuggestions(config),
            this.getSearchMessage(config),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 3), productResults = _b[0], suggestions = _b[1], message = _b[2];
            return {
                products: productResults ? productResults.products : null,
                suggestions: suggestions,
                message: message,
            };
        }), tap(function (results) {
            return _this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, _this.hasResults(results));
        }));
    };
    /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     */
    SearchBoxComponentService.prototype.clearResults = function () {
        this.searchService.clearResults();
        this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, false);
    };
    SearchBoxComponentService.prototype.hasBodyClass = function (className) {
        return this.winRef.document.body.classList.contains(className);
    };
    SearchBoxComponentService.prototype.toggleBodyClass = function (className, add) {
        if (add === undefined) {
            this.winRef.document.body.classList.toggle(className);
        }
        else {
            add
                ? this.winRef.document.body.classList.add(className)
                : this.winRef.document.body.classList.remove(className);
        }
    };
    SearchBoxComponentService.prototype.hasResults = function (results) {
        return ((!!results.products && results.products.length > 0) ||
            (!!results.suggestions && results.suggestions.length > 0) ||
            !!results.message);
    };
    SearchBoxComponentService.prototype.getProductResults = function (config) {
        if (config.displayProducts) {
            return this.searchService.getResults();
        }
        else {
            return of({});
        }
    };
    /**
     * Loads suggestions from the backend. In case there's no suggestion
     * available, we try to get an exact match suggestion.
     */
    SearchBoxComponentService.prototype.getProductSuggestions = function (config) {
        var _this = this;
        if (!config.displaySuggestions) {
            return of([]);
        }
        else {
            return this.searchService.getSuggestionResults().pipe(map(function (res) { return res.map(function (suggestion) { return suggestion.value; }); }), switchMap(function (suggestions) {
                if (suggestions.length === 0) {
                    return _this.getExactSuggestion(config).pipe(map(function (match) { return (match ? [match] : []); }));
                }
                else {
                    return of(suggestions);
                }
            }));
        }
    };
    /**
     * whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     */
    SearchBoxComponentService.prototype.getExactSuggestion = function (config) {
        var _this = this;
        return this.getProductResults(config).pipe(switchMap(function (productResult) {
            return productResult.products && productResult.products.length > 0
                ? _this.fetchTranslation('searchBox.help.exactMatch', {
                    term: productResult.freeTextSearch,
                })
                : of(null);
        }));
    };
    SearchBoxComponentService.prototype.getSearchMessage = function (config) {
        var _this = this;
        return combineLatest([
            this.getProductResults(config),
            this.getProductSuggestions(config),
        ]).pipe(switchMap(function (_a) {
            var _b = __read(_a, 2), productResult = _b[0], suggestions = _b[1];
            if (productResult &&
                productResult.products &&
                productResult.products.length === 0 &&
                suggestions &&
                suggestions.length === 0) {
                return _this.fetchTranslation('searchBox.help.noMatch');
            }
            else {
                return of(null);
            }
        }));
    };
    /**
     * Navigates to the search result page with a given query
     */
    SearchBoxComponentService.prototype.launchSearchPage = function (query) {
        this.routingService.go({
            cxRoute: 'search',
            params: { query: query },
        });
    };
    SearchBoxComponentService.prototype.fetchTranslation = function (translationKey, options) {
        return this.translationService.translate(translationKey, options);
    };
    SearchBoxComponentService.ctorParameters = function () { return [
        { type: SearchboxService },
        { type: RoutingService },
        { type: TranslationService },
        { type: WindowRef }
    ]; };
    SearchBoxComponentService.ɵprov = ɵɵdefineInjectable({ factory: function SearchBoxComponentService_Factory() { return new SearchBoxComponentService(ɵɵinject(SearchboxService), ɵɵinject(RoutingService), ɵɵinject(TranslationService), ɵɵinject(WindowRef)); }, token: SearchBoxComponentService, providedIn: "root" });
    SearchBoxComponentService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], SearchBoxComponentService);
    return SearchBoxComponentService;
}());

var DEFAULT_SEARCHBOX_CONFIG = {
    minCharactersBeforeRequest: 1,
    displayProducts: true,
    displaySuggestions: true,
    maxProducts: 5,
    maxSuggestions: 5,
    displayProductImages: true,
};
var SearchBoxComponent = /** @class */ (function () {
    /**
     * The component data is optional, so that this component
     * can be reused without CMS integration.
     */
    function SearchBoxComponent(searchBoxComponentService, componentData, winRef) {
        var _this = this;
        this.searchBoxComponentService = searchBoxComponentService;
        this.componentData = componentData;
        this.winRef = winRef;
        this.iconTypes = ICON_TYPE;
        /**
         * In some occasions we need to ignore the close event,
         * for example when we click inside the search result section.
         */
        this.ignoreCloseEvent = false;
        this.results$ = this.config$.pipe(tap(function (c) { return (_this.config = c); }), switchMap(function (config) { return _this.searchBoxComponentService.getResults(config); }));
    }
    Object.defineProperty(SearchBoxComponent.prototype, "queryText", {
        /**
         * Sets the search box input field
         */
        set: function (value) {
            if (value) {
                this.search(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBoxComponent.prototype, "config$", {
        /**
         * Returns the backend configuration or default configuration for the searchbox.
         */
        get: function () {
            if (this.componentData) {
                return this.componentData.data$.pipe(
                // Since the backend returns string values (i.e. displayProducts: "true") for
                // boolean values, we replace them with boolean values.
                map(function (c) {
                    return __assign(__assign({}, c), { displayProducts: c.displayProducts === 'true' || c.displayProducts === true, displayProductImages: c.displayProductImages === 'true' ||
                            c.displayProductImages === true, displaySuggestions: c.displaySuggestions === 'true' ||
                            c.displaySuggestions === true });
                }));
            }
            else {
                return of(DEFAULT_SEARCHBOX_CONFIG);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the searchbox and opens the search result page.
     */
    SearchBoxComponent.prototype.search = function (query) {
        this.searchBoxComponentService.search(query, this.config);
        // force the searchbox to open
        this.open();
    };
    /**
     * Opens the typeahead searchbox
     */
    SearchBoxComponent.prototype.open = function () {
        this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', true);
    };
    /**
     * Closes the typehead searchbox.
     */
    SearchBoxComponent.prototype.close = function (event, force) {
        var _this = this;
        // Use timeout to detect changes
        setTimeout(function () {
            if ((!_this.ignoreCloseEvent && !_this.isSearchboxFocused()) || force) {
                _this.blurSearchBox(event);
            }
        });
    };
    SearchBoxComponent.prototype.blurSearchBox = function (event) {
        this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', false);
        if (event && event.target) {
            event.target.blur();
        }
    };
    // Check if focus is on searchbox or result list elements
    SearchBoxComponent.prototype.isSearchboxFocused = function () {
        return (this.getResultElements().includes(this.getFocusedElement()) ||
            this.winRef.document.querySelector('input[aria-label="search"]') ===
                this.getFocusedElement());
    };
    /**
     * Especially in mobile we do not want the search icon
     * to focus the input again when it's already open.
     * */
    SearchBoxComponent.prototype.avoidReopen = function (event) {
        if (this.searchBoxComponentService.hasBodyClass('searchbox-is-active')) {
            this.close(event);
            event.preventDefault();
        }
    };
    // Return result list as HTMLElement array
    SearchBoxComponent.prototype.getResultElements = function () {
        return Array.from(this.winRef.document.querySelectorAll('.products > a, .suggestions > a'));
    };
    // Return focused element as HTMLElement
    SearchBoxComponent.prototype.getFocusedElement = function () {
        return this.winRef.document.activeElement;
    };
    SearchBoxComponent.prototype.getFocusedIndex = function () {
        return this.getResultElements().indexOf(this.getFocusedElement());
    };
    // Focus on previous item in results list
    SearchBoxComponent.prototype.focusPreviousChild = function (event) {
        event.preventDefault(); // Negate normal keyscroll
        var _a = __read([
            this.getResultElements(),
            this.getFocusedIndex(),
        ], 2), results = _a[0], focusedIndex = _a[1];
        // Focus on last index moving to first
        if (results.length) {
            if (focusedIndex < 1) {
                results[results.length - 1].focus();
            }
            else {
                results[focusedIndex - 1].focus();
            }
        }
    };
    // Focus on next item in results list
    SearchBoxComponent.prototype.focusNextChild = function (event) {
        event.preventDefault(); // Negate normal keyscroll
        var _a = __read([
            this.getResultElements(),
            this.getFocusedIndex(),
        ], 2), results = _a[0], focusedIndex = _a[1];
        // Focus on first index moving to last
        if (results.length) {
            if (focusedIndex >= results.length - 1) {
                results[0].focus();
            }
            else {
                results[focusedIndex + 1].focus();
            }
        }
    };
    /**
     * Opens the PLP with the given query.
     *
     * TODO: if there's a single product match, we could open the PDP.
     */
    SearchBoxComponent.prototype.launchSearchResult = function (event, query) {
        if (!query || query.trim().length === 0) {
            return;
        }
        this.close(event);
        this.searchBoxComponentService.launchSearchPage(query);
    };
    /**
     * Disables closing the search result list.
     */
    SearchBoxComponent.prototype.disableClose = function () {
        this.ignoreCloseEvent = true;
    };
    /**
     * Clears the search box input field
     */
    SearchBoxComponent.prototype.clear = function (el) {
        this.disableClose();
        el.value = '';
        this.searchBoxComponentService.clearResults();
    };
    SearchBoxComponent.ctorParameters = function () { return [
        { type: SearchBoxComponentService },
        { type: CmsComponentData, decorators: [{ type: Optional }] },
        { type: WindowRef }
    ]; };
    __decorate([
        Input('queryText')
    ], SearchBoxComponent.prototype, "queryText", null);
    SearchBoxComponent = __decorate([
        Component({
            selector: 'cx-searchbox',
            template: "<label class=\"searchbox\" [class.dirty]=\"!!searchInput.value\">\n  <input\n    #searchInput\n    [placeholder]=\"'searchBox.placeholder' | cxTranslate\"\n    aria-label=\"search\"\n    (focus)=\"open()\"\n    (input)=\"search(searchInput.value)\"\n    (blur)=\"close($event)\"\n    (keydown.escape)=\"close($event)\"\n    (keydown.enter)=\"\n      close($event, true); launchSearchResult($event, searchInput.value)\n    \"\n    (keydown.arrowup)=\"focusPreviousChild($event)\"\n    (keydown.arrowdown)=\"focusNextChild($event)\"\n  />\n\n  <cx-icon\n    [type]=\"iconTypes.RESET\"\n    aria-label=\"reset\"\n    (mousedown)=\"clear(searchInput)\"\n    (keydown.enter)=\"clear(searchInput)\"\n    class=\"reset\"\n    tabindex=\"0\"\n  ></cx-icon>\n\n  <cx-icon\n    [type]=\"iconTypes.SEARCH\"\n    aria-label=\"search\"\n    class=\"search\"\n    (mousedown)=\"avoidReopen($event)\"\n    (keydown.enter)=\"avoidReopen($event)\"\n    tabindex=\"0\"\n  ></cx-icon>\n</label>\n\n<div\n  *ngIf=\"results$ | async as result\"\n  class=\"results\"\n  (click)=\"close($event, true)\"\n>\n  <div\n    *ngIf=\"result.message\"\n    class=\"message\"\n    [innerHTML]=\"result.message\"\n  ></div>\n\n  <div class=\"suggestions\">\n    <a\n      *ngFor=\"let suggestion of result.suggestions\"\n      [innerHTML]=\"suggestion | cxHighlight: searchInput.value\"\n      [routerLink]=\"\n        {\n          cxRoute: 'search',\n          params: { query: suggestion }\n        } | cxUrl\n      \"\n      (keydown.arrowup)=\"focusPreviousChild($event)\"\n      (keydown.arrowdown)=\"focusNextChild($event)\"\n      (keydown.enter)=\"close($event, true)\"\n      (keydown.escape)=\"close($event, true)\"\n      (blur)=\"close($event)\"\n    >\n    </a>\n  </div>\n\n  <div class=\"products\" *ngIf=\"result.products\">\n    <a\n      *ngFor=\"let product of result.products\"\n      [routerLink]=\"\n        {\n          cxRoute: 'product',\n          params: product\n        } | cxUrl\n      \"\n      [class.has-media]=\"config.displayProductImages\"\n      (keydown.arrowup)=\"focusPreviousChild($event)\"\n      (keydown.arrowdown)=\"focusNextChild($event)\"\n      (keydown.enter)=\"close($event, true)\"\n      (keydown.escape)=\"close($event, true)\"\n      (blur)=\"close($event)\"\n    >\n      <cx-media\n        *ngIf=\"config.displayProductImages\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"thumbnail\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n      <h4 class=\"name\" [innerHTML]=\"product.nameHtml\"></h4>\n      <span class=\"price\">{{ product.price?.formattedValue }}</span>\n    </a>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __param(1, Optional())
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());

var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (text, match) {
        if (!match) {
            return text;
        }
        return text.replace(match.trim(), "<span class=\"highlight\">" + match.trim() + "</span>");
    };
    HighlightPipe = __decorate([
        Pipe({ name: 'cxHighlight' })
    ], HighlightPipe);
    return HighlightPipe;
}());

var SearchBoxModule = /** @class */ (function () {
    function SearchBoxModule() {
    }
    SearchBoxModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                MediaModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        SearchBoxComponent: {
                            component: SearchBoxComponent,
                        },
                    },
                }),
                IconModule,
                UrlModule,
                I18nModule,
            ],
            declarations: [SearchBoxComponent, HighlightPipe],
            entryComponents: [SearchBoxComponent],
            exports: [SearchBoxComponent],
        })
    ], SearchBoxModule);
    return SearchBoxModule;
}());

var OrderConfirmationItemsComponent = /** @class */ (function () {
    function OrderConfirmationItemsComponent(checkoutService, promotionService) {
        this.checkoutService = checkoutService;
        this.promotionService = promotionService;
        this.promotionLocation = PromotionLocation.Checkout;
    }
    OrderConfirmationItemsComponent.prototype.ngOnInit = function () {
        this.order$ = this.checkoutService.getOrderDetails();
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
    };
    OrderConfirmationItemsComponent.prototype.ngOnDestroy = function () {
        this.checkoutService.clearCheckoutData();
    };
    OrderConfirmationItemsComponent.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: PromotionService }
    ]; };
    OrderConfirmationItemsComponent = __decorate([
        Component({
            selector: 'cx-order-confirmation-items',
            template: "<div class=\"cx-order-items container\" *ngIf=\"order$ | async as order\">\n  <h4 class=\"cx-order-items-header\">\n    {{ 'checkoutOrderConfirmation.orderItems' | cxTranslate }}\n  </h4>\n\n  <ng-container *cxFeatureLevel=\"'1.5'\">\n    <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n      <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n    </ng-container>\n  </ng-container>\n\n  <cx-cart-item-list\n    [items]=\"order.entries\"\n    [readonly]=\"true\"\n    [promotionLocation]=\"promotionLocation\"\n  ></cx-cart-item-list>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], OrderConfirmationItemsComponent);
    return OrderConfirmationItemsComponent;
}());

var OrderConfirmationOverviewComponent = /** @class */ (function () {
    function OrderConfirmationOverviewComponent(checkoutService, translation) {
        this.checkoutService = checkoutService;
        this.translation = translation;
    }
    OrderConfirmationOverviewComponent.prototype.ngOnInit = function () {
        this.order$ = this.checkoutService.getOrderDetails();
    };
    OrderConfirmationOverviewComponent.prototype.ngOnDestroy = function () {
        this.checkoutService.clearCheckoutData();
    };
    OrderConfirmationOverviewComponent.prototype.getAddressCardContent = function (deliveryAddress) {
        return this.translation.translate('addressCard.shipTo').pipe(filter(function (_) { return Boolean(deliveryAddress); }), map(function (textTitle) { return ({
            title: textTitle,
            textBold: deliveryAddress.firstName + " " + deliveryAddress.lastName,
            text: [
                deliveryAddress.line1,
                deliveryAddress.line2,
                deliveryAddress.town + ", " + deliveryAddress.country.isocode + ", " + deliveryAddress.postalCode,
                deliveryAddress.phone,
            ],
        }); }));
    };
    OrderConfirmationOverviewComponent.prototype.getDeliveryModeCardContent = function (deliveryMode) {
        return this.translation.translate('checkoutShipping.shippingMethod').pipe(filter(function (_) { return Boolean(deliveryMode); }), map(function (textTitle) { return ({
            title: textTitle,
            textBold: deliveryMode.name,
            text: [deliveryMode.description],
        }); }));
    };
    OrderConfirmationOverviewComponent.prototype.getBillingAddressCardContent = function (billingAddress) {
        return this.translation.translate('addressCard.billTo').pipe(filter(function (_) { return Boolean(billingAddress); }), map(function (textTitle) { return ({
            title: textTitle,
            textBold: billingAddress.firstName + " " + billingAddress.lastName,
            text: [
                billingAddress.line1,
                billingAddress.line2,
                billingAddress.town + ", " + billingAddress.country.isocode + ", " + billingAddress.postalCode,
                billingAddress.phone,
            ],
        }); }));
    };
    OrderConfirmationOverviewComponent.prototype.getPaymentInfoCardContent = function (payment) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: Boolean(payment) ? payment.expiryMonth : '',
                year: Boolean(payment) ? payment.expiryYear : '',
            }),
        ]).pipe(filter(function (_) { return Boolean(payment); }), map(function (_a) {
            var _b = __read(_a, 2), textTitle = _b[0], textExpires = _b[1];
            return ({
                title: textTitle,
                textBold: payment.accountHolderName,
                text: [payment.cardNumber, textExpires],
            });
        }));
    };
    OrderConfirmationOverviewComponent.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: TranslationService }
    ]; };
    OrderConfirmationOverviewComponent = __decorate([
        Component({
            selector: 'cx-order-confirmation-overview',
            template: "<div class=\"cx-order-review-summary\" *ngIf=\"order$ | async as order\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getAddressCardContent(order?.deliveryAddress) | async\"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"\n              getBillingAddressCardContent(order?.paymentInfo?.billingAddress)\n                | async\n            \"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getDeliveryModeCardContent(order?.deliveryMode) | async\"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getPaymentInfoCardContent(order?.paymentInfo) | async\"\n          ></cx-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], OrderConfirmationOverviewComponent);
    return OrderConfirmationOverviewComponent;
}());

var OrderConfirmationThankYouMessageComponent = /** @class */ (function () {
    function OrderConfirmationThankYouMessageComponent(checkoutService) {
        this.checkoutService = checkoutService;
        this.isGuestCustomer = false;
    }
    OrderConfirmationThankYouMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.order$ = this.checkoutService.getOrderDetails().pipe(tap(function (order) {
            _this.isGuestCustomer = order.guestCustomer;
            _this.orderGuid = order.guid;
        }));
    };
    OrderConfirmationThankYouMessageComponent.prototype.ngOnDestroy = function () {
        this.checkoutService.clearCheckoutData();
    };
    OrderConfirmationThankYouMessageComponent.ctorParameters = function () { return [
        { type: CheckoutService }
    ]; };
    OrderConfirmationThankYouMessageComponent = __decorate([
        Component({
            selector: 'cx-order-confirmation-thank-you-message',
            template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-page-header\">\n    <h1 class=\"cx-page-title\">\n      {{ 'checkoutOrderConfirmation.confirmationOfOrder' | cxTranslate }}\n      {{ order.code }}\n    </h1>\n  </div>\n\n  <div class=\"cx-order-confirmation-message\">\n    <h2>{{ 'checkoutOrderConfirmation.thankYou' | cxTranslate }}</h2>\n    <p>\n      {{ 'checkoutOrderConfirmation.invoiceHasBeenSentByEmail' | cxTranslate }}\n    </p>\n    <!-- <a href=\"#\" class=\"btn-link\">Print Page</a> -->\n  </div>\n\n  <div *ngIf=\"isGuestCustomer\">\n    <cx-guest-register-form\n      [guid]=\"orderGuid\"\n      [email]=\"order.paymentInfo.billingAddress.email\"\n    ></cx-guest-register-form>\n  </div>\n\n  <cx-add-to-home-screen-banner></cx-add-to-home-screen-banner>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], OrderConfirmationThankYouMessageComponent);
    return OrderConfirmationThankYouMessageComponent;
}());

var OrderConfirmationTotalsComponent = /** @class */ (function () {
    function OrderConfirmationTotalsComponent(checkoutService) {
        this.checkoutService = checkoutService;
    }
    OrderConfirmationTotalsComponent.prototype.ngOnInit = function () {
        this.order$ = this.checkoutService.getOrderDetails();
    };
    OrderConfirmationTotalsComponent.prototype.ngOnDestroy = function () {
        this.checkoutService.clearCheckoutData();
    };
    OrderConfirmationTotalsComponent.ctorParameters = function () { return [
        { type: CheckoutService }
    ]; };
    OrderConfirmationTotalsComponent = __decorate([
        Component({
            selector: 'cx-order-confirmation-totals',
            template: "<div class=\"cx-order-summary container\" *ngIf=\"order$ | async as order\">\n  <div class=\"row justify-content-end\">\n    <div class=\"col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <cx-order-summary [cart]=\"order\"></cx-order-summary>\n    </div>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], OrderConfirmationTotalsComponent);
    return OrderConfirmationTotalsComponent;
}());

var GuestRegisterFormComponent = /** @class */ (function () {
    function GuestRegisterFormComponent(userService, routingService, authService, fb) {
        this.userService = userService;
        this.routingService = routingService;
        this.authService = authService;
        this.fb = fb;
        this.guestRegisterForm = this.fb.group({
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            passwordconf: ['', Validators.required],
        }, { validator: CustomFormValidators.matchPassword });
    }
    GuestRegisterFormComponent.prototype.submit = function () {
        var _this = this;
        this.userService.registerGuest(this.guid, this.guestRegisterForm.value.password);
        if (!this.subscription) {
            this.subscription = this.authService.getUserToken().subscribe(function (token) {
                if (token.access_token) {
                    _this.routingService.go({ cxRoute: 'home' });
                }
            });
        }
    };
    GuestRegisterFormComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    GuestRegisterFormComponent.ctorParameters = function () { return [
        { type: UserService },
        { type: RoutingService },
        { type: AuthService },
        { type: FormBuilder }
    ]; };
    __decorate([
        Input()
    ], GuestRegisterFormComponent.prototype, "guid", void 0);
    __decorate([
        Input()
    ], GuestRegisterFormComponent.prototype, "email", void 0);
    GuestRegisterFormComponent = __decorate([
        Component({
            selector: 'cx-guest-register-form',
            template: "<div class=\"register-guest\">\n  <div class=\"col-md-6 col-lg-4\">\n    <h3>{{ 'checkoutOrderConfirmation.createAccount' | cxTranslate }}</h3>\n    <p>\n      {{\n        'checkoutOrderConfirmation.createAccountForNext'\n          | cxTranslate: { email: email }\n      }}\n    </p>\n\n    <form [formGroup]=\"guestRegisterForm\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.password.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            [class.is-invalid]=\"\n              guestRegisterForm.get('password').invalid &&\n              guestRegisterForm.get('password').dirty\n            \"\n            type=\"password\"\n            name=\"password\"\n            placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n            formControlName=\"password\"\n          />\n          <div\n            class=\"invalid-feedback\"\n            *ngIf=\"\n              guestRegisterForm.get('password').invalid &&\n              guestRegisterForm.get('password').dirty\n            \"\n          >\n            <span>{{ 'register.passwordMinRequirements' | cxTranslate }}</span>\n          </div>\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.confirmPassword.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            [class.is-invalid]=\"\n              guestRegisterForm.get('password').value !==\n              guestRegisterForm.get('passwordconf').value\n            \"\n            type=\"password\"\n            name=\"confirmpassword\"\n            placeholder=\"{{\n              'register.confirmPassword.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"passwordconf\"\n          />\n          <div\n            class=\"invalid-feedback\"\n            *ngIf=\"\n              guestRegisterForm.get('password').value !==\n                guestRegisterForm.get('passwordconf').value &&\n              guestRegisterForm.get('passwordconf').value\n            \"\n          >\n            <span>{{ 'register.bothPasswordMustMatch' | cxTranslate }}</span>\n          </div>\n        </label>\n      </div>\n\n      <button\n        type=\"submit\"\n        (click)=\"submit()\"\n        [disabled]=\"guestRegisterForm.invalid\"\n        class=\"btn btn-block btn-primary\"\n      >\n        {{ 'common.submit' | cxTranslate }}\n      </button>\n    </form>\n  </div>\n</div>\n"
        })
    ], GuestRegisterFormComponent);
    return GuestRegisterFormComponent;
}());

var OrderConfirmationGuard = /** @class */ (function () {
    function OrderConfirmationGuard(checkoutService, router, semanticPathService) {
        this.checkoutService = checkoutService;
        this.router = router;
        this.semanticPathService = semanticPathService;
    }
    OrderConfirmationGuard.prototype.canActivate = function () {
        var _this = this;
        return this.checkoutService.getOrderDetails().pipe(map(function (orderDetails) {
            if (orderDetails && Object.keys(orderDetails).length !== 0) {
                return true;
            }
            else {
                return _this.router.parseUrl(_this.semanticPathService.get('orders'));
            }
        }));
    };
    OrderConfirmationGuard.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: Router },
        { type: SemanticPathService }
    ]; };
    OrderConfirmationGuard.ɵprov = ɵɵdefineInjectable({ factory: function OrderConfirmationGuard_Factory() { return new OrderConfirmationGuard(ɵɵinject(CheckoutService), ɵɵinject(Router), ɵɵinject(SemanticPathService)); }, token: OrderConfirmationGuard, providedIn: "root" });
    OrderConfirmationGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OrderConfirmationGuard);
    return OrderConfirmationGuard;
}());

var orderConfirmationComponents = [
    OrderConfirmationItemsComponent,
    OrderConfirmationOverviewComponent,
    OrderConfirmationThankYouMessageComponent,
    OrderConfirmationTotalsComponent,
    GuestRegisterFormComponent,
];
var OrderConfirmationModule = /** @class */ (function () {
    function OrderConfirmationModule() {
    }
    OrderConfirmationModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                CartSharedModule,
                CardModule,
                PwaModule,
                PromotionsModule,
                I18nModule,
                ReactiveFormsModule,
                FeaturesConfigModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        OrderConfirmationThankMessageComponent: {
                            component: OrderConfirmationThankYouMessageComponent,
                            guards: [OrderConfirmationGuard],
                        },
                        OrderConfirmationItemsComponent: {
                            component: OrderConfirmationItemsComponent,
                            guards: [OrderConfirmationGuard],
                        },
                        OrderConfirmationTotalsComponent: {
                            component: OrderConfirmationTotalsComponent,
                            guards: [OrderConfirmationGuard],
                        },
                        OrderConfirmationOverviewComponent: {
                            component: OrderConfirmationOverviewComponent,
                            guards: [OrderConfirmationGuard],
                        },
                    },
                }),
            ],
            declarations: __spread(orderConfirmationComponents),
            exports: __spread(orderConfirmationComponents),
            entryComponents: __spread(orderConfirmationComponents),
        })
    ], OrderConfirmationModule);
    return OrderConfirmationModule;
}());

var ProductCarouselService = /** @class */ (function () {
    function ProductCarouselService(productService, referenceService, semanticPathService) {
        this.productService = productService;
        this.referenceService = referenceService;
        this.semanticPathService = semanticPathService;
    }
    /**
     * Loads the product data and converts it `CarouselItem`.
     */
    ProductCarouselService.prototype.loadProduct = function (code) {
        var _this = this;
        return this.productService.get(code).pipe(filter(Boolean), map(function (product) { return _this.convertProduct(product); }));
    };
    ProductCarouselService.prototype.getProductReferences = function (code, referenceType, displayTitle, displayProductPrices) {
        var _this = this;
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map(function (refs) {
            return refs.map(function (ref) {
                return _this.convertProduct(ref.target, displayTitle, displayProductPrices);
            });
        }));
    };
    /**
     * Converts the product to a generic CarouselItem
     */
    ProductCarouselService.prototype.convertProduct = function (source, displayTitle, displayProductPrices) {
        if (displayTitle === void 0) { displayTitle = true; }
        if (displayProductPrices === void 0) { displayProductPrices = true; }
        var item = {};
        if (displayTitle) {
            item.title = source.name;
        }
        if (displayProductPrices && source.price && source.price.formattedValue) {
            item.price = source.price.formattedValue;
        }
        if (source.images && source.images.PRIMARY) {
            item.media = {
                container: source.images.PRIMARY,
                format: 'product',
            };
        }
        item.route = this.semanticPathService.transform({
            cxRoute: 'product',
            params: source,
        });
        return item;
    };
    ProductCarouselService.ctorParameters = function () { return [
        { type: ProductService },
        { type: ProductReferenceService },
        { type: SemanticPathService }
    ]; };
    ProductCarouselService.ɵprov = ɵɵdefineInjectable({ factory: function ProductCarouselService_Factory() { return new ProductCarouselService(ɵɵinject(ProductService), ɵɵinject(ProductReferenceService), ɵɵinject(SemanticPathService)); }, token: ProductCarouselService, providedIn: "root" });
    ProductCarouselService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ProductCarouselService);
    return ProductCarouselService;
}());

var ProductCarouselComponent = /** @class */ (function () {
    function ProductCarouselComponent(componentData, productService, features) {
        var _this = this;
        this.componentData = componentData;
        this.productService = productService;
        this.features = features;
        this.PRODUCT_SCOPE = this.features && this.features.isLevel('1.4') ? ProductScope.LIST : '';
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean));
        /**
         * returns an Obervable string for the title.
         */
        this.title$ = this.componentData$.pipe(map(function (data) { return data.title; }));
        /**
         * Obervable that holds an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = this.componentData$.pipe(map(function (data) { return data.productCodes.trim().split(' '); }), map(function (codes) {
            return codes.map(function (code) { return _this.productService.get(code, _this.PRODUCT_SCOPE); });
        }));
    }
    ProductCarouselComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: ProductService },
        { type: FeatureConfigService }
    ]; };
    ProductCarouselComponent = __decorate([
        Component({
            selector: 'cx-product-carousel',
            template: "<cx-carousel\n  [items]=\"items$ | async\"\n  [title]=\"title$ | async\"\n  [template]=\"carouselItem\"\n  itemWidth=\"285px\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media\n      *ngIf=\"item.images?.PRIMARY\"\n      [container]=\"item.images.PRIMARY\"\n      format=\"product\"\n    >\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductCarouselComponent);
    return ProductCarouselComponent;
}());

var ProductCarouselModule = /** @class */ (function () {
    function ProductCarouselModule() {
    }
    ProductCarouselModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                CarouselModule,
                MediaModule,
                RouterModule,
                UrlModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        ProductCarouselComponent: {
                            component: ProductCarouselComponent,
                        },
                    },
                }),
            ],
            declarations: [ProductCarouselComponent],
            entryComponents: [ProductCarouselComponent],
            exports: [ProductCarouselComponent],
        })
    ], ProductCarouselModule);
    return ProductCarouselModule;
}());

var ProductReferencesComponent = /** @class */ (function () {
    function ProductReferencesComponent(component, current, referenceService) {
        var _this = this;
        this.component = component;
        this.current = current;
        this.referenceService = referenceService;
        /**
         * returns an Obervable string for the title
         */
        this.title$ = this.component.data$.pipe(map(function (d) { return d.title; }));
        this.currentProductCode$ = this.current.getProduct().pipe(filter(Boolean), map(function (p) { return p.code; }), distinctUntilChanged(), tap(function () { return _this.referenceService.cleanReferences(); }));
        /**
         * Obervable with an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = combineLatest([
            this.currentProductCode$,
            this.component.data$,
        ]).pipe(switchMap(function (_a) {
            var _b = __read(_a, 2), code = _b[0], data = _b[1];
            return _this.getProductReferences(code, data.productReferenceTypes);
        }));
    }
    ProductReferencesComponent.prototype.getProductReferences = function (code, referenceType) {
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map(function (refs) { return refs.map(function (ref) { return of(ref.target); }); }));
    };
    ProductReferencesComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: CurrentProductService },
        { type: ProductReferenceService }
    ]; };
    ProductReferencesComponent = __decorate([
        Component({
            selector: 'cx-product-references',
            template: "<cx-carousel\n  [title]=\"title$ | async\"\n  [items]=\"items$ | async\"\n  [template]=\"carouselItem\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media\n      *ngIf=\"item.images?.PRIMARY\"\n      [container]=\"item.images.PRIMARY\"\n      format=\"product\"\n    >\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductReferencesComponent);
    return ProductReferencesComponent;
}());

var ProductReferencesModule = /** @class */ (function () {
    function ProductReferencesModule() {
    }
    ProductReferencesModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                CarouselModule,
                MediaModule,
                RouterModule,
                UrlModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        ProductReferencesComponent: {
                            component: ProductReferencesComponent,
                        },
                    },
                }),
            ],
            declarations: [ProductReferencesComponent],
            entryComponents: [ProductReferencesComponent],
            exports: [ProductReferencesComponent],
        })
    ], ProductReferencesModule);
    return ProductReferencesModule;
}());

var defaultScrollConfig = {
    view: {
        infiniteScroll: {
            active: false,
            productLimit: 0,
            showMoreButton: false,
        },
    },
};

var ProductImagesComponent = /** @class */ (function () {
    function ProductImagesComponent(currentProductService) {
        var _this = this;
        this.currentProductService = currentProductService;
        this.mainMediaContainer = new BehaviorSubject(null);
        this.product$ = this.currentProductService.getProduct().pipe(filter(Boolean), distinctUntilChanged(), tap(function (p) {
            return _this.mainMediaContainer.next(p.images ? p.images.PRIMARY : {});
        }));
        this.thumbs$ = this.product$.pipe(map(function (product) { return _this.createThumbs(product); }), 
        // TODO: deprecated, remove the below tap (issue:#6166)
        tap(function (thumbs) {
            _this.isThumbsEmpty = thumbs.length === 0;
        }));
        this.mainImage$ = combineLatest([this.product$, this.mainMediaContainer]).pipe(map(function (_a) {
            var _b = __read(_a, 2), container = _b[1];
            return container;
        }));
    }
    ProductImagesComponent.prototype.openImage = function (item) {
        this.mainMediaContainer.next(item);
    };
    ProductImagesComponent.prototype.isActive = function (thumbnail) {
        return this.mainMediaContainer.pipe(filter(Boolean), map(function (container) {
            return (container.zoom &&
                container.zoom.url &&
                thumbnail.zoom &&
                thumbnail.zoom.url &&
                container.zoom.url === thumbnail.zoom.url);
        }));
    };
    /** find the index of the main media in the list of media */
    ProductImagesComponent.prototype.getActive = function (thumbs) {
        return this.mainMediaContainer.pipe(filter(Boolean), map(function (container) {
            var current = thumbs.find(function (t) {
                return t.media &&
                    container.zoom &&
                    t.media.container &&
                    t.media.container.zoom &&
                    t.media.container.zoom.url === container.zoom.url;
            });
            return thumbs.indexOf(current);
        }));
    };
    /**
     * Return an array of CarouselItems for the product thumbnails.
     * In case there are less then 2 thumbs, we return null.
     */
    ProductImagesComponent.prototype.createThumbs = function (product) {
        if (!product.images ||
            !product.images.GALLERY ||
            product.images.GALLERY.length < 2) {
            return [];
        }
        return product.images.GALLERY.map(function (c) { return of({ container: c }); });
    };
    ProductImagesComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    ProductImagesComponent = __decorate([
        Component({
            selector: 'cx-product-images',
            template: "<ng-container *ngIf=\"mainImage$ | async as main\">\n  <cx-media [container]=\"main\" format=\"zoom\"> </cx-media>\n</ng-container>\n\n<ng-container *ngIf=\"thumbs$ | async as thumbs\">\n  <cx-carousel\n    *ngIf=\"thumbs.length\"\n    class=\"thumbs\"\n    [items]=\"thumbs\"\n    itemWidth=\"120px\"\n    [hideIndicators]=\"false\"\n    [template]=\"thumb\"\n  ></cx-carousel>\n</ng-container>\n\n<ng-template #thumb let-item=\"item\">\n  <cx-media\n    [container]=\"item.container\"\n    tabindex=\"0\"\n    format=\"thumbnail\"\n    (focus)=\"openImage(item.container)\"\n    [class.is-active]=\"isActive(item.container) | async\"\n  >\n  </cx-media>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductImagesComponent);
    return ProductImagesComponent;
}());

var ProductImagesModule = /** @class */ (function () {
    function ProductImagesModule() {
    }
    ProductImagesModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                MediaModule,
                OutletModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        ProductImagesComponent: {
                            component: ProductImagesComponent,
                        },
                    },
                }),
                CarouselModule,
            ],
            declarations: [ProductImagesComponent],
            entryComponents: [ProductImagesComponent],
            exports: [ProductImagesComponent],
        })
    ], ProductImagesModule);
    return ProductImagesModule;
}());

var ProductIntroComponent = /** @class */ (function () {
    function ProductIntroComponent(currentProductService, translationService, winRef) {
        this.currentProductService = currentProductService;
        this.translationService = translationService;
        this.winRef = winRef;
        this.reviewsTabAvailable = new BehaviorSubject(false);
        this.product$ = this.currentProductService.getProduct();
    }
    ProductIntroComponent.prototype.ngAfterContentChecked = function () {
        this.reviewsTabAvailable.next(!!this.getReviewsComponent());
    };
    // Scroll to views component on page and click "Reviews" tab
    ProductIntroComponent.prototype.showReviews = function () {
        var _this = this;
        // Use translated label for Reviews tab reference
        this.translationService
            .translate('TabPanelContainer.tabs.ProductReviewsTabComponent')
            .subscribe(function (reviewsTabLabel) {
            var tabsComponent = _this.getTabsComponent();
            var reviewsTab = _this.getTabByLabel(reviewsTabLabel, tabsComponent);
            var reviewsComponent = _this.getReviewsComponent();
            if (reviewsTab && reviewsComponent) {
                _this.clickTabIfInactive(reviewsTab);
                setTimeout(function () { return reviewsComponent.scrollIntoView({ behavior: 'smooth' }); }, 0);
            }
        })
            .unsubscribe();
    };
    // NOTE: Does not currently exists as its own component
    // but part of tabs component. This is likely to change in refactor.
    ProductIntroComponent.prototype.getReviewsComponent = function () {
        return this.winRef.document.querySelector('cx-product-reviews');
    };
    // Get Tabs Component if exists on page
    ProductIntroComponent.prototype.getTabsComponent = function () {
        return this.winRef.document.querySelector('cx-tab-paragraph-container');
    };
    // Click to activate tab if not already active
    ProductIntroComponent.prototype.clickTabIfInactive = function (tab) {
        if (!tab.classList.contains('active') ||
            tab.classList.contains('toggled')) {
            tab.click();
        }
    };
    // Get Tab by label if exists on page
    ProductIntroComponent.prototype.getTabByLabel = function (label, tabsComponent) {
        var e_1, _a;
        if (tabsComponent) {
            // NOTE: Reads through button tags to click on correct tab
            // There may be a better way of doing this now/after refactor
            var tabElements = tabsComponent.getElementsByTagName('button');
            try {
                // Look through button tab elements until finding tab with label
                for (var _b = __values(Array.from(tabElements)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var buttonElement = _c.value;
                    if (buttonElement.innerHTML.includes(label)) {
                        return buttonElement;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    ProductIntroComponent.ctorParameters = function () { return [
        { type: CurrentProductService },
        { type: TranslationService },
        { type: WindowRef }
    ]; };
    ProductIntroComponent = __decorate([
        Component({
            selector: 'cx-product-intro',
            template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"rating\" *ngIf=\"product.averageRating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n\n    <button\n      *ngIf=\"reviewsTabAvailable | async\"\n      class=\"btn btn-link\"\n      (click)=\"showReviews()\"\n    >\n      {{ 'productSummary.showReviews' | cxTranslate }}\n    </button>\n  </div>\n  <div class=\"rating\" *ngIf=\"!product.averageRating\">\n    {{ 'productDetails.noReviews' | cxTranslate }}\n  </div>\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductIntroComponent);
    return ProductIntroComponent;
}());

var ProductIntroModule = /** @class */ (function () {
    function ProductIntroModule() {
    }
    ProductIntroModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                I18nModule,
                StarRatingModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        ProductIntroComponent: {
                            component: ProductIntroComponent,
                        },
                    },
                }),
            ],
            declarations: [ProductIntroComponent],
            exports: [ProductIntroComponent],
            entryComponents: [ProductIntroComponent],
        })
    ], ProductIntroModule);
    return ProductIntroModule;
}());

var ProductListComponentService = /** @class */ (function () {
    function ProductListComponentService(productSearchService, routing, activatedRoute, currencyService, languageService, router) {
        var _this = this;
        this.productSearchService = productSearchService;
        this.routing = routing;
        this.activatedRoute = activatedRoute;
        this.currencyService = currencyService;
        this.languageService = languageService;
        this.router = router;
        // TODO: make it configurable
        this.defaultPageSize = 10;
        this.RELEVANCE_ALLCATEGORIES = ':relevance:allCategories:';
        this.searchResults$ = this.productSearchService
            .getResults()
            .pipe(filter(function (searchResult) { return Object.keys(searchResult).length > 0; }));
        this.searchByRouting$ = combineLatest([
            this.routing.getRouterState().pipe(distinctUntilChanged(function (x, y) {
                // router emits new value also when the anticipated `nextState` changes
                // but we want to perform search only when current url changes
                return x.state.url === y.state.url;
            })),
            // also trigger search on site context changes
            this.languageService.getActive(),
            this.currencyService.getActive(),
        ]).pipe(pluck(0, 'state'), tap(function (state) {
            var criteria = _this.getCriteriaFromRoute(state.params, state.queryParams);
            _this.search(criteria);
        }));
        /**
         * This stream should be used only on the Product Listing Page.
         *
         * It not only emits search results, but also performs a search on every change
         * of the route (i.e. route params or query params).
         *
         * When a user leaves the PLP route, the PLP component unsubscribes from this stream
         * so no longer the search is performed on route change.
         */
        this.model$ = combineLatest([
            this.searchResults$,
            this.searchByRouting$,
        ]).pipe(pluck(0), shareReplay({ bufferSize: 1, refCount: true }));
    }
    ProductListComponentService.prototype.clearSearchResults = function () {
        this.productSearchService.clearResults();
    };
    ProductListComponentService.prototype.getCriteriaFromRoute = function (routeParams, queryParams) {
        return {
            query: queryParams.query || this.getQueryFromRouteParams(routeParams),
            pageSize: queryParams.pageSize || this.defaultPageSize,
            currentPage: queryParams.currentPage,
            sortCode: queryParams.sortCode,
        };
    };
    ProductListComponentService.prototype.getQueryFromRouteParams = function (_a) {
        var brandCode = _a.brandCode, categoryCode = _a.categoryCode, query = _a.query;
        if (query) {
            return query;
        }
        if (categoryCode) {
            return this.RELEVANCE_ALLCATEGORIES + categoryCode;
        }
        if (brandCode) {
            return this.RELEVANCE_ALLCATEGORIES + brandCode;
        }
    };
    ProductListComponentService.prototype.search = function (criteria) {
        var query = criteria.query;
        var searchConfig = this.getSearchConfig(criteria);
        this.productSearchService.search(query, searchConfig);
    };
    ProductListComponentService.prototype.getSearchConfig = function (criteria) {
        var result = {
            currentPage: criteria.currentPage,
            pageSize: criteria.pageSize,
            sortCode: criteria.sortCode,
        };
        // drop empty keys
        Object.keys(result).forEach(function (key) { return !result[key] && delete result[key]; });
        return result;
    };
    ProductListComponentService.prototype.setQuery = function (query) {
        this.setQueryParams({ query: query, currentPage: undefined });
    };
    ProductListComponentService.prototype.viewPage = function (pageNumber) {
        this.setQueryParams({ currentPage: pageNumber });
    };
    /**
     * Get items from a given page without using navigation
     */
    ProductListComponentService.prototype.getPageItems = function (pageNumber) {
        var _this = this;
        this.routing
            .getRouterState()
            .subscribe(function (route) {
            var routeCriteria = _this.getCriteriaFromRoute(route.state.params, route.state.queryParams);
            var criteria = __assign(__assign({}, routeCriteria), { currentPage: pageNumber });
            _this.search(criteria);
        })
            .unsubscribe();
    };
    ProductListComponentService.prototype.sort = function (sortCode) {
        this.setQueryParams({ sortCode: sortCode });
    };
    ProductListComponentService.prototype.setQueryParams = function (queryParams) {
        this.router.navigate([], {
            queryParams: queryParams,
            queryParamsHandling: 'merge',
            relativeTo: this.activatedRoute,
        });
    };
    ProductListComponentService.ctorParameters = function () { return [
        { type: ProductSearchService },
        { type: RoutingService },
        { type: ActivatedRoute },
        { type: CurrencyService },
        { type: LanguageService },
        { type: Router }
    ]; };
    ProductListComponentService.ɵprov = ɵɵdefineInjectable({ factory: function ProductListComponentService_Factory() { return new ProductListComponentService(ɵɵinject(ProductSearchService), ɵɵinject(RoutingService), ɵɵinject(ActivatedRoute), ɵɵinject(CurrencyService), ɵɵinject(LanguageService), ɵɵinject(Router)); }, token: ProductListComponentService, providedIn: "root" });
    ProductListComponentService = __decorate([
        Injectable({ providedIn: 'root' })
    ], ProductListComponentService);
    return ProductListComponentService;
}());

var ViewModes;
(function (ViewModes) {
    ViewModes["Grid"] = "grid";
    ViewModes["List"] = "list";
})(ViewModes || (ViewModes = {}));
var ProductViewComponent = /** @class */ (function () {
    function ProductViewComponent() {
        this.iconTypes = ICON_TYPE;
        this.modeChange = new EventEmitter();
    }
    Object.defineProperty(ProductViewComponent.prototype, "buttonClass", {
        get: function () {
            var viewName = this.viewMode.toLowerCase();
            return "cx-product-" + viewName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewComponent.prototype, "viewMode", {
        /**
         *   Display icons inversely to allow users
         *   to see the view they will navigate to
         */
        get: function () {
            if (this.mode === 'list') {
                return this.iconTypes.GRID;
            }
            else if (this.mode === 'grid') {
                return this.iconTypes.LIST;
            }
        },
        enumerable: true,
        configurable: true
    });
    ProductViewComponent.prototype.changeMode = function () {
        var newMode = this.mode === ViewModes.Grid ? ViewModes.List : ViewModes.Grid;
        this.modeChange.emit(newMode);
    };
    __decorate([
        Input()
    ], ProductViewComponent.prototype, "mode", void 0);
    __decorate([
        Output()
    ], ProductViewComponent.prototype, "modeChange", void 0);
    ProductViewComponent = __decorate([
        Component({
            selector: 'cx-product-view',
            template: "<button\n  class=\"btn cx-product-layout\"\n  [ngClass]=\"buttonClass\"\n  (click)=\"changeMode()\"\n>\n  <cx-icon\n    *ngIf=\"viewMode === iconTypes.GRID\"\n    [type]=\"iconTypes.GRID\"\n  ></cx-icon>\n  <cx-icon\n    *ngIf=\"viewMode === iconTypes.LIST\"\n    [type]=\"iconTypes.LIST\"\n  ></cx-icon>\n</button>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductViewComponent);
    return ProductViewComponent;
}());

var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(pageLayoutService, productListComponentService, scrollConfig) {
        this.pageLayoutService = pageLayoutService;
        this.productListComponentService = productListComponentService;
        this.scrollConfig = scrollConfig;
        this.subscription = new Subscription();
        this.model$ = this.productListComponentService
            .model$;
        this.viewMode$ = new BehaviorSubject(ViewModes.Grid);
        this.ViewModes = ViewModes;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isInfiniteScroll = this.scrollConfig.view.infiniteScroll.active;
        this.productListComponentService.clearSearchResults();
        this.subscription.add(this.pageLayoutService.templateName$.pipe(take(1)).subscribe(function (template) {
            _this.viewMode$.next(template === 'ProductGridPageTemplate'
                ? ViewModes.Grid
                : ViewModes.List);
        }));
    };
    ProductListComponent.prototype.sortList = function (sortCode) {
        this.productListComponentService.sort(sortCode);
    };
    ProductListComponent.prototype.setViewMode = function (mode) {
        this.viewMode$.next(mode);
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductListComponent.ctorParameters = function () { return [
        { type: PageLayoutService },
        { type: ProductListComponentService },
        { type: ViewConfig }
    ]; };
    ProductListComponent = __decorate([
        Component({
            selector: 'cx-product-list',
            template: "<div class=\"cx-page\" *ngIf=\"model$ | async as model\">\n  <section class=\"cx-page-section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12 col-lg-12\" *ngIf=\"viewMode$ | async as viewMode\">\n          <div class=\"cx-sorting top\">\n            <div class=\"row\">\n              <div class=\"col-12 col-lg-4 mr-auto\">\n                <div class=\"form-group cx-sort-dropdown\">\n                  <cx-sorting\n                    [sortOptions]=\"model.sorts\"\n                    (sortListEvent)=\"sortList($event)\"\n                    [selectedOption]=\"model.pagination.sort\"\n                    placeholder=\"{{\n                      'productList.sortByRelevance' | cxTranslate\n                    }}\"\n                  ></cx-sorting>\n                </div>\n              </div>\n              <div *ngIf=\"!isInfiniteScroll\" class=\"col-auto\">\n                <div\n                  class=\"cx-pagination\"\n                  aria-label=\"product search pagination\"\n                >\n                  <cx-pagination\n                    [pagination]=\"model.pagination\"\n                    queryParam=\"currentPage\"\n                    [defaultPage]=\"0\"\n                  ></cx-pagination>\n                </div>\n              </div>\n              <div class=\"col-auto ml-auto ml-lg-0\">\n                <cx-product-view\n                  (modeChange)=\"setViewMode($event)\"\n                  [mode]=\"viewMode\"\n                ></cx-product-view>\n              </div>\n            </div>\n          </div>\n          <div class=\"cx-product-container\">\n            <!-- Product list when using pagination -->\n            <ng-container *ngIf=\"!isInfiniteScroll; else infiniteScroll\">\n              <ng-container *ngIf=\"viewMode === ViewModes.Grid\">\n                <div class=\"row\">\n                  <cx-product-grid-item\n                    *ngFor=\"let product of model?.products\"\n                    [product]=\"product\"\n                    class=\"col-12 col-sm-6 col-md-4\"\n                  ></cx-product-grid-item>\n                </div>\n              </ng-container>\n\n              <ng-container *ngIf=\"viewMode === ViewModes.List\">\n                <cx-product-list-item\n                  *ngFor=\"let product of model?.products\"\n                  [product]=\"product\"\n                  class=\"cx-product-search-list\"\n                ></cx-product-list-item>\n              </ng-container>\n            </ng-container>\n\n            <!-- Product list when using infinite scroll -->\n            <ng-template #infiniteScroll>\n              <cx-product-scroll\n                [scrollConfig]=\"scrollConfig\"\n                [model]=\"model\"\n                [inputViewMode]=\"viewMode\"\n              ></cx-product-scroll>\n            </ng-template>\n          </div>\n          <div class=\"cx-sorting bottom\">\n            <div class=\"row\">\n              <div class=\"col-12 col-lg-4 mr-auto\">\n                <div class=\"form-group cx-sort-dropdown\">\n                  <cx-sorting\n                    [sortOptions]=\"model.sorts\"\n                    (sortListEvent)=\"sortList($event)\"\n                    [selectedOption]=\"model.pagination.sort\"\n                    placeholder=\"{{\n                      'productList.sortByRelevance' | cxTranslate\n                    }}\"\n                  ></cx-sorting>\n                </div>\n              </div>\n              <div\n                *ngIf=\"!isInfiniteScroll\"\n                class=\"col-auto\"\n                aria-label=\"product search pagination\"\n              >\n                <div class=\"cx-pagination\">\n                  <cx-pagination\n                    [pagination]=\"model.pagination\"\n                    queryParam=\"currentPage\"\n                    [defaultPage]=\"0\"\n                  ></cx-pagination>\n                </div>\n              </div>\n              <div class=\"col-auto ml-auto ml-lg-0\">\n                <cx-product-view\n                  (modeChange)=\"setViewMode($event)\"\n                  [mode]=\"viewMode\"\n                ></cx-product-view>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n"
        })
    ], ProductListComponent);
    return ProductListComponent;
}());

var ProductScrollComponent = /** @class */ (function () {
    function ProductScrollComponent(productListComponentService, ref) {
        this.productListComponentService = productListComponentService;
        this.ref = ref;
        this.subscription = new Subscription();
        this.ViewModes = ViewModes;
        this.appendProducts = false;
        this.resetList = false;
        this.isMaxProducts = false;
        this.isLastPage = false;
        this.isEmpty = false;
    }
    Object.defineProperty(ProductScrollComponent.prototype, "setConfig", {
        set: function (inputConfig) {
            this.setComponentConfigurations(inputConfig);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductScrollComponent.prototype, "setModel", {
        set: function (inputModel) {
            this.infiniteScrollOperations(inputModel);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductScrollComponent.prototype, "setViewMode", {
        set: function (inputViewMode) {
            this.inputViewMode = inputViewMode;
            //If viewMode is already set (meaning it is not the first load)
            //Reset the product list
            if (this.viewMode) {
                this.resetListOnViewModeChange();
            }
            else {
                //If viewMode is not set (meaning it is the first load)
                //Set the viewMode
                this.viewMode = inputViewMode;
            }
        },
        enumerable: true,
        configurable: true
    });
    ProductScrollComponent.prototype.scrollPage = function (pageNumber) {
        this.appendProducts = true;
        this.ref.markForCheck();
        this.productListComponentService.getPageItems(pageNumber);
    };
    ProductScrollComponent.prototype.loadNextPage = function (pageNumber) {
        this.isMaxProducts = false;
        this.scrollPage(pageNumber);
    };
    ProductScrollComponent.prototype.scrollToTop = function () {
        window.scroll(0, 0);
    };
    ProductScrollComponent.prototype.setComponentConfigurations = function (scrollConfig) {
        var isButton = scrollConfig.view.infiniteScroll.showMoreButton;
        var configProductLimit = scrollConfig.view.infiniteScroll.productLimit;
        //Display "show more" button every time when button configuration is true
        //Otherwise, only display "show more" when the configuration product limit is reached
        this.productLimit = isButton ? 1 : configProductLimit;
    };
    ProductScrollComponent.prototype.infiniteScrollOperations = function (inputModel) {
        if (this.isSamePage(inputModel)) {
            return;
        }
        if (this.appendProducts) {
            this.model = __assign(__assign({}, inputModel), { products: this.model.products.concat(inputModel.products) });
        }
        else {
            this.model = inputModel;
            this.maxProducts = this.productLimit;
        }
        this.setConditions();
        this.ref.markForCheck();
    };
    ProductScrollComponent.prototype.resetListOnViewModeChange = function () {
        this.scrollToTop();
        this.resetList = true;
        this.productListComponentService.getPageItems(0);
    };
    //Set booleans after model has been retrieved
    ProductScrollComponent.prototype.setConditions = function () {
        this.isEmpty = !this.model.products || this.model.products.length === 0;
        this.isLastPage =
            this.model.pagination.currentPage ===
                this.model.pagination.totalPages - 1;
        this.isMaxProducts =
            this.productLimit &&
                this.productLimit !== 0 &&
                this.model.products.length >= this.maxProducts;
        //Add the productLimit to the current number of products to determine the next max number of products
        if (this.isMaxProducts) {
            this.maxProducts = this.model.products.length + this.productLimit;
        }
        //Only change viewMode once the new model is set
        //This prevents flickering issues
        if (this.viewMode !== this.inputViewMode) {
            this.viewMode = this.inputViewMode;
        }
        this.resetList = false;
        this.appendProducts = false;
    };
    /**
     * @deprecated at release 2.0.
     * If the new list is the same and it is not intended to reset the list then return true
     * Return false otherwise.
     */
    ProductScrollComponent.prototype.isSamePage = function (inputModel) {
        if (!this.resetList &&
            this.model &&
            this.model.breadcrumbs &&
            inputModel.breadcrumbs &&
            this.model.breadcrumbs.length > 0 &&
            inputModel.breadcrumbs.length > 0) {
            if (this.model.breadcrumbs.length === inputModel.breadcrumbs.length) {
                for (var i = 0; i < this.model.breadcrumbs.length; i++) {
                    if (this.model.breadcrumbs[i].facetCode ===
                        inputModel.breadcrumbs[i].facetCode &&
                        this.model.breadcrumbs[i].facetValueCode ===
                            inputModel.breadcrumbs[i].facetValueCode &&
                        this.model.breadcrumbs[i].removeQuery.query.value ===
                            inputModel.breadcrumbs[i].removeQuery.query.value &&
                        this.model.pagination.currentPage ===
                            inputModel.pagination.currentPage) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    ProductScrollComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductScrollComponent.ctorParameters = function () { return [
        { type: ProductListComponentService },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input('scrollConfig')
    ], ProductScrollComponent.prototype, "setConfig", null);
    __decorate([
        Input('model')
    ], ProductScrollComponent.prototype, "setModel", null);
    __decorate([
        Input('inputViewMode')
    ], ProductScrollComponent.prototype, "setViewMode", null);
    ProductScrollComponent = __decorate([
        Component({
            selector: 'cx-product-scroll',
            template: "<ng-container *ngIf=\"viewMode === ViewModes.Grid\">\n  <div\n    infiniteScroll\n    [infiniteScrollDistance]=\"5\"\n    [infiniteScrollThrottle]=\"50\"\n    [infiniteScrollDisabled]=\"isMaxProducts || isLastPage || isEmpty\"\n    (scrolled)=\"scrollPage(model?.pagination?.currentPage + 1)\"\n  >\n    <div class=\"row\">\n      <cx-product-grid-item\n        *ngFor=\"let product of model?.products\"\n        [product]=\"product\"\n        class=\"col-12 col-sm-6 col-md-4\"\n      ></cx-product-grid-item>\n    </div>\n    <div\n      [className]=\"\n        !isLastPage && model?.pagination?.currentPage > 0\n          ? 'cx-double-btn-container grid-btn-padding'\n          : 'cx-single-btn-container grid-btn-padding'\n      \"\n    >\n      <div\n        *ngIf=\"\n          (isMaxProducts || isLastPage) && model?.pagination?.currentPage > 0\n        \"\n        (click)=\"scrollToTop()\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'productList.backToTopBtn' | cxTranslate }}\n      </div>\n      <div\n        *ngIf=\"isMaxProducts && !isLastPage\"\n        (click)=\"loadNextPage(model?.pagination?.currentPage + 1)\"\n        class=\"btn btn-block btn-action align-btn\"\n      >\n        {{ 'productList.showMoreBtn' | cxTranslate }}\n      </div>\n    </div>\n    <div *ngIf=\"appendProducts\" class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"viewMode === ViewModes.List\">\n  <div\n    infiniteScroll\n    [infiniteScrollDistance]=\"3\"\n    [infiniteScrollThrottle]=\"50\"\n    [infiniteScrollDisabled]=\"isMaxProducts || isLastPage || isEmpty\"\n    (scrolled)=\"scrollPage(model?.pagination?.currentPage + 1)\"\n  >\n    <cx-product-list-item\n      *ngFor=\"let product of model?.products\"\n      [product]=\"product\"\n      class=\"cx-product-search-list\"\n    ></cx-product-list-item>\n    <div\n      [className]=\"\n        !isLastPage && model?.pagination?.currentPage > 0\n          ? 'cx-double-btn-container'\n          : 'cx-single-btn-container'\n      \"\n    >\n      <div\n        *ngIf=\"\n          (isMaxProducts || isLastPage) && model?.pagination?.currentPage > 0\n        \"\n        (click)=\"scrollToTop()\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'productList.backToTopBtn' | cxTranslate }}\n      </div>\n      <div\n        *ngIf=\"isMaxProducts && !isLastPage\"\n        (click)=\"loadNextPage(model?.pagination?.currentPage + 1)\"\n        class=\"btn btn-block btn-action align-btn\"\n      >\n        {{ 'productList.showMoreBtn' | cxTranslate }}\n      </div>\n    </div>\n    <div *ngIf=\"appendProducts\" class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n</ng-container>\n"
        })
    ], ProductScrollComponent);
    return ProductScrollComponent;
}());

var ProductFacetNavigationComponent = /** @class */ (function () {
    function ProductFacetNavigationComponent(modalService, activatedRoute, productListComponentService) {
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.productListComponentService = productListComponentService;
        this.iconTypes = ICON_TYPE;
        this.collapsedFacets = new Set();
        this.showAllPerFacetMap = new Map();
        this.queryCodec = new HttpUrlEncodingCodec();
    }
    ProductFacetNavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.activeFacetValueCode = params.categoryCode || params.brandCode;
        });
        this.searchResult$ = this.productListComponentService.model$.pipe(tap(function (searchResult) {
            if (searchResult.facets) {
                searchResult.facets.forEach(function (el) {
                    _this.showAllPerFacetMap.set(el.name, false);
                });
            }
        }));
        this.visibleFacets$ = this.searchResult$.pipe(map(function (searchResult) {
            return searchResult.facets
                ? searchResult.facets.filter(function (facet) { return facet.visible; })
                : [];
        }));
    };
    ProductFacetNavigationComponent.prototype.openFilterModal = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    };
    ProductFacetNavigationComponent.prototype.toggleValue = function (query) {
        this.productListComponentService.setQuery(this.queryCodec.decodeValue(query));
    };
    ProductFacetNavigationComponent.prototype.showLess = function (facetName) {
        this.updateShowAllPerFacetMap(facetName, false);
    };
    ProductFacetNavigationComponent.prototype.showMore = function (facetName) {
        this.updateShowAllPerFacetMap(facetName, true);
    };
    ProductFacetNavigationComponent.prototype.updateShowAllPerFacetMap = function (facetName, showAll) {
        this.showAllPerFacetMap.set(facetName, showAll);
    };
    ProductFacetNavigationComponent.prototype.isFacetCollapsed = function (facetName) {
        return this.collapsedFacets.has(facetName);
    };
    ProductFacetNavigationComponent.prototype.toggleFacet = function (facetName) {
        if (this.collapsedFacets.has(facetName)) {
            this.collapsedFacets.delete(facetName);
        }
        else {
            this.collapsedFacets.add(facetName);
        }
    };
    ProductFacetNavigationComponent.prototype.getVisibleFacetValues = function (facet) {
        return facet.values.slice(0, this.showAllPerFacetMap.get(facet.name)
            ? facet.values.length
            : facet.topValueCount);
    };
    ProductFacetNavigationComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    ProductFacetNavigationComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: ActivatedRoute },
        { type: ProductListComponentService }
    ]; };
    ProductFacetNavigationComponent = __decorate([
        Component({
            selector: 'cx-product-facet-navigation',
            template: "<ng-container *ngIf=\"searchResult$ | async as searchResult\">\n  <div class=\"cx-search-facet\">\n    <ng-container *ngIf=\"searchResult.breadcrumbs?.length\">\n      <h4 class=\"cx-facet-filter-header\">\n        {{ 'productList.filterBy.label' | cxTranslate }}\n      </h4>\n      <div class=\"cx-facet-filter-container\">\n        <div\n          *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n          [hidden]=\"breadcrumb.facetValueCode === activeFacetValueCode\"\n          class=\"cx-facet-filter-pill\"\n          role=\"filter\"\n        >\n          <span class=\"cx-facet-pill-value\">{{\n            breadcrumb.facetValueName\n          }}</span>\n          <button\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n          >\n            <span aria-hidden=\"true\">\n              <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n            </span>\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"visibleFacets$ | async as visibleFacets\">\n      <ng-container *ngFor=\"let facet of visibleFacets; let facetId = index\">\n        <div class=\"cx-facet-group\">\n          <div class=\"cx-facet-header\">\n            <a\n              class=\"cx-facet-header-link\"\n              (click)=\"toggleFacet(facet.name)\"\n              [attr.aria-expanded]=\"!isFacetCollapsed(facet.name)\"\n              aria-controls=\"\"\n              tabindex=\"0\"\n            >\n              {{ facet.name }}\n              <cx-icon\n                [type]=\"\n                  isFacetCollapsed(facet.name)\n                    ? iconTypes.EXPAND\n                    : iconTypes.COLLAPSE\n                \"\n              ></cx-icon>\n            </a>\n          </div>\n          <ng-container *ngIf=\"!isFacetCollapsed(facet.name)\">\n            <ul class=\"cx-facet-list\">\n              <li\n                *ngFor=\"\n                  let value of getVisibleFacetValues(facet);\n                  index as facetValueId\n                \"\n              >\n                <div class=\"form-check\">\n                  <label class=\"form-checkbox cx-facet-label\">\n                    <input\n                      class=\"form-check-input cx-facet-checkbox\"\n                      role=\"checkbox\"\n                      type=\"checkbox\"\n                      aria-checked=\"true\"\n                      [checked]=\"value.selected\"\n                      (change)=\"toggleValue(value.query.query.value)\"\n                    />\n                    <span class=\"cx-facet-text\"\n                      >{{ value.name }} ({{ value.count }})</span\n                    >\n                  </label>\n                </div>\n              </li>\n              <li\n                class=\"cx-facet-toggle-btn\"\n                (click)=\"showLess(facet.name)\"\n                *ngIf=\"showAllPerFacetMap.get(facet.name)\"\n              >\n                {{ 'productList.showLess' | cxTranslate }}\n              </li>\n              <li\n                class=\"cx-facet-toggle-btn\"\n                (click)=\"showMore(facet.name)\"\n                *ngIf=\"\n                  !showAllPerFacetMap.get(facet.name) &&\n                  facet.values.length > facet.topValueCount\n                \"\n                tabindex=\"0\"\n              >\n                {{ 'productList.showMore' | cxTranslate }}\n              </li>\n            </ul>\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n\n  <div class=\"cx-facet-mobile\">\n    <div class=\"container\">\n      <button\n        class=\"btn btn-action btn-block cx-facet-mobile-btn\"\n        (click)=\"openFilterModal(content)\"\n      >\n        {{ 'productList.filterBy.action' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n\n  <!-- START ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n  <div class=\"container\">\n    <div class=\"cx-facet-mobile\" *ngIf=\"searchResult.breadcrumbs?.length\">\n      <div class=\"cx-facet-filter-container\">\n        <h4 class=\"cx-facet-filter-header\">\n          {{ 'productList.appliedFilter' | cxTranslate }}\n        </h4>\n        <div\n          class=\"cx-facet-filter-pill\"\n          role=\"filter\"\n          *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n        >\n          <span class=\"cx-facet-pill-value\">\n            {{ breadcrumb.facetValueName }}\n          </span>\n          <button\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n          >\n            <span aria-hidden=\"true\">\n              <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- END ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"cx-facet-modal-title\" id=\"modal-title\">\n        {{ 'productList.filterBy.label' | cxTranslate }}\n      </h4>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"d('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <div class=\"modal-body cx-facet-modal-body\">\n      <form>\n        <div\n          class=\"form-group\"\n          *ngFor=\"let facet of searchResult.facets; index as facetId\"\n        >\n          <h4 class=\"cx-facet-modal-label\" for=\"megapixels\">\n            {{ facet.name }}\n          </h4>\n          <div class=\"input-group\">\n            <ul class=\"cx-facet-list\">\n              <li *ngFor=\"let value of facet.values; index as facetValueId\">\n                <div class=\"form-check\">\n                  <label class=\"form-checkbox cx-facet-label\">\n                    <input\n                      class=\"form-check-input cx-facet-checkbox\"\n                      role=\"checkbox\"\n                      type=\"checkbox\"\n                      aria-checked=\"true\"\n                      [checked]=\"value.selected\"\n                      (change)=\"toggleValue(value.query.query.value)\"\n                    />\n                    <span class=\"cx-facet-text\"\n                      >{{ value.name }} ({{ value.count }})</span\n                    >\n                  </label>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductFacetNavigationComponent);
    return ProductFacetNavigationComponent;
}());

var ProductGridItemComponent = /** @class */ (function () {
    function ProductGridItemComponent() {
    }
    __decorate([
        Input()
    ], ProductGridItemComponent.prototype, "product", void 0);
    ProductGridItemComponent = __decorate([
        Component({
            selector: 'cx-product-grid-item',
            template: "<a\n  [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n  class=\"cx-product-image-container\"\n  tabindex=\"-1\"\n>\n  <cx-media\n    class=\"cx-product-image\"\n    [container]=\"product.images?.PRIMARY\"\n    format=\"product\"\n    [alt]=\"product.summary\"\n  ></cx-media>\n</a>\n<a\n  [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n  class=\"cx-product-name\"\n  [innerHTML]=\"product.nameHtml\"\n></a>\n\n<div class=\"cx-product-rating\">\n  <cx-star-rating\n    *ngIf=\"product.averageRating\"\n    [rating]=\"product?.averageRating\"\n    [disabled]=\"true\"\n  ></cx-star-rating>\n  <div *ngIf=\"!product.averageRating\">\n    {{ 'productDetails.noReviews' | cxTranslate }}\n  </div>\n</div>\n<div class=\"cx-product-price-container\">\n  <div class=\"cx-product-price\" aria-label=\"Product price\">\n    {{ product.price?.formattedValue }}\n  </div>\n</div>\n\n<ng-container *cxFeatureLevel=\"'1.5'\">\n  <div class=\"cx-variant-style-icons\" *ngIf=\"product.variantOptions\">\n    <cx-variant-style-icons\n      [variants]=\"product.variantOptions\"\n    ></cx-variant-style-icons>\n  </div>\n</ng-container>\n\n<cx-add-to-cart\n  *ngIf=\"product.stock?.stockLevelStatus !== 'outOfStock'\"\n  [showQuantity]=\"false\"\n  [product]=\"product\"\n></cx-add-to-cart>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductGridItemComponent);
    return ProductGridItemComponent;
}());

var ProductListItemComponent = /** @class */ (function () {
    function ProductListItemComponent() {
    }
    __decorate([
        Input()
    ], ProductListItemComponent.prototype, "product", void 0);
    ProductListItemComponent = __decorate([
        Component({
            selector: 'cx-product-list-item',
            template: "<div class=\"row\">\n  <div class=\"col-12 col-md-4\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n      class=\"cx-product-image-container\"\n      tabindex=\"-1\"\n    >\n      <cx-media\n        class=\"cx-product-image\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"product\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n    </a>\n  </div>\n  <div class=\"col-12 col-md-8\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n      class=\"cx-product-name\"\n      [innerHtml]=\"product.nameHtml\"\n    ></a>\n    <cx-star-rating\n      *ngIf=\"product.averageRating\"\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div *ngIf=\"!product.averageRating\" class=\"cx-product-no-review\">\n      {{ 'productDetails.noReviews' | cxTranslate }}\n    </div>\n    <div class=\"cx-product-price\" aria-label=\"Product price\">\n      {{ product.price?.formattedValue }}\n    </div>\n\n    <ng-container *cxFeatureLevel=\"'1.5'\">\n      <cx-variant-style-icons\n        *ngIf=\"product.variantOptions\"\n        [variants]=\"product.variantOptions\"\n      ></cx-variant-style-icons>\n    </ng-container>\n\n    <div class=\"row\">\n      <div class=\"col-12 col-md-8\">\n        <p class=\"cx-product-summary\" [innerHtml]=\"product.summary\">\n          {{ product.summary }}\n        </p>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <cx-add-to-cart\n          *ngIf=\"product.stock?.stockLevelStatus !== 'outOfStock'\"\n          [showQuantity]=\"false\"\n          [product]=\"product\"\n        ></cx-add-to-cart>\n      </div>\n    </div>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductListItemComponent);
    return ProductListItemComponent;
}());

var ProductVariantsComponent = /** @class */ (function () {
    function ProductVariantsComponent(currentProductService) {
        this.currentProductService = currentProductService;
        this.variants = [];
        this.variantType = VariantType;
    }
    ProductVariantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product$ = this.currentProductService.getProduct().pipe(filter(function (product) { return !!(product && product.baseOptions); }), distinctUntilChanged(), tap(function (product) {
            product.baseOptions.forEach(function (option) {
                if (option && option.variantType) {
                    _this.variants[option.variantType] = option;
                }
            });
        }));
    };
    ProductVariantsComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    ProductVariantsComponent = __decorate([
        Component({
            selector: 'cx-product-variants',
            template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"variant-section\" *ngIf=\"product.baseOptions?.length\">\n    <cx-variant-style-selector\n      *ngIf=\"variants[variantType.STYLE]\"\n      [variants]=\"variants[variantType.STYLE]\"\n    ></cx-variant-style-selector>\n    <cx-variant-size-selector\n      *ngIf=\"variants[variantType.SIZE]\"\n      [product]=\"product\"\n      [variants]=\"variants[variantType.SIZE]\"\n    ></cx-variant-size-selector>\n    <cx-variant-color-selector\n      *ngIf=\"variants[variantType.COLOR]\"\n      [product]=\"product\"\n      [variants]=\"variants[variantType.COLOR]\"\n    ></cx-variant-color-selector>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductVariantsComponent);
    return ProductVariantsComponent;
}());

var VariantStyleSelectorComponent = /** @class */ (function () {
    function VariantStyleSelectorComponent(config, productService, routingService) {
        this.config = config;
        this.productService = productService;
        this.routingService = routingService;
        this.variantQualifier = VariantQualifier;
    }
    VariantStyleSelectorComponent.prototype.getVariantOptionValue = function (qualifiers) {
        var obj = qualifiers.find(function (q) { return q.qualifier === VariantQualifier.STYLE; });
        return obj ? obj.value : '';
    };
    VariantStyleSelectorComponent.prototype.getVariantThumbnailUrl = function (variantOptionQualifiers) {
        var qualifier = variantOptionQualifiers.find(function (item) { return item.image; });
        return qualifier
            ? "" + this.config.backend.occ.baseUrl + qualifier.image.url
            : '';
    };
    VariantStyleSelectorComponent.prototype.changeStyle = function (code) {
        var _this = this;
        if (code) {
            this.productService
                .get(code, ProductScope.LIST)
                .pipe(
            // below call might looks redundant but in fact this data is going to be loaded anyways
            // we're just calling it earlier and storing
            filter(Boolean), take(1))
                .subscribe(function (product) {
                _this.routingService.go({
                    cxRoute: 'product',
                    params: product,
                });
            });
        }
        return null;
    };
    VariantStyleSelectorComponent.ctorParameters = function () { return [
        { type: OccConfig },
        { type: ProductService },
        { type: RoutingService }
    ]; };
    __decorate([
        Input()
    ], VariantStyleSelectorComponent.prototype, "variants", void 0);
    VariantStyleSelectorComponent = __decorate([
        Component({
            selector: 'cx-variant-style-selector',
            template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div *ngIf=\"variants.selected\" class=\"variant-name\">\n      {{ 'variant.style' | cxTranslate }}:\n      <span class=\"style-name\">{{\n        getVariantOptionValue(variants?.selected.variantOptionQualifiers)\n      }}</span>\n    </div>\n    <ul class=\"variant-list\">\n      <li\n        *ngFor=\"let v of variants?.options\"\n        [ngClass]=\"{\n          'selected-variant': v.code === variants?.selected.code\n        }\"\n      >\n        <img\n          (click)=\"changeStyle(v.code)\"\n          src=\"{{ getVariantThumbnailUrl(v.variantOptionQualifiers) }}\"\n          title=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n          alt=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n        />\n      </li>\n    </ul>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], VariantStyleSelectorComponent);
    return VariantStyleSelectorComponent;
}());

var VariantStyleSelectorModule = /** @class */ (function () {
    function VariantStyleSelectorModule() {
    }
    VariantStyleSelectorModule = __decorate([
        NgModule({
            imports: [CommonModule, RouterModule, UrlModule, I18nModule],
            declarations: [VariantStyleSelectorComponent],
            entryComponents: [VariantStyleSelectorComponent],
            exports: [VariantStyleSelectorComponent],
        })
    ], VariantStyleSelectorModule);
    return VariantStyleSelectorModule;
}());

var VariantSizeSelectorComponent = /** @class */ (function () {
    function VariantSizeSelectorComponent(productService, routingService) {
        this.productService = productService;
        this.routingService = routingService;
    }
    VariantSizeSelectorComponent.prototype.changeSize = function (code) {
        var _this = this;
        if (code) {
            this.productService
                .get(code, ProductScope.LIST)
                .pipe(
            // below call might looks redundant but in fact this data is going to be loaded anyways
            // we're just calling it earlier and storing
            filter(Boolean), take(1))
                .subscribe(function (product) {
                _this.routingService.go({
                    cxRoute: 'product',
                    params: product,
                });
            });
        }
        return null;
    };
    VariantSizeSelectorComponent.prototype.getVariantOptionValue = function (qualifiers) {
        var obj = qualifiers.find(function (q) { return q.qualifier === VariantQualifier.SIZE; });
        return obj ? obj.value : '';
    };
    VariantSizeSelectorComponent.ctorParameters = function () { return [
        { type: ProductService },
        { type: RoutingService }
    ]; };
    __decorate([
        Input()
    ], VariantSizeSelectorComponent.prototype, "product", void 0);
    __decorate([
        Input()
    ], VariantSizeSelectorComponent.prototype, "variants", void 0);
    VariantSizeSelectorComponent = __decorate([
        Component({
            selector: 'cx-variant-size-selector',
            template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div class=\"variant-name\">{{ 'variant.size' | cxTranslate }}:</div>\n    <select\n      (change)=\"changeSize($event.target.value)\"\n      class=\"form-control variant-select\"\n    >\n      <option\n        *ngFor=\"let v of variants?.options\"\n        value=\"{{ v.code }}\"\n        [selected]=\"v.code === product?.code\"\n        >{{ getVariantOptionValue(v.variantOptionQualifiers) }}</option\n      >\n    </select>\n    <a\n      href=\"#\"\n      class=\"size-guide\"\n      title=\"{{ 'variant.sizeGuideLabel' | cxTranslate }}\"\n    >\n      {{ 'variant.sizeGuideLabel' | cxTranslate }}\n    </a>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], VariantSizeSelectorComponent);
    return VariantSizeSelectorComponent;
}());

var VariantSizeSelectorModule = /** @class */ (function () {
    function VariantSizeSelectorModule() {
    }
    VariantSizeSelectorModule = __decorate([
        NgModule({
            imports: [CommonModule, RouterModule, UrlModule, I18nModule],
            declarations: [VariantSizeSelectorComponent],
            entryComponents: [VariantSizeSelectorComponent],
            exports: [VariantSizeSelectorComponent],
        })
    ], VariantSizeSelectorModule);
    return VariantSizeSelectorModule;
}());

var VariantColorSelectorComponent = /** @class */ (function () {
    function VariantColorSelectorComponent(routingService) {
        this.routingService = routingService;
    }
    VariantColorSelectorComponent.prototype.changeColor = function (code, name) {
        if (code) {
            this.routingService.go({
                cxRoute: 'product',
                params: { code: code, name: name },
            });
        }
        return null;
    };
    VariantColorSelectorComponent.prototype.getVariantOptionValue = function (qualifiers) {
        var obj = qualifiers.find(function (q) { return q.qualifier === VariantQualifier.COLOR; });
        return obj ? obj.value : '';
    };
    VariantColorSelectorComponent.ctorParameters = function () { return [
        { type: RoutingService }
    ]; };
    __decorate([
        Input()
    ], VariantColorSelectorComponent.prototype, "product", void 0);
    __decorate([
        Input()
    ], VariantColorSelectorComponent.prototype, "variants", void 0);
    VariantColorSelectorComponent = __decorate([
        Component({
            selector: 'cx-variant-color-selector',
            template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div class=\"variant-name\">{{ 'variant.color' | cxTranslate }}:</div>\n\n    <select\n      (change)=\"changeColor($event.target.value, product?.name)\"\n      class=\"form-control variant-select\"\n    >\n      <option\n        *ngFor=\"let v of variants?.options\"\n        value=\"{{ v.code }}\"\n        [selected]=\"v.code === product?.code\"\n        >{{ getVariantOptionValue(v.variantOptionQualifiers) }}</option\n      >\n    </select>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], VariantColorSelectorComponent);
    return VariantColorSelectorComponent;
}());

var VariantColorSelectorModule = /** @class */ (function () {
    function VariantColorSelectorModule() {
    }
    VariantColorSelectorModule = __decorate([
        NgModule({
            imports: [CommonModule, RouterModule, UrlModule, I18nModule],
            declarations: [VariantColorSelectorComponent],
            entryComponents: [VariantColorSelectorComponent],
            exports: [VariantColorSelectorComponent],
        })
    ], VariantColorSelectorModule);
    return VariantColorSelectorModule;
}());

var VariantStyleIconsComponent = /** @class */ (function () {
    function VariantStyleIconsComponent(config) {
        this.config = config;
        this.variantNames = {};
    }
    VariantStyleIconsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.variants.forEach(function (variant) {
            _this.variantNames[variant.code] = _this.getVariantName(variant.variantOptionQualifiers);
        });
    };
    VariantStyleIconsComponent.prototype.getVariantThumbnailUrl = function (variantOptionQualifiers) {
        var thumbnail = variantOptionQualifiers.find(function (item) { return item.qualifier === VariantQualifier.THUMBNAIL; });
        return thumbnail
            ? "" + this.config.backend.occ.baseUrl + thumbnail.image.url
            : '';
    };
    VariantStyleIconsComponent.prototype.getVariantName = function (variantOptionQualifiers) {
        var rollupProperty = variantOptionQualifiers.find(function (item) { return item.qualifier === VariantQualifier.ROLLUP_PROPERTY; });
        var property = rollupProperty
            ? variantOptionQualifiers.find(function (item) { return item.qualifier === rollupProperty.value; })
            : null;
        return property ? property.value : '';
    };
    VariantStyleIconsComponent.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
    __decorate([
        Input()
    ], VariantStyleIconsComponent.prototype, "variants", void 0);
    VariantStyleIconsComponent = __decorate([
        Component({
            selector: 'cx-variant-style-icons',
            template: "<ul class=\"variant-list\">\n  <li *ngFor=\"let v of variants\">\n    <img\n      [attr.src]=\"getVariantThumbnailUrl(v.variantOptionQualifiers)\"\n      [attr.title]=\"variantNames[v.code]\"\n      [attr.alt]=\"variantNames[v.code]\"\n    />\n  </li>\n</ul>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: ["ul{padding:0;white-space:nowrap;overflow:hidden}ul li{display:inline}ul li img{width:50px}"]
        })
    ], VariantStyleIconsComponent);
    return VariantStyleIconsComponent;
}());

var VariantStyleIconsModule = /** @class */ (function () {
    function VariantStyleIconsModule() {
    }
    VariantStyleIconsModule = __decorate([
        NgModule({
            imports: [CommonModule, RouterModule, UrlModule, I18nModule],
            declarations: [VariantStyleIconsComponent],
            entryComponents: [VariantStyleIconsComponent],
            exports: [VariantStyleIconsComponent],
        })
    ], VariantStyleIconsModule);
    return VariantStyleIconsModule;
}());

var ProductVariantGuard = /** @class */ (function () {
    function ProductVariantGuard(productService, routingService) {
        this.productService = productService;
        this.routingService = routingService;
    }
    ProductVariantGuard.prototype.canActivate = function () {
        var _this = this;
        return this.routingService.getRouterState().pipe(map(function (state) { return state.nextState.params.productCode; }), switchMap(function (productCode) {
            // if open pdp from smartedit
            if (!productCode) {
                return of(true);
            }
            return _this.productService.get(productCode, ProductScope.VARIANTS).pipe(filter(Boolean), map(function (product) {
                if (!product.purchasable) {
                    var variant = _this.findVariant(product.variantOptions);
                    // below call might looks redundant but in fact this data is going to be loaded anyways
                    // we're just calling it earlier and storing
                    _this.productService
                        .get(variant.code, ProductScope.LIST)
                        .pipe(filter(Boolean), take(1))
                        .subscribe(function (_product) {
                        _this.routingService.go({
                            cxRoute: 'product',
                            params: _product,
                        });
                    });
                    return false;
                }
                else {
                    return true;
                }
            }));
        }));
    };
    ProductVariantGuard.prototype.findVariant = function (variants) {
        var results = variants.filter(function (variant) {
            return variant.stock && variant.stock.stockLevel ? variant : false;
        });
        return !results.length && variants.length ? variants[0] : results[0];
    };
    ProductVariantGuard.ctorParameters = function () { return [
        { type: ProductService },
        { type: RoutingService }
    ]; };
    ProductVariantGuard.ɵprov = ɵɵdefineInjectable({ factory: function ProductVariantGuard_Factory() { return new ProductVariantGuard(ɵɵinject(ProductService), ɵɵinject(RoutingService)); }, token: ProductVariantGuard, providedIn: "root" });
    ProductVariantGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ProductVariantGuard);
    return ProductVariantGuard;
}());

var ProductVariantsModule = /** @class */ (function () {
    function ProductVariantsModule() {
    }
    ProductVariantsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                UrlModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        ProductVariantSelectorComponent: {
                            component: ProductVariantsComponent,
                            guards: [ProductVariantGuard],
                        },
                    },
                }),
                I18nModule,
                VariantStyleSelectorModule,
                VariantSizeSelectorModule,
                VariantColorSelectorModule,
                VariantStyleIconsModule,
            ],
            declarations: [ProductVariantsComponent],
            entryComponents: [ProductVariantsComponent],
            exports: [VariantStyleIconsComponent],
        })
    ], ProductVariantsModule);
    return ProductVariantsModule;
}());

var ProductListModule = /** @class */ (function () {
    function ProductListModule() {
    }
    ProductListModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig(defaultScrollConfig),
                ConfigModule.withConfig({
                    cmsComponents: {
                        CMSProductListComponent: {
                            component: ProductListComponent,
                        },
                        ProductGridComponent: {
                            component: ProductListComponent,
                        },
                        SearchResultsListComponent: {
                            component: ProductListComponent,
                        },
                        ProductRefinementComponent: {
                            component: ProductFacetNavigationComponent,
                        },
                    },
                }),
                RouterModule,
                MediaModule,
                AddToCartModule,
                ItemCounterModule,
                ListNavigationModule,
                UrlModule,
                I18nModule,
                StarRatingModule,
                IconModule,
                SpinnerModule,
                InfiniteScrollModule,
                ViewConfigModule,
                ProductVariantsModule,
                FeaturesConfigModule,
            ],
            declarations: [
                ProductListComponent,
                ProductFacetNavigationComponent,
                ProductListItemComponent,
                ProductGridItemComponent,
                ProductViewComponent,
                ProductScrollComponent,
            ],
            exports: [
                ProductListComponent,
                ProductFacetNavigationComponent,
                ProductListItemComponent,
                ProductGridItemComponent,
                ProductViewComponent,
                ProductScrollComponent,
            ],
            entryComponents: [ProductListComponent, ProductFacetNavigationComponent],
        })
    ], ProductListModule);
    return ProductListModule;
}());

var ProductDetailOutlets;
(function (ProductDetailOutlets) {
    ProductDetailOutlets["INTRO"] = "PDP.INTRO";
    ProductDetailOutlets["PRICE"] = "PDP.PRICE";
    ProductDetailOutlets["SHARE"] = "PDP.SHARE";
    ProductDetailOutlets["SUMMARY"] = "PDP.SUMMARY";
})(ProductDetailOutlets || (ProductDetailOutlets = {}));

var ProductSummaryComponent = /** @class */ (function () {
    function ProductSummaryComponent(currentProductService) {
        this.currentProductService = currentProductService;
        this.outlets = ProductDetailOutlets;
        this.product$ = this.currentProductService.getProduct();
    }
    ProductSummaryComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    ProductSummaryComponent = __decorate([
        Component({
            selector: 'cx-product-summary',
            template: "<ng-container *ngIf=\"product$ | async as product\">\n  <ng-template\n    [cxOutlet]=\"outlets.PRICE\"\n    [cxOutletContext]=\"{ product: product }\"\n  >\n    <div class=\"price\" aria-label=\"new item price\">\n      {{ product?.price?.formattedValue }}\n    </div>\n  </ng-template>\n\n  <ng-template\n    [cxOutlet]=\"outlets.SUMMARY\"\n    [cxOutletContext]=\"{ product: product }\"\n  >\n    <p [innerHTML]=\"product?.summary\" class=\"summary\"></p>\n  </ng-template>\n\n  <!-- @TODO: Temp. Comment out share link while not in use by CMS -->\n  <!-- <ng-container *cxOutlet=\"outlets.SHARE\">\n        <div>\n          <a href=\"#\" class=\"share btn-link\">\n            {{ 'productSummary.share' | cxTranslate }}\n          </a>\n        </div>\n      </ng-container> -->\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductSummaryComponent);
    return ProductSummaryComponent;
}());

var ProductSummaryModule = /** @class */ (function () {
    function ProductSummaryModule() {
    }
    ProductSummaryModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                OutletModule,
                I18nModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        ProductSummaryComponent: {
                            component: ProductSummaryComponent,
                        },
                    },
                }),
            ],
            declarations: [ProductSummaryComponent],
            entryComponents: [ProductSummaryComponent],
            exports: [ProductSummaryComponent],
        })
    ], ProductSummaryModule);
    return ProductSummaryModule;
}());

var ProductAttributesComponent = /** @class */ (function () {
    function ProductAttributesComponent(currentProductService) {
        this.currentProductService = currentProductService;
        this.product$ = this.currentProductService.getProduct(ProductScope.ATTRIBUTES);
    }
    // TODO deprecated since 1.4, remove
    ProductAttributesComponent.prototype.ngOnInit = function () { };
    ProductAttributesComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    ProductAttributesComponent = __decorate([
        Component({
            selector: 'cx-product-attributes',
            template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"container\">\n    <h2>{{ 'productDetails.specification' | cxTranslate }}</h2>\n    <table *ngFor=\"let class of product?.classifications\">\n      <th>\n        <h3>{{ class.name }}</h3>\n      </th>\n      <tr *ngFor=\"let feature of class.features\">\n        <td>{{ feature.name }}</td>\n        <td>\n          <ul>\n            <li *ngFor=\"let featureValue of feature?.featureValues\">\n              {{ featureValue?.value }}\n            </li>\n          </ul>\n        </td>\n      </tr>\n    </table>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductAttributesComponent);
    return ProductAttributesComponent;
}());

var ProductAttributesModule = /** @class */ (function () {
    function ProductAttributesModule() {
    }
    ProductAttributesModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                I18nModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        ProductSpecsTabComponent: {
                            component: ProductAttributesComponent,
                        },
                    },
                }),
            ],
            declarations: [ProductAttributesComponent],
            entryComponents: [ProductAttributesComponent],
            exports: [ProductAttributesComponent],
        })
    ], ProductAttributesModule);
    return ProductAttributesModule;
}());

var ProductDetailsTabComponent = /** @class */ (function () {
    function ProductDetailsTabComponent(currentProductService) {
        this.currentProductService = currentProductService;
    }
    ProductDetailsTabComponent.prototype.ngOnInit = function () {
        this.product$ = this.currentProductService.getProduct();
    };
    ProductDetailsTabComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    ProductDetailsTabComponent = __decorate([
        Component({
            selector: 'cx-product-details-tab',
            template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"container\" [innerHTML]=\"product?.description\"></div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductDetailsTabComponent);
    return ProductDetailsTabComponent;
}());

var ProductDetailsTabModule = /** @class */ (function () {
    function ProductDetailsTabModule() {
    }
    ProductDetailsTabModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        ProductDetailsTabComponent: {
                            component: ProductDetailsTabComponent,
                        },
                    },
                }),
            ],
            declarations: [ProductDetailsTabComponent],
            entryComponents: [ProductDetailsTabComponent],
            exports: [ProductDetailsTabComponent],
        })
    ], ProductDetailsTabModule);
    return ProductDetailsTabModule;
}());

var ProductReviewsComponent = /** @class */ (function () {
    function ProductReviewsComponent(reviewService, currentProductService, fb, cd) {
        var _this = this;
        this.reviewService = reviewService;
        this.currentProductService = currentProductService;
        this.fb = fb;
        this.cd = cd;
        this.isWritingReview = false;
        // TODO: configurable
        this.initialMaxListItems = 5;
        this.product$ = this.currentProductService.getProduct();
        this.reviews$ = this.product$.pipe(filter(function (p) { return !!p; }), map(function (p) { return p.code; }), distinctUntilChanged(), switchMap(function (productCode) { return _this.reviewService.getByProductCode(productCode); }), tap(function () {
            _this.resetReviewForm();
            _this.maxListItems = _this.initialMaxListItems;
        }));
    }
    ProductReviewsComponent.prototype.initiateWriteReview = function () {
        this.isWritingReview = true;
        this.cd.detectChanges();
        if (this.titleInput && this.titleInput.nativeElement) {
            this.titleInput.nativeElement.focus();
        }
    };
    ProductReviewsComponent.prototype.cancelWriteReview = function () {
        this.isWritingReview = false;
        this.resetReviewForm();
        this.cd.detectChanges();
        if (this.writeReviewButton && this.writeReviewButton.nativeElement) {
            this.writeReviewButton.nativeElement.focus();
        }
    };
    ProductReviewsComponent.prototype.setRating = function (rating) {
        this.reviewForm.controls.rating.setValue(rating);
    };
    ProductReviewsComponent.prototype.markFormAsTouched = function () {
        var _this = this;
        Object.keys(this.reviewForm.controls).forEach(function (key) {
            _this.reviewForm.controls[key].markAsTouched();
        });
    };
    ProductReviewsComponent.prototype.submitReview = function (product) {
        if (this.reviewForm.valid) {
            this.addReview(product);
        }
        else {
            this.markFormAsTouched();
        }
    };
    ProductReviewsComponent.prototype.addReview = function (product) {
        var reviewFormControls = this.reviewForm.controls;
        var review = {
            headline: reviewFormControls.title.value,
            comment: reviewFormControls.comment.value,
            rating: reviewFormControls.rating.value,
            alias: reviewFormControls.reviewerName.value,
        };
        this.reviewService.add(product.code, review);
        this.isWritingReview = false;
        this.resetReviewForm();
        this.cd.detectChanges();
        if (this.writeReviewButton && this.writeReviewButton.nativeElement) {
            this.writeReviewButton.nativeElement.focus();
        }
    };
    ProductReviewsComponent.prototype.resetReviewForm = function () {
        this.reviewForm = this.fb.group({
            title: ['', Validators.required],
            comment: ['', Validators.required],
            rating: [0, [Validators.min(1), Validators.max(5)]],
            reviewerName: '',
        });
    };
    ProductReviewsComponent.ctorParameters = function () { return [
        { type: ProductReviewService },
        { type: CurrentProductService },
        { type: FormBuilder },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        ViewChild('titleInput', { static: false })
    ], ProductReviewsComponent.prototype, "titleInput", void 0);
    __decorate([
        ViewChild('writeReviewButton', { static: false })
    ], ProductReviewsComponent.prototype, "writeReviewButton", void 0);
    ProductReviewsComponent = __decorate([
        Component({
            selector: 'cx-product-reviews',
            template: "<div class=\"container\" *ngIf=\"product$ | async as product\">\n  <h2>\n    {{ 'productDetails.reviews' | cxTranslate }} ({{ product.numberOfReviews }})\n  </h2>\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <div class=\"header\">\n      <h3>{{ 'productReview.overallRating' | cxTranslate }}</h3>\n      <button\n        #writeReviewButton\n        class=\"btn btn-primary\"\n        (click)=\"initiateWriteReview()\"\n      >\n        {{ 'productReview.writeReview' | cxTranslate }}\n      </button>\n      <cx-star-rating\n        *ngIf=\"product.averageRating\"\n        class=\"rating\"\n        [rating]=\"product.averageRating\"\n        [disabled]=\"true\"\n      ></cx-star-rating>\n      <div class=\"rating\" *ngIf=\"!product.averageRating\">\n        {{ 'productDetails.noReviews' | cxTranslate }}\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n      <ng-container *ngIf=\"reviews$ | async as reviews\">\n        <div\n          class=\"review\"\n          tabindex=\"0\"\n          *ngFor=\"let review of reviews | slice: 0:maxListItems\"\n        >\n          <div class=\"title\">{{ review.headline }}</div>\n          <cx-star-rating\n            [rating]=\"review.rating\"\n            [disabled]=\"true\"\n          ></cx-star-rating>\n          <div class=\"name\">\n            {{ review.alias ? review.alias : review.principal?.name }}\n          </div>\n          <div class=\"date\">{{ review.date | cxDate }}</div>\n          <div class=\"text\">{{ review.comment }}</div>\n        </div>\n        <div *ngIf=\"reviews.length > initialMaxListItems\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = reviews.length\"\n            *ngIf=\"maxListItems === initialMaxListItems\"\n          >\n            {{ 'productReview.more' | cxTranslate }}\n          </button>\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = initialMaxListItems\"\n            *ngIf=\"maxListItems !== initialMaxListItems\"\n          >\n            {{ 'productReview.less' | cxTranslate }}\n          </button>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <ng-template #writeReview>\n    <form [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview(product)\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewTitle' | cxTranslate\n          }}</span>\n          <input\n            #titleInput\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"title\"\n            [class.is-invalid]=\"\n              reviewForm.controls['title'].invalid &&\n              (reviewForm.controls['title'].touched ||\n                reviewForm.controls['title'].dirty)\n            \"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.writeYourComments' | cxTranslate\n          }}</span>\n          <textarea\n            class=\"form-control\"\n            rows=\"3\"\n            formControlName=\"comment\"\n            [class.is-invalid]=\"\n              reviewForm.controls['comment'].invalid &&\n              (reviewForm.controls['comment'].touched ||\n                reviewForm.controls['comment'].dirty)\n            \"\n          ></textarea>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.rating' | cxTranslate\n          }}</span>\n          <cx-star-rating (change)=\"setRating($event)\"></cx-star-rating>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewerName' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"reviewerName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"button\"\n            class=\"btn btn-block btn-secondary\"\n            (click)=\"cancelWriteReview()\"\n          >\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-primary\"\n            [ngClass]=\"{ 'submit-btn': reviewForm.valid }\"\n          >\n            {{ 'common.submit' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductReviewsComponent);
    return ProductReviewsComponent;
}());

var ProductReviewsModule = /** @class */ (function () {
    function ProductReviewsModule() {
    }
    ProductReviewsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                FormsModule,
                I18nModule,
                StarRatingModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        ProductReviewsTabComponent: {
                            component: ProductReviewsComponent,
                        },
                    },
                }),
            ],
            declarations: [ProductReviewsComponent],
            entryComponents: [ProductReviewsComponent],
            exports: [ProductReviewsComponent],
        })
    ], ProductReviewsModule);
    return ProductReviewsModule;
}());

var ProductTabsModule = /** @class */ (function () {
    function ProductTabsModule() {
    }
    ProductTabsModule = __decorate([
        NgModule({
            imports: [
                ProductAttributesModule,
                ProductDetailsTabModule,
                ProductReviewsModule,
            ],
        })
    ], ProductTabsModule);
    return ProductTabsModule;
}());

var StockNotificationDialogComponent = /** @class */ (function () {
    function StockNotificationDialogComponent(modalService, interestsService) {
        this.modalService = modalService;
        this.interestsService = interestsService;
        this.enabledPrefs = [];
    }
    StockNotificationDialogComponent.prototype.close = function () {
        this.modalService.dismissActiveModal();
    };
    StockNotificationDialogComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.subscribeSuccess$) {
            this.subscribeSuccess$
                .subscribe(function (success) {
                if (success) {
                    _this.interestsService.resetAddInterestState();
                }
            })
                .unsubscribe();
        }
    };
    StockNotificationDialogComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: UserInterestsService }
    ]; };
    StockNotificationDialogComponent = __decorate([
        Component({
            selector: 'cx-stock-notification-dialog',
            template: "<div class=\"cx-dialog-header modal-header\">\n  <div class=\"cx-dialog-title modal-title\">\n    {{ 'stockNotification.subscriptionDialog.header' | cxTranslate }}\n  </div>\n  <button\n    type=\"button\"\n    class=\"close\"\n    aria-label=\"Close\"\n    tabindex=\"-1\"\n    (click)=\"close()\"\n  >\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<ng-container *ngIf=\"subscribeSuccess$ | async; else loading\">\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"container\">\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.notifiedPrefix' | cxTranslate\n        }}\n      </p>\n      <p *ngFor=\"let preference of enabledPrefs\" class=\"channels\">\n        <span>{{ preference.channel }}</span\n        ><span *ngIf=\"preference.value\">{{ ': ' + preference.value }}</span>\n      </p>\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.notifiedSuffix' | cxTranslate\n        }}\n      </p>\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.manageChannelsPrefix'\n            | cxTranslate\n        }}\n        <a\n          (click)=\"close()\"\n          [routerLink]=\"['/my-account/notification-preference']\"\n          class=\"link-prefs\"\n        >\n          {{\n            'stockNotification.subscriptionDialog.manageChannelsLink'\n              | cxTranslate\n          }}</a\n        >\n        {{\n          'stockNotification.subscriptionDialog.manageChannelsSuffix'\n            | cxTranslate\n        }}\n      </p>\n\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.manageSubscriptionsPrefix'\n            | cxTranslate\n        }}\n        <a\n          (click)=\"close()\"\n          [routerLink]=\"['/my-account/my-interests']\"\n          class=\"link-interests\"\n        >\n          {{\n            'stockNotification.subscriptionDialog.manageSubscriptionsLink'\n              | cxTranslate\n          }}</a\n        >\n        {{\n          'stockNotification.subscriptionDialog.manageSubscriptionsSuffix'\n            | cxTranslate\n        }}\n      </p>\n      <div class=\"row\">\n        <div class=\"cx-dialog-actions col-sm-12 col-md-3 offset-md-9\">\n          <button\n            class=\"btn btn-primary btn-block btn-ok\"\n            type=\"button\"\n            (click)=\"close()\"\n          >\n            {{ 'stockNotification.subscriptionDialog.okBtn' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-dialog-body modal-body\">\n    <p>\n      {{ 'stockNotification.subscriptionDialog.subscribing' | cxTranslate }}\n    </p>\n    <div class=\"cx-dialog-row\">\n      <div class=\"col-sm-12\">\n        <cx-spinner></cx-spinner>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"
        })
    ], StockNotificationDialogComponent);
    return StockNotificationDialogComponent;
}());

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
            template: "<ng-container *ngIf=\"outOfStock$ | async\">\n  <ng-container *ngIf=\"!(hasProductInterests$ | async); else stopNotify\">\n    <ng-container *ngIf=\"prefsEnabled$ | async; else disableNotify\">\n      <div class=\"stock-notification-notes\">\n        <label>{{ 'stockNotification.getNotified' | cxTranslate }}</label>\n      </div>\n      <button\n        class=\"btn btn-primary btn-block btn-notify\"\n        type=\"button\"\n        (click)=\"subscribe()\"\n      >\n        {{ 'stockNotification.notifyMe' | cxTranslate }}\n      </button>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #disableNotify>\n  <div class=\"stock-notification-notes\">\n    <label>\n      <ng-container *ngIf=\"anonymous; else loggedIn\">\n        <a [routerLink]=\"{ cxRoute: 'login' } | cxUrl\">\n          {{ 'miniLogin.signInRegister' | cxTranslate }}</a\n        >\n        {{ 'stockNotification.getNotifySuffix' | cxTranslate }}<br />\n      </ng-container>\n      <ng-template #loggedIn>\n        {{ 'stockNotification.getNotify' | cxTranslate }}<br />\n        {{ 'stockNotification.activateChannelsPrefix' | cxTranslate\n        }}<a [routerLink]=\"['/my-account/notification-preference']\">{{\n          'stockNotification.channelsLink' | cxTranslate\n        }}</a\n        >{{ 'stockNotification.activateChannelsSuffix' | cxTranslate }}\n      </ng-template>\n    </label>\n  </div>\n  <button\n    class=\"btn btn-primary btn-block btn-notify\"\n    type=\"button\"\n    disabled=\"true\"\n  >\n    {{ 'stockNotification.notifyMe' | cxTranslate }}\n  </button>\n</ng-template>\n\n<ng-template #stopNotify>\n  <ng-container *ngIf=\"!(isRemoveInterestLoading$ | async); else loading\">\n    <div class=\"stock-notification-notes\">\n      <label>{{ 'stockNotification.notified' | cxTranslate }}</label>\n    </div>\n    <button\n      class=\"btn btn-primary btn-block btn-stop-notify\"\n      type=\"button\"\n      (click)=\"unsubscribe()\"\n    >\n      {{ 'stockNotification.stopNotify' | cxTranslate }}\n    </button>\n  </ng-container>\n</ng-template>\n\n<ng-template #loading>\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"cx-dialog-row\">\n      <div class=\"col-sm-12\">\n        <cx-spinner></cx-spinner>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], StockNotificationComponent);
    return StockNotificationComponent;
}());

var StockNotificationModule = /** @class */ (function () {
    function StockNotificationModule() {
    }
    StockNotificationModule = __decorate([
        NgModule({
            declarations: [StockNotificationComponent, StockNotificationDialogComponent],
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        StockNotificationComponent: {
                            component: StockNotificationComponent,
                        },
                    },
                }),
                RouterModule,
                I18nModule,
                SpinnerModule,
                UrlModule,
            ],
            entryComponents: [
                StockNotificationComponent,
                StockNotificationDialogComponent,
            ],
            exports: [StockNotificationComponent, StockNotificationDialogComponent],
        })
    ], StockNotificationModule);
    return StockNotificationModule;
}());

var WEEK_DAYS_NUMBER = 7;
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(storeDataService) {
        this.storeDataService = storeDataService;
        this.displayDays = null;
    }
    ScheduleComponent.prototype.ngOnChanges = function (changes) {
        if (changes.location && this.location) {
            var initialDate = this.getInitialDate();
            this.displayDays = [];
            for (var i = 0; i < WEEK_DAYS_NUMBER; i++) {
                var date = new Date(initialDate.valueOf());
                date.setDate(date.getDate() + i);
                this.displayDays.push(date);
            }
        }
    };
    /**
     * Returns the store's opening time for the given date
     * @param date date
     */
    ScheduleComponent.prototype.getStoreOpeningTime = function (date) {
        return this.storeDataService.getStoreOpeningTime(this.location, date);
    };
    /**
     * Returns the store's closing time for the given date
     * @param date date
     */
    ScheduleComponent.prototype.getStoreClosingTime = function (date) {
        return this.storeDataService.getStoreClosingTime(this.location, date);
    };
    /**
     * return initial (first) date to be displayed in the schedule
     */
    ScheduleComponent.prototype.getInitialDate = function () {
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - currentDate.getDay());
        return currentDate;
    };
    ScheduleComponent.ctorParameters = function () { return [
        { type: StoreDataService }
    ]; };
    __decorate([
        Input()
    ], ScheduleComponent.prototype, "location", void 0);
    ScheduleComponent = __decorate([
        Component({
            selector: 'cx-schedule',
            template: "<ng-content></ng-content>\n<div class=\"container cx-store-hours\" *ngIf=\"location.openingHours\">\n  <div *ngFor=\"let day of displayDays\" class=\"row\">\n    <div class=\"cx-days col-4\">{{ day | cxDate: 'EEE' }}</div>\n    <div *ngIf=\"getStoreOpeningTime(day) !== 'closed'\" class=\"cx-hours col-8\">\n      {{ getStoreOpeningTime(day) }} -\n      {{ getStoreClosingTime(day) }}\n    </div>\n    <div\n      *ngIf=\"getStoreOpeningTime(day) === 'closed'\"\n      class=\"cx-hours col-8 closed\"\n    >\n      {{ 'storeFinder.closed' | cxTranslate }}\n    </div>\n  </div>\n</div>\n"
        })
    ], ScheduleComponent);
    return ScheduleComponent;
}());

var StoreFinderGridComponent = /** @class */ (function () {
    function StoreFinderGridComponent(storeFinderService, route, routingService) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.routingService = routingService;
    }
    StoreFinderGridComponent.prototype.ngOnInit = function () {
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        this.defaultLocation = {};
        if (this.route.snapshot.params.country) {
            this.storeFinderService.findStoresAction('', {
                pageSize: -1,
            }, undefined, this.route.snapshot.params.country);
        }
    };
    StoreFinderGridComponent.prototype.viewStore = function (location) {
        this.routingService.go([this.prepareRouteUrl(location)]);
    };
    StoreFinderGridComponent.prototype.prepareRouteUrl = function (location) {
        var countryParam = this.route.snapshot.params.country
            ? "country/" + this.route.snapshot.params.country + "/"
            : '';
        var regionParam = this.route.snapshot.params.region
            ? "region/" + this.route.snapshot.params.region + "/"
            : '';
        return "store-finder/" + countryParam + regionParam + location.name;
    };
    StoreFinderGridComponent.prototype.ngOnDestroy = function () { };
    StoreFinderGridComponent.ctorParameters = function () { return [
        { type: StoreFinderService },
        { type: ActivatedRoute },
        { type: RoutingService }
    ]; };
    StoreFinderGridComponent = __decorate([
        Component({
            selector: 'cx-store-finder-grid',
            template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-sm-4 col-md-4 col-lg-3 item\"\n        *ngFor=\"let location of locations?.stores\"\n        (click)=\"viewStore(location)\"\n      >\n        <cx-store-finder-list-item\n          [location]=\"location\"\n        ></cx-store-finder-list-item>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
        })
    ], StoreFinderGridComponent);
    return StoreFinderGridComponent;
}());

var StoreFinderHeaderComponent = /** @class */ (function () {
    function StoreFinderHeaderComponent() {
    }
    StoreFinderHeaderComponent = __decorate([
        Component({
            selector: 'cx-store-finder-header',
            template: "<ng-container>\n  <cx-store-finder-search></cx-store-finder-search>\n</ng-container>\n"
        })
    ], StoreFinderHeaderComponent);
    return StoreFinderHeaderComponent;
}());

// tslint:disable:directive-class-suffix
var AbstractStoreItemComponent = /** @class */ (function () {
    function AbstractStoreItemComponent(storeDataService) {
        this.storeDataService = storeDataService;
    }
    AbstractStoreItemComponent.prototype.getDirections = function (location) {
        var google_map_url = 'https://www.google.com/maps/dir/Current+Location/';
        var latitude = this.storeDataService.getStoreLatitude(location);
        var longitude = this.storeDataService.getStoreLongitude(location);
        return google_map_url + latitude + ',' + longitude;
    };
    AbstractStoreItemComponent.prototype.getFormattedStoreAddress = function (addressParts) {
        return addressParts.filter(Boolean).join(', ');
    };
    AbstractStoreItemComponent.ctorParameters = function () { return [
        { type: StoreDataService }
    ]; };
    __decorate([
        Input()
    ], AbstractStoreItemComponent.prototype, "location", void 0);
    AbstractStoreItemComponent = __decorate([
        Directive()
    ], AbstractStoreItemComponent);
    return AbstractStoreItemComponent;
}());

var StoreFinderListItemComponent = /** @class */ (function (_super) {
    __extends(StoreFinderListItemComponent, _super);
    function StoreFinderListItemComponent(storeDataService) {
        var _this = _super.call(this, storeDataService) || this;
        _this.storeDataService = storeDataService;
        _this.locationIndex = null;
        _this.storeItemClick = new EventEmitter();
        return _this;
    }
    StoreFinderListItemComponent.prototype.handleStoreItemClick = function () {
        if (this.locationIndex !== null) {
            this.storeItemClick.emit(this.locationIndex);
        }
    };
    StoreFinderListItemComponent.ctorParameters = function () { return [
        { type: StoreDataService }
    ]; };
    __decorate([
        Input()
    ], StoreFinderListItemComponent.prototype, "locationIndex", void 0);
    __decorate([
        Input()
    ], StoreFinderListItemComponent.prototype, "listOrderLabel", void 0);
    __decorate([
        Input()
    ], StoreFinderListItemComponent.prototype, "displayDistance", void 0);
    __decorate([
        Output()
    ], StoreFinderListItemComponent.prototype, "storeItemClick", void 0);
    StoreFinderListItemComponent = __decorate([
        Component({
            selector: 'cx-store-finder-list-item',
            template: "<ng-container>\n  <div (click)=\"handleStoreItemClick()\">\n    <div class=\"cx-store-list-order\">\n      {{ listOrderLabel }}\n    </div>\n    <div class=\"cx-store-name\">\n      {{ location.displayName || location.name }}\n    </div>\n    <div class=\"cx-store-address\" *ngIf=\"location.address\">\n      <div class=\"cx-store-address-street\">\n        {{ location.address.line1 }} {{ location.address.line2 }}\n      </div>\n      {{\n        getFormattedStoreAddress([\n          location.address.town,\n          location.address.postalCode,\n          location.address.country.isocode\n        ])\n      }}\n      <div\n        class=\"cx-store-distance\"\n        *ngIf=\"location.formattedDistance && displayDistance\"\n      >\n        {{ location.formattedDistance }}\n      </div>\n    </div>\n    <a\n      href=\"{{ getDirections(location) }}\"\n      target=\"_blank\"\n      class=\"btn btn-sm btn-action btn-block cx-button\"\n      (click)=\"$event.stopPropagation()\"\n      >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n    >\n  </div>\n</ng-container>\n"
        })
    ], StoreFinderListItemComponent);
    return StoreFinderListItemComponent;
}(AbstractStoreItemComponent));

var StoreFinderMapComponent = /** @class */ (function () {
    function StoreFinderMapComponent(googleMapRendererService) {
        this.googleMapRendererService = googleMapRendererService;
        this.selectedStoreItem = new EventEmitter();
    }
    StoreFinderMapComponent.prototype.ngOnChanges = function (changes) {
        if (changes.locations && this.locations) {
            this.renderMap();
        }
    };
    /**
     * Sets the center of the map to the given location
     * @param latitude latitude of the new center
     * @param longitude longitude of the new center
     */
    StoreFinderMapComponent.prototype.centerMap = function (latitude, longitude) {
        this.googleMapRendererService.centerMap(latitude, longitude);
    };
    StoreFinderMapComponent.prototype.renderMap = function () {
        var _this = this;
        this.googleMapRendererService.renderMap(this.mapElement.nativeElement, this.locations, function (markerIndex) {
            _this.selectStoreItemClickHandle(markerIndex);
        });
    };
    StoreFinderMapComponent.prototype.selectStoreItemClickHandle = function (markerIndex) {
        this.selectedStoreItem.emit(markerIndex);
    };
    StoreFinderMapComponent.ctorParameters = function () { return [
        { type: GoogleMapRendererService }
    ]; };
    __decorate([
        ViewChild('mapElement', { static: true })
    ], StoreFinderMapComponent.prototype, "mapElement", void 0);
    __decorate([
        Input()
    ], StoreFinderMapComponent.prototype, "locations", void 0);
    __decorate([
        Output()
    ], StoreFinderMapComponent.prototype, "selectedStoreItem", void 0);
    StoreFinderMapComponent = __decorate([
        Component({
            selector: 'cx-store-finder-map',
            template: "<div #mapElement class=\"cx-store-map\"></div>\n"
        })
    ], StoreFinderMapComponent);
    return StoreFinderMapComponent;
}());

var StoreFinderPaginationDetailsComponent = /** @class */ (function () {
    function StoreFinderPaginationDetailsComponent() {
    }
    StoreFinderPaginationDetailsComponent.prototype.getResultsPerPage = function () {
        if (this.pagination.totalResults > this.pagination.pageSize) {
            var firstItem = this.pagination.currentPage * this.pagination.pageSize + 1;
            var resultsPerPage = (this.pagination.currentPage + 1) * this.pagination.pageSize;
            if (resultsPerPage > this.pagination.totalResults) {
                resultsPerPage = this.pagination.totalResults;
            }
            return firstItem + " - " + resultsPerPage;
        }
        else {
            return "1 - " + this.pagination.totalResults;
        }
    };
    __decorate([
        Input()
    ], StoreFinderPaginationDetailsComponent.prototype, "pagination", void 0);
    StoreFinderPaginationDetailsComponent = __decorate([
        Component({
            selector: 'cx-store-finder-pagination-details',
            template: "<span class=\"cx-pagination-details\">\n  {{ getResultsPerPage() }}\n  {{\n    'storeFinder.fromStoresFound'\n      | cxTranslate: { count: pagination.totalResults }\n  }}\n</span>\n"
        })
    ], StoreFinderPaginationDetailsComponent);
    return StoreFinderPaginationDetailsComponent;
}());

var StoreFinderListComponent = /** @class */ (function () {
    function StoreFinderListComponent(storeDataService, document) {
        this.storeDataService = storeDataService;
        this.document = document;
        this.iconTypes = ICON_TYPE;
        this.isDetailsModeVisible = false;
    }
    StoreFinderListComponent.prototype.centerStoreOnMapByIndex = function (index, location) {
        this.showStoreDetails(location);
        this.selectedStoreIndex = index;
        this.selectedStore = location;
        this.storeMap.centerMap(this.storeDataService.getStoreLatitude(this.locations.stores[index]), this.storeDataService.getStoreLongitude(this.locations.stores[index]));
    };
    StoreFinderListComponent.prototype.selectStoreItemList = function (index) {
        this.selectedStoreIndex = index;
        var storeListItem = this.document.getElementById('item-' + index);
        storeListItem.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    };
    StoreFinderListComponent.prototype.showStoreDetails = function (location) {
        this.isDetailsModeVisible = true;
        this.storeDetails = location;
    };
    StoreFinderListComponent.prototype.hideStoreDetails = function () {
        this.isDetailsModeVisible = false;
        this.selectedStoreIndex = undefined;
        this.selectedStore = undefined;
        this.storeMap.renderMap();
    };
    StoreFinderListComponent.ctorParameters = function () { return [
        { type: StoreDataService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    __decorate([
        Input()
    ], StoreFinderListComponent.prototype, "locations", void 0);
    __decorate([
        Input()
    ], StoreFinderListComponent.prototype, "useMylocation", void 0);
    __decorate([
        ViewChild('storeMap')
    ], StoreFinderListComponent.prototype, "storeMap", void 0);
    StoreFinderListComponent = __decorate([
        Component({
            selector: 'cx-store-finder-list',
            template: "<ng-container *ngIf=\"locations\">\n  <div class=\"container mb-2\">\n    <div class=\"row\" *ngIf=\"locations?.pagination\">\n      <div class=\"col-md-12\">\n        <cx-store-finder-pagination-details\n          [pagination]=\"locations.pagination\"\n        ></cx-store-finder-pagination-details>\n      </div>\n      <div class=\"col-md-2 text-left cx-back-wrapper\">\n        <button\n          class=\"btn btn-block btn-action\"\n          *ngIf=\"isDetailsModeVisible\"\n          (click)=\"hideStoreDetails()\"\n        >\n          <cx-icon [type]=\"iconTypes.CARET_LEFT\"></cx-icon>\n          {{ 'storeFinder.backToList' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"locations?.stores\" class=\"row cx-columns\">\n      <div class=\"col-md-4 cx-address-col\">\n        <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n          <cx-store-finder-store-description\n            [location]=\"storeDetails\"\n            [disableMap]=\"true\"\n          ></cx-store-finder-store-description>\n        </div>\n        <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n          <li\n            *ngFor=\"let location of locations?.stores; let i = index\"\n            id=\"{{ 'item-' + i }}\"\n            [ngClass]=\"{\n              'cx-selected-item': selectedStoreIndex === i\n            }\"\n            class=\"cx-list-items\"\n          >\n            <cx-store-finder-list-item\n              [location]=\"location\"\n              [locationIndex]=\"i\"\n              [displayDistance]=\"useMylocation\"\n              (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n              [listOrderLabel]=\"\n                i +\n                locations.pagination.currentPage *\n                  locations.pagination.pageSize +\n                1\n              \"\n            ></cx-store-finder-list-item>\n          </li>\n        </ol>\n      </div>\n      <div class=\"col-md-8 cx-map-col\">\n        <cx-store-finder-map\n          #storeMap\n          [locations]=\"locations.stores\"\n          (selectedStoreItem)=\"selectStoreItemList($event)\"\n        ></cx-store-finder-map>\n      </div>\n    </div>\n\n    <!-- mobile tabs for column set only -->\n\n    <div *ngIf=\"locations?.stores\" class=\"cx-columns-mobile\">\n      <ngb-tabset justify=\"center\">\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.listView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-address-col\">\n              <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n                <cx-store-finder-store-description\n                  [location]=\"storeDetails\"\n                  [disableMap]=\"true\"\n                ></cx-store-finder-store-description>\n              </div>\n              <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n                <li\n                  *ngFor=\"let location of locations?.stores; let i = index\"\n                  id=\"{{ 'item-' + i }}\"\n                  [ngClass]=\"{\n                    'cx-selected-item': selectedStoreIndex === i\n                  }\"\n                  class=\"cx-list-items\"\n                >\n                  <cx-store-finder-list-item\n                    [location]=\"location\"\n                    [locationIndex]=\"i\"\n                    [displayDistance]=\"useMylocation\"\n                    (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n                    [listOrderLabel]=\"\n                      i +\n                      locations.pagination.currentPage *\n                        locations.pagination.pageSize +\n                      1\n                    \"\n                  ></cx-store-finder-list-item>\n                </li>\n              </ol>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.mapView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-map-col\">\n              <cx-store-finder-map\n                #storeMap\n                [locations]=\"selectedStore ? [selectedStore] : locations.stores\"\n                (selectedStoreItem)=\"selectStoreItemList($event)\"\n              ></cx-store-finder-map>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n\n    <!-- mobile tabs end -->\n\n    <div *ngIf=\"!locations?.stores\" class=\"row\">\n      <div class=\"col-md-12 cx-not-found\">\n        {{ 'storeFinder.noStoreFound' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
        }),
        __param(1, Inject(DOCUMENT))
    ], StoreFinderListComponent);
    return StoreFinderListComponent;
}());

var StoreFinderSearchResultComponent = /** @class */ (function () {
    function StoreFinderSearchResultComponent(storeFinderService, route) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.countryCode = null;
        this.searchConfig = {
            currentPage: 0,
        };
    }
    StoreFinderSearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.queryParams.subscribe(function (params) {
            return _this.initialize(params);
        });
    };
    StoreFinderSearchResultComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    StoreFinderSearchResultComponent.prototype.viewPage = function (pageNumber) {
        this.searchConfig = __assign(__assign({}, this.searchConfig), { currentPage: pageNumber });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation);
    };
    StoreFinderSearchResultComponent.prototype.initialize = function (params) {
        this.searchQuery = this.parseParameters(params);
        this.useMyLocation = params && params.useMyLocation ? true : false;
        this.searchConfig = __assign(__assign({}, this.searchConfig), { currentPage: 0 });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation);
        this.isLoading$ = this.storeFinderService.getStoresLoading();
        this.locations$ = this.storeFinderService.getFindStoresEntities();
    };
    StoreFinderSearchResultComponent.prototype.parseParameters = function (queryParams) {
        var searchQuery;
        if (queryParams.query) {
            searchQuery = { queryText: queryParams.query };
        }
        else {
            searchQuery = { queryText: '' };
        }
        searchQuery.useMyLocation =
            queryParams.useMyLocation != null &&
                queryParams.useMyLocation.toUpperCase() === 'TRUE';
        return searchQuery;
    };
    StoreFinderSearchResultComponent.ctorParameters = function () { return [
        { type: StoreFinderService },
        { type: ActivatedRoute }
    ]; };
    StoreFinderSearchResultComponent = __decorate([
        Component({
            selector: 'cx-store-finder-search-result',
            template: "<div\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div *ngIf=\"locations?.stores.length\">\n    <div class=\"cx-pagination\">\n      <cx-pagination\n        [pagination]=\"locations.pagination\"\n        (viewPageEvent)=\"viewPage($event)\"\n      ></cx-pagination>\n    </div>\n  </div>\n  <cx-store-finder-list\n    *ngIf=\"locations?.stores.length\"\n    [locations]=\"locations\"\n    [useMylocation]=\"useMyLocation\"\n  ></cx-store-finder-list>\n  <div class=\"container\" *ngIf=\"!locations?.stores.length\">\n    <div class=\"row\">\n      <span class=\"cx-no-stores\">{{\n        'storeFinder.noStoresMessage' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
        })
    ], StoreFinderSearchResultComponent);
    return StoreFinderSearchResultComponent;
}());

var StoreFinderSearchComponent = /** @class */ (function () {
    function StoreFinderSearchComponent(routingService) {
        this.routingService = routingService;
        this.searchBox = new FormControl();
        this.iconTypes = ICON_TYPE;
    }
    StoreFinderSearchComponent.prototype.findStores = function (address) {
        this.routingService.go(['store-finder/find'], { query: address });
    };
    StoreFinderSearchComponent.prototype.viewStoresWithMyLoc = function () {
        this.routingService.go(['store-finder/find'], { useMyLocation: true });
    };
    StoreFinderSearchComponent.prototype.onKey = function (event) {
        if (this.searchBox.value &&
            this.searchBox.value.length &&
            event.key === 'Enter') {
            this.findStores(this.searchBox.value);
        }
    };
    StoreFinderSearchComponent.ctorParameters = function () { return [
        { type: RoutingService }
    ]; };
    StoreFinderSearchComponent = __decorate([
        Component({
            selector: 'cx-store-finder-search',
            template: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-7\">\n      <div class=\"form-group search-wrapper\">\n        <input\n          #queryInput\n          [formControl]=\"searchBox\"\n          (keyup)=\"onKey($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{ 'storeFinder.searchBox' | cxTranslate }}\"\n          required\n        />\n        <cx-icon\n          [type]=\"iconTypes.SEARCH\"\n          aria-label=\"search\"\n          class=\"search\"\n          [routerLink]=\"['/store-finder/find']\"\n          [queryParams]=\"{ query: queryInput.value }\"\n          [ngClass]=\"{\n            'disabled-action': !(queryInput.value && queryInput.value.length)\n          }\"\n        ></cx-icon>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-5\">\n      <div class=\"row cx-search-links mb-3\">\n        <div class=\"col-6\">\n          <button\n            (click)=\"viewStoresWithMyLoc()\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.useMyLocation' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-6\">\n          <button\n            [routerLink]=\"['/store-finder/view-all']\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.viewAllStores' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
        })
    ], StoreFinderSearchComponent);
    return StoreFinderSearchComponent;
}());

var StoreFinderStoreDescriptionComponent = /** @class */ (function (_super) {
    __extends(StoreFinderStoreDescriptionComponent, _super);
    function StoreFinderStoreDescriptionComponent(storeDataService) {
        var _this = _super.call(this, storeDataService) || this;
        _this.storeDataService = storeDataService;
        return _this;
    }
    StoreFinderStoreDescriptionComponent.ctorParameters = function () { return [
        { type: StoreDataService }
    ]; };
    __decorate([
        Input()
    ], StoreFinderStoreDescriptionComponent.prototype, "location", void 0);
    __decorate([
        Input()
    ], StoreFinderStoreDescriptionComponent.prototype, "disableMap", void 0);
    StoreFinderStoreDescriptionComponent = __decorate([
        Component({
            selector: 'cx-store-finder-store-description',
            template: "<ng-container *ngIf=\"location\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <article class=\"cx-store col-md-4\">\n        <h2>{{ location.displayName || location.name }}</h2>\n\n        <p *ngIf=\"location.address\" class=\"cx-store-description-address\">\n          {{ location.address.line1 }} {{ location.address.line2 }} <br />\n          {{\n            getFormattedStoreAddress([\n              location.address.town,\n              location.address.postalCode,\n              location.address.country.isocode\n            ])\n          }}\n        </p>\n\n        <section class=\"cx-contact\">\n          <ul class=\"cx-list\">\n            <li class=\"cx-item\">\n              <a\n                class=\"cx-link\"\n                [href]=\"getDirections(location)\"\n                target=\"_blank\"\n                >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n              >\n            </li>\n            <li class=\"cx-item\" *ngIf=\"location.address?.phone\">\n              {{ 'storeFinder.call' | cxTranslate }}\n              {{ location.address?.phone }}\n            </li>\n          </ul>\n        </section>\n        <div class=\"cx-schedule\" *ngIf=\"location.openingHours\">\n          <cx-schedule [location]=\"location\">\n            <h3>{{ 'storeFinder.storeHours' | cxTranslate }}</h3>\n          </cx-schedule>\n        </div>\n\n        <div *ngIf=\"(location.features | json) != '{}'\" class=\"cx-features\">\n          <div class=\"row \">\n            <div class=\"col-lg-12\">\n              <h3 class=\"cx-features-header\">\n                {{ 'storeFinder.storeFeatures' | cxTranslate }}\n              </h3>\n            </div>\n          </div>\n\n          <article class=\"row\">\n            <div\n              class=\"col-lg-12 cx-feature-item\"\n              *ngFor=\"let feature of location.features?.entry\"\n            >\n              <div class=\"cx-feature-value\">{{ feature.value }}</div>\n            </div>\n          </article>\n        </div>\n      </article>\n      <article class=\"cx-storeMap col-lg-8\" *ngIf=\"!disableMap\">\n        <cx-store-finder-map [locations]=\"[location]\"></cx-store-finder-map>\n      </article>\n    </div>\n  </div>\n</ng-container>\n"
        })
    ], StoreFinderStoreDescriptionComponent);
    return StoreFinderStoreDescriptionComponent;
}(AbstractStoreItemComponent));

var StoreFinderStoresCountComponent = /** @class */ (function () {
    function StoreFinderStoresCountComponent(storeFinderService) {
        this.storeFinderService = storeFinderService;
    }
    StoreFinderStoresCountComponent.prototype.ngOnInit = function () {
        this.storeFinderService.viewAllStores();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
    };
    StoreFinderStoresCountComponent.ctorParameters = function () { return [
        { type: StoreFinderService }
    ]; };
    StoreFinderStoresCountComponent = __decorate([
        Component({
            selector: 'cx-store-finder-stores-count',
            template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"cx-count container\">\n    <div class=\"row\" *ngIf=\"locations?.length\">\n      <div\n        *ngFor=\"let country of locations\"\n        class=\"cx-set col-sm-6 col-md-4 col-lg-4 col-xl-3\"\n      >\n        <a [routerLink]=\"['../country', country.isoCode]\" class=\"btn-link\">\n          <div class=\"cx-title\">\n            <span\n              [ngClass]=\"\n                country?.storeCountDataList\n                  ? 'country-header'\n                  : 'country-header-link'\n              \"\n              class=\"cx-name\"\n              >{{ country.name }}</span\n            >\n            <span\n              [ngClass]=\"\n                country?.storeCountDataList\n                  ? 'country-header'\n                  : 'country-header-link'\n              \"\n              *ngIf=\"!country?.storeCountDataList\"\n              class=\"cx-country-count\"\n              >({{ country.count }})</span\n            >\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"!locations?.length\">\n      <span class=\"cx-no-stores\">{{\n        'storeFinder.noStoresMessage' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n</ng-container>\n<ng-template #loading>\n  <div class=\"cx-count-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
        })
    ], StoreFinderStoresCountComponent);
    return StoreFinderStoresCountComponent;
}());

var StoreFinderComponent = /** @class */ (function () {
    function StoreFinderComponent() {
    }
    StoreFinderComponent = __decorate([
        Component({
            selector: 'cx-store-finder',
            template: "<ng-container>\n  <div class=\"cx-store-finder-wrapper\">\n    <cx-store-finder-header></cx-store-finder-header>\n    <router-outlet></router-outlet>\n  </div>\n</ng-container>\n"
        })
    ], StoreFinderComponent);
    return StoreFinderComponent;
}());

var StoreFinderStoreComponent = /** @class */ (function () {
    function StoreFinderStoreComponent(storeFinderService, route, routingService) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.routingService = routingService;
        this.iconTypes = ICON_TYPE;
    }
    StoreFinderStoreComponent.prototype.ngOnInit = function () {
        if (!this.location) {
            this.requestStoresData();
            this.location$ = this.storeFinderService.getFindStoresEntities();
            this.isLoading$ = this.storeFinderService.getStoresLoading();
        }
    };
    StoreFinderStoreComponent.prototype.requestStoresData = function () {
        this.storeFinderService.viewStoreById(this.route.snapshot.params.store);
    };
    StoreFinderStoreComponent.prototype.goBack = function () {
        this.routingService.go([
            "store-finder/country/" + this.route.snapshot.params.country,
        ]);
    };
    StoreFinderStoreComponent.ctorParameters = function () { return [
        { type: StoreFinderService },
        { type: ActivatedRoute },
        { type: RoutingService }
    ]; };
    __decorate([
        Input()
    ], StoreFinderStoreComponent.prototype, "location", void 0);
    __decorate([
        Input()
    ], StoreFinderStoreComponent.prototype, "disableMap", void 0);
    StoreFinderStoreComponent = __decorate([
        Component({
            selector: 'cx-store-finder-store',
            template: "<div\n  class=\"container\"\n  *ngIf=\"\n    location || (!(isLoading$ | async) && (location$ | async)) as location;\n    else loading\n  \"\n>\n  <div class=\"row cx-store-actions\">\n    <div class=\"col-md-4 col-sm-6 col-lg-2\">\n      <button class=\"btn btn-block btn-action\" (click)=\"goBack()\">\n        <cx-icon [type]=\"iconTypes.CARET_LEFT\"></cx-icon>\n        {{ 'storeFinder.backToList' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 p-0\">\n      <cx-store-finder-store-description\n        [disableMap]=\"disableMap\"\n        [location]=\"location\"\n      ></cx-store-finder-store-description>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
        })
    ], StoreFinderStoreComponent);
    return StoreFinderStoreComponent;
}());

var StoreFinderModule = /** @class */ (function () {
    function StoreFinderModule() {
    }
    StoreFinderModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                RouterModule,
                ListNavigationModule,
                NgbTabsetModule,
                SpinnerModule,
                UrlModule,
                StoreFinderCoreModule,
                I18nModule,
                IconModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        StoreFinderComponent: {
                            component: StoreFinderComponent,
                            childRoutes: [
                                {
                                    path: 'find',
                                    component: StoreFinderSearchResultComponent,
                                },
                                {
                                    path: 'view-all',
                                    component: StoreFinderStoresCountComponent,
                                },
                                {
                                    path: 'country/:country',
                                    component: StoreFinderGridComponent,
                                },
                                {
                                    path: 'country/:country/region/:region',
                                    component: StoreFinderGridComponent,
                                },
                                {
                                    path: 'country/:country/region/:region/:store',
                                    component: StoreFinderStoreComponent,
                                },
                                {
                                    path: 'country/:country/:store',
                                    component: StoreFinderStoreComponent,
                                },
                            ],
                        },
                    },
                    layoutSlots: {
                        StoreFinderPageTemplate: {
                            slots: ['MiddleContent', 'SideContent'],
                        },
                    },
                }),
            ],
            declarations: [
                StoreFinderSearchComponent,
                StoreFinderListComponent,
                StoreFinderMapComponent,
                StoreFinderListItemComponent,
                StoreFinderStoresCountComponent,
                StoreFinderGridComponent,
                StoreFinderStoreDescriptionComponent,
                ScheduleComponent,
                StoreFinderHeaderComponent,
                StoreFinderSearchResultComponent,
                StoreFinderComponent,
                StoreFinderPaginationDetailsComponent,
                StoreFinderStoreComponent,
            ],
            exports: [
                ScheduleComponent,
                StoreFinderComponent,
                StoreFinderGridComponent,
                StoreFinderHeaderComponent,
                StoreFinderListItemComponent,
                StoreFinderMapComponent,
                StoreFinderPaginationDetailsComponent,
                StoreFinderSearchComponent,
                StoreFinderSearchResultComponent,
                StoreFinderListComponent,
                StoreFinderStoreDescriptionComponent,
                StoreFinderStoresCountComponent,
                StoreFinderStoreComponent,
            ],
            entryComponents: [
                StoreFinderComponent,
                StoreFinderSearchResultComponent,
                StoreFinderStoresCountComponent,
                StoreFinderGridComponent,
                StoreFinderStoreComponent,
            ],
        })
    ], StoreFinderModule);
    return StoreFinderModule;
}());

var CheckoutLoginComponent = /** @class */ (function () {
    function CheckoutLoginComponent(formBuilder, cartService, authRedirectService) {
        this.formBuilder = formBuilder;
        this.cartService = cartService;
        this.authRedirectService = authRedirectService;
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            emailConfirmation: ['', [Validators.required]],
        }, { validator: this.emailsMatch });
        this.submitClicked = false;
    }
    CheckoutLoginComponent.prototype.isNotValid = function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    };
    CheckoutLoginComponent.prototype.isEmailConfirmInvalid = function () {
        return (this.form.hasError('NotEqual') &&
            (this.submitClicked ||
                (this.form.get('emailConfirmation').touched &&
                    this.form.get('emailConfirmation').dirty)));
    };
    CheckoutLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        var email = this.form.value.email;
        this.cartService.addEmail(email);
        if (!this.sub) {
            this.sub = this.cartService.getAssignedUser().subscribe(function (_) {
                if (_this.cartService.isGuestCart()) {
                    _this.authRedirectService.redirect();
                }
            });
        }
    };
    CheckoutLoginComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    CheckoutLoginComponent.prototype.emailsMatch = function (abstractControl) {
        return abstractControl.get('email').value !==
            abstractControl.get('emailConfirmation').value
            ? { NotEqual: true }
            : null;
    };
    CheckoutLoginComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CartService },
        { type: AuthRedirectService }
    ]; };
    CheckoutLoginComponent = __decorate([
        Component({
            selector: 'cx-checkout-login',
            template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        name=\"email\"\n        class=\"form-control\"\n        formControlName=\"email\"\n        placeholder=\"{{\n          'checkoutLogin.emailAddress.placeholder' | cxTranslate\n        }}\"\n        [class.is-invalid]=\"isNotValid('email')\"\n      />\n      <div class=\"invalid-feedback\" *ngIf=\"isNotValid('email')\">\n        <span>{{ 'checkoutLogin.emailIsRequired' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.confirmEmail.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        name=\"emailConfirmation\"\n        class=\"form-control\"\n        formControlName=\"emailConfirmation\"\n        placeholder=\"{{\n          'checkoutLogin.confirmEmail.placeholder' | cxTranslate\n        }}\"\n        [class.is-invalid]=\"isEmailConfirmInvalid()\"\n      />\n      <div class=\"invalid-feedback\" *ngIf=\"isEmailConfirmInvalid()\">\n        <span>{{ 'checkoutLogin.emailsMustMatch' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'checkoutLogin.continue' | cxTranslate }}\n  </button>\n</form>\n"
        })
    ], CheckoutLoginComponent);
    return CheckoutLoginComponent;
}());

var CheckoutLoginModule = /** @class */ (function () {
    function CheckoutLoginModule() {
    }
    CheckoutLoginModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                I18nModule,
                FormsModule,
                ReactiveFormsModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        GuestCheckoutLoginComponent: {
                            component: CheckoutLoginComponent,
                            guards: [NotCheckoutAuthGuard],
                        },
                    },
                }),
                FormsModule,
                ReactiveFormsModule,
            ],
            declarations: [CheckoutLoginComponent],
            exports: [CheckoutLoginComponent],
            entryComponents: [CheckoutLoginComponent],
        })
    ], CheckoutLoginModule);
    return CheckoutLoginModule;
}());

var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(auth, globalMessageService, fb, authRedirectService, winRef, activatedRoute, checkoutConfigService) {
        this.auth = auth;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.authRedirectService = authRedirectService;
        this.winRef = winRef;
        this.activatedRoute = activatedRoute;
        this.checkoutConfigService = checkoutConfigService;
        this.loginAsGuest = false;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            userId: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: ['', Validators.required],
        });
        if (this.checkoutConfigService &&
            this.checkoutConfigService.isGuestCheckout()) {
            this.loginAsGuest = this.activatedRoute.snapshot.queryParams['forced'];
        }
        // TODO(issue:#4055) Deprecated since 1.1.0
        if (this.winRef && this.winRef.nativeWindow) {
            var routeState = this.winRef.nativeWindow.history &&
                this.winRef.nativeWindow.history.state;
            if (routeState && routeState['newUid'] && routeState['newUid'].length) {
                this.prefillForm('userId', routeState['newUid']);
            }
        }
    };
    LoginFormComponent.prototype.login = function () {
        if (this.form.valid) {
            this.submitLogin();
        }
        else {
            this.markFormAsTouched();
        }
    };
    LoginFormComponent.prototype.submitLogin = function () {
        var _this = this;
        var _a = this.form.controls, userId = _a.userId, password = _a.password;
        this.auth.authorize(userId.value.toLowerCase(), // backend accepts lowercase emails only
        password.value);
        if (!this.sub) {
            this.sub = this.auth.getUserToken().subscribe(function (data) {
                if (data && data.access_token) {
                    _this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                    _this.authRedirectService.redirect();
                }
            });
        }
    };
    LoginFormComponent.prototype.markFormAsTouched = function () {
        var _this = this;
        Object.keys(this.form.controls).forEach(function (key) {
            _this.form.controls[key].markAsTouched();
        });
    };
    LoginFormComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    LoginFormComponent.prototype.prefillForm = function (field, value) {
        var _a;
        this.form.patchValue((_a = {},
            _a[field] = value,
            _a));
        this.form.get(field).markAsTouched(); // this action will check field validity on load
    };
    LoginFormComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: GlobalMessageService },
        { type: FormBuilder },
        { type: AuthRedirectService },
        { type: WindowRef },
        { type: ActivatedRoute },
        { type: CheckoutConfigService }
    ]; };
    LoginFormComponent = __decorate([
        Component({
            selector: 'cx-login-form',
            template: "<form (submit)=\"login()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.controls['userId'].invalid &&\n          (form.controls['userId'].touched || form.controls['userId'].dirty)\n        \"\n        formControlName=\"userId\"\n        placeholder=\"{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}\"\n      />\n    </label>\n    <div\n      class=\"invalid-feedback\"\n      *ngIf=\"\n        form.controls['userId'].invalid &&\n        (form.controls['userId'].touched || form.controls['userId'].dirty)\n      \"\n    >\n      <span>{{ 'loginForm.wrongEmailFormat' | cxTranslate }}</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.password.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"{{ 'loginForm.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n    </label>\n  </div>\n  <p>\n    <a\n      [routerLink]=\"{ cxRoute: 'forgotPassword' } | cxUrl\"\n      aria-controls=\"reset-password\"\n      class=\"btn-link\"\n      >{{ 'loginForm.forgotPassword' | cxTranslate }}</a\n    >\n  </p>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'loginForm.signIn' | cxTranslate }}\n  </button>\n</form>\n\n<div class=\"register\">\n  <h3 class=\"cx-section-title cx-section-title-alt\">\n    {{ 'loginForm.dontHaveAccount' | cxTranslate }}\n  </h3>\n\n  <ng-container *ngIf=\"!loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'register' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-register\"\n      >{{ 'loginForm.register' | cxTranslate }}</a\n    >\n  </ng-container>\n\n  <ng-container *ngIf=\"loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'checkoutLogin' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-guest\"\n      >{{ 'loginForm.guestCheckout' | cxTranslate }}</a\n    >\n  </ng-container>\n</div>\n"
        })
    ], LoginFormComponent);
    return LoginFormComponent;
}());

var LoginFormModule = /** @class */ (function () {
    function LoginFormModule() {
    }
    LoginFormModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                RouterModule,
                UrlModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        ReturningCustomerLoginComponent: {
                            component: LoginFormComponent,
                            guards: [NotAuthGuard],
                        },
                    },
                }),
                I18nModule,
            ],
            declarations: [LoginFormComponent],
            exports: [LoginFormComponent],
            entryComponents: [LoginFormComponent],
        })
    ], LoginFormModule);
    return LoginFormModule;
}());

var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user$ = this.auth.isUserLoggedIn().pipe(switchMap(function (isUserLoggedIn) {
            if (isUserLoggedIn) {
                return _this.userService.get();
            }
            else {
                return of(undefined);
            }
        }));
    };
    LoginComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: UserService }
    ]; };
    LoginComponent = __decorate([
        Component({
            selector: 'cx-login',
            template: "<ng-container *ngIf=\"user$ | async as user; else login\">\n  <div class=\"cx-login-greet\">\n    {{ 'miniLogin.userGreeting' | cxTranslate: { name: user.name } }}\n  </div>\n  <cx-page-slot position=\"HeaderLinks\"></cx-page-slot>\n</ng-container>\n\n<ng-template #login>\n  <a role=\"link\" [routerLink]=\"{ cxRoute: 'login' } | cxUrl\">{{\n    'miniLogin.signInRegister' | cxTranslate\n  }}</a>\n</ng-template>\n"
        })
    ], LoginComponent);
    return LoginComponent;
}());

var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                UrlModule,
                PageSlotModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        LoginComponent: {
                            component: LoginComponent,
                        },
                    },
                }),
                I18nModule,
            ],
            declarations: [LoginComponent],
            entryComponents: [LoginComponent],
            exports: [LoginComponent],
        })
    ], LoginModule);
    return LoginModule;
}());

var LogoutGuard = /** @class */ (function () {
    /**
     * @deprecated since 1.4
     * Check #5666 for more info
     *
     * TODO(issue:5666) Deprecated since 1.4
     */
    function LogoutGuard(auth, cms, routing, semanticPathService, protectedRoutes, featureConfig) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.semanticPathService = semanticPathService;
        this.protectedRoutes = protectedRoutes;
        this.featureConfig = featureConfig;
    }
    LogoutGuard.prototype.canActivate = function () {
        var _this = this;
        this.logout();
        return this.cms
            .hasPage({
            id: this.semanticPathService.get('logout'),
            type: PageType.CONTENT_PAGE,
        })
            .pipe(tap(function (hasPage) {
            if (!hasPage) {
                _this.redirect();
            }
        }));
    };
    LogoutGuard.prototype.redirect = function () {
        // TODO(issue:5666) Deprecated since 1.4
        var cxRoute = this.featureConfig.isLevel('1.4') &&
            this.protectedRoutes &&
            this.protectedRoutes.shouldProtect
            ? 'login'
            : 'home';
        this.routing.go({ cxRoute: cxRoute });
    };
    LogoutGuard.prototype.logout = function () {
        this.auth.logout();
    };
    LogoutGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: CmsService },
        { type: RoutingService },
        { type: SemanticPathService },
        { type: ProtectedRoutesService },
        { type: FeatureConfigService }
    ]; };
    LogoutGuard.ɵprov = ɵɵdefineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(ɵɵinject(AuthService), ɵɵinject(CmsService), ɵɵinject(RoutingService), ɵɵinject(SemanticPathService), ɵɵinject(ProtectedRoutesService), ɵɵinject(FeatureConfigService)); }, token: LogoutGuard, providedIn: "root" });
    LogoutGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], LogoutGuard);
    return LogoutGuard;
}());

var ɵ0$9 = { cxRoute: 'logout' };
var LogoutModule = /** @class */ (function () {
    function LogoutModule() {
    }
    LogoutModule = __decorate([
        NgModule({
            imports: [
                PageLayoutModule,
                RouterModule.forChild([
                    {
                        path: null,
                        canActivate: [LogoutGuard],
                        component: PageLayoutComponent,
                        data: ɵ0$9,
                    },
                ]),
            ],
        })
    ], LogoutModule);
    return LogoutModule;
}());

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, authRedirectService, userService, globalMessageService, fb, router, featureConfig, anonymousConsentsService, anonymousConsentsConfig) {
        this.auth = auth;
        this.authRedirectService = authRedirectService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.router = router;
        this.featureConfig = featureConfig;
        this.anonymousConsentsService = anonymousConsentsService;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.subscription = new Subscription();
        // TODO(issue:4237) Register flow
        this.isNewRegisterFlowEnabled = this.featureConfig && this.featureConfig.isLevel('1.1');
        this.isAnonymousConsentEnabled = this.featureConfig &&
            this.featureConfig.isEnabled(ANONYMOUS_CONSENTS_FEATURE);
        this.userRegistrationForm = this.fb.group({
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            passwordconf: ['', Validators.required],
            newsletter: new FormControl({
                value: false,
                disabled: this.isAnonymousConsentEnabled
                    ? this.isConsentRequired()
                    : false,
            }),
            termsandconditions: [false, Validators.requiredTrue],
        }, { validator: CustomFormValidators.matchPassword });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titles$ = this.userService.getTitles().pipe(tap(function (titles) {
            if (Object.keys(titles).length === 0) {
                _this.userService.loadTitles();
            }
        }), map(function (titles) {
            return titles.sort(sortTitles);
        }));
        // TODO(issue:4237) Register flow
        if (this.isNewRegisterFlowEnabled) {
            this.loading$ = this.userService.getRegisterUserResultLoading();
            this.registerUserProcessInit();
        }
        else {
            if (this.auth && this.authRedirectService) {
                this.subscription.add(this.userService
                    .getRegisterUserResultSuccess()
                    .subscribe(function (success) {
                    if (success) {
                        var _a = _this.collectDataFromRegisterForm(_this.userRegistrationForm.value), uid = _a.uid, password = _a.password;
                        _this.auth.authorize(uid, password);
                    }
                }));
                this.subscription.add(this.auth.getUserToken().subscribe(function (data) {
                    if (data && data.access_token) {
                        _this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                        _this.authRedirectService.redirect();
                    }
                }));
            }
        }
        // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
        this.subscription.add(this.globalMessageService
            .get()
            .pipe(filter(function (messages) { return !!Object.keys(messages).length; }))
            .subscribe(function (globalMessageEntities) {
            var messages = globalMessageEntities &&
                globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR];
            if (messages &&
                messages.some(function (message) { return message === 'This field is required.'; })) {
                _this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                _this.globalMessageService.add({ key: 'register.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
            }
        }));
        if (this.isAnonymousConsentEnabled &&
            Boolean(this.anonymousConsentsConfig) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.registerConsent)) {
            this.anonymousConsent$ = combineLatest([
                this.anonymousConsentsService.getConsent(this.anonymousConsentsConfig.anonymousConsents.registerConsent),
                this.anonymousConsentsService.getTemplate(this.anonymousConsentsConfig.anonymousConsents.registerConsent),
            ]).pipe(map(function (_a) {
                var _b = __read(_a, 2), consent = _b[0], template = _b[1];
                return {
                    consent: consent,
                    template: template ? template.description : '',
                };
            }));
            this.subscription.add(this.userRegistrationForm
                .get('newsletter')
                .valueChanges.subscribe(function (_) {
                _this.toggleAnonymousConsent();
            }));
        }
    };
    RegisterComponent.prototype.submit = function () {
        this.userService.register(this.collectDataFromRegisterForm(this.userRegistrationForm.value));
    };
    RegisterComponent.prototype.titleSelected = function (title) {
        this.userRegistrationForm['controls'].titleCode.setValue(title.code);
    };
    RegisterComponent.prototype.collectDataFromRegisterForm = function (formData) {
        var firstName = formData.firstName, lastName = formData.lastName, email = formData.email, password = formData.password, titleCode = formData.titleCode;
        return {
            firstName: firstName,
            lastName: lastName,
            uid: email.toLowerCase(),
            password: password,
            titleCode: titleCode,
        };
    };
    RegisterComponent.prototype.isConsentGiven = function (consent) {
        return this.anonymousConsentsService.isConsentGiven(consent);
    };
    RegisterComponent.prototype.isConsentRequired = function () {
        if (Boolean(this.anonymousConsentsService) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.registerConsent) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.requiredConsents)) {
            return this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(this.anonymousConsentsConfig.anonymousConsents.registerConsent);
        }
        return false;
    };
    RegisterComponent.prototype.onRegisterUserSuccess = function (success) {
        if (this.router && success) {
            this.router.go('login');
            this.globalMessageService.add({ key: 'register.postRegisterMessage' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    };
    RegisterComponent.prototype.toggleAnonymousConsent = function () {
        if (Boolean(this.userRegistrationForm.get('newsletter').value)) {
            this.anonymousConsentsService.giveConsent(this.anonymousConsentsConfig.anonymousConsents.registerConsent);
        }
        else {
            this.anonymousConsentsService.withdrawConsent(this.anonymousConsentsConfig.anonymousConsents.registerConsent);
        }
    };
    RegisterComponent.prototype.registerUserProcessInit = function () {
        var _this = this;
        this.userService.resetRegisterUserProcessState();
        this.subscription.add(this.userService.getRegisterUserResultSuccess().subscribe(function (success) {
            _this.onRegisterUserSuccess(success);
        }));
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.userService.resetRegisterUserProcessState();
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: AuthRedirectService },
        { type: UserService },
        { type: GlobalMessageService },
        { type: FormBuilder },
        { type: RoutingService },
        { type: FeatureConfigService },
        { type: AnonymousConsentsService },
        { type: AnonymousConsentsConfig }
    ]; };
    RegisterComponent = __decorate([
        Component({
            selector: 'cx-register',
            template: "<section\n  class=\"cx-page-section container\"\n  *ngIf=\"!(loading$ | async); else loading\"\n>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <form [formGroup]=\"userRegistrationForm\">\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.title' | cxTranslate\n              }}</span>\n              <select formControlName=\"titleCode\" class=\"form-control\">\n                <option selected value=\"\" disabled>{{\n                  'register.selectTitle' | cxTranslate\n                }}</option>\n                <option\n                  *ngFor=\"let title of titles$ | async\"\n                  [value]=\"title.code\"\n                  >{{ title.name }}</option\n                >\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.firstName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.firstName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.lastName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.lastName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.emailAddress.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('email').errors &&\n                  (userRegistrationForm.get('email').errors['email'] ||\n                    userRegistrationForm.get('email').errors['InvalidEmail']) &&\n                  userRegistrationForm.get('email').dirty\n                \"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.emailAddress.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.password.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.password.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n              >\n                <span>{{\n                  'register.passwordMinRequirements' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.confirmPassword.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').value !==\n                  userRegistrationForm.get('passwordconf').value\n                \"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.confirmPassword.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').value !==\n                    userRegistrationForm.get('passwordconf').value &&\n                  userRegistrationForm.get('passwordconf').value\n                \"\n              >\n                <span>{{\n                  'register.bothPasswordMustMatch' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <ng-container\n                *ngIf=\"isAnonymousConsentEnabled; else hardcodedNewsletter\"\n              >\n                <label *ngIf=\"anonymousConsent$ | async as anonymousConsent\">\n                  <input\n                    type=\"checkbox\"\n                    name=\"newsletter\"\n                    class=\"form-check-input\"\n                    formControlName=\"newsletter\"\n                    [checked]=\"isConsentGiven(anonymousConsent.consent)\"\n                  />\n                  <span class=\"form-check-label\">\n                    {{ anonymousConsent.template }}\n                  </span>\n                </label>\n              </ng-container>\n              <ng-template #hardcodedNewsletter\n                ><label>\n                  <input\n                    type=\"checkbox\"\n                    name=\"newsletter\"\n                    class=\"form-check-input\"\n                    formControlName=\"newsletter\"\n                  />\n                  <span class=\"form-check-label\">\n                    {{ 'register.emailMarketing' | cxTranslate }}\n                  </span>\n                </label>\n              </ng-template>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n              </label>\n            </div>\n          </div>\n          <button\n            type=\"submit\"\n            (click)=\"submit()\"\n            class=\"btn btn-block btn-primary\"\n          >\n            {{ 'register.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n            >{{ 'register.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
        })
    ], RegisterComponent);
    return RegisterComponent;
}());

var RegisterComponentModule = /** @class */ (function () {
    function RegisterComponentModule() {
    }
    RegisterComponentModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                LoginModule,
                ReactiveFormsModule,
                RouterModule,
                UrlModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        RegisterCustomerComponent: {
                            component: RegisterComponent,
                            guards: [NotAuthGuard],
                        },
                    },
                }),
                I18nModule,
                SpinnerModule,
            ],
            declarations: [RegisterComponent],
            exports: [RegisterComponent],
            entryComponents: [RegisterComponent],
        })
    ], RegisterComponentModule);
    return RegisterComponentModule;
}());

var UserComponentModule = /** @class */ (function () {
    function UserComponentModule() {
    }
    UserComponentModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                LoginModule,
                LoginFormModule,
                LogoutModule,
                CheckoutLoginModule,
                ReactiveFormsModule,
                RouterModule,
                UrlModule,
                RegisterComponentModule,
            ],
        })
    ], UserComponentModule);
    return UserComponentModule;
}());

var WishListItemComponent = /** @class */ (function () {
    function WishListItemComponent() {
        this.isLoading = false;
        this.remove = new EventEmitter();
    }
    WishListItemComponent.prototype.removeEntry = function (item) {
        this.remove.emit(item);
    };
    __decorate([
        Input()
    ], WishListItemComponent.prototype, "isLoading", void 0);
    __decorate([
        Input()
    ], WishListItemComponent.prototype, "cartEntry", void 0);
    __decorate([
        Output()
    ], WishListItemComponent.prototype, "remove", void 0);
    WishListItemComponent = __decorate([
        Component({
            selector: 'cx-wish-list-item',
            template: "<div class=\"row\">\n  <!-- Item Image -->\n  <div class=\"cx-image-container col-2\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: cartEntry.product } | cxUrl\"\n      tabindex=\"-1\"\n    >\n      <cx-media\n        [container]=\"cartEntry.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div class=\"col-md-5 col-lg-5 col-xl-5\">\n        <div *ngIf=\"cartEntry.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"\n              { cxRoute: 'product', params: cartEntry.product } | cxUrl\n            \"\n            >{{ cartEntry.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"cartEntry.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ cartEntry.product.code }}\n        </div>\n        <!-- Variants -->\n        <ng-container *ngIf=\"cartEntry.product.baseOptions?.length\">\n          <div\n            *ngFor=\"\n              let variant of cartEntry.product.baseOptions[0]?.selected\n                ?.variantOptionQualifiers\n            \"\n            class=\"cx-property\"\n          >\n            <div class=\"cx-label\" *ngIf=\"variant.name && variant.value\">\n              {{ variant.name }}: {{ variant.value }}\n            </div>\n          </div>\n        </ng-container>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"cartEntry.basePrice\"\n        class=\"cx-price col-md-3 col-lg-4 col-xl-4\"\n      >\n        <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div *ngIf=\"cartEntry.basePrice\" class=\"cx-value\">\n          {{ cartEntry.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Total -->\n      <div class=\"col-sm-8 col-md-4 col-lg-3 col-xl-3 cx-add-to-cart\">\n        <cx-add-to-cart\n          *ngIf=\"\n            cartEntry.product.stock.stockLevelStatus !== 'outOfStock';\n            else outOfStock\n          \"\n          [showQuantity]=\"false\"\n          [product]=\"cartEntry.product\"\n        ></cx-add-to-cart>\n        <ng-template #outOfStock>\n          <span class=\"cx-out-of-stock\">\n            {{ 'addToCart.outOfStock' | cxTranslate }}\n          </span>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"cx-return-button col-12\">\n      <button\n        class=\"btn btn-link\"\n        (click)=\"removeEntry(cartEntry)\"\n        [disabled]=\"isLoading\"\n      >\n        {{ 'common.remove' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], WishListItemComponent);
    return WishListItemComponent;
}());

var WishListComponent = /** @class */ (function () {
    function WishListComponent(wishListService) {
        this.wishListService = wishListService;
        this.wishList$ = this.wishListService.getWishList();
        this.loading$ = this.wishListService.getWishListLoading();
    }
    WishListComponent.prototype.removeEntry = function (item) {
        this.wishListService.removeEntry(item);
    };
    WishListComponent.ctorParameters = function () { return [
        { type: WishListService }
    ]; };
    WishListComponent = __decorate([
        Component({
            selector: 'cx-wish-list',
            template: "<ng-container *ngIf=\"wishList$ | async as wishList\">\n  <ng-container *ngIf=\"wishList?.entries?.length > 0; else emptyWishList\">\n    <div class=\"d-none d-md-block d-lg-block d-xl-block\">\n      <div class=\"cx-item-list-header row\">\n        <div class=\"cx-item-list-desc col-md-7 col-lg-6 col-xl-6\">\n          {{ 'cartItems.description' | cxTranslate }}\n        </div>\n        <div class=\"cx-item-list-price col-md-3 col-lg-4 col-xl-4\">\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n          {{ 'cartItems.total' | cxTranslate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"cx-item-list-row\" *ngFor=\"let entry of wishList?.entries\">\n      <cx-wish-list-item\n        [cartEntry]=\"entry\"\n        [isLoading]=\"loading$ | async\"\n        class=\"cx-wish-list-items\"\n        (remove)=\"removeEntry($event)\"\n      ></cx-wish-list-item>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template #emptyWishList>\n  <h2>{{ 'wishlist.empty' | cxTranslate }}</h2>\n</ng-template>\n"
        })
    ], WishListComponent);
    return WishListComponent;
}());

var WishListModule = /** @class */ (function () {
    function WishListModule() {
    }
    WishListModule = __decorate([
        NgModule({
            imports: [
                AddToCartModule,
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        WishListComponent: {
                            component: WishListComponent,
                            guards: [AuthGuard],
                        },
                    },
                }),
                I18nModule,
                MediaModule,
                RouterModule,
                StarRatingModule,
                UrlModule,
                ItemCounterModule,
            ],
            declarations: [WishListComponent, WishListItemComponent],
            entryComponents: [WishListComponent],
            exports: [WishListComponent, WishListItemComponent],
        })
    ], WishListModule);
    return WishListModule;
}());

var CmsLibModule = /** @class */ (function () {
    function CmsLibModule() {
    }
    CmsLibModule = __decorate([
        NgModule({
            imports: [
                AnonymousConsentManagementBannerModule,
                AsmModule,
                HamburgerMenuModule,
                CmsParagraphModule,
                LinkModule,
                BannerModule,
                CategoryNavigationModule,
                NavigationModule,
                FooterNavigationModule,
                BreadcrumbModule,
                SearchBoxModule,
                SiteContextSelectorModule,
                QualtricsModule,
                AddressBookModule,
                OrderHistoryModule,
                OrderCancellationModule,
                OrderReturnModule,
                ReturnRequestListModule,
                ReturnRequestDetailModule,
                ProductListModule,
                ProductTabsModule,
                ProductCarouselModule,
                ProductReferencesModule,
                OrderDetailsModule,
                PaymentMethodsModule,
                UpdateEmailModule,
                UpdatePasswordModule,
                UpdateProfileModule,
                ConsentManagementModule,
                CloseAccountModule,
                CartComponentModule,
                TabParagraphContainerModule,
                OrderConfirmationModule,
                StoreFinderModule,
                ProductImagesModule,
                ProductSummaryModule,
                ProductVariantsModule,
                ProductIntroModule,
                CheckoutComponentModule,
                ForgotPasswordModule,
                ResetPasswordModule,
                BannerCarouselModule,
                UserComponentModule,
                MyCouponsModule,
                WishListModule,
                NotificationPreferenceModule,
                MyInterestsModule,
                StockNotificationModule,
            ],
        })
    ], CmsLibModule);
    return CmsLibModule;
}());

function getProductDetailsUrlMatcherFactory(service, defaultMatcherFactory) {
    var factory = function (route) {
        var defaultMatcher = defaultMatcherFactory(route);
        var suffixPDPMatcher = getSuffixUrlMatcher({
            marker: 'p',
            paramName: 'productCode',
        });
        return service.getCombined([defaultMatcher, suffixPDPMatcher]);
    };
    return factory;
}
/**
 * Injection token with url matcher factory for PDP.
 * The provided url matcher matches both:
 * - the configured `paths` from routing config and
 * - custom pattern  `** / p / :productCode`
 *
 * If the this matcher doesn't fit the requirements, it can be replaced with the DEFAULT_URL_MATCHER
 * or additional matchers can be added for a specific route.
 *
 * Note: Matchers will "match" a route, but do not contribute to the creation of the route, nor do they guard routes.
 */
var PRODUCT_DETAILS_URL_MATCHER = new InjectionToken('PRODUCT_DETAILS_URL_MATCHER', {
    providedIn: 'root',
    factory: function () {
        return getProductDetailsUrlMatcherFactory(inject(UrlMatcherService), inject(DEFAULT_URL_MATCHER));
    },
});

var ɵ0$a = { cxRoute: 'product' };
var ProductDetailsPageModule = /** @class */ (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forChild([
                    {
                        path: null,
                        canActivate: [CmsPageGuard],
                        component: PageLayoutComponent,
                        data: ɵ0$a,
                    },
                ]),
                ConfigModule.withConfig({
                    routing: {
                        routes: {
                            product: {
                                matchers: [PRODUCT_DETAILS_URL_MATCHER],
                            },
                        },
                    },
                }),
            ],
        })
    ], ProductDetailsPageModule);
    return ProductDetailsPageModule;
}());

function getProductListingUrlMatcherFactory(service, defaultMatcherFactory) {
    var factory = function (route) {
        var defaultMatcher = defaultMatcherFactory(route);
        var suffixPLPMatcher = getSuffixUrlMatcher({
            marker: 'c',
            paramName: 'categoryCode',
        });
        return service.getCombined([defaultMatcher, suffixPLPMatcher]);
    };
    return factory;
}
/**
 * Injection token with url matcher factory for PLP.
 * The provided url matcher matches both:
 * - the configured `paths` from routing config and
 * - custom pattern  `** / c / :categoryCode`
 *
 * If the this matcher doesn't fit the requirements, it can be replaced with the DEFAULT_URL_MATCHER
 * or additional matchers can be added for a specific route.
 *
 * Note: Matchers will "match" a route, but do not contribute to the creation of the route, nor do they guard routes.
 */
var PRODUCT_LISTING_URL_MATCHER = new InjectionToken('PRODUCT_LISTING_URL_MATCHER', {
    providedIn: 'root',
    factory: function () {
        return getProductListingUrlMatcherFactory(inject(UrlMatcherService), inject(DEFAULT_URL_MATCHER));
    },
});

var ɵ0$b = { pageLabel: 'search', cxRoute: 'search' }, ɵ1$1 = { cxRoute: 'brand' }, ɵ2 = { cxRoute: 'category' };
var ProductListingPageModule = /** @class */ (function () {
    function ProductListingPageModule() {
    }
    ProductListingPageModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forChild([
                    {
                        path: null,
                        canActivate: [CmsPageGuard],
                        component: PageLayoutComponent,
                        data: ɵ0$b,
                    },
                    {
                        path: null,
                        canActivate: [CmsPageGuard],
                        component: PageLayoutComponent,
                        data: ɵ1$1,
                    },
                    {
                        // The 'category' route  may include a greedy suffix url matcher '**/c/:categoryCode'
                        // So not to shadow the specific 'brand' route, the 'category' is the last route in the sequence.
                        path: null,
                        canActivate: [CmsPageGuard],
                        component: PageLayoutComponent,
                        data: ɵ2,
                    },
                ]),
                ConfigModule.withConfig({
                    routing: {
                        routes: {
                            category: {
                                matchers: [PRODUCT_LISTING_URL_MATCHER],
                            },
                        },
                    },
                }),
            ],
        })
    ], ProductListingPageModule);
    return ProductListingPageModule;
}());

var b2cLayoutConfig = {
    // deferredLoading: {
    //   strategy: DeferLoadingStrategy.DEFER,
    //   intersectionMargin: '50px',
    // },
    layoutSlots: {
        header: {
            md: {
                slots: [
                    'PreHeader',
                    'SiteContext',
                    'SiteLinks',
                    'SiteLogo',
                    'SearchBox',
                    'SiteLogin',
                    'MiniCart',
                    'NavigationBar',
                ],
            },
            xs: {
                slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
            },
        },
        navigation: {
            md: { slots: [] },
            xs: {
                slots: ['SiteLogin', 'NavigationBar', 'SiteContext', 'SiteLinks'],
            },
        },
        footer: {
            slots: ['Footer'],
        },
        LandingPage2Template: {
            pageFold: 'Section2B',
            slots: [
                'Section1',
                'Section2A',
                'Section2B',
                'Section2C',
                'Section3',
                'Section4',
                'Section5',
            ],
        },
        ContentPage1Template: {
            slots: ['Section2A', 'Section2B'],
        },
        CategoryPageTemplate: {
            pageFold: 'Section2',
            slots: ['Section1', 'Section2', 'Section3'],
        },
        ProductListPageTemplate: {
            slots: ['ProductLeftRefinements', 'ProductListSlot'],
        },
        ProductGridPageTemplate: {
            slots: ['ProductLeftRefinements', 'ProductGridSlot'],
        },
        SearchResultsListPageTemplate: {
            slots: [
                'Section2',
                'ProductLeftRefinements',
                'SearchResultsListSlot',
                'Section4',
            ],
        },
        SearchResultsGridPageTemplate: {
            slots: [
                'Section2',
                'ProductLeftRefinements',
                'SearchResultsGridSlot',
                'Section4',
            ],
        },
        ProductDetailsPageTemplate: {
            md: {
                pageFold: 'UpSelling',
            },
            xs: {
                pageFold: 'Summary',
            },
            slots: [
                'Summary',
                'UpSelling',
                'CrossSelling',
                'Tabs',
                'PlaceholderContentSlot',
            ],
        },
        CartPageTemplate: {
            slots: ['TopContent', 'CenterRightContentSlot', 'EmptyCartMiddleContent'],
        },
        AccountPageTemplate: {
            slots: ['BodyContent', 'SideContent'],
        },
        LoginPageTemplate: {
            slots: ['LeftContentSlot', 'RightContentSlot'],
        },
        ErrorPageTemplate: {
            slots: ['TopContent', 'MiddleContent', 'BottomContent'],
        },
        OrderConfirmationPageTemplate: {
            slots: ['BodyContent', 'SideContent'],
        },
        MultiStepCheckoutSummaryPageTemplate: {
            slots: ['TopContent', 'BodyContent', 'SideContent', 'BottomContent'],
        },
        CheckoutLoginPageTemplate: {
            slots: ['RightContentSlot'],
        },
    },
};

var headerComponents = {
    HamburgerMenuComponent: {
        typeCode: 'HamburgerMenuComponent',
        flexType: 'HamburgerMenuComponent',
    },
    LoginComponent: {
        typeCode: 'LoginComponent',
        flexType: 'LoginComponent',
        uid: 'LoginComponent',
    },
};
var defaultPageHeaderConfig = {
    PreHeader: {
        componentIds: ['HamburgerMenuComponent'],
    },
    SiteLogin: {
        componentIds: ['LoginComponent'],
    },
};

function defaultCmsContentConfig() {
    return {
        cmsStructure: {
            components: __assign({}, headerComponents),
            slots: __assign({}, defaultPageHeaderConfig),
            pages: [],
        },
    };
}

var StorefrontFoundationModule = /** @class */ (function () {
    function StorefrontFoundationModule() {
    }
    StorefrontFoundationModule = __decorate([
        NgModule({
            imports: [
                StateModule.forRoot(),
                AuthModule.forRoot(),
                AnonymousConsentsModule$1.forRoot(),
                ConfigModule.forRoot(),
                ConfigInitializerModule.forRoot(),
                RoutingModule.forRoot(),
                I18nModule.forRoot(),
                CmsModule.forRoot(),
                GlobalMessageModule.forRoot(),
                ProcessModule.forRoot(),
                CartModule.forRoot(),
                CheckoutModule.forRoot(),
                UserModule.forRoot(),
                ProductModule.forRoot(),
                ViewConfigModule.forRoot(),
                FeaturesConfigModule.forRoot('2.0'),
                LayoutModule,
            ],
            exports: [LayoutModule],
            providers: __spread(provideConfigFromMetaTags()),
        })
    ], StorefrontFoundationModule);
    return StorefrontFoundationModule;
}());

var StorefrontModule = /** @class */ (function () {
    function StorefrontModule() {
    }
    StorefrontModule_1 = StorefrontModule;
    StorefrontModule.withConfig = function (config) {
        return {
            ngModule: StorefrontModule_1,
            providers: [provideConfig(config)],
        };
    };
    var StorefrontModule_1;
    StorefrontModule = StorefrontModule_1 = __decorate([
        NgModule({
            imports: [
                RouterModule.forRoot([], {
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled',
                }),
                StoreModule.forRoot({}, {
                    runtimeChecks: {
                        strictStateImmutability: true,
                        strictStateSerializability: true,
                        strictActionImmutability: true,
                        strictActionSerializability: true,
                    },
                }),
                EffectsModule.forRoot([]),
                // ASM module must be imported before the `AuthModule (which is imported in `StorefrontFoundationModule`)
                // since we might have conflicting interceptor logic. See #5461.
                AsmModule,
                StorefrontFoundationModule,
                MainModule,
                SiteContextModule.forRoot(),
                SmartEditModule.forRoot(),
                PersonalizationModule.forRoot(),
                // opt-in explicitly
                OccModule.forRoot(),
                ProductDetailsPageModule,
                ProductListingPageModule,
                ExternalRoutesModule.forRoot(),
            ],
            exports: [MainModule, StorefrontFoundationModule],
        })
    ], StorefrontModule);
    return StorefrontModule;
}());

var B2cStorefrontModule = /** @class */ (function () {
    function B2cStorefrontModule() {
    }
    B2cStorefrontModule_1 = B2cStorefrontModule;
    B2cStorefrontModule.withConfig = function (config) {
        return {
            ngModule: B2cStorefrontModule_1,
            providers: [provideConfig(config)],
        };
    };
    var B2cStorefrontModule_1;
    B2cStorefrontModule = B2cStorefrontModule_1 = __decorate([
        NgModule({
            imports: [
                StorefrontModule.withConfig({
                    pwa: {
                        enabled: true,
                        addToHomeScreen: true,
                    },
                }),
                ConfigModule.withConfig(b2cLayoutConfig),
                ConfigModule.withConfigFactory(defaultCmsContentConfig),
                // the cms lib module contains all components that added in the bundle
                CmsLibModule,
            ],
            exports: [StorefrontModule],
        })
    ], B2cStorefrontModule);
    return B2cStorefrontModule;
}());

/**
 * @deprecated since 2.0.0
 * NOTE: delete this file altogether, move below slots to the main default layout config
 */
var PLPAccessibilityLayoutConfig = {
    layoutSlots: {
        ProductListPageTemplate: {
            slots: ['ProductLeftRefinements', 'ProductListSlot'],
        },
    },
};

/*
 * Public API Surface of storefrontlib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AVOID_STACKED_OUTLETS, AbstractStoreItemComponent, AddToCartComponent, AddToCartModule, AddToHomeScreenBannerComponent, AddToHomeScreenBtnComponent, AddToHomeScreenComponent, AddToWishListComponent, AddToWishListModule, AddedToCartDialogComponent, AddressBookComponent, AddressBookComponentService, AddressBookModule, AddressFormComponent, AddressFormModule, AmendOrderActionsComponent, AmendOrderActionsModule, AmendOrderItemsModule, AmendOrderType, AnonymousConsentManagementBannerComponent, AnonymousConsentManagementBannerModule, AnonymousConsentOpenDialogComponent, AppliedCouponsComponent, AsmModule, AutoFocusDirective, B2cStorefrontModule, BREAKPOINT, BannerCarouselComponent, BannerCarouselModule, BannerComponent, BannerModule, BillingAddressFormComponent, BillingAddressFormModule, BreadcrumbComponent, BreadcrumbModule, BreadcrumbSchemaBuilder, BreakpointService, CancelOrReturnItemsComponent, CancelOrderComponent, CancelOrderConfirmationComponent, CancelOrderConfirmationModule, CancelOrderModule, CardComponent, CardModule, CarouselComponent, CarouselModule, CarouselService, CartComponentModule, CartCouponComponent, CartCouponModule, CartDetailsComponent, CartDetailsModule, CartItemComponent, CartItemListComponent, CartNotEmptyGuard, CartPageLayoutHandler, CartSharedModule, CartTotalsComponent, CartTotalsModule, CategoryNavigationComponent, CategoryNavigationModule, CheckoutAuthGuard, CheckoutComponentModule, CheckoutConfig, CheckoutConfigService, CheckoutDetailsLoadedGuard, CheckoutDetailsService, CheckoutGuard, CheckoutLoginComponent, CheckoutLoginModule, CheckoutOrchestratorComponent, CheckoutOrchestratorModule, CheckoutOrderSummaryComponent, CheckoutOrderSummaryModule, CheckoutProgressComponent, CheckoutProgressMobileBottomComponent, CheckoutProgressMobileBottomModule, CheckoutProgressMobileTopComponent, CheckoutProgressMobileTopModule, CheckoutProgressModule, CheckoutStepType, CloseAccountComponent, CloseAccountModalComponent, CloseAccountModule, CmsComponentData, CmsLibModule, CmsPageGuard, CmsParagraphModule, CmsRouteModule, ComponentWrapperDirective, ConsentManagementComponent, ConsentManagementFormComponent, ConsentManagementModule, ConsignmentTrackingComponent, CouponCardComponent, CouponClaimComponent, CouponDialogComponent, CurrentProductService, CustomFormValidators, DeliveryModeComponent, DeliveryModeModule, DeliveryModePreferences, DeliveryModeSetGuard, FooterNavigationComponent, FooterNavigationModule, ForgotPasswordComponent, ForgotPasswordModule, FormUtils, GenericLinkComponent, GenericLinkModule, GlobalMessageComponent, GlobalMessageComponentModule, GuestRegisterFormComponent, HamburgerMenuComponent, HamburgerMenuModule, HamburgerMenuService, HighlightPipe, ICON_TYPE, IconComponent, IconConfig, IconLoaderService, IconModule, IconResourceType, ItemCounterComponent, ItemCounterModule, JSONLD_PRODUCT_BUILDER, JsonLdBaseProductBuilder, JsonLdBuilderModule, JsonLdDirective, JsonLdProductOfferBuilder, JsonLdProductReviewBuilder, JsonLdScriptFactory, LanguageCurrencyComponent, LayoutConfig, LayoutModule, LinkComponent, LinkModule, ListNavigationModule, LoginComponent, LoginFormComponent, LoginFormModule, LoginModule, LogoutGuard, LogoutModule, MainModule, MediaComponent, MediaModule, MediaService, MiniCartComponent, MiniCartModule, ModalRef, ModalService, MyCouponsComponent, MyCouponsModule, MyInterestsComponent, MyInterestsModule, NavigationComponent, NavigationModule, NavigationService, NavigationUIComponent, NotCheckoutAuthGuard, NotificationPreferenceComponent, NotificationPreferenceModule, OrderAmendService, OrderCancellationGuard, OrderCancellationModule, OrderCancellationService, OrderConfirmationGuard, OrderConfirmationItemsComponent, OrderConfirmationModule, OrderConfirmationOverviewComponent, OrderConfirmationThankYouMessageComponent, OrderConfirmationTotalsComponent, OrderConsignedEntriesComponent, OrderDetailActionsComponent, OrderDetailHeadlineComponent, OrderDetailItemsComponent, OrderDetailShippingComponent, OrderDetailTotalsComponent, OrderDetailsModule, OrderDetailsService, OrderHistoryComponent, OrderHistoryModule, OrderModule, OrderReturnGuard, OrderReturnModule, OrderReturnRequestListComponent, OrderReturnService, OrderSummaryComponent, OutletDirective, OutletModule, OutletPosition, OutletRefDirective, OutletRefModule, OutletService, PAGE_LAYOUT_HANDLER, PLPAccessibilityLayoutConfig, PRODUCT_DETAILS_URL_MATCHER, PRODUCT_LISTING_URL_MATCHER, PWAModuleConfig, PageComponentModule, PageLayoutComponent, PageLayoutModule, PageLayoutService, PageSlotComponent, PageSlotModule, PaginationBuilder, PaginationComponent, PaginationConfig, PaginationItemType, PaginationModule, PaginationNavigationPosition, ParagraphComponent, PaymentDetailsSetGuard, PaymentFormComponent, PaymentFormModule, PaymentMethodComponent, PaymentMethodModule, PaymentMethodsComponent, PaymentMethodsModule, PlaceOrderComponent, PlaceOrderModule, ProductAttributesComponent, ProductAttributesModule, ProductCarouselComponent, ProductCarouselModule, ProductCarouselService, ProductDetailOutlets, ProductDetailsPageModule, ProductDetailsTabComponent, ProductDetailsTabModule, ProductFacetNavigationComponent, ProductGridItemComponent, ProductImagesComponent, ProductImagesModule, ProductIntroComponent, ProductIntroModule, ProductListComponent, ProductListComponentService, ProductListItemComponent, ProductListModule, ProductListingPageModule, ProductReferencesComponent, ProductReferencesModule, ProductReviewsComponent, ProductReviewsModule, ProductSchemaBuilder, ProductScrollComponent, ProductSummaryComponent, ProductSummaryModule, ProductTabsModule, ProductVariantGuard, ProductVariantsComponent, ProductVariantsModule, ProductViewComponent, PromotionService, PromotionsComponent, PromotionsModule, PwaModule, QualtricsComponent, QualtricsConfig, QualtricsLoaderService, QualtricsModule, RegisterComponent, RegisterComponentModule, ResetPasswordFormComponent, ResetPasswordModule, ReturnOrderComponent, ReturnOrderConfirmationComponent, ReturnOrderConfirmationModule, ReturnOrderModule, ReturnRequestDetailModule, ReturnRequestItemsComponent, ReturnRequestListModule, ReturnRequestOverviewComponent, ReturnRequestTotalsComponent, ReviewSubmitComponent, ReviewSubmitModule, RoutingModule, SCHEMA_BUILDER, SaveForLaterComponent, SaveForLaterModule, ScheduleComponent, SearchBoxComponent, SearchBoxComponentService, SearchBoxModule, SeoMetaService, SeoModule, ShippingAddressComponent, ShippingAddressModule, ShippingAddressSetGuard, SiteContextComponentService, SiteContextSelectorComponent, SiteContextSelectorModule, SiteContextType, SortingComponent, SpinnerComponent, SpinnerModule, StarRatingComponent, StarRatingModule, StockNotificationComponent, StockNotificationDialogComponent, StockNotificationModule, StoreFinderComponent, StoreFinderGridComponent, StoreFinderHeaderComponent, StoreFinderListComponent, StoreFinderListItemComponent, StoreFinderMapComponent, StoreFinderModule, StoreFinderPaginationDetailsComponent, StoreFinderSearchComponent, StoreFinderSearchResultComponent, StoreFinderStoreComponent, StoreFinderStoreDescriptionComponent, StoreFinderStoresCountComponent, StorefrontComponent, StorefrontFoundationModule, StorefrontModule, StructuredDataModule, SuggestedAddressDialogComponent, TabParagraphContainerComponent, TabParagraphContainerModule, TrackingEventsComponent, USE_STACKED_OUTLETS, UpdateEmailComponent, UpdateEmailFormComponent, UpdateEmailModule, UpdatePasswordComponent, UpdatePasswordFormComponent, UpdatePasswordModule, UpdateProfileComponent, UpdateProfileFormComponent, UpdateProfileModule, UserComponentModule, VariantColorSelectorComponent, VariantColorSelectorModule, VariantSizeSelectorComponent, VariantSizeSelectorModule, VariantStyleIconsComponent, VariantStyleIconsModule, VariantStyleSelectorComponent, VariantStyleSelectorModule, ViewConfig, ViewConfigModule, ViewModes, WishListComponent, WishListItemComponent, WishListModule, b2cLayoutConfig, defaultCmsContentConfig, defaultPWAModuleConfig, defaultPageHeaderConfig, defaultPaginationConfig, defaultScrollConfig, fontawesomeIconConfig, getStructuredDataFactory, getSuffixUrlMatcher, headerComponents, initSeoService, pwaConfigurationFactory, pwaFactory, sortTitles, titleScores, ɵ0$1 as ɵ0, ɵ1, ɵ2, AsmLoaderModule as ɵa, asmFactory as ɵb, SkipLinkComponent as ɵba, SkipLinkService as ɵbb, SkipLinkDirective as ɵbc, MyCouponsComponentService as ɵbd, addCmsRoute as ɵbe, defaultStorefrontRoutesConfig as ɵbf, defaultRoutingConfig as ɵbg, htmlLangProvider as ɵbh, setHtmlLangAttribute as ɵbi, AnonymousConsentsModule as ɵbj, AnonymousConsentDialogComponent as ɵbk, ComponentMapperService as ɵc, AsmEnablerService as ɵd, AsmMainUiComponent as ɵe, AsmComponentService as ɵf, CSAgentLoginFormComponent as ɵg, CustomerSelectionComponent as ɵh, AsmSessionTimerComponent as ɵi, FormatTimerPipe as ɵj, CustomerEmulationComponent as ɵk, AutoFocusDirectiveModule as ɵl, defaultCheckoutConfig as ɵm, ExpressCheckoutService as ɵn, defaultQualtricsConfig as ɵo, CmsRoutesService as ɵp, CmsMappingService as ɵq, CmsI18nService as ɵr, CmsGuardsService as ɵs, ReturnRequestService as ɵt, AddToHomeScreenService as ɵu, SkipLinkModule as ɵv, skipLinkFactory as ɵw, defaultSkipLinkConfig as ɵx, SkipLinkConfig as ɵy, SkipLinkScrollPosition as ɵz, DeferLoaderService as θDeferLoaderService, IntersectionService as θIntersectionService };
//# sourceMappingURL=spartacus-storefront.js.map
