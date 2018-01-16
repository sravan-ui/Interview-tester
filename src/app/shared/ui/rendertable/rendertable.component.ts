import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rendertable',
  templateUrl: './rendertable.component.html',
  styleUrls: ['./rendertable.component.css']
})
export class RendertableComponent implements OnInit {

  @Input() treeData = [];
  showtable: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onNameCliked(item){
    this.showtable = true;
  }
  onDescCliked(item){
    console.log(item);
  }

}
