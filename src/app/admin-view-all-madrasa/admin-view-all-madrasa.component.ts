import { Component, OnInit } from '@angular/core';
import { MadrasaRegistration } from '../madrasaClass/madrasa-registration';
import { RegistrationService } from './../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view-all-madrasa',
  templateUrl: './admin-view-all-madrasa.component.html',
  styleUrls: ['./admin-view-all-madrasa.component.css']
})
export class AdminViewAllMadrasaComponent implements OnInit {
  madrasat!: MadrasaRegistration[];

  constructor(private registrationService: RegistrationService, private routes: Router) { }

  ngOnInit(): void {
    this.getMadrasatAll();
  }

  private getMadrasatAll(){
    this.registrationService.getAllMadrasat().subscribe(data =>{
      this.madrasat = data;
    });
  }

  updateMadrasa(madId: number){
    this.routes.navigate(['adminupdates', madId]);
  }

  // deleteMadrasa(madId: number){
  //   this.registrationService.deleteMadrasa(madId).subscribe(data =>{
  //     console.log(data);
  //     this.getMadrasatAll();
  //   });
  // }
}
