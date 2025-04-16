"use server";

import { draftMode } from "next/headers";

export const disableDraft = async () => {
  const draft = await draftMode();
  draft.disable();
};
