import { Pool } from 'pg';

const connectionString = 'postgres://txtksvhh:91EWJ06b_cHtq4I4y8EDkwx_fuqDjlQD@kesavan.db.elephantsql.com/txtksvhh';

const db = new Pool({ connectionString });

export default db;