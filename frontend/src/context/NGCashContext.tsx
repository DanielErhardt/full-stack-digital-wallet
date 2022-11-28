import { createContext } from 'react';
import { NGCashContextType } from './NGCashContextType';

const NGCashContext = createContext<NGCashContextType>({} as NGCashContextType);

export default NGCashContext;
