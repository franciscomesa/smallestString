# Smallest String kata
Find the smallest substring of the first input field that includes all characters provided in the second field  (no duplicated characters allowed in the second field).

*Example:*
- Input string: "TDD development rocks"
- Characters to match: "eo"
- Output of function: "elo"



## 🧑‍🔬 Basic tools included
- [Typescript 4](https://www.typescriptlang.org/)
- [Jest 29](https://jestjs.io/docs/getting-started) testing
- Type definitions for Node.js and Jest
- Preconfigured [scripts](#scripts-configured) for common operations
- Documentation generator [Typedoc](http://typedoc.org/)
- Linting with [ESLint 7](https://eslint.org/)
- [.editorconfig](https://editorconfig.org/) settings for consistent file format
- CHANGELOG generator [auto-changelog](https://github.com/cookpete/auto-changelog)
- 🔖 Available under the MIT license.


## Fast start
This project is designed to be used with the latest LTS version of Node.js.

Clone the repository:
```bash
git clone https://github.com/franciscomesa/smallestString.git your_local_project_name

cd your_local_project_name
```

After clone, just install project dependencies with `npm i` command.

Test your installation with preconfigured test and script

`npm start`

💪 Ready for code!


## Scripts configured
- `start`: run de default script
- `build`: transpile TypeScript to es2020
- `test`: run tests
- `test:coverage`: run and show test coverage
- `test:watch`: interactive watch mode to automatically re-run tests
- `lint`: lint source files and tests
- `lint:fix`: automatically fix source files and test with linter
- `dependencies:purge`: remove installed packages and install all of them again
- `docs:generate`: generate CHANGELOG and documentation in Markdown format
- `docs:update`: generate CHANGELOG and documentation in Markdown format and commit changelog
- `docs:generate:html`: generate CHANGELOG and documentation in HTML format

## Next steps
- Remove unused settings in config files.
- Include GitHub Actions / GitLab CI

