import type { ProvidersState, SelectionState } from '../types/index'

export interface Api {
	changeProviders: (providers: ProvidersState) => Promise<ProvidersState>
	getConfig: () => Promise<
		{ providers: ProvidersState; selection: SelectionState }
	>
	changeDefaultProvider: (selection: SelectionState) => Promise<SelectionState>
}
