import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
})
export class DriverComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    height: 200,
    contentHeight: 150,
    initialView: 'dayGridMonth',
    editable: true, // drag & drop
    selectable: true,
    weekends: true,
    aspectRatio: 1,
    expandRows: false,
  };
  constructor() {}

  ngOnInit(): void {}
}
