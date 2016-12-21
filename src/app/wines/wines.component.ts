import { Component } from '@angular/core';
import { WineService } from './wine.service';


@Component({
  selector: 'wines',
  templateUrl: './wines.component.html',
  styleUrls:['./wines.component.css']
})
export class WinesComponent {
  constructor(wineService: WineService) {
    wineService.getWines().subscribe(
      x => {
          console.log("VALUE RECEIVED: ",x);
      },
      x => {
          console.log("ERROR: ",x);
      },
      () => {
          console.log("Completed");
      }
    );
  }

}
