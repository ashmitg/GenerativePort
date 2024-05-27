"use client"
import { createContext } from 'react';
const UpdateContext = createContext({ SetUpdateData: (value: React.SetStateAction<boolean>) => {} });

export default UpdateContext;