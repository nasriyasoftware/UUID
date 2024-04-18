import uuid from 'uuid';
/**
 * A class to generate UUID strings
 */
class UUID {
    /**
     * Generate a `v5` UUID.
     * @returns {string} The generated UUID
     */ 
    static generate() {
        return uuid.v5('nasriya.net', uuid.v4())
    }    
}

export default UUID;