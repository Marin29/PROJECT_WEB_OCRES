
import React, { useState, useEffect } from 'react';

const Match = () => {
    const [endPoint, setEndPoints] = useState('Nadal');
    const [finalPoint, setFinalPoint] = useState('');
    //const [containerb, setContainerb] = useState([]);
    const [container, setContainer] = useState(
        {
            "results": [
                {
                    "entity": {
                        "category": null,
                        "country": {
                            "alpha2": "ES",
                            "name": ""
                        },
                        "disabled": null,
                        "displayInverseHomeAwayTeams": null,
                        "firstName": null,
                        "gender": "M",
                        "id": 14486,
                        "lastName": null,
                        "name": "",
                        "nameCode": "NAD",
                        "national": false,
                        "position": null,
                        "ranking": null,
                        "shortName": "Nadal R.",
                        "slug": "nadal-rafael",
                        "sport": {
                            "id": 5,
                            "name": "Tennis",
                            "slug": "tennis"
                        },
                        "team": null,
                        "teamColors": {
                            "primary": "#52b030",
                            "secondary": "#52b030",
                            "text": "#ffffff"
                        },
                        "type": 1,
                        "userCount": 190629
                    },
                    "score": 29356022,
                    "type": "team"
                },
                {
                    "entity": {
                        "category": null,
                        "country": {
                            "alpha2": "ES",
                            "name": "Spain"
                        },
                        "disabled": null,
                        "displayInverseHomeAwayTeams": null,
                        "firstName": null,
                        "gender": "M",
                        "id": 373246,
                        "lastName": null,
                        "name": "Nadal Vives J.",
                        "nameCode": "NVJ",
                        "national": false,
                        "position": null,
                        "ranking": null,
                        "shortName": "Nadal Vives J.",
                        "slug": "nadal-vives-joan",
                        "sport": {
                            "id": 5,
                            "name": "Tennis",
                            "slug": "tennis"
                        },
                        "team": null,
                        "teamColors": {
                            "primary": "#52b030",
                            "secondary": "#52b030",
                            "text": "#ffffff"
                        },
                        "type": 1,
                        "userCount": 56
                    },
                    "score": 8313,
                    "type": "team"
                },
                {
                    "entity": {
                        "category": null,
                        "country": {
                            "alpha2": "ES",
                            "name": "Spain"
                        },
                        "disabled": null,
                        "displayInverseHomeAwayTeams": null,
                        "firstName": null,
                        "gender": "M",
                        "id": 373689,
                        "lastName": null,
                        "name": "Nadal T.",
                        "nameCode": "NTO",
                        "national": false,
                        "position": null,
                        "ranking": null,
                        "shortName": "Nadal T.",
                        "slug": "nadal-toni",
                        "sport": {
                            "id": 5,
                            "name": "Tennis",
                            "slug": "tennis"
                        },
                        "team": null,
                        "teamColors": {
                            "primary": "#52b030",
                            "secondary": "#52b030",
                            "text": "#ffffff"
                        },
                        "type": 1,
                        "userCount": 46
                    },
                    "score": 7223,
                    "type": "team"
                },
                {
                    "entity": {
                        "category": null,
                        "country": {
                            "alpha2": "ES",
                            "name": "Spain"
                        },
                        "disabled": null,
                        "displayInverseHomeAwayTeams": null,
                        "firstName": null,
                        "gender": "M",
                        "id": 391072,
                        "lastName": null,
                        "name": "Nadal J.",
                        "nameCode": "NJO",
                        "national": false,
                        "position": null,
                        "ranking": null,
                        "shortName": "Nadal J.",
                        "slug": "nadal-joan",
                        "sport": {
                            "id": 5,
                            "name": "Tennis",
                            "slug": "tennis"
                        },
                        "team": null,
                        "teamColors": {
                            "primary": "#52b030",
                            "secondary": "#52b030",
                            "text": "#ffffff"
                        },
                        "type": 1,
                        "userCount": 29
                    },
                    "score": 4554,
                    "type": "team"
                },
                {
                    "entity": {
                        "category": null,
                        "country": {
                            "alpha2": "ES",
                            "name": "Spain"
                        },
                        "disabled": null,
                        "displayInverseHomeAwayTeams": null,
                        "firstName": null,
                        "gender": null,
                        "id": 405104,
                        "lastName": null,
                        "name": "Comas Nadal J.",
                        "nameCode": "CNJ",
                        "national": false,
                        "position": null,
                        "ranking": null,
                        "shortName": "Comas Nadal J.",
                        "slug": "comas-nadal-jaume",
                        "sport": {
                            "id": 5,
                            "name": "Tennis",
                            "slug": "tennis"
                        },
                        "team": null,
                        "teamColors": {
                            "primary": "#52b030",
                            "secondary": "#52b030",
                            "text": "#ffffff"
                        },
                        "type": 1,
                        "userCount": 5
                    },
                    "score": 734,
                    "type": "team"
                }
            ]
        });





    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9bc44bd1damsh3635f4d251c0318p1fba40jsn37c512fc2dbd',
            'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
        }
    };
    useEffect(() => {
        setTimeout(() => fetchMe(), 500)


    }, [finalPoint])
    const fetchMe = () => {
        fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/search/${endPoint}`, options)
            .then(response => { return response.json(); })
            .then(data => { setContainer(data) })
            .catch(err => { console.error(err) });

    }


    const onChangeHandler = (e) => {
        setEndPoints(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault()
        setFinalPoint(endPoint)
    }

    return (
        <div className="match">
            <h2>Rechercher un joueur</h2><br />
            <form onSubmit={submitHandler}>

                <input type="text" value={endPoint} onChange={onChangeHandler} />
                <button type="submit"> submit</button>

            </form>

            Nom : {container.results[0].entity.name} <br />
            Pays : {container.results[0].entity.country.name} <br />
            Classement : {container.results[0].entity.ranking}



        </div>
    );


}
export default Match;

