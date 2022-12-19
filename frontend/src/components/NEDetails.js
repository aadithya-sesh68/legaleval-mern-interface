import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
              {nerdoc.api_docid + ": " + nerdoc.document_text}
            </Typography>
            <Typography
              sx={{ fontSize: 15, marginTop: 2, fontWeight: "bold" }}
              color="text.primary"
              gutterBottom
            >
              Text from Doc || Named Entity
            </Typography>
            <Typography
              sx={{ fontSize: 15, marginTop: 2, fontWeight: "bold" }}
              color="text.primary"
              gutterBottom
            >
              {nerdoc.named_entities.map((doc) => (
                <>
                  {doc[0] + " || " + doc[1]} <br />
                </>
              ))}
            </Typography>
          </CardContent>
          {/* <CardActions>
      {/* <Button variant="contained" size="small" component={Link} to={"/home"}>
        Click here to see all Rhetorical Roles
      </Button> }
      <Button variant="contained" size="small">
        Click here to see all Rhetorical Roles
      </Button>
    </CardActions> */}
        </React.Fragment>
      </Card>
    </Box>
  );
}
