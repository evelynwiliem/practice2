import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  createUser(value){
    return this.db.collection('users').add({
      first: value.name,
      last: value.last,
      class: value.class,
      
    });
  }
}