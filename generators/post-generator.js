const inputRequired = title => {
	return title => { 
		((title.length > 2) ? true : `${title} != > 2`)
	}
}

module.exports = plop => {
	plop.setGenerator('post entry', { prompts: [
		{
			type: 'input',
			name: 'title',
			message: 'title (date auto-generated)',
			// validate: inputRequired('title')
		},
		{
			type: 'input',
			name: 'tags',
			message: 'supply comma separatd list'
		},
		{
			type: 'input',
			name: 'body',
			message: 'body text'
		},
		{
			type: 'confirm',
			name: 'draft',
			message: 'draft? (default: true)',
			default: true 
		}
	],
		actions: data => {
			data.date = new Date().toISOString().split('T')[0]

			// Parse tags as yaml array
			if (data.tags) {
				data.tags = 
					`tags:\n  - ${data.tags.split(',').join('\n  - ')}`
			}

			// Add the file
			return [{
				type: 'add',
				path: '../content/{{date}}--{{dashCase title}}.md',
				templateFile: 'templates/post-md.template'
			}
			]
		},
		// “a function that takes the answers data as a parameter and returns the actions array”.
	})
}
