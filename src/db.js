import fs from 'node:fs/promises'; // Import the promises version of the fs module

const DB_PATH = new URL('../db.json', import.meta.url).pathname; // Get the path to the db.json file
// const DB_PATH = path.join("..", "db.json");

export const getDB = async () => {
    const db = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(db);
};

export const saveDB = async db => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
    return db;
};

export const insert = async data => {
    const db = await getDB();
    db.notes.push(data);
    await saveDB(db);
    return data;
};
