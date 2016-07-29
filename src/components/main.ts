import { bootstrap }    from '@angular/platform-browser-dynamic';           // for bootstraping
import { APP_ROUTER_PROVIDERS } from './routes';                            // for routing
import { disableDeprecatedForms, provideForms } from '@angular/forms';      // for form validation

import { AppComponent } from './app/appComponent';
import { SHARED_PROVIDERS  } from './services/index' 

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    SHARED_PROVIDERS
]).catch((err: any) => console.error(err));