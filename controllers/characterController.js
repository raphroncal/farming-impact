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
            description: "A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.",
            card:           "/images/cards/aether_card.png",
            local:          "/images/materials/windwheel_aster.png",
            sliver:         "/images/materials/brilliant_diamond_sliver.png",
            fragment:       "/images/materials/brilliant_diamond_fragment.png",
            chunk:          "/images/materials/brilliant_diamond_chunk.png",
            gemstone:       "/images/materials/brilliant_diamond_gemstone.png",
            gray:           "/images/materials/damaged_mask.png",
            green:          "/images/materials/stained_mask.png",
            blue:           "/images/materials/ominous_mask.png"
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
            description: "A genius known as the Kreideprinz, he is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.",
            card:           "/images/cards/albedo_card.png",
            local:          "/images/materials/cecilia.png",
            sliver:         "/images/materials/prithiva_topaz_sliver.png",
            fragment:       "/images/materials/prithiva_topaz_fragment.png",
            chunk:          "/images/materials/prithiva_topaz_chunk.png",
            gemstone:       "/images/materials/prithiva_topaz_gemstone.png",
            boss:           "/images/materials/basalt_pillar.png",
            gray:           "/images/materials/divining_scroll.png",
            green:          "/images/materials/sealed_scroll.png",
            blue:           "/images/materials/forbidden_curse_scroll.png"
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
            name:           "Chongyun",
            element:        "Cryo",
            description:    "A young exorcist from a family of exorcists. He does everything he can to suppress his abundance of yang energy.",
            card:           "/images/cards/chongyun_card.png",
            local:          "/images/materials/cor_lapis.png",
            sliver:         "/images/materials/shivada_jade_sliver.png",
            fragment:       "/images/materials/shivada_jade_fragment.png",
            chunk:          "/images/materials/shivada_jade_chunk.png",
            gemstone:       "/images/materials/shivada_jade_gemstone.png",
            boss:           "/images/materials/hoarfrost_core.png",
            gray:           "/images/materials/damaged_mask.png",
            green:          "/images/materials/stained_mask.png",
            blue:           "/images/materials/ominous_mask.png"
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
            name:           "Hu Tao",
            element:        "Pyro",
            description:    "The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.",
            card:           "/images/cards/hu-tao_card.png",
            local:          "/images/materials/silk_flower.png",
            sliver:         "/images/materials/agnidus_agate_sliver.png",
            fragment:       "/images/materials/agnidus_agate_fragment.png",
            chunk:          "/images/materials/agnidus_agate_chunk.png",
            gemstone:       "/images/materials/agnidus_agate_gemstone.png",
            boss:           "/images/materials/juvenile_jade.png",
            gray:           "/images/materials/whopperflower_nectar.png",
            green:          "/images/materials/shimmering_nectar.png",
            blue:           "/images/materials/energy_nectar.png"
        }

        res.render('character-partial', data);
    },

    /**
     * getKazuha
     * 
     * renders Kazuha character page
     * @param {*} req 
     * @param {*} res 
     */
     getKazuha: function(req, res) {
        let data = {
            name:           "Kazuha",
            element:        "Anemo",
            description:    "A wandering samurai from Inazuma who is currently with Liyue's Crux Fleet. A gentle and carefree soul whose heart hides a great many burdens from the past. It's hard to say if weathering life's storms has eroded any sharp edges he once had or his reserved nature keeps them hidden from view. The first time most people meet Kaedehara Kazuha, they presume he is just another traineee crew member aboard The Crux.",
            card:           "/images/cards/kazuha_card.png",
            local:          "/images/materials/sea_ganoderma.png",
            sliver:         "/images/materials/vayuda_turquoise_sliver.png",
            fragment:       "/images/materials/vayuda_turquoise_fragment.png",
            chunk:          "/images/materials/vayuda_turquoise_chunk.png",
            gemstone:       "/images/materials/vayuda_turquoise_gemstone.png",
            boss:           "/images/materials/marionette_core.png",
            gray:           "/images/materials/treasure_hoarder_insignia.png",
            green:          "/images/materials/silver_raven_insignia.png",
            blue:           "/images/materials/golden_raven_insignia.png"
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
            name:           "Klee",
            element:        "Pyro",
            description:    "An explosives expert and a regular at the Knights of Favonius's confinement room. Also known as Fleeing Sunlight.",
            card:           "/images/cards/klee_card.png",
            local:          "/images/materials/philanemo_mushroom.png",
            sliver:         "/images/materials/agnidus_agate_sliver.png",
            fragment:       "/images/materials/agnidus_agate_fragment.png",
            chunk:          "/images/materials/agnidus_agate_chunk.png",
            gemstone:       "/images/materials/agnidus_agate_gemstone.png",
            boss:           "/images/materials/everflame_seed.png",
            gray:           "/images/materials/divining_scroll.png",
            green:          "/images/materials/sealed_scroll.png",
            blue:           "/images/materials/forbidden_curse_scroll.png"
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
            name:           "Lisa",
            element:        "Electro",
            description:    "The languid but knowledgeable Librarian of the Knights of Favonius, deemed by Sumeru Academia to be their most distinguished graduate in the past two centuries.",
            card:           "/images/cards/lisa_card.png",
            local:          "/images/materials/valberry.png",
            sliver:         "/images/materials/vajrada_amethyst_sliver.png",
            fragment:       "/images/materials/vajrada_amethyst_fragment.png",
            chunk:          "/images/materials/vajrada_amethyst_chunk.png",
            gemstone:       "/images/materials/vajrada_amethyst_gemstone.png",
            boss:           "/images/materials/lightning_prism.png",
            gray:           "/images/materials/slime_condensate.png",
            green:          "/images/materials/slime_secretions.png",
            blue:           "/images/materials/slime_concentrate.png"
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
            name:           "Venti",
            element:        "Anemo",
            description:    "One of the many bards of Mondstadt, who freely wanders the city's streets and alleys.",
            card:           "/images/cards/venti_card.png",
            local:          "/images/materials/cecilia.png",
            sliver:         "/images/materials/vayuda_turquoise_sliver.png",
            fragment:       "/images/materials/vayuda_turquoise_fragment.png",
            chunk:          "/images/materials/vayuda_turquoise_chunk.png",
            gemstone:       "/images/materials/vayuda_turquoise_gemstone.png",
            boss:           "/images/materials/hurricane_seed.png",
            gray:           "/images/materials/slime_condensate.png",
            green:          "/images/materials/slime_secretions.png",
            blue:           "/images/materials/slime_concentrate.png"
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
            name:           "Xiangling",
            element:        "Pyro",
            description:    "A renowned chef from Liyue. She's extremely passionate about cooking and excels at making her signature hot and spicy dishes.",
            card:           "/images/cards/xiangling_card.png",
            local:          "/images/materials/jueyun_chili.png",
            sliver:         "/images/materials/agnidus_agate_sliver.png",
            fragment:       "/images/materials/agnidus_agate_fragment.png",
            chunk:          "/images/materials/agnidus_agate_chunk.png",
            gemstone:       "/images/materials/agnidus_agate_gemstone.png",
            boss:           "/images/materials/everflame_seed.png",
            gray:           "/images/materials/slime_condensate.png",
            green:          "/images/materials/slime_secretions.png",
            blue:           "/images/materials/slime_concentrate.png"
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
            name:           "Xiao",
            element:        "Anemo",
            description:    "A yaksha adeptus who defends Liyue. Also heralded as the \"Conqueror of Demons\" and \"Vigilant Yaksha.\"",
            card:           "/images/cards/xiao_card.png",
            local:          "/images/materials/qingxin.png",
            sliver:         "/images/materials/vayuda_turquoise_sliver.png",
            fragment:       "/images/materials/vayuda_turquoise_fragment.png",
            chunk:          "/images/materials/vayuda_turquoise_chunk.png",
            gemstone:       "/images/materials/vayuda_turquoise_gemstone.png",
            boss:           "/images/materials/juvenile_jade.png",
            gray:           "/images/materials/slime_condensate.png",
            green:          "/images/materials/slime_secretions.png",
            blue:           "/images/materials/slime_concentrate.png"
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
            name:           "Xingqiu",
            element:        "Hydro",
            description:    "A young man carrying a longsword who is frequently seen at book booths. He has a chivalrous heart and yearns for justice and fairness for all.",
            card:           "/images/cards/xingqiu_card.png",
            local:          "/images/materials/silk_flower.png",
            sliver:         "/images/materials/varunada_lazurite_sliver.png",
            fragment:       "/images/materials/varunada_lazurite_fragment.png",
            chunk:          "/images/materials/varunada_lazurite_chunk.png",
            gemstone:       "/images/materials/varunada_lazurite_gemstone.png",
            boss:           "/images/materials/cleansing_heart.png",
            gray:           "/images/materials/damaged_mask.png",
            green:          "/images/materials/stained_mask.png",
            blue:           "/images/materials/ominous_mask.png"
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
            name:           "Zhongli",
            element:        "Geo",
            description:    "A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.",
            card:           "/images/cards/zhongli_card.png",
            local:          "/images/materials/cor_lapis.png",
            sliver:         "/images/materials/prithiva_topaz_sliver.png",
            fragment:       "/images/materials/prithiva_topaz_fragment.png",
            chunk:          "/images/materials/prithiva_topaz_chunk.png",
            gemstone:       "/images/materials/prithiva_topaz_gemstone.png",
            boss:           "/images/materials/basalt_pillar.png",
            gray:           "/images/materials/slime_condensate.png",
            green:          "/images/materials/slime_secretions.png",
            blue:           "/images/materials/slime_concentrate.png"
        }

        res.render('character-partial', data);
    }
}

module.exports = characterController;