import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Output() rated = new EventEmitter<number>()
  rates: number[] = [1, 2, 3, 4, 5]
  rate: number = 0
  previusRate: number

  ngOnInit() {
  }

  setRate(r: number) {
    this.rate = r
    this.previusRate = undefined
    this.rated.emit(this.rate)
  }

  setTemporaryRate(r: number) {
    if (this.previusRate == null) {
      this.previusRate = this.rate
    }
    this.rate = r
  }

  clearTemporaryRate() {
    if (this.previusRate != null) {
      this.rate = this.previusRate
      this.previusRate = undefined
    }
  }
}