import React, { useState } from 'react'
// import PropTypes from 'prop-types'
export default function Textarea(props) {

      const [text , setText] = useState('')

      const [myStyle , setmyStyle] = useState({
         color:'black',
         backgroundColor:"white"
      })
      // let myStyle = {
      //    color:'red',
      //    backgroundColor:'blue'
      // }
      const [Navb , setNavb] = useState({
         backgroundColor:'silver',
         // borderBottom:'2px solid black'
     })
      const [btnmode, setBtnmode] = useState('Enable Dark Mode');
      const [priview , setPriview] = useState({
         padding:'5px',
         textShadow:'2px 2px rgb(254, 219, 219)',
         fontWeight:'bold',
         color:'rgb(0, 0, 0)',
         borderTop:'2px solid black'
      })
      // const actmode =()=>{
      //    if(actmode){
      //       setPriview().toggle();
      //    }
      // }
      const [clr , setclr] = useState({
         color:'black',
         fontWeight:'bold'
      })
      const [border5, setBorder] = useState({
            border:'2px solid black'
      })
     const modech =()=>{
      if(myStyle.color === 'black'){
         setmyStyle({
            color:'white',
            backgroundColor:'#03172b'
            
         })
         props.showAlert("Dark Mode Enabled " , "success")
         setBtnmode('Disable Dark Mode')
         setclr({
            color:'silver',
            fontWeight:'bold'
         })
         setBorder({
            border:'2px solid white'
         })
         setNavb({
            // borderBottom:'2px solid white',
            // color:'white', 
            backgroundColor:'rgb(29, 35, 43)'
         })
         setPriview({
            color:'white',
            fontWeight:'bold',
            borderTop:'2px solid white'

         })
         document.title="TextUtils - Dark Mode"
        setTimeout(() => {
         document.title ="TextUtils - Home"
        }, 2000);
      }
      else{
         props.showAlert("Dark Mode Disabled " , "success")
         setmyStyle({
            color:'black',
            backgroundColor:'white'
         })
         setBtnmode('Enable Dark Mode')
         setclr({
            color:'black',
            fontWeight:'bold'
         })
         setBorder({
            border:'2px solid black'
         })
         setNavb({
            // borderBottom:'2px solid black',
            backgroundColor:'silver'
         })
         setPriview({
            padding:'5px',
            textShadow:'2px 2px rgb(254, 219, 219)',
            fontWeight:'bold',
            color:'rgb(0, 0, 0)',
            borderTop:'2px solid black'
         })
         document.title ="TextUtils - Light Mode"
         setTimeout(() => {
            document.title ="TextUtils - Home"
         }, 2000);
      }
     }
    //color theme functions
    const clr2 = () =>{
         setmyStyle({
            color:'white',
            backgroundColor:'green'
            
         })
         setNavb({
            // borderBottom:'2px solid white',
            color:'white',
            backgroundColor:'rgb(16, 101, 2)'
         })
         setclr({
            color:'silver',
            fontWeight:'bold'
         })
         // setBtnmode({
         //    color:'black'
         // })
    }
    const clr1 = () =>{
         setmyStyle({
            color:'black',
            backgroundColor:'rgb(191, 191, 6)'
            
         })
         setNavb({
            // borderBottom:'2px solid white',
            color:'white',
            backgroundColor:'#8d9201'
         })
         setclr({
            color:'white',
            fontWeight:'bold'
         })

    }
    const firstclr = () =>{
         setmyStyle({
            color:'black',
            backgroundColor:'#04cac3'
            
         })
         setNavb({
            // borderBottom:'2px solid white',
            color:'white',
            backgroundColor:'#067d79'
         })
         setclr({
            color:'white',
            fontWeight:'bold'
         })
    }
    //need no change ..
    const defaultclr = () =>{
      
         setmyStyle({
            color:'black',
            backgroundColor:"white"
            
         })
         setNavb({
            // borderBottom:'2px solid white',
            color:'black',
            backgroundColor:'silver'
         })
         setclr({
            color:'black',
            fontWeight:'bold'
         })
    }




    


    let word = text.split(" ").length;
    let word1 = text.split(" ").length -1 ;

     const handlechange= (event)=>{
        // console.log("Enter text enable")
        setText(event.target.value)
     }
     const makeuppercase =()=>{
      //   console.log(text.split(" ").length -1)
        let newtext = text.toUpperCase();
        setText(newtext);
     }
     const Cleartext =()=>{
      let newtext = '';
      setText(newtext)
     }
     const makelowercase =()=>{
        // console.log("click for make in uppercase")
        let newtext1 = text.toLowerCase();
        setText(newtext1)
     }
     const handlespace =()=>{
      let newtext1 = text.split(/[ ] +/);
      console.log(newtext1)
      setText(newtext1.join(" "))
   }
     const handlecopy =() =>{

      const text = document.getElementById("textarea");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to clipboard" , "success");
     }

     const downloadText =() =>{
      const textContent = text;
      const blob = new Blob([textContent], {type:"text/plain"});
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = "download_text.txt";
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      };
  return (
           <>
                   <div className='bodybox' style={myStyle}>
                                                <nav id="navbar" style={Navb} className="navbar navbar-expand-lg">
                                                      <div className="container-fluid">
                                                         <a style={clr} className={`navbar-brand`} href="/">{props.title}</a>
                                                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                            <span className="navbar-toggler-icon"></span>
                                                         </button>
                                                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                            <li className="nav-item">
                                                               <a style={clr} className="nav-link active" aria-current="page" href="/">Home</a>
                                                            </li>
                                                            <li className="nav-item">
                                                               <a style={clr} className="nav-link" href="/">About</a>
                                                            </li>
                                                            </ul>
                                                            
                                                            <div className='clr mx-2' onClick={firstclr}></div>
                                                            <div className='clr1 mx-2' onClick={clr1}></div>
                                                            <div className='clr2 mx-2' onClick={clr2}></div>                                                       
                                                            <div className='defaultclr mx-5' onClick={defaultclr}><span>Default</span></div> 
                                                            <div className="form-check form-switch">
                                                            <input className="form-check-input" onClick={modech} type="checkbox" role="switch" id="togglebtn"/>
                                                            <label  className="form-check-label"  htmlFor="togglebtn">{btnmode}</label>
                                                            </div>
                                                          
                                                         </div>
                                                      </div>
                                                </nav>
                     <div className='container my-3'>
                        
                        <div className="form-group">
                           <h2 className='my-2'>ChangeText-app</h2>
                           <label id="req" htmlFor="textarea"><strong>Please remove the last space, If there are/is space..!!</strong></label>
                           <textarea style={Navb} className="form-control" value={text} onChange={handlechange} id="textarea" rows="10" placeholder='Enter your text here'></textarea>
                           <button className='btn btn-primary my-1 mx-2' onClick={makeuppercase}>To Uppercase</button>
                           <button className='btn btn-primary my-1 mx-1' onClick={makelowercase}>To Lowercase</button>
                           <button className='btn btn-primary my-1 mx-1' onClick={Cleartext}>Clear Text</button>
                           <button className='btn btn-primary my-1 mx-1' onClick={downloadText}>Download Text</button>
                           <button id="copybtn" className='btn btn-primary my-1 mx-1' onClick={handlecopy}>Copy Text</button>
                           <button id="spacebtn" className='btn btn-danger my-1 mx-1' onClick={handlespace}>Remove Extra Space</button>
                           

                        </div>
                        <div className='container my-3'>
                           <h5 className=' head my-2' style={border5}>{text.length} Charecters & {text.length === 0 ? word1 : word} Words</h5>
                           <p>{text.split(" ").length * 0.5} Seconds to read</p>
                           <h2 className='my-2'>Priview Texts</h2>
                           {/* <div className="form-check form-switch">
                                 <input className="form-check-input"  type="checkbox" role="switch" id="togglebtn"/>
                                 <label className="form-check-label"  htmlFor="togglebtn"></label>
                              </div> */}
                           <p style={priview}  className=' ptag my-2'>{text.length>0 ? text:"Enter something in the textarea avobe to see preview..!! "}</p>
                        </div>
                     </div>
                     {/* <button className='btn btn-primary' onClick={mode}>{btnmode}</button> */}
                   </div>
           </>
  )
}
// Textarea.propTypes ={
//     title: PropTypes.string.isRequired
// }