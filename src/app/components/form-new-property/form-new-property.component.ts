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
  price;
  public operationType: string = "sell";
  constructor(private propertyService: PropertyService) {


  }

  ngOnInit() {
    // this.subscriptionProperty = this.propertyService.coords.subscribe(
    //   coords => console.log(coords)
    // )

    this.propertyService.getProperties()
      .subscribe(data => {
        console.log('getPropertiesMethod' + data);
      });

  }
  onSubmit(form: NgForm) {
    console.log('formValue' + form.value);
    this.propertyService.createProperty(form.value).subscribe();
  }

  ngOnDestroy() {
    this.subscriptionProperty.unsubscribe();
  }
  onItemChange(value: string) {
    console.log('Valor del radio' + value);
    this.operationType = value;
  }

}
