import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuretreeComponent } from './components/suretree/suretree.component';
import { PostService } from './components/service';
@NgModule({
  declarations: [AppComponent, HeaderComponent, ApplicationFormComponent, SuretreeComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule,NgxSliderModule,ReactiveFormsModule,MatMenuModule, BrowserAnimationsModule],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
