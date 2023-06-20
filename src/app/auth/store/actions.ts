import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CurrentUser } from 'src/app/shared/types/currentUser';
import { BackendErrors } from 'src/app/shared/types/backendErrors';
import { RegisterUserRequest } from '../types/registerUserRequest.interface';
import { LoginRequest } from '../types/loginRequest';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    Register: props<{ request: RegisterUserRequest }>(),
    'Register success': props<{ currentUser: CurrentUser }>(),
    'Register failure': props<{ errors: BackendErrors }>(),

    Login: props<{ request: LoginRequest }>(),
    'Login success': props<{ currentUser: CurrentUser }>(),
    'Login failure': props<{ errors: BackendErrors }>(),

    'Get current user': emptyProps(),
    'Get current user success': props<{ currentUser: CurrentUser }>(),
    'Get current user failure': emptyProps(),
  },
});
