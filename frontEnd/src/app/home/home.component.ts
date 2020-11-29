import { Component, OnInit, Inject } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'ui-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private coreService:CoreService,@Inject('environment') private environmentGlobal) { 
   }

  ngOnInit() {
  }
  getIconPath(item,state){
    return this.environmentGlobal.packageUrl+"/"+item.routePath+"/images/"+item.image+".svg";
    console.log(item);
    console.log(state);
  }
}
