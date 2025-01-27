"use client";

import addTransaction from "@/app/actions/addTransaction";
import { useRef } from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const result = await addTransaction(formData);

    if (result.error) {
      alert(result.error);
    } else {
      alert("Transaction added successfully");
      formRef.current?.reset();
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-medium">Add transaction</h3>

      <Separator className="mb-4 mt-2" />

      <form ref={formRef} action={clientAction} className="mb-8">
        <div>
          <label htmlFor="text" className="block">
            Text
          </label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter text..."
            className="mt-1 w-full rounded-md border border-gray-300 p-1 px-2 outline-none"
          />
        </div>

        <div className="mt-3">
          <label htmlFor="amount" className="block">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            step="0.01"
            className="mt-1 w-full rounded-md border border-gray-300 p-1 px-2 outline-none"
          />
        </div>

        <Button className="mt-3 w-full bg-blue-600 hover:bg-blue-700">
          Add transaction
        </Button>
      </form>
    </div>
  );
};

export default AddTransaction;
