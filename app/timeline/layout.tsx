"use client";

import { Context, DispatchContext, reducer } from "./context";
import Background from "@/src/components/commons/background";
import { useReducer } from "react";

export default function TimelineLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, dispatch] = useReducer(reducer, { month: 0, year: 0 });
  return (
    <Context.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Background />
        {children}
      </DispatchContext.Provider>
    </Context.Provider>
  );
}
