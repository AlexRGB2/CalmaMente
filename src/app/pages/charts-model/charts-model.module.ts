import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModelRoutingModule } from './charts-model-routing.module';
import { ChartsModelComponent } from './charts-model.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MaterialModule } from '../../shared/modules/material.module';

@NgModule({
  declarations: [ChartsModelComponent],
  imports: [
    CommonModule,
    ChartsModelRoutingModule,
    NgApexchartsModule,
    MaterialModule,
  ],
  exports: [ChartsModelComponent],
})
export class ChartsModelModule {}
