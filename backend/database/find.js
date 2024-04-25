module.exports = async ({ collection, condition }) => {
    try {
        const db = global.db.collection(collection);
        const result = await db.find(condition).toArray();
        
        if(result.length > 0){
            return result
        }

        return false
    } catch (err) { return false }
}