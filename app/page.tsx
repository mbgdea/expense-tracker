import Guest from "@/components/Guest";
import { checkUser } from "@/lib/checkUser";
import Header from "@/components/Header";

const Home = async () => {
  const user = await checkUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <>
      <Header />
    </>
  );
};

export default Home;
