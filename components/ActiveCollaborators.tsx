import { useOthers } from "@liveblocks/react";
import Image from "next/image";
import React from "react";

function ActiveCollaborators() {
  const others = useOthers();

  const collaborators = others.map((other) => other.info);

  return (
    <ul className="collaborators-list">
      {collaborators.map(({ avatar, color, id, name }) => (
        <li key={id}>
          <Image
            src={avatar}
            alt={name}
            width={100}
            height={100}
            className="inline-block size-8 rounded-full ring-2 ring-dark-100 "
            style={{ border: `3px solid ${color}` }}
          />
        </li>
      ))}
    </ul>
  );
}

export default ActiveCollaborators;
