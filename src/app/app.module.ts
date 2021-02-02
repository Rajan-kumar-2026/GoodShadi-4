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
    MiniprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
