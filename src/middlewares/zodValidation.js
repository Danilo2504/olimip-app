const {z} = require('zod')

const LoginSchema = z.object({
    namemail: z.string().min(1).max(255),
    password: z.string().min(1).max(255)
})

const RegisterSchema = z.object({
    name: z.string().min(1).max(255),
    email: z.string().email(),
    password: z.string().min(1).max(255)
})

const UpdateUserSchema = z.object({
    name: z.string().min(1).max(255).optional(),
    email: z.string().email().optional(),
    password: z.string().min(1).max(255).optional()
})

const parseSchema = (schema) => {
    return (req = request, res = response, next) => {
        const result = schema.safeParse(req.body)

        if(result.success) next()
        else res.status(500).json({
            "error": result.error
        })
    }
}

module.exports = {
    LoginSchema,
    RegisterSchema,
    UpdateUserSchema,
    parseSchema
}