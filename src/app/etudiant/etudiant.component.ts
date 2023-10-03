import { Component, OnInit } from '@angular/core';
import {Etudiant} from './etudiant' ;
import {Etudiants} from './liste-etudiants'
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
etudiants_l = Etudiants;
selectedEtudiant: Etudiant = {} as Etudiant;

constructor(){}
  ngOnInit(): void{

  }
OnSelect(etudiant:Etudiant):void{
  this.selectedEtudiant=etudiant;
}
  /*etudiant: etudiant={
    id:1,
    name:'Ali',
    lastname:'ben Saleh',
    date:new Date("11-09-2003"),
    average:16
  }*/
  }


