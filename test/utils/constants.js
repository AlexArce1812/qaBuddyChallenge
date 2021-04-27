import dotenv from 'dotenv'
dotenv.config()

export const EMAIL = process.env.user_email
export const PASSWORD = process.env.password_todoist
export const WRONGEMAIL = process.env.wrong_user_email
export const WRONGPASSWORD = process.env.wrong_password
export const EMPTY=""
export const TASKNAME=process.env.task_name