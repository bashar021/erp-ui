import React from 'react'
import './styles/attendence_chart.css'
import Chart from "chart.js/auto";
import "chart.js";
import { useState } from "react";
import { Line } from 'react-chartjs-2';
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from 'chart.js/auto'
import { LinearScale, BarElement } from 'chart.js'
import {ArcElement} from 'chart.js'
import {PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js'
// import { Chart } from 'react-chartjs-2'

ChartJS.register(PointElement,LineElement,Title,Tooltip,Legend)
// import Chart from "chart.js/auto";
// import { Line } from "react-chartjs-2";
// import Chart from 'chart.js/auto';
// import { Chart }            from 'react-chartjs-2'
// import { CategoryScale, Chart } from "chart.js";

Chart.register(ArcElement)
Chart.register(CategoryScale, LinearScale, BarElement)


export default function Attendence_chart() {


    const labels = ["January", "February", "March", "April", "May", "June"];

    const data = {
        labels: labels,
        datasets: [{
          label: 'Month Wise Attendence',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          lineTension:0.5,
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 2,
          tension: 0.2,
          showLine: true,
          pointHitRadius: 10,
          pointRadius: 5,
          pointHoverBorderWidth: 2,
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBackgroundColor: '#3DAA1D',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          label: 'My First dataset',
        //   fill: true,
        //   lineTension: 0.1,
          backgroundColor: '#dff8d8',
        //   borderColor: '#3DAA1D',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#3DAA1D',
          pointBackgroundColor: '#fff',
        }]
      };
      const options = {
        scales: {
          y: {
            grid: {
              display: false
            }
          },
          x: {
            grid: {
              display: false      
            }
          },
          
        }
        // scales: {
        //     yAxes: [
        //       gridLines: {
        //         display: false
        //       }
        //     ],
        //     xAxes: [
        //       gridLines: {
        //         display: false
        //       }
        //     ]
        //   },
        //   legend: {
        //     display: false
        //   }
      };
      
    // const state = {
    //     labels: ['January', 'February', 'March',
    //         'April', 'May'],
    //     datasets: [
    //         {
    //             label: 'Rainfall',
    //             fill: false,
    //             lineTension: 0.5,
    //             backgroundColor: 'rgba(75,192,192,1)',
    //             borderColor: 'rgba(0,0,0,1)',
    //             borderWidth: 2,
    //             data: [65, 59, 80, 81, 56]
    //         }
    //     ]
    // }

    return (
        <>
            <div id='attendence_chart_cont'>
                <h2>Attendence</h2>
                <div id='attendence_chart_box'>
                    <div>
                        {/* <Line data={state}options={{title:{display:true,text:'Average Rainfall per month',fontSize:20},legend:{display:true,position:'right'}}}/> */}
                    </div>
                </div>
                <div className="App">
                    {/* <p>Using Chart.js in React</p> */}
                    <Line data={data} options={options} />
                </div>

            </div>
        </>

    )
}
