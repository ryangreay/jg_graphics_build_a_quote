import { Component, OnInit } from '@angular/core';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  private stepNumber: number;
  private stepLabel: string;

  constructor(wizard: WizardService) {
    this.stepNumber = wizard.getCurrentStep();
    this.stepLabel = wizard.getStepLabel();
   }

  ngOnInit() {

  }

}