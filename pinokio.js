const config = require('./config.json')
module.exports = {
  version: "3.7",
  title: config.title,
  description: config.description,
  icon: config.icon,
  menu: async (kernel, info) => {
    let shell_running = info.running("shell.js")
    return [{
      default: true,
      icon: "fa-regular fa-keyboard",
      text: "shell",
      href: "shell.js"
    }, {
      text: "config",
      icon: "fa-regular fa-pen-to-square",
      href: "config.json",
      fs: true
    }]
  }
}
