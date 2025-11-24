import { useState, ChangeEvent, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CommisionItem, getCommisionReports } from "../../services/commisionService";
import Loader from "../../common/Loader";
import { toast } from "react-toastify";
import { debounce } from "../../utils/debounce";
import "./index.css";


const HEAD_CELLS: { id: keyof CommisionItem; label: string }[] = [
  { id: "orderId", label: "Order ID" },
  { id: "internalPartnerId", label: "Internal Partner ID" },
  { id: "commissionAmount", label: "Commision Amount" },
  { id: "status", label: "Status" },
];

export default function CommisionReport() {
  const [commisions, setCommisions] = useState<CommisionItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalCount, setTotalCount] = useState(0);

  const fetchData = async (search?: string, newPage = page) => {
    setLoading(true);
    const result = await getCommisionReports({
      search: search,
      page: newPage ?? page,
      limit,
    });
    setLoading(false);
    if (!result.success) {
      toast.error(result.message || "Something went wrong!");
      return;
    }
    setCommisions(result?.data?.commisions || []);
    setTotalCount(result?.data?.aggregated?.totalCount || 0);
  };

  const debouncedFetchData = useCallback(
    debounce((value: string) => {
      setPage(1);
      fetchData(value, 1);
    }, 1000),
    []
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    debouncedFetchData(value);
  };

  const changePage = (newPage: number) => {
    setPage(newPage);
    fetchData(search, newPage);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-light h-100 overflow-hidden p-3">
      <div className="container h-100">
        <div className="card shadow p-4 h-100 d-flex flex-column">
          <h3 className="text-center mb-2">Commision Reports</h3>

          <div
            className="flex justify-end  row mb-3"
            style={{ justifyContent: "end" }}>
            <div className="col-md-4 col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Internal Partner ID"
                value={search}
                onChange={handleSearch}
              />
            </div>
          </div>

          <div className="position-relative flex-grow-1">
            {loading && <Loader />}

            <div
              className="table-responsive overflow-auto"
              style={{ maxHeight: "60vh" }}>
              <table className="table table-bordered table-striped mb-0">
                <thead
                  className="table-dark"
                  style={{ position: "sticky", top: 0, zIndex: 10 }}>
                  <tr>
                    {HEAD_CELLS.map((cell) => (
                      <th key={cell.id} className="bg-dark text-white">
                        {cell.label}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {commisions.length === 0 ? (
                    <tr>
                      <td
                        colSpan={HEAD_CELLS.length}
                        className="text-center py-4">
                        No data found
                      </td>
                    </tr>
                  ) : (
                    commisions.map((row, index) => (
                      <tr key={index}>
                        {HEAD_CELLS.map((cell) => (
                          <td key={cell?.id}>{row[cell?.id] ?? "-"}</td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <button
              className={`btn btn-primary ${
                page <= 1 ? "disabled-btn" : "pointer-btn"
              }`}
              disabled={page <= 1}
              onClick={() => changePage(page - 1)}>
              Previous
            </button>

            <span>
              Page <strong>{page}</strong> /{" "}
              {Math.ceil(totalCount / limit) || totalCount}
            </span>

            <button
              className="btn btn-primary"
              disabled={page >= Math.ceil(totalCount / limit)}
              onClick={() => changePage(page + 1)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
