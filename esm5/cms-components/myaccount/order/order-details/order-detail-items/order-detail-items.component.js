import { __decorate, __read, __spread } from "tslib";
import { Component } from '@angular/core';
import { PromotionLocation, } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { PromotionService } from '../../../../../shared/services/promotion/promotion.service';
import { OrderDetailsService } from '../order-details.service';
import { cancelledValues, completedValues, } from './order-consigned-entries/order-consigned-entries.model';
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
    OrderDetailItemsComponent.ctorParameters = function () { return [
        { type: OrderDetailsService },
        { type: PromotionService }
    ]; };
    OrderDetailItemsComponent = __decorate([
        Component({
            selector: 'cx-order-details-items',
            template: "<ng-container *ngIf=\"order$ | async as order\">\n  <!-- consigned entries -->\n  <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n    <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n  </ng-container>\n\n  <cx-order-consigned-entries\n    *ngIf=\"others$ | async as others\"\n    [order]=\"order\"\n    [consignments]=\"others\"\n  ></cx-order-consigned-entries>\n\n  <cx-order-consigned-entries\n    *ngIf=\"completed$ | async as completed\"\n    [order]=\"order\"\n    [consignments]=\"completed\"\n  ></cx-order-consigned-entries>\n\n  <cx-order-consigned-entries\n    *ngIf=\"cancel$ | async as cancel\"\n    [order]=\"order\"\n    [consignments]=\"cancel\"\n  ></cx-order-consigned-entries>\n</ng-container>\n"
        })
    ], OrderDetailItemsComponent);
    return OrderDetailItemsComponent;
}());
export { OrderDetailItemsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1pdGVtcy9vcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFHTCxpQkFBaUIsR0FFbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDOUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUNMLGVBQWUsRUFDZixlQUFlLEdBQ2hCLE1BQU0seURBQXlELENBQUM7QUFNakU7SUFDRSxtQ0FDWSxtQkFBd0MsRUFDeEMsZ0JBQWtDO1FBRGxDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUc5QyxzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBQy9ELFdBQU0sR0FBc0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBSHBFLENBQUM7SUFTSiw0Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FDOUQsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxPQUFuQixJQUFJLFdBQW1CLGVBQWUsRUFBSyxlQUFlLEVBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTyxrREFBYyxHQUF0QixVQUNFLGlCQUEyQjtRQUUzQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNyQixHQUFHLENBQUMsVUFBQSxLQUFLO1lBQ1AsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUMvQixPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQUEsV0FBVztvQkFDMUMsT0FBQSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFBOUMsQ0FBOEMsQ0FDL0MsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTyxrREFBYyxHQUF0QjtRQUNFLDJCQUE4QjthQUE5QixVQUE4QixFQUE5QixxQkFBOEIsRUFBOUIsSUFBOEI7WUFBOUIsc0NBQThCOztRQUU5QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNyQixHQUFHLENBQUMsVUFBQSxLQUFLO1lBQ1AsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUMvQixPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUM5QixVQUFBLFdBQVcsSUFBSSxPQUFBLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBL0MsQ0FBK0MsQ0FDL0QsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQTlDZ0MsbUJBQW1CO2dCQUN0QixnQkFBZ0I7O0lBSG5DLHlCQUF5QjtRQUpyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLDZ2QkFBa0Q7U0FDbkQsQ0FBQztPQUNXLHlCQUF5QixDQWlEckM7SUFBRCxnQ0FBQztDQUFBLEFBakRELElBaURDO1NBakRZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb25zaWdubWVudCxcbiAgT3JkZXIsXG4gIFByb21vdGlvbkxvY2F0aW9uLFxuICBQcm9tb3Rpb25SZXN1bHQsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Byb21vdGlvbi9wcm9tb3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIGNhbmNlbGxlZFZhbHVlcyxcbiAgY29tcGxldGVkVmFsdWVzLFxufSBmcm9tICcuL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItZGV0YWlscy1pdGVtcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbiA9IFByb21vdGlvbkxvY2F0aW9uLk9yZGVyO1xuICBvcmRlciQ6IE9ic2VydmFibGU8T3JkZXI+ID0gdGhpcy5vcmRlckRldGFpbHNTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpO1xuICBvcmRlclByb21vdGlvbnMkOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPjtcbiAgb3RoZXJzJDogT2JzZXJ2YWJsZTxDb25zaWdubWVudFtdPjtcbiAgY29tcGxldGVkJDogT2JzZXJ2YWJsZTxDb25zaWdubWVudFtdPjtcbiAgY2FuY2VsJDogT2JzZXJ2YWJsZTxDb25zaWdubWVudFtdPjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9yZGVyUHJvbW90aW9ucyQgPSB0aGlzLnByb21vdGlvblNlcnZpY2UuZ2V0T3JkZXJQcm9tb3Rpb25zKFxuICAgICAgdGhpcy5wcm9tb3Rpb25Mb2NhdGlvblxuICAgICk7XG4gICAgdGhpcy5vdGhlcnMkID0gdGhpcy5nZXRPdGhlclN0YXR1cyguLi5jb21wbGV0ZWRWYWx1ZXMsIC4uLmNhbmNlbGxlZFZhbHVlcyk7XG4gICAgdGhpcy5jb21wbGV0ZWQkID0gdGhpcy5nZXRFeGFjdFN0YXR1cyhjb21wbGV0ZWRWYWx1ZXMpO1xuICAgIHRoaXMuY2FuY2VsJCA9IHRoaXMuZ2V0RXhhY3RTdGF0dXMoY2FuY2VsbGVkVmFsdWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RXhhY3RTdGF0dXMoXG4gICAgY29uc2lnbm1lbnRTdGF0dXM6IHN0cmluZ1tdXG4gICk6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRbXT4ge1xuICAgIHJldHVybiB0aGlzLm9yZGVyJC5waXBlKFxuICAgICAgbWFwKG9yZGVyID0+IHtcbiAgICAgICAgaWYgKEJvb2xlYW4ob3JkZXIuY29uc2lnbm1lbnRzKSkge1xuICAgICAgICAgIHJldHVybiBvcmRlci5jb25zaWdubWVudHMuZmlsdGVyKGNvbnNpZ25tZW50ID0+XG4gICAgICAgICAgICBjb25zaWdubWVudFN0YXR1cy5pbmNsdWRlcyhjb25zaWdubWVudC5zdGF0dXMpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPdGhlclN0YXR1cyhcbiAgICAuLi5jb25zaWdubWVudFN0YXR1czogc3RyaW5nW11cbiAgKTogT2JzZXJ2YWJsZTxDb25zaWdubWVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXIkLnBpcGUoXG4gICAgICBtYXAob3JkZXIgPT4ge1xuICAgICAgICBpZiAoQm9vbGVhbihvcmRlci5jb25zaWdubWVudHMpKSB7XG4gICAgICAgICAgcmV0dXJuIG9yZGVyLmNvbnNpZ25tZW50cy5maWx0ZXIoXG4gICAgICAgICAgICBjb25zaWdubWVudCA9PiAhY29uc2lnbm1lbnRTdGF0dXMuaW5jbHVkZXMoY29uc2lnbm1lbnQuc3RhdHVzKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19