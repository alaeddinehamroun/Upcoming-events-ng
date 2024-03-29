import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { ISession } from "../shared/event.model";



@Injectable() 
export class VoterService {
    constructor(private http: HttpClient){}
    deleteVoter(eventId: number, session: ISession, voterName: string){
        session.voters = session.voters.filter(voter => voter !== voterName);
        
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.delete(url).pipe(catchError(this.hanedleError('deleteVoter'))).subscribe();
    }
    addVoter(eventId: number, session: ISession, voterName: string){
        session.voters.push(voterName);

        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        const options = { headers: new HttpHeaders({'content-type': '/application/json'})} 
        
        this.http.post(url, {}, options).pipe(catchError(this.hanedleError('addVoter'))).subscribe();
    }
    userHasVoted(session: ISession, voterName: string){
        return session.voters.some(voter => voter === voterName)
    }


    private hanedleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        }
      }
}