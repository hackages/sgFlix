import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'hf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() toggleNav: boolean = false;
  @Input() toggle: Function;
  @Input() searchTerm$: Subject<string>;
  @Output() searchEmitter: EventEmitter<string> = new EventEmitter();

  search(value: string) {
    this.searchEmitter.emit(value);
  }
}
