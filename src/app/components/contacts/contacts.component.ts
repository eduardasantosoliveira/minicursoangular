import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cv-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  @Input() phone: string = '';
  @Input() email: string = '';
  @Input() location: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
