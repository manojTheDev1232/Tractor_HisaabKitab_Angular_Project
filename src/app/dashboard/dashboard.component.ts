import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserFormComponent } from '../add-user-form/add-user-form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // datepickerModel: any;
  todayPlaceholder: any;
  totalIncome: any;
  datepickerModel?: Date;
  daterangepickerModel?: Date[];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    const today = new Date();
    this.todayPlaceholder = ` ${formatDate(today, 'yyyy-MM-dd', 'en-US')}`;

    this.totalIncomeSum();
  }
  openForm(): void {
    const dialogRef = this.dialog.open(AddUserFormComponent, {
      width: '400px', // Set your desired width
      data: { name: 'Optional Data' }, // Pass data to the form if needed
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  tableData = [
    {
      order: '#1001',
      date: '2025-08-20',
      customer: 'John Doe',
      payment: 'Pending',
      total: 150.0,
      paid: 100.0,
      due: 50.0,
      action: 'View',
    },
    {
      order: '#1002',
      date: '2025-08-21',
      customer: 'Jane Smith',
      payment: 'Paid',
      total: 200.0,
      paid: 200.0,
      due: 0.0,
      action: 'View',
    },
    {
      order: '#1003',
      date: '2025-08-22',
      customer: 'Alice Johnson',
      payment: 'Pending',
      total: 300.0,
      paid: 150.0,
      due: 150.0,
      action: 'View',
    },
    {
      order: '#1004',
      date: '2025-08-23',
      customer: 'Bob Lee',
      payment: 'Paid',
      total: 120.0,
      paid: 120.0,
      due: 0.0,
      action: 'View',
    },
    {
      order: '#1005',
      date: '2025-08-23',
      customer: 'Emily Davis',
      payment: 'Pending',
      total: 180.0,
      paid: 80.0,
      due: 100.0,
      action: 'View',
    },
    {
      order: '#1006',
      date: '2025-08-24',
      customer: 'Chris Brown',
      payment: 'Paid',
      total: 250.0,
      paid: 250.0,
      due: 0.0,
      action: 'View',
    },
    {
      order: '#1007',
      date: '2025-08-24',
      customer: 'Diana Prince',
      payment: 'Pending',
      total: 100.0,
      paid: 40.0,
      due: 60.0,
      action: 'View',
    },
    {
      order: '#1008',
      date: '2025-08-25',
      customer: 'Mark Twain',
      payment: 'Paid',
      total: 175.0,
      paid: 175.0,
      due: 0.0,
      action: 'View',
    },
    {
      order: '#1009',
      date: '2025-08-25',
      customer: 'Samantha Green',
      payment: 'Pending',
      total: 220.0,
      paid: 120.0,
      due: 100.0,
      action: 'View',
    },
    {
      order: '#1010',
      date: '2025-08-26',
      customer: 'Tom Hardy',
      payment: 'Paid',
      total: 310.0,
      paid: 310.0,
      due: 0.0,
      action: 'View',
    },
  ];

  totalIncomeSum() {
    this.totalIncome = this.tableData.reduce(
      (acc, item) => acc + item.total,
      0,
    );
  }
}
