declare module 'uuid' {
    export = uuid;
}

declare namespace uuid {
    /**
     * Generate a `v5` UUID.
     * @param {string} version The version of the UUID. Default: `v5`.
     * @returns {string} The generated UUID
     */
    function generate(version?: 'v5' | 'v4'): string;
}