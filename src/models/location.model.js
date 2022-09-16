const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const {z} = require('zod')

module.exports = {
    upload: async data => await prisma.location.create({data}),

    get: async where => await prisma.location.findUnique({where}),
    getManyByName: async name => await prisma.location.findMany({where: {name: {contains: name}}}),
    getAll: async () => await prisma.location.findMany(),
    getByName: async name => await prisma.location.findUnique({where: {name}}),
    getById: async id => await prisma.location.findUnique({where: {id}}),

    delet: async where => await prisma.location.delete({where}),
    deletByName: async name => await prisma.location.delete({where: {name}}),
    deletById: async id => await prisma.location.delete({where: {id}}),

    update: async (where, data) => await prisma.location.update({where, data}),
    updateByName: async (name, data) => {
        return await prisma.location.update({where: {name}, data})
    },
    updateById: async (id, data) => await prisma.location.update({where: {id}, data}),

    UploadSchema: z.object({
        name: z.string().min(1).max(255),
        desc: z.string().min(1).max(255).optional(),
        ubication: z.string().min(1).max(255).optional(),
        schedules: z.string().min(1).max(255).optional(),
        valoration: z.string().min(1).max(255).optional(),
        web: z.string().min(1).max(255).optional(),
    }),
    UpdateSchema: z.object({
        username: z.string().min(1).max(255).optional(),
        email: z.string().email().optional(),
        password: z.string().min(1).max(255).optional()
    }),
}