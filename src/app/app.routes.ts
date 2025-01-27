import { Routes } from '@angular/router';

import { UsuarioPlistComponent } from './components/usuario/usuario.plist/usuario.plist.component';
import { UsuarioEditComponent } from './components/usuario/usuario.edit/usuario.edit.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario.delete/usuario.delete.component';
import { UsuarioViewComponent } from './components/usuario/usuario.view/usuario.view.component';
import { SharedHomeRoutedComponent } from './shared/shared.home.routed/shared.home.routed.component';
import { UsuarioCreateComponent } from './components/usuario/usuario.create/usuario.create.component';
import { SharedLoginRoutedComponent } from './shared/shared.login.routed/shared.login.routed';
import { SharedLogoutRoutedComponent } from './shared/shared.logout.routed/shared.logout.routed';
import { SharedByemailRoutedComponent } from './shared/shared.byemail.routed/shared.byemail.routed.component';
import { ContableGuard } from './guards/contable.guard';
import { AdminGuard } from './guards/admin.guard';
import { AdminOrContableGuard } from './guards/admin-or-contable.guard';


export const routes: Routes = [

    { path: '', component: SharedHomeRoutedComponent, canActivate: [AdminOrContableGuard] },
    { path: 'home', component: SharedHomeRoutedComponent, canActivate: [AdminOrContableGuard] },
    { path: 'login', component: SharedLoginRoutedComponent },
    { path: 'logout', component: SharedLogoutRoutedComponent },
    { path: 'byemail/:email', component: SharedByemailRoutedComponent, canActivate: [ContableGuard] },


    { path: 'admin/usuario/plist', component: UsuarioPlistComponent, canActivate: [AdminGuard] },
    { path: 'admin/usuario/edit/:id', component: UsuarioEditComponent, canActivate: [AdminGuard] },
    { path: 'admin/usuario/view/:id', component: UsuarioViewComponent, canActivate: [AdminGuard] },
    { path: 'admin/usuario/create', component: UsuarioCreateComponent, canActivate: [AdminGuard] },
    { path: 'admin/usuario/delete/:id', component: UsuarioDeleteComponent, canActivate: [AdminGuard] },





];
