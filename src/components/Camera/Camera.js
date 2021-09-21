// import React, { useState, useRef, useCallback } from 'react'
// import Webcam from "react-webcam";
// import './Camera.css'

// const WebcamCapture = () => {
//     const webcamRef = useRef(null);
//     const [imgSrc, setImgSrc] = useState({
//         showPic: false,
//     });

//     const capture = useCallback(() => {
//         const imageSrc = webcamRef.current.getScreenshot();
//         setImgSrc(imageSrc);
//     }, [webcamRef, setImgSrc]);

//     const showMessage = (bool) => {
//         setImgSrc({
//             showPic: bool
//         });
//     }

//     return (
//         <>

//             <Webcam
//                 audio={false}
//                 ref={webcamRef}
//                 screenshotFormat="image/jpeg"
//             />
//             <button onClick={showMessage.bind(null, true)}>Show</button>
//             <button onClick={capture}>Capture photo</button>
//         </>
//     );
// };

// export default WebcamCapture;