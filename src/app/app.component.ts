import { Component } from '@angular/core';
import {map, Subject, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRxJs';

  public button1Click$: Subject<string> = new Subject<string>();
  public button2Click$: Subject<number> = new Subject<number>();

  public log: string[] = [];
  private _btn2Counter = 0;

  constructor() {
    // код пишем только тут в конструкторе
    this.button1Click$
      .pipe()
      .subscribe((value) => this.log.push(value.toString()));

    this.button2Click$
      .pipe(
          map((value) => value * 10),
          map((value, index) => value + index)
      )
      .subscribe((value) => this.log.push(value.toString()));
  }

  button1Click() {
    this.button1Click$.next(new Date().toISOString());
  }

  button2Click() {
    this.button2Click$.next(this._btn2Counter++);

  }
}
