import getTransactions from "@/app/actions/getTransactions";
import { Transaction } from "@/types/Transaction";
import TransactionItem from "./TransactionItem";
import { Separator } from "./ui/separator";

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h3 className="text-xl font-medium">History</h3>

      <Separator className="mb-4 mt-2" />

      {transactions &&
        transactions.map((transaction: Transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
    </>
  );
};

export default TransactionList;
