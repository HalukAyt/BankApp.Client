import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsModule } from './accounts/accounts.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TransactionsModule } from '../../ui/components/transactions/transactions.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountsModule,
    DashboardModule,
    TransactionsModule              //ng g m  ve ng g c admin/components/... den sonra modulleri ekle 
  ]
})
export class ComponentsModule { }
