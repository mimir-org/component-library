/**
 * Function to ignore circular references
 */
export const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: string, value: object) => {
    if (key.startsWith("_")) return;
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};

/**
 * Create a unique GUID id
 */
export const createId = (): string => {
  let d = new Date().getTime();
  let d2 = (typeof performance !== "undefined" && performance.now && performance.now() * 1000) || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
};

/**
 * Create a unique GUID id
 * @param domain The domain included in id ex. example.com_xxxxx-xxxxx-xxxxx
 */
export const createDomainId = (domain: string): string => {
  const id = createId();
  if (domain == null) return id;
  return domain + "_" + id;
};

/**
 * Get domain from id
 * @param id The id formatted as example.com_xxxxx-xxxxx-xxxxx
 */
export const getDomainFromId = (id: string): string => {
  if (id == null) throw Error("Can't find a domian from null or undefined string.");

  const split = id.split("_");
  if (split.length !== 2) throw Error("Can't find a domian. An id should be like example.com_xxxxx-xxxxx-xxxxx.");

  return split[0].trim();
};

/**
 *
 * @param value The value that should replace trailing slashes
 * @returns The replaced string without trailing slashes
 */
export const removeTrailingSlashes = (value: string): string => {
  return value.replace(/\/+$/, "");
};

/**
 * Create a unique number id based on unique string
 * @param negative
 */
export const createNumberId = (negative = true) => {
  const input = createId();
  let hash = 0;
  const len = input.length;

  for (let i = 0; i < len; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }

  if (negative && hash > 0) {
    return hash * -1;
  } else {
    return hash;
  }
};

/**
 * Calculate working days between two dates
 *
 * @param from The from date
 * @param to The to date
 * @returns Calculated number
 */
export const calculateDays = (from: Date | null, to: Date | null): number => {
  const f = forceDate(from);
  const t = forceDate(to);

  if (f == null || t == null) return 0;
  const backInTime = f > t;

  if (f.getDate() === t.getDate() && f.getMonth() === t.getMonth() && f.getFullYear() === t.getFullYear()) return 1;

  const difference_In_Time = Math.round(t.getTime() - f.getTime());
  return Number((difference_In_Time / (1000 * 3600 * 24)).toFixed(0)) + (backInTime ? -1 : 1);
};

/**
 * Force a date to correct type
 *
 * @param value The date like value to force
 */
export const forceDate = (value: Date | string | null | undefined): Date | undefined => {
  if (value == null) return undefined;

  if (typeof value === "string") {
    try {
      return new Date(value);
    } catch (error) {
      console.warn("Can't parse date string: ", value);
      return new Date();
    }
  }
  return value;
};

/**
 * Check if date is between to dates
 * @param current The date to check for is between
 * @param from The from date to check for
 * @param to The to date to check for
 */
export const isdateBetween = (current: Date, from: Date | undefined, to: Date | undefined): boolean => {
  const c = forceDate(current);
  const f = forceDate(from);
  const t = forceDate(to);
  if (c == null || f == null || t == null) return false;
  c.setHours(0, 0, 0, 0);
  f.setHours(0, 0, 0, 0);
  t.setHours(0, 0, 0, 0);
  return c <= t && c >= f;
};
