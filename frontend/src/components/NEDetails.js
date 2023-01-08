import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "react-modal";
import "./Ne.css";

// const NEDetails = ({ nerdoc }) => {
//   return (
//     <Card className="customCard" style={{ width: '18rem' }}>
//         <Card.Header><strong>{nerdoc.api_docid}</strong></Card.Header>
//         <Card.Body>
//             <Card.Title>{nerdoc.document_text}</Card.Title>
//             <Card.Text><b>Text from Doc || Named Entity</b></Card.Text>
//             {nerdoc.named_entities.map((doc) => (
//               <Card.Text> {doc[0]} || {doc[1]}</Card.Text>
//             ))}
//         </Card.Body>
//         <Button variant="primary">View all Entities</Button>
//     </Card>
//   )
// }

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "4px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function NEDetails({ nerdoc }) {
  const [showTable, setShowTable] = React.useState(false);
  function showTableFn() {
    setShowTable(!showTable);
  }
  const [showModal, setShowModal] = React.useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <Box sx={{ maxWidth: 360, margin: 10 }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 4,
          backgroundColor: "#bfb8d6",
          boxShadow: "none",
          minHeight: 250,
          minWidth: 350,
          maxHeight: 320,
        }}
      >
        {/* {card} */}
        <React.Fragment>
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              sx={{
                padding: "5px",
                backgroundColor: "#0C6AAB",
                borderRadius: 2,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Doc ID: {nerdoc.api_docid}
            </Typography>

            <Typography
              sx={{ fontSize: 15, marginTop: 2, fontWeight: "bold" }}
              color="text.primary"
              gutterBottom
            >
              {/* {nerdoc.named_entities.map((doc) => (
                <>
                  {doc[0] + " || " + doc[1]} <br />
                </>
              ))} */}
              {nerdoc.case_name}
            </Typography>
          </CardContent>
          <center>
            <div className="button-container">
              <Button
                variant="contained"
                size="small"
                style={{
                  maxWidth: "130px",
                  maxHeight: "65px",
                  minWidth: "130px",
                  minHeight: "65px",
                }}
                onClick={openModal}
              >
                View Named Entities
              </Button>
              <Modal isOpen={showModal} onRequestClose={closeModal}>
                <button onClick={closeModal}>Close</button>
                <h4>Document ID:{nerdoc.api_docid}</h4>
                <h4>Legal Source:{nerdoc.legal_source}</h4>
                <h4>Case Name:{nerdoc.case_name}</h4>
                <table style={{ border: "1px solid" }}>
                  <thead>
                    <tr>
                      <th style={{ border: "1px solid" }}>Legal Content</th>
                      <th style={{ border: "1px solid" }}>
                        Legal Named Entity
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ border: "1px solid" }}>
                    {nerdoc.named_entities.map((doc) => (
                      <>
                        <tr>
                          <td
                            style={{ border: "1px solid", textAlign: "center" }}
                          >
                            {doc[0]}
                          </td>
                          <td
                            style={{ border: "1px solid", textAlign: "center" }}
                          >
                            {doc[1]}
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </Modal>
            </div>
          </center>
        </React.Fragment>
      </Card>
    </Box>
  );
}
