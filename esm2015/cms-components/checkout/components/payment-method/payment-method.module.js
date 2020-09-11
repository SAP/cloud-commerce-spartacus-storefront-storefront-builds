import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule, provideDefaultConfig } from '@spartacus/core';
import { CardModule } from '../../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { PaymentFormModule } from './payment-form/payment-form.module';
import { PaymentMethodComponent } from './payment-method.component';
let PaymentMethodModule = class PaymentMethodModule {
};
PaymentMethodModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            PaymentFormModule,
            CardModule,
            SpinnerModule,
            I18nModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CheckoutPaymentDetails: {
                        component: PaymentMethodComponent,
                        // TODO(#8880): Shouldn't we keep ShippingAddressSetGuard and others here?
                        guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                    },
                },
            }),
        ],
        declarations: [PaymentMethodComponent],
        entryComponents: [PaymentMethodComponent],
        exports: [PaymentMethodComponent],
    })
], PaymentMethodModule);
export { PaymentMethodModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsVUFBVSxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQTBCcEUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7Q0FBRyxDQUFBO0FBQXRCLG1CQUFtQjtJQXhCL0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsVUFBVTtZQUNWLGFBQWE7WUFDYixVQUFVO1NBQ1g7UUFDRCxTQUFTLEVBQUU7WUFDVCxvQkFBb0IsQ0FBWTtnQkFDOUIsYUFBYSxFQUFFO29CQUNiLHNCQUFzQixFQUFFO3dCQUN0QixTQUFTLEVBQUUsc0JBQXNCO3dCQUNqQywwRUFBMEU7d0JBQzFFLE1BQU0sRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO3FCQUMvQztpQkFDRjthQUNGLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO1FBQ3RDLGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1FBQ3pDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ2xDLENBQUM7R0FDVyxtQkFBbUIsQ0FBRztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNDb25maWcsIEkxOG5Nb2R1bGUsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0QXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2NoZWNrb3V0LWF1dGguZ3VhcmQnO1xuaW1wb3J0IHsgQ2FydE5vdEVtcHR5R3VhcmQgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NhcnQvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuaW1wb3J0IHsgUGF5bWVudEZvcm1Nb2R1bGUgfSBmcm9tICcuL3BheW1lbnQtZm9ybS9wYXltZW50LWZvcm0ubW9kdWxlJztcbmltcG9ydCB7IFBheW1lbnRNZXRob2RDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFBheW1lbnRGb3JtTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2hlY2tvdXRQYXltZW50RGV0YWlsczoge1xuICAgICAgICAgIGNvbXBvbmVudDogUGF5bWVudE1ldGhvZENvbXBvbmVudCxcbiAgICAgICAgICAvLyBUT0RPKCM4ODgwKTogU2hvdWxkbid0IHdlIGtlZXAgU2hpcHBpbmdBZGRyZXNzU2V0R3VhcmQgYW5kIG90aGVycyBoZXJlP1xuICAgICAgICAgIGd1YXJkczogW0NoZWNrb3V0QXV0aEd1YXJkLCBDYXJ0Tm90RW1wdHlHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQYXltZW50TWV0aG9kQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUGF5bWVudE1ldGhvZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQYXltZW50TWV0aG9kQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZE1vZHVsZSB7fVxuIl19