import React,{Component} from 'react';
import { Container, Button, OverlayTrigger, Form, Image, Col,Row, Tab} from 'react-bootstrap';
import Tables from './tableSiswa'
import axios,{post} from 'axios'


const Modal = props => {
    
     
     const divStyle = { 
          display: props.displayModal ? 'block' : 'none'
     };
     function closeModal(e) {
        e.stopPropagation()
        props.closeModal()
     }
     const yai ={
      marginLeft: "10px",

        }

        const text ={
            marginLeft : "10px",
            width : "300px",
            height : "40px"
        }
        const img ={
            width: "150px",
            height: "150px",
            position : "absolute",
            border : "1px",
            marginLeft : "350px",
            marginTop : "20px",
            borderRadius : '10px'
        }
        const inpbtn ={
            position: "absolute",
            width : "270px",
            height :"25px",
            marginLeft: "350px",
            marginTop : "210px",

        }
        const aaa={
            width :'40px'
          }
          const bb={
            marginRight: '10px'
          }
        
     return (
       <div>
      <div 
      className="modal"
      onClick={closeModal}
      style={divStyle} >
       <div 
          className="modal-content"
          onClick={ e => e.stopPropagation() } >
          <span 
              className="close"
              onClick={ closeModal }>&times;
          </span>
      
          <popover id="popover-basic" title="Popover top" >
             <Form  /*onSubmit={this.onSubmit}*/ encType="multipart/form-data">
             <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image /*src={this.state.uuu}*/ style={img} rounded multiple/>
                </Col>
              </Row>
            </Container>
              <div className="input-group" style={inpbtn}>
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01">
                    Upload
                  </span>
                </div>
                <div >
                  <input
                    // value={this.onChangeNama}
                    // onChange={this.handleChange}
                    style={aaa}
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                    multiple
                  />
                  <label className="custom-file-label" htmlFor="inputGroupFile01" style={bb}>
                    Choose file
                  </label>
                </div>
              </div>
              <Form.Group controlId="formBasicNama">
                <Form.Label style={yai}>Nama</Form.Label>
                <Form.Control
                  type="text" 
                  placeholder="Masukan Nama" 
                  name="nama"
                  style={text}
                  // value={this.state.nama}
                  // onChange={this.onChangeNama} 
                   />
              </Form.Group>
              <Form.Group controlId="formBasicAlamat">
                <Form.Label style={yai}>Alamat</Form.Label>
                <Form.Control  
                  type="text" 
                  placeholder="Masukan Alamat" 
                  name="alamat"
                  style={text}
                  // value={this.state.alamat}
                  // onChange={this.onChangeAlamat}  
                  />
              </Form.Group>
              <Form.Group controlId="formBasicAlamat">
                <Form.Label style={yai}>Kelas</Form.Label>
                <Form.Control 
                   
                  type="text" 
                  placeholder="Kelas" 
                  name="kelas"
                  style={text}
                  // value={this.state.kelas}
                  // onChange={this.onChangeKelas} 
                   />
              </Form.Group>
              <Form.Group>
              
              </Form.Group>
              
              <br/>
              <Button variant="primary" style={yai} type="submit"  >
                Submit
              </Button>
            </Form>
          </popover>
        
       </div>
    </div>
    </div>
     );
     
     }
export default Modal;