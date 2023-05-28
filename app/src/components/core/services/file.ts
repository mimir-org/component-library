import { decode as atob } from "base-64";

/**
 * Read data from file and create a base64 string
 *
 * @param file the file that should be converted
 */
export const toBase64 = (file: File) =>
  new Promise<string | ArrayBuffer | null>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

/**
 * Convert base64 string to a BLOB
 *
 * @param base64 Pass base64 data to convert into the BLOB
 */
export const toBlob = (base64: string) => {
  // Split into two parts
  const parts = base64.split(";base64,");

  // Hold the content type
  const imageType = parts[0].split(":")[1];

  // Decode Base64 string
  const decodedData = atob(parts[1]);

  // Create UNIT8ARRAY of size same as row data length
  const uInt8Array = new Uint8Array(decodedData.length);

  // Insert all character code into uInt8Array
  for (let i = 0; i < decodedData.length; ++i) {
    uInt8Array[i] = decodedData.charCodeAt(i);
  }

  // Return BLOB image after conversion
  return new Blob([uInt8Array], { type: imageType });
};
