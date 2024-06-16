import { Routes } from '@angular/router'
import { UserComponent } from './user/user.component'
import { AuthComponent } from './auth/auth.component'
import { AboutComponent } from './about/about.component'
import { authGuard } from './core/auth.guard'
import { NotFoundComponent } from './not-found/not-found.component'

export const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'user', component: UserComponent, canActivate: [authGuard] },
  { path: 'auth', component: AuthComponent },
  { path: '**', component: NotFoundComponent },
]
