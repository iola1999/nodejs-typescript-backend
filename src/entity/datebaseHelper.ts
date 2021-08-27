import { Connection, createConnection, getConnection } from "typeorm";

const getConnectionHelper = async (connectionName: string): Promise<Connection> => {
    let connection: Connection;
    try {
        connection = getConnection(connectionName);
    } catch (e) {
        connection = await createConnection(connectionName);
    }
    return connection;
};

export default getConnectionHelper;
