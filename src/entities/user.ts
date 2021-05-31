import { UserData } from './user-data'
import { Either, left } from '../shared/either'
import { InvalidNameError } from './errors/invalid-name-error'
import { InvalidEmailError } from './errors/invalid-email-error'
import { Name } from './name'
import { Email } from './email'

export class User {
  static create (_userData: UserData): Either<InvalidNameError | InvalidEmailError, User> {
    const nameOrError = Name.create(_userData.name)
    if (nameOrError.isLeft()) {
      return left(new InvalidNameError())
    }

    const emailOrError = Email.create(_userData.email)
    if (emailOrError.isLeft()) {
      return left(new InvalidEmailError())
    }
  }
}
