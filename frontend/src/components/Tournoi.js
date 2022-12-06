import React, { useState, useEffect } from 'react';


const Tournoi = () => {
    const [container, setContainer] = useState([{
        "_id": {
            "$oid": "638cb5454ebce31189f8907a"
        },
        "nom": "",
        "debut": "",
        "fin": "",
        "ville": "",
        "pays": "",
        "surface": "",
        "creation": 1905
    }, {
        "_id": {
            "$oid": "638cb55c4ebce31189f8907c"
        },
        "nom": "",
        "debut": "",
        "fin": "",
        "ville": "",
        "pays": "",
        "surface": "",
        "creation": 1925
    }, {
        "_id": {
            "$oid": "638cb56b4ebce31189f8907e"
        },
        "nom": "",
        "debut": "",
        "fin": "",
        "ville": "",
        "pays": "",
        "surface": "",
        "creation": 1877
    }, {
        "_id": {
            "$oid": "638cb5734ebce31189f89080"
        },
        "nom": "",
        "debut": "",
        "fin": "",
        "ville": "",
        "pays": "",
        "surface": "",
        "creation": 1881
    }]);
    const bdd = "http://localhost:5500/";
    useEffect(() => {
        fetchMe()

    }, [])
    const fetchMe = () => {
        fetch(bdd)
            .then(response => { return response.json(); })
            .then(data => { setContainer(data) })
            .catch(err => { console.error(err) });

    }
    console.log(container[0].nom);
    return (
        <div className='tournoi'>
            <h2>Grand Chelem</h2>
            nom :{container[0].nom} <br />

            pays :{container[0].pays} <br />
            surface :{container[0].surface} <br />
            <br />
            nom :{container[1].nom} <br />

            pays :{container[1].pays} <br />
            surface :{container[1].surface} <br />
            <br />
            nom :{container[2].nom} <br />
            pays :{container[2].pays} <br />
            surface :{container[2].surface} <br />


        </div>
    );
};

export default Tournoi;