import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { QuotesComponent } from './component/quotes/quotes.component';
import { FormComponent } from './component/form/form.component';
import { HighlightsDirective } from './directives/highlights.directive';
import { QuoteDetailsComponent } from './component/quote-details/quote-details.component';
import { daysPassedPipe } from './pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuotesComponent,
    FormComponent,
    HighlightsDirective,
    QuoteDetailsComponent,
    daysPassedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
