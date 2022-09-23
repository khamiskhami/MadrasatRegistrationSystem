import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService: RegistrationService) {}

  register(madrasatForm: NgForm){
    this.registrationService.registerStudent(madrasatForm.value).subscribe(
      (resp)=>{
        console.log(resp);
        madrasatForm.reset();
        alert("Umefanikiwa Kusajili Madrasat, Tafadhali endelea na huduma nyengine");
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }

}
