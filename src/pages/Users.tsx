import { payments } from "@/shared/constants";
import { columns } from "@/shared/DataTable/columns";
import { DataTable } from "@/shared/DataTable/DataTable";





export const Users = () => {
  return (
    <div className="flex-1 gap-4 p-4 flex-col flex">
     <DataTable columns={columns} data={payments} />

    </div>
  );
}