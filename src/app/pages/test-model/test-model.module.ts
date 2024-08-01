import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestModelRoutingModule } from './test-model-routing.module';
import { TestModelComponent } from './test-model.component';
import { MaterialModule } from '../../shared/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TestModelComponent],
  imports: [
    CommonModule,
    TestModelRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TestModelModule {}
