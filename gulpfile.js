var gulp = require('gulp');
var webpackStream = require('webpack-stream');

var config = {
  // タスク（処理）を実行するファイル
  src: {
    js: './src/js/app.js'
  },
  // 出力先のパス
  dest: {
    js: './public/js/'
  }
};

// webpackでビルドを実行するタスク
gulp.task('webpack', function() {
  return gulp.src(config.src.js)
    .pipe(webpackStream({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest(config.dest.js));
});

// ファイル変更の監視、変更時に実行する処理を指定するタスク
gulp.task('watch', function() {
  gulp.watch(config.src.js, ['webpack']);
});