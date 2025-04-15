/// <reference types="vite/client" />

import type { Api } from '../../shared/api'

export {};

declare global {
  interface Window {
    api: Api;
  }
}
