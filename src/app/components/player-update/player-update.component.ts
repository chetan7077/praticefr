import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerserviceService } from '../../services/playerservice.service';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-player-update',
  templateUrl: './player-update.component.html',
  styleUrl: './player-update.component.css'
})
export class PlayerUpdateComponent {

  playerId: number=0;
  
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

  onSubmit()
  {
    this.updatePlayer();
  }

  updatePlayer()
  {
    this.service.updatePlayer(this.player).subscribe((data)=>{
      
      //this.player= new Player();
      this.list();

    })
  }
  list(){
    this.router.navigate(['list']);
  }
}
