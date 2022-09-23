import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MadrasaRegistration } from '../madrasaClass/madrasa-registration';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-admin-update-madrasa',
  templateUrl: './admin-update-madrasa.component.html',
  styleUrls: ['./admin-update-madrasa.component.css']
})
export class AdminUpdateMadrasaComponent implements OnInit {
  id!: number;

  madrasatCreate: MadrasaRegistration = new MadrasaRegistration();

  constructor(private registrationService: RegistrationService, private routes: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.registrationService.getMardasaById(this.id).subscribe(data =>{
      this.madrasatCreate = data;
    },
    error => console.log(error));
  }

  // saveMadrasat(){
  //   this.registrationService.createAdminMadrasat(this.madrasatCreate).subscribe(data=>{
  //     console.log(data);
  //     this.goToViewMadrasa();
  //   },
  //     error => console.log(error));
  // }

  goToViewMadrasa(){
    this.routes.navigate(['/adminviewall']);
  }

  onSubmit(){
    this.registrationService.updateAminMadrasat(this.id, this.madrasatCreate).subscribe(data=>{
      console.log(data);
      this.goToViewMadrasa();
    },
      error => console.log(error));
  }

}
