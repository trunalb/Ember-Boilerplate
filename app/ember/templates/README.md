Your *ember* templates go here. You can build them into your server template by using handlebars:

`{{ember_template [file-name]}}`

For example, `{{ember_template todo-list}}` would include `todo-list.handlebars`.

This creates anonymous templates. If you'd like your template to be named, use `{{ember_named_template}}`. `data-template-name` will be assigned to the file name.
