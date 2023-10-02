import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-introwave',
  templateUrl: './introwave.component.html',
  styleUrls: ['./introwave.component.css']
})
export class IntrowaveComponent {

  mainHeadingFontSize = 4;
  mainHeadingOpacity = 1;
  subHeadingVisible = true;
  serviceTilesVisible = true;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scroll = window.scrollY || document.documentElement.scrollTop;

    // Update mainheading font size and opacity
    this.mainHeadingFontSize = 4 + scroll / 200;
    this.mainHeadingOpacity = 1 - scroll / 500;

    // Hide subheading and service-tiles on scroll
    if (scroll > 200) {
      this.subHeadingVisible = false;
      this.serviceTilesVisible = false;
    } else {
      this.subHeadingVisible = true;
      this.serviceTilesVisible = true;
    }
  }


}
