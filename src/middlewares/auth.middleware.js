import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import {User} from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {     // here we don't use res so we add _
    try {
    // request have cookie access so we are going to take tokens from the cookie
    // here we also use header because on apps user send authorization key through headers
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

    if(!token){
        throw new ApiError(401, "Unauthorized request")
    }

    // in User model we sent you can see we in generateAccessToken method we sent id, username, email, ... in access token
    // we have to decode this info
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select("-password -refreshToken")

    if(!user){
        throw new ApiError(401, "Invalid Access Token")
    }

    req.user = user;
    
    next()

    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }

})





