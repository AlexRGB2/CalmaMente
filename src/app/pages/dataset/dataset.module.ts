import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatasetRoutingModule } from './dataset-routing.module';
import { DatasetComponent } from './dataset.component';
import { MaterialModule } from '../../shared/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DatasetComponent],
  imports: [
    CommonModule,
    DatasetRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DatasetModule {}
