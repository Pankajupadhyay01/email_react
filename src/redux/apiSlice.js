import axios from "axios"
import { updateMail, updateErr } from "./userSlice" 

export const mail = async (dispatch, page) => {
    try {
        await axios.get(`https://flipkart-email-mock.vercel.app/?page=${page}`).then(res=>{ 
            console.log(res.data.list);
            dispatch(updateMail(res.data.list))
        })
    } catch (error) {

    }
}