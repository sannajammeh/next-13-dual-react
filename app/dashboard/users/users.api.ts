export async function getUsers() {
  const users = await fetch("https://dummyapi.io/data/v1/user?limit=10", {
    headers: {
      "app-id": "63584475ac14a0128ff5bc8b",
    },
    cache: "force-cache",
  }).then((r) => r.json());

  return users.data as User[];
}

export async function getUser(id: string) {
  const user = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
    headers: {
      "app-id": "63584475ac14a0128ff5bc8b",
    },
    cache: "force-cache",
  }).then((r) => r.json());

  return user as User;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
}
