import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SplitViewService } from '../split-view.service';
/**
 * The view component is part of the `SplitViewComponent`. The view
 * contains the navigable content that should be split up. It maintains
 * a view position and allows to show or hide the view.
 *
 * The ViewComponent interacts with the `SplitViewService` for handing over the
 * view state, so that the overarching `SplitViewComponent` can manage the
 * overall experience.
 */
import * as ɵngcc0 from '@angular/core';
export declare class ViewComponent implements OnInit, OnDestroy {
    protected splitService: SplitViewService;
    protected elementRef: ElementRef;
    protected cd: ChangeDetectorRef;
    protected _hidden: any;
    position: string;
    /**
     * The disappeared flag is added to the
     */
    disappeared: boolean;
    /**
     * The hidden input is used to set the initial visible state of the view.
     * The hidden state defaults to false.
     *
     * The hidden input supports 2-way binding, see `hiddenChange` property.
     */
    set hidden(hidden: boolean);
    /**
     * An update of the view visibility is emitted to the hiddenChange output.
     */
    hiddenChange: EventEmitter<any>;
    protected subscription: Subscription;
    constructor(splitService: SplitViewService, elementRef: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    /**
     * Toggles the visibility of the view.
     *
     * An optional force flag can be used to explicitly show or hide view component.
     */
    toggle(force?: boolean): void;
    /**
     * Returns the position for the view.
     *
     * The position is either taken from the input `position` or generated by the `SplitService`.
     */
    protected get viewPosition(): number;
    /**
     * Returns the duration in milliseconds. The duration is based on the CSS custom property
     * `--cx-transition-duration`. Defaults to 300 milliseconds.
     */
    protected get duration(): number;
    /**
     * The view is removed from the `SplitService` so that the view no longer
     * plays a role in the overall split view.
     */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ViewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ViewComponent, "cx-view", never, { "hidden": "hidden"; "position": "position"; }, { "hiddenChange": "hiddenChange"; }, never, ["*"]>;
}

//# sourceMappingURL=view.component.d.ts.map