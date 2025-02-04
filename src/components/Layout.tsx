import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 min-h-screen flex flex-col gap-6 items-center justify-center">
      {children}
    </main>
  );
}

export default Layout;
