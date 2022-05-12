import { createConnection, getConnectionOptions } from "typeorm";
import "dotenv";

interface IConnectionOptions {
    host: string;
}

getConnectionOptions().then((options) => {
    const newOptions = options as IConnectionOptions;
    newOptions.host = process.env.DB_HOST || "database"; // Esta opção deve estar exatamente com o mesmo nome definido no arquivo docker-compose.yml

    createConnection({
        ...options,
    });
});
