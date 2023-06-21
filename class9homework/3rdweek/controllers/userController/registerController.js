
const registerValidator = require('../../validator/userValidator/registerValidator')
const { readfile } = require('../../utilis/utilis');
const userCollection = require('../../services/userServices/userServices')
const bcrypt = require('bcrypt')

const registerController = async (req, res) => {


    /*=============================================
    =            validation section           =
    =============================================*/

    let { name, email, password, confirmPassword } = JSON.parse(req.body.body)

    let validate = registerValidator({ name, email, password, confirmPassword })

    /*=====  End of Section comment block  ======*/



    /*=============================================
    =            third party service            =
    =============================================*/


    /*=====  End of third party service  ======*/

    /*=============================================
    =            Bussiness service           =
    =============================================*/


    if (!validate.isValid) {
        return res.status(400).json(validate.error)
    } else {

        try {
            const anyuser = await readfile()
            if (anyuser.length !== 0) {

                const user = await userCollection.findByEmail(email)

                if (user.length !== 0) {

                    console.log('email ace')
                    return res.status(400).json({ message: 'Email Already Exist' })

                } else {

                    bcrypt.hash(password, 11, (err, hash) => {
                        if (err) {
                            return resourceError(res, 'Server Error Occurred')
                        } else {
                            const role = 'user'
                            const newUser = userCollection.create(name, email, password = hash, role)

                            return res.status(200).json({
                                message: 'user created successfully',
                                user: JSON.stringify(newUser)
                            })
                        }

                    })
                }

            } else {

                bcrypt.hash(password, 11, (err, hash) => {
                    if (err) {
                        return resourceError(res, 'Server Error Occurred')
                    } else {
                        const role = 'admin'
                        const newUser = userCollection.create(name, email, password = hash, role)

                        return res.status(200).json({
                            message: 'user created successfully',
                            user: JSON.stringify(newUser)
                        })
                    }

                })
            }

        } catch (error) {
            return res.status(500).json({ message: 'something went wrong', error: error })
        }
    }


    /*=====  End of Bussiness logic  ======*/




    /*=============================================
    =            Error handling            =
    =============================================*/

    // if erro call erro fun

    /*=====  End of Error handling  ======*/




    /*=============================================
    =            response generate            =
    =============================================*/

    //res generate

    /*=====  End of response generate  ======*/



};
module.exports = registerController



