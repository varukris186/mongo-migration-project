const rules = require(`../seed/${process.env.ENVIRONMENT}/rules.json`)

module.exports = {
  async up(db, client) {
    await Promise.all(rules.map(async (rule)=>{
      await db.collection('rules').insertOne(rule);
    }));
  },

  async down(db, client) {
    await db.collection('rules').remove({})
  }
};

