"use client"

import { Toaster } from "@/components/ui/toaster";
import Dashboard from "./dashboard/page";
import { Provider } from "react-redux"
import{ store } from "./store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen w-full">
        <Dashboard/>
        <Toaster />
      </main>
    </Provider>
  );
}
