import React, { createContext, useContext, useState, useEffect } from 'react'
export const MyContext = createContext()

export default function Provider({ children }) {
    const [toggleview, setToggleview] = useState(false)
    return (
        <MyContext.Provider value={{ toggleview,setToggleview }}>
            {children}
        </MyContext.Provider>
    )

}
