import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ketweb';

  ngAfterViewInit(): void {
    window.addEventListener('scroll', function () {
      var targetElement = document.querySelector('.about');
      var nav = document.querySelector('.navbr');
      var elementRect = targetElement!.getBoundingClientRect();
      var bodyRect = document.body.getBoundingClientRect();

      // Check if the element's top position is within the viewport
      if (elementRect.top >= + 90 && elementRect.top <= bodyRect.height) {
        nav!.classList.remove('nav');
      } else {
        console.log('Element is not at the top of the page.');
        nav!.classList.add('nav');
      }
    });
  }

}
