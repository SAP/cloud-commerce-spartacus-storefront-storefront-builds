import { Renderer2, SimpleChanges, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ICON_TYPE } from '../../misc/icon/index';
import { NavigationNode } from './navigation-node.model';
export declare class NavigationUIComponent implements OnChanges {
    private router;
    private renderer;
    /**
     * The navigation node to render.
     */
    node: NavigationNode;
    /**
     * the icon type that will be used for navigation nodes
     * with children.
     */
    iconType: typeof ICON_TYPE;
    /**
     * Indicates whether the navigation should support flyout.
     * If flyout is set to true, the
     * nested child navitation nodes will only appear on hover or focus.
     */
    flyout: boolean;
    isOpen: boolean;
    private openNodes;
    constructor(router: Router, renderer: Renderer2);
    toggleOpen(event: UIEvent): void;
    back(): void;
    clear(): void;
    private updateClasses;
    getDepth(node: NavigationNode, depth?: number): number;
    breakNodesIntoColumns(node: NavigationNode, columnSize: number): NavigationNode;
    ngOnChanges(changes: SimpleChanges): void;
}
