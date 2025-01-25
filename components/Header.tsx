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
        <div className="flex items-center justify-between">
          {user ? (
            <p className="text-2xl">
              Welcome, <br />{" "}
              <span className="text-2xl font-semibold">{user.firstName}</span>
            </p>
          ) : (
            ""
          )}

          <div className="mb-2">
            <UserButton />
          </div>
        </div>
      </SignedIn>
    </header>
  );
};

export default Header;
