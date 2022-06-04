"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("../../utility/tools");
const mods_1 = require("../../utility/mods");
const format = (data, mode) => {
    const info = [];
    for (let i = 0; i < data.length; i++) {
        const d = data[i];
        const hits = {
            300: +d.count300,
            geki: +d.countgeki,
            100: +d.count100,
            katu: +d.countkatu,
            50: +d.count50,
            0: +d.countmiss,
        };
        const score = {
            date: d.date,
            beatmap: +d.beatmap_id,
            rank: d.rank,
            user: {
                id: +d.user_id,
            },
            score: {
                total: +d.score,
            },
            combo: {
                max: +d.maxcombo,
                full: +d.perfect,
            },
            hits,
            mods: {
                id: +d.enabled_mods,
                name: (0, mods_1.name)(+d.enabled_mods),
            },
            accuracy: (0, tools_1.accuracy)(+d.count300, +d.countgeki, +d.count100, +d.countkatu, +d.count50, +d.countmiss, mode),
        };
        info.push(score);
    }
    ;
    return info;
};
exports.default = format;
//# sourceMappingURL=recent.js.map