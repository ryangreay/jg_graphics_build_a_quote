import { Component, OnInit } from '@angular/core';
import { WizardService } from "../wizard.service";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  private wizard: WizardService;
  selectedProduct: string;
  selectedQuality: string;

  constructor(wizard: WizardService) {
    this.wizard = wizard;
    this.selectedProduct = this.wizard.getProductSelection();
    this.selectedQuality = this.wizard.getQualitySelection();
   }

  ngOnInit() {
  }

  getStep(){
    return this.wizard.getCurrentStep();
  }

  selectQuality(quality: string){
    this.wizard.setQualitySelection(quality);
    this.selectedQuality = quality;
  }

  selectProduct(product: string){
    this.wizard.setProductSelection(product);
    this.selectedProduct = product;
  }
}