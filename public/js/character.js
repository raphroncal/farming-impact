$(document).ready(function(e) {

    let element = $('#element');
console.log(element.text());
    switch(element.text()) {
        case "Anemo":
            element.css('color', 'rgb(128,255,215)');
            break;
        case "Cryo":
            element.css('color', 'rgb(153,255,255)');
            break;
        case "Dendro":
            element.css('color', 'rgb(153,242,133)');
            break;
        case "Electro":
            element.css('color', 'rgb(255,172,255)');
            break;
        case "Geo":
            element.css('color', 'rgb(255,230,103)');
            break;
        case "Hydro":
            element.css('color', 'rgb(128,192,255)');
            break;
        case "Pyro":
            element.css('color', 'rgb(255,153,153)');
            break;
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

    const locals = {
        twenty:         0,
        twentyAscend:   3,
        forty:          3,
        fortyAscend:    13,
        fifty:          13,
        fiftyAscend:    33,
        sixty:          33,
        sixtyAscend:    63,
        seventy:        63,
        seventyAscend:  108,
        eighty:         108,
        eightyAscend:   168,
        ninety:         168
    }

    const greenGems = {
        twenty:         0,
        twentyAscend:   1,
        forty:          1,
        fortyAscend:    1,
        fifty:          1,
        fiftyAscend:    1,
        sixty:          1,
        sixtyAscend:    1,
        seventy:        1,
        seventyAscend:  1,
        eighty:         1,
        eightyAscend:   1,
        ninety:         1
    }

    const blueGems = {
        twenty:         0,
        twentyAscend:   0,
        forty:          0,
        fortyAscend:    3,
        fifty:          3,
        fiftyAscend:    9,
        sixty:          9,
        sixtyAscend:    9,
        seventy:        9,
        seventyAscend:  9,
        eighty:         9,
        eightyAscend:   9,
        ninety:         9
    }

    const purpleGems = {
        twenty:         0,
        twentyAscend:   0,
        forty:          0,
        fortyAscend:    0,
        fifty:          0,
        fiftyAscend:    0,
        sixty:          0,
        sixtyAscend:    3,
        seventy:        3,
        seventyAscend:  9,
        eighty:         9,
        eightyAscend:   9,
        ninety:         9
    }

    const goldGems = {
        twenty:         0,
        twentyAscend:   0,
        forty:          0,
        fortyAscend:    0,
        fifty:          0,
        fiftyAscend:    0,
        sixty:          0,
        sixtyAscend:    0,
        seventy:        0,
        seventyAscend:  0,
        eighty:         0,
        eightyAscend:   6,
        ninety:         6
    }

    const bossMats = {
        twenty:         0,
        twentyAscend:   0,
        forty:          0,
        fortyAscend:    2,
        fifty:          2,
        fiftyAscend:    6,
        sixty:          6,
        sixtyAscend:    14,
        seventy:        14,
        seventyAscend:  26,
        eighty:         26,
        eightyAscend:   46,
        ninety:         46
    }

    const grayEnemyMats = {
        twenty:         0,
        twentyAscend:   3,
        forty:          3,
        fortyAscend:    18,
        fifty:          18,
        fiftyAscend:    18,
        sixty:          18,
        sixtyAscend:    18,
        seventy:        18,
        seventyAscend:  18,
        eighty:         18,
        eightyAscend:   18,
        ninety:         18
    }

    const greenEnemyMats = {
        twenty:         0,
        twentyAscend:   0,
        forty:          0,
        fortyAscend:    0,
        fifty:          0,
        fiftyAscend:    12,
        sixty:          12,
        sixtyAscend:    30,
        seventy:        30,
        seventyAscend:  30,
        eighty:         30,
        eightyAscend:   30,
        ninety:         30
    }

    const blueEnemyMats = {
        twenty:         0,
        twentyAscend:   0,
        forty:          0,
        fortyAscend:    0,
        fifty:          0,
        fiftyAscend:    0,
        sixty:          0,
        sixtyAscend:    0,
        seventy:        0,
        seventyAscend:  12,
        eighty:         12,
        eightyAscend:   36,
        ninety:         36
    }

    $('#calculate').click(function() {
        let startingLevel = $('#starting-level option:selected').attr('value');
        let targetLevel = $('#target-level option:selected').attr('value');

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
                spentGreenEnemyMats = greenEnemyMats.twenty;
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
                spentGreenEnemyMats = greenEnemyMats.twentyAscend;
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
                spentGreenEnemyMats = greenEnemyMats.forty;
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
                spentGreenEnemyMats = greenEnemyMats.fortyAscend;
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
                spentGreenEnemyMats = greenEnemyMats.fifty;
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
                spentGreenEnemyMats = greenEnemyMats.fiftyAscend;
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
                spentGreenEnemyMats = greenEnemyMats.sixty;
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
                spentGreenEnemyMats = greenEnemyMats.sixtyAscend;
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
                spentGreenEnemyMats = greenEnemyMats.seventy;
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
                spentGreenEnemyMats = greenEnemyMats.seventyAscend;
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
                spentGreenEnemyMats = greenEnemyMats.eighty;
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
                spentGreenEnemyMats = greenEnemyMats.eightyAscend;
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
                spentGreenEnemyMats = greenEnemyMats.ninety;
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
                targetGreenEnemyMats = greenEnemyMats.twenty;
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
                targetGreenEnemyMats = greenEnemyMats.twentyAscend;
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
                targetGreenEnemyMats = greenEnemyMats.forty;
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
                targetGreenEnemyMats = greenEnemyMats.fortyAscend;
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
                targetGreenEnemyMats = greenEnemyMats.fifty;
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
                targetGreenEnemyMats = greenEnemyMats.fiftyAscend;
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
                targetGreenEnemyMats = greenEnemyMats.sixty;
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
                targetGreenEnemyMats = greenEnemyMats.sixtyAscend;
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
                targetGreenEnemyMats = greenEnemyMats.seventy;
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
                targetGreenEnemyMats = greenEnemyMats.seventyAscend;
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
                targetGreenEnemyMats = greenEnemyMats.eighty;
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
                targetGreenEnemyMats = greenEnemyMats.eightyAscend;
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
                targetGreenEnemyMats = greenEnemyMats.ninety;
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

        let formattedMora = nFormatter(totalMora, 2);
        $('#mora').text(formattedMora);
        $('#wits').text(totalBooks);
        $('#locals').text(totalLocals);
        $('#slivers').text(totalGreenGems);
        $('#fragments').text(totalBlueGems);
        $('#chunks').text(totalPurpleGems);
        $('#gemstones').text(totalGoldGems);
        $('#boss-mats').text(totalBossMats);
        $('#grays').text(totalGrayEnemyMats);
        $('#greens').text(totalGreenEnemyMats);
        $('#blues').text(totalBlueEnemyMats);
    });

    /**
     * nFormatter
     * 
     * shortens a number and appends its corresponding value (e.g., 'k' for thousands, 'M' for millions)
     * @param {*} num       the number to be formatted
     * @param {*} digits    the number of digits for decimals
     * @returns 
     */
    function nFormatter(num, digits) {
        const lookup = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "k" },
          { value: 1e6, symbol: "M" },
          { value: 1e9, symbol: "G" },
          { value: 1e12, symbol: "T" },
          { value: 1e15, symbol: "P" },
          { value: 1e18, symbol: "E" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function(item) {
          return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
      }
})