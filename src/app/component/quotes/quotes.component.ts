import { Component, OnInit } from '@angular/core';

import { Quoteclass } from 'src/app/quoteclass';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  quotes: Quoteclass[] = [ 
    new Quoteclass('A friend is someone who knows all about you and still loves you.', 'Elbert Hubbard', 'Lizbeth Wangu',  0, 0, new Date(2020, 12, 5)),
    new Quoteclass('If you can make a woman laugh, you can make her do anything.', 'Marilyn Monroe', 'Lyn Adelaide',  0, 0, new Date(2020, 12, 5)),
   new Quoteclass('I have no notion of loving people by halves, it is not my  nature.', 'Jane Austen', 'Edrea Leslie',  0, 0, new Date(2020, 12, 5)),
   new Quoteclass('It is not a lack of love, but a lack of friendship that makes unhappy marriages.', 'Friedrich Nietzsche', 'Charlene Rose',  0, 0, new Date(2020, 12, 5)),
   new Quoteclass('The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.', ' Bob Marley', 'Albert Austen',  0, 0, new Date(2020, 12, 5)),
   
  ];

  

  constructor() { }

  ngOnInit(): void {
  }

}
