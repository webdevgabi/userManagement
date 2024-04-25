module.exports = async ({ collection, data, condition }) => {

    try {
        const db = global.db.collection(collection);
        const isUpdated = await db.updateOne(condition, { $set: data });

        if(isUpdated.matchedCount === 0) {
            return false
        }

        return true;

    } catch (err) { return false }
    

}