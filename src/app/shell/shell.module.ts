import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { ShellComponent } from './shell/shell.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFlagIconCssModule } from 'ngx-flag-icon-css';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [MenuComponent, ShellComponent],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgxFlagIconCssModule,
    PrettyJsonModule,
    DragDropModule
  ]
})
export class ShellModule { }
