import { HttpClient, HttpHandler } from '@angular/common/http';
import { AnimalService } from './../animal.service';
import { ANIMALS } from './../mock-animals';
import { animal } from './../animal';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  providers:[AnimalService,HttpClient],
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals= ANIMALS;
  selectedanimal: animal;
  // selectedanimal: animal= {
  //   id:1,
  //   name:'Cat',
  //   noise:'meow'
  // }
  
  

  onSelect(id:number): void{
    this.selectedanimal.id=id;
    
  }
  
  constructor() { }

  ngOnInit() {
  }
  
}
