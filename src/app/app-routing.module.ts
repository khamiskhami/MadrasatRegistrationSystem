import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCreateMadrasatComponent } from './admin-create-madrasat/admin-create-madrasat.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUpdateMadrasaComponent } from './admin-update-madrasa/admin-update-madrasa.component';
import { AdminViewAllMadrasaComponent } from './admin-view-all-madrasa/admin-view-all-madrasa.component';
import { LoganComponent } from './logan/logan.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HomeComponent } from './nav/home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    {path:"",
    component: MainpageComponent},
    {path:"main",
    component: MainpageComponent},
    {path:"add",
    component: AdminCreateMadrasatComponent},
    {path:"regisa",
    component: RegistrationComponent},
    {path:"dashbord",
    component: AdminDashboardComponent},
    {path:"welcome",
    component: WelcomeComponent},
    {path:"home",
    component: HomeComponent},
    {path:"login",
    component: LoginComponent},
    {path:"logan",
    component: LoganComponent},
    {path:"adminviewall",
    component: AdminViewAllMadrasaComponent},
    {path:"adminupdates/:id",
    component: AdminUpdateMadrasaComponent},
    {path:"view/:id",
    component: ViewReportComponent},
    {path:"admincreate",
    component: AdminCreateMadrasatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
