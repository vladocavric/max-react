import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    quotes: [],
    highlightedQuote: null,
    sortQuotes: []
}

const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        addQuote(state, action) {         
            state.quotes.push({...action.payload, id: uuidv4(), comments: []})
        },
        getQuote(state, action) {
            state.highlightedQuote = state.quotes.find(quote => quote.id === action.payload)
        },
        sortQuotes(state, action) {
            if(state.quotes.length === 0) {
                state.sortQuotes = []
            }
            if(action.payload === 'asc') {
                state.sortQuotes =  state.quotes.sort((a,b) => (a.text > b.text) ? 1 : ((b.text > a.text) ? -1 : 0))
            }
            if(action.payload === 'dsc') {
                state.sortQuotes =  state.quotes.sort((a,b) => (a.text < b.text) ? 1 : ((b.text < a.text) ? -1 : 0))
            }
            state.sortQuotes = state.quotes
        },
        addComment(state, action) {
            const quote = state.quotes.find(quote => quote.id === action.payload.id)
            quote.comments.push(action.payload.comment)
            state.highlightedQuote = quote
        }
    }
})

export const quoteActions = quoteSlice.actions

export default quoteSlice.reducer