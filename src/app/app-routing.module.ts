import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboredHelperComponent } from './dashbored-helper/dashbored-helper.component';
import { AddProposalComponent } from './add-proposal/add-proposal.component';
import { DisplayJobComponent } from './display-job/display-job.component';

const routes: Routes = [
  {path:'helper-dashbored',component:DashboredHelperComponent},
  {path:'addproposal',component:AddProposalComponent},
  {path:'displayJob',component:DisplayJobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
