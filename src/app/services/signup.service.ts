import { Injectable } from '@angular/core';
import { app, firestoreInit } from './firebase.service';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import { SignupModel } from '../_shared/models/signup.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const auth = getAuth(app);

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(
    private httpClient: HttpClient
  ) { }

  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   // ...
  // })
  //   .catch ((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });

  // post(): Observable<any> {
  //   return this.httpClient.post("https://baguio-visita.sds.dev/VisitaValidation.aspx/ValidateUser", JSON.stringify({
  //     id: "test-123-test-z1z2z4",
  //     userId: "test-test2",
  //     fullname: "test-tes2"
  //   }), { responseType: 'text' });
  // }

  async loginUser(email: string, password: string): Promise<string> {
    return new Promise<string>(async (resolve) => {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          sessionStorage.setItem('_userid', user.uid);
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
