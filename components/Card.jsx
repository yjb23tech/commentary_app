import { db } from "../firebase/firebase.js"
import { ref, push } from "firebase/database"

import song_cover_art from "../public/images/track_7_song_art.png"

const Card = () => {

    function handleClick(e) {

        const commentaryDB = ref(db, "commentary")
        let inputEl = document.getElementById("input-field")

        push(commentaryDB, inputEl.value)
        console.log("This works well!")
    }

    return (
        <div className="song-card">
            <img src={song_cover_art} />
            <input id="input-field"type="text" placeholder="leave a comment :D" />
            <button id="submit-btn" onClick={handleClick}>GO!</button>
        </div>
    )
}

export default Card; 