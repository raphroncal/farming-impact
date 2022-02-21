const db = require('../models/db.js');

const characterController = {
    /**
     * getAether
     * 
     * renders Aether character page
     * @param {*} req 
     * @param {*} res 
     */
    getAether: function(req, res) {
        let data = {
            name: "Aether",
            element: "All",
            description: "A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven."
        }

        res.render('character-partial', data);
    },

    /**
     * getAlbedo
     * 
     * renders Albedo character page
     * @param {*} req 
     * @param {*} res 
     */
    getAlbedo: function(req, res) {
        let data = {
            name: "Albedo",
            element: "Geo",
            description: "A genius known as the Kreideprinz, he is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius."
        }

        res.render('character-partial', data);
    },

    /**
     * getChongyun
     * 
     * renders Chongyun character page
     * @param {*} req 
     * @param {*} res 
     */
    getChongyun: function(req, res) {
        let data = {
            name: "Chongyun",
            element: "Cryo",
            description: "A young exorcist from a family of exorcists. He does everything he can to suppress his abundance of yang energy."
        }

        res.render('character-partial', data);
    },

    /**
     * getHuTao
     * 
     * renders Hu Tao character page
     * @param {*} req 
     * @param {*} res 
     */
     getHuTao: function(req, res) {
        let data = {
            name: "Hu Tao",
            element: "Pyro",
            description: "The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age."
        }

        res.render('character-partial', data);
    },

    /**
     * getKlee
     * 
     * renders Klee character page
     * @param {*} req 
     * @param {*} res 
     */
     getKlee: function(req, res) {
        let data = {
            name: "Klee",
            element: "Pyro",
            description: "An explosives expert and a regular at the Knights of Favonius's confinement room. Also known as Fleeing Sunlight."
        }

        res.render('character-partial', data);
    },

    /**
     * getLisa
     * 
     * renders Lisa character page
     * @param {*} req 
     * @param {*} res 
     */
     getLisa: function(req, res) {
        let data = {
            name: "Lisa",
            element: "Electro",
            description: "The languid but knowledgeable Librarian of the Knights of Favonius, deemed by Sumeru Academia to be their most distinguished graduate in the past two centuries."
        }

        res.render('character-partial', data);
    },

    /**
     * getVenti
     * 
     * renders Venti character page
     * @param {*} req 
     * @param {*} res 
     */
     getVenti: function(req, res) {
        let data = {
            name: "Venti",
            element: "Anemo",
            description: "One of the many bards of Mondstadt, who freely wanders the city's streets and alleys."
        }

        res.render('character-partial', data);
    },

    /**
     * getXiangling
     * 
     * renders Xiangling character page
     * @param {*} req 
     * @param {*} res 
     */
     getXiangling: function(req, res) {
        let data = {
            name: "Xiangling",
            element: "Pyro",
            description: "A renowned chef from Liyue. She's extremely passionate about cooking and excels at making her signature hot and spicy dishes."
        }

        res.render('character-partial', data);
    },

    /**
     * getXiao
     * 
     * renders Xiao character page
     * @param {*} req 
     * @param {*} res 
     */
    getXiao: function(req, res) {
        let data = {
            name: "Xiao",
            element: "Anemo",
            description: "A yaksha adeptus who defends Liyue. Also heralded as the \"Conqueror of Demons\" and \"Vigilant Yaksha.\""
        }

        res.render('character-partial', data);
    },

    /**
     * getXingqiu
     * 
     * renders Xingqiu character page
     * @param {*} req 
     * @param {*} res 
     */
    getXingqiu: function(req, res) {
        let data = {
            name: "Xingqiu",
            element: "Hydro",
            description: "A young man carrying a longsword who is frequently seen at book booths. He has a chivalrous heart and yearns for justice and fairness for all."
        }

        res.render('character-partial', data);
    },

    /**
     * getZhongli
     * 
     * renders Zhongli character page
     * @param {*} req 
     * @param {*} res 
     */
     getZhongli: function(req, res) {
        let data = {
            name: "Zhongli",
            element: "Geo",
            description: "A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things."
        }

        res.render('character-partial', data);
    }
}

module.exports = characterController;