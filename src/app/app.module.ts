import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProviderListModule } from './provider-list/provider-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProviderListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
