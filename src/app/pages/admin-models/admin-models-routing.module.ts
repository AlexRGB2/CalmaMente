import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModelsComponent } from './admin-models.component';

const routes: Routes = [{ path: '', component: AdminModelsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModelsRoutingModule {}
