import Card from "react-bootstrap/Card";

function SideBar() {
  return (
    <>
      <Card>
        <div className="cardImg">
          <img
            className="myImg"
            variant="top"
            src="imgs/me2.jpg"
            alt="myImage"
          />
        </div>
        <Card.Body>
          <Card.Title>Josef.Abliz</Card.Title>
          <Card.Text>
            <h6>A good cook who trying to be a Web dev</h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="mt-4 myDetail card">
        <table variant="dark" size="md" className="myTable">
          <tbody>
            <tr>
              <td colSpan={2}>
                <i class="fa-solid fa-earth-europe sideBarIcon"></i>&nbsp;
                Residence
              </td>
              <td style={{ textAlign: "end" }}>Sweden</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <i class="fa-solid fa-map-location-dot sideBarIcon"></i>&nbsp;
                Address
              </td>
              <td style={{ textAlign: "end" }}>Tierp</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <i class="fa-solid fa-mountain-sun sideBarIcon"></i>&nbsp; Hobby
              </td>
              <td style={{ textAlign: "end" }}>photography/Music</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SideBar;
