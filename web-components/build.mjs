import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

esbuild.build({
  tsconfig: "./src/tsconfig.json",
  entryPoints: ["./src/index.ts"],
  bundle: true,
  logLevel: 'error',
  outdir: "dist/components",
  plugins: [sassPlugin({
    type: "lit-css"
  })],
  loader: {
    ".woff2": "file",
    ".woff": "file",
    ".ttf": "file",
  },
});
