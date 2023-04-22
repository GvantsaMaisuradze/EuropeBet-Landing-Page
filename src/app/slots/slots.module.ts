import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlotsModalComponent } from './slots-modal/slots-modal.component';
import { SharedModule } from '../shared/shared.module';
import { CashGamesComponent } from './cash-games/cash-games.component';
import { SpringSeriesComponent } from './spring-series/spring-series.component';
import { FinalStageComponent } from './final-stage/final-stage.component';
import { LeaderboardComponent } from '../other components/leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    SlotsModalComponent,
    CashGamesComponent,
    SpringSeriesComponent,
    FinalStageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

  ],
  exports:[
    SlotsModalComponent,
  ]
})
export class SlotsModule { }
