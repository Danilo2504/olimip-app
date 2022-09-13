const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const bcrypt = require('bcryptjs')

module.exports = class User{

    constructor(params){
        this.name = params.name
        this.email = params.email
        this.password = params.password
    }

    optional(){
        if (this.name) return {name: this.name}
        else return {email: this.email}
    }

    async save(){
        return await prisma.user.create({
            data: {
                name: this.name,
                email: this.email,
                password: this.password
            }
        })
    }

    async find(){
        return await prisma.user.findUnique({
            where: this.optional()
        })
    }

    async findBy(where){
        return await prisma.user.findUnique({
            where
        })
    }

    async delete(){
        return await prisma.user.delete({
            where: this.optional()
        })
    }

    async update(data){
        return await prisma.user.update({
            where: this.optional(),
            data
        })
    }

    async login(){
        const userFind = await this.find()

        const compare = await bcrypt.compareSync(this.password, userFind.password)

        if(!compare) throw new Error('Incorrect name or password.')

        return userFind
    }
}