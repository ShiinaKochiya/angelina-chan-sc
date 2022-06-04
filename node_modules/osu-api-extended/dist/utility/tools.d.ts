import { pp_calc_object } from "../types/tools";
/**
 *
 * @param flag Country code
 * @returns {string} Fullname of country
 */
declare const country: (flag: string) => string;
/**
 *
 * @param h300 count of hit 300
 * @param h100 count of hit 100
 * @param h50 count of hit 50
 * @param h0 count of misses
 * @param geki count of hit geki
 * @param katu count of hit katu
 * @param mode osu | fruits | taiko | mania
 * @returns {number} Accuracy number
 */
declare const accuracy: (h300: any, h100: any, h50: any, h0: any, geki: any, katu: any, mode: 'osu' | 'fruits' | 'taiko' | 'mania') => number;
/**
 *
 * @param diff_id Beatmap id
 * @param path Path to folder (without name and extension)
 * @param name File name
 * @returns Download .osu file of beatmap by id
 */
declare const diff_file: (diff_id: number, path: string, name: string | number) => Promise<string>;
/**
 *
 * @param id Beatmap id
 * @param mods Mods number
 * @param combo Max combo
 * @param miss Misses
 * @param acc Accuracy
 * @returns {pp_calc_object | undefined} Json data
 */
declare const pp_calc: (id: number, mods?: number, combo?: number, miss?: number, acc?: number) => Promise<pp_calc_object> | undefined;
/**
 *
 * @param h300 count of hit 300
 * @param h100 count of hit 100
 * @param h50 count of hit 50
 * @param h0 count of misses
 * @param geki count of hit geki
 * @param katu count of hit katu
 * @param mods Mods name or number
 * @param mode osu | fruits | taiko | mania
 * @returns {string} Rank letter
 */
declare const rank: (h300: number, h100: number, h50: number, h0: number, geki: number, katu: number, mods: any, mode: 'osu' | 'fruits' | 'taiko' | 'mania') => string;
export { country, accuracy, diff_file, pp_calc, rank };
