/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import { Card,CardContent, CardHeader,Typography ,Grid,Divider} from '@material-ui/core'
import useStyles from './style';
import Form from './Form/Form';
import List from "./List/List";

import { ExpenseTrackerContext } from '../../context/context';
const Main = () => {
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext)
    return (
       <Card className={classes.root}>
           <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
           <CardContent>
               <Typography align="center" variant="h5">Total balance ${balance}</Typography>

               <Typography variant="subtitle1" style={{ lineHeight:"1.5em", marginTop:"20px"}}>
                   {/*Info Card */}
                   Try saying : Add income for $500 dollars in Category Salary for monday...
                    </Typography>

                    <Divider/>
                    <Form/>

           </CardContent>
           <CardContent className={classes.cardContent}>
               <Grid container spacing={2}>
                   <Grid item xs={12}>
                       <List/>
                       </Grid>
                   </Grid>
                       </CardContent>
       </Card>
    )
}

export default Main
