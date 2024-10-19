'use client'

import { useEffect , useRef } from "react";
import Navbar from "../components/Navbar"
import styles from "./create-component.module.css"

export default function CreateComponent() {

    // function run(){
    //     var htmlCode = document.getElementById("html_code");
    //     var cssCode = document.getElementById("css_code");
    //     var iFrameDisplay = document.getElementById("iFrameDisplay");

    //     iFrameDisplay.innerHTML = htmlCode.value;
    // }

    // const [htmlContent, setHtmlContent] = useState("");
    // const [cssContent, setCssContent] = useState("");
    // const iframeRef = useRef(null);

    const htmlRef = useRef(null);
    const cssRef = useRef(null);
    const iframeRef = useRef(null);

    function run() {
        const htmlCode = htmlRef.current.value;
        const cssCode = cssRef.current.value;

        const iframeDocument = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;

        iframeDocument.open();
        iframeDocument.write(`
            <style>
            body{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            ${cssCode}
            </style>
            <div class="insideIFrame">
            ${htmlCode}
            </div>
        `);
        iframeDocument.close();
    }


    return(
        <>
        <Navbar></Navbar>

        

            <div className={styles.editorContainer}>
                <div className={styles.previewSection}>
                    <iframe className={styles.iframeSelect} id="iFrameDisplay" ref={iframeRef}></iframe>
                </div>
                <div className={styles.editorSection}>
                        <h1>HTML Code</h1>
                        <textarea onKeyUp={run} className={styles.htmlCode} id="html_code" ref={htmlRef}></textarea>
                        <h1>CSS Code</h1>
                        <textarea onKeyUp={run} className={styles.cssCode} id="css_code" ref={cssRef}></textarea>                        
                        
                </div>
            </div>

            <script type="text/javascript">
            const app = document.getElementById(`iFrameDisplay`)
            </script>


            {/* Here the create and submit page of the application Is
            It should only be accessible when then user is logged in,
            so we will need session handler and cookies  */}
        </>
    )
};
