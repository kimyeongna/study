const gulp = require('gulp');
const uglify = require('gulp-uglify');


gulp.task('hello', function(){
	return console.log('hello world!')
});


// 자바스크립트 파일을 minify
// task : gulp에서 수행하는 작업의 단위 외부(exports) 함수추가

gulp.task('uglify', function(){
	return gulp.src('src/*.js') //src 폴더 아래의 모든 js 파일을
		.pipe(uglify()) //minify 해서
		.pipe(gulp.dest('dist')); //dist 폴더에 저장
});

//gulp를 실행하면 default로 uglify task를 실행
gulp.task('default', ['uglify']);


//gulp.src
// src 하위에 모든 디렉토리의 js확장자를 가진 파일
// 'src/**/*.js'
// foo 디렉토리와 bar 디렉토리에서 js 확장자를 가진 파일
// foo/*.js, 'bar/*.js']

//gulp.dest
//gulp.dest는 해당 task의 결과물이 저장될 경로를 지정합니다.

//pipe
//pipe 는 gulp.src 대상으로 지정된 각 파일들을 stream 형태로 읽어들여서
//다음으로 거쳐야할 플러그인 등을로 연결할 때 사용하게 된다.

//watch 파일 변경 감지
gulp.task('watch', function(){
	gulp.watch('src/*.js', [uglify]);
});

//gulp 실행하면 default로 uglify task와 watch task를 실행
gulp.task('default', ['uglify', 'watch']);


/*
	gulp.task
		- gulp.task(name [, deps, fn]) gulp가 처리할 task "작업"을 정의
		- 인수 name은 string 형태로서 task의 이름을 지정 deps와 fn는 optional 인수로서 생량되어도 되는 인수.
		- deps는 task name의 배열 형태이며 이 인수가 전달 될 때 이 배열 안에 있는 task들을 먼저 실행한 다음 함수형태로 전달되는 fn을 실행
		
		ex. 
		gulp.task('hello', () => {
			console.log('hello');
		});

		gulp.task('world', ['hello'], () => {
			console.log('world');
		});

	gulp.src
	gulp.dest
	gulp.watch

*/