import { NgModule } from '@angular/core';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactDetailComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    MatListModule,
    MatSelectModule,
    ContactRoutingModule,
    SharedModule
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
