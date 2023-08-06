"use client";

import React from "react";
import {Textarea} from "@nextui-org/react";

export default function Playlist() {
  return (
    <Textarea
      // isReadOnly
      minRows={2}
      variant="bordered"
      labelPlacement="outside"
      size="lg"
      radius="md"
      defaultValue="Spotify Playlist Placeholder"
      className="mx-auto max-w-2xl mt-8 bg-eggplant border-rose text-dogwood text-xl"
    />
  );
}