import React from 'react';
// import React, { useState } from 'react';import './App.css';   *zorgt er voor dat we geen react meer hoeven uit te typen bij react.useState, komt ipv regel 1*
import './App.css';
import {useForm} from "react-hook-form";


function App() {
    const {handleSubmit, errors, register, watch} = useForm({
        defaultValues: {
            reference: 'anders'
        }
    });
    const selectedReferrer = watch('reference');

    // const [nameValue, setNameValue] = React.useState("")
    // const [ageValue, setAgeValue] = React.useState("")
    // const [referenceValue, setReference] = React.useState("Anders")
    // const [remarksValue, setRemarks] = React.useState("")

    function submitted(data) {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitted)}>
                <fieldset>
                    <legend>Gegevens</legend>

                    <label htmlFor="details-name">
                        Naam:

                        <input
                            type="text"
                            name="name"
                            id="details-name"
                            placeholder="zet hier je naam"
                            ref={register(
                                {
                                    required: true,
                                    validate: (value) => value.includes('@'),
                                }
                            )}
                            // value={nameValue}
                            // onChange={(e) => setNameValue(e.target.value)}
                        />

                    </label>

                    <label htmlFor="details-age">
                        Leeftijd:

                        <input
                            type="numbers"
                            name="age"
                            id="details-age"
                            placeholder="0"
                            ref={register}
                            // value={ageValue}
                            // onChange={(e) => setAgeValue(e.target.value)}
                        />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Jouw review</legend>

                    <label htmlFor="reference">
                        Hoe heb je dit recept gevonden?
                        <select
                            name="reference"
                            id="reference"
                            ref={register}
                            // value={referenceValue}
                            // onChange={(e) => setReference(e.target.value)}
                        >
                            <option value="google">Google</option>
                            <option value="vriend">Vriend</option>
                            <option value="advertentie">Advertentie</option>
                            <option value="anders">Anders</option>
                        </select>
                    </label>
                    {selectedReferrer === 'anders' && (
                        <input
                            type="text"
                            name="found-through-anders"
                            ref={register({ required: true })}
                        />
                    )}

                    <label htmlFor="remarks">
                        Opmerkingen:

                        <textarea
                            name="remarks"
                            id="remarks"
                            rows="4"
                            cols="40"
                            placeholder="Wat vond je van het recept?"
                            ref={register(
                                {
                                    required: {
                                        value: true,
                                        message: "Dit veld mag niet leeg zijn",
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "Er mogen maximaal 50 karakters gebruikt worden",
                                    },
                                }
                            )}
                            // value={remarksValue}
                            // onChange={(e) => setRemarks(e.target.value)}
                        />
                        {errors.remarks && <p>{errors.remarks.message}</p>}
                    </label>

                    <button type="submit">
                        Versturen
                    </button>

                </fieldset>

            </form>
        </div>
    );
}

export default App;









































// <form>
//     <input
//         type="text"
//         placeholder="Email address"
//         name="message"
//         className={messageValue.length > 20 ? 'input-error' : ''}
//         value={messageValue}
//         onChange={(e) => setMessageValue(e.target.value)}
//     />
//     {messageValue.length > 20 && <p className="error-message">Dit bericht is te lang!</p>}
//
//     <label htmlFor="terms-and-conditions">
//         <input
//             type="checkbox"
//             name="terms-and-conditions"
//             id="terms-and-conditions"
//             onChange={() => toggleCheckedTerms(!checkedTerms)}
//         />
//
//         Ik ga akkoord met de algemene voorwaarden
//     </label>
//
//     <button
//         type="submit"
//         disabled={!checkedTerms}// disabled={checkedTerms === false}
//         onClick={sendForm}
//     >
//         Verstuur
//     </button>
// </form>