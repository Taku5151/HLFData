module.exports = {
  html: {
    files: [
      {
        expand: true,
        cwd: 'app/html/',
        src: '**',
        dest: 'dist/'
      }
    ]
  },
  img: {
    files: [
      {
        expand: true,
        cwd: 'app/img',
        src: '**',
        dest: 'dist/img/'
      }
    ]
  },
  js: {
    files: [
      {
        expand: true,
        cwd: 'app/js',
        src: '**',
        dest: "dist/js/"
      }
    ]
  },
  php: {
    files: [
      {
        expand: true,
        cwd: 'app/js',
        src: '**',
        dest: 'dist/js/'
      }
    ]
  }
}
