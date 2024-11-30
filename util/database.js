import * as SQLite from 'expo-sqlite';

export async function init() {
  try {
    const db = await SQLite.openDatabaseAsync('places.db');

    await db.execAsync(`PRAGMA journal_mode = WAL;`);

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

export async function insertPlace(place) {
  try {
    const db = await SQLite.openDatabaseAsync('places.db');

    const { title, imageUri, address, location } = place;
    const { lat, lng } = location;

    const result = await db.runAsync(
      `
      INSERT INTO places (title, imageUri, address, lat, lng)
      VALUES (?, ?, ?, ?, ?);
      `,
      [title, imageUri, address, lat, lng]
    );

    return result.lastInsertRowId;
  } catch (error) {
    console.error('Error inserting place:', error);
    throw error;
  }
}

export async function fetchPlaces() {
  try {
    const db = await SQLite.openDatabaseAsync('places.db');

    const result = await db.getAllAsync('SELECT * FROM places');

    const places = result.map((row) => ({
      id: row.id,
      title: row.title,
      imageUri: row.imageUri,
      address: row.address,
      location: {
        lat: row.lat,
        lng: row.lng,
      },
    }));

    return places;
  } catch (error) {
    console.error('Error fetching places:', error);
    throw error;
  }
}
