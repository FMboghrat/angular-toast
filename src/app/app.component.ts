import { Component } from '@angular/core';
import { ToastComponent } from './toast/toast.component';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test-angular';
  number: number = 0;
  constructor(private toastService: ToastService) {}
  showNotification() {
    this.number = this.number + 1
    this.toastService.showToast(`This is a toast message!${this.number}`);
  }
}
