Package.describe({
  summary: "d3.chart repackaged for Meteor"
});

Package.on_use(function (api) {
	api.use('d3', 'client');
  api.add_files('lib/d3.chart/d3.chart.js','client');
});
