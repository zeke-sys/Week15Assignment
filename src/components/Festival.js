import React from 'react';
import {NewArtistForm} from './NewArtistForm';

export const Festival=(props) => {
    const {festival, updateFestival} = props;
    console.log(festival);

    const deleteArtist=(name) => {
        const updatedFestival = {
            ...festival,
            artists: festival.artists.filter((artist) => artist.name !== name)
        };

        updateFestival(updatedFestival);
    }

    const addNewArtist = (artist) => updateFestival({...festival, artists: [...festival.artists, artist]});
    console.log(festival);

    const artists=() => (
        <ol>
            {festival.artists.map((artist, index) => (
                <li key = {index}>
                    <label>{`${artist.name} --- Duration: ${artist.duration} --- `}</label>
                    <button className='del-btn' onClick = {(e) => deleteArtist(artist.name)}>Delete Artist</button>
                </li>
            ))}
        </ol>
    );

    return(
        <div className = "container">
            <br></br>

            <h4>Festival Title: {festival.title}</h4>
            <h5>Artists Lined Up</h5>

            {
                artists({artists, festivalId: festival._id, deleteArtist})
            }

            <NewArtistForm addNewArtist={addNewArtist} />
        </div>
    );
};
