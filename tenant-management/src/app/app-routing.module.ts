import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddpropertyComponent } from './addproperty/addproperty.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "dashboard", component: DashboardComponent },
  { path:"addproperty", component:AddpropertyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// git checkout -b branchname
// git status---for checking
// git add .
// git commit -m "commit msg"
// git push origin master
// git push --set-upstream origin branchname