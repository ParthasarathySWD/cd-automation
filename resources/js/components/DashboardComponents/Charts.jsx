import React from 'react';


const BarChart = require('react-chartjs-2').Bar;

class Charts extends React.Component {
  constructor() {
    super();
    const data = {
      labels: ["Jan", "Feb", "Mar"],
      datasets: [
      {
        label: "Open",
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(54, 162, 235, 0.8)',
        ],
        borderWidth: 1,
        barPercentage: 1,
        barThickness: 30,
        data: [10,20,30],
        type: 'bar',
        options: {
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }
        }
      },
      {
        label: "Close",
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 99, 132, 0.8)',
        ],
        borderWidth: 1,
        barPercentage: 1,
        barThickness: 30,
        data: [40,50,60],
        type: 'bar',
        options: {
            layout: {
                padding: {
                    left: 0, 
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }
        }
      },
      {
        label: "Pending",
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
        borderWidth: 1,
        barPercentage: 1,
        barThickness: 30,
        data: [70, 80, 10],
        type: 'bar',
        options: {
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }
        }
      }
    ]
      
    };
    
    const options = {
        
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
            }
          }]
        }
      };
    this.state = {
      chartData: data,
      chartOptions: options,
    };
  }
  render() {
    const { chartData, chartOptions } = this.state;
    return (
      <div>
        <BarChart data={chartData} options={chartOptions} width={200} height={100} />
      </div>
    )
  }
}

export default Charts;
// import React from 'react'
// import { Doughnut } from 'react-chartjs-2';

// class Charts extends React.Component {
//     constructor(props) {
//       super(props);
//       this.chartReference = React.createRef();
//     }
   
//     componentDidMount() {
//       console.log(this.chartReference); // returns a Chart.js instance reference
//     }
   
//     render() {
//       return (<Doughnut ref={this.chartReference} data={data} options={options} />)
//     }
//   }
// export default Charts


// /* App.js */
// var React = require('react');
// var Component = React.Component;
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// class Charts extends Component {
// 	render() {
// 		const options = {
// 			title: {
// 				text: "Basic Column Chart"
// 			},
// 			data: [
// 			{
// 				// Change type to "doughnut", "line", "splineArea", etc.
// 				type: "column",
// 				dataPoints: [
// 					{ label: "Apple",  y: 10  },
// 					{ label: "Orange", y: 15  },
// 					{ label: "Banana", y: 25  },
// 					{ label: "Mango",  y: 30  },
// 					{ label: "Grape",  y: 28  }
// 				]
// 			}
// 			]
// 		}
// 		return (
// 		<div>
// 			<CanvasJSChart options = {options}
// 				/* onRef={ref => this.chart = ref} */
// 			/>
// 			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 		</div>
// 		);
// 	}
// }
// module.exports = Charts;   