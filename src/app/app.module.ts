import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MdPreviewComponent } from 'src/app/component/md-preview/md-preview.component';
import { NavbarComponent } from 'src/app/component/navbar/navbar.component';
import { FooterComponent } from 'src/app/component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MdPreviewComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
