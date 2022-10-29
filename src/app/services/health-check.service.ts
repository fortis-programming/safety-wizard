import { Injectable } from '@angular/core';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { HealthCheckModel } from '../_shared/models/health-check.model';

import { app, firestoreInit } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class HealthCheckService {

  constructor() { }

  healthCheckModel: HealthCheckModel = {
    date: '',
    symptoms: '',
    temperature: 0
  };

  userId = JSON.parse(JSON.stringify(sessionStorage.getItem('_userid')));

  async saveUserSymptoms(healthCheckData: HealthCheckModel): Promise<boolean> {
    return await setDoc(doc(firestoreInit, 'symptoms', this.userId), healthCheckData)
      .then(() => true)
      .catch(() => false);
  }

  async checkHealthSubmission(): Promise<boolean> {
    const docRef = doc(firestoreInit, 'symptoms', this.userId);
    const docSnap = await getDoc(docRef);

    this.healthCheckModel = JSON.parse(JSON.stringify(docSnap.data()));
    if (docSnap.exists()) {
      return Date.parse(this.healthCheckModel.date) > 60 * 60 * 24 * 1000;
    }
    else {
      return false;
    }
  }

  async getHealthStatus(): Promise<HealthCheckModel> {
    const docRef = doc(firestoreInit, 'symptoms', this.userId);
    const docSnap = await getDoc(docRef);

    this.healthCheckModel = JSON.parse(JSON.stringify(docSnap.data()));
    if (docSnap.exists()) {
      return docSnap.data() as HealthCheckModel;
    }
    else {
      return this.healthCheckModel;
    }
  }
}
