import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl  } from "@angular/forms";
import { EnterpriseService } from 'src/app/service/enterprise.service';
import { Enterprise } from 'src/app/models/enterprise';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-xdetail',
  templateUrl: './xdetail.component.html',
  styleUrls: ['./xdetail.component.css']
})


export class XdetailComponent implements OnInit {
  getUuid:any;
  updateForm: FormGroup;
  enterprise: Enterprise | undefined;
  public data:any;
  public nameEnterprise:string = '';




  constructor(
    private enterpriseService: EnterpriseService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router,
  ) { 


    this.getUuid = this.activatedRoute.snapshot.paramMap.get('id');
    this.enterpriseService.getEnterprise(this.getUuid).subscribe( res => {
      this.data = res;
      this.nameEnterprise = this.data.name_enterprise;
      this.updateForm?.setValue({
        uuid: this.data.uuid,
        name_enterprise: this.data.name_enterprise,
        description: this.data.description,
        symbol: this.data.symbol,
        market_value: this.data.market_value
      })
    });

    this.updateForm = this.formBuilder.group({
      uuid: [''],
      name_enterprise: [''],
      description: [''],
      symbol: [''],
      market_value: [''],
    })
  }

  ngOnInit(): void {
  }
  submit(){
    if(this.updateForm.valid){
      console.log("this entrepise form",this.updateForm.value );
      const uuid = this.updateForm.controls['uuid'].value;
      console.log('uuid', uuid);
      this.enterpriseService.updateEnterrpise( uuid, this.updateForm.value ).subscribe( res => {
        Swal.fire(
          'Se guardo correctamente',
          '',
          'success'
        );
        this.router.navigate(['enterprise-list']);
      }, (err) =>{
        console.log("error", err);
      });

    }else{
      console.log("no es valido");
    }
  }
}

// enterpriseForm = new FormGroup({
//   name_enterprise: new FormControl('', [Validators.required, Validators.minLength(3)]),
//   description: new FormControl(''),
//   symbol: new FormControl(''),
//   market_value: new FormControl('')
// });