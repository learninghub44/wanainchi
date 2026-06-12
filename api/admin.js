import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {

  try {

    // =========================
    // GET ALL ADMIN DATA
    // =========================
    if (req.method === "GET") {

      const { type } = req.query;

      // DASHBOARD STATS
      if (type === "stats") {

        const { data: issues } = await supabase
          .from("issues")
          .select("status");

        const { data: users } = await supabase
          .from("users")
          .select("id");

        const stats = {
          total_issues: issues.length,
          pending: issues.filter(i => i.status === "pending").length,
          in_progress: issues.filter(i => i.status === "in_progress").length,
          resolved: issues.filter(i => i.status === "resolved").length,
          rejected: issues.filter(i => i.status === "rejected").length,
          total_users: users.length
        };

        return res.status(200).json(stats);
      }

      // ALL ISSUES FOR ADMIN
      if (type === "issues") {

        const { data, error } = await supabase
          .from("issues")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) return res.status(500).json(error);

        return res.status(200).json(data);
      }

      // ALL USERS
      if (type === "users") {

        const { data, error } = await supabase
          .from("users")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) return res.status(500).json(error);

        return res.status(200).json(data);
      }

      return res.status(400).json({ error: "Invalid admin query type" });
    }

    // =========================
    // UPDATE ISSUE STATUS
    // =========================
    if (req.method === "PATCH") {

      const { id, status, note } = req.body;

      const { data, error } = await supabase
        .from("issues")
        .update({ status })
        .eq("id", id)
        .select()
        .single();

      if (error) return res.status(500).json(error);

      // ADD TO TIMELINE
      await supabase.from("timeline").insert([
        {
          issue_id: id,
          status,
          note: note || "Status updated"
        }
      ]);

      return res.status(200).json(data);
    }

    // =========================
    // DELETE ISSUE
    // =========================
    if (req.method === "DELETE") {

      const { id } = req.body;

      const { error } = await supabase
        .from("issues")
        .delete()
        .eq("id", id);

      if (error) return res.status(500).json(error);

      return res.status(200).json({ message: "Issue deleted" });
    }

    return res.status(405).json({ error: "Method not allowed" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}