import React from 'react'
import { useAtom } from 'jotai'
import { settingsAtom } from '../../../store/index'

export const ProviderSelector = (): React.JSX.Element => {
	const [settings, updateSettings] = useAtom(settingsAtom)

	const handleProviderChange = (
		e: React.ChangeEvent<HTMLSelectElement>,
	): void => {
		const newProviderId = e.target.value
		const provider = settings.providers.find((p) => p.id === newProviderId)
		if (!provider) return
		const firstModel = provider.models[0] || ''
		const newSettings = {
			...settings,
			default: { provider: newProviderId, model: firstModel },
		}
		updateSettings(newSettings)

		// window.electron.ipcRenderer
		// 	.invoke('save-settings', newSettings)
		// 	.then((results) => {
		// 		console.log({ results })
		// 	})
	}

	return (
		<>
			<span>Select Provider:</span>
			<select
				value={settings.default.provider}
				onChange={handleProviderChange}
				tabIndex={0}
				aria-label='Select AI Provider'
				disabled={settings.providers.length === 0}
				style={{ marginTop: 5 }}
			>
				{settings.providers.map((option) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
				{settings.providers.length === 0 && (
					<option value='' disabled>
						No providers available
					</option>
				)}
			</select>
		</>
	)
}

ProviderSelector.displayName = 'ProviderSelector'
