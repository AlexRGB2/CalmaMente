import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexTheme,
  ApexMarkers,
  ApexLegend,
  ApexPlotOptions,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  theme: ApexTheme;
  markers: ApexMarkers;
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-charts-model',
  templateUrl: './charts-model.component.html',
  styleUrl: './charts-model.component.scss',
})
export class ChartsModelComponent {
  @Output() isVisibleChart: EventEmitter<boolean> = new EventEmitter();
  public chartOptionsDispersionClusters!: Partial<ChartOptions>;
  public chartMetodoCodo!: Partial<ChartOptions>;
  public chartOptionsTotalClusters!: Partial<ChartOptions>;
  theme: ApexTheme = {};

  constructor() {
    this.theme.mode = 'light';
    this.loadCharts();
  }

  loadCharts() {
    const jsonDispersionClusters = JSON.parse(localStorage.getItem('2.1')!);
    const jsonMetodoCodo = JSON.parse(localStorage.getItem('2.2')!);
    const jsonTotalClusters = JSON.parse(localStorage.getItem('2.3')!);

    this.dispersionClusters(jsonDispersionClusters);
    this.metodoCodo(jsonMetodoCodo);
    this.totalClusters(jsonTotalClusters);
  }

  // Función para crear marcadores discretos dinámicos
  createDiscreteMarkers(data: number[][], seriesIndex: number) {
    // Índice de la última serie
    return data.map((point, index) => ({
      seriesIndex: seriesIndex, // Índice de la última serie
      dataPointIndex: index,
      size: 10,
      shape: 'cross' as ApexMarkers['shape'], // Usar ApexMarkerShape
      fillColor: '#0a0908',
      strokeColor: '#FFFFFF',
    }));
  }

  setVisibleCharts(): void {
    this.isVisibleChart.emit(false);
  }

  dispersionClusters(json: any): void {
    const seriesData = json.valor;

    this.chartOptionsDispersionClusters = {
      series: seriesData,
      chart: {
        height: 350,
        type: 'scatter',
        zoom: {
          enabled: true,
          type: 'xy',
        },
        events: {
          mounted: function (chartContext, config) {
            // Obtén el div con el id 'chartDispersionClusters'
            const chartDiv = document.getElementById('chartDispersionClusters');

            // Selecciona el último marcador de la leyenda y aplica el color negro
            const legendMarkers = chartDiv!.querySelectorAll(
              '.apexcharts-legend-series .apexcharts-legend-marker'
            );
            if (legendMarkers.length > 0) {
              const lastLegendMarker = legendMarkers[
                legendMarkers.length - 1
              ] as HTMLElement;
              if (lastLegendMarker) {
                lastLegendMarker.style.fill = '#000000'; // Color negro
              }
            }
          },
          updated: function (chartContext, config) {
            // Obtén el div con el id 'chartDispersionClusters'
            const chartDiv = document.getElementById('chartDispersionClusters');

            // Selecciona el último marcador de la leyenda y aplica el color negro
            const legendMarkers = chartDiv!.querySelectorAll(
              '.apexcharts-legend-series .apexcharts-legend-marker'
            );
            if (legendMarkers.length > 0) {
              const lastLegendMarker = legendMarkers[
                legendMarkers.length - 1
              ] as HTMLElement;
              if (lastLegendMarker) {
                lastLegendMarker.style.fill = '#000000'; // Color negro
              }
            }
          },
        },
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function (val) {
            return parseFloat(val).toFixed(2);
          },
        },
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: function (val) {
            return val.toFixed(2);
          },
        },
      },
      theme: {
        mode: this.theme.mode,
        palette: 'palette1',
      },
      markers: {
        size: 5,
        discrete: this.createDiscreteMarkers(
          seriesData[seriesData.length - 1].data,
          seriesData.length - 1
        ),
        strokeWidth: 4,
      },
      legend: {
        position: 'top',
      },
      title: {
        text: json.nombre,
      },
    };
  }

  metodoCodo(json: any): void {
    const seriesData = json.valor;
    console.log(seriesData);

    this.chartMetodoCodo = {
      series: [
        {
          name: '',
          data: seriesData[1],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        title: {
          text: 'Número de Clusters',
        },
        categories: seriesData[0],
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: function (val) {
            return val.toFixed(2);
          },
        },
      },
      theme: {
        mode: this.theme.mode,
        palette: 'palette1',
      },
      legend: {
        position: 'top',
      },
      title: {
        text: json.nombre,
      },
    };
  }

  totalClusters(json: any): void {
    const seriesData = json.valor;

    this.chartOptionsTotalClusters = {
      series: seriesData,
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
        },
      },
      xaxis: {
        categories: ['Entrenamiento'],
      },
      yaxis: {
        title: {
          text: 'Clasificaciones',
        },
      },
      theme: {
        mode: this.theme.mode,
        palette: 'palette1',
      },
      legend: {
        position: 'top',
      },
      title: {
        text: json.nombre,
      },
    };
  }
}
