import { type AddAccountParams, type AddAccountResult } from '../../domain/usecases/add-account/add-account'

export interface AddAccountRepository {
  add: (accountData: AddAccountParams) => Promise<AddAccountResult>
}

export type AddAccountRepositoryParams = AddAccountParams
export type AddAccountRepositoryResult = boolean
