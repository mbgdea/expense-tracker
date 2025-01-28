"use client";

import { Transaction } from "@/types/Transaction";
import { addCommas } from "@/lib/utils";
import deleteTransaction from "@/app/actions/deleteTransaction";
import { Card } from "./ui/card";
import { toast } from "sonner";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this?");

    if (!confirmed) {
      return;
    }

    const { message, error } = await deleteTransaction(transactionId);

    if (error) {
      toast.error(error);
    } else {
      toast.success(message);
    }
  };

  return (
    <ul>
      <li>
        <Card className="relative mb-2 flex justify-between overflow-hidden px-2 py-1">
          <span>{transaction.text}</span>
          <span className="mr-1">
            ${addCommas(Math.abs(transaction.amount))}
          </span>
          <button
            onClick={() => handleDeleteTransaction(transaction.id)}
            className={`absolute right-0 top-0 h-full w-[5px] rounded-lg ${transaction.amount < 0 ? "bg-red-600" : "bg-green-700"}`}
          ></button>
        </Card>
      </li>
    </ul>
  );
};

export default TransactionItem;
