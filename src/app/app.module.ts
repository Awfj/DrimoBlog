import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { IdenticalPasswordsDirective } from './shared/directives/identical-passwords.directive';
import { HomeComponent } from './components/home/home.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AsideComponent } from './components/aside/aside.component';
import { ArticleComponent } from './components/article/article.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    IdenticalPasswordsDirective,
    HomeComponent,
    ArticleDetailsComponent,
    PageNotFoundComponent,
    AsideComponent,
    ArticleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
