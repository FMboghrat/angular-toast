import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  message: string | null = null;
  isBrowser: boolean = false;
  constructor(
    private toastService: ToastService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit() {
    this.toastService.toastState$.subscribe((message) => {
      this.message = message;
      if (message) {
        this.show();
      } else {
        this.hide();
      }
    });
  }
  show() {
    console.log(this.isBrowser)
    if (this.isBrowser) {
      setTimeout(() => {
        const toast = document.querySelector('.toast') as HTMLElement;
        console.log(toast)
        if (toast) {
          toast.classList.remove('show');
          void toast.offsetWidth; // Trigger a reflow
          toast.classList.add('show');
        }
      }, 0)
    }
  }
  hide() {
    if (this.isBrowser) {
      const toast = document.querySelector('.toast') as HTMLElement;
      if (toast) {
        toast.classList.remove('show');
      }
    }
  }
  closeToast() {
    this.toastService.showToast('', 0);
  }
}
