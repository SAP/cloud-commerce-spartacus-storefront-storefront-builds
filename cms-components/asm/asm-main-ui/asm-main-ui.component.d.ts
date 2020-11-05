import { OnInit } from '@angular/core';
import { AsmService, AuthService, CsAgentAuthService, GlobalMessageService, RoutingService, User, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { AsmComponentService } from '../services/asm-component.service';
import * as ɵngcc0 from '@angular/core';
export declare class AsmMainUiComponent implements OnInit {
    protected authService: AuthService;
    protected csAgentAuthService: CsAgentAuthService;
    protected userService: UserService;
    protected asmComponentService: AsmComponentService;
    protected globalMessageService: GlobalMessageService;
    protected routingService: RoutingService;
    protected asmService: AsmService;
    customerSupportAgentLoggedIn$: Observable<boolean>;
    csAgentTokenLoading$: Observable<boolean>;
    customer$: Observable<User>;
    isCollapsed$: Observable<boolean>;
    disabled: boolean;
    private startingCustomerSession;
    constructor(authService: AuthService, csAgentAuthService: CsAgentAuthService, userService: UserService, asmComponentService: AsmComponentService, globalMessageService: GlobalMessageService, routingService: RoutingService, asmService: AsmService);
    ngOnInit(): void;
    private handleCustomerSessionStartRedirection;
    loginCustomerSupportAgent({ userId, password, }: {
        userId: string;
        password: string;
    }): void;
    logout(): void;
    startCustomerEmulationSession({ customerId }: {
        customerId: string;
    }): void;
    hideUi(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmMainUiComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AsmMainUiComponent, "cx-asm-main-ui", never, {}, {}, never, never>;
}

//# sourceMappingURL=asm-main-ui.component.d.ts.map