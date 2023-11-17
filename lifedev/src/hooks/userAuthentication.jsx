import { db } from "../firebase/config";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from 'firebase/auth'

import{ useState, useEffect } from "react";

export const useAuthentication = () =>{
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancelled, setCancelled] = useState(false)
    
    const auth = getAuth()

    function checkIfCancelled(){
        if (cancelled) {
            return 
        }
    }

    async function createUser(data){
        checkIfCancelled()

        setLoading(true)
        setError(null)

        try{
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
        }catch(error){
            
        }
    }
}