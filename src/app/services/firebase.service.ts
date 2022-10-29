import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from 'src/environments/environment.prod';
import { getFirestore } from 'firebase/firestore';

export const app = initializeApp(firebaseConfig);
export const firestoreInit = getFirestore(app);
const analytics = getAnalytics(app);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }
}
