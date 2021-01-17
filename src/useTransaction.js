import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';

import {incomeCategories, expenseCategories , resetCategories} from './constants/categories'

const useTransactions = (title) => {
  resetCategories(); 

  const { transactions } = useContext(ExpenseTrackerContext);
  const rightTransactions = transactions.filter((transaction) => transaction.type === title);

  const total = rightTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
  
  console.log("TITLE : " ,title)
  console.log("TRANSACTION TYPE : " ,transactions)


  const categories = title === 'Income' ? incomeCategories : expenseCategories;


  console.log({rightTransactions, total , categories , transactions})

  rightTransactions.forEach((transaction) => {
  
    const category = categories.find((category) => category.type === transaction.category);

    if (category) 
        category.amount += transaction.amount;
  });


const filteredCategories = categories.filter((fc) => fc.amount > 0);

  const chartData = {
    datasets: [{
      data: filteredCategories.map((category) => category.amount),
      backgroundColor: filteredCategories.map((category) => category.color),
    }],
    labels: filteredCategories.map((category) => category.type),
  };

  return { filteredCategories,  total, chartData };
};

export default useTransactions;