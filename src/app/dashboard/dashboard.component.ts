import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
// datepickerModel: any;
todayPlaceholder: any;
totalIncome: any;
 datepickerModel?: Date;
  daterangepickerModel?: Date[];

  constructor() { }

  ngOnInit(): void {

      const today = new Date();
    this.todayPlaceholder = ` ${formatDate(today, 'yyyy-MM-dd', 'en-US')}`;
  

    this.totalIncomeSum();
  }

tableData = [
  {
    "order": "#1001",
    "date": "2025-08-20",
    "customer": "John Doe",
    "payment": "Pending",
    "total": 150.00,
    "paid": 100.00,
    "due": 50.00,
    "action": "View"
  },
  {
    "order": "#1002",
    "date": "2025-08-21",
    "customer": "Jane Smith",
    "payment": "Paid",
    "total": 200.00,
    "paid": 200.00,
    "due": 0.00,
    "action": "View"
  },
  {
    "order": "#1003",
    "date": "2025-08-22",
    "customer": "Alice Johnson",
    "payment": "Pending",
    "total": 300.00,
    "paid": 150.00,
    "due": 150.00,
    "action": "View"
  },
  {
    "order": "#1004",
    "date": "2025-08-23",
    "customer": "Bob Lee",
    "payment": "Paid",
    "total": 120.00,
    "paid": 120.00,
    "due": 0.00,
    "action": "View"
  },
  {
    "order": "#1005",
    "date": "2025-08-23",
    "customer": "Emily Davis",
    "payment": "Pending",
    "total": 180.00,
    "paid": 80.00,
    "due": 100.00,
    "action": "View"
  },
  {
    "order": "#1006",
    "date": "2025-08-24",
    "customer": "Chris Brown",
    "payment": "Paid",
    "total": 250.00,
    "paid": 250.00,
    "due": 0.00,
    "action": "View"
  },
  {
    "order": "#1007",
    "date": "2025-08-24",
    "customer": "Diana Prince",
    "payment": "Pending",
    "total": 100.00,
    "paid": 40.00,
    "due": 60.00,
    "action": "View"
  },
  {
    "order": "#1008",
    "date": "2025-08-25",
    "customer": "Mark Twain",
    "payment": "Paid",
    "total": 175.00,
    "paid": 175.00,
    "due": 0.00,
    "action": "View"
  },
  {
    "order": "#1009",
    "date": "2025-08-25",
    "customer": "Samantha Green",
    "payment": "Pending",
    "total": 220.00,
    "paid": 120.00,
    "due": 100.00,
    "action": "View"
  },
  {
    "order": "#1010",
    "date": "2025-08-26",
    "customer": "Tom Hardy",
    "payment": "Paid",
    "total": 310.00,
    "paid": 310.00,
    "due": 0.00,
    "action": "View"
  }
];

totalIncomeSum(){
  this.totalIncome = this.tableData.reduce((acc, item) => acc +  item.total,0);
}

}
