// import mysql, { RowDataPacket } from 'mysql2';

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'literatura2016',
//     port: 3306,
//     database: 'teamdb'
// });

// export function execute<T>(query: string, params?: any[]) {
//     return pool.promise().execute<T & RowDataPacket[]>(query, params);
// }

import mysql, { RowDataPacket } from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'literatura2016',
    port: 3306,
    database: 'teamdb'
});

export function execute<T>(query: string, params?: any[]): Promise<[T & RowDataPacket[], mysql.FieldPacket[]]> {
    return pool.promise().execute(query, params) as Promise<[T & RowDataPacket[], mysql.FieldPacket[]]>;
}
