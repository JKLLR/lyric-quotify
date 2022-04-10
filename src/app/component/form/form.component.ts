import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quoteclass } from 'src/app/quoteclass';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQuote= new Quoteclass("", "", "", 0, 0, new Date())
  @Output() addQuote = new EventEmitter<Quoteclass>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
    this.newQuote= new Quoteclass("", "", "", 0, 0, new Date());

  }


  constructor() { }

  ngOnInit(): void {
  }

}
