import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private firestore:AngularFirestore) { }

  getEmployees() {
    return this.firestore.collection('usuarios').snapshotChanges();
}

getVacinas() {
  return this.firestore.collection('vacinas').snapshotChanges();
}

createVacinas(record){

  return this.firestore.collection('vacinas').add(record);
}

 getAllCard(id:string):Observable<any>{
  return this.firestore.collection('cardVacinas').doc(id).snapshotChanges();
}

 addCardVacinas(record, id){
  return this.firestore.collection('cardVacinas').doc(id).update({ vacinas:record })
}

sla(){
  return this.firestore.collection('cardVacinas').doc;
}



}
