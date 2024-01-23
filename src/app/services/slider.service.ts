import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { homeSliderResponse } from '../DTOs/homeSliderResponse';
import { sliderDb } from '../DTOs/Entity/sliderDb';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
private homeSlider : BehaviorSubject<sliderDb[]> = new BehaviorSubject<sliderDb[]>([]);
  constructor(private http : HttpClient) { }

  public getSlider() : Observable<homeSliderResponse>
  {
    return this.http.get<homeSliderResponse>('/Sliders/Sliders');
  }
  public getCurrentSlider(){
    return this.homeSlider;
  }
  public setCurrentSlider(slider : sliderDb[]){
    this.homeSlider.next(slider);
  }
}
