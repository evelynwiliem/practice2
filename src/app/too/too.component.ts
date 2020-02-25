import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-too',
  templateUrl: './too.component.html',
  styleUrls: ['./too.component.css']
})
export class TooComponent implements OnInit {
@Input() name: string;
  constructor() { }
  un='';pass='';
  ngOnInit(): void {
  }

}
