import { AnimalService } from './../animal.service';
import { animal } from './../animal';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  providers:[AnimalService, HttpClient],
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() animal: animal;
  constructor(private route: ActivatedRoute,
    private animalService: AnimalService,) { }

  ngOnInit() {
    this.getAnimal();
  }

  getAnimal() :void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.animalService.getAnimal(id)
      .subscribe(animal => this.animal = animal);
  }

}
