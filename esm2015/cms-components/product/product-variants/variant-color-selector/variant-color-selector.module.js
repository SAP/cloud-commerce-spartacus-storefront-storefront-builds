import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UrlModule, I18nModule } from '@spartacus/core';
import { VariantColorSelectorComponent } from './variant-color-selector.component';
import { RouterModule } from '@angular/router';
export class VariantColorSelectorModule {
}
VariantColorSelectorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, UrlModule, I18nModule],
                declarations: [VariantColorSelectorComponent],
                entryComponents: [VariantColorSelectorComponent],
                exports: [VariantColorSelectorComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1jb2xvci1zZWxlY3Rvci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvdmFyaWFudC1jb2xvci1zZWxlY3Rvci92YXJpYW50LWNvbG9yLXNlbGVjdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVEvQyxNQUFNLE9BQU8sMEJBQTBCOzs7WUFOdEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQztnQkFDNUQsWUFBWSxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzdDLGVBQWUsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2dCQUNoRCxPQUFPLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXJsTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFZhcmlhbnRDb2xvclNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi92YXJpYW50LWNvbG9yLXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIFVybE1vZHVsZSwgSTE4bk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1ZhcmlhbnRDb2xvclNlbGVjdG9yQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbVmFyaWFudENvbG9yU2VsZWN0b3JDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVmFyaWFudENvbG9yU2VsZWN0b3JDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBWYXJpYW50Q29sb3JTZWxlY3Rvck1vZHVsZSB7fVxuIl19