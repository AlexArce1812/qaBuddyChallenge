import dotenv from 'dotenv'
dotenv.config()

export const EMAIL = process.env.EMAIL
export const PASSWORD = process.env.PASSWORD
export const WRONGEMAIL = process.env.WRONG_USER_EMAIL
export const WRONGPASSWORD = process.env.WRONG_PASSWORD
export const EMPTY=""
export const TASKNAME=process.env.TASK_NAME
export const WEBHOOK = process.env.WEBHOOK