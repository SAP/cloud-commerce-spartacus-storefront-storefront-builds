import { Injector } from '@angular/core';
import { CmsComponentsService } from '../../../services/cms-components.service';
/**
 * Used to prepare injector for CMS components.
 *
 * Injector will take into account configured providers and provides CmsComponentData
 * for specified component's uid
 */
export declare class CmsInjectorService {
    protected cmsComponentsService: CmsComponentsService;
    protected injector: Injector;
    constructor(cmsComponentsService: CmsComponentsService, injector: Injector);
    getInjector(type: string, uid: string, parentInjector?: Injector): Injector;
}
