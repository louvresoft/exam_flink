import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Enterprise } from 'src/app/models/enterprise';
import { EnterpriseService } from 'src/app/service/enterprise.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-xlist',
  templateUrl: './xlist.component.html',
  styleUrls: ['./xlist.component.css']
})
export class XlistComponent implements OnInit {
  toppingList: string[] = [
    "Editar",
    "Eliminar",
  ];
  EnterprisesData: any = [];
  dataSource!: MatTableDataSource<Enterprise>;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  displayedColumns: string[] = ['uuid', 'name_enterprise', 'description', 'symbol', 'market_value', 'options'];

  constructor(private enterpriseService: EnterpriseService, private router: Router) {
    console.log("se ejecuto aqui");
    this.getData();
  }

  ngOnInit() { }

  getData(){
    this.enterpriseService.getEnterprises().subscribe(data => {
      console.log("esta es la data", data);
      this.EnterprisesData = data;
      this.dataSource = new MatTableDataSource<Enterprise>(this.EnterprisesData);
    }); 
  }

  optionsMethod(value:string, element:any){
    if(value === "Editar"){
      console.log("Editar", value);
      this.router.navigate(['/detail-enterprise/', element.uuid],);
    }else{
      console.log("Eliminar", value);
      Swal.fire({
        title: 'Estas seguro que deseas eliminar la empresa?',
        text:  element.symbol+"--" + element.name_enterprise,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3f51b5',
        cancelButtonColor: '#b0bec5',
        confirmButtonText: 'Eliminar',
        cancelButtonText : 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.enterpriseService.deleteEnterprise(element.uuid).subscribe(data => {
            console.log("data eliminada:", data);
            this.getData();
            Swal.fire(
              'Eliminado!',
              'el registro fue correctamente eliminado.',
              'success'
            )
          })
        }
      })
    }
  }
}
