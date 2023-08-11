import Pegawai from "../models/pegawaimodels.js";

export const getDaftarPegawai = async (req, res) => {
    try {
      const daftarPegawai = await Pegawai.findAll();
      res.json(daftarPegawai);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Menambah pegawai baru
  export const tambahPegawai = async (req, res) => {
    const { name, jabatan } = req.body;
    try {
      const pegawaiBaru = await Pegawai.create({ name, jabatan });
      res.json(pegawaiBaru);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Mengubah data pegawai
  export const ubahPegawai = async (req, res) => {
    const { id } = req.params;
    const { name, jabatan } = req.body;
    try {
      const pegawai = await Pegawai.findByPk(id);
      if (pegawai) {
        await pegawai.update({ name, jabatan });
        res.json({ message: 'Data pegawai berhasil diubah' });
      } else {
        res.status(404).json({ message: 'Pegawai tidak ditemukan' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Menghapus pegawai
  export const hapusPegawai = async (req, res) => {
    const { id } = req.params;
    try {
      const pegawai = await Pegawai.findByPk(id);
      if (pegawai) {
        await pegawai.destroy();
        res.json({ message: 'Data pegawai berhasil dihapus' });
      } else {
        res.status(404).json({ message: 'Pegawai tidak ditemukan' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };