import  express  from "express";
import { getDaftarPegawai, hapusPegawai, tambahPegawai, ubahPegawai } from "../cotroller/pegawai.js";

const router = express.Router();

// GET
router.get("/pegawai", getDaftarPegawai);
router.post("/pegawai", tambahPegawai);
router.put("/pegawai/:id", ubahPegawai);
router.delete("/pegawai/:id", hapusPegawai);

export default router;