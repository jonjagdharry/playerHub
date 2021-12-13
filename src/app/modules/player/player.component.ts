import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})

export class PlayerComponent implements OnInit {
    isLoading = false;
    playerInfo = null;
    gameLogs = [];
    season;
    goals = [];
    shots = [];
    shotsOnGoal = [];
    turnovers = [];
    team;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private playerService: PlayerService
    ) { }

    ngOnInit() {
        this.isLoading = true;
        this.playerService.getPlayer().subscribe(playerInfo => {
            if(playerInfo != null && playerInfo != undefined) {
                this.playerInfo = playerInfo;
                this.team = this.playerInfo.currentTeam.officialId;
            } else {
                this.playerInfo = null;
            }

            this.playerService.getSeason().subscribe(season => {
                if(season != null && season != undefined) {
                    this.gameLogs = season.gameLogs;
                    this.season = season.seasonStats;
    
                    this.gameLogs.forEach(game => {
                        // Since only dealing with PLL, if other levels/leagues were included could add checks for those
                        if(game.slugname.includes("LACROSSE_PLL")) {
                            const date = game.slugname.split('_');
    
                            this.goals.push({x: new Date(parseInt(date[2]), parseInt(date[3]), parseInt(date[4])), y: game['playerEventStats'].goals});
                            this.shots.push({x: new Date(parseInt(date[2]), parseInt(date[3]), parseInt(date[4])), y: game['playerEventStats'].shots});
                            this.shotsOnGoal.push({x: new Date(parseInt(date[2]), parseInt(date[3]), parseInt(date[4])), y: game['playerEventStats'].shotsOnGoal});
                            this.turnovers.push({x: new Date(parseInt(date[2]), parseInt(date[3]), parseInt(date[4])), y: game['playerEventStats'].turnovers});
    
                            // Create new data point for game date based on slugname
                            game['playerEventStats'].date = new Date(parseInt(date[2]), parseInt(date[3]), parseInt(date[4]));
                        } else {
                            game.date = null;
                        }

                        // Grab the opponent based on if the players team matches home or away
                        if(this.team != null) {
                            if(game.homeTeam.officialId == this.team) {
                                game['playerEventStats'].opp = game.awayTeam.officialId;
                            } else {
                                game['playerEventStats'].opp = game.homeTeam.officialId;
                            }
                        } else {
                            game['playerEventStats'].opp = null;
                        }
                    });
                }
            });

            this.isLoading = false;
        });
    }
}
