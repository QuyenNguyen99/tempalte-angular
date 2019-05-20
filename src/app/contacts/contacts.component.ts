import { Component, OnInit, ContentChild } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'app/data';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  newTieude = '';
  newParent = '';
  arrContent: any = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.arrContent = data.list_contact;
    this.arrContent = JSON.parse(localStorage.getItem('data'));
  }

  // xử lý để hiển thị bảng confirm
  removeContact(id: number) {
    this.an_hien = true;
  }
  an_hien:any = false;

  // xử lý xác nhận delete:
  removeContacts(id: number){
    if(this.an_hien = true){
      const index = this.arrContent.findIndex(contact => contact.id === id);
      this.arrContent.splice(index,1);
      this.an_hien = false; 
    }
  }

  // xử lý xác nhận cancel:
  cancelContact(id: number){
    this.an_hien = false;
  }

}
