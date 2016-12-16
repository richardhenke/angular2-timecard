import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  startTime: Time;
  endTime: string;
  diffTime: string;
  totalTimeWorked: Time;

  constructor() {
    this.startTime = this.stringToTime("08:00:00");
    this.endTime = new Time().timeHM;
    // this.getDiffTime();
    this.totalTimeWorked = this.stringToTime("08:15:55");
  }

  advanceHour() {
    this.startTime.hours = this.startTime.hours;
    // TODO Fix this it isn't right!
  }

  advanceMinute() {
    this.startTime.minutes += 1;
    // TODO Fix this it isn't right!
  }

  getDiffTime(startTime: Time, endTime: Time) {
    return setInterval(this.getUpdate(), 1);
  }

  public getUpdate() {
    this.diffTime = new Time().timeHMS;
  }

  /** Converts a String '08:00:00' into a total Number of minutes */
  timeSplice(time: string) {
    let stringTime = time.split(":");
    return (Number(stringTime[0]) * 60) + Number(stringTime[1]);
  }

  timeNumberToString(time: number) {
    // ToDo take the total number of seconds and convert them back to a Time object


  }

  /** Converts the Time object to a total number of seconds */
  timeStringToNumber(time: string) {
    let stringTime = time.split(":");
    return (((Number(stringTime[0]) * 60) + Number(stringTime[1])) * 60) + Number(stringTime[2]);
  }

  stringToTime(time: string) {
    let stringTime = time.split(":");
    let timeObj = new Time();
    timeObj.hours = stringTime[0];
    timeObj.minutes = stringTime[1];
    if (stringTime.length > 2) {
      timeObj.seconds = stringTime[2];
    }
    return timeObj
  }

}

class Time {
  seconds: string;
  minutes: string;
  hours: string;
  timeHM: string;
  timeHMS: string;
  constructor(time?: String) {
    this.hours = "";
    this.minutes = "";
    this.seconds = "";
  }

  timeNow() {
    let d = new Date();
    let t = new Time();
    this.hours = (d.getHours() < 10 ? '0' : '') + d.getHours();
    this.minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    this.seconds = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
  }

  getHM() {
    return this.timeHM = this.hours + ":" + this.minutes;
  }
  getHMS() {
    this.timeHMS = this.hours + ":" + this.minutes + ":" + this.seconds;
  }

  timeToNumberOfSeconds(time: Time) {
    return ((Number(time.hours) * 60) + Number(time.minutes)) * 60 + Number(time.seconds);
  }

  toString() {
    return this.hours + ":" + this.minutes + ":" + this.seconds;
  }
}


