import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { SettingId, Setting } from '../models/setting';

import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class SettingService {
  private dashboardSettingDoc: AngularFirestoreDocument<Setting>;
  settings: Observable<Setting>;
  private servicesSettingCollection: AngularFirestoreCollection<Setting>;
  services: Observable<SettingId[]>;
  private iconsSettingCollection: AngularFirestoreCollection<Setting>;
  iconsSetting: Observable<SettingId[]>;

  constructor(private afs: AngularFirestore) {
    this.dashboardSettingDoc = afs.doc<Setting>('/settings/bPQW62E5SKpoRKVcDVQJ');
    this.settings = this.dashboardSettingDoc.valueChanges();
    this.servicesSettingCollection = afs.collection<Setting>('/settings/bPQW62E5SKpoRKVcDVQJ/services');
    this.services = this.servicesSettingCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Setting;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    this.iconsSettingCollection = afs.collection<Setting>('/settings/bPQW62E5SKpoRKVcDVQJ/icons');
    this.iconsSetting = this.iconsSettingCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Setting;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  updateSetting(data: Setting) {
    this.dashboardSettingDoc.update(data).then(function(){
      console.log('Document successfully updated!');
    });
  }

  updateServiceDescription(data: Setting) {
    this.dashboardSettingDoc.update(data).then(function(){
      console.log('Document successfully updated!');
    });
  }

  addService(data: Setting) {
    this.servicesSettingCollection.add(data)
    .then(function(docRef){
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function(error){
      console.error('Error adding document: ', error);
    });
  }

  deleteService(key: SettingId) {
    this.servicesSettingCollection.doc(key.id).delete().then(function(){
      console.log('Document successfully deleted!');
    }).catch(function(error){
      console.error('Error removing document: ', error);
    });
  }

}
