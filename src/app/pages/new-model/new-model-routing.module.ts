import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewModelComponent } from './new-model.component';

const routes: Routes = [{ path: '', component: NewModelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewModelRoutingModule { }
