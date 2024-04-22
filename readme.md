# Migrations:

In Sequlize, migration are javascript files that describe changes to your database schema. They allow you to programmatically create, modify, and delete tables and columns.

```javascript
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {},
  async down(queryInterface, Sequelize) {},
};
```

## `queryInterface:`

This is an object provided by Sequlize within migration files. It gives us different methods to interact with the database schema without having to write raw SQL queries. Some common methods are provided by `queryInterface` includes:

- createTable
- dropTable
- addColumn
- removeColumn
- changeColumn

## `Sequelize:`

This is the main Sequelize object that provides access to all Sequelize functionalities. It's usually passed as a parameter to the migration function. It contains various data type (like STRING, INTEGERS, DATA ETC) that you can use to define your table columns, as well as utility functions for database operations.

## `Migration file:`

The migration file itself is divided into two main functions:

- `up:` The function describe the changes that be applied to the database when we run the migration. In this case, it uses the `createTable` method provided by `queryInterface` to create a table with a specified name.

- `down:` This function describes how to revert the changes made by the `up` function. It's essentially the opposite of the `up` function.


```javascript
    projectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Projects',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
```

The `onUpdate` and `onDelete` options in a foreign key constraint define what should happen to the rows in the referencing table (in this case, "ProjectMembers") when the referenced rows in the referenced table (in this case, "Projects" and "Employees") are updated or deleted.

`onUpdate('CASCADE'):` If a referenced row is updated in the parent table (e.g., the id of a project or employee is changed), all corresponding rows in the child table (ProjectMembers) that reference the updated row will also be updated automatically to reflect the new values. This ensures that the relationship between the tables remains consistent.

`onDelete('CASCADE'):` If a referenced row is deleted from the parent table (e.g., a project or employee is deleted), all corresponding rows in the child table (ProjectMembers) that reference the deleted row will also be deleted automatically. This ensures that there are no orphaned records in the child table and maintains referential integrity.
Using 'CASCADE' in both cases helps maintain the integrity of the database relationships by automatically propagating changes or deletions to related records, ensuring that the database remains consistent.
