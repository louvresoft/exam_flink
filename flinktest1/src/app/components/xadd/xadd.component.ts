import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl  } from "@angular/forms";
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';



import { EnterpriseService } from 'src/app/service/enterprise.service';
import Swal from 'sweetalert2';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-xadd',
  templateUrl: './xadd.component.html',
  styleUrls: ['./xadd.component.css']
})
export class XaddComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  


  ngOnInit() {
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private enterpriseService: EnterpriseService
  ) { }

  enterpriseForm = new FormGroup({
    //uuid: new FormControl('', Validators.required),
    name_enterprise: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl(''),
    symbol: new FormControl(''),
    market_value: new FormControl('')
  });
  

  submit(){
    if(this.enterpriseForm.valid){
      //validate symbol
      this.enterpriseService.validateSymbol(this.enterpriseForm.value.symbol).subscribe(data =>{
        console.log('simbolo valido =>', data );
      }, error => {
        if(error.status === 422){
          this.enterpriseForm.controls['symbol'].setErrors({'symbol': true});
        }
      });
     // console.log('symbol', this.enterpriseForm.value.symbol);


      this.enterpriseService.postEnterprise(this.enterpriseForm.value)
      .subscribe(data => {
        console.log(data);
        Swal.fire({
          title: 'Guardado Correctamente',
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#4b0082',
          cancelButtonColor: '#4b0082',
          cancelButtonText: 'Agregar otra empresa',
          confirmButtonText: 'Ver tabla'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['enterprise-list']);
          }else{
            this.enterpriseForm.reset();
            this.router.navigate(['add-enterprise']);
          }
        })
      },
      error => {
        // console.log("error =>", error);
        // console.log("status =>", error.status);
       //console.log("error =>", error.error.detail);
       if(error.status === 422){
          let data = error.error.detail;
          data.forEach((value:any, index:any) => {
            // console.log("element",value.loc[1] );
            this.enterpriseForm.controls[value.loc[1]].setErrors({'maxlength': true});
          });   
      }}
      );
      }else{
      console.log("no es valido");
  }
  }
}
