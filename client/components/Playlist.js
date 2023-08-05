"use client";

import React from "react";
import {Textarea} from "@nextui-org/react";

export default function Playlist() {
  return (
    <Textarea
      isReadOnly
      className="max-w-l mt-8 bg-eggplant border-rose text-dogwood mt-6 text-xl"
      variant="bordered"
      labelPlacement="outside"
      size="lg"
      radius="md"
      defaultValue="Spotify Playlist Placeholder"
    />
  );
}
