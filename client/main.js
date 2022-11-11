const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")

const baseURL = '????'

const fortunesCallback = ({ fortuneData : fortunes}) => displayFortunes(fortunes)
const errCallback = err => console.log(err.response.data)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes")
        .then(res => {
            const fortuneData = res.fortuneData;
            alert(fortuneData);
        })
}

const addFortune = body => axios.post(baseURL, body).then(fortunesCallback).catch(errCallback)
const deleteFortune = id => axios.delete(`${baseURL}/${id}`).then(fortunesCallback).catch(errCallback)
const updateFortune = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(fortunesCallback).catch(errCallback)


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)

