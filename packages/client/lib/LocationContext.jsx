import {createContext,useState,useContext}

const LocationContext=React.createContext();

export const LocationProvider=({children})=>{
    const [selectedLocation,setSelectedLocation]=useState({
        lat:null,lng:null,

    })
    return(
        <LocationContext.Provider value={{selectedLocation,setSelectedLocation}}>
        {children}
        </LocationContext.Provider>
    
    )
}
export default useLocationContext=()=>useContext(LocationContext)
