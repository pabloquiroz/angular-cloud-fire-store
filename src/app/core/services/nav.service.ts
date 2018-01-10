import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Navigation, NavigationId } from '../models/navigation';
import { Setting } from '../../shared/models';

@Injectable()
export class NavService {
  private navBarCollection: AngularFirestoreCollection<Navigation>;
  navBar: Observable<NavigationId[]>;
  private navListCollection: AngularFirestoreCollection<Navigation>;
  navList: Observable<NavigationId[]>;
  private dashboardSettingDoc: AngularFirestoreDocument<Setting>;
  settings: Observable<Setting>;

  constructor( private readonly afs: AngularFirestore ) {
    this.navBarCollection = afs.collection<Navigation>('/navigation/XPBPD1obtlsy478SY7eR/navbar');
    this.navListCollection = afs.collection<Navigation>('/navigation/XPBPD1obtlsy478SY7eR/navlist');
    this.dashboardSettingDoc = afs.doc<Setting>('/settings/bPQW62E5SKpoRKVcDVQJ');

    this.navBar = this.navBarCollection.snapshotChanges().map(actions => {
      return actions.map( a => {
        const data = a.payload.doc.data() as Navigation;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    this.navList = this.navListCollection.snapshotChanges().map(actions => {
      return actions.map( a => {
        const data = a.payload.doc.data() as Navigation;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    this.settings = this.dashboardSettingDoc.valueChanges();
  }
}
