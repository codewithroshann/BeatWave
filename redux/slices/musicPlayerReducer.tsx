import { createSlice } from "@reduxjs/toolkit";
import { Pause } from "lucide-react";
import { title } from "process";
interface MusicPlayerState {
    id: string
    image: string | null,
    title: string | null,
    producer: string | null,
    audio: string | null,
    playing: boolean
    price:number
    file:string
    
}

const initialState = {
    id:"",
    image: null,
    title: null,
    producer: null,
    audio: null,
    playing: false,
    price:0,
    file:"MP3"
} as MusicPlayerState

const musicPlayerSlice = createSlice({
    name: 'musicPlayer',
    initialState,
    reducers: {
        playing: (state, action) => {
            state.id = action.payload._id
            state.image = action.payload.thumbnail
            state.title = action.payload.title
            state.producer = action.payload.producer
            state.audio = action.payload.audio
            state.playing = true
            state.price = action.payload.price
        },
        hideMusicPlayer: (state) => {
            state.image = null
            state.title = null
            state.producer = null
            state.audio = null
            state.playing = false
        },
        PauseMusicPlayer:(state,action)=>{
                      state.audio = null
        }

    }

})
export const { playing, hideMusicPlayer,PauseMusicPlayer } = musicPlayerSlice.actions;

export default musicPlayerSlice.reducer;