const rulesets = require(`../seed/${process.env.ENVIRONMENT}/ruleset.json`)

module.exports = {
  async up(db, client) {
    await Promise.all(rulesets.map(async (ruleset)=>{
      await db.collection('rulesets').insertOne(ruleset);
    }));
  },

  async down(db, client) {
    await db.collection('rulesets').remove({})
  }
};
