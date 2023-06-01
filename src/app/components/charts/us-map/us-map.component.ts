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
  updateFlag = false;

  data = [
    ['us-ma', 0],
    ['us-wa', 12312],
    ['us-ca', 3123123132],
    ['us-or', 13],
    ['us-wi', 14],
    ['us-me', 15],
    ['us-mi', 16],
    ['us-nv', 17],
    ['us-nm', 18],
    ['us-co', 19],
    ['us-wy', 20],
    ['us-ks', 21],
    ['us-ne', 22],
    ['us-ok', 23],
    ['us-mo', 24],
    ['us-il', 25],
    ['us-in', 26],
    ['us-vt', 27],
    ['us-ar', 28],
    ['us-tx', 29],
    ['us-ri', 30],
    ['us-al', 31],
    ['us-ms', 32],
    ['us-nc', 33],
    ['us-va', 34],
    ['us-ia', 35],
    ['us-md', 36],
    ['us-de', 37],
    ['us-pa', 38],
    ['us-nj', 39],
    ['us-ny', 40],
    ['us-id', 41],
    ['us-sd', 42],
    ['us-ct', 43],
    ['us-nh', 44],
    ['us-ky', 45],
    ['us-oh', 46],
    ['us-tn', 47],
    ['us-wv', 48],
    ['us-dc', 49],
    ['us-la', 50],
    ['us-fl', 51],
    ['us-ga', 52],
    ['us-sc', 53],
    ['us-mn', 54],
    ['us-mt', 55],
    ['us-nd', 56],
    ['us-az', 57],
    ['us-ut', 58],
    ['us-hi', 59],
    ['us-ak', 60],
  ];

  chartData = [
    {
      code3: 'ABW',
      z: 105,
    },
    {
      code3: 'AFG',
      z: 35530,
    },
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
      itemStyle:{
        color: '#fff',
      }
      ,itemHoverStyle:{
        color: '#4aa4ff',
      }
    },
    colorAxis: {
      dataClasses: [
        {
          to: 25,
          color: '#D27685',
        },
        {
          from: 26,
          to: 50,
          color: '#19376D',
        },
        {
          from: 51,
          to: 75,
          color: '#576CBC',
        },
        {
          from: 76,
          to: 100,
          color: '#A5D7E8',
        },
      ],

      type: 'linear',
    },
    series: [
      {
        point: {
          events: {
            // click: this.getDataByCountryKey.bind(this)
          },
        },
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

  getDataByCountryKey(ckey: any) {
    console.log('CountryKey:' + ckey);
  }
}
