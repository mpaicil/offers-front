import React, { useEffect } from 'react';
import Chart from "chart.js";
import { Container } from '@material-ui/core';
import { realdata } from './data'
//import classes from "./LineGraph.module.css";

const LineGraph = (props) => {
    const chartRef = React.createRef();

    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");

        let mydata=realdata
        if(props.data !== undefined)
            mydata = props.data

        new Chart(myChartRef, {
            type: "line",
            data: mydata,
            options: {
                //Customize chart options
            }
        });
    })
    
    return (
        <div /*className={classes.graphContainer}*/>
            <Container maxWidth="sm">
                <canvas
                    id="myChart"
                    ref={chartRef}
                />
            </Container>
        </div>
    );
}

export default LineGraph