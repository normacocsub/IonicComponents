import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  reorderView: boolean = false;
  personajes: string[] = ['Iron-Man', 'Thor', 'Cap-Marvel', 'Hulk', 'Kirito', 'Natsu', 'Samira']
  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any){

    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
    console.log(this.personajes);
  }

  toggle(){
    this.reorderView = !this.reorderView;
  }

}
