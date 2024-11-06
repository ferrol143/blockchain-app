import React, { useState } from 'react';
import {
  Card, CardBody, Nav, NavItem, NavLink, Form, Button,
  Spinner, Modal, ModalHeader, ModalBody, ModalFooter, Input
} from 'reactstrap';
import { FaPlus, FaEdit } from 'react-icons/fa';
import { BsUpload, BsXCircle } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

const imgData = [
  { url: 'https://marketplace.canva.com/EAFvH_lijhw/1/0/1600w/canva-hijau-putih-modern-apresiasi-seminar-sertifikat-qpyCKPpe3hc.jpg' },
  { url: 'https://marketplace.canva.com/EAFvH_lijhw/1/0/1600w/canva-hijau-putih-modern-apresiasi-seminar-sertifikat-qpyCKPpe3hc.jpg' },
  { url: 'https://marketplace.canva.com/EAFvH_lijhw/1/0/1600w/canva-hijau-putih-modern-apresiasi-seminar-sertifikat-qpyCKPpe3hc.jpg' },
];

const BadgeWalletCard = (args) => {
  const [modal, setModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggle = () => setModal(!modal);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  const handleAddBadge = async () => {
    if (!selectedFile) return;
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    toggle();
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setOpen(false);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="w-100">
        <Card className="p-3" style={{ borderRadius: '10px', minHeight: '500px', backgroundColor: '#F6F4F4' }}>
          <CardBody>
            {/* Header */}
            {/* <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0 font-weight-bold">Badge Wallet</h5>
              <a href="#" className="text-decoration-none text-success d-flex align-items-center">
                <FaEdit className="me-1" /> Reorder/Edit
              </a>
            </div> */}

            {/* Add Badge Link */}
            <span className="text-decoration-none text-success d-flex align-items-center mb-3" style={{ cursor: 'pointer' }} onClick={toggle}>
              <FaPlus className="me-1" /> Tambah badge dari platform lain
            </span>

            {/* Tabs */}
            <Nav tabs>
              <NavItem>
                <NavLink href="#" className="text-dark active">Alphachain (0)</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="text-dark">Other (0)</NavLink>
              </NavItem>
            </Nav>

            {/* Message */}
            <div className="text-center text-muted mt-4">
              {imgData.length === 0 ? (
                <p>Gunakan opsi +Tambah di atas untuk membagikan lencana Anda dari penyedia lain.</p>
              ) : (
                <div className="row mt-4">
                  {imgData.map((img, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-3 mb-4 position-relative">
                      <img
                        src={img.url}
                        alt={`Lencana ${index + 1}`}
                        className="img-fluid rounded"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div onClick={() => openImageModal(img.url)} className="overlay position-absolute top-0 start-0 h-100 d-flex align-items-center justify-content-center">
                        <Link to="#" className="image-popup text-white fs-3">
                          <MdOutlineArrowOutward size={28} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Add Badge Modal */}
      <Modal isOpen={modal} toggle={toggle} {...args} centered>
        <Form>
          <ModalHeader toggle={toggle}>Tambah Badge</ModalHeader>
          <ModalBody>
            <p>
              Tambahkan kredensial dari penyedia lain dengan mengunggah file. Saat ini, Alphachain mendukung lencana apa pun yang sesuai dengan standar Open Badge 2.0 atau 3.0.
            </p>
            <p>
              <strong>Kami belum mendukung lencana yang tidak sesuai dengan standar Lencana Terbuka, tetapi kami sedang berupaya mengatasinya!</strong>
              Misalnya, jika Anda memiliki lencana dari Microsoft, Oracle, atau Salesforce, Anda belum dapat menambahkannya ke profil Alphachain Anda, tetapi segera periksa kembali.
            </p>
            <div className="text-center py-3">
              <Button color="link" className="text-decoration-none text-primary" tag="label" style={{ cursor: 'pointer' }}>
                <BsUpload size={24} className="me-2" /> Upload credential
                <Input type="file" accept=".png,.svg,.json" onChange={handleFileChange} style={{ display: 'none' }} />
              </Button>
              <p className="small text-muted">File Types: png, svg, or json</p>

              {selectedFile && (
                <div className="d-inline-flex align-items-center border border-primary p-2 rounded mt-2">
                  <span>{selectedFile.name}</span>
                  <Button color="link" onClick={removeFile} className="ms-2 p-0">
                    <BsXCircle size={20} />
                  </Button>
                </div>
              )}
            </div>
          </ModalBody>
          <ModalFooter className="d-flex justify-content-between">
            <Button color="link" onClick={toggle} className="text-success">Cancel</Button>
            <Button color="success" onClick={handleAddBadge} disabled={!selectedFile || isLoading}>
              {isLoading ? <Spinner size="sm" color="light" /> : 'Tambah Badge'}
            </Button>
          </ModalFooter>
        </Form>
      </Modal>

      {/* Image Modal */}
      <Modal isOpen={isOpen} toggle={closeModal} centered size="lg">
        <ModalBody>
          <img src={selectedImage} alt="Selected" className="img-fluid" />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default BadgeWalletCard;