//* Libraries imports
import { Slot } from "expo-router";
import { QueryClientProvider } from "@tanstack/react-query";

//* Styles imports
import "../global.css";

//* Utils imports
import { queryClient } from "@/utils/query-client";

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
}
