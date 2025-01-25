import getUserBalance from "@/app/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getUserBalance();

  return (
    <div className="mt-5">
      <h4 className="font-medium uppercase">Your Balance</h4>
      <h1 className="text-2xl font-semibold">
        ${addCommas(Number(balance?.toFixed(2) ?? 0))}
      </h1>
    </div>
  );
};

export default Balance;
