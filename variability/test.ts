// BEGIN
type Transaction = {
  apply: (amount: number) => number
}

type Wallet = {
  transactions: Transaction[]
  balance: number
}

const applyTransactions = (wallet: Wallet) => {
  const { transactions, balance } = wallet
  try {
    return transactions.reduce((acc, value) => value.apply(acc), balance)
  }
  catch (_e) {
    return wallet.balance
  }
}
// END

const wallet: Wallet = {
  transactions: [
    {
      apply: (amount) => amount + 1,
    },
  ],
  balance: 0
}

console.log(applyTransactions(wallet)) // 1