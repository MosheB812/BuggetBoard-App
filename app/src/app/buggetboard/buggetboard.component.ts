import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewBugDiagComponent } from "../new-bug-diag/new-bug-diag.component";

@Component({
  selector: 'app-buggetboard',
  templateUrl: './buggetboard.component.html',
  styleUrls: ['./buggetboard.component.css']
})

export class BuggetboardComponent {

  // List of known bugs created so far
  bugList = [
    {
      id: '258369',
      description: 'Brief issue description will be posted here1',
      summary: 'dummy summary 1',
      status: 'Open',
      owner: 'Moshe B.',
      createdBy: 'John S.',
      createdOn: 'Mar 28, 2020'
    },
    {
      id: '147285',
      description: 'Brief issue description will be posted here2',
      summary: 'dummy summary 2',
      status: 'Closed',
      owner: 'Moshe B.',
      createdBy: 'John S.',
      createdOn: 'Mar 28, 2020'
    }
  ];

  constructor(public _dialog: MatDialog, private _snackBar: MatSnackBar) { }

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

      if (data.description == '' || data.owner == '' || data.summary == '') {
        // Empty form fields, notify and do nothing
        this._snackBar.open('Empty form fields, try again.', 'close', {
          duration: 4000,
        });
      } else if (data) {
        // Submit was pressed, save the data
        this.bugList.push(data);
      } else {
        // Cancel was pressed, ignore the data
        console.log('Dialog cancelled, no data to save.');
      }

    });
  }
}
