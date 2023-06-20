import { Component, Input } from '@angular/core';
import { BackendErrors } from '../../types/backendErrors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.html',
  standalone: true,
  imports: [CommonModule],
})
export class BackendErrorMessages {
  @Input() backendErrors: BackendErrors = {};

  errorMessages: string[] = [];

  ngOnInit(): void {
    console.log('error messages', this.backendErrors);
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(' ');
      return `${name} ${messages}`;
    });
  }
}
