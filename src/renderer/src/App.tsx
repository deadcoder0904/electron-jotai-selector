import React from "react";
import { useAtom } from "jotai";

import { ProviderSelector } from "./components/ProviderSelector";
import { APIKeyInput } from "./components/APIKeyInput";
import { providersAtom, defaultConfigAtom } from "../../store/index";

function App(): React.JSX.Element {
  const [, setProviders] = useAtom(providersAtom);
  const [, setDefaultConfig] = useAtom(defaultConfigAtom);

  React.useEffect(() => {
    // On first render, pull the real config from the main process
    window.api.getConfig().then((config) => {
      setProviders(config.providers);
      setDefaultConfig(config.default);
    });
  }, []);

  return (
    <div style={{}}>
      <h1>API Providers</h1>
      <ProviderSelector />
      <APIKeyInput />
    </div>
  );
}

export default App;
