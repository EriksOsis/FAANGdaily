export function Transaction(props) {
    const {transactions} = props

    return (
        <div>
            {transactions.data.map(transaction => <p>{transaction.name}</p>)}
        </div>
    )
}