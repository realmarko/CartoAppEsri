import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PropertyService } from 'src/app/services/property.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-new-property',
  templateUrl: './form-new-property.component.html',
  styleUrls: ['./form-new-property.component.css']
})
export class FormNewPropertyComponent implements OnInit, OnDestroy {
  subscriptionProperty = new Subscription();
  constructor(private propertyService: PropertyService) {


  }

  ngOnInit() {
    this.subscriptionProperty = this.propertyService.coords.subscribe(
      coords => console.log(coords)
    )
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  ngOnDestroy() {
    this.subscriptionProperty.unsubscribe();
  }
}
