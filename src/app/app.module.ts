import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SiteFooterComponent } from './SharedComponent/site-footer/site-footer.component';
import { SiteHeaderComponent } from './SharedComponent/site-header/site-header.component';
import { HomeComponent } from './Pages/home/home.component';
import { SliderComponent } from './Pages/home/slider/slider.component';
import { ProjectComponent } from './Pages/home/project/project.component';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RejesterProjectComponent } from './Pages/home/rejester-project/rejester-project.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectService } from './services/project.service';
import { SliderService } from './services/slider.service';
import { CompanyInterceptor } from './Utilities/CompanyInterceptor';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Pages/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    HomeComponent,
    SliderComponent,
    ProjectComponent,
    RejesterProjectComponent,
    ContactUsComponent,   
    AboutUsComponent,
     RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [ProjectService,SliderService,AuthService
    ,{
    provide:HTTP_INTERCEPTORS,
    useClass:CompanyInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
