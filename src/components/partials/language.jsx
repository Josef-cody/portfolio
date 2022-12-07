import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";


function Language() {
  return (
    <>
      <div className="mt-2 myDetail card">
        <table className="myTable  abilityParcials">
          <thead>
            <th>&nbsp;Language</th>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>
                <i class="fa-solid fa-circle-dot sideBarIcon"></i> Svenska
              </td>
              <td style={{ width: "50%" }}>
                <div style={{ textAlign: "end" }}>
                  <ProgressBar variant="warning" now={70} />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <i class="fa-solid fa-circle-dot sideBarIcon"></i> English
              </td>
              <td style={{ width: "50%" }}>
                <div style={{ textAlign: "end" }}>
                  <ProgressBar variant="warning" now={90} />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <i class="fa-solid fa-circle-dot sideBarIcon"></i> Franch
              </td>
              <td style={{ width: "50%" }}>
                <div style={{ textAlign: "end" }}>
                  <ProgressBar variant="warning" now={60} />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <i class="fa-solid fa-circle-dot sideBarIcon"></i> Chinese
              </td>
              <td style={{ width: "50%" }}>
                <div style={{ textAlign: "end" }}>
                  <ProgressBar variant="warning" now={100} />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <i class="fa-solid fa-circle-dot sideBarIcon"></i> Uyghur
              </td>
              <td style={{ width: "50%" }}>
                <div style={{ textAlign: "end" }}>
                  <ProgressBar variant="warning" now={100} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Language;
