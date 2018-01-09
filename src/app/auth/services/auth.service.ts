import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Authenticate } from '../models/user';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  error: string;

  constructor(private firebaseAuth: AngularFireAuth,  private router: Router) {
  }

  login({email, password}: Authenticate) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked');
        this.router.navigateByUrl('/dashboard');
      })
      .catch(error => {
        this.error = error;
        console.log('Something went wrong:', error);
      });
  }

  logout() {
    this.firebaseAuth.auth.signOut()
      .then(value => {
        console.log('Logout');
      });
  }

  authState() {
    return this.firebaseAuth.authState;
  }


}
