import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { CmsConfig, CmsService, ContentSlotComponentData, ContentSlotData, DynamicAttributeService } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IntersectionOptions } from '../../../layout/loading/intersection.model';
export declare class PageSlotComponent implements OnInit, OnDestroy {
    protected cmsService: CmsService;
    protected dynamicAttributeService: DynamicAttributeService;
    protected renderer: Renderer2;
    protected hostElement: ElementRef;
    protected config?: CmsConfig;
    position: string;
    isPending: boolean;
    hasComponents: boolean;
    isPageFold: boolean;
    private pendingComponentCount;
    readonly position$: BehaviorSubject<string>;
    /**
     * observable with `ContentSlotData` for the current position
     *
     * @deprecated we'll stop supporting this property in 2.0 as
     * it is not used separately.
     */
    readonly slot$: Observable<ContentSlotData>;
    readonly components$: Observable<ContentSlotComponentData[]>;
    private subscription;
    constructor(cmsService: CmsService, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, hostElement: ElementRef, config: CmsConfig);
    /**
     * @deprecated since version 1.4
     * Use constructor(cmsService: CmsService, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, hostElement: ElementRef, config?: CmsConfig) instead
     */
    constructor(cmsService: CmsService, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, hostElement: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Is triggered when a component is added to the view.
     * We use this information to dropthe `is-pending` class from the page slot
     * when all nested components have been added.
     */
    isLoaded(loadState: boolean): void;
    getComponentDeferOptions(componentType: string): IntersectionOptions;
    /**
     * The `DeferLoadingStrategy` indicates whether component rendering
     * should be deferred.
     */
    private getDeferLoadingStrategy;
    private addSmartEditSlotClass;
    private addSmartEditContract;
}
