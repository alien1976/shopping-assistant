import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sa-toolbar',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="openMenu.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      <ng-content></ng-content>
      <span class="example-spacer"></span>
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

  goBack() {
    window.history.back();
  }
}
