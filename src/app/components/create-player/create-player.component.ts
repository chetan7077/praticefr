import { Component } from '@angular/core';
import { Player } from '../../models/Player';
import { PlayerserviceService } from '../../services/playerservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrl: './create-player.component.css'
})
export class CreatePlayerComponent {

  submitted=false;
  constructor(private service:PlayerserviceService, private router: Router)
  {

  }

  player = new Player();

  onSubmit(){
    this.save();
    this.submitted=true;
  }

  save()
  {
    this.service.createPlayer(this.player).subscribe();

  }

}
