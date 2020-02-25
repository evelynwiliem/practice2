import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor() { }
  name = 'nama'; class = ''; inputN = ''; inputC = '';

  people:{ //model
    name: '',
    class: '',
    inputN: '',
    inputC : ''
}

ngOnInit(): void {
  console.log('this.people',this.people);
  this.inputN='evelyn';
  
}

submit(){
  console.log();
  this.inputN = this.name;
  this.name = '';
  this.inputC = this.class;
  this.class = '';
  
}
}
