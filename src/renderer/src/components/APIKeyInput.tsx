import React from "react";
import { useAtom } from "jotai";
import { providersAtom, defaultConfigAtom } from "../../../store/index";

export const APIKeyInput = () => {
  const [providers, updateProviders] = useAtom(providersAtom);
  const [defaultConfig, _] = useAtom(defaultConfigAtom);
  // Get the currently selected provider
  const selectedProvider = providers.find(
    (p) => p.id === defaultConfig.provider,
  );

  const placeholder =
    defaultConfig.provider === "openai"
      ? "Enter OpenAI API key"
      : "Enter Gemini API key";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!selectedProvider) return;

    const newProviders = providers.map((provider) => {
      if (provider.id === selectedProvider.id) {
        return { ...provider, apiKey: e.target.value };
      }
      return provider;
    });
    updateProviders(newProviders);

    window.api.changeProviders(newProviders).then((results) => {
      console.log("New Providers:");
      console.log(results);
    });
  };

  if (!selectedProvider) return null;

  return (
    <div style={{ marginTop: 5 }}>
      <label htmlFor={`apiKey-${selectedProvider.id}`}>API Key:</label>
      <input
        id={`apiKey-${selectedProvider.id}`}
        type="text"
        value={selectedProvider.apiKey}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
};
