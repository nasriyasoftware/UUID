// Define the module and its functions
declare module 'uuidX' {
    /**
     * Generate a `v5` UUID.
     * @param {string} version The version of the UUID. Default: `v5`.
     * @returns {string} The generated UUID
     */
    export function generate(version?: 'v5' | 'v4'): string;
}