import React from 'react'
import { useAtom } from 'jotai'
import { providersAtom, selectionAtom } from '../store/index'
import type { ProviderId } from '../../../types/index'

export const ProviderSelector = (): React.JSX.Element => {
	const [providers] = useAtom(providersAtom)
	const [selection, setSelection] = useAtom(selectionAtom)

	const handleProviderChange = (
		e: React.ChangeEvent<HTMLSelectElement>,
	): void => {
		const newProviderId = e.target.value as ProviderId
		const provider = providers[newProviderId]
		if (!provider) return
		const firstModel = provider.models[0] || ''
		const newSelection = {
			providerId: newProviderId,
			model: firstModel,
		}
		setSelection(newSelection)
		window.api.changeDefaultProvider(newSelection).then((results: any) => {
			console.log('Default Provider changed:')
			console.log(results)
		})
	}

	return (
		<>
			<span>Select Provider:</span>
			<select
				value={selection.providerId}
				onChange={handleProviderChange}
				tabIndex={0}
				aria-label='Select AI Provider'
				style={{ marginTop: 5 }}
			>
				{Object.values(providers).map((option) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</select>
		</>
	)
}

ProviderSelector.displayName = 'ProviderSelector'
