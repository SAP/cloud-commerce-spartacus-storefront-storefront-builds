/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var NavigationUIComponent = /** @class */ (function () {
    function NavigationUIComponent() {
        this.dropdownMode = 'list';
    }
    NavigationUIComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-navigation-ui',
                    template: "<div *ngIf=\"node\" class=\"cx-nav-item nav-item\" ngbDropdown>\n  <a\n    *ngIf=\"node.children && !node.title; else nodeWithChildren\"\n    ngbDropdownToggle\n    >&nbsp;\n  </a>\n  <ng-template #nodeWithChildren>\n    <span\n      *ngIf=\"node.children; else noChildren\"\n      ngbDropdownToggle\n      class=\"cx-nav-link nav-link\"\n      role=\"link\"\n      id=\"{{ node.title }}\"\n      >{{ node.title }}</span\n    >\n  </ng-template>\n  <ng-template #noChildren>\n    <a\n      [routerLink]=\"{ url: node.url } | cxTranslateUrl\"\n      class=\"cx-nav-link nav-link\"\n      id=\"{{ node.title }}\"\n      >{{ node.title }}\n    </a>\n  </ng-template>\n  <ng-container [ngSwitch]=\"dropdownMode\">\n    <ng-container *ngSwitchCase=\"'list'\">\n      <div\n        ngbDropdownMenu\n        class=\"cx-nav-child-list\"\n        [attr.aria-label]=\"node.title\"\n        role=\"list\"\n      >\n        <div\n          role=\"listitem\"\n          *ngFor=\"let subCategory of node.children\"\n          class=\"dropdown-item cx-nav-child-item\"\n        >\n          <ng-container *ngIf=\"subCategory.url\">\n            <a\n              [routerLink]=\"{ url: subCategory.url } | cxTranslateUrl\"\n              class=\"cx-nav-child-link\"\n              >{{ subCategory.title }}\n            </a>\n          </ng-container>\n          <ng-container *ngIf=\"!subCategory.url\">\n            <a class=\"cx-nav-child-link\">{{ subCategory.title }} </a>\n          </ng-container>\n          <a\n            [routerLink]=\"{ url: subCategoryChild.url } | cxTranslateUrl\"\n            *ngFor=\"let subCategoryChild of subCategory.children\"\n            >{{ subCategoryChild.title }}\n          </a>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'column'\">\n      <div\n        ngbDropdownMenu\n        class=\"cx-nav-child-list-columns\"\n        [attr.aria-label]=\"node.title\"\n      >\n        <div\n          class=\"cx-nav-child-column\"\n          *ngFor=\"let subCategory of node.children\"\n        >\n          <ng-container *ngIf=\"subCategory.url\">\n            <a\n              role=\"link\"\n              [routerLink]=\"{ url: subCategory.url } | cxTranslateUrl\"\n              class=\"cx-nav-child-link cx-nav-column-title\"\n              >{{ subCategory.title }}\n            </a>\n          </ng-container>\n          <ng-container *ngIf=\"!subCategory.url\">\n            <a class=\"cx-nav-child-link cx-nav-column-title\"\n              >{{ subCategory.title }}\n            </a>\n          </ng-container>\n\n          <div\n            *ngFor=\"let subCategoryChild of subCategory.children\"\n            class=\"dropdown-item cx-nav-child-column-item\"\n          >\n            <a\n              role=\"link\"\n              [routerLink]=\"{ url: subCategoryChild.url } | cxTranslateUrl\"\n              class=\"cx-nav-child-link\"\n              >{{ subCategoryChild.title }}\n            </a>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </ng-container>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:991.98px){.cx-nav-item{border-style:var(--cx-border-style,solid);border-width:var(--cx-border-width,0 0 1px);border-color:var(--cx-border-color,var(--cx-g-color-background));padding:var(--cx-padding,.5rem 0)}}.cx-nav-link{color:var(--cx-color,var(--cx-g-color-inverse));text-transform:var(--cx-text-transform,capitalize);padding:var(--cx-padding,.2rem 0)}.cx-nav-link:focus{color:var(--cx-color,var(--cx-g-color-primary))}.cx-nav-link:hover{color:var(--cx-color,var(--cx-g-color-primary));cursor:var(--cx-cursor,pointer)}@media (max-width:991.98px){.cx-nav-link{color:var(--cx-color,var(--cx-g-color-text));display:var(--cx-display,flex);justify-content:var(--cx-justify-content,space-between);padding:var(--cx-padding,.5rem 1rem)}.cx-nav-link::after{margin-right:20px;border-style:var(--cx-border-style,solid);border-width:var(--cx-border-width,3px);border-color:var(--cx-border-color,currentColor currentColor var(--cx-g-color-transparent) var(--cx-g-color-transparent));display:var(--cx-display,block);width:var(--cx-width,1rem);height:var(--cx-height,1rem)}.cx-nav-link[aria-expanded=false]::after{-webkit-transform:var(--cx-transform,rotate(45deg));transform:var(--cx-transform,rotate(45deg))}.cx-nav-link[aria-expanded=true]::after{-webkit-transform:var(--cx-transform,rotate(-45deg));transform:var(--cx-transform,rotate(-45deg))}.cx-nav-child-list{position:var(--cx-position,relative);background-color:var(--cx-background-color,var(--cx-g-color-background));border-style:var(--cx-border-style,none);border-width:var(--cx-border-width,0);width:var(--cx-width,100%);top:var(--cx-top,0)!important}}@media (min-width:992px) and (max-width:1199.98px){.cx-nav-link{padding:var(--cx-padding,.5rem 0)}}.cx-nav-child-list{border-radius:var(--cx-border-radius,0);text-transform:var(--cx-text-transform,capitalize);padding:var(--cx-padding,0)}.cx-nav-child-item{border-style:var(--cx-border-style,solid);border-width:var(--cx-border-width,0 0 1px);border-color:var(--cx-border-color,var(--cx-g-color-background));padding:var(--cx-padding,.45rem 1rem)}.cx-nav-child-item:hover{background-color:var(--cx-background-color,var(--cx-g-color-transparent))}.cx-nav-child-item:last-child{border-style:var(--cx-border-style,none);border-width:var(--cx-border-width,0)}.cx-nav-child-link{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-text))}.cx-nav-child-link:hover{color:var(--cx-color,var(--cx-g-color-primary));-webkit-text-decoration:var(--cx-text-decoration,none);text-decoration:var(--cx-text-decoration,none)}.cx-nav-child-list-columns{border-radius:var(--cx-border-radius,0);padding:var(--cx-padding,.75rem);margin:var(--cx-margin,0)}.cx-nav-child-list-columns.show{display:var(--cx-display,flex)}.cx-nav-column-title{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);text-transform:var(--cx-text-transform,capitalize);font-weight:var(--cx-font-weight,var(--cx-g-font-weight-bold));display:var(--cx-display,block);width:var(--cx-width,100%);padding:var(--cx-padding,.25rem 1.5rem)}.cx-nav-child-column{margin:var(--cx-margin,0)}@media (max-width:991.98px){.cx-nav-child-item{border-style:var(--cx-border-style,none);border-width:var(--cx-border-width,0)}.cx-nav-child-list-columns{flex-direction:var(--cx-flex-direction,column);position:var(--cx-position,static);width:var(--cx-width,100%);border-style:var(--cx-border-style,none);border-width:var(--cx-border-width,0);margin:var(--cx-margin,0)}.cx-nav-child-column{margin:var(--cx-margin,1rem unset 0 0)}}.cx-nav-child-column-item{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);padding:var(--cx-padding,.25rem 1.5rem)}.cx-nav-child-column-item:hover{background-color:var(--cx-background-color,var(--cx-g-color-transparent))}"]
                }] }
    ];
    NavigationUIComponent.propDecorators = {
        dropdownMode: [{ type: Input }],
        node: [{ type: Input }]
    };
    return NavigationUIComponent;
}());
export { NavigationUIComponent };
if (false) {
    /** @type {?} */
    NavigationUIComponent.prototype.dropdownMode;
    /** @type {?} */
    NavigationUIComponent.prototype.node;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi11aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tdWkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxRTtJQUFBO1FBUUUsaUJBQVksR0FBRyxNQUFNLENBQUM7SUFHeEIsQ0FBQzs7Z0JBWEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDJnR0FBNkM7b0JBRTdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7OzsrQkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBRVIsNEJBQUM7Q0FBQSxBQVhELElBV0M7U0FMWSxxQkFBcUI7OztJQUNoQyw2Q0FDc0I7O0lBQ3RCLHFDQUNxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbmF2aWdhdGlvbi11aScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0aW9uLXVpLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2aWdhdGlvbi11aS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvblVJQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZHJvcGRvd25Nb2RlID0gJ2xpc3QnO1xuICBASW5wdXQoKVxuICBub2RlOiBOYXZpZ2F0aW9uTm9kZTtcbn1cbiJdfQ==