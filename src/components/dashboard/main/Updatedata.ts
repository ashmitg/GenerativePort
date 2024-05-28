import React, { createContext, SetStateAction } from 'react';

interface UpdateContextProps {
  SetUpdateData: React.Dispatch<SetStateAction<boolean>>;
}

const UpdateContext = createContext<UpdateContextProps>({ SetUpdateData: () => {} });

export default UpdateContext;