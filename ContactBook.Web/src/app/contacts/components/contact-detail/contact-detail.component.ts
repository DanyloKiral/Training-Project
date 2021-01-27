import { Component, OnDestroy, OnInit } from '@angular/core';
import { IContactDetail } from '../../models/contact-detail';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../../shared/models/country';
import { CountryService } from 'src/app/shared/services/country.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cb-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
})
export class ContactDetailComponent implements OnInit, OnDestroy {
  private validationMessages: { [key: string]: string } = {
    required: 'This field is required',
    email: 'Incorrect email',
  };

  private subscriptions: Subscription[] = [];

  public errorMessages: any = {};
  public contactDetailForm: FormGroup = new FormGroup({});
  public contact: IContactDetail | null = null;
  public countries: Country[] = [];
  public errorMessage: string = '';

  constructor(
    private contactService: ContactService,
    private countryService: CountryService,
    private formBuilder: FormBuilder,
    private router: Router,
    route: ActivatedRoute
  ) {
    this.createForm();

    let subscription = route.params.subscribe((params) => {
      const id = params['id'];
      this.contactChangeSubscribe(id);
    });

    this.subscriptions[this.subscriptions.length + 1] = subscription;

    this.getStaticData();
  }

  public ngOnInit(): void {
    this.valuesValidation();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(element => element.unsubscribe());
  }

  public get canSave(): boolean {
    return this.contactDetailForm.dirty && this.contactDetailForm.valid;
  }

  private createForm(): void {
    this.contactDetailForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      countryId: [0, Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  private contactChangeSubscribe(id: number): void {

    this.contactService.getContact(id).subscribe({
      next: (contact) => {
        this.contact = contact;

        this.contactDetailForm.setValue({
          firstName: this.contact.firstName,
          lastName: this.contact.lastName,
          phoneNumber: this.contact.phoneNumber,
          email: this.contact.email,
          gender: this.contact.gender,
          countryId: this.contact.countryId,
          city: this.contact.city,
          address: this.contact.address,
        });
      },
      error: (error) => (this.errorMessage = error),
    });

    this.contactDetailForm.reset();
  }

  private getStaticData(): void {
    this.countryService.getCountries().subscribe({
      next: (countries) => (this.countries = countries),
      error: (error) => (this.errorMessage = error),
    });
  }

  private valuesValidation(): void {
    this.contactDetailForm.valueChanges
    .subscribe(
      (value) => {
        this.setMessage(this.contactDetailForm)
      }
    );
  }

  public setMessage(group: FormGroup): void {
    for (const controlKey of Object.keys(group.controls)) {
      let control = group.controls[controlKey];
      this.errorMessages[controlKey] = '';

      if ((control.touched || control.dirty) && control.errors) {
        this.errorMessages[controlKey] = Object.keys(control.errors)
          .map((key) => this.validationMessages[key])
          .join(' ');
      }
    }
  }

  public saveContact(): void {

    const contact = {...this.contact, ...this.contactDetailForm.value};

    this.contactService.updateContact(contact).subscribe({
      next: () => this.onSaveComplete(),
      error: error => this.errorMessage = error
    });
  }

  public onSaveComplete(): void {
    this.contactDetailForm.reset();
    this.router.navigate(['/contact']);
  }
}
