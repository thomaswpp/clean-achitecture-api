import { UserData } from '../register-user-on-mailing-list/user-data'

export interface UserRepository {
  add(user: UserData): Promise<void>
  findUserByEmail(email: string): Promise<UserData>
  findAllUser(): Promise<UserData[]>
  exists(user: UserData): Promise<boolean>
}