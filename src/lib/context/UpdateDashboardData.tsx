import React, { createContext, SetStateAction, useContext, useState } from 'react';

interface UpdateContextProps {
  updatedata: boolean;
  SetUpdateData: React.Dispatch<SetStateAction<boolean>>;
}

export const UpdateDashboardContext = createContext<UpdateContextProps | null>(null);

const useUpdateDashboardContext = () => {
  const provider = useContext(UpdateDashboardContext);

  if(!provider) {
    throw new Error('useUpdateDashboardContext must be used within a UpdateDashboardContextProvider');
  }
  return provider;
}
export default useUpdateDashboardContext
