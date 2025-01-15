import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransferService } from '../../services/transfer/transfer.service';
import { Transfer } from '../../entity/Transfer';
import {AddTransferComponent} from '../add-transfer/add-transfer.component';
import {UpdateTransferComponent} from '../update-transfer/update-transfer.component';

@Component({
  selector: 'app-transfer',
  standalone: false,

  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
})
export class TransferComponent implements OnInit {
  transfers: Transfer[] = [];

  constructor(private transferService: TransferService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadTransfers();
  }

  loadTransfers(): void {
    this.transferService.getTransfers().subscribe((data: Transfer[]) => {
      this.transfers = data;
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddTransferComponent);

    dialogRef.afterClosed().subscribe((result: Transfer) => {
      if (result) {
        console.log(result)
        this.transferService.addTransfer(result).subscribe(() => this.loadTransfers());
      }
    });
  }

  openUpdateDialog(transfer: Transfer): void {
    const dialogRef = this.dialog.open(UpdateTransferComponent, { data: { ...transfer } });

    dialogRef.afterClosed().subscribe((result: Transfer) => {
      if (result) {
        this.transferService.updateTransfer(result.id, result).subscribe(() => this.loadTransfers());
      }
    });
  }

  deleteTransfer(id: number): void {
    this.transferService.deleteTransfer(id).subscribe(() => this.loadTransfers());
  }
}
