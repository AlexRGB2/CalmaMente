import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewModelRoutingModule } from './new-model-routing.module';
import { NewModelComponent } from './new-model.component';
import { MaterialModule } from '../../shared/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewModelComponent],
  imports: [
    CommonModule,
    NewModelRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class NewModelModule {}
