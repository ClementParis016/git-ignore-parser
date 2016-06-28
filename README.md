# git-ignore-parser
> Parse raw gitignore data

This modules parses a raw gitignore content, as specified in the [official Git documentation](https://git-scm.com/docs/gitignore#_pattern_format), and returns an array of ignored paths that Git will look against.

## Installation
```
npm install git-ignore-parser
```

## Usage
Given this `.gitignore` file:
```.gitignore
# Logs
logs/
*.log
npm-debug.log*

# Dependency directories
/node_modules/
jspm_packages
```

It would return the following:
```js
const fs = require('fs');

fs.readFile('.gitignore', 'utf-8', (error, ignoredPaths) {
  if (!error) {
    console.log(ignoredPaths);
      // >> ['logs', '*.log', 'npm-debug.log*', 'node_modules', 'jspm_packages']
  }
});
```

## Parsing rules
The parser will apply the following rules, as specified in the [official Git documentation](https://git-scm.com/docs/gitignore#_pattern_format):

- Empty lines are ignored
- Lines starting with a `#` are treated as comments and are ignored
- Trailing spaces are ignored
- Trailing slashes are ignored
- Duplicates are ignored
- Globs and negative patterns are treated as is

## License
[The MIT License](https://opensource.org/licenses/MIT) © [Clément Paris](http://www.clementparis.fr)
