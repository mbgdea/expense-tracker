import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const Header = async () => {
  const user = await currentUser();

  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        {user ? <p>Welcome, {user.firstName}</p> : ""}

        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
