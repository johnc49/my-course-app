import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'my-course-app';
  headerTitle = 'this is a header';
  isHeaderVisible = true;

  name: string | undefined;
  surname: string | undefined;

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  observable$: Observable<number> = of(1, 2, 3, 4, 5);

  subscription: Subscription | undefined;
  formSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.displayObservableNumbers();
    this.formGroup = this.formBuilder.group({
      name: [undefined, [Validators.required, Validators.minLength(3)]],
      surname: undefined,
    });
    this.observeFormChanges();
  }

  private displayObservableNumbers(): void {
    this.subscription = this.observable$.subscribe((value) => {
      console.log('here AM I');
      console.log(value);
    });
  }

  private observeFormChanges(): void {
    this.formSubscription = this.formGroup?.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }

  onFormSubmit(): void {
    console.log(this.formGroup?.valid);
    console.log(this.formGroup?.value);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.formSubscription?.unsubscribe();
  }
}
