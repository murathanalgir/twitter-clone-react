import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	currentAccount: {
		id: 1,
		username: 'murathanalgir',
		fullName: 'Murathan ALGIR',
		avatar: 'https://pbs.twimg.com/profile_images/1720615915610329088/GyrwfbTJ_400x400.jpg'
	},
	accounts: [
		{
			id: 1,
			username: 'murathanalgir',
			fullName: 'Murathan ALGIR',
			avatar: 'https://pbs.twimg.com/profile_images/1720615915610329088/GyrwfbTJ_400x400.jpg'
		},
		{
			id: 2,
			username: 'megwroses',
			fullName: 'mel🌊',
			avatar: 'https://pbs.twimg.com/profile_images/1638329373550866432/3JF76zET_400x400.jpg'
		}
	]
}

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// state manipule etme metodlari
		_addAccount: (state, action) => {
			state.accounts.push(action.payload)
		},
		_removeAccount: (state, action) => {
			state.accounts = state.accounts.filter(account => account.id !== action.payload)
			if (state.currentAccount && action.payload === state.currentAccount.id) {
				this._setCurrentAccount(false)
			}
		},
		_setCurrentAccount: (state, action) => {
			state.currentAccount = action.payload
		}
	}
})

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions
export default auth.reducer