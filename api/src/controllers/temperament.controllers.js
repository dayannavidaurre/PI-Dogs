const axios = require("axios");
const { Temperament} = require("../db");


const loadTemperaments = async () => {

    let dogsUrl = "https://api.thedogapi.com/v1/breeds";

    try {

        const apiInfo = (await axios.get(dogsUrl)).data
        //mapeare y traere solo los datos requeridos//
        const array = []
        apiInfo.map((el) => {
            if(!el.temperament) return;
            const temperaments = el.temperament.split(', ')
            temperaments.map((t) => {
                const findTemperament = array.find((el)=> el.name.toLowerCase() === t.toLowerCase())
                if (!findTemperament) array.push({ name: t })
            })
        });
        //vamos a crear un nuevo registro en la base de datos//
        // console.log(array)
        await Temperament.bulkCreate(array);

    } catch (error) {
        console.log(error)
    }

}

module.exports = { loadTemperaments };
