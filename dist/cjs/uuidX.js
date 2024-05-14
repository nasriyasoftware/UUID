"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
/**A module to generate UUIDs */
var uuidX;
(function (uuidX) {
    /**
     * Generate a v5 UUID using the specified namespace and name.
     * @param {string} namespace - The namespace UUID as a string.
     * @param {string} name - The name for which to generate the UUID.
     * @returns {string} The generated v5 UUID.
     */
    function v5(namespace, name) {
        // Convert namespace and name to bytes
        const bytes = utf8Encode(namespace + name);
        // Convert bytes to hexadecimal string
        let hex = '';
        for (let i = 0; i < bytes.length; i++) {
            hex += bytes[i].toString(16).padStart(2, '0');
        }
        // Calculate SHA-1 hash
        const sha1Hash = sha1(hex);
        // Construct UUID
        const parts = [
            sha1Hash.substring(0, 8),
            sha1Hash.substring(8, 4),
            '5' + sha1Hash.substring(12, 3),
            '8' + sha1Hash.substring(15, 3),
            sha1Hash.substring(18, 12)
        ];
        return parts.join('-');
    }
    uuidX.v5 = v5;
    /**
    * Generate a v4 UUID.
    * @returns {string} The generated v4 UUID.
    */
    function v4() {
        const hexDigits = '0123456789abcdef';
        let uuid = '';
        for (let i = 0; i < 36; i++) {
            if (i === 14) {
                uuid += '4'; // Version 4 UUID
            }
            else if (i === 19) {
                uuid += hexDigits.charAt(Math.floor(Math.random() * 4) + 8); // 8, 9, A, or B
            }
            else {
                uuid += hexDigits.charAt(Math.floor(Math.random() * 16));
            }
            if (i === 8 || i === 13 || i === 18 || i === 23) {
                uuid += '-';
            }
        }
        return uuid;
    }
    uuidX.v4 = v4;
    /**
     * Generate a `v5` UUID.
     * @param {string} version The version of the UUID. Default: `v5`.
     * @returns {string} The generated UUID
     * @deprecated This method is deprecated. Use {@link v5} and {@link v4} methods instaead.
     */
    function generate(version = 'v5') {
        throw new Error(`This method is deprecated. Use v5 or v4 methods instead`);
    }
    uuidX.generate = generate;
})(uuidX || (uuidX = {}));
// UTF-8 encode string to bytes
function utf8Encode(str) {
    const utf8 = decodeURIComponent(encodeURIComponent(str));
    const bytes = [];
    for (let i = 0; i < utf8.length; i++) {
        bytes.push(utf8.charCodeAt(i));
    }
    return bytes;
}
// Calculate SHA-1 hash
function sha1(input) {
    const hash = crypto_1.default.createHash('sha1');
    hash.update(input, 'hex');
    return hash.digest('hex');
}
exports.default = uuidX;
