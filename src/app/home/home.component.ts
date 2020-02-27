import { TemplateRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }
  first = ''; class = ''; last = ''; tmpFirst = ''; tmpClass = ''; tmpLast = '';
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  Table = [
    {
      First: 'Mark',
      Last: 'Otto',
      Class: '2a'
    },
    {
      First: 'Jacob',
      Last: 'Otto',
      Class: '3a'
    },
    {
      First: 'Jacob',
      Last: 'Otto',
      Class: '2a'
    },

  ]
  ngOnInit(): void {
    console.log();
  }
  add() {
    console.log();
    this.tmpFirst = this.first; this.first = '';
    this.tmpClass = this.class; this.class = '';
    this.tmpLast = this.last; this.last = '';
    let table = {  //create a format for the array
      First: this.tmpFirst,
      Last: this.tmpLast,
      Class: this.tmpClass
    }

    this.Table.push(table); //add into array
    this.modalRef.hide();
  }
  del(index){
    console.log(index);
    this.Table.splice(index, 1);
    
  }
  edit(index){
    
    console.log(this.Table[index])
    this.Table[index].First=this.first;
    this.Table[index].Class=this.class;
    this.Table[index].Last=this.last;
    this.modalRef.hide();

    
  }
  openEditDialog(index){
    this.first=this.Table[index].First;
    this.class=this.Table[index].Class;
    this.last=this.Table[index].Last;

  }

}
