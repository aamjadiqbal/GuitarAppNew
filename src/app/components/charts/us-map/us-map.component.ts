import { Component, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import USMap from '@highcharts/map-collection/countries/us/us-all.geo.json';

@Component({
  selector: 'app-us-map',
  templateUrl: './us-map.component.html',
  styleUrls: ['./us-map.component.scss'],
})
export class UsMapComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  updateFlag = true;

  data = [
    ['us-', 3684.11, '3.7K'],
    ['us-???', 169, '169'],
    ['us-3903', 53.36, '53'],
    ['us-aa', 7179.64, '7.2K'],
    ['us-ab', 949, '949'],
    ['us-abingdon', 156.9, '157'],
    ['us-ae', 181034.02, '181K'],
    ['us-ak', 1386057.57, '1.4M'],
    ['us-al', 10231794.36, '10M'],
    ['us-alabama', 0, '0'],
    ['us-alberta', 351.78000000000003, '352'],
    ['us-ap', 173767.61, '174K'],
    ['us-ar', 5836443.62, '5.8M'],
    ['us-az', 20235865.25, '20M'],
    ['us-bc', 265.94, '266'],
    ['us-bolivar', 2972.65, '3K'],
    ['us-ca', 133534080.7, '134M'],
    ['us-california', 0, '0'],
    ['us-californie', 119.95, '120'],
    ['us-campbell river', 179.1, '179'],
    ['us-co', 16977149.93, '17M'],
    ['us-corozal', 5129.91, '5.1K'],
    ['us-ct', 10432508.99, '10M'],
    ['us-dc', 1508777.36, '1.5M'],
    ['us-de', 8757519.86, '8.8M'],
    ['us-fl', 58148251.25, '58M'],
    ['us-fm', 357, '357'],
    ['us-ga', 25824161.1, '26M'],
    ['us-gu', 1186.08, '1.2K'],
    ['us-guerrero cuauhtemoc', 50, '50'],
    ['us-hi', 2332261.8, '2.3M'],
    ['us-ia', 5018812.24, '5M'],
    ['us-id', 3863796.82, '3.9M'],
    ['us-il', 25143058.65, '25M'],
    ['us-in', 10571979.78, '11M'],
    ['us-kharkivska obl', 70, '70'],
    ['us-ks', 6934160.28, '6.9M'],
    ['us-ky', 8095082.15, '8.1M'],
    ['us-la', 9339909.74, '9.3M'],
    ['us-las vegas', 130.02, '130'],
    ['us-louisiana', 0, '0'],
    ['us-ma', 17384547.38, '17M'],
    ['us-md', 13602412.67, '14M'],
    ['us-me', 2677173.73, '2.7M'],
    ['us-mi', 18432266.84, '18M'],
    ['us-mn', 10809580.69, '11M'],
    ['us-mo', 10028829.09, '10M'],
    ['us-ms', 4522140.58, '4.5M'],
    ['us-mt', 1963009.22, '2M'],
    ['us-nb', 479.99, '480'],
    ['us-nc', 22157756.51, '22M'],
    ['us-nd', 1419586.89, '1.4M'],
    ['us-ne', 4372633.8, '4.4M'],
    ['us-nh', 5805467.31, '5.8M'],
    ['us-nj', 20676809.35, '21M'],
    ['us-nm', 4553619.16, '4.6M'],
    ['us-nueva esparta', 74.99, '75'],
    ['us-nv', 10024003.99, '10M'],
    ['us-ny', 41936401.1, '42M'],
    ['us-oh', 19110738.44, '19M'],
    ['us-ok', 8925096.88, '8.9M'],
    ['us-on', 6551.03, '6.6K'],
    ['us-ontario', 963.47, '963'],
    ['us-or', 18123941.79, '18M'],
    ['us-pa', 19080728.94, '19M'],
    ['us-pr', 464360.84, '464K'],
    ['us-puerto rico', 749, '749'],
    ['us-qc', 1298.99, '1.3K'],
    ['us-ri', 1887858.45, '1.9M'],
    ['us-sc', 10264786.14, '10M'],
    ['us-sd', 2135101.7, '2.1M'],
    ['us-select', 158.35, '158'],
    ['us-sk', 89.99, '90'],
    ['us-tn', 21078776.94, '21M'],
    ['us-tx', 86651559.64999999, '87M'],
    ['us-us', 2069.08, '2.1K'],
    ['us-ut', 7679263.75, '7.7M'],
    ['us-va', 19961551.52, '20M'],
    ['us-vi', 30308.69, '30K'],
    ['us-virginia', 2035.17, '2K'],
    ['us-vt', 1430722.26, '1.4M'],
    ['us-wa', 18233361.75, '18M'],
    ['us-wi', 9017259.02, '9M'],
    ['us-wisconsin', 0, '0'],
    ['us-wv', 2118384.85, '2.1M'],
    ['us-wy', 880877.06, '881K'],
  ];

  chartOptions: any = {
    chart: {
      map: USMap as any,
    },
    title: {
      text: 'Sales',
      style: {
        color: '#fff',
        fontSize: '26px',
        fontFamily: 'Poppins, sans-serif',
      },
    },
    subtitle: {
      // text: 'Sales by State',
    },
    exporting: {
      enabled: true,
    },
    credits: {
      enabled: true,
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox',
      },
    },
    legend: {
      enabled: true,
      itemStyle: {
        color: '#fff',
      },
      itemHoverStyle: {
        color: '#4aa4ff',
      },
    },
    colorAxis: {
      dataClasses: [
        {
          to: 100000,
          color: '#F8F1F1',
        },
        {
          from: 100000,
          to: 1000000,
          color: '#E8AA42',
        },
        {
          from: 1000000,
          to: 5000000,
          color: '#C88EA7',
        },
        {
          from: 5000000,
          to: 10000000,
          color: '#18978F',
        },
        {
          from: 10000000,
          to: 25000000,
          color: '#E8D2A6',
        },
        {
          from: 25000000,
          to: 50000000,
          color: '#0E5E6F',
        },
        {
          from: 50000000,
          to: 100000000,
          color: '#E76161',
        },
      ],

      type: 'linear',
    },
    series: [
      {
        point: {},
        type: 'map',
        name: 'Sales',
        states: {
          hover: {
            color: '#BADA55',
          },
        },
        dataLabels: {
          enabled: true,
          format: '{point.value}',
          // format : '{point.name}', to abbreviate the value
          formatter: () => {
            return '0';
          },
          color: '#fff',
          style: {
            color: '#fff',
          },
        },
        data: this.data,
        allAreas: false,
      },
    ],
  };

  constructor() {
    Highcharts.setOptions({
      lang: {
        numericSymbols: [' thousands', ' millions'],
      },
    });
  }

  ngOnInit(): void {
    Highcharts.setOptions({
      lang: {
        numericSymbols: [' thousands', ' millions'],
      },
    });
  }
}