import { __decorate } from "tslib";
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { IconLoaderService } from './icon-loader.service';
/**
 *
 * The icon component can be added in different ways:
 *
 * With the component selector:
 * `<cx-icon type="SEARCH"></cx-icon>`
 *
 * With the attribute selector:
 * `<span cxIcon="STAR"></span>`
 *
 * Additionally, content can be projected to the icon:
 *
 * `<button cxIcon="HAPPY">happy label</button>`
 *
 * The above button would become (based on a TEXT resource type):
 * `<button>😊happy label</button>`
 *
 * While the content is projected, the icon itself doesn't require an
 * additional DOM node which is an advantage over the component selector.
 */
let IconComponent = class IconComponent {
    constructor(iconLoader, elementRef, renderer) {
        this.iconLoader = iconLoader;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * The cxIcon directive is bound to the icon type. You can feed the `ICON_TYPE` to
     * accomplish a configurable button in the UI.
     */
    set cxIcon(type) {
        this.setIcon(type);
    }
    /**
     * The type input parameter is bound to the icon type. You can feed the `ICON_TYPE` to
     * accomplish a configurable button in the UI.
     */
    set type(type) {
        this.setIcon(type);
    }
    setIcon(type) {
        if (!type || type === '') {
            return;
        }
        this.icon = this.iconLoader.getHtml(type);
        this.addStyleClasses(type);
        this.iconLoader.addLinkResource(type);
    }
    /**
     * Adds the style classes and the link resource (if available).
     */
    addStyleClasses(type) {
        this.renderer.addClass(this.host, 'cx-icon');
        if (this.styleClasses) {
            this.styleClasses.forEach(cls => this.renderer.removeClass(this.host, cls));
        }
        this.styleClasses = this.iconLoader.getStyleClasses(type).split(' ');
        this.styleClasses.forEach(cls => {
            if (cls !== '') {
                this.renderer.addClass(this.host, cls);
            }
        });
    }
    get host() {
        return this.elementRef.nativeElement;
    }
};
IconComponent.ctorParameters = () => [
    { type: IconLoaderService },
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input()
], IconComponent.prototype, "cxIcon", null);
__decorate([
    Input()
], IconComponent.prototype, "type", null);
IconComponent = __decorate([
    Component({
        selector: 'cx-icon,[cxIcon]',
        template: "<i [outerHTML]=\"icon\"></i><ng-content></ng-content>\n"
    })
], IconComponent);
export { IconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFLSCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBNEJ4QixZQUNZLFVBQTZCLEVBQzdCLFVBQW1DLEVBQ25DLFFBQW1CO1FBRm5CLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDNUIsQ0FBQztJQS9CSjs7O09BR0c7SUFDTSxJQUFJLE1BQU0sQ0FBQyxJQUFlO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRztJQUNNLElBQUksSUFBSSxDQUFDLElBQWU7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBbUJTLE9BQU8sQ0FBQyxJQUFlO1FBQy9CLElBQUksQ0FBQyxJQUFJLElBQVksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNoQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOztPQUVHO0lBQ08sZUFBZSxDQUFDLElBQWU7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUU3QyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FDMUMsQ0FBQztTQUNIO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO2dCQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFjLElBQUk7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0NBQ0YsQ0FBQTs7WUF0Q3lCLGlCQUFpQjtZQUNqQixVQUFVO1lBQ1osU0FBUzs7QUExQnRCO0lBQVIsS0FBSyxFQUFFOzJDQUVQO0FBTVE7SUFBUixLQUFLLEVBQUU7eUNBRVA7QUFmVSxhQUFhO0lBSnpCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsbUVBQW9DO0tBQ3JDLENBQUM7R0FDVyxhQUFhLENBbUV6QjtTQW5FWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSWNvbkxvYWRlclNlcnZpY2UgfSBmcm9tICcuL2ljb24tbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi9pY29uLm1vZGVsJztcblxuLyoqXG4gKlxuICogVGhlIGljb24gY29tcG9uZW50IGNhbiBiZSBhZGRlZCBpbiBkaWZmZXJlbnQgd2F5czpcbiAqXG4gKiBXaXRoIHRoZSBjb21wb25lbnQgc2VsZWN0b3I6XG4gKiBgPGN4LWljb24gdHlwZT1cIlNFQVJDSFwiPjwvY3gtaWNvbj5gXG4gKlxuICogV2l0aCB0aGUgYXR0cmlidXRlIHNlbGVjdG9yOlxuICogYDxzcGFuIGN4SWNvbj1cIlNUQVJcIj48L3NwYW4+YFxuICpcbiAqIEFkZGl0aW9uYWxseSwgY29udGVudCBjYW4gYmUgcHJvamVjdGVkIHRvIHRoZSBpY29uOlxuICpcbiAqIGA8YnV0dG9uIGN4SWNvbj1cIkhBUFBZXCI+aGFwcHkgbGFiZWw8L2J1dHRvbj5gXG4gKlxuICogVGhlIGFib3ZlIGJ1dHRvbiB3b3VsZCBiZWNvbWUgKGJhc2VkIG9uIGEgVEVYVCByZXNvdXJjZSB0eXBlKTpcbiAqIGA8YnV0dG9uPvCfmIpoYXBweSBsYWJlbDwvYnV0dG9uPmBcbiAqXG4gKiBXaGlsZSB0aGUgY29udGVudCBpcyBwcm9qZWN0ZWQsIHRoZSBpY29uIGl0c2VsZiBkb2Vzbid0IHJlcXVpcmUgYW5cbiAqIGFkZGl0aW9uYWwgRE9NIG5vZGUgd2hpY2ggaXMgYW4gYWR2YW50YWdlIG92ZXIgdGhlIGNvbXBvbmVudCBzZWxlY3Rvci5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtaWNvbixbY3hJY29uXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUaGUgY3hJY29uIGRpcmVjdGl2ZSBpcyBib3VuZCB0byB0aGUgaWNvbiB0eXBlLiBZb3UgY2FuIGZlZWQgdGhlIGBJQ09OX1RZUEVgIHRvXG4gICAqIGFjY29tcGxpc2ggYSBjb25maWd1cmFibGUgYnV0dG9uIGluIHRoZSBVSS5cbiAgICovXG4gIEBJbnB1dCgpIHNldCBjeEljb24odHlwZTogSUNPTl9UWVBFKSB7XG4gICAgdGhpcy5zZXRJY29uKHR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIGlucHV0IHBhcmFtZXRlciBpcyBib3VuZCB0byB0aGUgaWNvbiB0eXBlLiBZb3UgY2FuIGZlZWQgdGhlIGBJQ09OX1RZUEVgIHRvXG4gICAqIGFjY29tcGxpc2ggYSBjb25maWd1cmFibGUgYnV0dG9uIGluIHRoZSBVSS5cbiAgICovXG4gIEBJbnB1dCgpIHNldCB0eXBlKHR5cGU6IElDT05fVFlQRSkge1xuICAgIHRoaXMuc2V0SWNvbih0eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0aGUgaWNvbiBwcm92aWRlcyBhbiBodG1sIGZyYWdtZW50IHRoYXQgaXMgdXNlZCB0byBhZGQgU1ZHIG9yIHRleHQgYmFzZWQgaWNvbnMuXG4gICAqL1xuICBpY29uOiBTYWZlSHRtbDtcblxuICAvKipcbiAgICogTWFpbnRhaW5zIHRoZSBhcHBsaWVkIHN0eWxlIGNsYXNzZXMgc28gd2UgY2FuIHJlbW92ZSB0aGVtIHdoZW4gdGhlXG4gICAqIGljb24gdHlwZSBjaGFuZ2VzIGF0IHJ1biB0aW1lLlxuICAgKi9cbiAgcHJvdGVjdGVkIHN0eWxlQ2xhc3Nlczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGljb25Mb2FkZXI6IEljb25Mb2FkZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgcHJvdGVjdGVkIHNldEljb24odHlwZTogSUNPTl9UWVBFKTogdm9pZCB7XG4gICAgaWYgKCF0eXBlIHx8IDxzdHJpbmc+dHlwZSA9PT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pY29uID0gdGhpcy5pY29uTG9hZGVyLmdldEh0bWwodHlwZSk7XG4gICAgdGhpcy5hZGRTdHlsZUNsYXNzZXModHlwZSk7XG4gICAgdGhpcy5pY29uTG9hZGVyLmFkZExpbmtSZXNvdXJjZSh0eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBzdHlsZSBjbGFzc2VzIGFuZCB0aGUgbGluayByZXNvdXJjZSAoaWYgYXZhaWxhYmxlKS5cbiAgICovXG4gIHByb3RlY3RlZCBhZGRTdHlsZUNsYXNzZXModHlwZTogSUNPTl9UWVBFKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3QsICdjeC1pY29uJyk7XG5cbiAgICBpZiAodGhpcy5zdHlsZUNsYXNzZXMpIHtcbiAgICAgIHRoaXMuc3R5bGVDbGFzc2VzLmZvckVhY2goY2xzID0+XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ob3N0LCBjbHMpXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuc3R5bGVDbGFzc2VzID0gdGhpcy5pY29uTG9hZGVyLmdldFN0eWxlQ2xhc3Nlcyh0eXBlKS5zcGxpdCgnICcpO1xuXG4gICAgdGhpcy5zdHlsZUNsYXNzZXMuZm9yRWFjaChjbHMgPT4ge1xuICAgICAgaWYgKGNscyAhPT0gJycpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3QsIGNscyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG59XG4iXX0=