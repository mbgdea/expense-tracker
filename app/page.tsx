import Guest from "@/components/Guest";
import { checkUser } from "@/lib/checkUser";
import Header from "@/components/Header";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import AddTransaction from "@/components/AddTransaction";
import TransactionList from "@/components/TransactionList";

const Home = async () => {
  const user = await checkUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <div className="container mt-4 max-w-80 p-2">
      <Header />
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
    </div>
  );
};

export default Home;
