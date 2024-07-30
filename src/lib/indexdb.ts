import { MovieDetails } from "@/components/coming-soon/details/DetailPage";
// indexedDB.ts
const DB_NAME = "CINEDB";
const STORE_NAME = "watchlist";
const RECENT_STORE_NAME = "recentlyWatched";

export const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    //this is needed to make the database if it doesn't exist
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      db.createObjectStore(STORE_NAME, { keyPath: "id" });
      db.createObjectStore(RECENT_STORE_NAME, {
        keyPath: "id",
      });
    };

    request.onsuccess = (event) => {
      resolve((event.target as IDBOpenDBRequest).result);
    };

    request.onerror = (event) => {
      reject((event.target as IDBOpenDBRequest).error);
    };
  });
};

export const getAllMovies = async (): Promise<MovieDetails[]> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

export const addMovie = async (movie: MovieDetails): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.add(movie);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

export const removeMovie = async (id: number): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(id);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

export const addRecentlyWatched = async (id: number): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(RECENT_STORE_NAME, "readwrite");
    const store = transaction.objectStore(RECENT_STORE_NAME);

    const getId = store.get(id);

    getId.onsuccess = () => {
      if (getId.result) {
        const updateId = store.put({ id });

        updateId.onsuccess = () => {
          resolve();
        };

        updateId.onerror = () => {
          reject(updateId.error);
        };
      }

      const addId = store.add({ id });

      addId.onsuccess = () => {
        resolve();
      };

      addId.onerror = () => {
        reject(addId.error);
      };
    };

    getId.onerror = () => {
      reject(getId.error);
    };
  });
};

export const getRecentlyWatched = async (): Promise<number[]> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(RECENT_STORE_NAME, "readonly");
    const store = transaction.objectStore(RECENT_STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};
