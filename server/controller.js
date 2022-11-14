let fortunes = ["A lifetime of happiness lies ahead of you.", "A new perspective will come with the new year.", "Adventure can be real happiness.", "Adventure can be real happiness.", "Go for the gold today!"]
//moved to outer scope so all functions have access
//changed const to let so post, put and delete can interact with the data

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortunes: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    addFortune: (req, res) => {
        let {fortune} = req.body

        fortunes.push(fortune)
        console.log(req.body)

        if(fortune === ''){
            res.status(400).send('Submit with a fortune') //error not showing?
        } else{
            res.status(200).send('Your fortune was added!')
        }
    },

    updateFortune: (req, res) => {
        let {index} = req.params
        let {fortune} = req.body

        fortunes.splice(index, 1, fortune)
        console.log(req.body)

        res.status(200).send('The fortune was updated')
    },

    deleteFortune: (req, res) => {
        let {index} = req.params

        fortunes.splice(index, 1)

        res.status(200).send('The fortune was deleted!')
    }
}

