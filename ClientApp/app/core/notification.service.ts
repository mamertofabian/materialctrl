import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
    messages: string[] = [];
    msg: string;

    constructor() { }

    add(message: string) {
        this.msg = `${formatDate(Date.now(), 'short', 'en')}: ${message}`;
        this.messages.push(this.msg);
        console.log(this.msg);
    }

    clear() {
        this.messages = [];
    }
}
