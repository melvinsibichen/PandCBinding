import { Component,Input,Output, OnInit,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  //parent to child
  @Input()test:any

  // child to parent
  @Output()parentFunction:EventEmitter<any>=new EventEmitter;
  constructor(){}

  ngOnInit(): void {
    let data={
      productname:'Samsung LED TV',Price:'45,000'    
    }
      this.parentFunction.emit(data);
  }

}
