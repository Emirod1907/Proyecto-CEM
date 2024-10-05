import {z} from "zod"

export const registerSchema = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email es requerido",
    }).email({
        message: "Email no es valido",
    }),
    password: z.string({
        required_error: "password es requerido",
    }).min(6, {
        message: "Paswsord debe tener al menos 6 caracteres"
    })
})