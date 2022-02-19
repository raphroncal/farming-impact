$(document).ready(function(e) {

    const elements = {
        anemo: "anemo",
        cryo: "cryo",
        dendro: "dendro",
        electro: "electro",
        geo: "geo",
        hydro: "hydro",
        pyro: "pyro"
    }

    const anemoGem = {
        green: "vayuda turquoise sliver",
        blue: "vayuda turquoise fragment",
        purple: "vayuda turquoise chunk",
        gold: "vayuda turquoise gemstone"
    }
    
    const cryoGem = {
        green: "shivada jade sliver",
        blue: "shivada jade fragment",
        purple: "shivada jade chunk",
        gold: "shivada jade gemstone"
    }

    const slime = {
        gray: "condensate",
        green: "secretion",
        blue: "concentrate"
    }

    const mask = {
        gray: "damaged",
        green: "stained",
        blue: "ominous"
    }

    const xiao = {
        name: "xiao",
        element: elements.anemo,
        local: "qingxin",
        gem: anemoGem,
        boss: "juvenile",
        material: slime
    }

    const chongyun = {
        name: "chongyun",
        element: elements.cryo,
        local: "cor lapis",
        gem: cryoGem,
        boss: "hoarfrost",
        material: mask
    }

    const mora = {
        twenty:         24200,
        twentyAscend:   44200,
        forty:          160000,
        fortyAscend:    200000,
        fifty:          316000,
        fiftyAscend:    376000,
        sixty:          547000,
        sixtyAscend:    627000,
        seventy:        866200,
        seventyAscend:  966200,
        eighty:         1288600,
        eightyAscend:   1408600,
        ninety:         2093400
    }

    const books = {
        twenty:         7,
        twentyAscend:   7,
        forty:          35,
        fortyAscend:    35,
        fifty:          64,
        fiftyAscend:    64,
        sixty:          107,
        sixtyAscend:    107,
        seventy:        167,
        seventyAscend:  167,
        eighty:         247,
        eightyAscend:   247,
        ninety:         419
    }

    // TODO: fill up values
    const locals = {
        twenty:         0,
        twentyAscend:   3,
        forty:          160000,
        fortyAscend:    200000,
        fifty:          316000,
        fiftyAscend:    376000,
        sixty:          547000,
        sixtyAscend:    627000,
        seventy:        866200,
        seventyAscend:  966200,
        eighty:         1288600,
        eightyAscend:   1408600,
        ninety:         168
    }

    // TODO: fill up values
    const greenGems = {
        twenty:         0,
        twentyAscend:   0,
        forty:          0,
        fortyAscend:    3,
        fifty:          0,
        fiftyAscend:    376000,
        sixty:          0,
        sixtyAscend:    627000,
        seventy:        0,
        seventyAscend:  966200,
        eighty:         0,
        eightyAscend:   1408600,
        ninety:         0
    }

    // TODO: fill up values
    const blueGems = {
        twenty:         0,
        twentyAscend:   0,
        forty:          160000,
        fortyAscend:    200000,
        fifty:          316000,
        fiftyAscend:    376000,
        sixty:          547000,
        sixtyAscend:    627000,
        seventy:        866200,
        seventyAscend:  966200,
        eighty:         1288600,
        eightyAscend:   1408600,
        ninety:         168
    }

    // TODO: fill up values
    const purpleGems = {
        twenty:         0,
        twentyAscend:   0,
        forty:          160000,
        fortyAscend:    200000,
        fifty:          316000,
        fiftyAscend:    376000,
        sixty:          547000,
        sixtyAscend:    627000,
        seventy:        866200,
        seventyAscend:  966200,
        eighty:         1288600,
        eightyAscend:   1408600,
        ninety:         168
    }

    // TODO: fill up values
    const goldGems = {
        twenty:         0,
        twentyAscend:   0,
        forty:          160000,
        fortyAscend:    200000,
        fifty:          316000,
        fiftyAscend:    376000,
        sixty:          547000,
        sixtyAscend:    627000,
        seventy:        866200,
        seventyAscend:  966200,
        eighty:         1288600,
        eightyAscend:   1408600,
        ninety:         168
    }

    // TODO: fill up values
    const bossMats = {
        twenty:         0,
        twentyAscend:   0,
        forty:          160000,
        fortyAscend:    200000,
        fifty:          316000,
        fiftyAscend:    376000,
        sixty:          547000,
        sixtyAscend:    627000,
        seventy:        866200,
        seventyAscend:  966200,
        eighty:         1288600,
        eightyAscend:   1408600,
        ninety:         168
    }

    // TODO: fill up values
    const grayEnemyMats = {
        twenty:         0,
        twentyAscend:   0,
        forty:          160000,
        fortyAscend:    200000,
        fifty:          316000,
        fiftyAscend:    376000,
        sixty:          547000,
        sixtyAscend:    627000,
        seventy:        866200,
        seventyAscend:  966200,
        eighty:         1288600,
        eightyAscend:   1408600,
        ninety:         168
    }

    // TODO: fill up values
    const greenEnemyMats = {
        twenty:         0,
        twentyAscend:   0,
        forty:          160000,
        fortyAscend:    200000,
        fifty:          316000,
        fiftyAscend:    376000,
        sixty:          547000,
        sixtyAscend:    627000,
        seventy:        866200,
        seventyAscend:  966200,
        eighty:         1288600,
        eightyAscend:   1408600,
        ninety:         168
    }

    // TODO: fill up values
    const blueEnemyMats = {
        twenty:         0,
        twentyAscend:   0,
        forty:          160000,
        fortyAscend:    200000,
        fifty:          316000,
        fiftyAscend:    376000,
        sixty:          547000,
        sixtyAscend:    627000,
        seventy:        866200,
        seventyAscend:  966200,
        eighty:         1288600,
        eightyAscend:   1408600,
        ninety:         168
    }

    let startingLevel = "50A";
    let targetLevel = "90";

    let spentMora, spentBooks, spentLocals, spentGreenGems, spentBlueGems, spentPurpleGems, spentGoldGems, spentBossMats, spentGrayEnemyMats, spentGreenEnemyMats, spentBlueEnemyMats;
    let targetMora, targetBooks, targetLocals, targetGreenGems, targetBlueGems, targetPurpleGems, targetGoldGems,  targetBossMats, targetGrayEnemyMats, targetGreenEnemyMats, targetBlueEnemyMats;
    let totalMora, totalBooks, totalLocals, totalGreenGems, totalBlueGems, totalPurpleGems, totalGoldGems, totalBossMats, totalGrayEnemyMats, totalGreenEnemyMats, totalBlueEnemyMats;

    switch(startingLevel) {
        case "20":
            spentMora = mora.twenty;
            spentBooks = books.twenty;
            spentLocals = locals.twenty;
            spentGreenGems = greenGems.twenty;
            spentBlueGems = blueGems.twenty;
            spentPurpleGems = purpleGems.twenty;
            spentGoldGems = goldGems.twenty;
            spentBossMats = bossMats.twenty;
            spentGrayEnemyMats = grayEnemyMats.twenty;
            spentGreenEnemyMats = grayEnemyMats.twenty;
            spentBlueEnemyMats = blueEnemyMats.twenty;
            break;
        case "20A":
            spentMora = mora.twentyAscend;
            spentBooks = books.twentyAscend;
            spentLocals = locals.twentyAscend;
            spentGreenGems = greenGems.twentyAscend;
            spentBlueGems = blueGems.twentyAscend;
            spentPurpleGems = purpleGems.twentyAscend;
            spentGoldGems = goldGems.twentyAscend;
            spentBossMats = bossMats.twentyAscend;
            spentGrayEnemyMats = grayEnemyMats.twentyAscend;
            spentGreenEnemyMats = grayEnemyMats.twentyAscend;
            spentBlueEnemyMats = blueEnemyMats.twentyAscend;
            break;
        case "40":
            spentMora = mora.forty;
            spentBooks = books.forty;
            spentLocals = locals.forty;
            spentGreenGems = greenGems.forty;
            spentBlueGems = blueGems.forty;
            spentPurpleGems = purpleGems.forty;
            spentGoldGems = goldGems.forty;
            spentBossMats = bossMats.forty;
            spentGrayEnemyMats = grayEnemyMats.forty;
            spentGreenEnemyMats = grayEnemyMats.forty;
            spentBlueEnemyMats = blueEnemyMats.forty;
            break;
        case "40A":
            spentMora = mora.fortyAscend;
            spentBooks = books.fortyAscend;
            spentLocals = locals.fortyAscend;
            spentGreenGems = greenGems.fortyAscend;
            spentBlueGems = blueGems.fortyAscend;
            spentPurpleGems = purpleGems.fortyAscend;
            spentGoldGems = goldGems.fortyAscend;
            spentBossMats = bossMats.fortyAscend;
            spentGrayEnemyMats = grayEnemyMats.fortyAscend;
            spentGreenEnemyMats = grayEnemyMats.fortyAscend;
            spentBlueEnemyMats = blueEnemyMats.fortyAscend;
            break;
        case "50":
            spentMora = mora.fifty;
            spentBooks = books.fifty;
            spentLocals = locals.fifty;
            spentGreenGems = greenGems.fifty;
            spentBlueGems = blueGems.fifty;
            spentPurpleGems = purpleGems.fifty;
            spentGoldGems = goldGems.fifty;
            spentBossMats = bossMats.fifty;
            spentGrayEnemyMats = grayEnemyMats.fifty;
            spentGreenEnemyMats = grayEnemyMats.fifty;
            spentBlueEnemyMats = blueEnemyMats.fifty;
            break;
        case "50A":
            spentMora = mora.fiftyAscend;
            spentBooks = books.fiftyAscend;
            spentLocals = locals.fiftyAscend;
            spentGreenGems = greenGems.fiftyAscend;
            spentBlueGems = blueGems.fiftyAscend;
            spentPurpleGems = purpleGems.fiftyAscend;
            spentGoldGems = goldGems.fiftyAscend;
            spentBossMats = bossMats.fiftyAscend;
            spentGrayEnemyMats = grayEnemyMats.fiftyAscend;
            spentGreenEnemyMats = grayEnemyMats.fiftyAscend;
            spentBlueEnemyMats = blueEnemyMats.fiftyAscend;
            break;
        case "60":
            spentMora = mora.sixty;
            spentBooks = books.sixty;
            spentLocals = locals.sixty;
            spentGreenGems = greenGems.sixty;
            spentBlueGems = blueGems.sixty;
            spentPurpleGems = purpleGems.sixty;
            spentGoldGems = goldGems.sixty;
            spentBossMats = bossMats.sixty;
            spentGrayEnemyMats = grayEnemyMats.sixty;
            spentGreenEnemyMats = grayEnemyMats.sixty;
            spentBlueEnemyMats = blueEnemyMats.sixty;
            break;
        case "60A":
            spentMora = mora.sixtyAscend;
            spentBooks = books.sixtyAscend;
            spentLocals = locals.sixtyAscend;
            spentGreenGems = greenGems.sixtyAscend;
            spentBlueGems = blueGems.sixtyAscend;
            spentPurpleGems = purpleGems.sixtyAscend;
            spentGoldGems = goldGems.sixtyAscend;
            spentBossMats = bossMats.sixtyAscend;
            spentGrayEnemyMats = grayEnemyMats.sixtyAscend;
            spentGreenEnemyMats = grayEnemyMats.sixtyAscend;
            spentBlueEnemyMats = blueEnemyMats.sixtyAscend;
            break;
        case "70":
            spentMora = mora.seventy;
            spentBooks = books.seventy;
            spentLocals = locals.seventy;
            spentGreenGems = greenGems.seventy;
            spentBlueGems = blueGems.seventy;
            spentPurpleGems = purpleGems.seventy;
            spentGoldGems = goldGems.seventy;
            spentBossMats = bossMats.seventy;
            spentGrayEnemyMats = grayEnemyMats.seventy;
            spentGreenEnemyMats = grayEnemyMats.seventy;
            spentBlueEnemyMats = blueEnemyMats.seventy;
            break;
        case "70A":
            spentMora = mora.seventyAscend;
            spentBooks = books.seventyAscend;
            spentLocals = locals.seventyAscend;
            spentGreenGems = greenGems.seventyAscend;
            spentBlueGems = blueGems.seventyAscend;
            spentPurpleGems = purpleGems.seventyAscend;
            spentGoldGems = goldGems.seventyAscend;
            spentBossMats = bossMats.seventyAscend;
            spentGrayEnemyMats = grayEnemyMats.seventyAscend;
            spentGreenEnemyMats = grayEnemyMats.seventyAscend;
            spentBlueEnemyMats = blueEnemyMats.seventyAscend;
            break;
        case "80":
            spentMora = mora.eighty;
            spentBooks = books.eighty;
            spentLocals = locals.eighty;
            spentGreenGems = greenGems.eighty;
            spentBlueGems = blueGems.eighty;
            spentPurpleGems = purpleGems.eighty;
            spentGoldGems = goldGems.eighty;
            spentBossMats = bossMats.eighty;
            spentGrayEnemyMats = grayEnemyMats.eighty;
            spentGreenEnemyMats = grayEnemyMats.eighty;
            spentBlueEnemyMats = blueEnemyMats.eighty;
            break;
        case "80A":
            spentMora = mora.eightyAscend;
            spentBooks = books.eightyAscend;
            spentLocals = locals.eightyAscend;
            spentGreenGems = greenGems.eightyAscend;
            spentBlueGems = blueGems.eightyAscend;
            spentPurpleGems = purpleGems.eightyAscend;
            spentGoldGems = goldGems.eightyAscend;
            spentBossMats = bossMats.eightyAscend;
            spentGrayEnemyMats = grayEnemyMats.eightyAscend;
            spentGreenEnemyMats = grayEnemyMats.eightyAscend;
            spentBlueEnemyMats = blueEnemyMats.eightyAscend;
            break;
        case "90":
            spentMora = mora.ninety;
            spentBooks = books.ninety;
            spentLocals = locals.ninety;
            spentGreenGems = greenGems.ninety;
            spentBlueGems = blueGems.ninety;
            spentPurpleGems = purpleGems.ninety;
            spentGoldGems = goldGems.ninety;
            spentBossMats = bossMats.ninety;
            spentGrayEnemyMats = grayEnemyMats.ninety;
            spentGreenEnemyMats = grayEnemyMats.ninety;
            spentBlueEnemyMats = blueEnemyMats.ninety;
            break;
        default:
            spentMora = 0;
            spentBooks = 0;
            spentLocals = 0;
            spentGreenGems = 0;
            spentBlueGems = 0;
            spentPurpleGems = 0;
            spentGoldGems = 0;
            spentBossMats = 0;
            spentGrayEnemyMats = 0;
            spentGreenEnemyMats = 0;
            spentBlueEnemyMats = 0;
    }

    switch(targetLevel) {
        case "20":
            targetMora = mora.twenty;
            targetBooks = books.twenty;
            targetLocals = locals.twenty;
            targetGreenGems = greenGems.twenty;
            targetBlueGems = blueGems.twenty;
            targetPurpleGems = purpleGems.twenty;
            targetGoldGems = goldGems.twenty;
            targetBossMats = bossMats.twenty;
            targetGrayEnemyMats = grayEnemyMats.twenty;
            targetGreenEnemyMats = grayEnemyMats.twenty;
            targetBlueEnemyMats = blueEnemyMats.twenty;
            break;
        case "20A":
            targetMora = mora.twentyAscend;
            targetBooks = books.twentyAscend;
            targetLocals = locals.twentyAscend;
            targetGreenGems = greenGems.twentyAscend;
            targetBlueGems = blueGems.twentyAscend;
            targetPurpleGems = purpleGems.twentyAscend;
            targetGoldGems = goldGems.twentyAscend;
            targetBossMats = bossMats.twentyAscend;
            targetGrayEnemyMats = grayEnemyMats.twentyAscend;
            targetGreenEnemyMats = grayEnemyMats.twentyAscend;
            targetBlueEnemyMats = blueEnemyMats.twentyAscend;
            break;
        case "40":
            targetMora = mora.forty;
            targetBooks = books.forty;
            targetLocals = locals.forty;
            targetGreenGems = greenGems.forty;
            targetBlueGems = blueGems.forty;
            targetPurpleGems = purpleGems.forty;
            targetGoldGems = goldGems.forty;
            targetBossMats = bossMats.forty;
            targetGrayEnemyMats = grayEnemyMats.forty;
            targetGreenEnemyMats = grayEnemyMats.forty;
            targetBlueEnemyMats = blueEnemyMats.forty;
            break;
        case "40A":
            targetMora = mora.fortyAscend;
            targetBooks = books.fortyAscend;
            targetLocals = locals.fortyAscend;
            targetGreenGems = greenGems.fortyAscend;
            targetBlueGems = blueGems.fortyAscend;
            targetPurpleGems = purpleGems.fortyAscend;
            targetGoldGems = goldGems.fortyAscend;
            targetBossMats = bossMats.fortyAscend;
            targetGrayEnemyMats = grayEnemyMats.fortyAscend;
            targetGreenEnemyMats = grayEnemyMats.fortyAscend;
            targetBlueEnemyMats = blueEnemyMats.fortyAscend;
            break;
        case "50":
            targetMora = mora.fifty;
            targetBooks = books.fifty;
            targetLocals = locals.fifty;
            targetGreenGems = greenGems.fifty;
            targetBlueGems = blueGems.fifty;
            targetPurpleGems = purpleGems.fifty;
            targetGoldGems = goldGems.fifty;
            targetBossMats = bossMats.fifty;
            targetGrayEnemyMats = grayEnemyMats.fifty;
            targetGreenEnemyMats = grayEnemyMats.fifty;
            targetBlueEnemyMats = blueEnemyMats.fifty;
            break;
        case "50A":
            targetMora = mora.fiftyAscend;
            targetBooks = books.fiftyAscend;
            targetLocals = locals.fiftyAscend;
            targetGreenGems = greenGems.fiftyAscend;
            targetBlueGems = blueGems.fiftyAscend;
            targetPurpleGems = purpleGems.fiftyAscend;
            targetGoldGems = goldGems.fiftyAscend;
            targetBossMats = bossMats.fiftyAscend;
            targetGrayEnemyMats = grayEnemyMats.fiftyAscend;
            targetGreenEnemyMats = grayEnemyMats.fiftyAscend;
            targetBlueEnemyMats = blueEnemyMats.fiftyAscend;
            break;
        case "60":
            targetMora = mora.sixty;
            targetBooks = books.sixty;
            targetLocals = locals.sixty;
            targetGreenGems = greenGems.sixty;
            targetBlueGems = blueGems.sixty;
            targetPurpleGems = purpleGems.sixty;
            targetGoldGems = goldGems.sixty;
            targetBossMats = bossMats.sixty;
            targetGrayEnemyMats = grayEnemyMats.sixty;
            targetGreenEnemyMats = grayEnemyMats.sixty;
            targetBlueEnemyMats = blueEnemyMats.sixty;
            break;
        case "60A":
            targetMora = mora.sixtyAscend;
            targetBooks = books.sixtyAscend;
            targetLocals = locals.sixtyAscend;
            targetGreenGems = greenGems.sixtyAscend;
            targetBlueGems = blueGems.sixtyAscend;
            targetPurpleGems = purpleGems.sixtyAscend;
            targetGoldGems = goldGems.sixtyAscend;
            targetBossMats = bossMats.sixtyAscend;
            targetGrayEnemyMats = grayEnemyMats.sixtyAscend;
            targetGreenEnemyMats = grayEnemyMats.sixtyAscend;
            targetBlueEnemyMats = blueEnemyMats.sixtyAscend;
            break;
        case "70":
            targetMora = mora.seventy;
            targetBooks = books.seventy;
            targetLocals = locals.seventy;
            targetGreenGems = greenGems.seventy;
            targetBlueGems = blueGems.seventy;
            targetPurpleGems = purpleGems.seventy;
            targetGoldGems = goldGems.seventy;
            targetBossMats = bossMats.seventy;
            targetGrayEnemyMats = grayEnemyMats.seventy;
            targetGreenEnemyMats = grayEnemyMats.seventy;
            targetBlueEnemyMats = blueEnemyMats.seventy;
            break;
        case "70A":
            targetMora = mora.seventyAscend;
            targetBooks = books.seventyAscend;
            targetLocals = locals.seventyAscend;
            targetGreenGems = greenGems.seventyAscend;
            targetBlueGems = blueGems.seventyAscend;
            targetPurpleGems = purpleGems.seventyAscend;
            targetGoldGems = goldGems.seventyAscend;
            targetBossMats = bossMats.seventyAscend;
            targetGrayEnemyMats = grayEnemyMats.seventyAscend;
            targetGreenEnemyMats = grayEnemyMats.seventyAscend;
            targetBlueEnemyMats = blueEnemyMats.seventyAscend;
            break;
        case "80":
            targetMora = mora.eighty;
            targetBooks = books.eighty;
            targetLocals = locals.eighty;
            targetGreenGems = greenGems.eighty;
            targetBlueGems = blueGems.eighty;
            targetPurpleGems = purpleGems.eighty;
            targetGoldGems = goldGems.eighty;
            targetBossMats = bossMats.eighty;
            targetGrayEnemyMats = grayEnemyMats.eighty;
            targetGreenEnemyMats = grayEnemyMats.eighty;
            targetBlueEnemyMats = blueEnemyMats.eighty;
            break;
        case "80A":
            targetMora = mora.eightyAscend;
            targetBooks = books.eightyAscend;
            targetLocals = locals.eightyAscend;
            targetGreenGems = greenGems.eightyAscend;
            targetBlueGems = blueGems.eightyAscend;
            targetPurpleGems = purpleGems.eightyAscend;
            targetGoldGems = goldGems.eightyAscend;
            targetBossMats = bossMats.eightyAscend;
            targetGrayEnemyMats = grayEnemyMats.eightyAscend;
            targetGreenEnemyMats = grayEnemyMats.eightyAscend;
            targetBlueEnemyMats = blueEnemyMats.eightyAscend;
            break;
        case "90":
            targetMora = mora.ninety;
            targetBooks = books.ninety;
            targetLocals = locals.ninety;
            targetGreenGems = greenGems.ninety;
            targetBlueGems = blueGems.ninety;
            targetPurpleGems = purpleGems.ninety;
            targetGoldGems = goldGems.ninety;
            targetBossMats = bossMats.ninety;
            targetGrayEnemyMats = grayEnemyMats.ninety;
            targetGreenEnemyMats = grayEnemyMats.ninety;
            targetBlueEnemyMats = blueEnemyMats.ninety;
            break;
        default:
            targetMora = 0;
            targetBooks = 0;
            targetLocals = 0;
            targetGreenGems = 0;
            targetBlueGems = 0;
            targetPurpleGems = 0;
            targetGoldGems = 0;
            targetBossMats = 0;
            targetGrayEnemyMats = 0;
            targetGreenEnemyMats = 0;
            targetBlueEnemyMats = 0;
    }

    totalMora = targetMora - spentMora;
    totalBooks = targetBooks - spentBooks;
    totalLocals = targetLocals - spentLocals;
    totalGreenGems = targetGreenGems - spentGreenGems; 
    totalBlueGems = targetBlueGems - spentBlueGems;
    totalPurpleGems = targetPurpleGems - spentPurpleGems;
    totalGoldGems = targetGoldGems - spentGoldGems;
    totalBossMats = targetBossMats - spentBossMats;
    totalGrayEnemyMats = targetGrayEnemyMats - spentGrayEnemyMats;
    totalGreenEnemyMats = targetGreenEnemyMats - spentGreenEnemyMats;
    totalBlueEnemyMats = targetBlueEnemyMats - spentBlueEnemyMats;

    console.log(totalMora);
})