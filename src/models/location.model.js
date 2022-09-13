const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = class Datapack{

    constructor(params){
        this.name = params.name
        this.desc = params.desc
        this.ubication = params.desc
    }

    async save(){
        return await prisma.datapack.create({
            data: {
                name: this.name,
                desc: this.desc,
                ubication: this.ubication,
            }
        })
    }

    async find(){
        return await prisma.datapack.findUnique({
            where: {name: this.name}
        })
    }

    async delete(){
        return await prisma.datapack.delete({
            where: {name: this.name}
        })
    }

    async update(data){
        return await prisma.datapack.update({
            where: {name: this.name},
            data
        })
    }

    async getMany(){
        return await prisma.datapack.findMany({
            where: {name: {contains: this.name}}
        })
    }
}