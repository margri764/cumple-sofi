import { Injectable } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

    private clock$: Observable<number>;
    private sessionStartTime!: Date;
  
    constructor() {


  
      this.clock$ = interval(1000).pipe(
        map(() => this.getSessionTimeRemaining())
      );
     
     }


  
     getClock(): Observable<number> {
      return this.clock$;
    }
    

    startSession(): void {
      this.sessionStartTime = new Date();
  
    }
    getSessionTimeRemaining(): number {
      const now = new Date();
      const sessionEndTime = new Date('2024-03-08T22:00:00'); // Fecha y hora de finalización de la sesión
      const elapsedTime = now.getTime() - this.sessionStartTime.getTime();
      const timeRemaining = sessionEndTime.getTime() - (this.sessionStartTime.getTime() + elapsedTime);
      return timeRemaining > 0 ? timeRemaining : 0;
    }
    
    
 
  }
  