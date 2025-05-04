import { createSlice } from "@reduxjs/toolkit";
import { title } from "process";
interface MusicPlayerState {

    image: string | null,
    title: string | null,
    artist: string | null,
    audio: string | null,
    playing: boolean
}

const initialState = {
    image: null,
    title: null,
    artist: null,
    audio: null,
    playing: false
} as MusicPlayerState

const musicPlayerSlice = createSlice({
    name: 'musicPlayer',
    initialState,
    reducers: {
        playing: (state, action) => {
console.log(action.payload)
            state.image = action.payload.image
            state.title = action.payload.title
            state.artist = action.payload.producer
            state.audio = action.payload.audio
            state.playing = true

        },
        hideMusicPlayer: (state) => {
            state.image = null
            state.title = null
            state.artist = null
            state.audio = null
            state.playing = false
        }

    }

})
export const { playing,hideMusicPlayer } = musicPlayerSlice.actions;

export default musicPlayerSlice.reducer;