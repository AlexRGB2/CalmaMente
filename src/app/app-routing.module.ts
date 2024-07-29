import { NgModule } from '@angular/core';
import { RouterModule, Routes, withViewTransitions } from '@angular/router';

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
  { path: 'dataset', loadChildren: () => import('./pages/dataset/dataset.module').then(m => m.DatasetModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
