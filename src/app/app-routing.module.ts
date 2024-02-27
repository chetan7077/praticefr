import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { PlayerUpdateComponent } from './components/player-update/player-update.component';

const routes: Routes = [
  {
    path:'add',
    component: CreatePlayerComponent
  },
  {
    path:'list',
    component:  PlayerListComponent
  },
  {
    path:'details/:playerId',
    component: PlayerDetailsComponent
  },
  {
    path:'update/:playerId',
    component: PlayerUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
