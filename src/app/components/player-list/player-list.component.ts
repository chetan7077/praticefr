import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../../models/Player';
import { PlayerserviceService } from '../../services/playerservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css'
})
export class PlayerListComponent 
{
  public players: Observable<Player[]> =of([]);

  constructor(private service: PlayerserviceService,
    private router:Router )
    {

    }

    ngOnInit(){
      this.getAll();
    }

    getAll()
    {
      this.players=this.service.getAllPlayer();
    }

    deletePlayer(id:number)
    {
      return this.service.deletePlayer(id).subscribe((data)=>{
        console.log(data);
        this.getAll();

      })
    }

    playerDetails(id:number)
    {
      this.router.navigate(['details',id]);
    }

    updateDetails(id:number)
    {
      this.router.navigate(['update',id]);
    }
}
