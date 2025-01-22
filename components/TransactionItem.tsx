"use client";

import { Transaction } from "@/types/Transaction";
import { addCommas } from "@/lib/utils";
import deleteTransaction from "@/app/actions/deleteTransaction";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this?");

    if (!confirmed) {
      return;
    }

    const { message, error } = await deleteTransaction(transactionId);

    if (error) {
      console.log(error);
    } else {
      console.log(message);
    }
  };

  return (
    <ul>
      <li>
        {transaction.text}
        <span>
          {" "}
          {sign} ${addCommas(Math.abs(transaction.amount))}
        </span>
      </li>

      <button onClick={() => handleDeleteTransaction(transaction.id)}>x</button>
    </ul>
  );
};

export default TransactionItem;
