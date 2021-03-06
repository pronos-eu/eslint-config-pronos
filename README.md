# eslint-config-pronos

This repository contains common configuration for ESLint used in Pronos.

## Exported configs

### `pronos`

Default config, contains rules enforcing basic styleguide and best practices.

### `pronos/react`

Config extension containing rules related to usage of React framework and JSX.

### `pronos/typescript`

Config extension containing rules and overrides related to usage of TypeScript.

---
**NOTE**

If you want to properly apply linter to TypeScript files, you need to use `--ext .js,.ts` option (add `.jsx` and `.tsx` where applicable).
---

## Usage

- Add package to list of devDependencies in `package.json`.
- In the `.eslintrc` file in the project add desired configs in the `extends` section, for example:

```
...
"extends": [
    "pronos",
    "pronos/typescript"
],
...
```

Make sure that the base config is the first one included, as the other configs may override the rules, and rely on plugins imported in the base config.

- If needed, you can apply local overrides in the `rules` section in project's `.eslintrc`. That being said, please be very cautious about introducing local overrrides, as it may cause major differences across all of the components. Each of local rules should be annotated with a `// TODO:` comment describing what is the expected behaviour of the rule, possibly best to add a task, which further describes what needs to be done.

## Debugging and profiling

To show timers per file use:
```
Powershell:
$env:DEBUG="eslint:cli-engine"

Bash:
DEBUG="eslint:cli-engine"
```

To show a table of time spent per rule use:
```
Powershell:
$env:TIMING="all"
or
$env:TIMING=<number>

Bash:
TIMING=all
or
TIMING=<number>
```
where `<number>` is number of top results you wish to see

## Contributions

When introducing changes please remember to describe changes to `CHANGELOG.md` and tag new version.
