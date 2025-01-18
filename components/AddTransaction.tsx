"use client";

import addTransaction from "@/app/actions/addTransaction";

const AddTransaction = () => {
  const clientAction = async (formData: FormData) => {
    const result = await addTransaction(formData);

    if (result.error) {
      alert(result.error);
    } else {
      alert("Transaction added successfully");
      console.log(result.data);
    }
  };

  return (
    <>
      <h3>Add Transaction</h3>

      <form action={clientAction}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter text..."
          />
        </div>

        <div>
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Enter amount..."
              step="0.01"
            />
          </label>
        </div>

        <button>Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
