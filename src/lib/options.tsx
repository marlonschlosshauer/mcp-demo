"use client";

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { DEFAULT_MODEL, Models } from "./models";

export interface OptionState {
  model: Models;
  yap: boolean;
}

export type OptionProps = Partial<OptionState>;

export interface OptionData extends OptionState {
  setState: (state: OptionState) => void;
}

const Context = createContext({} as OptionData);

export const OptionProvider: React.FC<PropsWithChildren<OptionProps>> = ({
  children,
}) => {
  const [state, setState] = useState<OptionState>({
    model: DEFAULT_MODEL,
    yap: false,
  });

  return (
    <Context.Provider value={{ ...state, setState }}>
      {children}
    </Context.Provider>
  );
};

export const useOptions = () => useContext(Context);
