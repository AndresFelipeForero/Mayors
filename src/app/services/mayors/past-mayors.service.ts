import { Injectable } from '@angular/core';
import { PastMayors } from '../../models/past-mayor';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class PastMayorsService {
  constructor(private firestore: Firestore) {}

  addPastMayor(pastMayor:PastMayors, collectionName: string) {
    const pastMayorsRef = collection(this.firestore, collectionName);
    return addDoc(pastMayorsRef, pastMayor);
  }

}
