import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
  @ViewChild('f') information: NgForm;
  valuesSiNo = ['SI','NO'];
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.information);
  }
}
