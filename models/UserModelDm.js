let dbUser = [
  {
    id: 1,
    email: "satu1@gmail.com",
    password: "12345678",
    aktif: true
  },
  {
    id: 1,
    email: "dua2@gmail.com",
    password: "abcdefg",
    aktif: false
  },
  {
    id: 1,
    email: "tiga3@gmail.com",
    password: "qwerty",
    aktif: true
  },
]

// 1. Find all Data User
export const getdbUserAll = () => {
  return dbUser
}
