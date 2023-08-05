"use client";

import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utilities";
import { Listbox, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Custom_Filter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  // update the url search params and change to the new URL
  function handleUpdateParams(e: { title: string; value: string }) {
    const newURLpath = updateSearchParams(title, e.value.toLocaleLowerCase());
    router.push(newURLpath);
  }

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div>
          <Listbox.Button>
            <Transition>
              <Listbox.Options></Listbox.Options>
            </Transition>
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  );
};

export default Custom_Filter;
