const fortunes = require('./db.json')
let globalId = 5

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    addFortune: (req, res) => {
        let {fortune} = req.body

        let newFortune = {
            id: globalId,
            fortune
        }

        fortunes.push(newFortune)
        res.status(200).send(fortunes)
        globalId++
    } 

}