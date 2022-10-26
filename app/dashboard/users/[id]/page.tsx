import Image from "next/image";
import { getUser } from "../users.api";

const UsersPage = async ({ params: { id } }: any) => {
  const user = await getUser(id);

  return (
    <div>
      <Image
        alt="User Avatar"
        src={user.picture}
        width={100}
        height={100}
        className="h-[100px] w-[100px] rounded-full object-cover"
      />
    </div>
  );
};

export default UsersPage;
