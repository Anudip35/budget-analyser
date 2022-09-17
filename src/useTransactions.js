import { useContext } from "react";
import {BudgetAnalyserContext} from './context/context';

import {incomeCategories, expenseCategories, resetCategories} from './constants/categories';

const useTransactions = (title) => {
    resetCategories();

    const {transactions} = useContext(BudgetAnalyserContext);
    const transactionsPerType = transactions.filter((t)=> t.type===title);
    const total= transactionsPerType.reduce((accumulator, currentValue)=> accumulator+=currentValue.amount, 0 );//reduce combine elements to single value i.e its sum
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    transactionsPerType.forEach((t)=>{
        const category = categories.find((c)=> c.type===t.category);

        if(category) category.amount += t.amount;
    })

    const filteredCategories = categories.filter((sc)=> sc.amount>0);

    const chartData= {
        datasets: [{
            data:filteredCategories?.map((c)=> c.amount),
            backgroundColor: filteredCategories?.map((c)=> c.color),
        }],
        labels: filteredCategories?.map((c)=> c.type),
    }

    return {total, chartData}
}

export default useTransactions;