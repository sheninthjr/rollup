# Bundling React Component into NPM Package using Rollup

## Steps

### 1.Create a fresh react application using vite.

```bash
npm create vite@latest
```

### 2.Navigate into the folder and install the dependencies.

```bash
npm install
```

### 3.Next step is to install all the dependencies required for bundling in rollup.

```bash
npm install rollup-plugin-babel rollup-plugin-commonjs rollup-plugin-copy rollup-plugin-node-resolve rollup-plugin-peer-deps-external rollup-plugin-terser rollup-plugin-postcss @rollup/plugin-typescript rollup-plugin-typescript
```

### 4.Create a folder inside src and name it as components and inside the components folder create a Card.tsx and Card.css file.

//Card.tsx

```tsx
import React from "react";
import "./Card.css";

interface Card {
  title: string;
  description: string;
  tags: string[];
}
export function Card({ title, description, tags }: Card) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <div className="tags tag-gap">
            {tags.map((tag, index) => (
              <div key={index}>#{tag}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
```

//Card.css

```css
.card {
  width: 500px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: whitesmoke;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 20px;
}

.title {
  display: flex;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: larger;
  font-style: italic;
}

.description {
  display: flex;
  margin-bottom: 10px;
  flex-wrap: wrap;
  text-align: justify;
}

.tags {
  display: flex;
  color: rgb(74, 72, 72);
}

.tag-gap {
  display: flex;
  gap: 10px;
}
```

### 5.Create a file inside the react project and name it as rollup.config.js.

```js
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";

const config = {
  input: "src/components/Card.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/index.d.ts",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss({
      extract: "index.css",
      modules: false,
      minimize: true,
    }),
    terser(),
  ],
  external: ["react", "react-dom"],
};

export default config;
```

### 6.Modify the package.json file.

```json
"private":"0.1.0",
"main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
  ],
  "scripts": {
    "dev": "vite",
    "publish:npm": "npm publish",
    "build": "rollup -c"
  },
```

### 7.Build the component by using the command.

```bash
npm run build
```

### 8.Publish the package to npm registry.

```bash
npm publish --access=public
```
