import Image from "next/image";
import Link from "next/link";

export default function Users({ user }) {
  const { name, picture, login } = user;
  return (
    <Link href={`/users/${login.username}`}>
      <div className="flex flex-row items-center gap-4 p-2 border-b">
        <Image
          src={picture.thumbnail}
          alt={name.first}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h2 className="font-bold leading-5">
            {name.first} {name.last}
          </h2>
          <p>{login.username}</p>
        </div>
      </div>
    </Link>
  );
}
