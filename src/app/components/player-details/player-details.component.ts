import { Component } from '@angular/core';
import { Player } from '../../models/Player';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerserviceService } from '../../services/playerservice.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.css'
})
export class PlayerDetailsComponent {
  playerId:number =0;

  player: Player= new Player();

  constructor(private route:ActivatedRoute, private router: Router,private service: PlayerserviceService)
  {}

  ngOnInit()
  {
    this.player= new Player();

    this.playerId= this.route.snapshot.params['playerId'];

    this.service.getOnePlayer(this.playerId).subscribe((data)=>{
      console.log(data);
      this.player=data;
    })
  }

  list(){
    this.router.navigate(['list']);
  }
}
