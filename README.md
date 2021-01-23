# working with data and API

** Tasks **
1. initialize the project as a git repo
2. fetch data locally and log it in the console
	1. create a .gitignore file
	2. initialize a package.json file
	3. install webpack, wepack-cli@3.3.11 and webpack-dev-server to allow fetching data from an http server
	4. set scripts in the package.json
		``` bash
				build: webpack ,
				dev: webpack-dev-server
	5. move index.js to src folder
	6. change the src script in index.html to ./dist/main.js for build and to main.js for dev
	7. use the fetch API with the then catch syntax first and with async await after that
3. fetch data from a externally api (reqres.in API)
4. create a utils file with a getList function to test the bundle file
5. change the default configuration of webpack
6. allow bundle to bundle css or scss files
7. manage cache busting with the html webpack plugin and the \[hash\] notation
8. configure webpack for production and for development with npm_lifecycle_event