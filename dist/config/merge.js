"use strict";
/*
The merge function accepts source and target objects and copies the properties
defined by the source object to the target,overriding the existing values.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
const merge = (target, source) => {
    Object.keys(source).forEach((key) => {
        if (typeof source[key] === "object" && !Array.isArray(source[key]))
            if (Object.hasOwn(target, key))
                (0, exports.merge)(target[key], source[key]); // Recursively merge objects
            else
                Object.assign(target, source[key]);
        else
            target[key] = source[key];
    });
};
exports.merge = merge;
