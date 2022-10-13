import QuoteList from '../components/quotes/QuoteList'

const DUMMY_DATA = [
    { id: 'q1', author: 'Max', text: 'Learning React is FUN!' },
    { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
]

const AllQuotes = () => {
    return(<QuoteList quotes={DUMMY_DATA}/>)
}

export default AllQuotes