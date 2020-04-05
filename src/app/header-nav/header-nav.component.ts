import { Component, OnInit } from '@angular/core';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css'],
  providers: [WizardService]
})
export class HeaderNavComponent implements OnInit {
  stepNumber: number;
  nextDisabled: boolean;
  stepLabel: string;
  wizard: WizardService;

  constructor(wizard: WizardService) {
    this.wizard = wizard;
    this.stepNumber = wizard.getCurrentStep();
    this.stepLabel = wizard.getStepLabel();
    this.nextDisabled = 
      (this.stepNumber == 1 && wizard.getProductSelection() == null) || 
      (this.stepNumber == 2 && wizard.getQualitySelection() == null) || 
      (this.stepNumber == 3 && wizard.getFitSelection() == null) ||
      (this.stepNumber == 4 && wizard.getColorSelection() == null) || 
      (this.stepNumber == 5 && wizard.getArtworkLocations() == null) || 
      (this.stepNumber == 6 && wizard.getArtworkQuantities() == null) || 
      (this.stepNumber == 7 && wizard.getQ() == null);
  }

  ngOnInit() {

  }

  navigateToNextStep(){
    this.wizard.setCurrentStep(this.stepNumber + 1);
  }

  navigateToPreviousStep(){
    this.wizard.setCurrentStep(this.stepNumber - 1);
  }

}