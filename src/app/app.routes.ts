import { Routes } from '@angular/router';
import { Template } from './template/template';
import { DataBinding } from './data-binding/data-binding';
import { ToDoList } from './to-do-list/to-do-list';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { UserInfo } from './user-info/user-info';
import { Infor } from './infor/infor';
import { Register } from './register/register';
import { AdminInfor } from './admin-infor/admin-infor';
import { authGuard } from './auth-guard';
import { RoleNPermission } from './role-n-permission/role-n-permission';
import { Network } from './network/network';
import { RxjsPra } from './rxjs-pra/rxjs-pra';
import { SujectBehav } from './suject-behav/suject-behav';




export const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'template', component: Template },
  { path: 'data-binding', component: DataBinding },
  { path: 'to-do-list', component: ToDoList },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'user-info', component: UserInfo, canActivate: [authGuard] },
  { path: 'infor', component: Infor },
  { path: 'infor/:id', component: Infor },
  {  path: 'admin-infor', component: AdminInfor },
  { path: 'register',component:Register},
  { path: 'rolepermission', component: RoleNPermission },
  { path: 'network', component: Network },
  { path: 'rxjs', component: RxjsPra },
  { path: 'suject', component: SujectBehav },
  
];
