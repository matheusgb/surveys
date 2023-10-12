
export interface AddAccountParams {
  name: string
  email: string
  password: string
}

export interface AddAccountResult {
  insertion: boolean
  name: string
  email: string
}

export interface AddAccount {
  add: (account: AddAccountParams) => Promise<AddAccountResult>
}
