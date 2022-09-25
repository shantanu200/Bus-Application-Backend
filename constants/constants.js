import dotenv from "dotenv";
dotenv.config();


export const OTP_LENGTH = 10
export const OTP_CONFIG = {
    upperCaseAlphabets: false,
    specialChars: false
}
export const MAIL_SETTINGS = {
    service: "gmail",
    auth: {
        user: process.env.APP_EMAIL_ID,
        pass: process.env.APP_EMAIL_PASSWORD,
    }
}
export const JWT_SECRET = "thisIsASimpleTest"