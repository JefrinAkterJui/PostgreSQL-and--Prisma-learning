import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.user.create({
  //     data:{
  //         name: "Tuku",
  //         email: "tuku@gmail.com"
  //     }
  // })
  // console.log(result)

  // const getUserData = await prisma.user.findMany(
  //     {
  //         where:{
  //             id:2
  //         }
  //     }
  // )
  // console.log(getUserData)

  // const findUserById = await prisma.user.findUniqueOrThrow({
  //     where:{
  //         id:5
  //     }
  // })
  // console.log(findUserById)

  // const updateData = await prisma.user.update({
  //     where:{
  //         id: 1
  //     },
  //     data:{
  //         name:"Potas"
  //     }
  // })
  // console.log(updateData)

  // const updateProfilePhoto = await prisma.user.updateMany({
  //     where:{
  //         profilePhoto: null
  //     },
  //     data:{
  //         profilePhoto:"http://jui.com/defualt.png"
  //     }
  // })
  // console.log(updateProfilePhoto)

  // const deleteUser = await prisma.user.delete({
  //     where:{
  //         id: 1
  //     }
  // })
  // console.log(deleteUser)

//   const createManyData = await prisma.user.createMany({
//     data: [
//       { name: "User 1", email: "user1@example.com" },
//       { name: "User 2", email: "user2@example.com" },
//       { name: "User 3", email: "user3@example.com" },
//       { name: "User 4", email: "user4@example.com" },
//       { name: "User 5", email: "user5@example.com" },
//       { name: "User 6", email: "user6@example.com" },
//       { name: "User 7", email: "user7@example.com" },
//       { name: "User 8", email: "user8@example.com" },
//       { name: "User 9", email: "user9@example.com" },
//       { name: "User 10", email: "user10@example.com" },
//     ],
//   });
//   console.log(createManyData)

const findAllUser = await prisma.user.findMany({
    orderBy:{
        id:"asc"
    },
    where:{
        name:{
            contains:"u",
            mode: "insensitive"
        }
    }
})

console.log(findAllUser)









}

main();
