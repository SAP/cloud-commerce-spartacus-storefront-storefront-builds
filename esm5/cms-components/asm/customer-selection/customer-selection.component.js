import { __decorate } from "tslib";
import { Component, EventEmitter, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AsmConfig, AsmService, CustomerSearchPage, User, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
            template: "<form (submit)=\"onSubmit()\" [formGroup]=\"form\">\n  <input\n    #searchTerm\n    type=\"text\"\n    formControlName=\"searchTerm\"\n    placeholder=\"{{ 'asm.customerSearch.searchTerm.label' | cxTranslate }}\"\n  />\n  <button type=\"submit\" [disabled]=\"!selectedCustomer\">\n    {{ 'asm.customerSearch.submit' | cxTranslate }}\n  </button>\n</form>\n\n<div *ngIf=\"searchResults | async as results\" class=\"asm-results\" #resultList>\n  <button\n    *ngFor=\"let result of results.entries\"\n    (click)=\"selectCustomerFromList(result)\"\n  >\n    <span class=\"result-name\">{{ result.name }}</span>\n    <span class=\"result-id\">{{ result.uid }}</span>\n  </button>\n  <button\n    (click)=\"closeResults()\"\n    *ngIf=\"\n      !(searchResultsLoading$ | async) &&\n      searchTerm.value.length >= 3 &&\n      !!results.entries &&\n      results.entries.length <= 0\n    \"\n  >\n    {{ 'asm.customerSearch.noMatch' | cxTranslate }}\n  </button>\n</div>\n\n<div class=\"asm-results\" *ngIf=\"searchResultsLoading$ | async\">\n  <div class=\"spinner\" aria-hidden=\"false\" aria-label=\"Loading\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</div>\n",
            encapsulation: ViewEncapsulation.None,
            host: {
                '(document:click)': 'onDocumentClick($event)',
            },
            styles: ["cx-customer-selection button[type=submit]{border-color:#0a7e3e;color:#fff;padding-left:35px;background:url(data:image/png;base64,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6vkQdN2HukEeqklQD5uKewDY1lbq/zZxsq3NTC1yCypNSicn36GaBW8MwLe+ycmJlsnJb9Vosw8AaP8wo+GnTGcMlfreU9SdM5H3n1r6X/dYEDmGJmdAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGL2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIyNSIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjI3IiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wOS0yNVQxMjoyODo1MS0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iRGlzcGxheSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowZTIyOTVhMC0yYWY0LTQ2Y2UtOThlNy0zZTU2YTM0YjFkZjUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozYmMzNWI0YS0wNjkxLTRmNDEtODk5OC1lYWFmOTI2NGQ2NmMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZWE4Y2FhMC0yMGU1LTQzN2ItYmQ5YS03YjlmMGZiNmYyZTYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZWE4Y2FhMC0yMGU1LTQzN2ItYmQ5YS03YjlmMGZiNmYyZTYiIHN0RXZ0OndoZW49IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZTIyOTVhMC0yYWY0LTQ2Y2UtOThlNy0zZTU2YTM0YjFkZjUiIHN0RXZ0OndoZW49IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuzZx/kAAAEoSURBVDjLY/z//z8DNQATA5UAhkGNe+f8f/757f+09e2kORXkNWR86P75/zCw7cax/6o9If/R1WDDOA368/cvmH7/7dP/tHXt/8k2KGlNy/8dN4/DXbf95rH/anhch9Mgz/kFYE3p6zv+f/j+GSwGokF8sgwCYZBLQC6CAZBL0V1HlEEwnLquDRxmMNfFrmyAqyEpHd1+85jh5Zd3YDYfOzeDlrgi4ehHdpFYi8f/KcdW///7DxKTQAP/e8zLJ81rfgtL/j949wws9vvvn/+9h5f9F212/090YEetqP2/+Nx2eABfeHbrv/WMNNKj/8fvX2D6+++f/+t3z/ov2Ojyn6wECQJHHlz8bzgplrws0rBn9v9XX97/L9zS/5+vwYkoQ0CYcdCVRwBmUrSjUTYI3gAAAABJRU5ErkJggg==) 10px center no-repeat #0a7e3e}cx-customer-selection form{display:flex;width:100%}@media (min-width:575px){cx-customer-selection button[type=submit]{-webkit-margin-start:8px;margin-inline-start:8px}cx-customer-selection form input{flex:1}}@media (max-width:575px){cx-customer-selection form{flex-direction:column}cx-customer-selection form>*{margin-bottom:12px}}cx-customer-selection .spinner{height:42px;align-items:center}cx-customer-selection .asm-results{width:calc(100vw - 4rem);border:1px solid #89919a;position:absolute;z-index:11;margin-top:40px;box-shadow:0 5px 20px 0 #d9d9d9,0 2px 8px 0 #ededed;background-color:#fff;border-radius:4px;min-height:50px}cx-customer-selection .asm-results a{color:#51555a;display:flex;flex-direction:column;cursor:pointer;padding:10px}@media (min-width:767px){cx-customer-selection .asm-results,cx-customer-selection form{width:50vw}cx-customer-selection .asm-results a{flex-direction:row}}cx-customer-selection .asm-results a *{flex:1}cx-customer-selection .asm-results a:hover{color:#32363a;background-color:#fafafa}"]
        })
    ], CustomerSelectionComponent);
    return CustomerSelectionComponent;
}());
export { CustomerSelectionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jdXN0b21lci1zZWxlY3Rpb24vY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBR1osTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixrQkFBa0IsRUFDbEIsSUFBSSxHQUNMLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFXOUM7SUFhRSxvQ0FDVSxFQUFlLEVBQ2YsVUFBc0IsRUFDdEIsTUFBaUI7UUFGakIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQWRuQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFNMUMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztJQVN0RCxDQUFDO0lBRUosNkNBQVEsR0FBUjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxxQkFB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LENBQUMsWUFBWSxDQUFDO2tFQUF3QjtJQVhyQywwQkFBMEI7UUFUdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyx3cUNBQWtEO1lBRWxELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLElBQUksRUFBRTtnQkFDSixrQkFBa0IsRUFBRSx5QkFBeUI7YUFDOUM7O1NBQ0YsQ0FBQztPQUNXLDBCQUEwQixDQXdGdEM7SUFBRCxpQ0FBQztDQUFBLEFBeEZELElBd0ZDO1NBeEZZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBc21Db25maWcsXG4gIEFzbVNlcnZpY2UsXG4gIEN1c3RvbWVyU2VhcmNoUGFnZSxcbiAgVXNlcixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jdXN0b21lci1zZWxlY3Rpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGhvc3Q6IHtcbiAgICAnKGRvY3VtZW50OmNsaWNrKSc6ICdvbkRvY3VtZW50Q2xpY2soJGV2ZW50KScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU2VsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBzZWFyY2hSZXN1bHRzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHNlYXJjaFJlc3VsdHM6IE9ic2VydmFibGU8Q3VzdG9tZXJTZWFyY2hQYWdlPjtcbiAgc2VsZWN0ZWRDdXN0b21lcjogVXNlcjtcblxuICBAT3V0cHV0KClcbiAgc3VibWl0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgY3VzdG9tZXJJZDogc3RyaW5nIH0+KCk7XG5cbiAgQFZpZXdDaGlsZCgncmVzdWx0TGlzdCcpIHJlc3VsdExpc3Q6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaFRlcm0nKSBzZWFyY2hUZXJtOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgYXNtU2VydmljZTogQXNtU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogQXNtQ29uZmlnXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHNlYXJjaFRlcm06IFsnJ10sXG4gICAgfSk7XG4gICAgdGhpcy5hc21TZXJ2aWNlLmN1c3RvbWVyU2VhcmNoUmVzZXQoKTtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHNMb2FkaW5nJCA9IHRoaXMuYXNtU2VydmljZS5nZXRDdXN0b21lclNlYXJjaFJlc3VsdHNMb2FkaW5nKCk7XG4gICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gdGhpcy5hc21TZXJ2aWNlLmdldEN1c3RvbWVyU2VhcmNoUmVzdWx0cygpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzLnNlYXJjaFRlcm0udmFsdWVDaGFuZ2VzXG4gICAgICAgIC5waXBlKGRlYm91bmNlVGltZSgzMDApKVxuICAgICAgICAuc3Vic2NyaWJlKHNlYXJjaFRlcm1WYWx1ZSA9PiB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2hUZXJtKHNlYXJjaFRlcm1WYWx1ZSk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VhcmNoVGVybShzZWFyY2hUZXJtVmFsdWU6IHN0cmluZykge1xuICAgIGlmIChcbiAgICAgIEJvb2xlYW4odGhpcy5zZWxlY3RlZEN1c3RvbWVyKSAmJlxuICAgICAgc2VhcmNoVGVybVZhbHVlICE9PSB0aGlzLnNlbGVjdGVkQ3VzdG9tZXIubmFtZVxuICAgICkge1xuICAgICAgdGhpcy5zZWxlY3RlZEN1c3RvbWVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoQm9vbGVhbih0aGlzLnNlbGVjdGVkQ3VzdG9tZXIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gICAgaWYgKHNlYXJjaFRlcm1WYWx1ZS50cmltKCkubGVuZ3RoID49IDMpIHtcbiAgICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaCh7XG4gICAgICAgIHF1ZXJ5OiBzZWFyY2hUZXJtVmFsdWUsXG4gICAgICAgIHBhZ2VTaXplOiB0aGlzLmNvbmZpZy5hc20uY3VzdG9tZXJTZWFyY2gubWF4UmVzdWx0cyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEN1c3RvbWVyRnJvbUxpc3QoY3VzdG9tZXI6IFVzZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ3VzdG9tZXIgPSBjdXN0b21lcjtcbiAgICB0aGlzLmZvcm0uY29udHJvbHMuc2VhcmNoVGVybS5zZXRWYWx1ZSh0aGlzLnNlbGVjdGVkQ3VzdG9tZXIubmFtZSk7XG4gICAgdGhpcy5hc21TZXJ2aWNlLmN1c3RvbWVyU2VhcmNoUmVzZXQoKTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIGlmIChCb29sZWFuKHRoaXMuc2VsZWN0ZWRDdXN0b21lcikpIHtcbiAgICAgIHRoaXMuc3VibWl0RXZlbnQuZW1pdCh7IGN1c3RvbWVySWQ6IHRoaXMuc2VsZWN0ZWRDdXN0b21lci5jdXN0b21lcklkIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRG9jdW1lbnRDbGljayhldmVudCkge1xuICAgIGlmIChCb29sZWFuKHRoaXMucmVzdWx0TGlzdCkpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5yZXN1bHRMaXN0Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSB8fFxuICAgICAgICB0aGlzLnNlYXJjaFRlcm0ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hc21TZXJ2aWNlLmN1c3RvbWVyU2VhcmNoUmVzZXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9zZVJlc3VsdHMoKSB7XG4gICAgdGhpcy5hc21TZXJ2aWNlLmN1c3RvbWVyU2VhcmNoUmVzZXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5hc21TZXJ2aWNlLmN1c3RvbWVyU2VhcmNoUmVzZXQoKTtcbiAgfVxufVxuIl19