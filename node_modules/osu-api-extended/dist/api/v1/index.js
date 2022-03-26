"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replay = exports.match = exports.user = exports.beatmap = exports.set_key = exports._mode = void 0;
const mods_1 = require("../../utility/mods");
const request_1 = require("../../utility/request");
const beatmap_1 = __importDefault(require("./beatmap"));
const user_1 = __importDefault(require("./user"));
const scores_1 = __importDefault(require("./scores"));
const best_1 = __importDefault(require("./best"));
const recent_1 = __importDefault(require("./recent"));
const replay_1 = __importDefault(require("./replay"));
const match_1 = __importDefault(require("./match"));
const fs_1 = __importDefault(require("fs"));
const request = (0, request_1.namespace)('https://osu.ppy.sh/api/');
let cache_key = '';
exports._mode = [
    'osu',
    'taiko',
    'fruits',
    'mania',
];
const set_key = (key) => cache_key = key;
exports.set_key = set_key;
exports.beatmap = {
    diff: async (diff_id, obj = {}) => {
        const params = {
            b: diff_id,
            m: exports._mode.indexOf(obj.mode),
            a: obj.converted,
            h: obj.hash,
            since: obj.since,
            mods: (0, mods_1.id)(obj.mods),
            limit: obj.limit,
        };
        const data = await request('get_beatmaps', {
            method: 'GET',
            params: { ...{ k: cache_key }, ...params },
        });
        if (data.length > 0)
            return (0, beatmap_1.default)(data);
        return null;
    },
    set: async (set_id, obj = {}) => {
        const params = {
            s: set_id,
            m: exports._mode.indexOf(obj.mode),
            a: obj.converted,
            h: obj.hash,
            since: obj.since,
            mods: (0, mods_1.id)(obj.mods),
            limit: obj.limit,
        };
        const data = await request('get_beatmaps', {
            method: 'GET',
            params: { ...{ k: cache_key }, ...params },
        });
        if (data.length > 0)
            return (0, beatmap_1.default)(data);
        return null;
    },
    user: async (user, obj = {}) => {
        const params = {
            u: user,
            m: exports._mode.indexOf(obj.mode),
            a: obj.converted,
            h: obj.hash,
            since: obj.since,
            mods: (0, mods_1.id)(obj.mods),
            type: obj.type,
            limit: obj.limit,
        };
        const data = await request('get_beatmaps', {
            method: 'GET',
            params: { ...{ k: cache_key }, ...params },
        });
        if (data.length > 0)
            return (0, beatmap_1.default)(data);
        return null;
    },
    scores: async (diff_id, obj = {}) => {
        const params = {
            b: diff_id,
            u: obj.user,
            m: exports._mode.indexOf(obj.mode),
            mods: (0, mods_1.id)(obj.mods),
            type: obj.type,
            limit: obj.limit,
        };
        const data = await request('get_scores', {
            method: 'GET',
            params: { ...{ k: cache_key }, ...params },
        });
        if (data.length > 0)
            return (0, scores_1.default)(data, params.m);
        return null;
    },
};
exports.user = {
    get: async (user, obj = {}) => {
        const params = {
            u: user,
            m: exports._mode.indexOf(obj.mode),
            type: obj.type,
            event_days: obj.event_days,
        };
        const data = await request('get_user', {
            method: 'GET',
            params: { ...{ k: cache_key }, ...params },
        });
        if (data.length > 0)
            return (0, user_1.default)(data);
        return null;
    },
    scores: {
        best: async (user, obj = {}) => {
            const params = {
                u: user,
                m: exports._mode.indexOf(obj.mode),
                type: obj.type,
            };
            const data = await request('get_user_best', {
                method: 'GET',
                params: { ...{ k: cache_key }, ...params },
            });
            if (data.length > 0)
                return (0, best_1.default)(data, obj.mode);
            return null;
        },
        recent: async (user, obj = {}) => {
            const params = {
                u: user,
                m: exports._mode.indexOf(obj.mode),
                type: obj.type,
                limit: obj.limit,
            };
            const data = await request('get_user_recent', {
                method: 'GET',
                params: { ...{ k: cache_key }, ...params },
            });
            if (data.length > 0)
                return (0, recent_1.default)(data, obj.mode);
            return null;
        },
    },
};
const match = async (id) => {
    const params = { mp: id };
    const data = await request('get_match', {
        method: 'GET',
        params: { ...{ k: cache_key }, ...params },
    });
    if (data.match != 0)
        return (0, match_1.default)(data);
    return null;
};
exports.match = match;
const replay = async (obj = {}, dest, file) => {
    let _file = '';
    if (dest)
        _file = `${dest}${dest.endsWith('/') ? '' : '/'}${file ? `${file}.osr` : 'replay.osr'}`;
    else
        _file = 'replay.osr';
    if (fs_1.default.existsSync(_file))
        throw new Error(`Replay ${_file} already exists`);
    const params = {
        b: obj.diff_id,
        u: obj.user,
        m: exports._mode.indexOf(obj.mode),
        s: obj.score_id,
        type: obj.type,
        mods: obj.mods,
    };
    const data = await request('get_replay', {
        method: 'GET',
        params: { ...{ k: cache_key }, ...params },
    });
    const score = await exports.beatmap.scores(obj.diff_id, {
        user: obj.user,
        mode: obj.mode,
        mods: obj.mods,
        type: obj.type,
    });
    if (!score)
        throw new Error(`Score not founded. Check your params: ${JSON.stringify(obj)}`);
    const map = await exports.beatmap.diff(obj.diff_id);
    if (!map)
        throw new Error(`Beatmap not founded. Check your beatmap id: ${obj.diff_id}`);
    return (0, replay_1.default)(data, map, score, obj.diff_id, obj.mods, _file);
};
exports.replay = replay;
//# sourceMappingURL=index.js.map