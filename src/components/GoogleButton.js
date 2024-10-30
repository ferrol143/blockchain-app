import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const GoogleButton = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/dashboard');
  };

  return (
    <Button 
      onClick={handleRedirect}
      className="d-flex mb-4 align-items-center bg-white justify-content-center border border-dark-subtle btn btn-primary px-4 py-2 w-100"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" 
        alt="Google logo" 
        width="20" 
        height="20" 
        className="me-2"
      />
      <span className="text-dark">Google</span>
    </Button>
  );
};

export default GoogleButton;
