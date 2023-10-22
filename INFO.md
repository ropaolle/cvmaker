# Info

## Links

- [Vite](https://vitejs.dev/)
- [Typography](https://tailwindcss.com/docs/typography-plugin)
- [Typography default styles](https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js)
- [Iconify](https://icon-sets.iconify.design/)
- [SVG patterns](https://heropatterns.com/)
- [Planetscale](https://planetscale.com/docs/tutorials/planetscale-quick-start-guide)
  - [MySQL](https://planetscale.com/learn/courses/mysql-for-developers/introduction/course-introduction)
  - [Drizzle](https://orm.drizzle.team/docs/quick-mysql/planetscale)

## Setup

```sh
pnpm create vite cvmaker --template react-ts
# Add Tailwind
pnpm install -D tailwindcss postcss autoprefixer  @tailwindcss/typography
pnpm dlx tailwindcss init -p
```

## tailwind.config.js

```js
/* eslint-env node */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
```

## .vscode/settings.json

```json
{
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```
