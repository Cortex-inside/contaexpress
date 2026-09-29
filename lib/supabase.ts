import { createClient } from "@supabase/supabase-js";

export const supabase =
  typeof window === "undefined"
    ? ({} as ReturnType<typeof createClient>)
    : createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
      );
