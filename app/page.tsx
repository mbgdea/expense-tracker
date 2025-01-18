import Guest from "@/components/Guest";
import { checkUser } from "@/lib/checkUser";
import Header from "@/components/Header";
import AddTransaction from "@/components/AddTransaction";

const Home = async () => {
  const user = await checkUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <>
      <Header />
      <AddTransaction />
    </>
  );
};

export default Home;
