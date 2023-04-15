import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: {
    sourcemap: false,
    file: packageJson.main,
    format: "cjs",
  },
  plugins: [commonjs(), typescript()],
};
