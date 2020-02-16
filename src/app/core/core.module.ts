import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CoreRoutingModule } from './core-routing.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    BootstrapComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule
  ],
  exports: [BootstrapComponent]
})
export class CoreModule { }
