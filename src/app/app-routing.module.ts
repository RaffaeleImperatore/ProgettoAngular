import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchJobComponent } from './search-job/search-job.component';
import { DetailsComponent } from './details/details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

const routes: Routes = [
  {path: '', component: SearchJobComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'company-details/:id', component: CompanyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
