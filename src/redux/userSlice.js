import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'mail',
    initialState: {
        mail:[],
        err:false
        },
    reducers: {

        updateMail: (state,action) => {
            console.log(action.payload);
            state.mail = action.payload
            console.log(state.mail);
        },

        updateErr: state => {
            state.err = !state.err
        }
    }
})

export const { updateMail, updateErr } = userSlice.actions
export default userSlice.reducer