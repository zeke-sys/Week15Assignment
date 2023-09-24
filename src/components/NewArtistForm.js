import React, {useState} from "react";

export const NewArtistForm=(props)=> {
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');

    const onSubmit=(e) => {
        e.preventDefault();
        if(name && duration) {
            setName('');
            setDuration('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div className="new-form">
            <h6>Add a New Artist</h6>
            <form onSubmit = {onSubmit}>
                <input
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type='text'
                    placeholder='duration'
                    onChange={(e) => setDuration(e.target.value)}
                    value={duration}
                />
                <button type='submit'>Add Artist</button>
            </form>
        </div>
    )
};