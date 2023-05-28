/**
 * Read value from local storage
 * The data must be stored in json format.
 * If error it returns null and logs a warning to the console.
 *
 * @param key  the storage key
 */
export function readValue<T>(key: string): T {
  if (typeof window === "undefined") return null as T;

  try {
    const item = window.localStorage.getItem(key);
    if (item == null) return null as T;
    return JSON.parse(item) as T;
  } catch (error) {
    console.warn(error);
  }
  return null as T;
}

/**
 * Save value to local storage
 * The data will be stored in json format.
 * If error it returns null and logs a warning to the console.
 * If the value is null, the key will be removed from local storage
 *
 * @param key   the storage key
 * @param value the value that will be saved
 */
export function saveValue<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    if (value == null) {
      window.localStorage.removeItem(key);
      return;
    }
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(error);
  }
}
