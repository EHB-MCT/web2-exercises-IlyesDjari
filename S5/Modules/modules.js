import * as fs from 'fs/promises';

let read = await fs.readFile('boardgames.json');
let data = JSON.parse(read);

for (const i in data) {
    let filename = `${i}.json`
    let content = JSON.stringify(data[i]);
    await fs.writeFile(filename, content);
}