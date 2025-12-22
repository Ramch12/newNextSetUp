import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";

const useManageTable = ({ data, onEdit = () => {}, onDelete = () => {} }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "Title",
        cell: ({ getValue }) => {
          return <span>{getValue()}</span>;
        },
      },
      {
        accessorKey: "description",
        header: "Description",
        cell: ({ getValue }) => {
          return <span>{getValue()}</span>;
        },
      },
      {
        accessorKey: "createdAt",
        header: "Created On",
        cell: ({ getValue }) => {
          return <span>{getValue()}</span>;
        },
      },
      {
        accessorKey: "author",
        header: "Created By",
        cell: ({ getValue }) => {
          return <span>{getValue()}</span>;
        },
      },
      {
        id: "actions",
        header: "Actions",
        size: 180,
        minSize: 150,
        maxSize: 200,
        cell: ({ row }) => {
          return (
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                type={"button"}
                className={"cursor-pointer"}
                onClick={() => onEdit(row.original.id)}
              >
                <MdModeEditOutline />
              </button>
              <button
                type={"button"}
                className={"cursor-pointer"}
                onClick={() => onDelete(row.original.id)}
              >
                <MdDelete />
              </button>
            </div>
          );
        },
      },
    ],
    [onDelete, onEdit]
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
  });

  return { table };
};

export { useManageTable };
