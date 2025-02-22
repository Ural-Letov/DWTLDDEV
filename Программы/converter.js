const fs = require('fs');
const folder = "C:\\Users\\ruletka\\Documents\\Paradox Interactive\\Hearts of Iron IV\\mod\\altras_republics_wars\\history\\states";

fs.readdir(folder, (err, files) => {
    files.forEach(item => {
        id = Number(item.split('-')[0]);

        if (id > 133) {
            fs.writeFileSync(`${folder}\\${item}`, `state = {\n\tid = ${id}\n\tname = "STATE_${id}"\n\tprovinces = {\n\t\t${id}\n\t}\n\tmanpower = 1000\n\tbuildings_max_level_factor = 1\n}\n`);
        }
    })
});