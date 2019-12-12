/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ICON_TYPE = {
    STAR: 'STAR',
    SEARCH: 'SEARCH',
    CART: 'CART',
    INFO: 'INFO',
    GRID: 'GRID',
    LIST: 'LIST',
    CARET_DOWN: 'CARET_DOWN',
    CARET_LEFT: 'CARET_LEFT',
    CARET_RIGHT: 'CARET_RIGHT',
    CLOSE: 'CLOSE',
    ERROR: 'ERROR',
    WARNING: 'WARNING',
    SUCCESS: 'SUCCESS',
    VISA: 'VISA',
    MASTER_CARD: 'MASTER_CARD',
    AMEX: 'AMEX',
    DINERS_CLUB: 'DINERS_CLUB',
    CREDIT_CARD: 'CREDIT_CARD',
    EXPAND: 'EXPAND',
    COLLAPSE: 'COLLAPSE',
    RESET: 'RESET',
    CIRCLE: 'CIRCLE',
    HEART: 'HEART',
    EMPTY_HEART: 'EMPTY_HEART',
};
export { ICON_TYPE };
/**
 * @abstract
 */
var /**
 * @abstract
 */
IconConfig = /** @class */ (function () {
    function IconConfig() {
    }
    return IconConfig;
}());
/**
 * @abstract
 */
export { IconConfig };
if (false) {
    /** @type {?} */
    IconConfig.prototype.icon;
}
/**
 * @record
 */
export function IconConfigResource() { }
if (false) {
    /** @type {?} */
    IconConfigResource.prototype.type;
    /** @type {?|undefined} */
    IconConfigResource.prototype.url;
    /** @type {?|undefined} */
    IconConfigResource.prototype.types;
}
/** @enum {string} */
var IconResourceType = {
    SVG: 'svg',
    LINK: 'link',
};
export { IconResourceType };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNFLE1BQU8sTUFBTTtJQUNiLFFBQVMsUUFBUTtJQUNqQixNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07SUFDYixZQUFhLFlBQVk7SUFDekIsWUFBYSxZQUFZO0lBQ3pCLGFBQWMsYUFBYTtJQUMzQixPQUFRLE9BQU87SUFDZixPQUFRLE9BQU87SUFDZixTQUFVLFNBQVM7SUFDbkIsU0FBVSxTQUFTO0lBQ25CLE1BQU8sTUFBTTtJQUNiLGFBQWMsYUFBYTtJQUMzQixNQUFPLE1BQU07SUFDYixhQUFjLGFBQWE7SUFDM0IsYUFBYyxhQUFhO0lBQzNCLFFBQVMsUUFBUTtJQUNqQixVQUFXLFVBQVU7SUFDckIsT0FBUSxPQUFPO0lBQ2YsUUFBUyxRQUFRO0lBQ2pCLE9BQVEsT0FBTztJQUNmLGFBQWMsYUFBYTs7Ozs7O0FBRzdCOzs7O0lBQUE7SUF5QkEsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQzs7Ozs7OztJQXhCQywwQkF1QkU7Ozs7O0FBR0osd0NBSUM7OztJQUhDLGtDQUFnQzs7SUFDaEMsaUNBQWE7O0lBQ2IsbUNBQW9COzs7O0lBSXBCLEtBQU0sS0FBSztJQUNYLE1BQU8sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIElDT05fVFlQRSB7XG4gIFNUQVIgPSAnU1RBUicsXG4gIFNFQVJDSCA9ICdTRUFSQ0gnLFxuICBDQVJUID0gJ0NBUlQnLFxuICBJTkZPID0gJ0lORk8nLFxuICBHUklEID0gJ0dSSUQnLFxuICBMSVNUID0gJ0xJU1QnLFxuICBDQVJFVF9ET1dOID0gJ0NBUkVUX0RPV04nLFxuICBDQVJFVF9MRUZUID0gJ0NBUkVUX0xFRlQnLFxuICBDQVJFVF9SSUdIVCA9ICdDQVJFVF9SSUdIVCcsXG4gIENMT1NFID0gJ0NMT1NFJyxcbiAgRVJST1IgPSAnRVJST1InLFxuICBXQVJOSU5HID0gJ1dBUk5JTkcnLFxuICBTVUNDRVNTID0gJ1NVQ0NFU1MnLFxuICBWSVNBID0gJ1ZJU0EnLFxuICBNQVNURVJfQ0FSRCA9ICdNQVNURVJfQ0FSRCcsXG4gIEFNRVggPSAnQU1FWCcsXG4gIERJTkVSU19DTFVCID0gJ0RJTkVSU19DTFVCJyxcbiAgQ1JFRElUX0NBUkQgPSAnQ1JFRElUX0NBUkQnLFxuICBFWFBBTkQgPSAnRVhQQU5EJyxcbiAgQ09MTEFQU0UgPSAnQ09MTEFQU0UnLFxuICBSRVNFVCA9ICdSRVNFVCcsXG4gIENJUkNMRSA9ICdDSVJDTEUnLFxuICBIRUFSVCA9ICdIRUFSVCcsXG4gIEVNUFRZX0hFQVJUID0gJ0VNUFRZX0hFQVJUJyxcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEljb25Db25maWcge1xuICBpY29uPzoge1xuICAgIC8qKlxuICAgICAqIEVhY2ggaWNvbiB0eXBlIGNhbiBiZSBjb25maWd1cmVkIHdpdGggYSBzby1jYWxsZWQgc3ltYm9sLiBUaGUgc3ltYm9sIHdpbGxcbiAgICAgKiBiZSB1c2VkIHRvIG1hcCB0aGUgaWNvbiB0byBhbiBTVkcgYHN5bWJvbGAgKGlkKSBvciB0byB0aGUgc3R5bGUgY2xhc3NlcyBvZlxuICAgICAqIGEgZm9udCBiYXNlZCBpY29uLiBUaGUgZm9sbG93aW5nIGNvbmZpZ3VyYXRpb24gd291bGQgbWFwIHRvIGEgZm9udGF3ZXNvbWVcbiAgICAgKiBpY29uOlxuICAgICAqXG4gICAgICogaWNvbjoge1xuICAgICAqICAgc3ltYm9sczoge1xuICAgICAqICAgICBDQVJUOiAnZmFzIGZhLXNob3BwaW5nLWNhcnQnXG4gICAgICogICB9XG4gICAgICogfVxuICAgICAqL1xuICAgIHN5bWJvbHM/OiB7XG4gICAgICBbSUNPTl9UWVBFOiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc291cmNlcyBhcmUgdXNlZCB0byBtYXAgaWNvbiB0eXBlcyB0byBjZXJ0YWluIGFzc2V0LCBzdWNoIGFzIGFuIFNWRyAoc3ByaXRlKSBpbWFnZS5cbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSAoYEljb25SZXNvdXJjZVR5cGVgKSBkaWN0YXRlcyB3aGV0aGVyIGFuIFNWRyBpbWFnZSBpcyB1c2VkLiBUaGUgVVJMXG4gICAgICogaXMgdXNlZCBmb3IgdGhlIFNWRyB4bGluayByZWZlcmVuY2UuXG4gICAgICovXG4gICAgcmVzb3VyY2VzPzogSWNvbkNvbmZpZ1Jlc291cmNlW107XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvbkNvbmZpZ1Jlc291cmNlIHtcbiAgdHlwZTogSWNvblJlc291cmNlVHlwZSB8IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xuICB0eXBlcz86IElDT05fVFlQRVtdO1xufVxuXG5leHBvcnQgZW51bSBJY29uUmVzb3VyY2VUeXBlIHtcbiAgU1ZHID0gJ3N2ZycsXG4gIExJTksgPSAnbGluaycsXG59XG4iXX0=