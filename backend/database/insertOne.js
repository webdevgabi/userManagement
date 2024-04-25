module.exports = async ({ collection, data }) => {
    try {
        const db = global.db.collection(collection);
        const result = await db.insertOne(data);

        return result.acknowledged

    } catch (err) { return false }
}