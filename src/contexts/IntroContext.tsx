"use client";

import { createContext, useContext, useState } from "react";

interface IntroContextProps {
  isIntroFinished: boolean;
  setIsIntroFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

const IntroContext = createContext<IntroContextProps>({} as IntroContextProps);

interface IntroWrapperProps {
  children: React.ReactNode;
}

export function IntroWrapper({ children }: IntroWrapperProps) {
  const [isIntroFinished, setIsIntroFinished] = useState(false);

  return (
    <IntroContext.Provider value={{ isIntroFinished, setIsIntroFinished }}>
      {children}
    </IntroContext.Provider>
  );
}

export function useIntroContext() {
  return useContext(IntroContext);
}

export default IntroContext;
