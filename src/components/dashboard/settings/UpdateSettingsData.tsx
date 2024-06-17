"use client";
import React, { createContext, SetStateAction, useContext, ReactNode } from 'react';

interface UpdateContextProps {
  updatedata: boolean;
  SetUpdateData: React.Dispatch<SetStateAction<boolean>>;
}

export const UpdateSettingsContext = createContext<UpdateContextProps | null>(null);



const useUpdateSettingsContext = () => {
  const provider = useContext(UpdateSettingsContext);

  if(!provider) {
    throw new Error('useUpdateSettingsContext must be used within a UpdateSettingsContextProvider');
  }
  return provider;
}

export default useUpdateSettingsContext;
