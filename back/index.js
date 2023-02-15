const express = require("express");
const nodeRsa = require("node-rsa");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/post", async (req, res) => {
  let { name, receiver_add, amount, amt_type, message } = req.body;
  

  let publice = receiver_add;


  let key_public = new nodeRsa(publice);

  let encrypt = key_public.encrypt({ name, amount, amt_type, message }, "base64");
  console.log(encrypt);

  return res.status(500).json({ encrypt });
});


// let publice =
//   "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCwQHaW51Hx19kSV6TxYck+FiiEOd7yxs//7Q/MvWlv28utxNDDYMt2cvKBNLle/5BE2E8LPbdLbKteNg8KSxX0qOexh5YqBeArc3LPpHgcFd/2S5yZsvg+IEpGKwYbTVnnt2+KtcgJHEL65FmlsdQMdbGbyFj676PcOcgauqfDjQIDAQAB-----END PUBLIC KEY-----";

console.log("                                                    ");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
