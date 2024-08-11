import { createContext, useState } from "react";

export const AppContext = createContext({})

export default function AppContextProvider({children}){

    const [expenseList, setExpenseList]=useState([])

    return(
        <AppContext.Provider value={{expenseList,setExpenseList}}>
            {children}
        </AppContext.Provider>
    )

}