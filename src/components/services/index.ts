import AuthenticationService from './authenticationService';
import AuthGuard from './authGuard';
import GeneralService from './generalService';

const SHARED_PROVIDERS: any[] = [
  AuthenticationService,
  AuthGuard,
  GeneralService
];

export {
  AuthenticationService,
  AuthGuard,
  GeneralService,
  SHARED_PROVIDERS
};