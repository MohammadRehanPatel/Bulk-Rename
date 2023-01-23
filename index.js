const fs = require('fs')
const path = require("path")

const repalceThis = "rehan"
const repalceWith = "john"
const preview = true;
const folder = __dirname

try {
    const data = fs.readdir(folder, (err, data) => {

        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let oldFile = path.join(folder, item)
            let newFile = path.join(folder + item.replaceAll(repalceThis, repalceWith))
            if (!preview) {
                fs.rename(oldFile, newFile, () => {
                    console.log("Rename Success")
                })
            } else {
                if (folder + item !== newFile) console.log(folder + item + " Will be renamed to " + newFile)
            }
        }
    })
} catch (e) {
    console.log(e)
}