import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from 'src/app/service/enterprise.service';
import { GraphicsService } from 'src/app/service/graphics.service';

interface Food {
  value: string;
  viewValue: string;
}

interface Symbol{
  symbool: string;
}


@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})



export class GraphicsComponent implements OnInit {
  public symbols:any;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


  public data:any;
  public result: any = [];
  constructor(private enterpriseService: EnterpriseService, private graphicsService: GraphicsService) {
    //Wconsole.log("data chart ==> ", this.enterpriseService.getGoog());
    //this.data = [ this.enterpriseService.getGoog()];
   }

  ngOnInit(): void {
    this.getSymbols();
  }

  getSymbols(){
    this.graphicsService.getSymbols().subscribe( data => {
      // console.log("data  ===>", data);
      this.symbols = data;
    });
  }

  optionsMethod(value: string, element:any){
    //console.log("value", value);
    this.graphicsService.getDataGrapic(value).subscribe( data => {
      console.log("data ==>", data);
      this.result = data;
      this.result.title = value;

      this.data = this.result;
    })

  }

}
