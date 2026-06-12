import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {

  const { id } = req.body;

  const { data } = await supabase
    .from("issues")
    .select("supports")
    .eq("id", id)
    .single();

  const updated = (data.supports || 0) + 1;

  const { data: updatedData, error } = await supabase
    .from("issues")
    .update({ supports: updated })
    .eq("id", id)
    .select()
    .single();

  if (error) return res.status(500).json(error);

  return res.status(200).json(updatedData);
}