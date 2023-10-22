import axios from "axios"
import { updateMail, updateErr } from "./userSlice" 

export const mail = async (dispatch, page) => {
    try {
        await axios.get(`https://flipkart-email-mock.vercel.app/?page=${page}`).then(res=>{  
            dispatch(updateMail(res.data.list))
        })
    } catch (error) {

    }
}