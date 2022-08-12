/**
 * 批量编译 less => css
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
// const getLesscOptions = require('./getLesscOptions').getExecOptions

const lessc = function (rootPath, targetPath) {
  //取得当前绝对路径
  rootPath = path.resolve(rootPath)
  //目标路径绝对路径
  targetPath = path.resolve(targetPath)
  //判断目录是否存在

  fs.access(rootPath, function (err) {
    //路径存在
    if (!err) {
      //获取当前路径下的全部文件和路径名
      var childArray = fs.readdirSync(rootPath)

      if (childArray.length) {
        for (var i = 0; i < childArray.length; i++) {
          var currentFilePath = path.resolve(rootPath, childArray[i])
          var currentTargetPath = path.resolve(targetPath, childArray[i])
          //读取文件信息
          var stats = fs.statSync(currentFilePath)
          //如果目录则递归调用
          if (stats.isDirectory()) {
            lessc(currentFilePath, currentTargetPath)
          } else {
            //判断文件是否为less文件
            if (path.extname(currentFilePath) === '.less') {
              var newFilePath = path.resolve(
                targetPath,
                path.basename(currentFilePath, '.less') + '.css'
              )
              if (!fs.existsSync(targetPath)) {
                fs.mkdirSync(targetPath)
              }
              console.log(newFilePath)
              execSync(`npx lessc --js ${currentFilePath} ${newFilePath}`)
              // execSync(
              //   `npx lessc --js ${getLesscOptions} ${currentFilePath} ${newFilePath}`
              // )
            }
          }
        }
      }
    } else {
      console.log('directory is not exists!')
    }
  })
}

module.exports = lessc
