import React, { useState } from 'react'
// import axios from 'axios'
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

    const [submit, setSubmit] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmit(true);

        // try {
        //     await axios.post("/")
        // } catch (error) {
        //     console.log(error);
        // }
    }

    return (

        <div>
            {!submit ? (
                <form id='rating' onSubmit={handleSubmit}>
                    <h6>How did we do?</h6>
                    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                    {ratingState.objects.map((elements, index) => (
                        <div required key={index} className={toggleActiveStyles(index)} onClick={() => { toggleActive(index) }}>

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

            ) : (
                <main id='thankYou'>
                    Thank You!
                </main>
            )}
        </div>

    )
}
