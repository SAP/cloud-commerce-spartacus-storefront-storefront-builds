/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ServerConfig } from '@spartacus/core';
/** @enum {string} */
const BREAKPOINT = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
};
export { BREAKPOINT };
/**
 * The LayoutConfig supports the configuration of page slots by page templates
 * or page sections, such as headers and footers. The configuration also supports
 * adaptive design per breadpoint (not per device type), so that the DOM is (re)rendered
 * por a given breakpoint.
 * @abstract
 */
export class LayoutConfig extends ServerConfig {
}
if (false) {
    /**
     * The breakpoint configuration is used when the DOM is (re)rendered in specific view.
     * This allows for adaptive rendering, so that the DOM is rendered for specific breakpoints.
     * @type {?}
     */
    LayoutConfig.prototype.breakpoints;
    /** @type {?} */
    LayoutConfig.prototype.layoutSlots;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7SUFHN0MsSUFBSyxJQUFJO0lBQ1QsSUFBSyxJQUFJO0lBQ1QsSUFBSyxJQUFJO0lBQ1QsSUFBSyxJQUFJO0lBQ1QsSUFBSyxJQUFJOzs7Ozs7Ozs7O0FBbUNYLE1BQU0sT0FBZ0IsWUFBYSxTQUFRLFlBQVk7Q0FVdEQ7Ozs7Ozs7SUFQQyxtQ0FLRTs7SUFDRixtQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2ZXJDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5leHBvcnQgZW51bSBCUkVBS1BPSU5UIHtcbiAgeHMgPSAneHMnLFxuICBzbSA9ICdzbScsXG4gIG1kID0gJ21kJyxcbiAgbGcgPSAnbGcnLFxuICB4bCA9ICd4bCcsXG59XG5cbmV4cG9ydCB0eXBlIExheW91dFNlY3Rpb25zID1cbiAgfCAnaGVhZGVyJ1xuICB8ICdmb290ZXInXG4gIHwgJ0xhbmRpbmdQYWdlMlRlbXBsYXRlJ1xuICB8IHN0cmluZztcblxuZXhwb3J0IHR5cGUgU2xvdENvbmZpZyA9IHtcbiAgLyoqIFRoZSBjbXMgcGFnZSBzbG90cyBhcmUgbWFwcGVkIGJ5IHRoZSBgc2xvdC5wb3NpdGlvbmAuICovXG4gIHNsb3RzPzogc3RyaW5nW107XG59O1xuXG5leHBvcnQgdHlwZSBTbG90R3JvdXAgPSB7XG4gIC8qKiBUaGUgcGFnZSBzbG90IGNvbmZpZ3VyYXRpb24gZm9yIGxhcmdlIHNjcmVlbnMgKi9cbiAgW0JSRUFLUE9JTlQubGddPzogU2xvdENvbmZpZztcbiAgLyoqIFRoZSBwYWdlIHNsb3QgY29uZmlndXJhdGlvbiBmb3IgbWVkaXVtIHNjcmVlbnMgKi9cbiAgW0JSRUFLUE9JTlQubWRdPzogU2xvdENvbmZpZztcbiAgLyoqIFRoZSBwYWdlIHNsb3QgY29uZmlndXJhdGlvbiBmb3Igc21hbGwgc2NyZWVucyAqL1xuICBbQlJFQUtQT0lOVC5zbV0/OiBTbG90Q29uZmlnO1xuICAvKiogVGhlIHBhZ2Ugc2xvdCBjb25maWd1cmF0aW9uIGZvciBleHRyYSBzbWFsbCBzY3JlZW5zICovXG4gIFtCUkVBS1BPSU5ULnhzXT86IFNsb3RDb25maWc7XG59O1xuXG5leHBvcnQgdHlwZSBMYXlvdXRTbG90Q29uZmlnID0ge1xuICBbc2VjdGlvbiBpbiBMYXlvdXRTZWN0aW9uc106IFNsb3RDb25maWcgfCBTbG90R3JvdXAgfCBMYXlvdXRTbG90Q29uZmlnXG59O1xuXG4vKipcbiAqIFRoZSBMYXlvdXRDb25maWcgc3VwcG9ydHMgdGhlIGNvbmZpZ3VyYXRpb24gb2YgcGFnZSBzbG90cyBieSBwYWdlIHRlbXBsYXRlc1xuICogb3IgcGFnZSBzZWN0aW9ucywgc3VjaCBhcyBoZWFkZXJzIGFuZCBmb290ZXJzLiBUaGUgY29uZmlndXJhdGlvbiBhbHNvIHN1cHBvcnRzXG4gKiBhZGFwdGl2ZSBkZXNpZ24gcGVyIGJyZWFkcG9pbnQgKG5vdCBwZXIgZGV2aWNlIHR5cGUpLCBzbyB0aGF0IHRoZSBET00gaXMgKHJlKXJlbmRlcmVkXG4gKiBwb3IgYSBnaXZlbiBicmVha3BvaW50LlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTGF5b3V0Q29uZmlnIGV4dGVuZHMgU2VydmVyQ29uZmlnIHtcbiAgLyoqIFRoZSBicmVha3BvaW50IGNvbmZpZ3VyYXRpb24gaXMgdXNlZCB3aGVuIHRoZSBET00gaXMgKHJlKXJlbmRlcmVkIGluIHNwZWNpZmljIHZpZXcuXG4gICAqIFRoaXMgYWxsb3dzIGZvciBhZGFwdGl2ZSByZW5kZXJpbmcsIHNvIHRoYXQgdGhlIERPTSBpcyByZW5kZXJlZCBmb3Igc3BlY2lmaWMgYnJlYWtwb2ludHMuICovXG4gIGJyZWFrcG9pbnRzPzoge1xuICAgIFtCUkVBS1BPSU5ULnhzXT86IG51bWJlcjtcbiAgICBbQlJFQUtQT0lOVC5zbV0/OiBudW1iZXI7XG4gICAgW0JSRUFLUE9JTlQubWRdPzogbnVtYmVyO1xuICAgIFtCUkVBS1BPSU5ULmxnXT86IG51bWJlcjtcbiAgfTtcbiAgbGF5b3V0U2xvdHM/OiBMYXlvdXRTbG90Q29uZmlnO1xufVxuIl19