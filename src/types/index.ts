export interface Provider {
	id: string
	name: string
	models: string[]
	apiKey: string
}

export interface DefaultConfig {
	provider: string
	model: string
}

export interface Settings {
	providers: Provider[]
	default: DefaultConfig
}
