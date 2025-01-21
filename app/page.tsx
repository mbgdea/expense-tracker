import Guest from "@/components/Guest";
import { checkUser } from "@/lib/checkUser";
import Header from "@/components/Header";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import AddTransaction from "@/components/AddTransaction";

const Home = async () => {
  const user = await checkUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <>
      <Header />
      <Balance />
      <IncomeExpense />
      <AddTransaction />
    </>
  );
};

export default Home;
