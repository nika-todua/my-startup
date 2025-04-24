import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  webname = 'საიტის სახელი';



  scrollDown() {
    let heroSection = document.querySelector('.homepage_inner__hero_cont') as HTMLElement;
    window.scrollTo({
      top: heroSection.clientHeight - 80,
      behavior: 'smooth'
    });
  }



  // price section functions

  priceArray = [
    {
      title: 'საიტის დამზადება',
      price: 600,
      Late: '-დან',
      link: 'website-creation',
    },
    {
      title: 'სოც. მენეჯმენტი',
      price: 800,
      Late: '/თვე',
      link: 'social-management',
    }
  ]
  
  // about section functions
  image1 = 'https://media.istockphoto.com/id/1208424349/photo/overjoyed-young-mixed-race-employees-celebrating-shared-business-success.jpg?s=612x612&w=0&k=20&c=w5qTRwx0A86okVzpd292CmUX17SLyWfOR86KkokFcWg=';


  // services section functions
  servicesArray = [
    {
      title: 'საიტის დამზადება',
      description: 'გამორჩეული დიზაინის მქონე ვებ-გვერდი, მოქნილი ნავიგაციის სისტემით მომსახურების მიღების პროცესს მარტივსა და კომფორტულს ხდის. თქვენს ბიზნესზე მორგებული ვებ გვერდი უნიკალური შესაძლებლობაა მომხმარებლებთან ეფექტური კომუნიკაციის დასამყარბელად.',
      icon: '../../../assets/icons/crown-solid.svg',
      image: 'https://media.istockphoto.com/id/1208424349/photo/overjoyed-young-mixed-race-employees-celebrating-shared-business-success.jpg?s=612x612&w=0&k=20&c=w5qTRwx0A86okVzpd292CmUX17SLyWfOR86KkokFcWg=',
      link: 'website-creation',
    },
    {
      title: 'სოციალური ქსელების მართვა',
      description: 'სოციალური ქსელი არის სივრცე, სადაც შეგიძლიათ წინასწარ განსაზღვრულ აუდიტორიას მიაწოდოთ თქვენთვის სასურველი ინფორმაცია და შესთავაზოთ მომსახურება - ეფექტური, გამორჩეული, დროში გაწერილი, დასამახსოვრებელი სარეკლამო პოსტების მეშვეობით.',
      icon: '../../../assets/icons/facebook-f-brands.svg',
      image: 'https://media.istockphoto.com/id/1208424349/photo/overjoyed-young-mixed-race-employees-celebrating-shared-business-success.jpg?s=612x612&w=0&k=20&c=w5qTRwx0A86okVzpd292CmUX17SLyWfOR86KkokFcWg=',
      link: 'social-management',
    }
  ]

}
