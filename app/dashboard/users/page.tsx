import Image from "next/image";
import Link from "next/link";
import { getUsers } from "./users.api";
import { FiExternalLink } from "react-icons/fi";

const Users = async () => {
  const users = await getUsers();
  return (
    <section className="grid grid-cols-4 gap-3">
      {users.map((user) => (
        <article
          className="rounded border border-slate-6 p-3 flex items-center gap-2"
          key={user.id}
        >
          <Image
            alt="User Avatar"
            src={user.picture}
            width={30}
            height={30}
            className="h-[30px] w-[30px] rounded-full object-cover"
          />
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <Link
            className="hover:text-blue-9"
            href={`/dashboard/users/${user.id}`}
          >
            <FiExternalLink />
          </Link>
        </article>
      ))}
    </section>
  );
};

export default Users;
