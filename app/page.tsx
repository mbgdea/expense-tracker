import Guest from "@/components/Guest";
import { checkUser } from "@/lib/checkUser";
import Header from "@/components/Header";
import Balance from "@/components/Balance";
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
      <AddTransaction />
    </>
  );
};

export default Home;
