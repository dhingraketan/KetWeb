import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements AfterViewInit{

  private observer = new IntersectionObserver((entries => {
    entries.forEach(entry => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }));

  constructor() { }

  ngAfterViewInit() {
    const hiddenElements = document.querySelectorAll('.hidden');
    const rightDescElements = document.querySelectorAll('.right-desc');
    hiddenElements.forEach((el: Element) => this.observer.observe(el));
    rightDescElements.forEach((el: Element) => this.observer.observe(el));
  }
}
