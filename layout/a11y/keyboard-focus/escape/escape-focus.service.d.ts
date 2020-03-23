import { EscapeFocusConfig } from '../keyboard-focus.model';
import { PersistFocusService } from '../persist/persist-focus.service';
import { SelectFocusUtility } from '../services/select-focus.util';
import * as ɵngcc0 from '@angular/core';
export declare class EscapeFocusService extends PersistFocusService {
    protected selectFocusUtil: SelectFocusUtility;
    constructor(selectFocusUtil: SelectFocusUtility);
    shouldFocus(config: EscapeFocusConfig): boolean;
    handleEscape(host: HTMLElement, config: EscapeFocusConfig, event: KeyboardEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EscapeFocusService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlLWZvY3VzLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiZXNjYXBlLWZvY3VzLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVzY2FwZUZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgUGVyc2lzdEZvY3VzU2VydmljZSB9IGZyb20gJy4uL3BlcnNpc3QvcGVyc2lzdC1mb2N1cy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlbGVjdEZvY3VzVXRpbGl0eSB9IGZyb20gJy4uL3NlcnZpY2VzL3NlbGVjdC1mb2N1cy51dGlsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEVzY2FwZUZvY3VzU2VydmljZSBleHRlbmRzIFBlcnNpc3RGb2N1c1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzZWxlY3RGb2N1c1V0aWw6IFNlbGVjdEZvY3VzVXRpbGl0eTtcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3RGb2N1c1V0aWw6IFNlbGVjdEZvY3VzVXRpbGl0eSk7XG4gICAgc2hvdWxkRm9jdXMoY29uZmlnOiBFc2NhcGVGb2N1c0NvbmZpZyk6IGJvb2xlYW47XG4gICAgaGFuZGxlRXNjYXBlKGhvc3Q6IEhUTUxFbGVtZW50LCBjb25maWc6IEVzY2FwZUZvY3VzQ29uZmlnLCBldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG59XG4iXX0=