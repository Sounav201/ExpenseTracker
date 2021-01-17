import React, { useContext } from 'react'
import {ExpenseTrackerContext} from '../../context/context'
import  {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'
import useStyles from './styles'
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';
import {motion} from 'framer-motion';

const Main = () => {
    const classes= useStyles();
    const {balance} = useContext(ExpenseTrackerContext);

    return (

        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.5, duration:1.5}}>
         <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />     
             <CardContent>
                 <Typography align="center" variant="h5">Total Balance : ₹{balance}</Typography>
                 <Typography variant="subtitle1" style={{lineHeight:'1.5em' , marginTop:'20px'}}>
                     <InfoCard />
                 </Typography>
                 <Divider className={classes.divider} />
                 <Form />
             </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>   
            
        </motion.div>
    )
}

export default Main
