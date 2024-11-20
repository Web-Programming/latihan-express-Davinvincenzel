const Mahasiswa = require('../models/mahasiswa');

exports.index = async (req, res) => {
  try {
    const mahasiswas = await Mahasiswa.find();
    if (!mahasiswas.length) {
      return res.status(200).json({ code: 200, message: 'success', data: [] });
    }
    res.status(200).json({ code: 200, message: 'success', data: mahasiswas });
  } catch (error) {
    res.status(500).json({ code: 400, message: 'failed' });
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
    res.status(201).json({ code: 201, message: 'success', data: newMahasiswa });
  } catch (error) {
    res.status(400).json({ code: 400, message: 'failed', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if (!mahasiswa) {
      return res.status(404).json({ code: 404, message: 'Mahasiswa not found' });
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
    res.status(200).json({ code: 200, message: 'success', data: updatedMahasiswa });
  } catch (error) {
    res.status(400).json({ code: 400, message: 'failed', error: error.message });
  }
};

exports.show = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if (!mahasiswa) {
      return res.status(404).json({ code: 404, message: 'Mahasiswa not found' });
    }
    res.status(200).json({ code: 200, message: 'success', data: mahasiswa });
  } catch (error) {
    res.status(500).json({ code: 500, message: 'failed', error: error.message });
  }
};

exports.destroy = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if (!mahasiswa) {
      return res.status(404).json({ code: 404, message: 'Mahasiswa not found' });
    }

    await mahasiswa.remove();
    res.status(200).json({ code: 200, message: 'Mahasiswa deleted' });
  } catch (error) {
    res.status(500).json({ code: 500, message: 'failed', error: error.message });
  }
};