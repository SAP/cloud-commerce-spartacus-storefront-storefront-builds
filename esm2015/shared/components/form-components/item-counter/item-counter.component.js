/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2, ViewChild, } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
/** @type {?} */
const COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line */
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => ItemCounterComponent)),
    multi: true,
};
export class ItemCounterComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.value = 0;
        this.step = 1;
        this.async = false;
        this.cartIsLoading = false;
        this.isValueChangeable = false;
        this.update = new EventEmitter();
        this.isValueOutOfRange = false;
        this.inputValue = new FormControl({
            disabled: this.isValueChangeable,
        });
        this.onTouch = (/**
         * @return {?}
         */
        () => { });
        this.onModelChange = (/**
         * @param {?} _rating
         * @return {?}
         */
        (_rating) => { });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.writeValue(this.min || 0);
        this.inputValue.valueChanges.pipe(debounceTime(300)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                this.manualChange(Number(value));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.cartIsLoading) {
            this.inputValue.disable({
                onlySelf: true,
                emitEvent: false,
            });
        }
        else {
            this.inputValue.enable({
                onlySelf: true,
                emitEvent: false,
            });
        }
    }
    /**
     * If value is too small it will be set to min, if is too big it will be set to max.
     * @param {?} incomingValue
     * @return {?}
     */
    adjustValueInRange(incomingValue) {
        return incomingValue < this.min || !this.min
            ? this.min
            : incomingValue > this.max || !this.max
                ? this.max
                : incomingValue;
    }
    /**
     * Update model value and refresh input
     * @param {?} newValue
     * @return {?}
     */
    manualChange(newValue) {
        newValue = this.adjustValueInRange(newValue);
        this.updateValue(newValue);
        /* We use the value from the input, however, this value
          is not the correct value that should be displayed. The correct value to display
          is this.value, which the parent updates if the async call succeed. If the call
          fails, then the input will need to display this.value, and not what the user
          recently typed in */
        this.renderer.setProperty(this.input.nativeElement, 'value', newValue);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const handlers = {
            ArrowDown: (/**
             * @return {?}
             */
            () => this.decrement()),
            ArrowUp: (/**
             * @return {?}
             */
            () => this.increment()),
        };
        if (handlers[event.code]) {
            handlers[event.code]();
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        this.focus = false;
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this.focus = true;
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    }
    /**
     * Verify value that it can be incremented, if yes it does that.
     * @return {?}
     */
    increment() {
        this.manualChange(this.value + this.step);
        this.setFocus(true);
    }
    /**
     * Verify value that it can be decremented, if yes it does that.
     * @return {?}
     */
    decrement() {
        this.manualChange(this.value - this.step);
        this.setFocus(false);
    }
    // ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value || this.min || 0;
        this.onModelChange(this.value);
    }
    /**
     * Set up new value for input and emit event outside
     * @param {?} updatedQuantity
     * @return {?}
     */
    updateValue(updatedQuantity) {
        if (!this.async) {
            // If the async flag is true, then the parent component is responsible for updating the form
            this.writeValue(updatedQuantity);
        }
        // Additionally, we emit a change event, so that users may optionally do something on change
        this.update.emit(updatedQuantity);
        this.onTouch();
    }
    /**
     * Determines which HTML element should have focus at a given time
     * @param {?} isIncremented
     * @return {?}
     */
    setFocus(isIncremented) {
        if (this.isMaxOrMinValueOrBeyond()) {
            this.input.nativeElement.focus();
        }
        else if (isIncremented) {
            this.incrementBtn.nativeElement.focus();
        }
        else {
            this.decrementBtn.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    isMaxOrMinValueOrBeyond() {
        return this.value >= this.max || this.value <= this.min;
    }
}
ItemCounterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-item-counter',
                template: "<div class=\"cx-counter-wrapper\">\n  <div\n    class=\"cx-counter btn-group\"\n    role=\"group\"\n    tabindex=\"0\"\n    aria-label=\"Add more items\"\n    [class.focused]=\"focus\"\n    (keydown)=\"onKeyDown($event)\"\n    (blur)=\"onBlur($event)\"\n    (focus)=\"onFocus($event)\"\n  >\n    <button\n      #decrementBtn\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"decrement()\"\n      [disabled]=\"cartIsLoading || value <= min\"\n    >\n      -\n    </button>\n    <input\n      #itemCounterInput\n      class=\"cx-counter-value\"\n      type=\"text\"\n      name=\"value\"\n      cxOnlyNumber\n      [formControl]=\"inputValue\"\n      [value]=\"value\"\n      *ngIf=\"isValueChangeable\"\n    />\n    <div class=\"cx-counter-value\" *ngIf=\"!isValueChangeable\">\n      {{ value }}\n    </div>\n    <button\n      #incrementBtn\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"increment()\"\n      [disabled]=\"cartIsLoading || value >= max\"\n    >\n      +\n    </button>\n  </div>\n</div>\n",
                providers: [COUNTER_CONTROL_ACCESSOR]
            }] }
];
/** @nocollapse */
ItemCounterComponent.ctorParameters = () => [
    { type: Renderer2 }
];
ItemCounterComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['itemCounterInput', { static: false },] }],
    incrementBtn: [{ type: ViewChild, args: ['incrementBtn', { static: false },] }],
    decrementBtn: [{ type: ViewChild, args: ['decrementBtn', { static: false },] }],
    step: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    async: [{ type: Input }],
    cartIsLoading: [{ type: Input }],
    isValueChangeable: [{ type: Input }],
    update: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ItemCounterComponent.prototype.input;
    /** @type {?} */
    ItemCounterComponent.prototype.incrementBtn;
    /** @type {?} */
    ItemCounterComponent.prototype.decrementBtn;
    /** @type {?} */
    ItemCounterComponent.prototype.value;
    /** @type {?} */
    ItemCounterComponent.prototype.step;
    /** @type {?} */
    ItemCounterComponent.prototype.min;
    /** @type {?} */
    ItemCounterComponent.prototype.max;
    /** @type {?} */
    ItemCounterComponent.prototype.async;
    /** @type {?} */
    ItemCounterComponent.prototype.cartIsLoading;
    /** @type {?} */
    ItemCounterComponent.prototype.isValueChangeable;
    /** @type {?} */
    ItemCounterComponent.prototype.update;
    /** @type {?} */
    ItemCounterComponent.prototype.focus;
    /** @type {?} */
    ItemCounterComponent.prototype.isValueOutOfRange;
    /** @type {?} */
    ItemCounterComponent.prototype.inputValue;
    /** @type {?} */
    ItemCounterComponent.prototype.onTouch;
    /** @type {?} */
    ItemCounterComponent.prototype.onModelChange;
    /**
     * @type {?}
     * @private
     */
    ItemCounterComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Zvcm0tY29tcG9uZW50cy9pdGVtLWNvdW50ZXIvaXRlbS1jb3VudGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLFdBQVcsRUFDWCxpQkFBaUIsR0FDbEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRXhDLHdCQUF3QixHQUFHO0lBQy9CLE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBT0QsTUFBTSxPQUFPLG9CQUFvQjs7OztJQXdEL0IsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQS9DdkMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUVWLFNBQUksR0FBRyxDQUFDLENBQUM7UUFNVCxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBRWQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRzFCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBSXBDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixlQUFVLEdBQWdCLElBQUksV0FBVyxDQUFDO1lBQ3hDLFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1NBQ2pDLENBQUMsQ0FBQztRQTJCSCxZQUFPOzs7UUFB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ICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybUNvbnRyb2wsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IENPVU5URVJfQ09OVFJPTF9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJdGVtQ291bnRlckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtaXRlbS1jb3VudGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2l0ZW0tY291bnRlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW0NPVU5URVJfQ09OVFJPTF9BQ0NFU1NPUl0sXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db3VudGVyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnaXRlbUNvdW50ZXJJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBwdWJsaWMgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2luY3JlbWVudEJ0bicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBwdWJsaWMgaW5jcmVtZW50QnRuOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdkZWNyZW1lbnRCdG4nLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcHVibGljIGRlY3JlbWVudEJ0bjogRWxlbWVudFJlZjtcblxuICB2YWx1ZSA9IDA7XG4gIEBJbnB1dCgpXG4gIHN0ZXAgPSAxO1xuICBASW5wdXQoKVxuICBtaW46IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWF4OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGFzeW5jID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGNhcnRJc0xvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgaXNWYWx1ZUNoYW5nZWFibGUgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgZm9jdXM6IGJvb2xlYW47XG5cbiAgaXNWYWx1ZU91dE9mUmFuZ2UgPSBmYWxzZTtcbiAgaW5wdXRWYWx1ZTogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woe1xuICAgIGRpc2FibGVkOiB0aGlzLmlzVmFsdWVDaGFuZ2VhYmxlLFxuICB9KTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5taW4gfHwgMCk7XG4gICAgdGhpcy5pbnB1dFZhbHVlLnZhbHVlQ2hhbmdlcy5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWFudWFsQ2hhbmdlKE51bWJlcih2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuY2FydElzTG9hZGluZykge1xuICAgICAgdGhpcy5pbnB1dFZhbHVlLmRpc2FibGUoe1xuICAgICAgICBvbmx5U2VsZjogdHJ1ZSxcbiAgICAgICAgZW1pdEV2ZW50OiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0VmFsdWUuZW5hYmxlKHtcbiAgICAgICAgb25seVNlbGY6IHRydWUsXG4gICAgICAgIGVtaXRFdmVudDogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgb25Ub3VjaDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoX3JhdGluZzogbnVtYmVyKSA9PiB7fTtcblxuICAvKipcbiAgICogSWYgdmFsdWUgaXMgdG9vIHNtYWxsIGl0IHdpbGwgYmUgc2V0IHRvIG1pbiwgaWYgaXMgdG9vIGJpZyBpdCB3aWxsIGJlIHNldCB0byBtYXguXG4gICAqL1xuICBhZGp1c3RWYWx1ZUluUmFuZ2UoaW5jb21pbmdWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gaW5jb21pbmdWYWx1ZSA8IHRoaXMubWluIHx8ICF0aGlzLm1pblxuICAgICAgPyB0aGlzLm1pblxuICAgICAgOiBpbmNvbWluZ1ZhbHVlID4gdGhpcy5tYXggfHwgIXRoaXMubWF4XG4gICAgICA/IHRoaXMubWF4XG4gICAgICA6IGluY29taW5nVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIG1vZGVsIHZhbHVlIGFuZCByZWZyZXNoIGlucHV0XG4gICAqL1xuICBtYW51YWxDaGFuZ2UobmV3VmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIG5ld1ZhbHVlID0gdGhpcy5hZGp1c3RWYWx1ZUluUmFuZ2UobmV3VmFsdWUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWUobmV3VmFsdWUpO1xuICAgIC8qIFdlIHVzZSB0aGUgdmFsdWUgZnJvbSB0aGUgaW5wdXQsIGhvd2V2ZXIsIHRoaXMgdmFsdWVcbiAgICAgIGlzIG5vdCB0aGUgY29ycmVjdCB2YWx1ZSB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQuIFRoZSBjb3JyZWN0IHZhbHVlIHRvIGRpc3BsYXlcbiAgICAgIGlzIHRoaXMudmFsdWUsIHdoaWNoIHRoZSBwYXJlbnQgdXBkYXRlcyBpZiB0aGUgYXN5bmMgY2FsbCBzdWNjZWVkLiBJZiB0aGUgY2FsbFxuICAgICAgZmFpbHMsIHRoZW4gdGhlIGlucHV0IHdpbGwgbmVlZCB0byBkaXNwbGF5IHRoaXMudmFsdWUsIGFuZCBub3Qgd2hhdCB0aGUgdXNlclxuICAgICAgcmVjZW50bHkgdHlwZWQgaW4gKi9cbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgbmV3VmFsdWUpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB7XG4gICAgICBBcnJvd0Rvd246ICgpID0+IHRoaXMuZGVjcmVtZW50KCksXG4gICAgICBBcnJvd1VwOiAoKSA9PiB0aGlzLmluY3JlbWVudCgpLFxuICAgIH07XG5cbiAgICBpZiAoaGFuZGxlcnNbZXZlbnQuY29kZV0pIHtcbiAgICAgIGhhbmRsZXJzW2V2ZW50LmNvZGVdKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vblRvdWNoKCk7XG4gIH1cblxuICBvbkZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5mb2N1cyA9IHRydWU7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdmFsdWUgdGhhdCBpdCBjYW4gYmUgaW5jcmVtZW50ZWQsIGlmIHllcyBpdCBkb2VzIHRoYXQuXG4gICAqL1xuICBpbmNyZW1lbnQoKTogdm9pZCB7XG4gICAgdGhpcy5tYW51YWxDaGFuZ2UodGhpcy52YWx1ZSArIHRoaXMuc3RlcCk7XG4gICAgdGhpcy5zZXRGb2N1cyh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdmFsdWUgdGhhdCBpdCBjYW4gYmUgZGVjcmVtZW50ZWQsIGlmIHllcyBpdCBkb2VzIHRoYXQuXG4gICAqL1xuICBkZWNyZW1lbnQoKTogdm9pZCB7XG4gICAgdGhpcy5tYW51YWxDaGFuZ2UodGhpcy52YWx1ZSAtIHRoaXMuc3RlcCk7XG4gICAgdGhpcy5zZXRGb2N1cyhmYWxzZSk7XG4gIH1cblxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgdGhpcy5taW4gfHwgMDtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHVwIG5ldyB2YWx1ZSBmb3IgaW5wdXQgYW5kIGVtaXQgZXZlbnQgb3V0c2lkZVxuICAgKi9cbiAgdXBkYXRlVmFsdWUodXBkYXRlZFF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYXN5bmMpIHtcbiAgICAgIC8vIElmIHRoZSBhc3luYyBmbGFnIGlzIHRydWUsIHRoZW4gdGhlIHBhcmVudCBjb21wb25lbnQgaXMgcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIHRoZSBmb3JtXG4gICAgICB0aGlzLndyaXRlVmFsdWUodXBkYXRlZFF1YW50aXR5KTtcbiAgICB9XG5cbiAgICAvLyBBZGRpdGlvbmFsbHksIHdlIGVtaXQgYSBjaGFuZ2UgZXZlbnQsIHNvIHRoYXQgdXNlcnMgbWF5IG9wdGlvbmFsbHkgZG8gc29tZXRoaW5nIG9uIGNoYW5nZVxuICAgIHRoaXMudXBkYXRlLmVtaXQodXBkYXRlZFF1YW50aXR5KTtcbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoaWNoIEhUTUwgZWxlbWVudCBzaG91bGQgaGF2ZSBmb2N1cyBhdCBhIGdpdmVuIHRpbWVcbiAgICovXG4gIHNldEZvY3VzKGlzSW5jcmVtZW50ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc01heE9yTWluVmFsdWVPckJleW9uZCgpKSB7XG4gICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGlzSW5jcmVtZW50ZWQpIHtcbiAgICAgIHRoaXMuaW5jcmVtZW50QnRuLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWNyZW1lbnRCdG4ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGlzTWF4T3JNaW5WYWx1ZU9yQmV5b25kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZhbHVlID49IHRoaXMubWF4IHx8IHRoaXMudmFsdWUgPD0gdGhpcy5taW47XG4gIH1cbn1cbiJdfQ==