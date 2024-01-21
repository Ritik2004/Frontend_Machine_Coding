import './modal.css'

export default function ModalTest({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="content">
        <div className="header"></div>
        <span onClick={onClose} className="close-modal-icon">&times;</span>
        <h2>{header ? header : "Header"}</h2>
        <div className="body">
          {body ? body : <div>This is a modal body.</div>}
        </div>
        <div className="footer">
            {footer ? footer : <div>This is a footer body.</div>}
        </div>
      </div>
    </div>
  );
}
