import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UsercredenService } from './../../services/usercreden.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private usercredenService: UsercredenService) {}

  register(registerForm: NgForm){
    this.usercredenService.registerStudent(registerForm.value).subscribe(
      (resp)=>{
        console.log(resp);
        registerForm.reset();
        alert("Ahsante kwa kujisajili, Tafadhali endelea na hatua inayofuata");
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}
