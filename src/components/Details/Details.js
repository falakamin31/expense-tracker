/* eslint-disable no-unused-vars */
import React from 'react'
import { Card,CardContent, CardHeader,Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2';
import useStyles  from './style';
import {useTransactions} from "../../hooks/useTransactions"

const Details = ({title}) => {
    const classes =useStyles();
    const { total, chartData } = useTransactions(title);

    return (
        <Card className={title === 'Income'? classes.income: classes.expense}>
            <CardHeader title={title}/>
            <CardContent>
                {/* <Typography variant="h5">$ {total}</Typography>
                {
                    total>0 && <Doughnut data={chartData}/>
                } */}
                  <Typography variant="h5">${total}</Typography>
                <Doughnut data={chartData}/>
            </CardContent>
        </Card>
    )
}

export default Details
