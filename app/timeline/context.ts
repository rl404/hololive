import { createContext, useContext } from "react";

type ContextType = {
  month: number;
  year: number;
};

type DispatchContextAction = {
  type: keyof ContextType;
  value: any;
};

type DispatchContextType = (action: DispatchContextAction) => void;

export const Context = createContext<ContextType>({ month: 0, year: 0 });
export const DispatchContext = createContext<DispatchContextType>(() => {});

export const useCtx = () => useContext(Context);
export const useDispatchCtx = () => useContext(DispatchContext);

export const reducer = (
  state: ContextType,
  action: DispatchContextAction,
): ContextType => {
  return { ...state, [action.type]: action.value };
};
