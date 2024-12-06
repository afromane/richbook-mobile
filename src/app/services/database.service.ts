import { Injectable, signal, WritableSignal } from '@angular/core';
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from '@capacitor-community/sqlite';
import { User } from '../models/user-model';

const DB_USERS = 'learning';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private sqliteConnection!: SQLiteConnection;
  private db!: SQLiteDBConnection;
  private user: WritableSignal<User[]> = signal<User[]>([]);

  constructor() {
    this.sqliteConnection = new SQLiteConnection(CapacitorSQLite);
  }
  async initializeDatabase() {
    this.db = await this.sqliteConnection.createConnection(
      DB_USERS,
      false,
      'no-encryption',
      1,
      false
    );
    await this.db.open();

    // Create users table schema
    
    this.db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT,
        lastName TEXT,
        email TEXT UNIQUE,
        password TEXT,
        gender TEXT
      );
    `);

    await this.sqliteConnection.closeConnection(DB_USERS, false);
  }
  async allUsers(){
    const users =  await this.db.query('SELECT * FROM USERS');
    this.user.set(users.values || [ ]);
  }
  

  async addUser( firstName: string, lastName: string, email: string, password: string, gender: string ){
     this.db = await this.sqliteConnection.createConnection(DB_USERS, false, "no-encryption", 1, false);
    await this.db.open();
    const query =`INSERT INTO users (firstName, lastName, email, password, gender) 
                        VALUES (${firstName}, ${lastName}, ${email}, ${password}, ${gender});`;
       var result!:any
    return await this.db.query(query);
    //await this.sqliteConnection.closeConnection(DB_USERS, false);
     
  }
  async verifyCredentials(email: string, password: string): Promise<boolean> {
     const db = await this.sqliteConnection.createConnection(DB_USERS, false, "no-encryption", 1, false);
    await db.open();
     var result!:any
     result = await db.query(
      `SELECT * FROM users WHERE email = ? AND password = ?;`,
      [email, password]
    );

  
    await this.sqliteConnection.closeConnection(DB_USERS,false);
    return result.values?.length > 0; // Returns true if the user exists
  }
}
