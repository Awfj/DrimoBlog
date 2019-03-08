import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { IdenticalPasswordsDirective } from './shared/directives/identical-passwords.directive';
import { HomeComponent } from './components/pages/home/home.component';
import { ArticleDetailsComponent } from './components/pages/article-details/article-details.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SearchResultsComponent } from './components/pages/search-results/search-results.component';
import { RecentPostComponent } from './components/layout/recent-post/recent-post.component';
import { SearchComponent } from './components/layout/search/search.component';
import { CategoriesComponent } from './components/layout/categories/categories.component';
import { SubscriptionComponent } from './components/layout/subscription/subscription.component';

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
    FooterComponent,
    SignInComponent,
    ProfileComponent,
    SearchResultsComponent,
    RecentPostComponent,
    SearchComponent,
    CategoriesComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
