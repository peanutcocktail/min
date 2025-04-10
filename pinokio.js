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
      text: "shell",
      href: "shell.js"
    }, {
      text: "config",
      href: "config.json"
    }]
  }
}
