import { Component, OnInit, Inject, EventEmitter, Input, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-bug-diag',
  templateUrl: './new-bug-diag.component.html',
  styleUrls: ['./new-bug-diag.component.css']
})

export class NewBugDiagComponent implements OnInit {

  // Constructor for New Bug Dialog window
  constructor(public dialogRef: MatDialogRef<NewBugDiagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void { }

  // Dialog has been submitted, process the data
  save(desc: HTMLTextAreaElement, sum: HTMLTextAreaElement, owner: HTMLTextAreaElement) {

    // Save the form data to new bug object
    const newBug = {
      id: this.data.id,
      createdOn: this.data.currentDate,
      createdBy: this.data.createdBy,
      description: desc.value,
      summary: sum.value,
      owner: owner.value,
      status: 'Open'
    };
    // Pass new bug object to main form
    this.dialogRef.close(newBug);
  }

  // Dialog has been cancelled, do nothing.
  cancel() {
    this.dialogRef.close();
  }

}
