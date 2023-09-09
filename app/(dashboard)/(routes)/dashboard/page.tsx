import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <div>this is page route(Protected)</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default page;
