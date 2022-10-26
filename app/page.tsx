import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-slate-1 container mx-auto prose prose-slate lg:prose-lg pt-16">
      <h1>Next.js 13</h1>
      <p>
        This is a test of Next.js 13 with Tailwind CSS 3.0.0. The CSS is
        imported in the page component.
      </p>
      {/* button that takes you to dashboard */}

      <div>
        <Link
          className="bg-blue-3 text-blue-11 hover:bg-blue-4 rounded-md px-4 py-3 no-underline"
          href="/dashboard"
        >
          Go to dashboard
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
