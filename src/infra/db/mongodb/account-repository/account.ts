import { type AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { type AddAccountParams, type AddAccountResult } from '../../../../domain/usecases/add-account/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountParams): Promise<AddAccountResult> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    // TODO: fix this result
    // if (result.insertedId !== null) {
    //   return {
    //     id: result.insertedId.toString(),
    //     name: accountData.name,
    //     email: accountData.email,
    //     password: accountData.password
    //   } else {

    //   }
    return result.insertedId !== null
  }
}
