import React, { useState, useRef, useEffect } from 'react'
import { handleDragStart } from './DragDrop';
import { handleDrop } from './DragDrop';
import { handleDragOver } from './DragDrop';
import { code } from './StylingClass';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import 'highlight.js/styles/atom-one-dark.css'; // import your preferred style
import { outerLayout } from './LayoutVariable';
import { oneColumnLayout } from './LayoutVariable';
import { twoColumnLayout } from './LayoutVariable';
import { threeColumnLayout } from './LayoutVariable';
import { twoRowLayout } from './LayoutVariable';
import { threeRowLayout } from './LayoutVariable';
import beautify from 'js-beautify';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';


export default function LeftPannel() {

    const [selectedComponent, setselectedComponent] = useState(null);
    const [otherComponentShown, setOtherComponentShown] = useState(false);



    const handleDivClick = (divId) => {
        setselectedComponent(divId);
        if (divId === 'Layout') {
            setOtherComponentShown(true);
        } else {
            setOtherComponentShown(false);
        }
    };


    const componentStyle = {
        borderBottom: selectedComponent === 'Component' || selectedComponent === null ? '2px solid #00ABF0' : '2px solid grey',
        // add other styles as needed
    };

    const layoutStyle = {
        borderBottom: selectedComponent === 'Layout' ? '2px solid #00ABF0' : '2px solid grey',
        // add other styles as needed
    };


    const LayoutComponent = () => {
        return (
            <div className="card_components">
                <div className="LayoutHeading">Building Blocks</div>
                <div id="card7" className="card" draggable="True" onDragStart={handleDragStart}><img className="Block_icon" src='https://img.icons8.com/?size=512&id=bkvFLltNGV8a&format=png' alt='Text icon' draggable="False" />
                </div>
                <div id="card8" className="card" draggable="True" onDragStart={handleDragStart}><img className="Block_icon" src='https://img.icons8.com/?size=512&id=53386&format=png' alt='Image icon' draggable="False" />
                </div>
                <div id="card9" className="card" draggable="True" onDragStart={handleDragStart}><img className="Block_icon" src='https://img.icons8.com/?size=512&id=332&format=png' alt='GIF Image icon' draggable="False" />
                </div>
                <div id="card10" className="card" draggable="True" onDragStart={handleDragStart}><img className="Block_icon" src='https://img.icons8.com/?size=512&id=38831&format=png' alt='Button icon' draggable="False" />
                </div>
            </div>
        );
    };

    //


    const [selectedStyleComponent, setselectedStyleComponent] = useState(null);
    const [otherStyleComponentShown, setOtherStyleComponentShown] = useState(false);



    const handleStyleDivClick = (divId) => {
        setselectedStyleComponent(divId);
        if (divId === 'StyleView') {
            setOtherStyleComponentShown(true);
        } else {
            setOtherStyleComponentShown(false);
        }
    };


    const styleComponentStyle = {
        borderBottom: selectedStyleComponent === 'CodeView' || selectedStyleComponent === null ? '2px solid #00ABF0' : '2px solid grey',
        // add other styles as needed
    };

    const styleLayoutStyle = {
        borderBottom: selectedStyleComponent === 'StyleView' ? '2px solid #00ABF0' : '2px solid grey',
        // add other styles as needed
    };



    //

    const [setdesktopIconShown, setDesktopIconShown] = useState(null);
    const [setmobileIconShown, setMobileIconShown] = useState(false);
    const [isEmailLayoutVisible, setIsEmailLayoutVisible] = useState(false);



    const handleDesktopIconClick = (divId) => {
        setDesktopIconShown(divId);
        setIsEmailLayoutVisible(true);
        if (divId === 'MobileIcon') {
            setMobileIconShown(true);
        } else {
            setMobileIconShown(false);
        }
    };


    const desktopIconStyle = {
        border: setdesktopIconShown === 'DesktopIcon' || setdesktopIconShown === null ? '2px solid #00ABF0' : 'none',
        borderRadius: setdesktopIconShown === 'DesktopIcon' || setdesktopIconShown === null ? '5px' : 'none',
        // add other styles as needed
    };

    const mobileIconStyle = {
        border: setdesktopIconShown === 'MobileIcon' ? '2px solid #00ABF0' : 'none',
        borderRadius: setdesktopIconShown === 'MobileIcon' ? '5px' : 'none',
        // add other styles as needed
    };



    const emailLayoutStyle = {
        width: setdesktopIconShown === 'DesktopIcon' ? '600px' : '100%', // set width to 420px if emailLayout is visible
        width: setdesktopIconShown === 'MobileIcon' ? '420px' : '100%', // set width to 420px if emailLayout is visible
        // add other styles as needed
    };



    //


    const StyleComponent = () => {
        return (
            <div className="code_layout" placeholder='This Layout holds the Style classes for the Email'>
                <SyntaxHighlighter spellCheck="false" className="codeStyle" language="styelsheet" style={dracula}>
                    {code}
                </SyntaxHighlighter>
            </div>
        );
    };



    // Generate a random id for the div tag with class cardOneTd
    const id = `div_${new Date().getTime()}_${Math.floor(Math.random() * 1000000)}`;

    //
    const [selectedHtml, setSelectedHtml] = useState("");
    //


    // Replace the class cardOneTd with the generated id
    const updatedLayout = oneColumnLayout.replace('className="cardOneTd"', `id="${id}"`);

    const [formattedCode, setFormattedCode] = useState("");

    const handleClick = (event) => {
        const selectedElement = document.elementFromPoint(
            event.clientX,
            event.clientY
        );

        if (selectedElement) {
            const selectedId = selectedElement.id;
            if (selectedId) {
                const previouslySelectedElement = document.querySelector(".selected");
                if (previouslySelectedElement) {
                    previouslySelectedElement.classList.remove("selected");
                }

                const codePannel = document.getElementById(selectedId);

                const selectedElement = document.getElementById(selectedId);
                selectedElement.classList.add("selected");
                setSelectedHtml(selectedElement.innerHTML);

                // code to display formatted selected div code to the user
                const formattedCode = selectedElement
                    ? beautify.html(selectedElement.innerHTML, {
                        indent_size: 2,
                        wrap_line_length: 80,
                    })
                    : "";
                setFormattedCode(formattedCode);
                console.log(selectedElement)
            }
        }
    };

    const handleCodeChange = (event) => {
        const selectedElement = document.querySelector(".selected");
        if (selectedElement) {
            selectedElement.innerHTML = event.target.innerText;
            setSelectedHtml(selectedElement.innerHTML);
        }
    };


    ////


    //////


    //////

    const handleMerge = () => {
        console.log(selectedHtml)
    };

    ///////
    const [userCode, setUserCode] = useState('');
    ///////





    return (
        <>
            <div className="component_nav border_div" >
                <div className="component_heading">
                    <div className="comp_head">
                        <div className="comp_head_1" id="Component" style={componentStyle} onClick={() => handleDivClick('Component')}>Layout</div>
                        <div className="comp_head_2" id="Layout" style={layoutStyle} onClick={() => handleDivClick('Layout')}>Component</div>
                    </div>
                    {!otherComponentShown && (
                        <div className="card_components">
                            <div className="LayoutHeading">Basic Layouts</div>
                            <div id="card6" className="card" draggable="True" onDragStart={handleDragStart}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className='cardOneTd'>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="LayoutHeading">Basic Layouts</div>
                            <div id="card1" className="card" draggable="True" onDragStart={handleDragStart}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className='cardOneTd'>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="card2" className="card" draggable="True" onDragStart={handleDragStart}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className='cardTwoTd'>

                                            </td>
                                            <td className='cardTwoTd'>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="card3" className="card" draggable="True" onDragStart={handleDragStart}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className='cardThreeTd'>

                                            </td>
                                            <td className='cardThreeTd'>

                                            </td>
                                            <td className='cardThreeTd'>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="card4" className="card" draggable="True" onDragStart={handleDragStart}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className='cardOneTd'>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='cardOneTd'>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="card5" className="card" draggable="True" onDragStart={handleDragStart}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className='cardOneTd'>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='cardOneTd'>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='cardOneTd'>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    {selectedComponent === 'Layout' && <LayoutComponent />}
                </div>
            </div>
            <div className="email_body">
                <div className="email_layout_change">
                    <div className="screenSizeLogos">
                        <img className="DesktopIcon" id="DesktopIcon" src="https://digacore.com/wp-content/uploads/2022/12/Cybersecurity.gif" style={desktopIconStyle} onClick={() => handleDesktopIconClick('DesktopIcon')} />
                        <img className="MobileIcon" id="MobileIcon" src="https://www.kijkrond.in/testskin/skin/Image_DC47E162_CF29_69DD_4185_9D9BD8E248C2_mobile.gif?v=1588422603615" style={mobileIconStyle} onClick={() => handleDesktopIconClick('MobileIcon')} />
                    </div>
                </div>
                <div className="emailLayout" id='email_body' style={emailLayoutStyle} onClick={handleClick} onDragOver={handleDragOver} onDrop={handleDrop}></div>

            </div>
            <div className="edit_nav border_div">
                <div className="component_heading">
                    <div className="comp_head">
                        <div className="comp_head_1L" id="CodeView" style={styleComponentStyle} onClick={() => handleStyleDivClick('CodeView')}>Layout Code</div>
                        <div className="comp_head_2" id="StyleView" style={styleLayoutStyle} onClick={() => handleStyleDivClick('StyleView')}>Style Classes</div>
                    </div>
                </div>
                <div className="saveLogo">
                    <img className="saveimage" width="40" src='https://cdn-icons-png.flaticon.com/512/954/954564.png' alt='Save icon' draggable="False" onClick={handleMerge} />
                </div>
                {!otherStyleComponentShown && (
                    <>
                        <div className="code_layout" id="code_layout" placeholder='This Layout holds the Code for the selected Element'>
                            <SyntaxHighlighter spellCheck="false" className="code" id="Display-code" language="styelsheet" contentEditable={true} style={dracula} onInput={handleCodeChange} value={formattedCode}>
                                {selectedHtml}
                            </SyntaxHighlighter>
                        </div>
                        <div className="selected-html-panel">
                            <SyntaxHighlighter spellCheck="false" className="code" language="html" style={dracula} value={selectedHtml} >
                                {selectedHtml}
                            </SyntaxHighlighter>
                        </div>
                    </>
                )}
                {selectedStyleComponent === 'StyleView' && <StyleComponent />}
            </div>
        </>
    );
}
