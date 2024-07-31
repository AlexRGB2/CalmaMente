import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModelComponent } from './charts-model.component';

const routes: Routes = [{ path: '', component: ChartsModelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsModelRoutingModule { }
