import { createSlice } from "@reduxjs/toolkit";





export const userBuisnessSlice = createSlice({
    name: "userBuisness",
    initialState: {
        buisnessUser: {
            buisnessName: '',
            contactEmail: '',
            grossAnnualSales: 0,
            annualPayroll: 0,
            numEmployess: 0,
            industryId: '',
            locations: [
                {
                    zip: ''
                }
            ]
        }
       
    },
    reducers: {
        addUser: (state, action) => {
            const user = action.payload
            for(let key in user){
                state[key] = user[key]
            }
        }
    }
});

export const { addUser } = userBuisnessSlice.actions

export default userBuisnessSlice.reducer