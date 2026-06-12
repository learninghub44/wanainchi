export default function FilterBar() {

  return (
    <div className="filter-bar">

      <input
        type="text"
        placeholder="Search issues..."
      />

      <select>
        <option>All Categories</option>
        <option>Roads</option>
        <option>Water</option>
        <option>Electricity</option>
        <option>Security</option>
      </select>

      <select>
        <option>All Counties</option>
        <option>Kisii</option>
        <option>Nairobi</option>
        <option>Nakuru</option>
      </select>

      <select>
        <option>All Status</option>
        <option>Pending</option>
        <option>Verified</option>
        <option>Resolved</option>
      </select>

    </div>
  );
}