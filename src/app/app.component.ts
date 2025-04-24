import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mystartup';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {
      const header = document.querySelector("header");
      if (header) {
        window.addEventListener("scroll", () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 100) {
            header.classList.add("headerActive");
          } else {
            header.classList.remove("headerActive");
          }
        });
      }
    }

  }
  
}
interface OnInit {
  ngOnInit(): void;
}