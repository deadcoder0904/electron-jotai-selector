import { atom } from 'jotai'
import type { ProvidersState, SelectionState } from '../../../types/index'
import { defaultProviders, defaultSelection } from '../../../shared/defaults'

export const providersAtom = atom<ProvidersState>(defaultProviders)

export const selectionAtom = atom<SelectionState>(defaultSelection)

export const currentProviderAtom = atom((get) => {
	const providers = get(providersAtom)
	const selection = get(selectionAtom)
	return providers[selection.providerId]
})
