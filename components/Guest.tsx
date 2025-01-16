import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
  return (
    <>
      <p>Log In</p>
      <SignInButton />
    </>
  );
};

export default Guest;
