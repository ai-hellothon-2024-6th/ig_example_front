/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_IG_CLIENT_ID: string;
  readonly VITE_REDIRECT_URI: string;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
