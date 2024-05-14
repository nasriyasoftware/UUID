/**A module to generate UUIDs */
declare namespace uuidX {
    /**
     * Generate a v5 UUID using the specified namespace and name.
     * @param {string} namespace - The namespace UUID as a string.
     * @param {string} name - The name for which to generate the UUID.
     * @returns {string} The generated v5 UUID.
     */
    function v5(namespace: string, name: string): string;
    /**
    * Generate a v4 UUID.
    * @returns {string} The generated v4 UUID.
    */
    function v4(): string;
    /**
     * Generate a `v5` UUID.
     * @param {string} version The version of the UUID. Default: `v5`.
     * @returns {string} The generated UUID
     * @deprecated This method is deprecated. Use {@link v5} and {@link v4} methods instaead.
     */
    function generate(version?: 'v5' | 'v4'): string;
}
export default uuidX;
