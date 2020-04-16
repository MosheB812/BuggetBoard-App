import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewBugDiagComponent } from "../new-bug-diag/new-bug-diag.component";

import { Bug } from "../Models/bug.model";
import { ApiService } from '../Services/api/api.service';

@Component({
  selector: 'app-buggetboard',
  templateUrl: './buggetboard.component.html',
  styleUrls: ['./buggetboard.component.css']
})

export class BuggetboardComponent implements OnInit {

  // Data store variable for data from API fetch
  BugList: Bug[] = [];

  constructor(
    public _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _apiService: ApiService
  ) { }

  ngOnInit() {
    return this._apiService.getBugLists()
      .subscribe(data => { this.BugList = data; });
  }

  // New Bug button was pressed, show the dialog form to be filled
  newBug(): void {

    // Open a new dialog form
    const dialogRef = this._dialog.open(NewBugDiagComponent, {
      // Generate new ID from DB, date, and created by, then pass to form for autofilling
      data: {
        id: '123456',
        currentDate: new Date().toLocaleDateString(),
        createdBy: 'Moshe B.',
      }
    });

    // Dialog window has been closed, process the passed object
    dialogRef.afterClosed().subscribe(data => {

      if (!data) {
        // Clicked away do nothing
      } else if (data.description == '' || data.owner == '' || data.summary == '') {
        // Empty form fields, notify and do nothing
        console.log('empty forms');
        this._snackBar.open('Empty form fields, try again.', 'close', {
          duration: 4000,
        });
      } else if (data) {
        console.log('2');
        // Submit was pressed, save the data
        console.log('POST Bug.....');

        this._apiService.postBug(data)
          .subscribe(data => {
            console.log('DATA POSTED. Return value: ');
            console.log(data);
          });
      }

    });

  }
}
