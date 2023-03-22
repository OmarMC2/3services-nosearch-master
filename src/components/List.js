import React, {useEffect, useState} from 'react'
import Button from "react-bootstrap/cjs/Button";
import mps from '../assets/mps';

const List = ({allDataIn,setAllDataIn,mp, dataUser,  setEmailData,  setShowFindForm, setShowEmailForm, clientId,}) => {
    const [tweetBatch, setTweetBatch]= useState([])
    const [tweet, setTweet] = useState(``)
    const [checkBox0,setCheckBox0] = useState([])
    const [checkBox1,setCheckBox1] = useState([])
    const [checkBox2,setCheckBox2] = useState([])
    const [checkBox3,setCheckBox3] = useState([])
    const [checkBox4,setCheckBox4] = useState([])
    const [checkBox5,setCheckBox5] = useState([])
    const [checkBox6,setCheckBox6] = useState([])
    const [checkBox7,setCheckBox7] = useState([])
    const [checkBox8,setCheckBox8] = useState([])
    const [checkBox9,setCheckBox9] = useState([])
    const [checkBox10,setCheckBox10] = useState([])
    const [checkBox11,setCheckBox11] = useState([])
    const [checkBox12,setCheckBox12] = useState([])
    const [checkBox13,setCheckBox13] = useState([])
    const [checkBox14,setCheckBox14] = useState([])
    const [checkBox15,setCheckBox15] = useState([])
    const [checkBox16,setCheckBox16] = useState([])
    const [checkBox17,setCheckBox17] = useState([])
    const [checkBox18,setCheckBox18] = useState([])
    const [checkBox19,setCheckBox19] = useState([])
    const [checkBox20,setCheckBox20] = useState([])
    const [tweetBox0,setTweetBox0] = useState([])
    const [tweetBox1,setTweetBox1] = useState([])
    const [tweetBox2,setTweetBox2] = useState([])
    const [tweetBox3,setTweetBox3] = useState([])
    const [tweetBox4,setTweetBox4] = useState([])
    const [tweetBox5,setTweetBox5] = useState([])
    const [tweetBox6,setTweetBox6] = useState([])
    const [tweetBox7,setTweetBox7] = useState([])
    const [tweetBox8,setTweetBox8] = useState([])
    const [tweetBox9,setTweetBox9] = useState([])
    const [tweetBox10,setTweetBox10] = useState([])
    const [tweetBox11,setTweetBox11] = useState([])
    const [tweetBox12,setTweetBox12] = useState([])
    const [tweetBox13,setTweetBox13] = useState([])
    const [tweetBox14,setTweetBox14] = useState([])
    const [tweetBox15,setTweetBox15] = useState([])
    const [tweetBox16,setTweetBox16] = useState([])
    const [tweetBox17,setTweetBox17] = useState([])
    const [tweetBox18,setTweetBox18] = useState([])
    const [tweetBox19,setTweetBox19] = useState([])
    const [tweetBox20,setTweetBox20] = useState([])
    
   
    const fetchData = async () => {
        const requestOptions = {
            method: 'POST',
            redirect: 'follow'
        }
        const data = await fetch(`https://payload-demo-tpm.herokuapp.com/tweets/?clientId=${clientId}`, requestOptions);
        const datos = await data.json()
        console.log(data)
        const textoTweet = ` ` + datos.data?.docs[0].Message 

        setTweet(textoTweet)
    }

    useEffect(() => {
        fetchData()
        .catch((error)=>console.error(error))
        
        console.log(tweet, 'tweet state en useeffect')
    },[])


 const click = e => {
        e.preventDefault()
        setAllDataIn([
            ...checkBox0,
            ...checkBox1,
            ...checkBox2,
            ...checkBox3,
            ...checkBox4,
            ...checkBox5,
            ...checkBox6,
            ...checkBox7,
            ...checkBox8,
            ...checkBox9,
            ...checkBox10,
            ...checkBox11,
            ...checkBox12,
            ...checkBox13,
            ...checkBox14,
            ...checkBox15,
            ...checkBox16,
            ...checkBox17,
            ...checkBox18,
            ...checkBox19,
            ...checkBox20,
            
        ])
        setShowEmailForm(false)
        setShowFindForm(true)
    } 

    const clickTweet = e => {
        
        setTweetBatch([
            ...tweetBox0,
            ...tweetBox1,
            ...tweetBox2,
            ...tweetBox3,
            ...tweetBox4,
            ...tweetBox5,
            ...tweetBox6,
            ...tweetBox7,
            ...tweetBox8,
            ...tweetBox9,
            ...tweetBox10,
            ...tweetBox11,
            ...tweetBox12,
            ...tweetBox13,
            ...tweetBox14,
            ...tweetBox15,
            ...tweetBox16,
            ...tweetBox17,
            ...tweetBox18,
            ...tweetBox19,
            ...tweetBox20,
        ])
    } 
    const checkBox0Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox0([
            e.target.value
          ])

          setTweetBox0([
            e.target.name
          ])
        } else {
            
           setCheckBox0([])
           setTweetBox0([])

        }
    }
    const checkBox1Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox1([
            e.target.value
          ])

          setTweetBox1([
            e.target.name
          ])
        } else {
            
           setCheckBox1([])
           setTweetBox1([])

        }
    }
    const checkBox2Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox2([
            e.target.value
          ])
          setTweetBox2([
            e.target.name
          ])
        } else {
            
           setCheckBox2([])
setTweetBox2([])
        }
    }
    const checkBox3Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox3([
            e.target.value
          ])
          setTweetBox3([
            e.target.name
          ])
        } else {
            
           setCheckBox3([])
           setTweetBox3([])

        }
    }
    const checkBox4Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox4([
            e.target.value
          ])
          setTweetBox4([
            e.target.name
          ])
        } else {
            
           setCheckBox4([])
           setTweetBox4([])

        }
    }
    const checkBox5Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox5([
            e.target.value
          ])
          setTweetBox5([
            e.target.name
          ])
        } else {
            
           setCheckBox5([])
           setTweetBox5([])

        }
    }
    const checkBox6Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox6([
            e.target.value
          ])
          setTweetBox6([
            e.target.name
          ])
        } else {
            
           setCheckBox6([])
           setTweetBox6([])

        }
    }
    const checkBox7Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox7([
            e.target.value
          ])
          setTweetBox7([
            e.target.name
          ])
        } else {
            
           setCheckBox7([])
           setTweetBox7([])

        }
    }
    const checkBox8Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox8([
            e.target.value
          ])
          setTweetBox8([
            e.target.name
          ])
        } else {
            
           setCheckBox8([])
           setTweetBox8([])

        }
    }
    const checkBox9Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox9([
            e.target.value
          ])
          setTweetBox9([
            e.target.name
          ])
        } else {
            
           setCheckBox9([])
           setTweetBox9([])

        }
    }
    const checkBox10Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox10([
            e.target.value
          ])
          setTweetBox10([
            e.target.name
          ])
        } else {
            
           setCheckBox10([])
           setTweetBox10([])

        }
    }
    const checkBox11Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox11([
            e.target.value
          ])
          setTweetBox11([
            e.target.name
          ])
        } else {
            
           setCheckBox11([])
           setTweetBox11([])

        }
    }
    const checkBox12Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox12([
            e.target.value
          ])
          setTweetBox12([
            e.target.name
          ])
        } else {
            
           setCheckBox12([])
           setTweetBox12([])

        }
    }
    const checkBox13Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox13([
            e.target.value
          ])
          setTweetBox13([
            e.target.name
          ])
        } else {
            
           setCheckBox13([])
           setTweetBox13([])

        }
    }
    const checkBox14Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox14([
            e.target.value
          ])
          setTweetBox14([
            e.target.name
          ])
        } else {
            
           setCheckBox14([])
           setTweetBox14([])

        }
    }
    const checkBox15Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox15([
            e.target.value
          ])
          setTweetBox15([
            e.target.name
          ])
        } else {
            
           setCheckBox15([])
           setTweetBox15([])

        }
    }
    const checkBox16Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox16([
            e.target.value
          ])
          setTweetBox16([
            e.target.name
          ])
        } else {
            
           setCheckBox16([])
           setTweetBox16([])

        }
    }
    const checkBox17Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox17([
            e.target.value
          ])
          setTweetBox17([
            e.target.name
          ])
        } else {
            
           setCheckBox17([])
           setTweetBox17([])

        }
    }
    const checkBox18Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox18([
            e.target.value
          ])
          setTweetBox18([
            e.target.name
          ])
        } else {
            
           setCheckBox18([])
           setTweetBox18([])

        }
    }
    const checkBox19Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox19([
            e.target.value
          ])
          setTweetBox19([
            e.target.name
          ])
        } else {
            
           setCheckBox19([])
           setTweetBox19([])

        }
    }
    const checkBox20Handled = e => {
        if (e.target.checked === true) {
            
          setCheckBox20([
            e.target.value
          ])
          setTweetBox20([
            e.target.name
          ])
        } else {
            
           setCheckBox20([])
           setTweetBox20([])

        }
    }
    
 useEffect(() => {
        console.log(allDataIn)
        console.log(mp)
    },[allDataIn])
    
    useEffect(()=>{
        
        const tweetText = `.${tweetBatch} + ${tweet}`
        console.log(tweetText)
  
    },[tweetBatch])
    return (
        <div>
            {mp[0] ? (

            <div>
                <div className=''>
                    <h3 className='capitalize-style'> {mp[0]?.name} {mp[0]?.lastName}</h3>
                    
                <input  type="checkbox" value={mp[0]?.email} onClick={checkBox0Handled} id={0} name={mp[0]?.twitter} />
                </div>
                
            </div>
            ) : <></>

            }
            {mp[1] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[1]?.name} {mp[1]?.lastName}</h3>
                <input  type="checkbox" value={mp[1]?.email} onClick={checkBox1Handled} id={1} name={mp[1]?.twitter} />
                    
                </div>
                
            </div>
            ): <></>}

            {mp[2] ? (
                <div>
                <div>
                    <h3 className='capitalize-style'> {mp[2]?.name} {mp[2]?.lastName}</h3>
                    
                </div>
                
                <input  type="checkbox" value={mp[2]?.email} onClick={checkBox2Handled} id={2} name={mp[2]?.twitter} />
            </div>
                ): <></>}

            
            {mp[3] ? (

            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[3]?.name} {mp[3]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[3]?.email} onClick={checkBox3Handled} id={3} name={mp[3]?.twitter} />
            </div>
            ) : <></>

            }
            {mp[4] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[4]?.name} {mp[4]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[4]?.email} onClick={checkBox4Handled} id={4} name={mp[4]?.twitter} />
            </div>

            ) : <></>}
            {mp[5] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[5]?.name} {mp[5]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[5]?.email} onClick={checkBox5Handled} id={5} name={mp[5]?.twitter} />
            </div>

            ) : <></>}
            {mp[6] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[6]?.name} {mp[6]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[6]?.email} onClick={checkBox6Handled} id={6} name={mp[6]?.twitter} />
            </div>

            ) : <></>}
            {mp[7] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[7]?.name} {mp[7]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[7]?.email} onClick={checkBox7Handled} id={7} name={mp[7]?.twitter} />
            </div>

            ) : <></>}
            {mp[8] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[8]?.name} {mp[8]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[8]?.email} onClick={checkBox8Handled} id={8} name={mp[8]?.twitter} />
            </div>

            ) : <></>}
            {mp[9] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[9]?.name} {mp[9]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[9]?.email} onClick={checkBox9Handled} id={9} name={mp[9]?.twitter} />
            </div>

            ) : <></>}
            {mp[10] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[10]?.name} {mp[10]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[10]?.email} onClick={checkBox10Handled} id={10} name={mp[10]?.twitter} />
            </div>

            ) : <></>}
            {mp[11] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[11]?.name} {mp[11]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[11]?.contact} onClick={checkBox11Handled} id={11} name={mp[11]?.twitter} />
            </div>

            ) : <></>}
            {mp[12] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[12]?.name} {mp[12]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[12]?.contact} onClick={checkBox12Handled} id={12} name={mp[12]?.twitter} />
            </div>

            ) : <></>}
            {mp[13] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[13]?.name} {mp[13]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[13]?.contact} onClick={checkBox13Handled} id={13} name={mp[13]?.twitter} />
            </div>

            ) : <></>}
            {mp[14] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[14]?.name} {mp[14]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[14]?.contact} onClick={checkBox14Handled} id={14} name={mp[14]?.twitter} />
            </div>

            ) : <></>}
            {mp[15] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[15]?.name} {mp[15]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[15]?.contact} onClick={checkBox15Handled} id={15} name={mp[15]?.twitter} />
            </div>

            ) : <></>}
            {mp[16] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[16]?.name} {mp[16]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[16]?.contact} onClick={checkBox16Handled} id={16} name={mp[16]?.twitter} />
            </div>

            ) : <></>}
            {mp[17] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[17]?.name} {mp[17]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[17]?.contact} onClick={checkBox17Handled} id={17} name={mp[17]?.twitter} />
            </div>

            ) : <></>}
            {mp[18] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[18]?.name} {mp[18]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[18]?.contact} onClick={checkBox18Handled} id={18} name={mp[18]?.twitter} />
            </div>

            ) : <></>}
            {mp[19] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[19]?.name} {mp[19]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[19]?.contact} onClick={checkBox19Handled} id={19} name={mp[19]?.twitter} />
            </div>

            ) : <></>}
            {mp[20] ? (
            <div>
                <div>
                    <h3 className='capitalize-style'> {mp[20]?.name} {mp[20]?.lastName}</h3>
                    
                </div>
                <input  type="checkbox" value={mp[20]?.contact} onClick={checkBox20Handled} id={20} name={mp[20]?.twitter} />
            </div>

            ) : <></>}
            <div className={'buttons'}>
                <div >
                    
                      
                            <Button
                                className='list-button'
                                size={'sm'}
                                variant={'dark'}
                                target={"blank"}
                                onClick={click}
                            >
                                Enviar email
                            </Button>  
                </div>
                
            </div>
        </div>
        
        
    )
}

export default List;


