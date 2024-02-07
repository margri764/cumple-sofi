import { Component } from '@angular/core';
import * as moment from 'moment';
import { SessionService } from './session.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cumple';

  private destroy$ = new Subject<void>();
  sessionTimeRemaining!: number;
  
 arrPicture : any []=[
    {
      path: 'assets/foto-1.jpg'
    },
    {
      path: 'assets/foto-2.jpg'
    }
  ]



constructor(
  private sessionService : SessionService,
){

}

  ngOnInit() {

    this.sessionService.startSession();

    this.sessionService.getClock()
    .pipe(takeUntil(this.destroy$)).subscribe((timeRemaining: number) => {
  
      this.sessionTimeRemaining = timeRemaining;
  });


   
  }
  getDays(milliseconds: number): number {
    return Math.floor(milliseconds / (24 * 60 * 60 * 1000));
  }
  
  getHours(milliseconds: number): number {
    return Math.floor((milliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  }
  
  getMinutes(milliseconds: number): number {
    return Math.floor((milliseconds % (60 * 60 * 1000)) / (60 * 1000));
  }

  getSeconds(milliseconds: number): number {
    return Math.round((milliseconds % (60 * 1000)) / 1000);
 }

  
  
  

}
