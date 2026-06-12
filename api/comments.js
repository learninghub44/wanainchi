import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {

  if (req.method === "POST") {
    const { issue_id, body } = req.body;

    const { data, error } = await supabase
      .from("comments")
      .insert([{ issue_id, body }])
      .select()
      .single();

    if (error) return res.status(500).json(error);

    return res.status(200).json(data);
  }

  if (req.method === "GET") {
    const { issue_id } = req.query;

    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("issue_id", issue_id)
      .order("created_at", { ascending: true });

    if (error) return res.status(500).json(error);

    return res.status(200).json(data);
  }
}