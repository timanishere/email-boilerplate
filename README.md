# basic-email-dev-boilerplate
Basic email development boilerplate. Comes with browsersync, file includer and html prettify

INSTALLIATION (Important: Requires you to use command line)
In order to use this boilerplate please install Git Bash https://git-for-windows.github.io/ if you do not have command line tool


1. Install Node.js (v4.4.5 LTS) https://nodejs.org/en/
2. Run 'npm install gulp -g' in the command
3. CD into the root and run 'npm install' in the command
4. Run 'gulp' in the command


HOW TO USE
- 'images' folder will contain all your images

- 'partials' folder will contain the files of the smaller components that make up the email e.g. header, footer etc.

- 'temp-index.html' file is the file you work from development wise. Link any files from 'partials' folder to this file

- In order to include files from the 'partials' folder to 'temp-index.html' file, you will need to use this line of code '@@include('./name-of-file.html')' (See boilerplate for example)

- 'index' file is the file you use in production. Do not write or change anything here. To make any changes, work in the 'temp-index' file.

- 'package.json' file contains all the dependencies required for installation

- 'gulpfile' file contains the source code for the automated workflow


