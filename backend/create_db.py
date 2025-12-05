import psycopg2
import os

DB_NAME = os.getenv("POSTGRES_DB", "nihongobot")
DB_USER = os.getenv("POSTGRES_USER", "rootakib")
DB_PASSWORD = os.getenv("POSTGRES_PASSWORD", "1234")
DB_HOST = os.getenv("POSTGRES_HOST", "localhost")
DB_PORT = os.getenv("POSTGRES_PORT", "5432")

def create_database():
    try:
        # Connect to the default database
        conn = psycopg2.connect(
            dbname="postgres",
            user=DB_USER,
            password=DB_PASSWORD,
            host=DB_HOST,
            port=DB_PORT
        )
        conn.autocommit = True
        cur = conn.cursor()
        cur.execute(f"CREATE DATABASE {DB_NAME};")
        print(f"Database '{DB_NAME}' created successfully.")
        cur.close()
        conn.close()
    except psycopg2.errors.DuplicateDatabase:
        print(f"Database '{DB_NAME}' already exists.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    create_database()
