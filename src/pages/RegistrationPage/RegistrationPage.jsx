import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = ({ onRegister }) => {
  return (
    <div>
      <RegistrationForm onRegister={onRegister} />
    </div>
  );
};

export default RegistrationPage;