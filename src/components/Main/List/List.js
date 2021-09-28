import React from 'react'
import {List as MUIList, ListItem, ListItemAvatar,ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from "@material-ui/core"
import {Delete,MoneyOff} from "@material-ui/icons"
import useStyles from "./style";

const List = () => {
    const classes =useStyles();

    const transactions =[
        {
            id:1, type :"Income",category:"Salary",amount:50 ,date:"Monday 21 2021"
        },
        {
            id:1, type :"Expense",category:"Pets",amount:520 ,date:"Wed 23 2021"
        },
        {
            id:1, type :"Income",category:"Business",amount:550 ,date:"Thursday 2 2021"
        },
    
        {
            id:1, type :"Expense",category:"Pets",amount:520 ,date:"Wed 23 2021"
        },
        {
            id:1, type :"Income",category:"Business",amount:550 ,date:"Thursday 2 2021"
        }
    ]
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
                        <IconButton edge="end" aria-label="delete" onClick="">
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
