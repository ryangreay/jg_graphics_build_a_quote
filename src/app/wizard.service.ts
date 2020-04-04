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

  constructor() { }

  getCurrentStep(){return this.currentStep; }
  setCurrentStep(step){this.currentStep = step; }
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
      return "Item Order Quant";
  }

  getProductSelection(){return this.productSelection;}
  setProductSelection(product){this.productSelection = product;}

  getQualitySelection(){return this.qualitySelection;}
  setQualitySelection(quality){this.qualitySelection = quality;}

  getFitSelection(){return this.fitSelection;}
  setFitSelection(fit){this.fitSelection = fit;}

  getColorSelection(){return this.colorSelection;}
  setColorSelection(color){ this.colorSelection = color;}

  getArtworkLocations(){return this.artworkLocations; }
  setArtworkLocations(artworkLocation){this.artworkLocations = artworkLocation;}

  get ArtworkQuantities(){return this.artworkQuantities;}
  set ArtworkQuantites(artworkQuantity){this.artworkQuantities = artworkQuantity;}

  get Quantity(){return this.quantity;}
  set Quantity(quantity){this.quantity = quantity;}

  get CurrentPrice(){return this.currentPrice;}
  set CurrentPrice(price){this.currentPrice = price;}

}