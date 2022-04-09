import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tourism';
  searchText = "";

  isHomeActive = true;
  isAboutActive = false;
  isContactActive = false;
  isToursActive = false;

  onTextUpdate(num: number) {
    switch (num) {
      case 1:
        this.isHomeActive = true;
        this.isAboutActive = false;
        this.isContactActive = false;
        this.isToursActive = false;
        break;

      case 2:
        this.isHomeActive = false;
        this.isAboutActive = true;    
        this.isContactActive = false;
        this.isToursActive = false;
        break;

      case 3: 
        this.isHomeActive = false;
        this.isAboutActive = false;
        this.isContactActive = true;
        this.isToursActive = false;
        break;

      case 4:
        this.isHomeActive = false;
        this.isAboutActive = false;
        this.isContactActive = false;
        this.isToursActive = true; 
        break;
    }
  }

  onSearch(searchText: string) {
    if (searchText === "home" || searchText === "") {
      this.onTextUpdate(1);
    } else if (searchText === "about") {
      this.onTextUpdate(2);
    } else if (searchText === "contact") {
      this.onTextUpdate(3);
    } else if (searchText === "tours") {
      this.onTextUpdate(4);
    } 
  }

}












