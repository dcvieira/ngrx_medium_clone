import { BackendErrors } from 'src/app/shared/types/backendErrors';
import { CurrentUser } from 'src/app/shared/types/currentUser';

export interface AuthState {
  isSubmitting: boolean;
  currentUser: CurrentUser | null | undefined;
  isLoading: boolean;
  validationErrors: BackendErrors | null;
}
