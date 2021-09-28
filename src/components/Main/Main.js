/* eslint-disable no-unused-vars */
import React from 'react'
import { Card,CardContent, CardHeader,Typography ,Grid,Divider} from '@material-ui/core'
import useStyles from './style';

const Main = () => {
    const classes = useStyles();
    return (
       <Card classname={classes.root}>
           <CardHeader title="Expense Tracker" subheader="Powered by speechely"/>
           <CardContent>
               <Typography align="center" variant="h5"Total balance $500></Typography>

               <Typography variant="subtitle1" style={{ lineHeight:"1.5em", marginTop:"20px"}}>
                   {/*Info Card */}
                   Try saying : add $500 dollars for monday..
                    </Typography>

                    <Divider/>
                    {/*form */}

           </CardContent>
           <CardContent classname={classes.cardContent}>
               <Grid container spacing={2}>
                   <Grid item xs={12}>
                       {/* <List/> */}
                       </Grid>
                   </Grid>
                       </CardContent>
       </Card>
    )
}

export default Main
