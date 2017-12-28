var gulp = require('gulp'); 

gulp.task('copy-index',function(){
	return gulp.src('index.html').pipe(gulp.dest('dist'));
});

//一级目录底下固定格式文件：'images/*.{png,jpg}'
//二级目录和文件：'images/*/*' 
//所有目录和文件：'images/**/*'
gulp.task('images',function(){
	return gulp.src('images/**/*').pipe(gulp.dest('dist/images'));	
});

gulp.task('data',function(){
	return gulp.src(['xml/*.xml','json/*.json','!json/secret*.json']).pipe(gulp.dest('dist/data'));
});

gulp.task('build',['copy-index','images','data'],function(){
	console.log('编译成功！');	
});

gulp.task('watch',function(){
	gulp.watch('index.html',['copy-index']);
	gulp.watch('images/**/*.{jpg,png}',['images']);
	gulp.watch(['xml/*.xml','json/*.json','!json/secret*.json'],['data']);
});

//默认任务
gulp.task('default',['copy-index']);