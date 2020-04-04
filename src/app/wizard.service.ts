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

  get CurrentStep(){return this.currentStep;}
  set CurrentStep(step){this.currentStep = step;}

  get ProductSelection(){return this.productSelection;}
  set ProductSelection(product){this.productSelection = product;}

  get QualitySelection(){return this.qualitySelection;}
  set QualitySelection(quality){this.qualitySelection = quality;}

  get FitSelection(){return this.fitSelection;}
  set FitSelection(fit){this.fitSelection = fit;}

  get ColorSelection(){return this.colorSelection;}
  set ColorSelection(color){ this.colorSelection = color;}

  get ArtworkLocations(){return this.artworkLocations; }
  set ArtworkLocations(artworkLocation){this.artworkLocations = artworkLocation;}

  get ArtworkQuantities(){return this.artworkQuantities;}
  set ArtworkQuantites(artworkQuantity){this.artworkQuantities = artworkQuantity;}

  get Quantity(){return this.quantity;}
  set Quantity(quantity){this.quantity = quantity;}

  get CurrentPrice(){return this.currentPrice;}
  set CurrentPrice(price){this.cur}

}