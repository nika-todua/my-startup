import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  imglogo = 'https://static.vecteezy.com/system/resources/thumbnails/006/886/451/small_2x/website-settings-glyph-circle-background-icon-vector.jpg';

  navigationlinkArray = [
    { name: 'მთავარი', link: '/' },
    { name: 'ჩვენ შესახებ', link: '/about-us' },
    { name: 'ნამუშევრები', link: '/portfolio' },
    { name: 'ფასები', link: '/pricing' },
    { name: 'სერვისები', link: '/services' }
  ]

  toggleclass = '';
  togglecouunt = 0;

  toggleMenu(){
    this.toggleclass = this.toggleclass === 'active' ? '' : 'active';
  }
  closeMenu(){
    this.toggleclass = 'inactive';
  }
  
}
