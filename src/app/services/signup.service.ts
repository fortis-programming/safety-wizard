import { Injectable } from '@angular/core';
import { app, firestoreInit } from './firebase.service';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { SignupModel } from '../_shared/models/signup.model';

const auth = getAuth(app);

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
  ) { }

  isAuthenticated() {
    return !!sessionStorage.getItem('_token');
  }

  async loginUser(email: string, password: string): Promise<string> {
    return new Promise<string>(async (resolve) => {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          sessionStorage.setItem('_userid', user.uid);

          this.getUserStatus(user.uid).then(response => {
            sessionStorage.setItem('_isScanner', response);
          });

          resolve(JSON.parse(JSON.stringify(user.refreshToken)));
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          resolve(JSON.parse(JSON.stringify(errorCode)));
        });
    });
  }

  async getUserStatus(userId: string): Promise<string> {
    const docSnap = await getDoc(doc(firestoreInit, 'users', userId));
    return (docSnap.exists() ? docSnap.data()['isScanner'] : '');
  }

  async signUpUser(email: string, password: string, userInformation: SignupModel): Promise<string> {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        this.saveUserInformation(user.uid, userInformation);
        return user.refreshToken;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage;
      })
  }

  async saveUserInformation(userId: string, signupData: SignupModel): Promise<string> {
    return await setDoc(doc(firestoreInit, 'users', userId), signupData)
      .then((response) => response)
      .catch((error) => error.message);
  }
}
