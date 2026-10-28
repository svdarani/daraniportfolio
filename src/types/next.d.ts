declare module "next/dist/lib/metadata/types/metadata-interface.js" {
  export type ResolvingMetadata = Promise<Record<string, unknown>>;
  export type ResolvingViewport = Promise<Record<string, unknown>>;
}

declare module "next/server.js" {
  export * from "next/server";
}
