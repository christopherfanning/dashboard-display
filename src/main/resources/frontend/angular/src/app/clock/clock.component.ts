import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  hours: any;
  minutes: any;
  seconds: any;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      let time = new Date();
      this.updateTime(time);
    }, 1000)
    }

    private updateTime(time: any){
      console.log("This is my hair");
      this.hours = time.getHours();
      this.minutes = time.getMinutes();
      this.seconds = time.getSeconds();
  }

}
