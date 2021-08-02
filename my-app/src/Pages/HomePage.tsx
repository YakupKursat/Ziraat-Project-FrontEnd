import { AnimatePresence, motion } from "framer-motion";
import { Button, Card } from "react-bootstrap";
import "../Css/AnaSayfa.css";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      {/* <motion.div
        exit={{ opacity: 0, y: -50 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      > */}
      <div id="bgImage" className="d-flex align-items-center">
        <div className="container">
          <motion.div
            drag
            dragConstraints={{
              top: -0,
              left: -0,
              right: 0,
              bottom: 0,
            }}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="d-flex justify-content-center">
              <Card className="col-md-6 text-center my-5 shadow">
                <Card.Body>
                  <Card.Title>Notlarına ulaşmanın en kolay yolu!</Card.Title>
                  <Card.Text>
                    İstediğin dersinin, tüm sınavlarının notlarını
                    depolayabildiğin tamamen ücretsiz bir platform!
                  </Card.Text>
                  <Button variant="outline-primary" id="cardAbout">
                    {" "}
                    <a href="#about" className="text-decoration-none">
                      Hakkında
                    </a>{" "}
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-4" id="about">
          <div className="col-sm-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Lorem</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo obcaecati quod eligendi consequatur corporis
                    deleniti laborum aperiam earum laudantium, neque sed aliquam
                    ab velit soluta aut dolorem repudiandae a blanditiis.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-sm-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Lorem</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo obcaecati quod eligendi consequatur corporis
                    deleniti laborum aperiam earum laudantium, neque sed aliquam
                    ab velit soluta aut dolorem repudiandae a blanditiis.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            {" "}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Lorem</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo obcaecati quod eligendi consequatur corporis
                    deleniti laborum aperiam earum laudantium, neque sed aliquam
                    ab velit soluta aut dolorem repudiandae a blanditiis.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-sm-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Lorem</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo obcaecati quod eligendi consequatur corporis
                    deleniti laborum aperiam earum laudantium, neque sed aliquam
                    ab velit soluta aut dolorem repudiandae a blanditiis.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
