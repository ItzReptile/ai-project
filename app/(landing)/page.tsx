import { Button } from "@/components/ui/button";
import Link from "next/link"

const landingPage = () => {
  return (
    <div>
      Landing Page (Unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Reigster</Button>
        </Link>
      </div>
    </div>
  );
};

export default landingPage;
