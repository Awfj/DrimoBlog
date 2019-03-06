import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/pages/home/home.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { SearchResultsComponent } from './components/pages/search-results/search-results.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ArticleDetailsComponent } from './components/pages/article-details/article-details.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'details/:id', component: ArticleDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
