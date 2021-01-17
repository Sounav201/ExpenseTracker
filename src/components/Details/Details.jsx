import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import { Doughnut } from "react-chartjs-2"

import useStyles from './styles.js';
import useTransactions from '../../useTransaction.js';
import {motion} from 'framer-motion';


const Details = ({title}) => {

    const classes= useStyles();
    const {total, chartData} = useTransactions(title)
    
    return (
        <motion.div className="framer"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1, duration:0.5}}>

        
        <Card className = {title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant="h5">₹{total}</Typography>
                <Doughnut data= {chartData} />
            </CardContent>
        </Card>
        </motion.div>
    );
}

export default Details
