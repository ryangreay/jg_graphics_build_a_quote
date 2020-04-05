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
  private wizard: WizardService;

  constructor(wizard: WizardService) {
    this.wizard = wizard;
    this.stepNumber = this.wizard.getCurrentStep();
    this.stepLabel = this.wizard.getStepLabel();
    this.nextDisabled = 
      (this.stepNumber == 1 && this.wizard.getProductSelection() == null) || 
      (this.stepNumber == 2 && this.wizard.getQualitySelection() == null) || 
      (this.stepNumber == 3 && this.wizard.getFitSelection() == null) ||
      (this.stepNumber == 4 && this.wizard.getColorSelection() == null) || 
      (this.stepNumber == 5 && this.wizard.getArtworkLocations() == null) || 
      (this.stepNumber == 6 && this.wizard.getArtworkQuantities() == null) || 
      (this.stepNumber == 7 && this.wizard.getQuantity() == null);
  }

  ngOnInit() {

  }

  navigateToNextStep(){
    this.stepNumber = this.wizard.setCurrentStep(this.stepNumber + 1);
  }

  navigateToPreviousStep(){
    this.wizard.setCurrentStep(this.stepNumber - 1);
  }

}