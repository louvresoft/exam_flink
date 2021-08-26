import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table'  
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import { ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { 
	IgxFinancialChartModule,
	IgxLegendModule
 } from "igniteui-angular-charts";

import { XlistComponent } from './components/xlist/xlist.component';
import { XeditComponent } from './components/xedit/xedit.component';
import { XaddComponent } from './components/xadd/xadd.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { XdetailComponent } from './components/xdetail/xdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    XlistComponent,
    XeditComponent,
    XaddComponent,
    GraphicsComponent,
    XdetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    SweetAlert2Module.forRoot(),
    IgxFinancialChartModule,
    IgxLegendModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
