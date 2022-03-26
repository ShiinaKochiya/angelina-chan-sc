/**
 *
 * @param mods Mods number
 * @returns {string} Mods name
 */
declare const name: (mods: number) => string;
/**
 *
 * @param mods Mods name
 * @returns {string | undefined} Mods number
 */
declare const id: (mods: string | number) => number | undefined;
export { id, name };
