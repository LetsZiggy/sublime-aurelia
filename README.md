# Aurelia Syntax Highlighting and Snippets for Sublime Text

*Please note the plugin hasn't been submitted to [packagecontrol.io](https://packagecontrol.io/). Thus has to be installed manually.*

## Installation

- Install `Aurelia`
	- `Package Control: Add Repository` Method (Recommended)
		1. Open `Command Palette` (Default: `Primary + Shift + p`)
		2. `Package Control: Add Repository`
		3. `https://raw.githubusercontent.com/LetsZiggy/sublime-aurelia/main/repository-package.json`
		4. Open `Command Palette`
		5. `Package Control: Install Package`
		6. `Aurelia`
	- "Manual" Method (Requires manual update)
		1. Download this repository through `Download ZIP`
		2. Rename folder to `Aurelia`
		3. Move folder to `[SublimeText]/Packages` folder
			- To access `[SublimeText]/Packages` folder:
				1. Open/Restart `Sublime Text`
				2. Open the `Command Palette` (Default: `Primary + Shift + p`)
				3. `Preferences: Browse Packages`
		4. Restart `Sublime Text`
- Restart Sublime.

## How to use

The syntax group is listed as `Aurelia` in Sublime syntax selection list.

- v1
	- `Aurelia > Aurelia HTML v1` for `.html` files
	- `Aurelia > Aurelia JavaScript v1` for `.js` files with `@inlineView` template syntax highlighting
	- `Aurelia > Aurelia TypeScript v1` for `.ts` files with `@inlineView` template syntax highlighting

[ApplySyntax](https://github.com/facelessuser/ApplySyntax):
1. `Project: Edit Project`
2. Add `settings` below:
	- v1
		```javascript
		{
			"settings": {
				"project_syntaxes": [
					{
						"syntax": "Aurelia/aurelia-html-v1",
						"rules": [
							{ "globmatch": "**/*.html" },
						],
					},
					{
						"syntax": "Aurelia/aurelia-javascript-v1",
						"rules": [
							{ "globmatch": "**/*.js" },
						],
					},
					{
						"syntax": "Aurelia/aurelia-typescript-v1",
						"rules": [
							{ "globmatch": "**/*.ts" },
						],
					},
				],
			},
		}
		```
Manually:

1. Open `Command Palette`
2. Set syntax
	- v1
		- `.html`
			- `Set Syntax: Aurelia HTML v1`
		- `.js`
			- `Set Syntax: Aurelia JavaScript v1`
		- `.ts`
			- `Set Syntax: Aurelia TypeScript v1`

## LSP compatibility

1. Open `Command Palette`
2. `Preferences: LSP Language ID Mapping Overrides`
	```javascript
	/* language-ids.sublime-settings */
	{
		"text.html.aurelia.v1": "html",
		"source.js.aurelia.v1": "javascript",
		"source.ts.aurelia.v1": "typescript",
	}
	```
3. LSP client `selector`|`languages` option in `.sublime-settings`|`.sublime-project`
	- Sublime Text 4
		```javascript
		"selector": "... | text.html.aurelia.v1",

		/* --- --- --- --- --- */

		"selector": "... | source.js.aurelia.v1",

		/* --- --- --- --- --- */

		"selector": "... | source.ts.aurelia.v1",
		```
	- Sublime Text 3
		```javascript
		"languages": [
			{
				"languageId": "html",
				"scopes": [
					"source.html.aurelia.v1",
				],
				"syntaxes": [
					"Packages/Aurelia/aurelia-html-v1.sublime-syntax",
				],
			}
		],

		/* --- --- --- --- --- */

		"languages": [
			{
				"languageId": "javascript",
				"scopes": [
					"source.js.aurelia.v1",
				],
				"syntaxes": [
					"Packages/Aurelia/aurelia-javascript-v1.sublime-syntax",
				],
			}
		],

		/* --- --- --- --- --- */

		"languages": [
			{
				"languageId": "typescript",
				"scopes": [
					"source.ts.aurelia.v1",
				],
				"syntaxes": [
					"Packages/Aurelia/aurelia-typescript-v1.sublime-syntax",
				],
			}
		],
		```

## Limitations

- For `@inlineView` template syntax highlighting, escaped inner quotes won't work
```javascript
/* example */
// double quotes
@inlineView("<template><div class=\"\"></div></template>")
//                                ^^^^ this doesn't work

// single quotes
@inlineView('<template><div class=\'\'></div></template>')
//                                ^^^^ this doesn't work

// backtick quotes
@inlineView(`<template><div class=\`\`></div></template>`)
//                                ^^^^ this doesn't work
```

- For `@inlineView` template syntax highlighting, interpolation with backtick quotes must be escaped
```javascript
/* example */
// backtick quotes
@inlineView(`
<template>
	<div>
		\${ test }
		^^ dollar sign must be escaped
	</div>
</template>
`)
```

## Development

- [Dracula Colour Scheme](https://draculatheme.com/sublime)
- [PackageDev](https://github.com/SublimeText/PackageDev)
- [ScopeView](https://github.com/OdatNurd/ScopeView)
- [Syntax Highlighting Scopes Showroom](https://github.com/baleyko/syntax-highlighting-scopes-showroom)

---

This package is based on [aurelia/vscode-extension](https://github.com/aurelia/vscode-extension/blob/master/syntaxes/html.json).
