import { Injectable } from '@angular/core';
import { PastMayor } from '../../models/past-mayor';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PastMayorsService {
  constructor(private firestore: Firestore) {}

  addPastMayor(pastMayor:PastMayor, collectionName: string) {
    const pastMayorsRef = collection(this.firestore, collectionName);
    return addDoc(pastMayorsRef, pastMayor);
  }

  getMayor(collectionName: string):Observable<PastMayor[]>{
    const pastMayorsRef = collection(this.firestore, collectionName);
    return collectionData(pastMayorsRef) as Observable<PastMayor[]>
  }

}
