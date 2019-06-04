/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RoutingService, SearchboxService, TranslationService, WindowRef, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/** @type {?} */
const HAS_SEARCH_RESULT_CLASS = 'has-searchbox-results';
export class SearchBoxComponentService {
    /**
     * @param {?} searchService
     * @param {?} routingService
     * @param {?} translationService
     * @param {?} winRef
     */
    constructor(searchService, routingService, translationService, winRef) {
        this.searchService = searchService;
        this.routingService = routingService;
        this.translationService = translationService;
        this.winRef = winRef;
    }
    /**
     * Executes the search for products and suggestions,
     * unless the configuration is setup to not search for
     * products or suggestions.
     * @param {?} query
     * @param {?} config
     * @return {?}
     */
    search(query, config) {
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
    }
    /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     * @param {?} config
     * @return {?}
     */
    getResults(config) {
        return combineLatest(this.getProductResults(config), this.getProductSuggestions(config), this.getSearchMessage(config)).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([productResults, suggestions, message]) => {
            return {
                products: productResults ? productResults.products : null,
                suggestions,
                message,
            };
        })), tap((/**
         * @param {?} results
         * @return {?}
         */
        results => this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, this.hasResults(results)))));
    }
    /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     * @return {?}
     */
    clearResults() {
        this.searchService.clearResults();
        this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, false);
    }
    /**
     * @param {?} className
     * @return {?}
     */
    hasBodyClass(className) {
        return this.winRef.document.body.classList.contains(className);
    }
    /**
     * @param {?} className
     * @param {?=} add
     * @return {?}
     */
    toggleBodyClass(className, add) {
        if (add === undefined) {
            this.winRef.document.body.classList.toggle(className);
        }
        else {
            add
                ? this.winRef.document.body.classList.add(className)
                : this.winRef.document.body.classList.remove(className);
        }
    }
    /**
     * @private
     * @param {?} results
     * @return {?}
     */
    hasResults(results) {
        return ((!!results.products && results.products.length > 0) ||
            (!!results.suggestions && results.suggestions.length > 0) ||
            !!results.message);
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    getProductResults(config) {
        if (config.displayProducts) {
            return this.searchService.getResults();
        }
        else {
            return of({});
        }
    }
    /**
     * Loads suggestions from the backend. In case there's no suggestion
     * available, we try to get an exact match suggestion.
     * @private
     * @param {?} config
     * @return {?}
     */
    getProductSuggestions(config) {
        if (!config.displaySuggestions) {
            return of([]);
        }
        else {
            return this.searchService.getSuggestionResults().pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            res => res.map((/**
             * @param {?} suggestion
             * @return {?}
             */
            suggestion => suggestion.value)))), switchMap((/**
             * @param {?} suggestions
             * @return {?}
             */
            suggestions => {
                if (suggestions.length === 0) {
                    return this.getExactSuggestion(config).pipe(map((/**
                     * @param {?} match
                     * @return {?}
                     */
                    match => (match ? [match] : []))));
                }
                else {
                    return of(suggestions);
                }
            })));
        }
    }
    /**
     * whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     * @private
     * @param {?} config
     * @return {?}
     */
    getExactSuggestion(config) {
        return this.getProductResults(config).pipe(switchMap((/**
         * @param {?} productResult
         * @return {?}
         */
        productResult => {
            return productResult.products && productResult.products.length > 0
                ? this.fetchTranslation('searchBox.help.exactMatch', {
                    term: productResult.freeTextSearch,
                })
                : of(null);
        })));
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    getSearchMessage(config) {
        return combineLatest(this.getProductResults(config), this.getProductSuggestions(config)).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([productResult, suggestions]) => {
            if (productResult &&
                productResult.products &&
                productResult.products.length === 0 &&
                (suggestions && suggestions.length === 0)) {
                return this.fetchTranslation('searchBox.help.noMatch');
            }
            else {
                return of(null);
            }
        })));
    }
    /**
     * Navigates to the search result page with a given query
     * @param {?} query
     * @return {?}
     */
    launchSearchPage(query) {
        this.routingService.go({
            cxRoute: 'search',
            params: { query },
        });
    }
    /**
     * @private
     * @param {?} translationKey
     * @param {?=} options
     * @return {?}
     */
    fetchTranslation(translationKey, options) {
        return this.translationService.translate(translationKey, options);
    }
}
SearchBoxComponentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SearchBoxComponentService.ctorParameters = () => [
    { type: SearchboxService },
    { type: RoutingService },
    { type: TranslationService },
    { type: WindowRef }
];
/** @nocollapse */ SearchBoxComponentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SearchBoxComponentService_Factory() { return new SearchBoxComponentService(i0.ɵɵinject(i1.SearchboxService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.TranslationService), i0.ɵɵinject(i1.WindowRef)); }, token: SearchBoxComponentService, providedIn: "root" });
if (false) {
    /** @type {?} */
    SearchBoxComponentService.prototype.searchService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.translationService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vc2VhcmNoLWJveC9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztNQUcvQyx1QkFBdUIsR0FBRyx1QkFBdUI7QUFLdkQsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7OztJQUNwQyxZQUNTLGFBQStCLEVBQzVCLGNBQThCLEVBQzlCLGtCQUFzQyxFQUN0QyxNQUFpQjtRQUhwQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUMxQixDQUFDOzs7Ozs7Ozs7SUFPSixNQUFNLENBQUMsS0FBYSxFQUFFLE1BQXVCO1FBQzNDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsT0FBTztTQUNSO1FBRUQsSUFDRSxNQUFNLENBQUMsMEJBQTBCO1lBQ2pDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLDBCQUEwQixFQUNoRDtZQUNBLE9BQU87U0FDUjtR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LGtEQUFzQzs7Ozs7SUFDdEMsbURBQXdDOzs7OztJQUN4Qyx1REFBZ0Q7Ozs7O0lBQ2hELDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VhcmNoYm94U2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNlYXJjaEJveENvbmZpZywgU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4vc2VhcmNoLWJveC5tb2RlbCc7XG5cbmNvbnN0IEhBU19TRUFSQ0hfUkVTVUxUX0NMQVNTID0gJ2hhcy1zZWFyY2hib3gtcmVzdWx0cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlYXJjaFNlcnZpY2U6IFNlYXJjaGJveFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICAvKipcbiAgICogRXhlY3V0ZXMgdGhlIHNlYXJjaCBmb3IgcHJvZHVjdHMgYW5kIHN1Z2dlc3Rpb25zLFxuICAgKiB1bmxlc3MgdGhlIGNvbmZpZ3VyYXRpb24gaXMgc2V0dXAgdG8gbm90IHNlYXJjaCBmb3JcbiAgICogcHJvZHVjdHMgb3Igc3VnZ2VzdGlvbnMuXG4gICAqL1xuICBzZWFyY2gocXVlcnk6IHN0cmluZywgY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIXF1ZXJ5IHx8IHF1ZXJ5ID09PSAnJykge1xuICAgICAgdGhpcy5jbGVhclJlc3VsdHMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjb25maWcubWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3QgJiZcbiAgICAgIHF1ZXJ5Lmxlbmd0aCA8IGNvbmZpZy5taW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGlzcGxheVByb2R1Y3RzKSB7XG4gICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoKHF1ZXJ5LCB7XG4gICAgICAgIHBhZ2VTaXplOiBjb25maWcubWF4UHJvZHVjdHMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmRpc3BsYXlTdWdnZXN0aW9ucykge1xuICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaFN1Z2dlc3Rpb25zKHF1ZXJ5LCB7XG4gICAgICAgIHBhZ2VTaXplOiBjb25maWcubWF4U3VnZ2VzdGlvbnMsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIFNlYXJjaFJlc3VsdHMuIFdoZW4gdGhlcmUncyBhbnlcbiAgICogcmVzdWx0LCB0aGUgYm9keSB0YWcgd2lsbCBnZXQgYSBjbGFzc25hbWUsIHNvIHRoYXQgc3BlY2lmaWMgc3R5bGVcbiAgICogcnVsZXMgY2FuIGJlIGFwcGxpZWQuXG4gICAqL1xuICBnZXRSZXN1bHRzKGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogT2JzZXJ2YWJsZTxTZWFyY2hSZXN1bHRzPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLmdldFByb2R1Y3RSZXN1bHRzKGNvbmZpZyksXG4gICAgICB0aGlzLmdldFByb2R1Y3RTdWdnZXN0aW9ucyhjb25maWcpLFxuICAgICAgdGhpcy5nZXRTZWFyY2hNZXNzYWdlKGNvbmZpZylcbiAgICApLnBpcGUoXG4gICAgICBtYXAoKFtwcm9kdWN0UmVzdWx0cywgc3VnZ2VzdGlvbnMsIG1lc3NhZ2VdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RSZXN1bHRzID8gcHJvZHVjdFJlc3VsdHMucHJvZHVjdHMgOiBudWxsLFxuICAgICAgICAgIHN1Z2dlc3Rpb25zLFxuICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIHRhcChyZXN1bHRzID0+XG4gICAgICAgIHRoaXMudG9nZ2xlQm9keUNsYXNzKEhBU19TRUFSQ0hfUkVTVUxUX0NMQVNTLCB0aGlzLmhhc1Jlc3VsdHMocmVzdWx0cykpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIHNlYXJjaGJveCByZXN1bHRzLCBzbyB0aGF0IG9sZCB2YWx1ZXMgYXJlXG4gICAqIG5vIGxvbmdlciBlbWl0ZWQgdXBvbiBuZXh0IHNlYXJjaC5cbiAgICovXG4gIGNsZWFyUmVzdWx0cygpIHtcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuY2xlYXJSZXN1bHRzKCk7XG4gICAgdGhpcy50b2dnbGVCb2R5Q2xhc3MoSEFTX1NFQVJDSF9SRVNVTFRfQ0xBU1MsIGZhbHNlKTtcbiAgfVxuXG4gIGhhc0JvZHlDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgdG9nZ2xlQm9keUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nLCBhZGQ/OiBib29sZWFuKSB7XG4gICAgaWYgKGFkZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkXG4gICAgICAgID8gdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgICAgOiB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhc1Jlc3VsdHMocmVzdWx0czogU2VhcmNoUmVzdWx0cyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAoISFyZXN1bHRzLnByb2R1Y3RzICYmIHJlc3VsdHMucHJvZHVjdHMubGVuZ3RoID4gMCkgfHxcbiAgICAgICghIXJlc3VsdHMuc3VnZ2VzdGlvbnMgJiYgcmVzdWx0cy5zdWdnZXN0aW9ucy5sZW5ndGggPiAwKSB8fFxuICAgICAgISFyZXN1bHRzLm1lc3NhZ2VcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0UmVzdWx0cyhcbiAgICBjb25maWc6IFNlYXJjaEJveENvbmZpZ1xuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPiB7XG4gICAgaWYgKGNvbmZpZy5kaXNwbGF5UHJvZHVjdHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2Yoe30pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBzdWdnZXN0aW9ucyBmcm9tIHRoZSBiYWNrZW5kLiBJbiBjYXNlIHRoZXJlJ3Mgbm8gc3VnZ2VzdGlvblxuICAgKiBhdmFpbGFibGUsIHdlIHRyeSB0byBnZXQgYW4gZXhhY3QgbWF0Y2ggc3VnZ2VzdGlvbi5cbiAgICovXG4gIHByaXZhdGUgZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zKGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIGlmICghY29uZmlnLmRpc3BsYXlTdWdnZXN0aW9ucykge1xuICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdWdnZXN0aW9uUmVzdWx0cygpLnBpcGUoXG4gICAgICAgIG1hcChyZXMgPT4gcmVzLm1hcChzdWdnZXN0aW9uID0+IHN1Z2dlc3Rpb24udmFsdWUpKSxcbiAgICAgICAgc3dpdGNoTWFwKHN1Z2dlc3Rpb25zID0+IHtcbiAgICAgICAgICBpZiAoc3VnZ2VzdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFeGFjdFN1Z2dlc3Rpb24oY29uZmlnKS5waXBlKFxuICAgICAgICAgICAgICBtYXAobWF0Y2ggPT4gKG1hdGNoID8gW21hdGNoXSA6IFtdKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvZihzdWdnZXN0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogd2hlbmV2ZXIgdGhlcmUgaXMgYXQgbGVhc3QgMSBwcm9kdWN0LCB3ZSBzaW11bGF0ZVxuICAgKiBhIHN1Z2dlc3Rpb24gdG8gcHJvdmlkZSBlYXN5IGFjY2VzcyB0byB0aGUgc2VhcmNoIHJlc3VsdCBwYWdlXG4gICAqL1xuICBwcml2YXRlIGdldEV4YWN0U3VnZ2VzdGlvbihjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJvZHVjdFJlc3VsdHMoY29uZmlnKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHByb2R1Y3RSZXN1bHQgPT4ge1xuICAgICAgICByZXR1cm4gcHJvZHVjdFJlc3VsdC5wcm9kdWN0cyAmJiBwcm9kdWN0UmVzdWx0LnByb2R1Y3RzLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IHRoaXMuZmV0Y2hUcmFuc2xhdGlvbignc2VhcmNoQm94LmhlbHAuZXhhY3RNYXRjaCcsIHtcbiAgICAgICAgICAgICAgdGVybTogcHJvZHVjdFJlc3VsdC5mcmVlVGV4dFNlYXJjaCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBvZihudWxsKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VhcmNoTWVzc2FnZShjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLmdldFByb2R1Y3RSZXN1bHRzKGNvbmZpZyksXG4gICAgICB0aGlzLmdldFByb2R1Y3RTdWdnZXN0aW9ucyhjb25maWcpXG4gICAgKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChbcHJvZHVjdFJlc3VsdCwgc3VnZ2VzdGlvbnNdKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9kdWN0UmVzdWx0ICYmXG4gICAgICAgICAgcHJvZHVjdFJlc3VsdC5wcm9kdWN0cyAmJlxuICAgICAgICAgIHByb2R1Y3RSZXN1bHQucHJvZHVjdHMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgKHN1Z2dlc3Rpb25zICYmIHN1Z2dlc3Rpb25zLmxlbmd0aCA9PT0gMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hUcmFuc2xhdGlvbignc2VhcmNoQm94LmhlbHAubm9NYXRjaCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgc2VhcmNoIHJlc3VsdCBwYWdlIHdpdGggYSBnaXZlbiBxdWVyeVxuICAgKi9cbiAgcHVibGljIGxhdW5jaFNlYXJjaFBhZ2UocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgY3hSb3V0ZTogJ3NlYXJjaCcsXG4gICAgICBwYXJhbXM6IHsgcXVlcnkgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2hUcmFuc2xhdGlvbihcbiAgICB0cmFuc2xhdGlvbktleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBhbnlcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UudHJhbnNsYXRlKHRyYW5zbGF0aW9uS2V5LCBvcHRpb25zKTtcbiAgfVxufVxuIl19