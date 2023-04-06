import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

export type ReactionName = 'likes' | 'loves' | 'awards' | 'bookmarks';

export type CountersReactions = { [Key in ReactionName]?: bigint };

interface CountersTable extends CountersReactions {
  slug: string;
  views?: bigint;
}

interface Database {
  counters: CountersTable;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});
