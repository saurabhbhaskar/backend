import { asyncHandler } from "../utils/asyncHandler.js";   // here it is important to write .js


const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "saurabh here"
    })
})


export {registerUser}
