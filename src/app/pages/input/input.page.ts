import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  nombre: string = 'Fernando'
  usuario = {
    email: '',
    password: ''
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario){
    console.log(formulario.value);
  }

}
