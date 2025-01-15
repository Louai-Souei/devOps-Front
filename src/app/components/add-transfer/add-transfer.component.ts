import { Component } from '@angular/core';
import {Transfer} from '../../entity/Transfer';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-transfer',
  standalone: false,

  templateUrl: './add-transfer.component.html',
  styleUrl: './add-transfer.component.css'
})
export class AddTransferComponent {
  transfer: Transfer = new Transfer();

  constructor(public dialogRef: MatDialogRef<AddTransferComponent>) {}

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.transfer);
  }
}
