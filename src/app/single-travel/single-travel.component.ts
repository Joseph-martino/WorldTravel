import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Travel } from '../models/travel.model';
import { TravelService } from '../services/travel.service';

@Component({
  selector: 'app-single-travel',
  templateUrl: './single-travel.component.html',
  styleUrls: ['./single-travel.component.scss']
})
export class SingleTravelComponent implements OnInit{

  travel!:Travel;
  buttonText!: string;

  constructor(private travelService: TravelService, private route:ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    this.buttonText = 'Je recommande';
    const snapShotId = +this.route.snapshot.params['id'];
    this.travel = this.travelService.getTravelById(snapShotId);
  }

  onNextPicture(){
    this.travel.counter++;
    if(this.travel.counter > this.travel.images.length -1){
      this.travel.counter = 0;
    }
  }

  onPreviousPicture(){
    this.travel.counter--;
    if(this.travel.counter < 0){
      this.travel.counter = this.travel.images.length -1;
    }
  }

  onRecommandTravelById() {
    if(this.buttonText === 'Je recommande'){
      this.travelService.recommandTravelById(this.travel.id, 'recommande');
      this.buttonText = 'Je ne recommande pas';
    } else {
      this.travelService.recommandTravelById(this.travel.id, 'non-recommande');
      this.buttonText = 'Je recommande'
    }
  }

  onBackToTravelsList(){
    this.router.navigateByUrl('travels');
  }

}
