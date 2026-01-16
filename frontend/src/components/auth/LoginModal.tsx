import Modal from "../ui/Modal"

type LoginModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Login">
            <p className = "test-sm text-gray-600">
                Login form goes here next.
            </p>
        </Modal>
    );
}