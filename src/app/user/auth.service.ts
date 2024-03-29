import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { catchError, first, tap } from "rxjs/operators";
import { IUser } from "./user.model";


@Injectable()

export class AuthService {
    currentUser: IUser | any;

    constructor(private http: HttpClient){}
    loginUser(userName: string, password: string){
        let loginInfo = { username: userName, password: password};
        let options = {headers: new HttpHeaders({'Content-type': 'application/json'})}

        return this.http.post<IUser>('/api/login', loginInfo, options).pipe(catchError(err => {
            return of(false)
        })).pipe(tap(data => {
         //to be fixed
            this.currentUser = <IUser>data
            console.log(this.currentUser)
            // this.currentUser = {
            //     id: 1,
            //     userName: userName,
            //     firstName: 'gg',
            //     lastName: "dd"
            // }
        }))
        
    }
    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthenticationStatus(){
        this.http.get('/api/currentIdentity').pipe(tap(data => {
                if (data instanceof Object){
                    this.currentUser = <IUser>data
                }
            }
       ))
       .subscribe()
    }




    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
        let options = {headers: new HttpHeaders({'Content-type': 'application/json'})}
        return this.http.put(`/api/users/${this.currentUser.id}`,this.currentUser, options)
    }

    logout(){
        this.currentUser = undefined
        let options = {headers: new HttpHeaders({'Content-type': 'application/json'})}
        return this.http.post('/api/logout', {}, options)
    }
}