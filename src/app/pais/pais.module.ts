import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorpaisComponent } from './pages/por-pais/porpais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorpaisComponent,
    PorRegionComponent,
    VerPaisComponent,
  ],

  exports:[
    PorCapitalComponent,
    PorpaisComponent,
    PorRegionComponent,
    VerPaisComponent,
  ],
  
  imports: [
    CommonModule
  ]
})
export class PaisModule { }
