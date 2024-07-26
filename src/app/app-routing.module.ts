import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';//https://..com/admin/accounts bundan sonra gelicekleri artık account module de aranır
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  { path: "admin", component: LayoutComponent, children: [
    { path: "", component: DashboardComponent},
    { path: "accounts",loadChildren : ()=> import("./admin/components/accounts/accounts.module").then
      (module => module.AccountsModule)
    }
  ]},
  { path: "",component: HomeComponent},
  { path:"transactions", loadChildren : ()=> import("./ui/components/transactions/transactions.module").then(module => module.TransactionsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
