# nlookup-jquery
Nice lookup plugin for jQuery
This plugin will help you to created quickly lookup box for you application.
This use DataTable to show a nice responsive table (with alot of features like search, pagination, etc) and with magnificPopup to show in a modal form.
Also are included bootstrap css for a nice styling :)

## Requeriments
To use nLookup-jquery you will need:
 - jQuery 1.x
 - dataTables plugin
 - magnificPopup plugin
 All plugins are in "dist" folder

## How to use
You can lookup a record using the following code:
	$.fn.nLookup({
		columns: [
			{'label': 'Name', 'field': 'name'},
			{'label': 'Code', 'field': 'code'},
		],
		url: 'countries.json',
		onSelect: function (data) {
			// Will show mesage box with country name
			alert(data.name);
		}
	});
	
At this moment, works only with JSON datasource.
Will load JSON data from "countries.json" file, and WHEN the user select a record, will return to "onSelect" callback with the selected row.
You can see this plugin working in "example" folder.

