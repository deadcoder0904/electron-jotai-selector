import { Conf } from 'electron-conf/main'
import type { ProvidersState, SelectionState } from '../types/index'
import { defaultProviders, defaultSelection } from '../shared/defaults'

export const conf = new Conf<{
	providers: ProvidersState
	selection: SelectionState
}>({
	defaults: {
		providers: defaultProviders,
		selection: defaultSelection,
	},
})
