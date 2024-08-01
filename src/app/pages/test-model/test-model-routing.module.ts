import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestModelComponent } from './test-model.component';

const routes: Routes = [{ path: '', component: TestModelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestModelRoutingModule { }
