import { Component, OnInit } from '@angular/core';
import { Travel } from '../models/travel.model';
import { TravelService } from '../services/travel.service';

@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.scss']
})
export class TravelsListComponent implements OnInit{
  travels!: Travel[];

  constructor(private travelService: TravelService){

  }

  ngOnInit(){
    this.travels = this.travelService.getTravelsList();
  }



}
