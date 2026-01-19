import { useState } from "react"
import Modal from "../UI/Modal";
import LoginForm from "./LoginForm";
import CreateAccountForm from "./CreateAccountForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

type AuthView = 'login' | 'createAccount' | 'forgotPassword';

type AuthModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function AuthModal({ isOpen, onClose}: AuthModalProps) {
    const [view, setView] = useState<AuthView>('login');
    
    // Reset to login whenever it opens
    function handleClose() {
        setView('login');
        onClose();
    }

    const title =
        view == "login" ? "Login" 
        : view == "createAccount" ? "Create Account" 
        : "Reset Password";

    return (
    <Modal isOpen={isOpen} onClose={handleClose} title={title}>
  
      {view === "login" && (
        <LoginForm onLogin={(email, password) => {
            console.log("login", { email, password });
          }}
          onCreateAccount={() => setView("createAccount")}
          onForgotPassword={() => setView("forgotPassword")}
        />
      )}

      {view === "createAccount" && (
        <CreateAccountForm onBackToLogin={() => setView("login")}
            onSubmit={(email, password) => {
            console.log("create account", { email, password });
          }}
        />
      )}

      {view === "forgotPassword" && (
        <ForgotPasswordForm onBackToLogin={() => setView("login")}
            onSubmit={(email: string) => {
            console.log("reset password", { email });
          }}
        />
      )}
      
    </Modal>
    );
}