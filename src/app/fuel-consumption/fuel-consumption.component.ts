import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-fuel-consumption',
  templateUrl: './fuel-consumption.component.html',
  styleUrls: ['./fuel-consumption.component.scss'],
})
export class FuelConsumptionComponent implements OnInit {
  todayPlaceholder: any;
  totalIncome: any;
  datepickerModel?: Date;
  daterangepickerModel?: Date[];
  form: FormGroup;

  constructor() {
    const today = new Date().toISOString().split('T')[0];
    this.form = new FormGroup({
      date: new FormControl(today),
    });
  }

  ngOnInit(): void {}

  fuelData = [
    {
      date: '2025-08-20',
      gas_station: 'Reliance',
      location: 'Tamar',
      quantity: 30,
      amount: 3000,
    },
    {
      date: '2025-08-20',
      gas_station: 'Reliance',
      location: 'Tamar',
      quantity: 30,
      amount: 3000,
    },
    {
      date: '2025-08-20',
      gas_station: 'Reliance',
      location: 'Tamar',
      quantity: 30,
      amount: 3000,
    },
    {
      date: '2025-08-20',
      gas_station: 'Reliance',
      location: 'Tamar',
      quantity: 30,
      amount: 3000,
    },
    {
      date: '2025-08-20',
      gas_station: 'Reliance',
      location: 'Tamar',
      quantity: 30,
      amount: 3000,
    },
    {
      date: '2025-08-20',
      gas_station: 'Reliance',
      location: 'Tamar',
      quantity: 30,
      amount: 3000,
    },
  ];

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
}
