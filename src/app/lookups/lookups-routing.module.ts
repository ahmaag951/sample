import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './components/country/country-list/country-list.component';

const routes: Routes = [
  { path: '', component: CountryListComponent },
  { path: 'country-list', component: CountryListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookupsRoutingModule { }
