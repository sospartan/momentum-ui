import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

esbuild.build({
  tsconfig: "./src/tsconfig.json",
  entryPoints: ["./src/components/table-advanced/TableAdvanced.ts"],
  bundle: true,
  logLevel: 'error',
  outdir: "dist/components",
  plugins: [sassPlugin()],
  loader: {
    ".woff2": "file",
    ".woff": "file",
    ".ttf": "file",
  },
});
