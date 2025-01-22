"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

async function deleteTransaction(transactionId: string): Promise<{
  message?: string;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    await db.transaction.delete({
      where: {
        id: transactionId,
        userId: userId,
      },
    });

    revalidatePath("/");

    return { message: "Transaction deleted" };
  } catch {
    return { error: "Failed to delete transaction" };
  }
}

export default deleteTransaction;
