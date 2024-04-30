declare module 'uuidX' {
    /**
     * Generate a v5 UUID using the specified namespace and name.
     * @param namespace - The namespace UUID as a string.
     * @param name - The name for which to generate the UUID.
     * @returns The generated v5 UUID.
     */
    export function v5(namespace: string, name: string): string;

    /**
     * Generate a v4 UUID.
     * @returns The generated v4 UUID.
     */
    export function v4(): string;

    /**
     * @deprecated This method is deprecated. Use `v5` or `v4` methods instead.
     */
    export function generate(version?: 'v5' | 'v4'): string;
}