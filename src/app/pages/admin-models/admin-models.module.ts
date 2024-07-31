import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModelsRoutingModule } from './admin-models-routing.module';
import { AdminModelsComponent } from './admin-models.component';
import { MaterialModule } from '../../shared/modules/material.module';
import { ChartsModelModule } from '../charts-model/charts-model.module';

@NgModule({
  declarations: [AdminModelsComponent],
  imports: [
    CommonModule,
    AdminModelsRoutingModule,
    MaterialModule,
    ChartsModelModule,
  ],
})
export class AdminModelsModule {}
