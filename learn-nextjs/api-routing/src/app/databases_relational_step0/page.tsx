import { sql } from "@vercel/postgres";

export default async function Cart(): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from users`;

  console.log("🚀 ~ Cart ~ rows:", rows);
  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          <div>Id: {row.id}</div>
          <div>Email: {row.email}</div>
          <div>Password: {row.password}</div>
          <div>Role: {row.role}</div>
        </div>
      ))}
    </div>
  );
}
