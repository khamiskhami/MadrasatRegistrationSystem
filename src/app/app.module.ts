import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './nav/home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FirstComponent } from './first/first.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { RegistrationService } from './services/registration.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminCreateMadrasatComponent } from './admin-create-madrasat/admin-create-madrasat.component';
import { AdminViewAllMadrasaComponent } from './admin-view-all-madrasa/admin-view-all-madrasa.component';
import { AdminUpdateMadrasaComponent } from './admin-update-madrasa/admin-update-madrasa.component';
import { LoginComponent } from './login/login.component';
import { LoganComponent } from './logan/logan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent,
    MainpageComponent,
    FooterComponent,
    WelcomeComponent,
    RegistrationComponent,
    ViewReportComponent,
    AdminDashboardComponent,
    AdminCreateMadrasatComponent,
    AdminViewAllMadrasaComponent,
    AdminUpdateMadrasaComponent,
    LoginComponent,
    LoganComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
