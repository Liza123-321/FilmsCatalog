import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FilmComponent } from './film/film.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorComponent } from './validator/validator.component';
import { FilmMoreInfoComponent } from './film-more-info/film-more-info.component';
import { CommentsComponent } from './comments/comments.component';
import { ToastrModule } from 'ngx-toastr';
import { VgCoreModule } from 'videogular2/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FilmComponent,
    FilmsListComponent,
    ValidatorComponent,
    FilmMoreInfoComponent,
    CommentsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SuiModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    VgCoreModule,
    InfiniteScrollModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
