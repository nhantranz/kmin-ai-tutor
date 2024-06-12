A sample Next.js project

## Project guideline
This project uses [Next.js's App Router](https://nextjs.org/docs/app) approach to organize the pages and components.
- All page routes should be placed in `src/app` ([routing docs](https://nextjs.org/docs/app/building-your-application/routing)). This should contain only minimal page structure, with **no styling** and **no logic** (these should be placed under the **src/components** directory. This separation of concern will make it much easier to work on the code)
- All components should be placed in `src/components`, which bundles the `component`, `test`, and `styles` in a single directory. Ideally, each component should be **self-contained** (e.g. it should not import a **style** from another component).
- Styling can be done using either `scss module` or `tailwind`. It's important to stick with one way of doing style, and opting out only when absolutely necessary.
- API calls:
  - Next.js 14 provides the option to fetch the data directly from the [Server Component](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating). Nevertheless, it's important to separate out the API functions to separate directory (e.g. utils/api-service) to ensure the separation of concern.
  - Alternatively, you can utilize the included `utils/api-service`, which is a wrapper around `axios` that provides additional capabilities like interceptors, easier params management and Promise mechanism.
  - Either way, you should avoid calling the APIs from the FE as much as possible to avoid having to expose the environment variables.
- Testing should be done for **ALL** components/utils that were introduced into the project.

## Getting Started
1. Install the npm packages using `npm install`
2. Start the project using `npm run dev`
3. Configure `eslint` & `stylelint` on your IDE of choice

## Included in this project
### Core libraries
- Next.js 14 (which comes with React 18 bundled)
- Typescript
- Sass
- Tailwind

### Linting
- Eslint, preconfigured with:
  - eslint-plugin-react
  - eslint-config-next
  - eslint-config-prettier
  - eslint-config-airbnb
- Stylelint, preconfigured with:
  - stylelint-config-rational-order
  - stylelint-config-sass-guidelines
  - stylelint-config-standard
  - stylelint-order
  - stylelint-prettier
- Lint-staged using `eslint` and `prettier`
- Husky's pre-commit hook

### Testing
- Vitest
- @testing-library/react

### Other utils
- [API Services](src/utils/api-service)