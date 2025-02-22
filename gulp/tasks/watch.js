//Импорт задач
import { html } from "./html.js";
import { styles } from "./styles.js";
import { scripts } from "./scripts.js";
import { img } from "./img.js";
import { include } from "./include.js";
import browsersync from "browser-sync";
import fileinclude from "gulp-file-include"

// Отслеживание изменений в файлах и запуск лайв сервера
export function watch() {
  browsersync.init({
    server: {
      baseDir: `./${app.distFolder}`,
    },
    cors: true,
    notify: false,
    ui: false,
  });
  app.gulp.watch(app.path.dist.html).on("change", browsersync.reload);
  app.gulp.watch(app.path.src.html, html);
  app.gulp.watch(app.path.src.styles, styles);
  app.gulp.watch(app.path.src.scripts, scripts);
  app.gulp.watch(app.path.src.images, img);
  app.gulp.watch(app.path.src.html, include);
  app.gulp.watch(app.path.src.components, include);
}
