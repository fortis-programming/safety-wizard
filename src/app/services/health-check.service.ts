import { Injectable } from '@angular/core';
import { collection, doc, getDoc, onSnapshot, query, setDoc, where } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { GetEstablishmentModel } from '../_shared/get-establishment.model';
import { ActivityLogModel } from '../_shared/models/activitylog.model';
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
    return (docSnap.exists() ? (Date.now() - Date.parse(docSnap.data()['date'])) >= (60 * 60 * 24 * 1000) : false) as boolean;
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

  async saveActivityToLogs(activityLogData: ActivityLogModel): Promise<boolean> {
    console.log(activityLogData)
    await this.getEstablishmentDetails(JSON.parse(JSON.stringify(sessionStorage.getItem('_userid'))))
      .then((response) => {
        activityLogData.address = response.homeAddress;
        activityLogData.establishmentDescription = response.establishmentDescription;
        activityLogData.establishmentId = JSON.parse(JSON.stringify(sessionStorage.getItem('_userid')));
      });

    return await setDoc(doc(collection(firestoreInit, 'logs')), activityLogData)
      .then(() => true)
      .catch(() => false);
  }

  async getEstablishmentDetails(userId: string): Promise<GetEstablishmentModel> {
    const docSnap = await getDoc(doc(firestoreInit, 'users', userId));
    return (docSnap.exists() ? docSnap.data() : {}) as GetEstablishmentModel;
  }

  activityLogList: ActivityLogModel[] = [];
  async getUserActivityLogs(): Promise<ActivityLogModel[]> {
    this.activityLogList = [];
    const q = query(collection(firestoreInit, 'logs'), where('userId', '==', JSON.parse(JSON.stringify(sessionStorage.getItem('_userid')))));
    await onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.activityLogList.push(JSON.parse(JSON.stringify(doc.data())));
      });
    });
    return this.activityLogList;
  }
}