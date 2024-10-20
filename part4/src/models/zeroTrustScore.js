import {db} from '../config/db.js';

const ZeroTrustScore = {

  create: async (data) => {
    const [id] = await db('zerotrustscore').insert(data).returning('id');
    return id;
  },

  getAll: async () => {
    return await db('zerotrustscore').select('*');
  },

  getById: async (id) => {
    return await db('zerotrustscore').where({ id }).first();
  },

  update: async (id, data) => {
    return await db('zerotrustscore').where({ id }).update(data);
  },

  delete: async (id) => {
    return await db('zerotrustscore').where({ id }).del();
  },
};

export default ZeroTrustScore;
