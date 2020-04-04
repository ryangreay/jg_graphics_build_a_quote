import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { StepContentComponent } from './step-content/step-content.component';
import { ProductViewComponent } from './product-view/product-view.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderNavComponent, StepContentComponent, ProductViewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
