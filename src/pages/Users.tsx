import { payments } from "@/shared/constants";
import { columns } from "@/shared/DataTable/columns";
import { DataTable } from "@/shared/DataTable/DataTable";





export const Users = () => {
  return (
    <div className="flex-1 gap-6 flex-col flex">
      <h1 className="text-2xl font-semibold">Users</h1>
        <DataTable columns={columns} data={payments} />
    </div>
  );
}