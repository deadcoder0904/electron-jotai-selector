import type { ProvidersState, SelectionState } from '../types/index'

export const defaultProviders: ProvidersState = {
	openai: {
		id: 'openai',
		name: 'Open AI',
		models: ['gpt-4o', 'o1'],
		apiKey: '',
	},
	gemini: {
		id: 'gemini',
		name: 'Gemini',
		models: ['gemini-2.0-flash', 'gemini-2.5-pro-preview'],
		apiKey: '',
	},
}

export const defaultSelection: SelectionState = {
	providerId: 'openai',
	model: 'gpt-4o',
}
