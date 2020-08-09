import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOfficeComponent } from './create-office/create-office.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { MacManagementComponent } from './mac-management/mac-management.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { EmpEditProfileComponent } from './emp-edit-profile/emp-edit-profile.component';
import { ListOfficeComponent } from './manage-office/list-office/list-office.component';
import { EditOfficeComponent } from './manage-office/edit-office/edit-office.component';
import { CreateMacComponent } from './manage-office/create-mac/create-mac.component';
import { EditMacComponent } from './manage-office/edit-mac/edit-mac.component';
import { ListMacComponent } from './manage-office/list-mac/list-mac.component';
import { AdminRoutesComponent } from './admin-routes/admin-routes.component';



@NgModule({
  declarations: [CreateOfficeComponent, CreateAgentComponent, MacManagementComponent, LoginComponent, ManageUserComponent, EmpEditProfileComponent, ListOfficeComponent, EditOfficeComponent, CreateMacComponent, EditMacComponent, ListMacComponent, AdminRoutesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
