"use client"

import { Toaster } from "@/components/ui/toaster";
import Dashboard from "./dashboard/page";
import { Provider } from "react-redux"
import{ store } from "./store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-start justify-start gap-4 p-24 w-full">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="font-mono font-bold">To Do List</code>
          </p>
        </div>
        <div >
          <Dashboard/>
        </div>
        <Toaster />
      </main>
    </Provider>
  );
}
