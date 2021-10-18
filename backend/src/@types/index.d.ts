declare namespace NodeJS {
    export interface ProcessEnv
    {
        HOST: string;
        DATABASE_URL: string;
        DB_NAME?: string;
        SECRET: string;
        JWT_EXPIRATION: string
        NODE_ENV: string;
        TYPEORM_CONNECTION: string;
        TYPEORM_HOST: string;
        TYPEORM_PORT: string;
        TYPEORM_USERNAME: string;
        TYPEORM_PASSWORD: string
        TYPEORM_DATABASE: string
    }
}


