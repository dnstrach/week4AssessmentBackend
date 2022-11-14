//const { getFortunes } = require("../server/controller");

//const { deleteFortune } = require("../server/controller");

const complimentBtn = document.getElementById("complimentButton")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes")
        .then(res => {
            alert(res.data);
        })
}

fortuneBtn.addEventListener('click', getFortune)

const newFortuneBtn = document.getElementById('newFortuneBtn')

const addFortune = () => {
    let fortuneInput = document.getElementById('newFortune')
    
    let body = {
        fortune: fortuneInput.value
    }

    axios.post("http://localhost:4000/api/fortunes", body)
        .then(res => {
            alert(res.data)
            //fortuneInput.value = ''
        })
}

newFortuneBtn.addEventListener('click', addFortune)

const updateFortuneBtn = document.getElementById('updateFortuneBtn')

const updateFortune = () => {
    let fortuneIndex = document.getElementById('updateFortuneIndex')
    let updatedFortuneInput = document.getElementById('updateFortuneInput')

    let body = {
        fortune: updatedFortuneInput.value
    }

    axios.put(`http://localhost:4000/api/fortunes/${fortuneIndex.value}`, body)
        .then(res => {
            alert(res.data)
            //fortuneIndex.value = ''
            //updatedFortuneInput.value = ''

        })
}

updateFortuneBtn.addEventListener('click', updateFortune)

const deleteFortuneBtn = document.getElementById("deleteFortuneBtn")

const deleteFortune = () => {
    let deleteFortuneInput = document.getElementById("deleteFortuneInputel")

    axios.delete(`http://localhost:4000/api/fortunes/${deleteFortuneInput.value}`)
        .then(res => {
            alert(res.data)
            //deleteFortuneInput.value = ''
        })
}

deleteFortuneBtn.addEventListener('click', deleteFortune)






