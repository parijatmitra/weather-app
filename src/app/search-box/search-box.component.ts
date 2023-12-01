import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  searchText: string = '';

  constructor(
    private router: Router
  ) { }

  onClickCleanBtn() {
    this.searchText = '';
  }

  onKeyPress(e: any) {
    if (e.keyCode === 13 && e.target.value) {
      const city = e.target.value;

     // this.router.navigate([`/`, `${city}`]);
     // this.router.navigate(['/', city]);
    //  this.router.navigate([city])
    let cityR = '/' + city;
 // this.router.navigate([cityR], { queryParams: { city: 'delhi' } });
 this.router.navigate([`/${city}`]);
    // this.router.navigate([`/${city}`]);
    //this.router.navigate(['/go']);
      this.searchText = '';
    }
  }
}
