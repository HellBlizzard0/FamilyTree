import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FamilyGraphComponent } from './Components/family-graph/family-graph.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [AppComponent, FamilyGraphComponent],
  imports: [CommonModule, RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
