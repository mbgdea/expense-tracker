import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Guest = () => {
  return (
    <div className="container mt-4 max-w-80 p-2 text-center">
      <h1 className="text-xl">
        Welcome to <span className="font-medium">Expense Tracker</span>
      </h1>
      <p className="my-2">
        Keep track of your spending and take control of your finances
      </p>

      <div className="space-x-4">
        <Button variant={"blue"}>
          <SignInButton />
        </Button>

        <Button variant={"green"}>
          <SignUpButton />
        </Button>
      </div>
    </div>
  );
};

export default Guest;
