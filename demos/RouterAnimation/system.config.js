(function( global ) {

	// Alias the path to the common rc3 vendor scripts.
	var paths = {
		"rc3/*": "../../vendor/angularjs-2-beta/rc3/*"
	};

	// Tell Angular how normalize path and package aliases.
	var  map = {
		"@angular": "rc3/node_modules/@angular",
		"@ngrx/router": "rc3/node_modules/@ngrx/router",
		"@ngrx/core": "rc3/node_modules/@ngrx/core",
		"plugin-typescript": "rc3/node_modules/plugin-typescript/lib/plugin.js",
		"rxjs": "rc3/node_modules/rxjs",
		"tsconfig.json": "rc3/tsconfig.json",
		"typescript": "rc3/node_modules/typescript",
		"path-to-regexp": "rc3/node_modules/path-to-regexp/index.js",
		"query-string": "rc3/node_modules/query-string/index.js",
    	"strict-uri-encode": "rc3/node_modules/strict-uri-encode/index.js",   
    	"object-assign": "rc3/node_modules/object-assign/index.js",    
    	"isarray": "rc3/node_modules/isarray/index.js",    
	};

	// Setup meta data for individual areas of the application.
	var packages = {
		"app": { 
			main: "main.ts",
			defaultExtension: "ts",
			meta: {
				"*.ts": {
					loader: "plugin-typescript"
				}
			}
		},
		"rc3/node_modules": {
			defaultExtension: "js"
		},
		'@ngrx/router': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		"rxjs": {
			meta: {
				"*.js": {
					typings: true
				}
			}
		},
		"typescript": { 
			main: "lib/typescript.js",
			meta: {
				"lib/typescript.js": {
					exports: "ts"
				}
			}
		}
	};

	var ngPackageNames = [
		"common",
		"compiler",
		"core",
		"http",
		"platform-browser",
		"platform-browser-dynamic",
		"router",
		"router-deprecated",
		"upgrade",
	];

	ngPackageNames.forEach(
		function iterator( packageName ) {

			var filename = ( "bundles/" + packageName  + ".umd.js" );
			
			var ngPackage = packages[ "@angular/" + packageName ] = {
				main: filename,
				meta: {}
			};

			ngPackage.meta[ filename ] = {
				typings: ( packageName + "/index.d.ts" )
			};

		}
	);

	System.config({
		paths: paths,
		map: map,
		packages: packages,
		transpiler: "plugin-typescript",
		typescriptOptions: {
			tsconfig: true
		},
		meta: {
			typescript: {
				exports: "ts"
			}
		}
	});

	// Load "./app/main.ts" (gets full path from package configuration above).
	global.bootstrapping = System
		.import( "app" )
		.then(
			function handleResolve() {

				console.info( "System.js successfully bootstrapped app." );

			},
			function handleReject( error ) {

				console.warn( "System.js could not bootstrap the app." );
				console.error( error );

				return( Promise.reject( error ) );

			}
		)
	;

})( window );