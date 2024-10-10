
  export interface IUser {
    _id: string
    name: string
    email: string
    phone?: string
    password: string
    role: string
    profileImg?: string
    address?: string
    needsPasswordChange: boolean
    isDeleted: boolean
    createdAt: string
    updatedAt: string
  }