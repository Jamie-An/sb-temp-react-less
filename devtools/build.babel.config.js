module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      // 打包时替换 .less => css
      'transform-rename-import',
      {
        original: '^(.+?)\\.less$',
        replacement: '$1.css',
      },
    ],
  ],
}
