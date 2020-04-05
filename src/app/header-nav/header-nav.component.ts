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
    this.getWizardValues();
  }

  ngOnInit() {

  }

  navigateToNextStep(){
    this.wizard.setCurrentStep(this.stepNumber + 1);
    this.getWizardValues();
  }

  navigateToPreviousStep(){
    this.wizard.setCurrentStep(this.stepNumber - 1);
    this.getWizardValues();
  }

  getWizardValues(){
    this.stepNumber = this.wizard.getCurrentStep();
    this.nextDisabled = this.wizard.nextStepDisabled();
    this.stepLabel = this.wizard.getStepLabel();
  }

}