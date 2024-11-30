import * as SQLite from 'expo-sqlite';

export async function init() {
  try {
    // Open the database asynchronously
    const db = await SQLite.openDatabaseAsync('places.db');

    // Enable write-ahead logging for better performance
    await db.execAsync(`PRAGMA journal_mode = WAL;`);

    // Create the `places` table if it doesn't already exist
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL, 
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
      );
    `);

    console.log('Database initialized successfully.');
  } catch (error) {
    console.error('Error initializing the database:', error);
    throw error;
  }
}
