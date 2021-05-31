import { UserData } from './user-data'
import { Either, left } from '../shared/either'
import { InvalidEmailError } from './errors/invalid-email-error'
import { Email } from './email'

export class User {
  static create (_userData: UserData): Either<InvalidEmailError, User> {
    const emailOrError = Email.create(_userData.email)

    if (emailOrError.isLeft()) {
      return left(new InvalidEmailError())
    }
  }
}
