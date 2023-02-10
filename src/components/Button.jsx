import React from "react";
function Button({ setPage, page, totalPage }) {
  return (
    <div className="flex items-center justify-center pb-6 pt-4">
      <div
        onClick={() => setPage(page - 1)}
        className={page <= 1 ? "btn" : "btn_active"}
      >
        Previous
      </div>

      <div className="mr-4 ml-4 text-slate-50">
        {page} / {totalPage}
      </div>

      <div
        onClick={() => setPage(page + 1)}
        className={page >= totalPage ? "btn" : "btn_active"}
      >
        Next
      </div>
    </div>
  );
}

export default Button;