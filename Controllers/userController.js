const jwt = require('jsonwebtoken')
const users = require('../Models/userSchema')

//  register

exports.register = async (req, res) => {
    console.log("Inside register controller function");
    const { username, email, password } = req.body
    // console.log(`${username}, ${email}, ${password}`);

    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("Account already exist!!!")
        } else {
            const newUser = new users({
                username, email, password,
                github: "",
                linkedin: "",
                profile: ""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(`Register API Failed, Error: ${err}`)
    }
}


// login

exports.login = async(req,res) => {
    console.log("Inside login controller function");
    const {email, password} = req.body
    try{
        const existingUser = await users.findOne({ email,password })
        if(existingUser){
            const token = jwt.sign({userId : existingUser._id},"politoughkey321")
            res.status(200).json({
                existingUser, token
            }) 
        }
        else{
            res.status(406).json("Incorrect email or password") 
        }
    }
    catch(err) {
        res.status(401).json(`Register API Failed, Error: ${err}`)
    }
}

// editUser

exports.editUser = async (req,res) => {
   const userId = req.payload
   const {username,email,password,github,linkedin,profile} = req.body
   const uploadImage = req.file?req.file.filename:profile

   try{
    const updatedUser = await users.findByIdAndUpdate({_id:userId},{
        username,email,password,github,linkedin,profile:uploadImage
    },{new:true})
    await updatedUser.save()
    res.status(200).json(updatedUser)
   }catch(err){
    res.status(401).json(err)
   }
}