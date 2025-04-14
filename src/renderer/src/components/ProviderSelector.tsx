import React from 'react'
import { useAtom } from 'jotai'
import { defaultConfigAtom, providersAtom } from '../store/index'

export const ProviderSelector = (): React.JSX.Element => {
	const [providers] = useAtom(providersAtom)
	const [defaultConfig, updateDefaultConfig] = useAtom(defaultConfigAtom)

	const handleProviderChange = (
		e: React.ChangeEvent<HTMLSelectElement>,
	): void => {
		const newProviderId = e.target.value
		const provider = providers.find((p) => p.id === newProviderId)
		if (!provider) return
		const firstModel = provider.models[0] || ''
		const newDefaultProvider = {
			provider: newProviderId,
			model: firstModel,
		}

		updateDefaultConfig(newDefaultProvider)

		window.api.changeDefaultProvider(newDefaultProvider).then((results) => {
			console.log('Default Provider changed:')
			console.log(results)
		})
	}

	return (
		<>
			<span>Select Provider:</span>
			<select
				value={defaultConfig.provider}
				onChange={handleProviderChange}
				tabIndex={0}
				aria-label='Select AI Provider'
				style={{ marginTop: 5 }}
			>
				{providers.map((option) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</select>
		</>
	)
}

ProviderSelector.displayName = 'ProviderSelector'
