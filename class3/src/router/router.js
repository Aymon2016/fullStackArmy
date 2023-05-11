const express = require("express");
const RandomNumber = require('../bsLogic/randomNumber')

const router = new express.Router()


// router.get("/randomNumber", async (req, res) => {
//     const { start, end } = req.query;
//     try {

//         if (typeof start !== 'number' && typeof end !== 'number') {
//             res.status(400).json({ message: `${start} and ${end} is not number` })
//             res.end()
//         } else {
//             const result = await RandomNumber(start, end)
//             return result;
//         }


//         console.log(result)
//         res.end()
//     } catch (error) {
//         res.status(500).json({ message: error })
//     }
//     res.json({ message: 'hello firs router' })
// });

router.get("/randomNumber", async (req, res) => {
    const { start, end } = req.query;
    try {
        //why + operator use I don't know

        const startNum = +start;
        const endNum = +end;
        console.log(typeof start)
        console.log(typeof end)

        if (isNaN(startNum) || isNaN(endNum)) {
            res.status(400).json({ message: `${start} and ${end} are not valid numbers` });
        } else {
            const result = await RandomNumber(startNum, endNum);
            console.log(result);
            res.json({ result });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
});


module.exports = router