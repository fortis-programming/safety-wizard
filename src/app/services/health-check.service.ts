import { Injectable } from '@angular/core';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { HealthCheckModel } from '../_shared/models/health-check.model';
import { SignupModel } from '../_shared/models/signup.model';

import { app, firestoreInit } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class HealthCheckService {
  healthCheckModel: HealthCheckModel = {
    date: '',
    symptoms: '',
    temperature: 0
  };

  userId = JSON.parse(JSON.stringify(sessionStorage.getItem('_userid')));

  constructor() { }

  async saveUserSymptoms(healthCheckData: HealthCheckModel): Promise<boolean> {
    return await setDoc(doc(firestoreInit, 'symptoms', this.userId), healthCheckData)
      .then(() => true)
      .catch(() => false);
  }

  async checkHealthSubmission(): Promise<boolean> {
    const docSnap = await getDoc(doc(firestoreInit, 'symptoms', this.userId));
    return (docSnap.exists() ? Date.parse(docSnap.data()['date']) > 60 * 60 * 24 * 1000 : false) as boolean;
  }

  async getHealthStatus(): Promise<HealthCheckModel> {
    const docSnap = await getDoc(doc(firestoreInit, 'symptoms', this.userId));
    return (docSnap.exists() ? docSnap.data() : {}) as HealthCheckModel;
  }

  async getUserInformation(userId: string): Promise<SignupModel> {
    const docSnap = await getDoc(doc(firestoreInit, 'users', userId));
    return (docSnap.exists() ? docSnap.data() : {}) as SignupModel
  }

  async checkUserHealth(userId: string): Promise<HealthCheckModel> {
    const docSnap = await getDoc(doc(firestoreInit, 'symptoms', userId));
    return (docSnap.exists() ? docSnap.data() : {}) as HealthCheckModel;
  }
}