import { Component, OnInit } from '@angular/core';
import { MadrasaRegistration } from '../madrasaClass/madrasa-registration';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create-madrasat',
  templateUrl: './admin-create-madrasat.component.html',
  styleUrls: ['./admin-create-madrasat.component.css']
})
export class AdminCreateMadrasatComponent implements OnInit {
  madrasatCreate: MadrasaRegistration = new MadrasaRegistration();

  constructor(private registrationService: RegistrationService, private routes: Router) { }

  ngOnInit(): void {
    
  }

  saveMadrasat(){
    this.registrationService.createAdminMadrasat(this.madrasatCreate).subscribe(data=>{
      console.log(data);
      this.goToViewMadrasa();
    },
      error => console.log(error));
  }

  goToViewMadrasa(){
    this.routes.navigate(['/adminviewall']);
  }

  onSubmit(){
    console.log(this.madrasatCreate);
    this.saveMadrasat();
  }

}
