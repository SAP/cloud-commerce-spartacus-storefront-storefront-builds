import { OnDestroy, OnInit } from '@angular/core';
import { User, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { AsmComponentService } from '../services/asm-component.service';
export declare class CustomerEmulationComponent implements OnInit, OnDestroy {
    protected asmComponentService: AsmComponentService;
    protected userService: UserService;
    customer: User;
    isCustomerEmulationSessionInProgress$: Observable<boolean>;
    private subscription;
    constructor(asmComponentService: AsmComponentService, userService: UserService);
    ngOnInit(): void;
    logoutCustomer(): void;
    ngOnDestroy(): void;
}
