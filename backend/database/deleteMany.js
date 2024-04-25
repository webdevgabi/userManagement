module.exports = async ({ collection, condition }) => {
    try {
        const db = global.db.collection(collection);
        const result = await db.deleteMany(condition);

        return result.acknowledged

    } catch (err) { return false }
}