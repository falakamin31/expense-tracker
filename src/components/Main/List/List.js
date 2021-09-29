/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import {List as MUIList, ListItem, ListItemAvatar,ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from "@material-ui/core"
import {Delete,MoneyOff} from "@material-ui/icons"
import useStyles from "./style";

import { ExpenseTrackerContext } from '../../../context/context';

const List = () => {
    const classes =useStyles();


    const {deleteTransaction,transactions} = useContext(ExpenseTrackerContext);

   
    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) =>( 
                <Slide direction="down" in unmountOnExit key={transactions.id}>
                    <ListItem>
                    <ListItemAvatar>
                    <Avatar className={transaction.type ==="Income" ? classes.avatarIncome :classes.avatarExpense}>
                        <MoneyOff/>
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transactions.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick= {() => deleteTransaction(transaction.id)}>

                            <Delete/>
                            </IconButton>
                    </ListItemSecondaryAction>
                    
                    </ListItem>

                </Slide>
                
                ))}

        </MUIList>
    )
}

export default List
