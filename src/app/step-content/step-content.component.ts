import { Component, OnInit } from '@angular/core';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-step-content',
  templateUrl: './step-content.component.html',
  styleUrls: ['./step-content.component.css']
})
export class StepContentComponent implements OnInit {
  wizard: WizardService;

  constructor(wizard: WizardService) {
    this.wizard = wizard;
   }

  ngOnInit() {
  }

  getProduct(){
    return this.wizard.getProductSelection();
  }

  getQuality(){
    return this.wizard.getQualitySelection();
  }

}