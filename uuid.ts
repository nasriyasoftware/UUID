import _uuid from 'uuid';

/**A module to generate UUIDs */
export module uuid {
    /**
     * Generate a `v5` UUID.
     * @param {string} version The version of the UUID. Default: `v5`.
     * @returns {string} The generated UUID
     */
    export function generate(version: 'v5' | 'v4' = 'v5'): string {
        if (version === 'v5') {
            return _uuid.v5('nasriya.net', _uuid.v4())
        } else if (version === 'v4') {
            return _uuid.v4();
        } else {
            throw new Error(`The provided UUID version (${version}) is not supported.`)
        }
    }
}