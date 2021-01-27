import { Component, OnInit } from "@angular/core";
import { IContact } from "../../models/contact";
import { ContactService } from "../../services/contact.service";

@Component
({
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit
{
  contacts: IContact[] = [];
  errorMessage: string = '';

  constructor(private contactService: ContactService)
  {}

  ngOnInit(): void
  {
    this.contactService.getContacts().subscribe
    ({
        next: contacts => this.contacts = contacts,
        error: error => this.errorMessage = error
    });
  }
}


