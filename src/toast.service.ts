import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastSubject = new BehaviorSubject<string | null>(null);
  toastState$ = this.toastSubject.asObservable();
  setTimeout: ReturnType<typeof setTimeout> | undefined = undefined;
  showToast(message: string, duration: number = 3000) {
    this.toastSubject.next(message);
    if (this.setTimeout) {
      clearTimeout(this.setTimeout);
    }
    this.setTimeout = setTimeout(() => {
      this.toastSubject.next('');
    }, duration);
  }
}
