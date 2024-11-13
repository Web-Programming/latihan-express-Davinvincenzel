const Mahasiswa = require('../models/mahasiswa');

exports.index = async (req,res) =>{
  const mahasiswas = await Mahasiswa.find();
  try{
    if(!Mahasiswa.length){
      return res.status(200).json({code:200,message:'success',data:[]});

    }
    res.status(201).json({code:200,message"sucess",data:mahasiswas});
  }catch(error){
    res.status(500).json({code:400,message:'failed'});
  }
}

exports.insert = async (req, res) => {
  const mahasiwa = new Mahasiswa({
    nama : req.body.nama,
    npm : req.body.npm,

  });
  try{
    cosn
  }
}