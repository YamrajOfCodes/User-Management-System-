import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { getUserAPI } from "../../API/User/userAPI";



export const getUsersData = createAsyncThunk("userdata",async()=>{
    try {
        const response  = await getUserAPI();
        if(response.status==200){
            return response.data;
        }else{
            console.log("error while fetching data");
        }
    } catch (error) {
        console.log(error);
        
    }
})


  const userSlice  = createSlice({
    name:"userSlice",
    initialState:{
        getallusersdata:[],
        loader:false,
        error:null,
    },
   reducers: {

     addUser: (state, action) => {
            state.getallusersdata.push({
                id: Date.now(),
                ...action.payload
            });
        },


   deleteUser: (state, action) => {
            console.log('Before delete:', state.getallusersdata.length);
            console.log('Deleting user ID:', action.payload);
            
            state.getallusersdata = state.getallusersdata.filter(
                user => user.id !== action.payload
            );
            
            console.log('After delete:', state.getallusersdata);
        },
},
    extraReducers:(builder)=>{

          builder.addCase(getUsersData.pending,(state,action)=>{
            state.loader = true
        })
        .addCase(getUsersData.fulfilled,(state,action)=>{
            state.loader = false,
            state.getallusersdata = action.payload
        })
        .addCase(getUsersData.rejected,(state,action)=>{
            state.error = [action.payload]
        })



    }
})
export const { deleteUser,addUser } = userSlice.actions;

export default userSlice.reducer;