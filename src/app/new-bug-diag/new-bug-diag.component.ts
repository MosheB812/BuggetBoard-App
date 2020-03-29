import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-bug-diag',
  templateUrl: './new-bug-diag.component.html',
  styleUrls: ['./new-bug-diag.component.css']
})
export class NewBugDiagComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewBugDiagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close("saved");
    // save the data
  }
  cancel() {
    this.dialogRef.close();
  }

}
