const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = class Location{

    constructor(params){
        this.data = params
    }

    async save(){
        return await prisma.location.create({
            data: this.data
        })
    }

    async find(){
        return await prisma.location.findUnique({
            where: {name: this.data.name}
        })
    }

    async delete(){
        return await prisma.location.delete({
            where: {name: this.data.name}
        })
    }

    async update(data){
        return await prisma.location.update({
            where: {name: this.data.name},
            data
        })
    }

    async getMany(){
        return await prisma.location.findMany({
            where: {name: {contains: this.data.name}}
        })
    }
}