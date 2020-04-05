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
  stepLabel: string;
  wizard: WizardService;

  constructor(wizard: WizardService) {
    this.stepNumber = wizard.getCurrentStep();
    this.stepLabel = wizard.getStepLabel();
  }

  ngOnInit() {

  }

}