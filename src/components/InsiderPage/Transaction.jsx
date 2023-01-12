export function Transaction(props) {
    const {transactions} = props

    return (
        <div>
            {transactions.symbol}
            <div>{transactions.map(transaction => transaction.id)}</div>
        </div>
    )
}