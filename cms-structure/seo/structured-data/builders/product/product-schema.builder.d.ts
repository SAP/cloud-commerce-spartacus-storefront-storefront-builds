import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../../../../../cms-components/product/current-product.service';
import { JsonLdBuilder, SchemaBuilder } from '../schema.interface';
/**
 * Adds the minimal structured data for the product, see https://schema.org/product.
 * The actual data collection is delegated to `JsonLdBuilder`s, which can be injected
 * using the `JSONLD_PRODUCT_BUILDER` token.
 */
export declare class ProductSchemaBuilder implements SchemaBuilder {
    private currentProduct;
    protected builders: JsonLdBuilder<Product>[];
    constructor(currentProduct: CurrentProductService, builders: JsonLdBuilder<Product>[]);
    build(): Observable<any>;
    protected collect(product: Product): Observable<any>[];
}
