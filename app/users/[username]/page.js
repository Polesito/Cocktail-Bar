import { loadUsers, loadUserByUsername } from "@/lib/users";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function UserPage({ params }) {
  const { username } = params;
  const user = await loadUserByUsername(username);
  if (!user) {
    return notFound();
  }

  const {
    name,
    email,
    picture,
    login,
    location,
    phone,
    dob: { age },
  } = user;
  return (
    <main className="p-4 ml-10">
      <h1>
        {name.first} {name.last}
      </h1>
      <Image
        src={picture.large}
        alt={name.first}
        width={200}
        height={200}
        className="rounded-full mb-4"
      />
      <table>
        <tbody>
          <tr>
            <td>
              <span className="font-bold mr-3">Username:</span>
            </td>
            <td>{login.username}</td>
          </tr>
          <tr>
            <td>
              <span className="font-bold mr-3">Phone:</span>
            </td>
            <td>{phone}</td>
            </tr>
          <tr>
            <td>
              <span className="font-bold mr-3">Age:</span>
            </td>
            <td>{age}</td>
          </tr>
          <tr>
            <td>
              <span className="font-bold mr-3">Email:</span>
            </td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>
              <span className="font-bold mr-3">Adress:</span>
            </td>
            <td>
              {location.street.name} n{location.street.number}, {location.city},{" "}
              {location.state}, {location.country}
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export async function generateStaticParms() {
  const allUsers = await loadUsers(10);
  return allUsers.map((user) => ({
    username: user.login.username,
  }));
}
