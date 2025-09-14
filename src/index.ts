import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

async function main() {
    const result = await prisma.user.create({
        data:{
            name: "Tuku",
            email: "tuku@gmail.com"
        }
    })
    console.log(result)
}

main()