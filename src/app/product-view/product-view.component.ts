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

  constructor(wizard: WizardService) {
    this.wizard = wizard;
    this.selectedProduct = this.wizard.getProductSelection();
   }

  ngOnInit() {
  }

  getStep(){
    return this.wizard.getCurrentStep();
  }

  selectProduct(product: string){
    this.wizard.setProductSelection(product);
    this.selectedProduct = product;
  }
}