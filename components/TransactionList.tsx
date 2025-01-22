import getTransactions from "@/app/actions/getTransactions";
import { Transaction } from "@/types/Transaction";
import TransactionItem from "./TransactionItem";

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h3>History</h3>
      {transactions &&
        transactions.map((transaction: Transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
    </>
  );
};

export default TransactionList;
