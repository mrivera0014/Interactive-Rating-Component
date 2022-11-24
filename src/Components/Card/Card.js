import React, { useState } from 'react'
import './Card.css'

export default function Card() {

    const [ratingState, changeState] = useState({
        activeObject: null,
        objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },]
    })

    function toggleActive(index) {
        changeState({ ...ratingState, activeObject: ratingState.objects[index] })
    }

    function toggleActiveStyles(index) {
        if (ratingState.objects[index] === ratingState.activeObject) {
            return "box active"
        } else {
            return "box inactive"
        }
    }
    return (

        <div>
            <form>
                <h6>How did we do?</h6>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                {ratingState.objects.map((elements, index) => (
                    <div key={index} className={toggleActiveStyles(index)} onClick={() => { toggleActive(index) }}>

                    </div>
                ))}
                {/* <div>
                    <input name='rating' type='radio' />1
                    <input name='rating' type='radio' />2
                    <input name='rating' type='radio' />3
                    <input name='rating' type='radio' />4
                    <input name='rating' type='radio' />5
                </div> */}

                <button type='submit'>Submit</button>
            </form>
        </div>

    )
}
