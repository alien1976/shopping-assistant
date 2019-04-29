import { Component, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../user-model';

@Component({
  selector: 'sa-toolbar',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="openMenu.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      <ng-content></ng-content>
      <span class="example-spacer"></span>
      <div *ngIf="user.name">
        {{user.name}}
      </div>
      <button mat-icon-button (click)="goBack()">
        <mat-icon>arrow_back_ios</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [
    `
    .example-spacer {
      flex: 1 1 auto;
    }

  `
  ]
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
  @Input() user: User;
  goBack() {
    window.history.back();
  }
}
