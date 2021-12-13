import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-gamelogs',
    templateUrl: './gamelogs.component.html',
    styleUrls: ['./gamelogs.component.scss']
})

export class GamelogsComponent implements OnInit {
    @Input() gameLogs;
    @Input() season;
    @Input() team;
    stat = '';
    ascending = false;

    constructor() { }

    ngOnInit() {
    }

    // Function to sort Game Logs by the given column stat; either ascending or descending order
    sortGames(stat) {
        this.stat = stat;
        var fieldElement = document.getElementsByClassName(stat);
        var dec = document.querySelectorAll('.descending');
        var asc = document.querySelectorAll('.ascending');

        if(!fieldElement[0].classList.contains('descending')) {
            this.gameLogs = decSortByKey(this.gameLogs, stat);
            
            [].forEach.call(asc, function(el) {
                el.classList.remove("ascending");
            });

            [].forEach.call(dec, function(el) {
                el.classList.remove("descending");
            });

            fieldElement[0].className += " descending";

            this.ascending = false;
        } else {
            this.gameLogs = ascSortByKey(this.gameLogs, stat);
            
            [].forEach.call(asc, function(el) {
                el.classList.remove("ascending");
            });

            [].forEach.call(dec, function(el) {
                el.classList.remove("descending");
            });

            fieldElement[0].className += " ascending";

            this.ascending = true;
        }

        function decSortByKey(array, key) {
            return array.sort(function(a, b) {
                var x = a['playerEventStats'][key]; var y = b['playerEventStats'][key];
                return ((x < y) ? 1 : ((x > y) ? -1 : 0));
            });
        }

        function ascSortByKey(array, key) {
            return array.sort(function(a, b) {
                var x = a['playerEventStats'][key]; var y = b['playerEventStats'][key];
                return ((x > y) ? 1 : ((x < y) ? -1 : 0));
            });
        }
    }
}
