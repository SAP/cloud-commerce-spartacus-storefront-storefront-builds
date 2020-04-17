export var ICON_TYPE;
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
    ICON_TYPE["FILTER"] = "FILTER";
})(ICON_TYPE || (ICON_TYPE = {}));
var IconConfig = /** @class */ (function () {
    function IconConfig() {
    }
    return IconConfig;
}());
export { IconConfig };
/**
 * Each ICON type can have an companied resource type, such as SVG, LINK (font) or just TEXT.
 * The resources will be automitacally loaded in case they're required for the `ICON_TYPE`.
 */
export var IconResourceType;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBTixJQUFZLFNBMEJYO0FBMUJELFdBQVksU0FBUztJQUNuQiwwQkFBYSxDQUFBO0lBQ2IsOEJBQWlCLENBQUE7SUFDakIsMEJBQWEsQ0FBQTtJQUNiLDBCQUFhLENBQUE7SUFDYiwwQkFBYSxDQUFBO0lBQ2IsMEJBQWEsQ0FBQTtJQUNiLHNDQUF5QixDQUFBO0lBQ3pCLHNDQUF5QixDQUFBO0lBQ3pCLHdDQUEyQixDQUFBO0lBQzNCLDRCQUFlLENBQUE7SUFDZiw0QkFBZSxDQUFBO0lBQ2YsZ0NBQW1CLENBQUE7SUFDbkIsZ0NBQW1CLENBQUE7SUFDbkIsMEJBQWEsQ0FBQTtJQUNiLHdDQUEyQixDQUFBO0lBQzNCLDBCQUFhLENBQUE7SUFDYix3Q0FBMkIsQ0FBQTtJQUMzQix3Q0FBMkIsQ0FBQTtJQUMzQiw4QkFBaUIsQ0FBQTtJQUNqQixrQ0FBcUIsQ0FBQTtJQUNyQiw0QkFBZSxDQUFBO0lBQ2YsOEJBQWlCLENBQUE7SUFDakIsNEJBQWUsQ0FBQTtJQUNmLHdDQUEyQixDQUFBO0lBQzNCLDhCQUFpQixDQUFBO0FBQ25CLENBQUMsRUExQlcsU0FBUyxLQUFULFNBQVMsUUEwQnBCO0FBRUQ7SUFBQTtJQUVBLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOztBQWlDRDs7O0dBR0c7QUFDSCxNQUFNLENBQU4sSUFBWSxnQkFnQlg7QUFoQkQsV0FBWSxnQkFBZ0I7SUFDMUI7OztPQUdHO0lBQ0gsK0JBQVcsQ0FBQTtJQUVYOztPQUVHO0lBQ0gsaUNBQWEsQ0FBQTtJQUNiOzs7T0FHRztJQUNILGlDQUFhLENBQUE7QUFDZixDQUFDLEVBaEJXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFnQjNCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gSUNPTl9UWVBFIHtcbiAgU1RBUiA9ICdTVEFSJyxcbiAgU0VBUkNIID0gJ1NFQVJDSCcsXG4gIENBUlQgPSAnQ0FSVCcsXG4gIElORk8gPSAnSU5GTycsXG4gIEdSSUQgPSAnR1JJRCcsXG4gIExJU1QgPSAnTElTVCcsXG4gIENBUkVUX0RPV04gPSAnQ0FSRVRfRE9XTicsXG4gIENBUkVUX0xFRlQgPSAnQ0FSRVRfTEVGVCcsXG4gIENBUkVUX1JJR0hUID0gJ0NBUkVUX1JJR0hUJyxcbiAgQ0xPU0UgPSAnQ0xPU0UnLFxuICBFUlJPUiA9ICdFUlJPUicsXG4gIFdBUk5JTkcgPSAnV0FSTklORycsXG4gIFNVQ0NFU1MgPSAnU1VDQ0VTUycsXG4gIFZJU0EgPSAnVklTQScsXG4gIE1BU1RFUl9DQVJEID0gJ01BU1RFUl9DQVJEJyxcbiAgQU1FWCA9ICdBTUVYJyxcbiAgRElORVJTX0NMVUIgPSAnRElORVJTX0NMVUInLFxuICBDUkVESVRfQ0FSRCA9ICdDUkVESVRfQ0FSRCcsXG4gIEVYUEFORCA9ICdFWFBBTkQnLFxuICBDT0xMQVBTRSA9ICdDT0xMQVBTRScsXG4gIFJFU0VUID0gJ1JFU0VUJyxcbiAgQ0lSQ0xFID0gJ0NJUkNMRScsXG4gIEhFQVJUID0gJ0hFQVJUJyxcbiAgRU1QVFlfSEVBUlQgPSAnRU1QVFlfSEVBUlQnLFxuICBGSUxURVIgPSAnRklMVEVSJyxcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEljb25Db25maWcge1xuICBpY29uPzogSWNvbk9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvbk9wdGlvbnMge1xuICAvKipcbiAgICogRWFjaCBpY29uIHR5cGUgY2FuIGJlIGNvbmZpZ3VyZWQgd2l0aCBhIHNvLWNhbGxlZCBzeW1ib2wuIFRoZSBzeW1ib2wgd2lsbFxuICAgKiBiZSB1c2VkIHRvIG1hcCB0aGUgaWNvbiB0byBhbiBTVkcgYHN5bWJvbGAgKGlkKSBvciB0byB0aGUgc3R5bGUgY2xhc3NlcyBvZlxuICAgKiBhIGZvbnQgYmFzZWQgaWNvbi4gVGhlIGZvbGxvd2luZyBjb25maWd1cmF0aW9uIHdvdWxkIG1hcCB0byBhIGZvbnRhd2Vzb21lXG4gICAqIGljb246XG4gICAqXG4gICAqIGljb246IHtcbiAgICogICBzeW1ib2xzOiB7XG4gICAqICAgICBDQVJUOiAnZmFzIGZhLXNob3BwaW5nLWNhcnQnXG4gICAqICAgfVxuICAgKiB9XG4gICAqL1xuICBzeW1ib2xzPzoge1xuICAgIFtJQ09OX1RZUEU6IHN0cmluZ106IHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogUmVzb3VyY2VzIGFyZSB1c2VkIHRvIG1hcCBpY29uIHR5cGVzIHRvIGNlcnRhaW4gYXNzZXQsIHN1Y2ggYXMgYW4gU1ZHIChzcHJpdGUpIGltYWdlLlxuICAgKiBUaGUgcmVzb3VyY2UgdHlwZSAoYEljb25SZXNvdXJjZVR5cGVgKSBkaWN0YXRlcyB3aGV0aGVyIGFuIFNWRyBpbWFnZSBpcyB1c2VkLiBUaGUgVVJMXG4gICAqIGlzIHVzZWQgZm9yIHRoZSBTVkcgeGxpbmsgcmVmZXJlbmNlLlxuICAgKi9cbiAgcmVzb3VyY2VzPzogSWNvbkNvbmZpZ1Jlc291cmNlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvbkNvbmZpZ1Jlc291cmNlIHtcbiAgdHlwZTogSWNvblJlc291cmNlVHlwZSB8IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xuICB0eXBlcz86IChJQ09OX1RZUEUgfCBzdHJpbmcpW107XG59XG5cbi8qKlxuICogRWFjaCBJQ09OIHR5cGUgY2FuIGhhdmUgYW4gY29tcGFuaWVkIHJlc291cmNlIHR5cGUsIHN1Y2ggYXMgU1ZHLCBMSU5LIChmb250KSBvciBqdXN0IFRFWFQuXG4gKiBUaGUgcmVzb3VyY2VzIHdpbGwgYmUgYXV0b21pdGFjYWxseSBsb2FkZWQgaW4gY2FzZSB0aGV5J3JlIHJlcXVpcmVkIGZvciB0aGUgYElDT05fVFlQRWAuXG4gKi9cbmV4cG9ydCBlbnVtIEljb25SZXNvdXJjZVR5cGUge1xuICAvKipcbiAgICogQW4gc3ZnIGJhc2VkIGljb24gcmVxdWlyZXMgYW4gU1ZHIHJlc291cmNlIHRoYXQgbXVzdCBiZSBsb2FkZWQsXG4gICAqIHRoaXMgaXMgdHlwaWNhbGx5IGEgc3ByaXRlIHN2ZyBmaWxlLlxuICAgKi9cbiAgU1ZHID0gJ3N2ZycsXG5cbiAgLyoqXG4gICAqIEEgZm9udCBiYXNlZCBJQ09OIG1pZ2h0IHJlcXVpcmUgYW4gYWRkaXRpb25hbCBDU1MgZmlsZSB0byBiZSBsb2FkZWQuXG4gICAqL1xuICBMSU5LID0gJ2xpbmsnLFxuICAvKipcbiAgICogVGV4dCBiYXNlZCBpY29ucyB3aWxsIHNpbXBseSBhZGQgdGhlIElDT04gc3RyaW5nIHRvIHRoZSBET00uIFRleHQgaWNvbnMgZG8gbm90IG5lZWQgYW4gaW1hZ2VcbiAgICogb3IgQ1NTIHBzZXVkbyBjbGFzcyAoaS5lLiA6YmVmb3JlKSwgYXMgdGhlIHRleHQgaXRzZWxmIGlzIHRoZSBpY29uIChpLmUuICspXG4gICAqL1xuICBURVhUID0gJ3RleHQnLFxufVxuIl19