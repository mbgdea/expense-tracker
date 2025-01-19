"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const textValue = formData.get("text");
  const amountValue = formData.get("amount");

  // check for input values
  if (!textValue || textValue === "" || !amountValue) {
    return { error: "Text or amount is missing" };
  }

  const text: string = textValue.toString(); // convert to string
  const amount: number = parseFloat(amountValue.toString()); // convert to number

  // get logged in user
  const { userId } = await auth();

  // check for user
  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactionData = await db.transaction.create({
      data: {
        text,
        amount,
        userId,
      },
    });

    revalidatePath("/");
    return { data: transactionData };
  } catch {
    return {
      error: "An error occurred while adding the transaction",
    };
  }
}

export default addTransaction;
