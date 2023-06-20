import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    const cloned = request.clone({
      headers: request.headers.set('Authorization', 'Token ' + token),
    });
    return next(cloned);
  } else {
    return next(request);
  }
};
