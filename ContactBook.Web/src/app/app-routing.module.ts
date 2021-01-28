import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const routes: Routes =
[
  {path: 'welcome', component: WelcomeComponent},
  {
    path: 'contact',
    loadChildren: () => import('./contacts/contact.module').then(m => m.ContactModule)
  },
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
