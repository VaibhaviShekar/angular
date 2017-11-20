import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input('startingValue')
  counter=0;

  @Input()
  counterId;

  @Output()
  counterClick:EventEmitter<number> =new EventEmitter();
  

  constructor() { }

  ngOnInit() {
  }

  
  Increment(e)
  {
    this.counter++;
    this.raise()
  }
  Decrement(e)
  {
    this.counter--;
    this.raise()
  }

  raise()
  {
    this.counterClick.emit(this.counterId);
  }
}
