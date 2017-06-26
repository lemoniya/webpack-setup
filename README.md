configuring-webpack
# webpack-setup
My personal webpack setup to learn about webpack and it's various options.

## Added webpack.config.js
This is the configuration file that webpack looks for while building our project.
* import/require webpack first.
* import path module to resolve internal paths.
* create a config object to hold all the webpack configuration.


###context : (This is the base directory for resolving entry points).
    * [context documentation](https://webpack.js.org/configuration/entry-context/#context).


###entry :
    * The point or points to enter the application.
    * At this point the application starts executing.
    * If an array is passed all items will be executed.
    * A dynamically loaded module is not an entry point.
    * One entry point per HTML page.
    * **SPA**: one entry point.
    * **MPA**: multiple entry points.
    * [entry documentation](https://webpack.js.org/configuration/entry-context/#entry).


###output :
    * Instructing webpack on how and where it should output your bundles, assets and anything else you bundle or load with webpack.
    * **output.path** : The output directory as an absolute path.
      * [output.path configuration documentation](https://webpack.js.org/configuration/output/#output-path)
    * **output.filename** : This option determines the name of each output bundle. The bundle is written to the directory specified by the output.path option.
      * [output.filename configuration documentation](https://webpack.js.org/configuration/output/#output-filename)


###Using modules with webpack.
    * **rules** :
      * An array of Rules that is also used when the Rule matches.
      * **rules.test** : condition.
        * A RegExp: It's tested with the input.
          *  The Condition must match. The convention is to provide a RegExp or array of RegExps here, but it's not enforced.
      * **rules.include** : match above pattern to the files in this directory.
      * **rules.use** :  Each entry specifies a loader to be used.
        * **loader** : The name of the loader to use (string)
        * **options** : Any specific configuration options for the loader. >Read more about it specific loader documentation.
