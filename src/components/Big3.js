
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Big3 = () => {

    const [containerf, setContainerf] = useState({
        "team": {
            "category": {
                "flag": "atp",
                "id": 3,
                "name": "ATP",
                "slug": "atp",
                "sport": {
                    "id": 5,
                    "name": "Tennis",
                    "slug": "tennis"
                }
            },
            "country": {
                "alpha2": "ES",
                "name": "Spain"
            },
            "fullName": "Nadal, Rafael",
            "gender": "M",
            "id": 14486,
            "name": "Nadal R.",
            "nameCode": "NAD",
            "national": false,
            "playerTeamInfo": {
                "birthDateTimestamp": 518140800,
                "birthplace": "Manacor, Mallorca, Spain",
                "height": 1.85,
                "id": 2,
                "plays": "left-handed",
                "prizeCurrent": 5312722,
                "prizeCurrentRaw": {
                    "currency": "EUR",
                    "value": 5312722
                },
                "prizeTotal": 0,
                "prizeTotalRaw": {
                    "currency": "EUR",
                    "value": 109448443
                },
                "residence": "Manacor, Mallorca, Spain",
                "turnedPro": "2001",
                "weight": 85
            },
            "ranking": 3,
            "shortName": "Nadal R.",
            "slug": "nadal-rafael",
            "sport": {
                "id": 5,
                "name": "Tennis",
                "slug": "tennis"
            },
            "teamColors": {
                "primary": "#52b030",
                "secondary": "#52b030",
                "text": "#ffffff"
            },
            "tournament": {
                "category": {
                    "flag": "atp",
                    "id": 3,
                    "name": "ATP",
                    "slug": "atp",
                    "sport": {
                        "id": 5,
                        "name": "Tennis",
                        "slug": "tennis"
                    }
                },
                "id": 93468,
                "name": "French Open, Paris, France",
                "priority": 0,
                "slug": "french-open-paris-france",
                "uniqueTournament": {
                    "category": {
                        "flag": "atp",
                        "id": 3,
                        "name": "ATP",
                        "slug": "atp",
                        "sport": {
                            "id": 5,
                            "name": "Tennis",
                            "slug": "tennis"
                        }
                    },
                    "displayInverseHomeAwayTeams": false,
                    "id": 2480,
                    "name": "Roland Garros",
                    "slug": "roland-garros",
                    "userCount": 47119
                }
            },
            "type": 1,
            "userCount": 191154
        }
    });
    const [containerd, setContainerd] = useState({
        "team": {
            "category": {
                "flag": "atp",
                "id": 3,
                "name": "ATP",
                "slug": "atp",
                "sport": {
                    "id": 5,
                    "name": "Tennis",
                    "slug": "tennis"
                }
            },
            "country": {
                "alpha2": "ES",
                "name": "Spain"
            },
            "fullName": "Nadal, Rafael",
            "gender": "M",
            "id": 14486,
            "name": "Nadal R.",
            "nameCode": "NAD",
            "national": false,
            "playerTeamInfo": {
                "birthDateTimestamp": 518140800,
                "birthplace": "Manacor, Mallorca, Spain",
                "height": 1.85,
                "id": 2,
                "plays": "left-handed",
                "prizeCurrent": 5312722,
                "prizeCurrentRaw": {
                    "currency": "EUR",
                    "value": 5312722
                },
                "prizeTotal": 0,
                "prizeTotalRaw": {
                    "currency": "EUR",
                    "value": 109448443
                },
                "residence": "Manacor, Mallorca, Spain",
                "turnedPro": "2001",
                "weight": 85
            },
            "ranking": 3,
            "shortName": "Nadal R.",
            "slug": "nadal-rafael",
            "sport": {
                "id": 5,
                "name": "Tennis",
                "slug": "tennis"
            },
            "teamColors": {
                "primary": "#52b030",
                "secondary": "#52b030",
                "text": "#ffffff"
            },
            "tournament": {
                "category": {
                    "flag": "atp",
                    "id": 3,
                    "name": "ATP",
                    "slug": "atp",
                    "sport": {
                        "id": 5,
                        "name": "Tennis",
                        "slug": "tennis"
                    }
                },
                "id": 93468,
                "name": "French Open, Paris, France",
                "priority": 0,
                "slug": "french-open-paris-france",
                "uniqueTournament": {
                    "category": {
                        "flag": "atp",
                        "id": 3,
                        "name": "ATP",
                        "slug": "atp",
                        "sport": {
                            "id": 5,
                            "name": "Tennis",
                            "slug": "tennis"
                        }
                    },
                    "displayInverseHomeAwayTeams": false,
                    "id": 2480,
                    "name": "Roland Garros",
                    "slug": "roland-garros",
                    "userCount": 47119
                }
            },
            "type": 1,
            "userCount": 191154
        }
    });
    const [containern, setContainern] = useState(
        {
            "team": {
                "category": {
                    "flag": "atp",
                    "id": 3,
                    "name": "ATP",
                    "slug": "atp",
                    "sport": {
                        "id": 5,
                        "name": "Tennis",
                        "slug": "tennis"
                    }
                },
                "country": {
                    "alpha2": "ES",
                    "name": "Spain"
                },
                "fullName": "Nadal, Rafael",
                "gender": "M",
                "id": 14486,
                "name": "Nadal R.",
                "nameCode": "NAD",
                "national": false,
                "playerTeamInfo": {
                    "birthDateTimestamp": 518140800,
                    "birthplace": "Manacor, Mallorca, Spain",
                    "height": 1.85,
                    "id": 2,
                    "plays": "left-handed",
                    "prizeCurrent": 5312722,
                    "prizeCurrentRaw": {
                        "currency": "EUR",
                        "value": 5312722
                    },
                    "prizeTotal": 0,
                    "prizeTotalRaw": {
                        "currency": "EUR",
                        "value": 109448443
                    },
                    "residence": "Manacor, Mallorca, Spain",
                    "turnedPro": "2001",
                    "weight": 85
                },
                "ranking": 3,
                "shortName": "Nadal R.",
                "slug": "nadal-rafael",
                "sport": {
                    "id": 5,
                    "name": "Tennis",
                    "slug": "tennis"
                },
                "teamColors": {
                    "primary": "#52b030",
                    "secondary": "#52b030",
                    "text": "#ffffff"
                },
                "tournament": {
                    "category": {
                        "flag": "atp",
                        "id": 3,
                        "name": "ATP",
                        "slug": "atp",
                        "sport": {
                            "id": 5,
                            "name": "Tennis",
                            "slug": "tennis"
                        }
                    },
                    "id": 93468,
                    "name": "French Open, Paris, France",
                    "priority": 0,
                    "slug": "french-open-paris-france",
                    "uniqueTournament": {
                        "category": {
                            "flag": "atp",
                            "id": 3,
                            "name": "ATP",
                            "slug": "atp",
                            "sport": {
                                "id": 5,
                                "name": "Tennis",
                                "slug": "tennis"
                            }
                        },
                        "displayInverseHomeAwayTeams": false,
                        "id": 2480,
                        "name": "Roland Garros",
                        "slug": "roland-garros",
                        "userCount": 47119
                    }
                },
                "type": 1,
                "userCount": 191154
            }
        });




    const data = {

        labels: ["Federer", "Djocovid", "Nadal"],
        datasets: [
            {
                label: "Classement du Big3",
                data: [containerf.team.playerTeamInfo.prizeTotal, containerd.team.playerTeamInfo.prizeTotal, containern.team.playerTeamInfo.prizeTotal],
                backgroundColor: ["red", "blue", "orange"],
            },
        ],
    }
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9bc44bd1damsh3635f4d251c0318p1fba40jsn37c512fc2dbd',
            'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
        }
    };

    useEffect(() => {
        setTimeout(() => fetchMef(), 1500)
        setTimeout(() => fetchMed(), 2500)
        setTimeout(() => fetchMen(), 3100)

    }, [])

    const fetchMef = () => {
        fetch('https://tennisapi1.p.rapidapi.com/api/tennis/player/14342', options)
            .then(response => response.json())
            .then(data => { setContainerf(data) })
            .catch(err => console.error(err));
    }
    const fetchMed = () => {
        fetch('https://tennisapi1.p.rapidapi.com/api/tennis/player/14882', options)
            .then(response => response.json())
            .then(data => { setContainerd(data) })
            .catch(err => console.error(err));
    }
    const fetchMen = () => {
        fetch('https://tennisapi1.p.rapidapi.com/api/tennis/player/14486', options)
            .then(response => response.json())
            .then(data => { setContainern(data) })
            .catch(err => console.error(err));
    }


    console.log({ containern })
    return (
        <div className="big3">
            <h2>Classement du Big3</h2><br />
            Ce classemnt est basé sur l'indice MTW, ce dernier attribue un score en fonction d'une nombre de matchs remportés, du nombre de tournois et des performances sur le top 10
            <div className='container'>

                <Bar data={data} />



            </div>



        </div>
    );


}
export default Big3;

