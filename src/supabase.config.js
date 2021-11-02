import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ozpszlbusybrlbciwvwi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTc4MTIyMywiZXhwIjoxOTUxMzU3MjIzfQ.io3jSOcOtvDtKqU12TnIRCBXzFAqOJai6MTb1cqo-cg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
