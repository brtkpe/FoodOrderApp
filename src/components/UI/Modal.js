import ReactDOM from "react-dom";

const Backdrop = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-gray-500/70 z-20 backdrop-blur-sm"></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-1/4 left-1/2 w-[90%] -translate-x-1/2 bg-gray-800 p-4 rounded-xl shadow-sm z-30 animate-slideDown md:w-[40rem]">
      <div>{props.children}</div>
    </div>
  );
};

export default function Modal(props) {
  return <>
      {ReactDOM.createPortal(<Backdrop/>, document.getElementById('overlays'))}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
  </>;
}
