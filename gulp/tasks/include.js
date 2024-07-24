
import fileinclude from "gulp-file-include"
import size from 'gulp-size';
import browsersync from 'browser-sync'

export function include(){
    return app.gulp.src(app.path.src.html)
        .pipe(fileinclude())
        .pipe(app.gulp.dest(app.distFolder))
        .pipe(size())
        .pipe(browsersync.stream())
}

