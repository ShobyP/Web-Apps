import { combineReducers} from "redux";

const songsReducer = () => {
    return [
        { title: 'Fear of the Dark', duration: '4:05'},
        { title: 'Number of the Beast', duration: '2:35'},
        { title: 'Octavium', duration: '5:23'},
        { title: 'Carry me over', duration: '8:17'},
        { title: 'Love', duration: '15:03'}

    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
     if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

