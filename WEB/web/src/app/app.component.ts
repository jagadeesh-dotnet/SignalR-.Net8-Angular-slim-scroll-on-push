import { Component, EventEmitter, OnInit } from '@angular/core';
import { SlimScrollOptions, SlimScrollEvent, ISlimScrollEvent } from 'ngx-slimscroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  opts: SlimScrollOptions;
  scrollEvents: EventEmitter<ISlimScrollEvent>;
  sampleData:any[]=['position: The position of the scroll bar (default: right)','barBackground: The background color of the scroll bar (default: #343a40)','Disable this flag to forward the scroll event if top or bottom of the slimscroll container is reached (default: true) position',
    'Defines the opacity of the scroll bar (default: 1). barWidth: Customize the width of the scroll bar (default: 12 px)','position: The position of the scroll bar (default: right)',
    'position: The position of the scroll bar (default: right)','barBackground: The background color of the scroll bar (default: #343a40)'
  ]

  constructor() {}
 
  ngOnInit() {
    this.scrollEvents = new EventEmitter<ISlimScrollEvent>();
    this.opts = new SlimScrollOptions({
      position: 'right',
      barBackground: '#C9C9C9',
      barOpacity: '0.8' ,
      barWidth:  '10',
      barBorderRadius:  '20',
      barMargin:  '0',
      gridBackground: '#D9D9D9',
      gridOpacity:  '1',
      gridWidth: '2',
      gridBorderRadius: '20',
      gridMargin: '0',
      alwaysVisible: true,
      visibleTimeout: 1000,
      alwaysPreventDefaultScroll: true
     });
 
  }

  pushSampleData(){
    var item = this.sampleData[Math.floor(Math.random()*this.sampleData.length)];
    this.sampleData.push(item);
  }
}
