import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS users    (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT
    )
    `);

const createUserRepository = (newUser) => {
  return new Promise((res, rej) => {
    const { username, email, password, avatar } = newUser;
    db.run(
      `
            INSERT INTO users (username, email, password, avatar) 
            VALUES (?, ?, ?, ?)
            `,
      [username, email, password, avatar],
      (err) => {
        if (err) {
          rej(err);
        } else {
          res({ id: this.lastID, ...newUser });
        }
      }
    );
  });
};
export default { createUserRepository };
