import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlToPdfComponent } from './html-to-pdf/html-to-pdf.component';
import { CountryStateComponent } from './caching/country-state/country-state.component';
import { FormsModule } from '@angular/forms';
import { CacheInterceptor } from './caching/core/cache.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HtmlToPdfComponent,
    CountryStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:CacheInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
