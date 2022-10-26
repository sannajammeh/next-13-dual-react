import React, { use } from "react";
import { getUsers } from "./users/users.api";

const getData = async () => {
  const users = await getUsers();

  return {
    users: users.length,
    posts: 0,
    comments: 0,
    likes: 0,
  };
};

const DataCards = () => {
  const data = use(getData());

  return (
    <div className="mt-4">
      <div className="grid grid-cols-4 gap-4">
        <article className="p-4 rounded-md border border-slate-6">
          <h2 className="text-lg font-medium">Total Users</h2>
          <p className="text-4xl font-bold">{data.users}</p>
        </article>
        <article className="p-4 rounded-md border border-slate-6">
          <h2 className="text-lg font-medium">Total Posts</h2>
        </article>
        <article className="p-4 rounded-md border border-slate-6">
          <h2 className="text-lg font-medium">Total Comments</h2>
        </article>
        <article className="p-4 rounded-md border border-slate-6">
          <h2 className="text-lg font-medium">Total Likes</h2>
        </article>
      </div>
    </div>
  );
};

export default DataCards;
