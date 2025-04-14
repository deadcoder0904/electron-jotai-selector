import { atom } from "jotai";
import { Settings, DefaultConfig, Provider } from "../types/index";

export const settings: Settings = {
  providers: [
    {
      id: "openai",
      name: "Open AI",
      models: ["gpt-4o", "o1"],
      apiKey: "",
    },
    {
      id: "gemini",
      name: "Gemini",
      models: ["gemini-2.0-flash", "gemini-2.5-pro-preview"],
      apiKey: "",
    },
  ],
  default: {
    provider: "openai",
    model: "gpt-4",
  },
};

export const providersAtom = atom<Provider[]>(settings.providers);
export const defaultConfigAtom = atom<DefaultConfig>(settings.default);
