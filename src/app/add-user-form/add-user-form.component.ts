import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss'],
})
export class AddUserFormComponent implements OnInit {
  selectedOption: string = '';
  constructor(
    public dialogRef: MatDialogRef<AddUserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {}
  close(): void {
    this.dialogRef.close();
  }
  save(): void {
    // Pass the selected data back to the dashboard
    this.dialogRef.close(this.selectedOption);
  }
  options = [
    { value: 'dev', viewValue: 'KantaHar' },
    { value: 'des', viewValue: 'Rotta' },
  ];
}
