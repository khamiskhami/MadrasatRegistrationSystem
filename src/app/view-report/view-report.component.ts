import { Component, OnInit } from '@angular/core';
import { MadrasaRegistration } from '../madrasaClass/madrasa-registration';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {
  madrasat:MadrasaRegistration = new MadrasaRegistration();

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    // this.getMadrasat(); 
  }

  
  // getMadrasat(){
  //   this.registrationService.getMadrasa().subscribe(response=>{
  //     // this.madrasat=response;
  //   },
  //   error=>console.log(error));
  // }

}
