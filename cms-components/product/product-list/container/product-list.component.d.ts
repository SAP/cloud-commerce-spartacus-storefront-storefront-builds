import { OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductSearchPage, ProductSearchService, SearchConfig } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageLayoutService } from '../../../../cms-structure/page/index';
import { ViewModes } from '../product-view/product-view.component';
export declare class ProductListComponent implements OnInit {
    protected productSearchService: ProductSearchService;
    private activatedRoute;
    private pageLayoutService;
    query: string;
    categoryCode: string;
    brandCode: string;
    itemPerPage: number;
    model$: Observable<ProductSearchPage>;
    searchConfig: SearchConfig;
    categoryTitle: string;
    options: SearchConfig;
    updateParams$: Observable<Params>;
    gridMode$: BehaviorSubject<ViewModes>;
    constructor(productSearchService: ProductSearchService, activatedRoute: ActivatedRoute, pageLayoutService: PageLayoutService);
    update(): void;
    createOptionsByUrlParams(): SearchConfig;
    ngOnInit(): void;
    protected getCategoryTitle(data: ProductSearchPage): string;
    viewPage(pageNumber: number): void;
    sortList(sortCode: string): void;
    setGridMode(mode: ViewModes): void;
    protected search(query: string, options?: SearchConfig): void;
}
