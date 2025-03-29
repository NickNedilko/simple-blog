import { z } from "zod";


const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordSchema = z.string().min(6, { message: 'Пароль должен содержать минимум 6 символов' });

export const loginSchema = z.object({
    email: z.string().regex(emailRegex, 'Неверный формат email').min(1, 'Email обязателен'),
    password: passwordSchema
});


export const registerSchema = loginSchema.merge(z.object({
    fullName: z.string().min(2, { message: 'Полное имя должно содержать минимум 2 символа' }),
    password: passwordSchema,
    email: z.string().regex(emailRegex, 'Неверный формат email').min(1, 'Email обязателен'),
    
}));

export type LoginUser = z.infer<typeof loginSchema>;
export type RegisterUser = z.infer<typeof registerSchema>;
