import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-specialemployes',
  templateUrl: './specialemployes.component.html',
  styleUrls: ['./specialemployes.component.css']
})
export class SpecialemployesComponent implements OnInit {
  poste: string ="";
  employes: Employe[];

  constructor(private employeService:EmployeService) { }

  ngOnInit(): void {}
    lister(ch:string) {

      this.employes = this.employeService.getSpecialEmployes(ch);
  }


}