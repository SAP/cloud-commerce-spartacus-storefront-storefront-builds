/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, } from 'rxjs/operators';
import { BREAKPOINT, LayoutConfig } from '../config/layout-config';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../config/layout-config";
export class BreakpointService {
    /**
     * @param {?} winRef
     * @param {?} config
     */
    constructor(winRef, config) {
        this.winRef = winRef;
        this.config = config;
    }
    /**
     * @return {?}
     */
    get breakpoint$() {
        if (!this.window) {
            return of(BREAKPOINT.xs);
        }
        return fromEvent(this.window, 'resize').pipe(debounceTime(300), startWith({ target: this.window }), map((/**
         * @param {?} event
         * @return {?}
         */
        event => this.getBreakpoint(((/** @type {?} */ (event.target))).innerWidth))), distinctUntilChanged());
    }
    /**
     * @return {?}
     */
    get breakpoints() {
        return [
            BREAKPOINT.xs,
            BREAKPOINT.sm,
            BREAKPOINT.md,
            BREAKPOINT.lg,
            BREAKPOINT.xl,
        ];
    }
    /**
     * @protected
     * @param {?} windowWidth
     * @return {?}
     */
    getBreakpoint(windowWidth) {
        /** @type {?} */
        const breakpoint = this.getClosest(windowWidth);
        return BREAKPOINT[breakpoint || BREAKPOINT.lg];
    }
    /**
     * @protected
     * @param {?=} windowWidth
     * @return {?}
     */
    getClosest(windowWidth) {
        if (!windowWidth) {
            windowWidth = this.window.innerWidth;
        }
        return windowWidth < this.getSize(BREAKPOINT.xs)
            ? BREAKPOINT.xs
            : this.breakpoints.reverse().find((/**
             * @param {?} br
             * @return {?}
             */
            br => windowWidth >= this.getSize(br)));
    }
    /**
     * @protected
     * @param {?} breakpoint
     * @return {?}
     */
    getSize(breakpoint) {
        return this.config.breakpoints ? this.config.breakpoints[breakpoint] : 576;
    }
    /**
     * @return {?}
     */
    get window() {
        return this.winRef.nativeWindow;
    }
}
BreakpointService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
BreakpointService.ctorParameters = () => [
    { type: WindowRef },
    { type: LayoutConfig }
];
/** @nocollapse */ BreakpointService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i2.LayoutConfig)); }, token: BreakpointService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    BreakpointService.prototype.winRef;
    /**
     * @type {?}
     * @private
     */
    BreakpointService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQ0wsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixHQUFHLEVBQ0gsU0FBUyxHQUNWLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUtuRSxNQUFNLE9BQU8saUJBQWlCOzs7OztJQUM1QixZQUFvQixNQUFpQixFQUFVLE1BQW9CO1FBQS9DLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFjO0lBQUcsQ0FBQzs7OztJQUV2RSxJQUFJLFdBQVc7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDMUI7UUFDRCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDMUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQ2xDLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxtQkFBUSxLQUFLLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBQyxFQUNuRSxvQkFBb0IsRUFBRSxDQUN2QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU87WUFDTCxVQUFVLENBQUMsRUFBRTtZQUNiLFVBQVUsQ0FBQyxFQUFFO1lBQ2IsVUFBVSxDQUFDLEVBQUU7WUFDYixVQUFVLENBQUMsRUFBRTtZQUNiLFVBQVUsQ0FBQyxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVTLGFBQWEsQ0FBQyxXQUFtQjs7Y0FDbkMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQy9DLE9BQU8sVUFBVSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7O0lBRVMsVUFBVSxDQUFDLFdBQW9CO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQzlDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7Ozs7WUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7O0lBRVMsT0FBTyxDQUFDLFVBQXNCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDN0UsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDbEMsQ0FBQzs7O1lBakRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVpRLFNBQVM7WUFRRyxZQUFZOzs7Ozs7OztJQU1uQixtQ0FBeUI7Ozs7O0lBQUUsbUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIG1hcCxcbiAgc3RhcnRXaXRoLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCUkVBS1BPSU5ULCBMYXlvdXRDb25maWcgfSBmcm9tICcuLi9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVha3BvaW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWYsIHByaXZhdGUgY29uZmlnOiBMYXlvdXRDb25maWcpIHt9XG5cbiAgZ2V0IGJyZWFrcG9pbnQkKCk6IE9ic2VydmFibGU8QlJFQUtQT0lOVD4ge1xuICAgIGlmICghdGhpcy53aW5kb3cpIHtcbiAgICAgIHJldHVybiBvZihCUkVBS1BPSU5ULnhzKTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21FdmVudCh0aGlzLndpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMzAwKSxcbiAgICAgIHN0YXJ0V2l0aCh7IHRhcmdldDogdGhpcy53aW5kb3cgfSksXG4gICAgICBtYXAoZXZlbnQgPT4gdGhpcy5nZXRCcmVha3BvaW50KCg8V2luZG93PmV2ZW50LnRhcmdldCkuaW5uZXJXaWR0aCkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBnZXQgYnJlYWtwb2ludHMoKTogQlJFQUtQT0lOVFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgQlJFQUtQT0lOVC54cyxcbiAgICAgIEJSRUFLUE9JTlQuc20sXG4gICAgICBCUkVBS1BPSU5ULm1kLFxuICAgICAgQlJFQUtQT0lOVC5sZyxcbiAgICAgIEJSRUFLUE9JTlQueGwsXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRCcmVha3BvaW50KHdpbmRvd1dpZHRoOiBudW1iZXIpOiBCUkVBS1BPSU5UIHtcbiAgICBjb25zdCBicmVha3BvaW50ID0gdGhpcy5nZXRDbG9zZXN0KHdpbmRvd1dpZHRoKTtcbiAgICByZXR1cm4gQlJFQUtQT0lOVFticmVha3BvaW50IHx8IEJSRUFLUE9JTlQubGddO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENsb3Nlc3Qod2luZG93V2lkdGg/OiBudW1iZXIpOiBCUkVBS1BPSU5UIHtcbiAgICBpZiAoIXdpbmRvd1dpZHRoKSB7XG4gICAgICB3aW5kb3dXaWR0aCA9IHRoaXMud2luZG93LmlubmVyV2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbmRvd1dpZHRoIDwgdGhpcy5nZXRTaXplKEJSRUFLUE9JTlQueHMpXG4gICAgICA/IEJSRUFLUE9JTlQueHNcbiAgICAgIDogdGhpcy5icmVha3BvaW50cy5yZXZlcnNlKCkuZmluZChiciA9PiB3aW5kb3dXaWR0aCA+PSB0aGlzLmdldFNpemUoYnIpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTaXplKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5icmVha3BvaW50cyA/IHRoaXMuY29uZmlnLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogNTc2O1xuICB9XG5cbiAgZ2V0IHdpbmRvdygpOiBXaW5kb3cge1xuICAgIHJldHVybiB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3c7XG4gIH1cbn1cbiJdfQ==