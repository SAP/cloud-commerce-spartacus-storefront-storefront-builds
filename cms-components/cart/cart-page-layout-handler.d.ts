import { PageLayoutHandler } from '../../cms-structure/page/page-layout/page-layout-handler';
import { CartService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CartPageLayoutHandler implements PageLayoutHandler {
    private cartService;
    constructor(cartService: CartService);
    handle(slots$: Observable<string[]>, pageTemplate?: string, section?: string): Observable<string[]>;
}