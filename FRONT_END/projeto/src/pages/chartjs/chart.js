import React, { useState, useEffect } from "react";
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

const Grafico = () => {
  const [chartData, setChartData] = useState({});
  const [corretas, setCorretas] = useState([]);

  const chart = () => { 
    let corr = [];
    axios
      .get("http://localhost:3003/sistema/api/gabaritos")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          corr.push(parseFloat(dataObj.corretas));
        }
        setCorretas({
          corr
        })
        setChartData({
          labels: ['Q.1','Q.2','Q.3','Q.4','Q.5','Q.6','Q.7','Q.8','Q.9','Q.10'],
          datasets: [
            {
              label: "Quantidade de acertos por questão",
              data: corr,
              backgroundColor: ['rgba(54,162,235,0.6)',
              'rgba(54,162,235,0.6)',
              'rgba(54,162,235,0.6)',
              'rgba(54,162,235,0.6)',
              'rgba(54,162,235,0.6)',
              'rgba(54,162,235,0.6)',
              'rgba(54,162,235,0.6)',
              'rgba(54,162,235,0.6)',
              'rgba(54,162,235,0.6)',
              'rgba(54,162,235,0.6)',
],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(corr);
  };

  useEffect(() => {
    chart();
  }, [corretas]);
  
  return (
    <div>
      <div style={{position: "relative"}} >
        <Bar
          data={chartData}
          options={{
            layout:{
              padding:{
                  left:20
              }
            },
            responsive: true,
            maintainAspectRatio: true,
            responsiveAnimationDuration: 2,
            aspectRatio:1,
            onResize: null,
            title: {text:"Relatorio de Performace", display: true, fontSize:20},
            
             scales: {
               yAxes: [
                 {
                   ticks: {
                     autoSkip: true,
                     maxTicksLimit: 10,
                     beginAtZero: true
                   },
                   gridLines: {
                     display: true
                   }
                 }
               ],
               xAxes: [
                 {
                   gridLines: {
                     display: false
                   }
                 }
               ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Grafico;