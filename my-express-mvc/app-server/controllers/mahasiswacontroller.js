const Mahasiswa = require('../models/mahasiswa');

exports.index = async (req, res) => {
  try {
    const mahasiswas = await Mahasiswa.find();
    res.status(200).json(mahasiswas);
    if(!mahasiswas) {
      res.status(400).json({ message: "Collection is Empty" });
    }
    
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users",error });
  }
};

exports.insert = async (req, res) => {
  const mahasiswa = new Mahasiswa({
    nama: req.body.nama,
    npm: req.body.npm,
    email: req.body.email,
    tanggal_lahir: req.body.tanggal_lahir,
    aktif: req.body.aktif
  });

  try {
    const newMahasiswa = await mahasiswa.save();
    res.status(201).json(newMahasiswa);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if (!mahasiswa) {
      return res.status(404).json({ message: 'Mahasiswa not found' });
    }

    if (req.body.nama != null) {
      mahasiswa.nama = req.body.nama;
    }
    if (req.body.npm != null) {
      mahasiswa.npm = req.body.npm;
    }
    if (req.body.email != null) {
      mahasiswa.email = req.body.email;
    }
    if (req.body.tanggal_lahir != null) {
      mahasiswa.tanggal_lahir = req.body.tanggal_lahir;
    }
    if (req.body.aktif != null) {
      mahasiswa.aktif = req.body.aktif;
    }

    const updatedMahasiswa = await mahasiswa.save();
    res.status(200).json(updatedMahasiswa);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.show = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if (!mahasiswa) {
      return res.status(404).json({ message: 'Mahasiswa not found' });
    }
    res.status(200).json(mahasiswa);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.destroy = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if (!mahasiswa) {
      return res.status(404).json({ message: 'Mahasiswa not found' });
    }

    await mahasiswa.remove();
    res.status(200).json({ message: 'Mahasiswa deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};