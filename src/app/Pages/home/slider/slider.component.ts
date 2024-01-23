import { DomainName } from './../../../Utilities/PathTools';
import { Component } from '@angular/core';
import { sliderDb } from 'src/app/DTOs/Entity/sliderDb';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-home-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  constructor(private sliders : SliderService){}
  public sliderList : sliderDb[] = [];
  public domain : string = DomainName;
ngOnInit(): void {
this.sliders.getCurrentSlider().subscribe(item=>{
  
  if(item.length ===0){
    this.sliders.getSlider().subscribe(res=>{
      //console.log(res);
      if(res.status === 'Success'){
        //console.log('ok');
        this.sliders.setCurrentSlider(res.data);
      }
    })
  }
  else{
    this.sliderList = item;
    console.log(item);
  }
  
})
}
}
