import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexFill,
  ApexYAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStates,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  states: ApexStates;
  stroke: ApexStroke;
  grid: ApexGrid;
};

export type range = {
  max: number,
  min: number
}

@Component({
  selector: 'app-common-chart',
  templateUrl: './common-chart.component.html',
  styleUrls: ['./common-chart.component.scss']
})
export class CommonChartComponent implements OnInit {
  @Input('graphType') graphType;
  @Input('noOfSeries') noOfSeries: number;
  @Input('xAxisLabel') xAxisLabel: string;
  @Input('range') range: range;
  @Input('graphColor') graphColor;
  @Input('displayXAxis') displayXAxis: boolean;
  @Input('displayYAxis') displayYAxis: boolean;
  @Input('graphHeight') graphHeight: number;
  @Input('opacity') opacity: number;
  @Input('showGrid') showGrid: boolean;
  @Input('graphWidth') graphWidth: number;
  @Input('borderColor') borderColor: string;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    
  }

  
  ngOnInit() {
    console.log("type: ",this.graphType);
    console.log("noOfSeries: ",this.noOfSeries);
    console.log("xAxisLabel: ",this.xAxisLabel);
    console.log("range: ",this.range, this.range);
    console.log("graphColor", this.graphColor);
    this.borderColor = this.borderColor? this.borderColor : '#1565d8';
    let seriesData = [];
    let xaxisSeries = [];
    let xAxisLabelFontColor = [];
    if(!this.noOfSeries) {
      this.noOfSeries = 31;
    }
    for(let i=0; i< this.noOfSeries; i++) {
      seriesData.push(Math.floor(Math.random() * (this.range.max - this.range.min) ) + this.range.min);
      xaxisSeries.push(i+1);
    }
    
    this.chartOptions = {
      series: [
        {
          name: "Visitors",
          data: seriesData
        }
      ],
      chart: {
        height: this.graphHeight,
        type: this.graphType,
        toolbar: {
          show: false
        }
      },
      title: {
        text: ""
      },
      xaxis: {
        categories: xaxisSeries,
        labels: {
            show: this.displayXAxis,
            style: {
              colors: "#a6a7ab",
              fontSize: '12px',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
          },
        }
      },
      yaxis: {
        show: this.displayXAxis,
        showAlways: true,
        showForNullSeries: true,
        opposite: true,
        labels: {
          style: {
            colors: "#a6a7ab",
            fontSize: '12px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-label',
          },
          formatter: function (value) {
            return value/1000 + "K";
          }
        },
        

      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40px',
          colors: {
            ranges: [{
              from: 0,
              to: 10000,
              color: this.graphColor,
            }]
          },
          dataLabels: {
            position: "top",
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        enabled: true,
        x: {
          show: true,
          format: 'dd MMM',
          formatter: function(val, opts) {
            return val + " January 2018";
          }
        }
        // custom: function({ series, seriesIndex, dataPointIndex, w }) {
        //   return (
        //     '<div class="arrow_box">' +
        //     "<span>" +
        //     w.globals.labels[dataPointIndex] +
        //     ": " +
        //     series[seriesIndex][dataPointIndex] +
        //     "</span>" +
        //     "</div>"
        //   );
        // }
      },
      states: {
        normal: {
            filter: {
                type: 'none',
                value: 0,
            }
        },
        hover: {
            filter: {
                type: 'darken',
                value: 0.55,
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'darken',
                value: 0.05,
            }
        },
      },

      stroke: {
        show: true,
        lineCap: 'butt',
        colors: [this.borderColor],
        width: 2,
        dashArray: 0,     
        curve: 'straight',
      },
      fill: {
        colors: this.graphColor,
        type:'solid',
        opacity: this.opacity,
      },
      grid: {
        show: this.showGrid,
      }
    };

    if(this.graphWidth) {
      this.chartOptions.chart.width = this.graphWidth;
    }
  }
}
