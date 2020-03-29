import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { NewBugDiagComponent } from "../new-bug-diag/new-bug-diag.component";

import { Bug } from "../Models/bug.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  date = new Date().toLocaleDateString();
  createdBy = 'Moshe B.'

  constructor(public dialog: MatDialog) { }

  createBug(): void {
    const dialogRef = this.dialog.open(NewBugDiagComponent, {
      width: '40%',
      data: {
        // Pass any data to Create Bug Dialog
        id: '123456',
        currentDate: this.date,
        createdBy: this.createdBy
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
