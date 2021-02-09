import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MyprofileComponent } from './component/myprofile/myprofile.component';
import { ChatComponent } from './component/chat/chat.component';
import { SearchComponent } from './component/search/search.component';
import { FavoriteComponent } from './component/favorite/favorite.component';
import { BlockComponent } from './component/block/block.component';
import { ChangepasswordComponent } from './component/changepassword/changepassword.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MiniprofileComponent } from './component/miniprofile/miniprofile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ProfileComponent } from './component/profile/profile.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyprofileComponent,
    ChatComponent,
    SearchComponent,
    FavoriteComponent,
    BlockComponent,
    ChangepasswordComponent,
    ContactusComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    MiniprofileComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
