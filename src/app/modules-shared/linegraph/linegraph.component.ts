import { Component, OnInit, Input } from '@angular/core';
import * as CanvasJS from 'src/assets/canvasjs.min';

@Component({
    selector: 'app-linegraph',
    templateUrl: './linegraph.component.html',
    styleUrls: ['./linegraph.component.scss']
})

export class LinegraphComponent implements OnInit {
    @Input() graphTitle;
    @Input() dataSet1;
    @Input() dataSet1Name;
    @Input() dataSet2;
    @Input() dataSet2Name;
    @Input() dataSet3;
    @Input() dataSet3Name;
    @Input() dataSet4;
    @Input() dataSet4Name;

    constructor() { }

    ngOnInit() {
        // Utilizing CanvasJS, initialize object for drawing the line graph
		let chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: this.graphTitle,
                fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
                fontWeight: 500,
                fontSize: 34,
                color: "#333"
            },
            axisX: {
                valueFormatString: "M/D/YY"
            },
            toolTip: {
                shared: true
            },
            legend: {
                verticalAlign: "top",
		        horizontalAlign: "center",
            },
            data: [{
                type: "line",
                name: this.dataSet1Name,
                showInLegend: true,
                dataPoints: this.dataSet1
            },
            {
                type: "line",
                name: this.dataSet2Name,
                showInLegend: true,
                dataPoints: this.dataSet2
            },
            {
                type: "line",
                name: this.dataSet3Name,
                showInLegend: true,
                dataPoints: this.dataSet3
            },
            {
                type: "line",
                name: this.dataSet4Name,
                showInLegend: true,
                dataPoints: this.dataSet4
            }
            ]
        });
        
        chart.render();
    }
}
