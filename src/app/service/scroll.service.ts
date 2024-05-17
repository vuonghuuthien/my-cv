import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollEvent = new Subject<void>(); // Subject để phát ra sự kiện cuộn

  constructor() { 
    this.initScrollListener();
  }

  private initScrollListener(): void {
    window.addEventListener('scroll', () => {
      this.scrollEvent.next(); // Khi trang được cuộn, phát ra sự kiện
    });
  }
}
