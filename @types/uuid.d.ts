declare module 'nasriya-uuid' {
    export = uuidX;
}

export declare namespace uuidX {
    /**
     * Generate a `v5` UUID.
     * @param {string} version The version of the UUID. Default: `v5`.
     * @returns {string} The generated UUID
     */
    function generate(version?: 'v5' | 'v4'): string;
}