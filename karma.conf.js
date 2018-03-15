const karmaConfig = function (conf) {
  conf.set({
    colors: true,
    logLevel: conf.LOG_ERROR,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    files: [
      'spec/**/*.html',
      'src/*.js',
      'spec/*.spec.js',
    ],
    frameworks: ['jasmine', 'browserify', 'fixture'],
    preprocessors: {
      'spec/**/*.html': ['html2js'],
      'src/*.js': ['babel', 'browserify'],
      'spec/*.spec.js': ['babel', 'browserify'],
    },
    browserify: {
      transform: [
        [
          'babelify',
          {
            presets: ['env'],
            plugins: [
              [
                'istanbul',
                {
                  exclude: [
                    '**/*.spec.js',
                  ],
                },
              ],
            ],
          },
        ],
      ],
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [{
        type: 'lcov',
        subdir: '/',
      },
      ],
    },
    plugins: [
      'karma-fixture',
      'karma-html2js-preprocessor',
      'karma-babel-preprocessor',
      'karma-chrome-launcher',
      'karma-browserify',
      'istanbul-instrumenter-loader',
      'karma-jasmine',
      'karma-coverage',
      'karma-spec-reporter',
    ],
    browsers: ['ChromeHeadless'],
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222',
        ],
      },
    },
  });
};

module.exports = karmaConfig;
