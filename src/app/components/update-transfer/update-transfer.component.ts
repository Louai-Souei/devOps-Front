import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Transfer} from '../../entity/Transfer';

@Component({
  selector: 'app-update-transfer',
  standalone: false,

  templateUrl: './update-transfer.component.html',
  styleUrl: './update-transfer.component.css'
})
export class UpdateTransferComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateTransferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Transfer
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  update(): void {
    this.dialogRef.close(this.data);
  }
}
