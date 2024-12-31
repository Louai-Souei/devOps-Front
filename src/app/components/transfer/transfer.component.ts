import {Component, OnInit} from '@angular/core';

import {Transfer} from '../../entity/Transfer';
import {TransferService} from '../../services/transfer/transfer.service';
import {FormsModule} from '@angular/forms';
import {DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    DatePipe
  ],
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transfers: Transfer[] = [];
  selectedTransfer: Transfer = new Transfer();

  constructor(private transferService: TransferService) {
  }

  ngOnInit(): void {
    this.loadTransfers();
  }

  loadTransfers(): void {
    this.transferService.getTransfers().subscribe((data: Transfer[]) => {
      this.transfers = data;
    });
  }

  selectTransfer(transfer: Transfer): void {
    this.selectedTransfer = {...transfer};
  }

  updateTransfer(): void {
    this.transferService.updateTransfer(this.selectedTransfer.id, this.selectedTransfer).subscribe(
      (updatedTransfer) => {
        console.log('Transfer updated:', updatedTransfer);
        this.loadTransfers();
      },
      (error) => {
        console.error('Error updating transfer:', error);
      }
    );
  }

  deleteTransfer(id: number): void {
    this.transferService.deleteTransfer(id).subscribe(() => this.loadTransfers());
  }
}
