import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%' }}>
      Try saying: <br /> 
      Add {isIncome ? 'Income ' : 'Expense '} 
      for {isIncome ? '₹1500 ' : '₹1000 '}  
      in Category {isIncome ? 'Salary ' : 'Apparel '}
      for {isIncome ? 'Tuesday ' : 'Friday '}
    </div>
  );
};

export default InfoCard;