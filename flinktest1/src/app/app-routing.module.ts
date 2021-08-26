import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { XaddComponent } from './components/xadd/xadd.component';
import { XdetailComponent } from './components/xdetail/xdetail.component';
import { XeditComponent } from './components/xedit/xedit.component';
import { XlistComponent } from './components/xlist/xlist.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'enterprise-list' },
  { path: 'add-enterprise', component: XaddComponent },
  { path: 'detail-enterprise/:id', component: XdetailComponent },
  { path: 'enterprise-list', component: XlistComponent },
  { path: 'graphics', component: GraphicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
