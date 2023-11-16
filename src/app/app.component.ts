import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'PandCBinding';

//passing object
  data = {
    productname:'Samsung LED TV',
    price:'45000'
  }

  // childtoparentbinding
  // parentFunction(data:any){
  //   console.log(data)
  // }
  // construcor(){
  //   ngOnInit():void{

  //   }
  // }
}
