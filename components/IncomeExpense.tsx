import getIncomeExpense from "@/app/actions/getIncomeExpense";
import { addCommas } from "@/lib/utils";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();

  return (
    <Card className="mt-4 flex items-center justify-around p-2 text-center">
      <div>
        <h4 className="font-medium uppercase">Income</h4>
        <p className="font-semibold text-green-700">
          ${addCommas(Number(income?.toFixed(2)))}
        </p>
      </div>

      <Separator orientation="vertical" className="h-[1cm]" />

      <div>
        <h4 className="font-medium uppercase">Expense</h4>
        <p className="font-semibold text-red-600">
          ${addCommas(Number(expense?.toFixed(2)))}
        </p>
      </div>
    </Card>
  );
};

export default IncomeExpense;
