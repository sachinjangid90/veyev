import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
    {path: '', redirectTo: 'tabs', pathMatch: 'full'},
    {path: 'home', loadChildren: './home/home.module#HomePageModule'},
    {path: 'signup', loadChildren: './pages/auth/signup/signup.module#SignupPageModule'},
    {path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule'},
    // {path: 'forgotPassword', loadChildren: './pages/auth/forgot-password/forgot-password.module#ForgotPasswordPageModule'},
    {path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
    {path: 'users', loadChildren:'./pages/users/users.module#UsersModule'},
    {path: 'feeds', loadChildren:'./pages/feeds/feeds-tab/feeds-tab.module#FeedsTabPageModule'},
    {path: 'changePassword', loadChildren: './pages/auth/change-password/change-password.module#ChangePasswordPageModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations:[]
})
export class AppRoutingModule {
}
