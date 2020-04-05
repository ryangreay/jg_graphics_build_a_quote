import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class WizardService {
  private currentStep: number;
  private productSelection: string;
  private qualitySelection: string;
  private fitSelection: string;
  private colorSelection: string;
  private artworkLocations: number;
  private artworkQuantities: number;
  private quantity: number;
  private currentPrice: number;

  constructor() { this.currentStep = 1; }

  getCurrentStep(){return this.currentStep; }
  setCurrentStep(step: number){this.currentStep = step; }
  getStepLabel(){
    if (this.currentStep == 1)
      return "Your Product";
    else if (this.currentStep == 2)
      return "Product Quality";
    else if (this.currentStep == 3)
      return "Product Fit";
    else if (this.currentStep == 4)
      return "Product Color";
    else if (this.currentStep == 5)
      return "Logo Location Amount";
    else if (this.currentStep == 6)
      return "Logo Color Amounts";
    else if (this.currentStep == 7)
      return "Item Order Quantities";
  }

  getProductSelection(){return this.productSelection;}
  setProductSelection(product:string){this.productSelection = product;}

  getQualitySelection(){return this.qualitySelection;}
  setQualitySelection(quality:string){this.qualitySelection = quality;}

  getFitSelection(){return this.fitSelection;}
  setFitSelection(fit:string){this.fitSelection = fit;}

  getColorSelection(){return this.colorSelection;}
  setColorSelection(color:string){ this.colorSelection = color;}

  getArtworkLocations(){return this.artworkLocations; }
  setArtworkLocations(artworkLocation:number){this.artworkLocations = artworkLocation;}

  getArtworkQuantities(){return this.artworkQuantities;}
  setArtworkQuantites(artworkQuantity:number){this.artworkQuantities = artworkQuantity;}

  getQuantity(){return this.quantity;}
  setQuantity(quantity:number){this.quantity = quantity;}

  getCurrentPrice(){return this.currentPrice;}
  setCurrentPrice(price:number){this.currentPrice = price;}

}