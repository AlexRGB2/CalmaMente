import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./pages/test/test.module').then((m) => m.TestModule),
  },
  {
    path: 'dataset',
    loadChildren: () =>
      import('./pages/dataset/dataset.module').then((m) => m.DatasetModule),
  },
  {
    path: 'adminModels',
    loadChildren: () =>
      import('./pages/admin-models/admin-models.module').then(
        (m) => m.AdminModelsModule
      ),
  },
  {
    path: 'adminModels/newModel',
    loadChildren: () =>
      import('./pages/new-model/new-model.module').then(
        (m) => m.NewModelModule
      ),
  },
  {
    path: 'chartsModel',
    loadChildren: () =>
      import('./pages/charts-model/charts-model.module').then(
        (m) => m.ChartsModelModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
