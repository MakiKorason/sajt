import { Button, Card } from "react-bootstrap"
import './Nesto.css'
// import { useAnimationFrame } from "motion/react"
// import { useRef } from "react"
const Nesto=()=>{
    const handleShowEvent1 = () => {
   
      };
      // const ref = useRef<HTMLDivElement>(null)

      // useAnimationFrame((t) => {
      //     if (!ref.current) return
  
      //     const rotate = Math.sin(t / 10000) * 200
      //     const y = (1 + Math.sin(t / 1000)) * -50
      //     ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
      // })
    return(

        
     
        <div className="card-container">
        <Card className="events-card">
          <div className="animated-line"></div>
          <Card.Body>
            <h1 className="container-title">
              Дани словенске <br />писмености и културе 
            </h1>
            <Card.Img  />
            <p className="container-text">
              <br />
              Дани словенске писмености и културе обележавају се у недељи када се
              прославља дан Светих Ћирила и Методија, 24. мај.
            </p>
            <br />
            <Button className="btn btn-secondary" onClick={handleShowEvent1}>
              Детаљније
            </Button>
          </Card.Body>
        </Card>  
          {/* <div className="cube" ref={ref}>
                <div className="side front" />
                <div className="side left" />
                <div className="side right" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side back" />
            </div> */}
         
      </div>
    )

}
export default Nesto


