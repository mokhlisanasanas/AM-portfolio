"use client";

import { useSyncExternalStore } from "react";

function subscribeToHashChange(onStoreChange: () => void) {
  window.addEventListener("hashchange", onStoreChange);

  return () => {
    window.removeEventListener("hashchange", onStoreChange);
  };
}

function getHashSnapshot() {
  return window.location.hash;
}

function getServerHashSnapshot() {
  return "";
}

export function useCurrentHash() {
  return useSyncExternalStore(
    subscribeToHashChange,
    getHashSnapshot,
    getServerHashSnapshot,
  );
}
