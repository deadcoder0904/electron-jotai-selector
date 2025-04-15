export type ProviderId = 'openai' | 'gemini'

export interface Provider {
	id: ProviderId
	name: string
	models: string[]
	apiKey: string
}

// ProvidersState as a record type
export type ProvidersState = Record<ProviderId, Provider>

export interface SelectionState {
	providerId: ProviderId
	model: string
}
