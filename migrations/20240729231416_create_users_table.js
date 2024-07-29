export const up = function(knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('username').notNullable().unique();
      table.string('password').notNullable();
    });
  };
  
  export const down = function(knex) {
    return knex.schema.dropTable('users');
  };
  
