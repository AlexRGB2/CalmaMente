import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

import { AdminModelsRoutingModule } from './admin-models-routing.module';
import { AdminModelsComponent } from './admin-models.component';
import { MaterialModule } from '../../shared/modules/material.module';

@NgModule({
  declarations: [AdminModelsComponent],
  imports: [CommonModule, AdminModelsRoutingModule, MaterialModule, AsyncPipe],
})
export class AdminModelsModule {}
