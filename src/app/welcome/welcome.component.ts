import { Component, OnInit } from '@angular/core';
import { MadrasaRegistration } from '../madrasaClass/madrasa-registration';
import { Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  madrasat: MadrasaRegistration=new  MadrasaRegistration();

  constructor(private routes:Router){ }

  ngOnInit(): void {
  }
  viewMadrasa(madId: number){
    this.routes.navigate(['view/:id', madId]);
  }

}
