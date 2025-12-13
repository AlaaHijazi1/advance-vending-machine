import AdminHeader from "../features/admin/AdminHeader";
import AdminProductSection from "../features/admin/AdminProductSection";
import AddItemsModel from "../features/admin/addItems/AddItemsModel";
import CounterSection from "../features/admin/CounterSection";
import { useState } from "react";
function AdminPage() {
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      <AdminHeader />
      <main className="admin-container">
        <CounterSection />
        <AdminProductSection openModal={setShowModel} />
      </main>
      {showModel && <AddItemsModel openModal={setShowModel} />}
    </>
  );
}

export default AdminPage;
