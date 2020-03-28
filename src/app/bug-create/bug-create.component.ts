import { Component } from "@angular/core";

@Component({
  selector: 'app-bug-create',
  templateUrl: './bug-create.component.html',
  styleUrls: ['./bug-create.component.css']
})
export class BugCreateComponent {
  enteredValue = '';
  newBug = 'NO CONTENT';

  onAddBug() {
    this.newBug = this.enteredValue;
    this.enteredValue = 'test test test test test test test test test test test test test test t t t t test test test test test test\nteset test test \n\n\ntest test';
  }
}
