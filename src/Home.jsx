import React,{useEffect,useState} from 'react'
import {Container,Row ,Col,Button,Card,Form} from 'react-bootstrap'
import axios from 'axios';
const Home = () => {
    const [Projects,setProjects]=useState([])

    useEffect(() => {
        axios.get("data.json").then((res) => {
            setProjects(res.data.Projects)
        })
    },[])
return (
        <div>
            <section className='Home' id="Home">
                <Container>
                    <Row className='Row_home'>
                        <Col md="6" sm="12" className='text'>
                        <h2>Air Music air sounds</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Laudantium rem.</p>
                        <Button>Order Now</Button>
                        </Col>
                        <Col>
                            <img src="./img/img (3).jpeg" className='home_image'/>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='About' id="About">
                <div>
                <h2>Air Music air sounds</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Laudantium rem.</p>
                <img src="./img/img__3_-removebg-preview.png" className='about_image'/>
                </div>
            </section>

            <section className='Features' id="Features">
            <h2>Features</h2>
            <Container>
                <Row>
                    {Projects.map((Project) =>{
                        return(
                            <Col Key={Project.id} md="4" sm="12">
                                <Card>
                                <div className='overlay'></div>
                                <img src={Project.img}/>
                                <div className='text'>
                                <h3>{Project.title}</h3>
                                <p>{Project.desc}</p>
                                </div>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            </section>

            <section className='Contact' id="Contact">
            <div className='h2Design'>
                <div className='before'></div>
                <h2>Contact Us</h2>
                <div className='after'></div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Laudantium rem.
            </p>
            <Form>
            <Container>
                    <div className='inpuGroup'>
                        <div>
                            <label>Name</label>
                            <input type="text"  required className='form-control' />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" required className='form-control' />
                        </div>
                    </div>
                    <label>Message</label>
                    <textarea className='form-control'></textarea>
                </Container>
            </Form>
            </section>

            <footer className='footer'>
                <p>Design by Moamen Yasser</p>
            </footer>
        </div>
    )
}

export default Home
