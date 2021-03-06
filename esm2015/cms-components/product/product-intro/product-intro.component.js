import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { TranslationService, WindowRef } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
export class ProductIntroComponent {
    constructor(currentProductService, translationService, winRef) {
        this.currentProductService = currentProductService;
        this.translationService = translationService;
        this.winRef = winRef;
        this.reviewsTabAvailable = new BehaviorSubject(false);
        this.product$ = this.currentProductService.getProduct();
    }
    ngAfterContentChecked() {
        this.reviewsTabAvailable.next(!!this.getReviewsComponent());
    }
    // Scroll to views component on page and click "Reviews" tab
    showReviews() {
        // Use translated label for Reviews tab reference
        this.translationService
            .translate('TabPanelContainer.tabs.ProductReviewsTabComponent')
            .subscribe((reviewsTabLabel) => {
            const tabsComponent = this.getTabsComponent();
            const reviewsTab = this.getTabByLabel(reviewsTabLabel, tabsComponent);
            const reviewsComponent = this.getReviewsComponent();
            if (reviewsTab && reviewsComponent) {
                this.clickTabIfInactive(reviewsTab);
                setTimeout(() => reviewsComponent.scrollIntoView({ behavior: 'smooth' }), 0);
            }
        })
            .unsubscribe();
    }
    // NOTE: Does not currently exists as its own component
    // but part of tabs component. This is likely to change in refactor.
    getReviewsComponent() {
        return this.winRef.document.querySelector('cx-product-reviews');
    }
    // Get Tabs Component if exists on page
    getTabsComponent() {
        return this.winRef.document.querySelector('cx-tab-paragraph-container');
    }
    // Click to activate tab if not already active
    clickTabIfInactive(tab) {
        if (!tab.classList.contains('active') ||
            tab.classList.contains('toggled')) {
            tab.click();
        }
    }
    // Get Tab by label if exists on page
    getTabByLabel(label, tabsComponent) {
        if (tabsComponent) {
            // NOTE: Reads through button tags to click on correct tab
            // There may be a better way of doing this now/after refactor
            const tabElements = tabsComponent.getElementsByTagName('button');
            // Look through button tab elements until finding tab with label
            for (const buttonElement of Array.from(tabElements)) {
                if (buttonElement.innerHTML.includes(label)) {
                    return buttonElement;
                }
            }
        }
    }
}
ProductIntroComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-intro',
                template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"rating\" *ngIf=\"product.averageRating\">\n    <cx-star-rating [rating]=\"product?.averageRating\"></cx-star-rating>\n\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n\n    <button\n      *ngIf=\"reviewsTabAvailable | async\"\n      class=\"btn btn-link cx-action-link\"\n      (click)=\"showReviews()\"\n    >\n      {{ 'productSummary.showReviews' | cxTranslate }}\n    </button>\n  </div>\n  <div class=\"rating\" *ngIf=\"!product.averageRating\">\n    {{ 'productDetails.noReviews' | cxTranslate }}\n  </div>\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
ProductIntroComponent.ctorParameters = () => [
    { type: CurrentProductService },
    { type: TranslationService },
    { type: WindowRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtaW50cm8vcHJvZHVjdC1pbnRyby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFXLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFPbkUsTUFBTSxPQUFPLHFCQUFxQjtJQUtoQyxZQUNZLHFCQUE0QyxFQUM5QyxrQkFBc0MsRUFDcEMsTUFBaUI7UUFGakIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM5Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3BDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFQN0Isd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFMUQsYUFBUSxHQUF3QixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFNckUsQ0FBQztJQUVKLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCw0REFBNEQ7SUFDNUQsV0FBVztRQUNULGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsa0JBQWtCO2FBQ3BCLFNBQVMsQ0FBQyxtREFBbUQsQ0FBQzthQUM5RCxTQUFTLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRTtZQUM3QixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM5QyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUN0RSxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ3BELElBQUksVUFBVSxJQUFJLGdCQUFnQixFQUFFO2dCQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3BDLFVBQVUsQ0FDUixHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFDN0QsQ0FBQyxDQUNGLENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQzthQUNELFdBQVcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsb0VBQW9FO0lBQzVELG1CQUFtQjtRQUN6QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCx1Q0FBdUM7SUFDL0IsZ0JBQWdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELDhDQUE4QztJQUN0QyxrQkFBa0IsQ0FBQyxHQUFnQjtRQUN6QyxJQUNFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUNqQztZQUNBLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELHFDQUFxQztJQUM3QixhQUFhLENBQUMsS0FBYSxFQUFFLGFBQXNCO1FBQ3pELElBQUksYUFBYSxFQUFFO1lBQ2pCLDBEQUEwRDtZQUMxRCw2REFBNkQ7WUFDN0QsTUFBTSxXQUFXLEdBQWtDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FDbkYsUUFBUSxDQUNULENBQUM7WUFFRixnRUFBZ0U7WUFDaEUsS0FBSyxNQUFNLGFBQWEsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNuRCxJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUMzQyxPQUFPLGFBQWEsQ0FBQztpQkFDdEI7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7O1lBN0VGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qix5dEJBQTZDO2dCQUM3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBTlEscUJBQXFCO1lBRlosa0JBQWtCO1lBQUUsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCwgVHJhbnNsYXRpb25TZXJ2aWNlLCBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtaW50cm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1pbnRyby5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SW50cm9Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgcmV2aWV3c1RhYkF2YWlsYWJsZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+ID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIHRoaXMucmV2aWV3c1RhYkF2YWlsYWJsZS5uZXh0KCEhdGhpcy5nZXRSZXZpZXdzQ29tcG9uZW50KCkpO1xuICB9XG5cbiAgLy8gU2Nyb2xsIHRvIHZpZXdzIGNvbXBvbmVudCBvbiBwYWdlIGFuZCBjbGljayBcIlJldmlld3NcIiB0YWJcbiAgc2hvd1Jldmlld3MoKSB7XG4gICAgLy8gVXNlIHRyYW5zbGF0ZWQgbGFiZWwgZm9yIFJldmlld3MgdGFiIHJlZmVyZW5jZVxuICAgIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlXG4gICAgICAudHJhbnNsYXRlKCdUYWJQYW5lbENvbnRhaW5lci50YWJzLlByb2R1Y3RSZXZpZXdzVGFiQ29tcG9uZW50JylcbiAgICAgIC5zdWJzY3JpYmUoKHJldmlld3NUYWJMYWJlbCkgPT4ge1xuICAgICAgICBjb25zdCB0YWJzQ29tcG9uZW50ID0gdGhpcy5nZXRUYWJzQ29tcG9uZW50KCk7XG4gICAgICAgIGNvbnN0IHJldmlld3NUYWIgPSB0aGlzLmdldFRhYkJ5TGFiZWwocmV2aWV3c1RhYkxhYmVsLCB0YWJzQ29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgcmV2aWV3c0NvbXBvbmVudCA9IHRoaXMuZ2V0UmV2aWV3c0NvbXBvbmVudCgpO1xuICAgICAgICBpZiAocmV2aWV3c1RhYiAmJiByZXZpZXdzQ29tcG9uZW50KSB7XG4gICAgICAgICAgdGhpcy5jbGlja1RhYklmSW5hY3RpdmUocmV2aWV3c1RhYik7XG4gICAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgICgpID0+IHJldmlld3NDb21wb25lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLy8gTk9URTogRG9lcyBub3QgY3VycmVudGx5IGV4aXN0cyBhcyBpdHMgb3duIGNvbXBvbmVudFxuICAvLyBidXQgcGFydCBvZiB0YWJzIGNvbXBvbmVudC4gVGhpcyBpcyBsaWtlbHkgdG8gY2hhbmdlIGluIHJlZmFjdG9yLlxuICBwcml2YXRlIGdldFJldmlld3NDb21wb25lbnQoKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMud2luUmVmLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2N4LXByb2R1Y3QtcmV2aWV3cycpO1xuICB9XG5cbiAgLy8gR2V0IFRhYnMgQ29tcG9uZW50IGlmIGV4aXN0cyBvbiBwYWdlXG4gIHByaXZhdGUgZ2V0VGFic0NvbXBvbmVudCgpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy53aW5SZWYuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY3gtdGFiLXBhcmFncmFwaC1jb250YWluZXInKTtcbiAgfVxuXG4gIC8vIENsaWNrIHRvIGFjdGl2YXRlIHRhYiBpZiBub3QgYWxyZWFkeSBhY3RpdmVcbiAgcHJpdmF0ZSBjbGlja1RhYklmSW5hY3RpdmUodGFiOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgICF0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSB8fFxuICAgICAgdGFiLmNsYXNzTGlzdC5jb250YWlucygndG9nZ2xlZCcpXG4gICAgKSB7XG4gICAgICB0YWIuY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgVGFiIGJ5IGxhYmVsIGlmIGV4aXN0cyBvbiBwYWdlXG4gIHByaXZhdGUgZ2V0VGFiQnlMYWJlbChsYWJlbDogc3RyaW5nLCB0YWJzQ29tcG9uZW50OiBFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgIGlmICh0YWJzQ29tcG9uZW50KSB7XG4gICAgICAvLyBOT1RFOiBSZWFkcyB0aHJvdWdoIGJ1dHRvbiB0YWdzIHRvIGNsaWNrIG9uIGNvcnJlY3QgdGFiXG4gICAgICAvLyBUaGVyZSBtYXkgYmUgYSBiZXR0ZXIgd2F5IG9mIGRvaW5nIHRoaXMgbm93L2FmdGVyIHJlZmFjdG9yXG4gICAgICBjb25zdCB0YWJFbGVtZW50czogSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudD4gPSB0YWJzQ29tcG9uZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFxuICAgICAgICAnYnV0dG9uJ1xuICAgICAgKTtcblxuICAgICAgLy8gTG9vayB0aHJvdWdoIGJ1dHRvbiB0YWIgZWxlbWVudHMgdW50aWwgZmluZGluZyB0YWIgd2l0aCBsYWJlbFxuICAgICAgZm9yIChjb25zdCBidXR0b25FbGVtZW50IG9mIEFycmF5LmZyb20odGFiRWxlbWVudHMpKSB7XG4gICAgICAgIGlmIChidXR0b25FbGVtZW50LmlubmVySFRNTC5pbmNsdWRlcyhsYWJlbCkpIHtcbiAgICAgICAgICByZXR1cm4gYnV0dG9uRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19