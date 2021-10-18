module.exports = [
  {
    name: "production",
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    synchronize: true,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: ["./src/modules/**/infra/typeorm/entities/*.ts"],
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
    cli: { migrationsDir: "./src/shared/infra/typeorm/migrations" },
  },
  {
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    synchronize: false,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: ["./src/modules/**/infra/typeorm/entities/*.ts"],
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
    cli: { migrationsDir: "./src/shared/infra/typeorm/migrations" },
  },
];