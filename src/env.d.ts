
interface ImportMetaEnv {
  readonly STRAPI_ENDPOINT: string;
  readonly MEDIA_ENDPOINT: string;
  // Добавьте сюда другие переменные среды, если они у вас есть.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
