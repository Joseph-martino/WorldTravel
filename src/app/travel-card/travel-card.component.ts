import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Travel } from '../models/travel.model';

@Component({
  selector: 'app-travel-card',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.scss']
})
export class TravelCardComponent {
  @Input() travel!: Travel;

  constructor(private router: Router){

  }

  onContinue(){
    this.router.navigateByUrl(`travels/${this.travel.id}`);
  }

}
