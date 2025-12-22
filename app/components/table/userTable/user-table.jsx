import { useManageTable } from "../column";
import { flexRender } from "@tanstack/react-table";
import { apiClient } from "@/app/hooks";

const UserTable = ({ data, handleDelete, handleEdit }) => {
  const { table } = useManageTable({
    data,
    onEdit: handleEdit,
    onDelete: handleDelete,
  });

  return (
    <div>
      <table className="border-collapse w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  console.log("header===>", header.column.columnDef.header);
                  return (
                    <th key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
