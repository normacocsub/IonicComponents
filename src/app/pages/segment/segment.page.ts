import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  publisher: string = 'todos';
  superHerores: Observable<any>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superHerores = this.dataService.getHeroes();
  }

  segmentChanged(event){
    this.publisher = event.detail.value;
  }

}
