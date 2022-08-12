const fs = require('fs')
const path = require('path')
const del = require('del')
const { execSync } = require('child_process')
// Tips：less不提供批量编译能力，此处做了封装
const lessc = require('./less2css')

process.chdir(path.join(__dirname, '../'))

async function main() {
  // 1、准备打包文件夹
  await del(['package'])
  fs.mkdirSync('package')

  // 2、使用 babel 编译组件中TS的部分
  execSync(
    `npx babel "./src" --out-dir "./package/lib" --extensions ".ts,.tsx" --config-file "./devtools/build.babel.config.js" --ignore "./src/**/*.stories.tsx" `
  )
  console.log('[packaging] 1、emit ts declaration...')
  execSync(`npx tsc --project "./devtools/build.tsconfig.json"`)

  // 3、批量编译 less => css
  console.log('[packaging] 2、emit css...')
  lessc('./src', './package/lib')

  // 4、增加 css前缀 (TODO: 解决异步等待的问题)
  setTimeout(() => {
    console.log('[packaging] 3、emit autoprefixer...')
    execSync(`npx postcss package/**/*.css -u autoprefixer -r --no-map `)
  }, 2000)

  // 5、增加 package.json 文件
  const packageJSON = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8')
  )
  delete packageJSON.private
  delete packageJSON.scripts
  delete packageJSON.devDependencies
  console.log('packaging package.json')
  fs.writeFileSync(
    path.join(__dirname, '../package/package.json'),
    JSON.stringify(packageJSON, null, '  '),
    'utf8'
  )
  console.log('[packaging] 4、done: ' + path.join(__dirname, '../package'))
}

main()
