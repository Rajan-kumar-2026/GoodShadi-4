import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BlockComponent } from './component/block/block.component';
import { ChangepasswordComponent } from './component/changepassword/changepassword.component';
import { ChatComponent } from './component/chat/chat.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { FavoriteComponent } from './component/favorite/favorite.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MyprofileComponent } from './component/myprofile/myprofile.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { SearchComponent } from './component/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile/:email',
    component:  ProfileComponent
  },
  {
    path: 'myprofile',
    component: MyprofileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'favorites',
    component: FavoriteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'blocked',
    component: BlockComponent
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: "**",
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
