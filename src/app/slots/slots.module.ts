import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlotsModalComponent } from './slots-modal/slots-modal.component';
import { SharedModule } from '../shared/shared.module';
import { CashGamesComponent } from './cash-games/cash-games.component';
import { SpringSeriesComponent } from './spring-series/spring-series.component';
import { FinalStageComponent } from './final-stage/final-stage.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ContentInfoComponent } from './content-info/content-info.component';
import { ContentRulesComponent } from './content-rules/content-rules.component';
import { ContentPromotionsComponent } from './content-promotions/content-promotions.component';

@NgModule({
  declarations: [
    SlotsModalComponent,
    CashGamesComponent,
    SpringSeriesComponent,
    FinalStageComponent,
    LeaderboardComponent,
    ContentInfoComponent,
    ContentRulesComponent,
    ContentPromotionsComponent
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
